const button = document.querySelector(".addnew");
let nameList = [];
let pointsList = [];
getData();
console.log(nameList);
console.log(pointsList);

button.addEventListener("click", () => {
    const list = document.querySelector("#list");
    const section = document.createElement("section");
    section.setAttribute("class", "unit")

    const chooseName = document.createElement("select");
    chooseName.setAttribute("name", "name");
    chooseName.setAttribute("class", "name");
    chooseName.setAttribute("onchange", chooseName.value);
  
    const y = document.createElement("option");
    y.text = "";
    chooseName.options.add(y);
    
    nameList.forEach (name => {
        let y = document.createElement("option");
        y.setAttribute("value", "name");
        y.setAttribute("onchange", "name");
        y.text = name;
        chooseName.options.add(y)});

    let chosenName = y.value;
        console.log(chosenName);

    const input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("class", "models");
    input.defaultValue = 0;

    const span = document.createElement("span");
    input.setAttribute("class", "points");
    span.textContent = 50;
    
    // merge name and point list, when looping through each try
    // splitting the values by "\n" should hopefully give 2 indexes
    // then can try "if name = list[0] then points = list[1]"
    
    
    // let points = nameList.forEach (name => {
    //    let index = () => {
    //        for (let i = 0; i < nameList; i++){
    //         console.log(i);
    //         if (nameList == name) {
    //             const index = i;
    //             console.log(index);
    //             return index
    //        }}}
    //         const total = input.value * pointsList[index];
    //         return total
            

    // })
    // span.textContent = points;

    const remove = document.createElement("button");
    input.setAttribute("class", "remove");
    remove.textContent = "❌";
    remove.addEventListener('click', () => {
        list.removeChild(section)});

    section.appendChild(chooseName);
    section.appendChild(input);
    section.appendChild(span);
    section.append(remove);

    list.appendChild(section);
});

async function getData() {
    let url = "images/tyranids.csv";
    
    const response = await fetch(url);
    const data = await response.text();

    const dict = data.split("\n").slice(1);

    console.log(dict);

    dict.forEach(line => {
        const item = line.split(",");
        // console.log(item);
        const name = item[0];
        const points = item[3];

        nameList.push(name);
        pointsList.push(points);
    })};