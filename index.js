
//const element = document.createElement("div");
const p = document.createElement("p");
//document.body.append(element);

const newHeader = document.createElement("h1");

document.getElementById("main").remove();
console.log("first")
p.style.color = "red";
newHeader.innerHTML = "is the champion"
document.body.append(newHeader);
document.body.append(p);
p.innerHTML = "hello world"
newHeader.setAttribute("id", "victory")


//document.body.removeChild("main");


// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }

// element.append(ul);

// const ull = document.getElementsById("main")

// document.removeChild(ull);
// const newHeader = document.createElement("h1");
//document.body.append(newHeader);