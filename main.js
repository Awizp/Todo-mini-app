let ul = document.querySelector("ul")
let listItems = document.querySelector("li");
let inputValue = document.querySelector("input")
let addBtn = document.querySelector(".btn")

addBtn.addEventListener("click", () => {
    if (inputValue.value.length >= 3) {
        let div = document.createElement("div");
        let textValue = document.createTextNode(inputValue.value);

        div.appendChild(textValue)
        div.classList.add("lists");
        ul.appendChild(div)
        inputValue.value = "";

        div.addEventListener("click", () => {
            div.classList.toggle("done")
        })

        let closeDiv = document.createElement("div");
        closeDiv.classList.add("close");
        let closeBtn = document.createTextNode("X");
        closeDiv.appendChild(closeBtn)
        div.appendChild(closeDiv);

        closeDiv.addEventListener("click", () => {
            div.removeChild(closeDiv)
            ul.removeChild(div);
        })
    }
})