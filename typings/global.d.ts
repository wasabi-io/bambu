
declare module '*.css' {
    const content: any;
    export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module 'react-styleguidist/lib/rsg-components/Logo' {
    const Logo: any;
    export default Logo;
}

declare module 'react-styleguidist/lib/rsg-components/Markdown' {
    const Markdown: any;
    export default Markdown;
}

declare module 'react-styleguidist/lib/rsg-components/Styled' {
    const Styled: any;
    export default Styled;
}

declare module 'react-styleguidist/lib/rsg-components/Ribbon' {
    const Styled: any;
    export default Styled;
}

declare module '*.sass' {
  const content: any;
  export default content;
}

// Backward compatibility with --target es5
interface Set<T> { }
interface Map<K, V> { }
interface WeakSet<T> { }  // this breaks if lib.es6.d.ts has WeakSet<T extends object>
interface WeakMap<K extends object, V> { }
interface Symbol {}
