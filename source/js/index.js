// ||INPUT
const lengths = document.getElementById("length");
const generatorButton = document.getElementById("generatorButton");

// ||OUTPUT
const lengthOutput = document.getElementById("lengthOutput");
const passwordContainers = document.querySelectorAll(".passwords__output");
const passwordOutputs = document.querySelectorAll(".output");

// ||SET THE LENGTH
lengthOutput.textContent = lengths.value;

lengths.addEventListener("input", (event) => {
	lengthOutput.textContent = event.target.value;
	// lengths.setAttribute("value", event.target.value);
});

// ||GENERATE PASSWORD
generatorButton?.addEventListener("click", () => {
	//biome-ignore format: true
	const char = [
		"A","B","C","D","E","F","G","H","I",
		"J","K","L","M","N","O","P","Q","R",
		"S","T","U","V","W","X","Y","Z","a",
		"b","c","d","e","f","g","h","i","j",
		"k","l","m","n","o","p","q","r","s",
		"t","u","v","w","x","y","z","!","@",
		"#","$","%","^","&","*","(",")","_",
		"-","+","|","{","}","[","]","?",">",
		"<","/","\\",":",";",
	  0,1,2,3,4,5,6,7,8,9,];

	const length = lengths.value;

	for (let i = 0; i < passwordOutputs.length; i++) {
		let password = "";

		for (let i = 0; i < Number(length); i++) {
			const randomPassword = Math.floor(Math.random() * char.length);
			password += char[randomPassword];
		}

		passwordOutputs[i].textContent = password;
		passwordContainers[i].setAttribute("data-password", password);
	}
});

// ||COPY PASSWORD

const copy = (event) => {
	const target = event.currentTarget;
	if (target.dataset.password == undefined) return;

	navigator.clipboard
		.writeText(String(target.dataset.password))
		.then(() => alert("Copied"));
};

for (const passwordContainer of passwordContainers) {
	passwordContainer.addEventListener("click", copy);
}
