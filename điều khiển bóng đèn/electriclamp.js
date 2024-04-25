// khai bao lop
class ElectricLamp {
    constructor() {
        this.status = false;
    }
    turnOff(){
        this.status = false;
    }
    turnOn(){
        this.status = true;
    }
}
//tao doi tuong
let e1 = new ElectricLamp();
let e2 = new ElectricLamp();

let a = [3, 4, 5, 6];
let b = a;
