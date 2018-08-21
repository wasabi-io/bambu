import {Props} from "wasabi-common";

const RE_MEDIA_QUERY = /^(?:(only|not)?\s*([_a-z][_a-z0-9-]*)|(\([^\)]+\)))(?:\s*and\s*(.*))?$/i;
const RE_MQ_EXPRESSION = /^\(\s*([_a-z-][_a-z0-9-]*)\s*(?:\:\s*([^\)]+))?\s*\)$/;
const RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/;
const RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?\s*$/;
const RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?\s*$/;

export default class MediaQueryUtil {
    public static match(mediaQuery: string, values: Props<any>) {
        return MediaQueryUtil.parseQuery(mediaQuery).some((query) => {
            const inverse = query.inverse;

            // Either the parsed or specified `type` is "all", or the types must be
            // equal for a match.
            const typeMatch = query.type === 'all' || values.type === query.type;

            // Quit early when `type` doesn't match, but take "not" into account.
            if ((typeMatch && inverse) || !(typeMatch || inverse)) {
                return false;
            }

            const expressionsMatch = query.expressions.every((expression: any) => {
                const feature = expression.feature;
                const modifier = expression.modifier;
                let expValue = expression.value;
                let value = values[feature];

                // Missing or falsy values don't match.
                if (!value) {
                    return false;
                }

                switch (feature) {
                    case 'orientation':
                    case 'scan':
                        return value.toLowerCase() === expValue.toLowerCase();

                    case 'width':
                    case 'height':
                    case 'device-width':
                    case 'device-height':
                        expValue = MediaQueryUtil.toPx(expValue);
                        value = MediaQueryUtil.toPx(value);
                        break;

                    case 'resolution':
                        expValue = MediaQueryUtil.toDpi(expValue);
                        value = MediaQueryUtil.toDpi(value);
                        break;

                    case 'aspect-ratio':
                    case 'device-aspect-ratio':
                    case /* Deprecated */
                    'device-pixel-ratio':
                        expValue = MediaQueryUtil.toDecimal(expValue);
                        value = MediaQueryUtil.toDecimal(value);
                        break;

                    case 'grid':
                    case 'color':
                    case 'color-index':
                    case 'monochrome':
                        expValue = parseInt(expValue, 10) || 1;
                        value = parseInt(value, 10) || 0;
                        break;
                }

                switch (modifier) {
                    case 'min':
                        return value >= expValue;
                    case 'max':
                        return value <= expValue;
                    default   :
                        return value === expValue;
                }
            });

            return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
        });
    }

    public static parseQuery(mediaQuery: string) {
        return mediaQuery.split(',').map((query: string) => {
            const queryStr = query.trim();

            const captures = queryStr.match(RE_MEDIA_QUERY);

            // Media Query must be valid.
            if (!captures) {
                throw new SyntaxError('Invalid CSS media query: "' + queryStr + '"');
            }

            const modifier = captures[1];
            const type = captures[2];
            let expressions: any = ((captures[3] || '') + (captures[4] || '')).trim();
            const parsed: any = {};

            parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
            parsed.type = type ? type.toLowerCase() : 'all';

            // Check for media query expressions.
            if (!expressions) {
                parsed.expressions = [];
                return parsed;
            }

            // Split expressions into a list.
            expressions = expressions.match(/\([^\)]+\)/g);

            // Media Query must be valid.
            if (!expressions) {
                throw new SyntaxError('Invalid CSS media query: "' + queryStr + '"');
            }

            parsed.expressions = expressions.map((expression: string) => {
                const captures = expression.match(RE_MQ_EXPRESSION);

                // Media Query must be valid.
                if (!captures) {
                    throw new SyntaxError('Invalid CSS media query: "' + queryStr + '"');
                }

                const feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);

                return {
                    modifier: feature[1],
                    feature: feature[2],
                    value: captures[2]
                };
            });

            return parsed;
        });
    }

    public static toDecimal(ratio: string) {
        let decimal: any = Number(ratio);

        if (!decimal) {
            const numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
            decimal = parseFloat(numbers[1]) / parseFloat(numbers[2]);
        }

        return decimal;
    }

    public static toDpi(resolution: string) {
        const value = parseFloat(resolution);
        const units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

        switch (units) {
            case 'dpcm':
                return value / 2.54;
            case 'dppx':
                return value * 96;
            default    :
                return value;
        }
    }

    public static toPx(length: string) {
        const value = parseFloat(length);
        const units = String(length).match(RE_LENGTH_UNIT)[1];
        switch (units) {
            case 'em' :
                return value * 16;
            case 'rem':
                return value * 16;
            case 'cm' :
                return value * 96 / 2.54;
            case 'mm' :
                return value * 96 / 2.54 / 10;
            case 'in' :
                return value * 96;
            case 'pt' :
                return value * 72;
            case 'pc' :
                return value * 72 / 12;
            default   :
                return value;
        }
    }
}
