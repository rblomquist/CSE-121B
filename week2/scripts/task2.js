/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const full_name = "Ricky Blomquist";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = full_name;

// Step 3: declare and instantiate a variable to hold the current year
const year = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const profile_pic = "images/portalpicture.png";
const profile_alt = "Profile picture";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", profile_pic);
document.querySelector("img").setAttribute("alt", profile_alt);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favorite_foods = ["hamburgers", "fruit", "ice cream"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = favorite_foods;

// Step 3: declare and instantiate a variable to hold another favorite food
const another_fav_food = "Dorito casserole";

// Step 4: add the variable holding another favorite food to the favorite food array
favorite_foods.push(another_fav_food);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = favorite_foods;

// Step 6: remove the first element in the favorite foods array
favorite_foods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favorite_foods;

// Step 8: remove the last element in the favorite foods array
favorite_foods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favorite_foods;


