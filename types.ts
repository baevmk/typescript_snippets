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