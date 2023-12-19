function funcDeclaration () {
    const currentDiv = document.getElementById("paragraph2")
    const intro = document.createElement("h1");
    intro.innerHTML = "Introduction";
    currentDiv.insertBefore(intro, paragraph2.children[0])
    document.querySelector("#paragraph2 h1").classList.add("everyHeading");
};

funcDeclaration()

const myFunction =  function functionExpression (){
    const rooms = ["Kitchen", "Livingroom", "Bedroom", "Bathhroom"]
    const newList = document.createElement("ul")
    
    
    rooms.forEach((item) => {
        const liElement = document.createElement("li");
        liElement.textContent = item;
        newList.appendChild(liElement);
    });
    document.body.appendChild(newList)
};
myFunction()