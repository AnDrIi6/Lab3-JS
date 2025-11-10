var car1 = new Object();
car1.color = 'black';
car1.maxSpeed = 220;
car1.driver = { name: 'Дячук Андрій', category: 'C', personalLimitations: 'No driving at night' };
car1.tuning = true;
car1['number of accidents'] = 0;
car1.drive = function() { console.log('car1.drive(): I am not driving at night'); };

var car2 = {
  color: 'white',
  maxSpeed: 200,
  driver: { name: 'Дячук Андрій', category: 'B', personalLimitations: null },
  tuning: false,
  'number of accidents': 2,
  drive: function() { console.log('car2.drive(): I can drive anytime'); }
};

console.log('car1:', car1);
console.log('car2:', car2);
car1.drive();
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
  this.trip = function() {
    if (!this.driver) return console.log('Truck.trip(): No driver assigned');
    console.log(`Truck.trip(): Driver ${this.driver.name} ${this.driver.nightDriving ? 'drives at night' : 'does not drive at night'} and has ${this.driver.experience} years of experience`);
  };
}
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = { name, nightDriving: !!nightDriving, experience: parseInt(experience) || 0 };
  return this;
};

var t1 = new Truck('blue', 3500, 78.5, 'Volvo', 'FMX').AssignDriver('Дячук Андрій', true, 5);
var t2 = new Truck('red', 4200, 70.0, 'MAN', 'TGS').AssignDriver('Дячук Андрій', false, 2);
console.log('t1:', t1);
console.log('t2:', t2);
t1.trip();
t2.trip();

const deg2rad = d => d * Math.PI / 180;

class Square {
  static help() { console.log('Square: 4 equal sides, 4 right angles'); }
  constructor(a) { this.a = parseInt(a); }
  length() { return 4 * this.a; }
  square() { return this.a ** 2; }
  info() { console.log(`Square: a=${this.a}, P=${this.length()}, S=${this.square()}`); }
}

class Rectangle extends Square {
  static help() { console.log('Rectangle: opposite sides equal, all angles 90°'); }
  constructor(a, b) { super(a); this.b = parseInt(b); }
  length() { return 2 * (this.a + this.b); }
  square() { return this.a * this.b; }
  info() { console.log(`Rectangle: a=${this.a}, b=${this.b}, P=${this.length()}, S=${this.square()}`); }
}

class Rhombus extends Square {
  static help() { console.log('Rhombus: all sides equal, opposite angles equal'); }
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = parseInt(alpha);
    this.beta = parseInt(beta);
  }
  length() { return 4 * this.a; }
  square() { return this.a ** 2 * Math.sin(deg2rad(this.alpha)); }
  info() { console.log(`Rhombus: a=${this.a}, α=${this.alpha}, β=${this.beta}, P=${this.length()}, S=${this.square().toFixed(2)}`); }
}

class Parallelogram extends Rectangle {
  static help() { console.log('Parallelogram: opposite sides parallel and equal'); }
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = parseInt(alpha);
    this.beta = parseInt(beta);
  }
  length() { return 2 * (this.a + this.b); }
  square() { return this.a * this.b * Math.sin(deg2rad(this.alpha)); }
  info() { console.log(`Parallelogram: a=${this.a}, b=${this.b}, α=${this.alpha}, β=${this.beta}, P=${this.length()}, S=${this.square().toFixed(2)}`); }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

new Square(5).info();
new Rectangle(6, 3).info();
new Rhombus(4, 120, 60).info();
new Parallelogram(8, 5, 110, 70).info();

function Triangular(a = 3, b = 4, c = 5) { return { a, b, c }; }
console.log('tri1:', Triangular());
console.log('tri2:', Triangular(2, 7, 9));
console.log('tri3:', Triangular(10, 10, 12));

function PiMultiplier(k) { return () => Math.PI * k; }
console.log('π*2 =', PiMultiplier(2)());
console.log('π*3 =', PiMultiplier(3)());
console.log('π/2 =', PiMultiplier(1/2)());

function Painter(color) {
  return obj => {
    if (obj && obj.type) console.log(`Painted: ${color} ${obj.type}`);
    else console.log("No 'type' property occurred!");
  };
}
const PaintBlue = Painter('blue');
const PaintRed = Painter('red');
const PaintYellow = Painter('yellow');

const obj1 = { maxSpeed: 280, 'avg speed': 90, 'load capacity': 2400 };
const obj2 = { type: 'Truck', color: 'purple', isCar: true };
const obj3 = { maxSpeed: 180, type: 'Sportcar', color: 'magenta' };

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);

console.log('=== Завершено: перевірте консоль браузера ===');

