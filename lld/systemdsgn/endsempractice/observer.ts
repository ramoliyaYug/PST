/*
Problem Statement
In the context of modern smart devices and IoT systems, multiple devices (such as
smartphones, tablets, smartwatches, etc.) need to receive and react to updates from a
central system, such as a weather station.
The weather station must be able to notify all its observers (smart devices) whenever a
weather update occurs. Each observer should automatically react to the update without being
tightly coupled to the weather station.
The design should also allow:
1. Devices to subscribe or unsubscribe from weather updates at any time.
2. New types of devices to be added in the future without modifying the core weather
station logic.
3. Loose coupling between the weather station and its observers, ensuring scalability and
flexibility.
Your task is to design and implement this system so that weather updates are broadcast to all
subscribed devices dynamically.
*/

interface Observer{
    update(data:string):void;
}

interface Subject{
    subscribe(observer:Observer):void;
    unsubscribe(observer:Observer):void;
    notifyAll():void;
}

class WeatherStation implements Subject{
    private observers: Observer[] = [];
    private forcast :string = "";

    notifyAll(): void {
        for(let obs of this.observers){
            obs.update(this.forcast)
        }
    }

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    setForcast(forcast:string):void{
        this.forcast = forcast;
    }
}

class mobileApp implements Observer{
    update(data: string): void {
        console.log(`mobile app recieved: ${data}`);
    }
}

class webApp implements Observer{
    update(data:string):void{
        console.log(`web app recieved: ${data}`);
    }
}

//cilent code
let weatherStation:WeatherStation = new WeatherStation();

let mobile: mobileApp = new mobileApp();
let web: webApp = new webApp();

weatherStation.subscribe(mobile)
weatherStation.subscribe(web)

weatherStation.setForcast("aapki ma kitni cute")
weatherStation.notifyAll()
