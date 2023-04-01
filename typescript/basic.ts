//Primitive: number, string, boolean
//complex types: arrays, objects
//Function types, parameters

let age: number = 24;

age = 13;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = false;

//complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: 'Max',
    age: 32
}

let people: Person[];

//type inference

let course: string | number = "React guide";

course = 1;

//Functions & types

function add(a: number, b:number): number | string {
  return a+ b;
}

function printOutput(value: any){
    console.log(value)
}


//Generics

function insertAtBeginning<T>(array:T[], value: T){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);

