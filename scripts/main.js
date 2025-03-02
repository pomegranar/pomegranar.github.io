const h2Elements = document.querySelectorAll("h2");

h2Elements.forEach((h2) => {
	const hr = document.createElement("hr");
	const br = document.createElement("br");
	h2.insertAdjacentElement("afterend", hr);
	h2.insertAdjacentElement("beforebegin", br);
});
