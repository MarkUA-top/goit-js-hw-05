class Car {
    static getSpecs(car) {
      console.log(`
        Максимальна швидкість: ${car.maxSpeed},
        Швидкість: ${car.speed},
        Заведена: ${car.isOn},
        Шлях: ${car.distance},
        Ціна: ${car.price}
      `);
    }
    constructor({ maxSpeed, price }) {
      this.speed = 0;
      this.price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = false;
      this.distance = 0;
    }

    get price() {
      return this._price;
    }

    set price(value) {
      if (value < 0) {
        console.log("Ціна не може бути від'ємною");
        return;
      }
      this._price = value;
    }

    turnOn() {
      this.isOn = "Так";
    }

    turnOff() {
      this.isOn = "Ні";
      this.speed = 0;
    }

    accelerate(value) {
      if (this.isOn) {
        this.speed = Math.min(this.speed + value, this.maxSpeed);
      } else {
        console.log("Машина не заведений");
      }
    }

    decelerate(value) {
      if (this.isOn) {
        this.speed = Math.max(this.speed - value, 0);
      } else {
        console.log("Машина не заведений");
      }
    }

    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      } else {
        console.log("Машина не заведений");
      }
    }
  }

  const M4 = new Car({ maxSpeed: 250, price: 118000 });

  M4.turnOn();
  M4.accelerate(140);
  M4.drive(2);
  Car.getSpecs(M4);
  
  M4.decelerate(100);
  M4.drive(1);
  M4.turnOff();
  Car.getSpecs(M4);
  
  console.log(M4.price);
  M4.price = 107000;
  console.log(M4.price);


  const AMG63 = new Car({ maxSpeed: 220, price: 283000});

  M4.turnOn();
  M4.accelerate(60);
  M4.drive(2);
  Car.getSpecs(M4);
  
  M4.decelerate(10);
  M4.drive(1);
  M4.turnOff();
  Car.getSpecs(M4);
  
  console.log(M4.price);
  M4.price = 253000;
  console.log(M4.price);