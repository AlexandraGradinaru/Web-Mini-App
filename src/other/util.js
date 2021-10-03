let todayDate = new Date();
let day = String(todayDate.getDate()).padStart(2, "0");
let month = String(todayDate.getMonth() + 1).padStart(2, "0");
let year = todayDate.getFullYear();

todayDate = month + "/" + day + "/" + year;
let API_KEY = "ba742e0e267ecf9ca3241ecfc3c6497e";
