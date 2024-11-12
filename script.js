// ToyCar constructor function
function ToyCar(name, color, model, scale, material, price, manufacturer, speed, batteryLife, remoteControlled) {
    this.name = name;
    this.color = color;
    this.model = model;
    this.scale = scale;
    this.material = material;
    this.price = price;
    this.manufacturer = manufacturer;
    this.speed = speed;
    this.batteryLife = batteryLife;
    this.remoteControlled = remoteControlled;
  
    // Method to display car details
    this.displayInfo = function () {
      return `
        <h2>${this.name}</h2>
        <p><strong>Color:</strong> ${this.color}</p>
        <p><strong>Model:</strong> ${this.model}</p>
        <p><strong>Scale:</strong> ${this.scale}</p>
        <p><strong>Material:</strong> ${this.material}</p>
        <p><strong>Price:</strong> $${this.price}</p>
        <p><strong>Manufacturer:</strong> ${this.manufacturer}</p>
        <p><strong>Top Speed:</strong> ${this.speed} km/h</p>
        <p><strong>Battery Life:</strong> ${this.batteryLife} hours</p>
        <p><strong>Remote Controlled:</strong> ${this.remoteControlled ? "Yes" : "No"}</p>
      `;
    };
  }
  
  // Create an instance of the toy car
  const myToyCar = new ToyCar("Speedster", "Red", "SP100", "1:18", "Plastic", 29.99, "ToyMaker Inc.", 50, 2, true);
  
  // Display car information on the webpage
  document.getElementById("car-display").innerHTML = myToyCar.displayInfo();
  