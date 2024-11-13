// ToyCar constructor function to define properties and methods 
function ToyCar(name, brand, model, color, scale, material, price, packaging, vehicleType, SKU, UPC) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.scale = scale;
    this.material = material;
    this.price = price;
    this.packaging = packaging;
    this.vehicleType = vehicleType;
    this.SKU = SKU;
    this.UPC = UPC;
  
    // Method to display car details
    this.displayInfo = function () {
      return `
        <h2>${this.name}</h2>
        <p><strong>Brand:</strong> ${this.brand}</p>
        <p><strong>Model:</strong> ${this.model}</p>
        <p><strong>Color:</strong> ${this.color}</p>
        <p><strong>Scale:</strong> ${this.scale}</p>
        <p><strong>Material:</strong> ${this.material}</p>
        <p><strong>Price:</strong> $${this.price}</p>
        <p><strong>Packaging:</strong> ${this.packaging}</p>
        <p><strong>Vehicle Type:</strong> ${this.vehicleType}</p>
        <p><strong>SKU:</strong> ${this.SKU}</p>
        <p><strong>UPC:</strong> ${this.UPC}</p>
      `;
    };
  }
  
  // Creating an instance of the Rubicon toy car
  const rubicon = new ToyCar(
    "2018 Jeep Wrangler Rubicon Open Top", // name
    "Kinsmart",                            // brand
    "Wrangler Rubicon Open Top",           // model
    "White",                               // color
    "1/34 Scale",                          // scale
    "Diecast Metal",                       // material
    6.99,                                  // price
    "Loose",                               // packaging
    "SUV",                                 // vehicleType
    "5412DA/WT-KIT-WHITE",                 // SKU
    "680334687919"                         // UPC
  );
  
  // To Display car information on the webpage
  document.getElementById("car-display").innerHTML = rubicon.displayInfo();

  function updateCar() {
    const newColor = document.getElementById("newColor").value;
    const newPrice = document.getElementById("newPrice").value;
  
    // To Update properties if new values are provided
    if (newColor) rubicon.color = newColor;
    if (newPrice) rubicon.price = parseFloat(newPrice);
  
    // Re-display the updated car details
    document.getElementById("car-display").innerHTML = rubicon.displayInfo();
  }
  