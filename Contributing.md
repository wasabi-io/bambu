# Contributor Documentation

### Installation

```bash
yarn
```

### Test

* Test.

```bash
yarn test
```

* Test with interaction mode for debugging.

```bash
yarn testd
```


## Documentation ( Showcase )

#### Development

* Start showcase in development mode.
```bash
yarn start
```

#### Production

* build showcase
```bash
yarn showcase:build
```

* serve showcase (port: 8282)
```bash
yarn showcase:serve
```

## Standardization

* Should use pure functional

#### General folder structure for each related components.

```text
component.scss
component.scss.d.ts
Component.ts
AnotherRelatedComponent.ts
index.ts
```

* *component.scss*

Includes all defined css files from `bulma` which are related to the component and extra css styles and classnames.

* *component.scss.d.ts*

Auto generated file by sass & css loader for using class names as programmatically.

* *Component.ts*, *AnotherChildComponent.ts*

* *index.ts*

export all react components as public.



##### Sample Component

```text
breadcrumb.scss
breadcrumb.scss.d.ts
BreadCrumb.tsx
BreadCrumbItem.tsx
BreadCrumbStyle.ts
index.ts
```

* *breadcrumb.scss*

```scss
@import '../../../node_modules/bulma/sass/utilities/all';
@import '../../../node_modules/bulma/sass/components/breadcrumb';
```

* *BreadCrumb.tsx*

```typescript jsx
import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import {Alignment, AlignmentValues, Size, SizeValues} from '../../base/css';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import BreadCrumbStyle from './BreadCrumbStyle';

export enum BreadCrumbSeperator {
    arrow = 'hasArrowSeparator',
    bullet = 'hasBulletSeparator',
    dot = 'hasDotSeparator',
    succeeds = 'hasSucceedsSeparator',
}

/**
 * Refers Html Props and Additional Props.
 */
export interface BreadCrumbProps extends HTMLElementProps {
    alignment?: string | Alignment;
    separator?: string | BreadCrumbSeperator;
    size?: string | Size;
}

const BreadCrumb: React.SFC<BreadCrumbProps> = (props: BreadCrumbProps) => {

    const {alignment, size, separator, className, ...breadCrumbProps} = props;

    const classNames = ClassNames(
        BreadCrumbStyle.breadcrumb,
        BreadCrumbStyle[alignment],
        BreadCrumbStyle[separator],
        BreadCrumbStyle[size],
        className,
    );

    return (
        <nav className={classNames} {...breadCrumbProps} >
            <ul>
                {props.children}
            </ul>
        </nav>
    );
};

BreadCrumb.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.oneOf(AlignmentValues),
    separator: PropTypes.oneOf(Objects.values(BreadCrumbSeperator)),
    size: PropTypes.oneOf(SizeValues),
};

BreadCrumb.defaultProps = {
    ...HTMLComponent.defaultProps,
};

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
```


* *BreadCrumbItem.tsx*

```typescript jsx
import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLAProps} from '../../base/html/HTML';
import BreadCrumbStyle from './BreadCrumbStyle';

export interface BreadCrumbItemProps extends HTMLAProps {
    isActive?: boolean;
}

const BreadCrumbItem: React.SFC<BreadCrumbItemProps> = (props: BreadCrumbItemProps) => {

    const {isActive, ...breadCrumbItemProps} = props;

    const classNames = ClassNames(
        {
            [`${BreadCrumbStyle.isActive}`]: isActive,
        }
    );

    return (
        <li className={classNames}>
            <a {...breadCrumbItemProps}>
                {props.children}
            </a>
        </li>
    );
};

BreadCrumbItem.propTypes = {
    ...HTMLComponent.propTypes
};

BreadCrumbItem.defaultProps = {
    ...HTMLComponent.defaultProps,
};

BreadCrumbItem.displayName = 'BreadCrumbItem';

export default BreadCrumbItem;
```

* *BreadCrumbStyle.ts*

```typescript
const BreadCrumbStyle = require('./breadcrumb.scss');

export default BreadCrumbStyle;
```


* *index.ts*
```typescript
export {default as BreadCrumb, BreadCrumbProps, BreadCrumbSeperator} from './BreadCrumb';
export {default as BreadCrumbItem, BreadCrumbItemProps} from './BreadCrumbItem';
export {default as BreadCrumbStyle} from './BreadCrumbStyle';
```



