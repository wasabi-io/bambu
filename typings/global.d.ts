
declare module '*.scss' {
  const content: any;
  export default content;
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
