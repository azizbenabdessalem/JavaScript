const person1 = {
    firstName : "SpongeBob",
    lastName:"SquarePants",
    age : 30,
    isEmployed: true,
    sayHello : function(){
        console.log("Hi, Im a Spongebob !");
    },
    eat: () => console.log("I'am eating mloukhia")
};

console.log(person1.firstName);
console.log(person1.isEmployed);
person1.sayHello();

person1.eat();
