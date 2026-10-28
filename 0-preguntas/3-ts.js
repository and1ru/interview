// What is TypeScript?
// What is the difference between TypeScript and JavaScript?
// What are the advantages of TypeScript?
// What are the disadvantages of TypeScript?
// Is TypeScript statically typed or dynamically typed?
// What is type inference?
// What is an interface?
// What is a type alias?
// What is the difference between an interface and a type?
// Can interfaces represent primitive types?
// Can type aliases represent unions?
// Can interfaces be extended?
// Can types be extended?
// What is declaration merging?
// Can two interfaces with the same name be merged?
// When would you use an interface instead of a type?
// When would you use a type instead of an interface?
// any / unknown / never / void
// What is any?
// Why should you avoid any?
// What is unknown?
// What is the difference between any and unknown?
// Why is unknown safer than any?
// What is never?
// When would you use never?
// What is void?
// What is the difference between void and never?
// What is the difference between any, unknown, never and void?
// Can you assign anything to unknown?
// Can you access properties directly on unknown?
// Can you assign unknown to a string?
// What happens when a function returns never?
// Unions / intersections
// What is a union type?
// What is an intersection type?
// What does | mean?
// What does & mean?
// What is the difference between a union and an intersection?
// What are discriminated unions?
// How do you narrow a discriminated union?
// Type narrowing
// What is type narrowing?
// Why is type narrowing necessary?
// How does TypeScript narrow types?
// How does typeof help with narrowing?
// How does instanceof help with narrowing?
// How does the in operator help with narrowing?
// What is a type guard?
// What is a custom type guard?
// What does value is User mean?
// Is a type guard the same thing as runtime validation?
// What happens when TypeScript cannot narrow a type?
// Generics
// What are generics?
// Why are generics useful?
// How do you create a generic function?
// What is <T>?
// What is a generic interface?
// What is a generic type?
// What is a generic class?
// What is a generic constraint?
// What does T extends ... mean?
// Can you have multiple generic parameters?
// What are default generic parameters?
// How does TypeScript infer generic types?
// When should you use generics instead of any?
// What does K extends keyof T mean?
// What does a constrained generic mean?
// keyof / typeof / indexed access
// What is keyof?
// What does keyof User return?
// How is keyof used with generics?
// What does T[K] mean?
// What are indexed access types?
// What does User["name"] mean?
// What is typeof in JavaScript?
// What is typeof in a TypeScript type position?
// What does typeof someVariable mean?
// What is the difference between keyof and typeof?
// Utility types
// What are utility types?
// What is Partial<T>?
// What is Required<T>?
// What is Readonly<T>?
// What is Pick<T, K>?
// What is Omit<T, K>?
// What is Record<K, T>?
// What is ReturnType<T>?
// What is Parameters<T>?
// What is ConstructorParameters<T>?
// What is InstanceType<T>?
// What is NonNullable<T>?
// What is Awaited<T>?
// How would you implement Partial<T> yourself?
// How would you implement Pick<T, K> yourself?
// Conditional / mapped / advanced types
// What are conditional types?
// What does T extends U ? X : Y mean?
// When would you use conditional types?
// What are distributive conditional types?
// What does infer do?
// Where is infer used?
// Can you explain ReturnType using infer?
// What are mapped types?
// What does [K in keyof T] mean?
// How would you implement Partial<T> with a mapped type?
// How would you create a readonly version of a type?
// What are template literal types?
// How can template literal types generate string unions?
// What are recursive types?
// Type assertions / nullability
// What is a type assertion?
// What does as do?
// Type assertion vs type casting?
// Is as runtime validation?
// Why can type assertions be dangerous?
// What is the angle-bracket syntax for type assertions?
// What is the non-null assertion operator !?
// When would you use it?
// Why can it be dangerous?
// What is optional chaining?
// What is nullish coalescing?
// What is the difference between ?? and ||?
// What does as const do?
// What does as const do to an object?
// What does as const do to an array?
// How does as const affect literal types?
// What is the satisfies operator?
// satisfies vs type annotation?
// satisfies vs as?
// Literal types / tuples / enums
// What are literal types?
// What are tuples?
// What is the difference between a tuple and an array?
// Can tuples have optional elements?
// Can tuples contain rest elements?
// What is a readonly tuple?
// What is an enum?
// Why would you use an enum?
// Numeric enum vs string enum?
// What are the disadvantages of enums?
// Enum vs union of literal strings?
// Functions
// How do you type a function?
// How do you type function parameters?
// How do you type a return value?
// What is a function type?
// How do you type callbacks?
// How do you type optional parameters?
// How do you type default parameters?
// How do you type rest parameters?
// What are function overloads?
// Why use function overloads?
// Overloads vs union parameters?
// How does TypeScript select an overload?
// How do you type this in a function?
// What is ThisType<T>?
// Classes
// How does TypeScript support classes?
// What are access modifiers?
// What is public?
// What is private?
// What is protected?
// What is readonly in a class?
// What is abstract?
// What is implements?
// What is the difference between extends and implements?
// Can a class implement an interface?
// Can a class implement multiple interfaces?
// Can an interface extend another interface?
// Can a type extend an interface?
// Can an interface extend a type?
// Structural typing / compatibility
// Is TypeScript nominally typed or structurally typed?
// What is structural typing?
// What are the advantages and disadvantages of structural typing?
// What is type compatibility?
// Why can one object type be assigned to another?
// What makes two types compatible?
// What is excess property checking?
// What is widening?
// What is literal widening?
// What is contextual typing?
// Compilation / runtime
// How does TypeScript run?
// Can browsers execute TypeScript directly?
// What does tsc do?
// What is transpilation?
// Does TypeScript exist at runtime?
// What happens to TypeScript types after compilation?
// Does TypeScript add runtime type checking?
// Can TypeScript use JavaScript code?
// Can JavaScript and TypeScript coexist in the same project?
// What is allowJs?
// What is checkJs?
// How do you migrate a JavaScript project to TypeScript?
// Can every JavaScript file be converted directly to TypeScript?
// tsconfig
// What is tsconfig.json?
// Why is tsconfig.json used?
// What is compilerOptions?
// What is target?
// What is module?
// What is moduleResolution?
// What is strict?
// What is strictNullChecks?
// What is noImplicitAny?
// What is noImplicitReturns?
// What is noUnusedLocals?
// What is noUncheckedIndexedAccess?
// What is esModuleInterop?
// What is skipLibCheck?
// What does "strict": true do?
// Why would you enable strict mode?
// What problems does strict mode help catch?
// What does strictNullChecks solve?
// What does noUncheckedIndexedAccess do?
// What is exactOptionalPropertyTypes?
// What does noPropertyAccessFromIndexSignature do?
// What is the lib option?
// What does module mean?
// What does moduleResolution mean?
// Why can TypeScript fail to resolve an import even though Node can?
// What does "target": "ES2022" mean?
// What is the difference between target and module?
// Modules / declaration files
// How does TypeScript handle modules?
// What is the difference between CommonJS and ES Modules in TypeScript?
// What is import / export?
// What is module resolution?
// What is a .d.ts file?
// Why are declaration files used?
// What is @types?
// What happens when a library doesn't provide types?
// How can you declare types for an untyped JavaScript library?
// What are ambient declarations?
// What is declaration merging?
// What is module augmentation?
// What is global augmentation?
// What are namespaces?
// Runtime validation / Zod
// TypeScript types vs runtime validation?
// Why do you need Zod or another validation library?
// Why use Zod with TypeScript?
// What is the difference between compile-time types and runtime schemas?
// Can you generate TypeScript types from a Zod schema?
// Does assigning const user: User = await response.json() validate the API response at runtime?
// React + TypeScript
// Why use TypeScript with React?
// How do you type component props?
// How do you type children?
// How do you type useState?
// When do you need to explicitly provide the generic to useState?
// How do you type useRef?
// How do you type useReducer?
// How do you type event handlers?
// How do you type form events?
// How do you type ChangeEvent?
// How do you type MouseEvent?
// How do you type API responses?
// How do you type a custom Hook?
// How do you type Context?
// How do you type forwardRef?
// How do you create a generic React component?
// Interface vs type for React props?
// Node + TypeScript
// How do you type Express request objects?
// How do you type Express responses?
// How do you type middleware?
// How do you type JWT payloads?
// How do you type environment variables?
// How do you type API responses?
// How do you share types between frontend and backend?
// How would you share types between a React frontend and a Node backend?
// Redux + TypeScript
// How do you type a Redux store?
// How do you type RootState?
// How do you type Dispatch?
// How do you type Redux Toolkit slices?
// How do you type async thunks?
// Architecture / advanced
// How would you organize types in a large project?
// Where should shared types live?
// Should types be duplicated between frontend and backend?
// How do you prevent circular dependencies between types?
// How do you manage API types?
// How do you keep your types synchronized with the backend?
// What are const type parameters?
// What is variance?
// What is covariance?
// What is contravariance?
// What is bivariance?
// What is strictFunctionTypes?
// What are decorators?
// What are modern decorators?
// How are modern decorators different from legacy decorators?