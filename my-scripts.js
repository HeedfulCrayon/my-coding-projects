// Store the data
var projectList = (JSON.parse(localStorage.getItem("projectList")) || [])

// create items
function createItem() {
	var listItem = {text: window.prompt("Enter a project"), style:"none"}
	projectList.push(listItem)
	localStorage.setItem("projectList",JSON.stringify(projectList))
	printItem(listItem)
}

// print item
function printItem(item) {
	var p = document.createElement("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function () {
		this.className = item.style = (this.className == "none") ? "strike" : "invisible"
		localStorage.setItem("projectList",JSON.stringify(projectList))
	}
	document.getElementById("myDiv").appendChild(p)
}

for (var i = 0; i < projectList.length; i++) {
	printItem(projectList[i])
}