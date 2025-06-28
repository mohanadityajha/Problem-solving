class Vehicle {
  constructor(brand, model, year, color) {
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
  }

  getDetails() {
    return `brand: ${this.brand},model: ${this.model}, year: ${this.year}, color: ${this.color} `
  }
}

const details = new Vehicle("Toyota", "Corolla", 2020, "Red")
console.log(details.getDetails())

class Car extends Vehicle {
  constructor(brand, model, year, color, launch, establish, speed, capacity) {
    super(brand, model, year, color)
    this.launch = launch;
    this.establish = establish;
    this.speed = speed;
    this.capacity = capacity;
  }
  getCarDetails() {
    return (`brand:${this.brand},model:${this.model},model:${this.year},color:${this.color},launch:${this.launch},establish:${this.establish},speed:${this.speed},capacity:${this.capacity}`)
  }
}
const list = new Car("Honda", "City", 2023, "Blue", 2025, 1920, 140, 1000)
console.log(list.getCarDetails());

class Truck extends Vehicle {
   constructor(brand, model, year, color, loadcapacity, price, cost ){
      super(brand, model, year, color);
      this.loadcapacity = loadcapacity;
      this.price = price;
      this.cost = cost;
   }
   getTruckDetails(){

      return (`loadcapacity:${this.loadcapacity}, price:${this.price}, cost:${this.cost}`)
   }

}

const truckDetails = new Truck( 20000, 120000, 80000);
console.log(truckDetails.getTruckDetails());



