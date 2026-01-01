/*Q1. Singleton Logger
Problem:
Implement a Logger class in TypeScript using the Singleton Design
Pattern.
● The class should have a private constructor.
● A static method getInstance() should return the same instance every time it’s called.
● Add a log(message: string) method that prints messages with a timestamp.
Example Output:
[2025-10-07 18:00] Server started
[2025-10-07 18:02] New user connected
Test:
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
console.log(logger1 === logger2); // true*/

class Logger{
    private static instance: Logger;

    private constructor() {
        console.log("Logger instantiation");
    }

    static getInstance():Logger{
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message: string): void {
        const timestamp = new Date().toISOString().replace("T", " ").split(".")[0];
        console.log(`[${timestamp}] ${message}`);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Server started");
logger2.log("New user connected");

console.log(logger1 === logger2); // true