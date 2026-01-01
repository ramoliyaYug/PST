/*
Problem Statement:
You are designing a device manufacturing system where multiple types of devices (e.g.,
Laptops and Phones) are produced by different brands (Apple and Samsung). Implement the
Abstract Factory Pattern to create objects dynamically based on the brand and device type.
Your implementation should have:
1. Abstract Factory (DeviceFactory)
○ Method: createDevice(String type)
2. Concrete Factories (AppleFactory and SamsungFactory)
○ Implement DeviceFactory and return respective device objects.
3. Device Interface (Device)
○ Method: specifications() (Prints the device details)
4. Concrete Devices (AppleLaptop, ApplePhone, SamsungLaptop, SamsungPhone)
○ Implement Device and provide custom specifications.
Demonstrate the pattern in the main function by:
1. Creating an Apple Laptop and a Samsung Phone using the respective factories.
2. Printing their specifications.
*/

// Common interface for all devices
interface Device {
    specifications(): void;
}


// Apple Laptop
class AppleLaptop implements Device {
    specifications(): void {
        console.log("Apple Laptop: M2 Chip, 16GB RAM, macOS");
    }
}

// Apple Phone
class ApplePhone implements Device {
    specifications(): void {
        console.log("Apple Phone: A17 Chip, iOS, 48MP Camera");
    }
}

// Samsung Laptop
class SamsungLaptop implements Device {
    specifications(): void {
        console.log("Samsung Laptop: Intel i7, 16GB RAM, Windows");
    }
}

// Samsung Phone
class SamsungPhone implements Device {
    specifications(): void {
        console.log("Samsung Phone: Snapdragon, Android, 50MP Camera");
    }
}

// Abstract Factory
// Declares method for creating devices
interface DeviceFactory {
    createDevice(type: string): Device;
}

class AppleFactory implements DeviceFactory {

    createDevice(type: string): Device {
        switch (type.toLowerCase()) {
            case "laptop":
                return new AppleLaptop();
            case "phone":
                return new ApplePhone();
            default:
                throw new Error("Invalid Apple device type");
        }
    }
}

class SamsungFactory implements DeviceFactory {

    createDevice(type: string): Device {
        switch (type.toLowerCase()) {
            case "laptop":
                return new SamsungLaptop();
            case "phone":
                return new SamsungPhone();
            default:
                throw new Error("Invalid Samsung device type");
        }
    }
}

// Create factories
const appleFactory: DeviceFactory = new AppleFactory();
const samsungFactory: DeviceFactory = new SamsungFactory();

// Create devices using factories
const appleLaptop = appleFactory.createDevice("laptop");
const samsungPhone = samsungFactory.createDevice("phone");

// Print specifications
appleLaptop.specifications();
samsungPhone.specifications();


