// let firstName: string = "Dylan";
// console.log(firstName);

// const json = JSON.parse("55");
// // Most expect json to be an object, but it can be a string or a number like this example
// console.log(typeof json);

// let u: any = true;
// u = "Updated bool using any keyword";
// console.log("Variable type:", u);

// let w: unknown = 1;
// w = "string"; // no error
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   },
// } as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.

// 1- Type Guard
// if (typeof w === "object" && w !== null) {
//   //   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
//   //   w.runANonExistentMethod();
//   // 2- Type Assertion
//   //   This tells TypeScript you are sure w has the method runANonExistentMethod.
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// console.log("Variable type:", w.runANonExistentMethod());

// let obj: unknown = {
//   x: 10,
//   y: 20,
// };

// console.log("Object type:", obj.x);
// Its through the error

// console.log((obj as { x: number }).x);
// Its perfect !
// There are 10 type in ts :

// 1- Type Annotations
// This is specify the variable, parameters or return value directly
// Example:
// let age: number = 25;
// let name: string = "Alice";

// function greet(name: string): string {
//   return `Hello, ${name}`;
// }

// 2- Type Assertions
// Type assertions tell the TypeScript compiler to treat a value as a specific type. It does not perform any type checking or restructuring, it only changes how the compiler views the type.
// Example:
// let someValue: unknown = "Hello, TypeScript";

// // Assertion with angle-bracket syntax (only in TypeScript, not in TSX/JSX files)
// let strLength1: number = (<string>someValue).length;

// // Assertion with `as` syntax (preferred in TSX/JSX files)
// let strLength2: number = (someValue as string).length;

// Example 02
// let someValue: unknown = "Hello, TypeScript";

// console.log("Type of unknown:", (someValue as string).length);

// 3- Type Aliases
// This create a new type alias

// type OBJ = { x: number; y: number };
// let obj = {
//   x: 10,
//   y: 20,
// };

// console.log(obj.x);

// 4- Interfaces
// Interfaces define the shape of an object or a class, specifying properties and methods. They can be extended and merged, making them highly versatile
// interface OBJ { x: number; y: number };
// let obj = {
//   x: 10,
//   y: 20,
// };

// console.log(obj.x);

// 5- Classes and Inheritance
// Classes in TypeScript can have types specified for their properties and methods. They support inheritance, allowing you to create subclasses.

// class Animal {
//   constructor(public name: string) {}
//   makeSound(): void {
//     console.log("Some sound");
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Woof!");
//   }
// }

// let myDog = new Dog("Rex");
// let myAnimal = new Animal("Rex");
// myAnimal.makeSound();

// 6- Generics

// Enable creating reusable components

// const myFunctions = (val) => {
//   console.log("Output", val);
// };
// myFunctions("jkjk");

// const myGenericsFunc = <T>(val: T): T => {
//   return val; // Add this line to return the value
// };

// console.log(myGenericsFunc("Hello Ts"));

// 7- Union Types
// if element have differents types like | using pipe

// let value: string | number;
// value = "hello"; // OK
// value = 12; // OK
// value = true; // Boolean its not allowed

// 8- Intersection Type

// Its Allow you to combine multiple types into single type

// interface Person {
//   name: string;
//   age: number;
// }

// interface PersonOtherDetails {
//   fname: string;
// }

// type AllPersonDetails = Person & PersonOtherDetails;

// let Obj: AllPersonDetails = {
//   name: "John",
//   age: 16,
//   fname: "John",
// };

// 9- Literal Types
// String literal types allow a variable to hold a specific string value.
// type Direction = "up" | "down" | "left" | "right";

// let move: Direction;

// move = "up";    // OK
// move = "down";  // OK
// move = "forward"; // Error: Type '"forward"' is not assignable to type 'Direction'.

// 10- Conditional Type

// type TypeName<T> = T extends string
//   ? "string"
//   : T extends number
//   ? "number"
//   : T extends boolean
//   ? "boolean"
//   : "object";

// type T1 = TypeName<string>; // "string"
// type T2 = TypeName<number>; // "number"
// type T3 = TypeName<boolean>; // "boolean"
// type T4 = TypeName<{}>; // "object"

// 11- Multiple Types Parameters
// function merge<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// let mergeObject = merge({ name: "John" }, { age: 28 });

// console.log(mergeObject);

// ARRAYS
// Same work possibilities
// let arr: Array<string | number> = [];
// let arr: string[] & number[] = [];
// type arrType = Array<string | number>;

// let arr: arrType = [];
// arr.push(1);
// arr.push("abc");

// console.log("arr :", arr);

// Array - readonly :

// let arr: readonly string[] = ["Value 1"];
// arr.push("Value 2"); // Through an error readonly property

// Tuple in ts
// tuple has fixed length and type location.
// let tupleArr: [number, boolean, string];

// tupleArr = [1, true, "Value 1"]; // Okay with tuple
// tupleArr = ["1", 1, false]; // Error because tuple has fixed length and type location.

// Objects

// interface Person {
//   name?: string;
//   fname?: string;
//   age: number;
//   class: number;
// }

// let obj: Person = {
//   name: "abdullah",
//   age: 22,
//   class: 16,
// };

// let obj2: Person = {
//   fname: "an",
//   age: 52,
//   class: 16,
// };

// console.log({ ...obj, ...obj2 });

// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// Enums:
// Numeric Enums - Fully Initialized
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// // logs 404
// console.log(StatusCodes.NotFound);
// // logs 200
// console.log(StatusCodes.Success);

// Numeric Enums - Default
// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection = CardinalDirections.North;
// // logs 0
// console.log(currentDirection);
// // throws error as 'North' is not a valid enum
// currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.

// Union Type:
// Union Tyoe means you can use multiple types in same variable
// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code}.`);
// }
// printStatusCode(404); // Acceptable in ts because of union type
// printStatusCode("404"); // Acceptable in ts because of union type

// Functions:
// If function returns the value
// function getTime(): number {
//   return new Date().getTime();
// }

// If function cant returns the value so use void type
// function getTime(a: number): void {
//   console.log("GetTime :", a);
// }
// console.log("getTime :", getTime(1));

// Casting type:
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// let x: unknown = "hello";
// // console.log((x as string).length);

// // There are two ways to give it type
// console.log((x as string).length);
// console.log((<string>x).length);

// Classes :

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const useThisClass = new Person("John Smith", 22);
// console.log(useThisClass?.age);

// GENERICS
// Custom reusable component or type

// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

// Utility Types :

// 1- Partial
// Partial use when your object has optional type

// interface UtilityType {
//   name: string;
//   age: number;
// }

// let pointPartial: Partial<UtilityType> = {};

// pointPartial.name = "John";
// pointPartial.age = 1;

// console.log("PointPartial :", pointPartial);

// 2- Required:
// interface Car {
//   make: string;
//   model: string;
//   mileage?: number;
// }

// let myCar: Required<Car> = {
//   make: "Ford",
//   model: "Focus",
//   mileage: 12000, // `Required` forces mileage to be defined
// };

// 3- Record:
// const nameAgeMap: Record<string, number> = {
//   Alice: 21,
//   Bob: 25,
// };

// console.log(nameAgeMap);

// 4- Omit :
// Removes keys from an object type.
// interface ObjectType {
//   name: string;
//   age: number;
//   location: string;
// }

// const bob: Omit<ObjectType, "name" | "location"> = {
//   age: 22,
// };

// console.log(bob);

// 5- Pick :
// Remove all keys but the specified of the object type

// interface ObjectType {
//   name: string;
//   age: number;
//   location: string;
// }

// const pickObj: Pick<ObjectType, "location"> = {
//   location: "Pak",
// };

// console.log("Location :", location);

// 6- Exclude :
// Remove types from union

// type Primitives = string | number | boolean;
// // This syntax to remove union types from union types
// const removeTypeUsingExclude: Exclude<Primitives, number> = 20; // Its through error because i remove number type and I assign it number

// console.log("Number :", removeTypeUsingExclude);
