let username = "JackOfAllTrades";
let userCheck = /(^[a-zA-Z]{1}\d{2,}$)|(^[a-zA-Z]{2,}\d*$)/; // Change this line
let result = userCheck.test(username);
