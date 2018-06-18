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

* We are using *bulma* css as json. It provides to code to be more clean.

```typescript
import {bulma as BreadCrumbStyle} from '.../base/css/bulma';
```


* `classnames` dependency is using to combine classnames for the current element.

```typescript
import * as ClassNames from 'classnames';
```

* `wasabi-common` dependency is using for utility methods. You can check it https://github.com/wasabi-io/wasabi-common .

```typescript
import {Objects} from "wasabi-common";
```

* `react` dependency are using to render components.

```typescript
import * as React from 'react';
```

* `fontawesome` is not dependency library. We expected it as external. You can check `<FaIcon />` component and for more information https://fontawesome.com/ .

```jsx
  <Icon bSize={Size.small} isRight>
    <FaIcon name="check"/>
  </Icon>
```

* `materialdesings` is not dependency library. We expected it as external. You can check `<MaIcon />` component and for more information https://materialdesignicons.com/ .

```jsx
  <Icon bSize={Size.small} isRight>
    <MaIcon name="check"/>
  </Icon>
```

* In generally each component include one `html` element and provided react properties of component as all dependendent classes of `bulma`.

* Provided exporting a group components in their related index file. But if two component not dependendent each other than do not export them in one file.
It can be problem about *increasing source size* if not used related components.

    :+1:

    ```typescript
    export {default as Dropdown} from './Dropdown';
    export {default as DropdownTrigger} from './DropdownTrigger';
    export {default as DropdownContent} from './DropdownContent';
    export {default as DropdownDivider} from './DropdownDivider';
    export {default as DropdownItem} from './DropdownItem';
    export {default as DropdownMenu} from './DropdownMenu';
    ```

    :-1:

    ```typescript
    export {default as Dropdown} from './dropdown/Dropdown';
    export {default as Card} from './card/Card';
    ```

* Each component include `elementRef` property to get a reference for dom node.

```typescript

export interface DropdownProps extends HTMLDivProps {
    ...
    elementRef?: (ref: any) => any;
}
```

* Each component's *properties* should extend *attributes* of *defined html element* inside them.

```typescript

import {HTMLDivProps} from '../../base/html';

export interface DropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
    elementRef?: (ref: any) => any;
}
```



We defined all attributes of html elements in project. You can check it in `src/base/html/HTML` file.
* Each component's `propTypes` should cover `HTMLComponent.propTypes`.

```typescript
 public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        isRight: PropTypes.bool,
        isUp: PropTypes.bool,
        elementRef: PropTypes.func
    };

```

* Each component's `defaultProps` should cover `HTMLComponent.defaultProps`.

```typescript
 public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
 };
```


You can check below exampl which is a general standard for `bambu`.

```typescript
import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface DropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * Is a container for a <code>{&lt;DropdownTrigger />} and a {<DropdownMenu /&gt;}</code>.
 */
export default class Dropdown extends React.Component<DropdownProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        isRight: PropTypes.bool,
        isUp: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    constructor(props: DropdownProps) {
        super(props);
    }

    public render() {
        const {children, className, isActive, isHoverable, isRight, isUp, elementRef, ...dropdownProps} = this.props;
        const classNames = ClassNames(
            DropdownStyle.dropdown,
            {
                [`${DropdownStyle.isActive}`]: isActive,
                [`${DropdownStyle.isHoverable}`]: isHoverable,
                [`${DropdownStyle.isRight}`]: isRight,
                [`${DropdownStyle.isUp}`]: isUp,
            },
            className
        );

        return (
            <div className={classNames} ref={elementRef} {...dropdownProps}>
                {children}
            </div>
        );
    }
}
```


You can ask any question or can suggest anything about contributor guiedlines, documentation or anything about project.

Thank you for reading the guide with patience. :blush:
