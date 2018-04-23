let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any; // it can be absolutly any type

//######Arrays init:

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

// Tuple
let strNumTuple: [string, number]

//#####################


// myString = 'Hello ' + 'world';
myString = 'Hello'.slice(0, 3);
// myNum = 22;
myNum = 0xfdf4;
// myBool = false; 
myBool = true;

strArr= ['Hello', 'World'];
numArr = [1,2,3];
boolArr = [true, false, true]
// Tuple:
strNumTuple = ['Hello', 4];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myString);


// ##################### ENUMS #####################

// Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums
enum DirectionNum {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(DirectionNum.Left);

enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let direction1 = DirectionString.Right;
let direction2: string = DirectionString.Up;
let directionArray: string[] = [DirectionString.Up, DirectionString.Right];
console.log(DirectionString.Left);

// ##################### #####################



// ##################### TYPE ASSOCIATE #####################

let message;    //Type ANY, if we didn't declare type
message = 'abc';
//let AbliviousWay = message.endsWith('c'); // Wrong way, not string type
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');