const button = document.querySelector(".addnew");
let nameList = [];
let pointsList = [];
getData();

button.addEventListener("click", () => {
    const list = document.querySelector("#list");
    
    const section = document.createElement("section");
    section.setAttribute("class", "unit")

    const chooseName = document.createElement("select");
    chooseName.setAttribute("name", "name");
    chooseName.setAttribute("class", "name");
    chooseName.addEventListener("change", onSelectBoxChange);
  
    const y = document.createElement("option");
    y.text = "";
    chooseName.options.add(y);
    
    nameList.forEach (name => {
        let y = document.createElement("option");
        y.value = name
        y.text = name;
        chooseName.options.add(y)});

    let chosenName = y.value;
        console.log(chosenName);

    const input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("class", "models");
    input.addEventListener("input", onModelCountBox);

    const span = document.createElement("span");
    input.setAttribute("class", "points");
    span.textContent = 0;
    
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

function onModelCountBox(e) {
    let points = e.target.nextElementSibling;
    let selectBox = e.target.previousSibling;
    let selectBoxValue = selectBox.options[selectBox.selectedIndex].value;
    let index = getIndex(selectBoxValue);
    points.textContent = getTotal(e.target.value, index);
}

function onSelectBoxChange(e) {
    let points = e.target.nextElementSibling.nextElementSibling;
    let models = e.target.nextElementSibling.value;
    let selectBoxValue = e.target.options[e.target.selectedIndex].value;
    let index = getIndex(selectBoxValue);
    points.textContent = getTotal(models, index);
}


function getTotal(value, index) {
    const total = value * pointsList[index];
    return total;
}

function getIndex(name) {
    for (let i = 0; i < nameList.length; i++){
        if (name == nameList[i]){
            return i;
    }}}

async function getData() {
    let url = "images/tyranids.csv";
    
    const response = await fetch(url);
    const data = await response.text();

    const dict = data.split("\n").slice(1);

    console.log(dict);

    dict.forEach(line => {
        const item = line.split(",");
        const name = item[0];
        const points = parseInt(item[3].replace("\r", ""));

        nameList.push(name);
        pointsList.push(points);
    })};

