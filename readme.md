Here's a complete `README.md` file for your TypeScript notes, formatted for GitHub:

````markdown
# TypeScript Notes

This repository contains notes and examples for learning and mastering TypeScript. The notes cover basic to advanced concepts with clear examples.

## 1. Type Annotations

Type annotations specify the type of variables, function parameters, or return values directly.

**Example 01:** Define a variable with a specific type.

```typescript
let age: number = 25;
let name: string = "Alice";
```
````

**Example 02:** Specify the type of function parameters and return value.

```typescript
function greet(name: string): string {
  return "Hello, " + name;
}
```

## 2. Type Assertions

Type assertions tell the TypeScript compiler to treat a value as a specific type without performing any type checking or restructuring.

**Example 01:** Using `as` syntax to assert a type.

```typescript
let someValue: unknown = "Hello, TypeScript";
let strLength: number = (someValue as string).length;
```

**Example 02:** Using angle-bracket syntax (not recommended in JSX).

```typescript
let strLength: number = (<string>someValue).length;
```

## 3. Type Aliases

Type aliases allow you to create a new name for a type.

**Example 01:** Create a type alias for an object structure.

```typescript
type OBJ = { x: number; y: number };
let obj: OBJ = { x: 10, y: 20 };
```

## 4. Interfaces

Interfaces define the shape of an object or a class, specifying properties and methods.

**Example 01:** Define an interface for an object.

```typescript
interface OBJ {
  x: number;
  y: number;
}
let obj: OBJ = { x: 10, y: 20 };
```

## 5. Classes and Inheritance

Classes in TypeScript can have types specified for their properties and methods. They support inheritance, allowing you to create subclasses.

**Example 01:** Create a base class and a subclass.

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

let myDog = new Dog("Rex");
```

## 6. Generics

Generics allow you to create reusable components that work with various types.

**Example 01:** Create a function that works with any type.

```typescript
function myGenericsFunc<T>(val: T): T {
  return val;
}
console.log(myGenericsFunc("Hello Ts"));
```

## 7. Union Types

Union types allow a variable to hold multiple types using the `|` symbol.

**Example 01:** Define a variable that can be a string or a number.

```typescript
let value: string | number;
value = "hello"; // OK
value = 12; // OK
```

## 8. Intersection Types

Intersection types allow you to combine multiple types into a single type.

**Example 01:** Combine two interfaces into a single type.

```typescript
interface Person {
  name: string;
  age: number;
}

interface PersonOtherDetails {
  fname: string;
}

type AllPersonDetails = Person & PersonOtherDetails;
let Obj: AllPersonDetails = { name: "John", age: 16, fname: "John" };
```

## 9. Literal Types

Literal types allow a variable to hold a specific string or number value.

**Example 01:** Define a type that allows only specific string values.

```typescript
type Direction = "up" | "down" | "left" | "right";
let move: Direction;
move = "up"; // OK
```

## 10. Conditional Types

Conditional types allow you to create types based on a condition.

**Example 01:** Create a type that returns different types based on a condition.

```typescript
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : "object";
type T1 = TypeName<string>; // "string"
```

## 11. Multiple Type Parameters

Functions can have multiple type parameters for more flexibility.

**Example 01:** Merge two objects into one.

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

let mergeObject = merge({ name: "John" }, { age: 28 });
```

## 12. Arrays

Arrays in TypeScript can hold multiple types or be restricted to a single type.

**Example 01:** Define an array that can hold strings or numbers.

```typescript
let arr: Array<string | number> = [];
arr.push(1);
arr.push("abc");
```

**Example 02:** Create a read-only array.

```typescript
let arr: readonly string[] = ["Value 1"];
```

## 13. Tuples

Tuples in TypeScript have fixed lengths and types for each position.

**Example 01:** Define a tuple with specific types at each position.

```typescript
let tupleArr: [number, boolean, string];
tupleArr = [1, true, "Value 1"]; // OK
```

## 14. Objects

Objects can have optional and required properties.

**Example 01:** Define an object with optional and required properties.

```typescript
interface Person {
  name?: string;
  age: number;
}

let obj: Person = { name: "abdullah", age: 22 };
```

## 15. Enums

Enums allow you to define a set of named constants.

**Example 01:** Define a numeric enum.

```typescript
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound); // logs 404
```

## 16. Functions

Functions in TypeScript can have typed parameters and return values.

**Example 01:** Define a function with a typed return value.

```typescript
function getTime(): number {
  return new Date().getTime();
}
```

**Example 02:** Define a function that doesn't return a value.

```typescript
function logTime(a: number): void {
  console.log("Time:", a);
}
```

## 17. Casting Types

Casting allows you to change the type of a value.

**Example 01:** Cast a variable to a specific type.

```typescript
let x: unknown = "hello";
console.log((x as string).length);
```

## 18. Utility Types

TypeScript provides utility types to modify or combine types.

**Example 01: Partial**  
`Partial` makes all properties in an object type optional.

```typescript
interface UtilityType {
  name: string;
  age: number;
}

let pointPartial: Partial<UtilityType> = {};
pointPartial.name = "John";
```

**Example 02: Required**  
`Required` makes all properties in an object type required.

```typescript
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = { make: "Ford", model: "Focus", mileage: 12000 };
```

**Example 03: Record**  
`Record` creates an object type with keys of a specified type.

```typescript
const nameAgeMap: Record<string, number> = { Alice: 21, Bob: 25 };
```

**Example 04: Omit**  
`Omit` removes specific keys from an object type.

```typescript
interface ObjectType {
  name: string;
  age: number;
  location: string;
}

const bob: Omit<ObjectType, "name" | "location"> = { age: 22 };
```

**Example 05: Pick**  
`Pick` creates a new type by selecting specific keys from an existing type.

```typescript
interface ObjectType {
  name: string;
  age: number;
  location: string;
}

const pickObj: Pick<ObjectType, "location"> = { location: "Pak" };
```

**Example 06: Exclude**  
`Exclude` removes types from a union type.

```typescript
type Primitives = string | number | boolean;
const removeType: Exclude<Primitives, number> = "string";
```

**Example 07: keyof**  
`keyof` helps you retrieve the keys of an object type.

```typescript
interface Student {
  name: string;
  class: number;
}

let studentKey: keyof Student = "name";
```

---

Feel free to modify the content or format to suit your preferences.
