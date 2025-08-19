const EventEmitter = require("events");
const fs = require("fs");

const myEmitter = new EventEmitter();

const counter = {
  loginCount: 0,
  logoutCount: 0,
  updateProfileCount: 0,
  purchaseCount: 0,
};

//? json file create karna hai
const fileName = "counter.json";
fs.writeFileSync(fileName, JSON.stringify(counter));

//? update karna hai
function updateCount(){
    Object.assign(JSON.parse(fileName), counter)
}

//? read karke updated data ko merge karo
function readJSON() {
  if (fs.existsSync(fileName)) {
    const data = JSON.parse();
  }
}

// Listen for an event
myEmitter.on("onLogin", (obj) => {
  counter.loginCount++;
  updateCount();
  console.log(`${obj.name}, Logged in successfully!`);
});
myEmitter.on("onLogout", (obj) => {
  counter.logoutCount++;
  updateCount();
  console.log(`${obj.name}, Logged out successfully!`);
});
myEmitter.on("onUpdateProfile", (obj) => {
  counter.updateProfileCount++;
  updateCount();
  console.log(`${obj.name}, Updated ${obj.updatedItem} successfully!`);
});
myEmitter.on("onPurchase", (obj) => {
  counter.purchaseCount++;
  updateCount();
  console.log(`${obj.name}, Purchased ${obj.product} successfully!`);
});

myEmitter.on("onTrackEventCount", () => {
  console.log(counter);
});

// Emit the event
myEmitter.emit("onLogin", { name: "Ram" });
myEmitter.emit("onLogout", { name: "Ram" });
myEmitter.emit("onUpdateProfile", { name: "Ram", updatedItem: "username" });
myEmitter.emit("onPurchase", { name: "Ram", product: "TV" });
myEmitter.emit("onTrackEventCount");
