/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

let profile = {
    
// Step 2: Inside of the object, add a property named name with a value of your name as a string

    name: "Ricky Blomquist",

// Step 3: Add another property named photo with a value of the image path and name 
// (used in Task 2) as a string

    photo: "images/portalpicture.png",

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods 
// as strings ( hint: [] )

    favoriteFoods: ["Hamburgers", "ice cream", "Wife's roast"],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

    hobbies: ["Warhammer 40k", "video games", "sports", "board games"], 

// Step 6: Add another property named placesLived with a value of an empty array

    placesLived: [],
};

// Step 7: Inside of the empty array above, add a new object with two properties: 
// place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

profile.placesLived = [
    {
        place: "Houston, Texas",
        length: "10 years",
    },
    {
        place: "Simi Valley, California",
        length: "11 years",
    },
    {
        place: "Rexburg, Idaho",
        length: "2 years",
    },
    {
        place: "Herriman, Utah",
        length: "2 years",
    },
    {
        place: "Sanford, North Carolina",
        length: "2 years",
    },
];


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML 
/* <span> element with an ID of name */

document.querySelector("#name").textContent = profile.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML 
/* <img> element with an ID of photo */

document.getElementById("photo").setAttribute("src", profile.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> 
// element with an ID of photo

document.getElementById("photo").setAttribute("alt", "profile picture");

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> 
// element and place its value in the <li> element

profile.favoriteFoods.forEach( x => {
    let li = document.createElement("li");
    li.textContent = x;


// Step 5: Append the <li> elements created above as children of the HTML <ul> element 
// with an ID of favorite-foods

    document.getElementById("favorite-foods").appendChild(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

profile.hobbies.forEach( x => {
    let li = document.createElement("li");
    li.textContent = x;
    document.getElementById("hobbies").appendChild(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with 
// an ID of places-lived

profile.placesLived.forEach((x) => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    
    dt.textContent = x.place;
    dd.textContent = x.length;

    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});


