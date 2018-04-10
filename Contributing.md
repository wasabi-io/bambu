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

* use *bulma* style module.

Includes all defined css class names from `bulma` and extra css styles and classnames.

```typescript
import ComponentStyle from '../../bulma';


...
    const classNames = ClassNames(
        ComponentStyle.component,
        ComponentStyle[alignment],
        ComponentStyle[separator],
        ComponentStyle[size],
        className,
    );
...

```

* Should use pure functional

#### General folder structure for each related components.

```text
Component.ts
AnotherRelatedComponent.ts
index.ts
```

* *index.ts*

export all react components as public.



##### Sample Component

```text
BreadCrumb.tsx
BreadCrumbItem.tsx
index.ts
```

* *BreadCrumb.tsx*

```typescript jsx
import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import {Alignment, AlignmentValues, Size, SizeValues} from '../../base/css';
import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';
import BreadCrumbStyle from '../../bulma';

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
import BreadCrumbStyle from '../../bulma';

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


* *index.ts*
```typescript
export {default as BreadCrumb, BreadCrumbProps, BreadCrumbSeperator} from './BreadCrumb';
export {default as BreadCrumbItem, BreadCrumbItemProps} from './BreadCrumbItem';
```



