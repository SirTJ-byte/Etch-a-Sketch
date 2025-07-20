const container = document.getElementById("container");
const inputField = document.getElementById("inputField");
const button = document.getElementById("btn");

const hoverEffect = (event) => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	const randomColor = `rgb(${r},${g},${b})`;
	event.target.style.backgroundColor = randomColor;
};

const create = () => {
	let inputNum = Number(inputField.value.trim());
	const newCells = inputNum * inputNum;
	container.textContent = "";

	for (let newInputNum = 0; newInputNum < newCells; newInputNum++) {
		const newElem = document.createElement("div");
		newElem.style.width = 400 / inputNum + "px";
		newElem.style.height = 400 / inputNum + "px";
		container.appendChild(newElem);
		newElem.classList.add("grid-cells");
		newElem.addEventListener("mouseover", hoverEffect);
	}
};
button.addEventListener("click", create);
