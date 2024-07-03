class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    infoHuman(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
        document.write(`<p>Name: ${this.name}<br>Age: ${this.age}</p>`);
    }
}

class Car {
    constructor(brand, model, year_production, number_plate){
        this.brand = brand;
        this.model = model;
        this.year_production = year_production;
        this.number_plate = number_plate;
    }

    owner_car;

    infoOwner(human){
        if(human.age > 18){
            this.owner_car = human;
            document.write(`<h3>Owner</h3>`);
            console.log(`Owner`);
            this.owner_car.infoHuman();
        }else{
            console.log(`${human.name} is not owner, because him must be over 18`);
            document.write(`<p>${human.name} is not owner, because him must be over 18</p>`);
        }
    }

    infoCar(human){
        document.write(`<h2>Information of car</h2>`)
        document.write(`Brand: ${this.brand} <br>Model: ${this.model}<br>Year of production: ${this.year_production} year <br>Number Plate: ${this.number_plate}`);
        console.log('Car Information:');
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year of production: ${this.year_production}`);
        console.log(`Number Plate: ${this.number_plate}`);
        this.infoOwner(human);
    }
}
const human1 = new Human('Mariia', 30);
const human2 = new Human('Dima', 18);

const car1 = new Car('Toyota', 'Corolla', 2024, 'AB0101AC');
const car2 = new Car('Masda', 'Corolla', 2020, 'Arty3454');

car1.infoCar(human1);
car2.infoCar(human2);
