import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';
import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import Arrays from 'wasabi-common/lib/types/Arrays';

/**
 * Provides abstraction from HTML Elements.
 */

abstract class AbstractDom<P extends HTMLElementProps> extends Stateless<P> {

  public static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  public static defaultProps = {
    className: '',
    style: {},
  };

  public static create() {

  }

  public classNames(clazzNames: string[]) {
    clazzNames.push(this.props.className);
    return ClassNames(clazzNames);
  }

}

export default AbstractDom;

/**
 * Refers properties of HTML Elements.
 */
export type HTMLAllAttributes = React.AllHTMLAttributes<HTMLElement>;
export type HTMLElementProps = React.HTMLAttributes<HTMLElement>;
export type HTMLAProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type HTMLAbbrProps = React.HTMLAttributes<HTMLElement>;
export type HTMLAddressProps = React.HTMLAttributes<HTMLElement>;
export type HTMLAreaProps = React.AreaHTMLAttributes<HTMLAreaElement>;
export type HTMLArticleProps = React.HTMLAttributes<HTMLElement>;
export type HTMLAsideProps = React.HTMLAttributes<HTMLElement>;
export type HTMLAudioProps = React.AudioHTMLAttributes<HTMLAudioElement>;
export type HTMLBProps = React.HTMLAttributes<HTMLElement>;
export type HTMLBaseProps = React.BaseHTMLAttributes<HTMLBaseElement>;
export type HTMLBdiProps = React.HTMLAttributes<HTMLElement>;
export type HTMLBdoProps = React.HTMLAttributes<HTMLElement>;
export type HTMLBigProps = React.HTMLAttributes<HTMLElement>;
export type HTMLBlockquoteProps = React.BlockquoteHTMLAttributes<HTMLElement>;
export type HTMLBodyProps = React.HTMLAttributes<HTMLBodyElement>;
export type HTMLBrProps = React.HTMLAttributes<HTMLBRElement>;
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HTMLCanvasProps = React.CanvasHTMLAttributes<HTMLCanvasElement>;
export type HTMLCaptionProps = React.HTMLAttributes<HTMLElement>;
export type HTMLCiteProps = React.HTMLAttributes<HTMLElement>;
export type HTMLCodeProps = React.HTMLAttributes<HTMLElement>;
export type HTMLColProps = React.ColHTMLAttributes<HTMLTableColElement>;
export type HTMLColgroupProps = React.ColgroupHTMLAttributes<HTMLTableColElement>;
export type HTMLDataProps = React.HTMLAttributes<HTMLElement>;
export type HTMLDatalistProps = React.HTMLAttributes<HTMLDataListElement>;
export type HTMLDdProps = React.HTMLAttributes<HTMLElement>;
export type HTMLDelProps = React.DelHTMLAttributes<HTMLElement>;
export type HTMLDetailsProps = React.DetailsHTMLAttributes<HTMLElement>;
export type HTMLDfnProps = React.HTMLAttributes<HTMLElement>;
export type HTMLDialogProps = React.HTMLAttributes<HTMLElement>;
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLDlProps = React.HTMLAttributes<HTMLDListElement>;
export type HTMLDtProps = React.HTMLAttributes<HTMLElement>;
export type HTMLEmProps = React.HTMLAttributes<HTMLElement>;
export type HTMLEmbedProps = React.EmbedHTMLAttributes<HTMLEmbedElement>;
export type HTMLFieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
export type HTMLFigcaptionProps = React.HTMLAttributes<HTMLElement>;
export type HTMLFigureProps = React.HTMLAttributes<HTMLElement>;
export type HTMLFooterProps = React.HTMLAttributes<HTMLElement>;
export type HTMLFormProps = React.FormHTMLAttributes<HTMLFormElement>;
export type HTMLH1Props = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLH2Props = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLH3Props = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLH4Props = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLH5Props = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLH6Props = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLHeadProps = React.HTMLAttributes<HTMLElement>;
export type HTMLHeaderProps = React.HTMLAttributes<HTMLElement>;
export type HTMLHgroupProps = React.HTMLAttributes<HTMLElement>;
export type HTMLHrProps = React.HTMLAttributes<HTMLHRElement>;
export type HTMLHtmlProps = React.HtmlHTMLAttributes<HTMLHtmlElement>;
export type HTMLIProps = React.HTMLAttributes<HTMLElement>;
export type HTMLIframeProps = React.IframeHTMLAttributes<HTMLIFrameElement>;
export type HTMLImgProps = React.ImgHTMLAttributes<HTMLImageElement>;
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLInsProps = React.InsHTMLAttributes<HTMLModElement>;
export type HTMLKbdProps = React.HTMLAttributes<HTMLElement>;
export type HTMLKeygenProps = React.KeygenHTMLAttributes<HTMLElement>;
export type HTMLLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type HTMLLegendProps = React.HTMLAttributes<HTMLLegendElement>;
export type HTMLLiProps = React.LiHTMLAttributes<HTMLLIElement>;
export type HTMLLinkProps = React.LinkHTMLAttributes<HTMLLinkElement>;
export type HTMLMainProps = React.HTMLAttributes<HTMLElement>;
export type HTMLMapProps = React.MapHTMLAttributes<HTMLMapElement>;
export type HTMLMarkProps = React.HTMLAttributes<HTMLElement>;
export type HTMLMenuProps = React.MenuHTMLAttributes<HTMLElement>;
export type HTMLMenuitemProps = React.HTMLAttributes<HTMLElement>;
export type HTMLMetaProps = React.MetaHTMLAttributes<HTMLMetaElement>;
export type HTMLMeterProps = React.MeterHTMLAttributes<HTMLElement>;
export type HTMLNavProps = React.HTMLAttributes<HTMLElement>;
export type HTMLNoscriptProps = React.HTMLAttributes<HTMLElement>;
export type HTMLObjectProps = React.ObjectHTMLAttributes<HTMLObjectElement>;
export type HTMLOlProps = React.OlHTMLAttributes<HTMLOListElement>;
export type HTMLOptgroupProps = React.OptgroupHTMLAttributes<HTMLOptGroupElement>;
export type HTMLOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;
export type HTMLOutputProps = React.OutputHTMLAttributes<HTMLElement>;
export type HTMLPProps = React.HTMLAttributes<HTMLParagraphElement>;
export type HTMLParamProps = React.ParamHTMLAttributes<HTMLParamElement>;
export type HTMLPictureProps = React.HTMLAttributes<HTMLElement>;
export type HTMLPreProps = React.HTMLAttributes<HTMLPreElement>;
export type HTMLProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement>;
export type HTMLQProps = React.QuoteHTMLAttributes<HTMLQuoteElement>;
export type HTMLRpProps = React.HTMLAttributes<HTMLElement>;
export type HTMLRtProps = React.HTMLAttributes<HTMLElement>;
export type HTMLRubyProps = React.HTMLAttributes<HTMLElement>;
export type HTMLSProps = React.HTMLAttributes<HTMLElement>;
export type HTMLSampProps = React.HTMLAttributes<HTMLElement>;
export type HTMLScriptProps = React.ScriptHTMLAttributes<HTMLScriptElement>;
export type HTMLSectionProps = React.HTMLAttributes<HTMLElement>;
export type HTMLSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
export type HTMLSmallProps = React.HTMLAttributes<HTMLElement>;
export type HTMLSourceProps = React.SourceHTMLAttributes<HTMLSourceElement>;
export type HTMLSpanProps = React.HTMLAttributes<HTMLSpanElement>;
export type HTMLStrongProps = React.HTMLAttributes<HTMLElement>;
export type HTMLStyleProps = React.StyleHTMLAttributes<HTMLStyleElement>;
export type HTMLSubProps = React.HTMLAttributes<HTMLElement>;
export type HTMLSummaryProps = React.HTMLAttributes<HTMLElement>;
export type HTMLSupProps = React.HTMLAttributes<HTMLElement>;
export type HTMLTableProps = React.TableHTMLAttributes<HTMLTableElement>;
export type HTMLTbodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type HTMLTdProps = React.TdHTMLAttributes<HTMLTableDataCellElement>;
export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type HTMLTfootProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type HTMLThProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
export type HTMLTheadProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type HTMLTimeProps = React.TimeHTMLAttributes<HTMLElement>;
export type HTMLTitleProps = React.HTMLAttributes<HTMLTitleElement>;
export type HTMLTrProps = React.HTMLAttributes<HTMLTableRowElement>;
export type HTMLTrackProps = React.TrackHTMLAttributes<HTMLTrackElement>;
export type HTMLUProps = React.HTMLAttributes<HTMLElement>;
export type HTMLUlProps = React.HTMLAttributes<HTMLUListElement>;
export type HTMLVideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;
export type HTMLWbrProps = React.HTMLAttributes<HTMLElement>;
