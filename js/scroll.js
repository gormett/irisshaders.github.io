const colors = [
	"#f6bb41",
	"#83d656",
	"#39e49e",
	"#3975de",
	"#4cc7f9",
	"#e282eb",
	"#f03a4f",
	"#f37c3a",
];
let colorIndex = 0;

window.onload = function () {
	const body = document.querySelector("body");
	body.addEventListener("mouseover", function () {
		body.style.setProperty("--changing-color", colors[colorIndex]);
		colorIndex = (colorIndex + 1) % colors.length;
	});
};
