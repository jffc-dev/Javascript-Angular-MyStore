const username: string = 'jflores';
//We can set two or more types using the "|" character
const age: string | number | boolean = 10;

const sum = (a: number, b: number) => {
  return a + b;
}

sum(10, 12);

//Large method
class Person {
  private age: number;
  lastname: string;

  constructor(age: number, lastname: string){
    this.age = age;
    this.lastname = lastname;
  }
}

//Short method
class Person1 {
  constructor(private age: number, public lastname: string){}
}

const jflores = new Person(20, 'Flores');
const jflores1 = new Person1(20, 'Flores')

// jflores.age;
// jflores1.age;
