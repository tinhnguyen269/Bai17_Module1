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