let dns = require("dns");
console.log(dns);
dns.lookup("google.com", (err, address, family) => {
  if (err) {
    console.error("Error occurred:", err);
    return;
  }
  console.log("Google IP Address:", address);
  console.log("Address Family:", family === 4 ? "IPv4" : "IPv6");
});
