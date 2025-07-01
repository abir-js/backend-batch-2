const EventEmitter = require("events");
const fs = require("fs");

const myEmitter = new EventEmitter();

const counter = {
  loginCount: 0,
  logoutCount: 0,
  updateProfileCount: 0,
  purchaseCount: 0,
};

const fileName = "counter.json";

//? 2. json ka andar ka existing data lo
if (fs.existsSync(fileName)) {
  const data = fs.readFileSync(fileName, "utf-8");
  Object.assign(counter, JSON.parse(data));
}

//? 1. ak function banao jo json file banke usme updated count ko save kare
function updateCount() {
  fs.writeFileSync(fileName, JSON.stringify(counter, null, 2));
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
