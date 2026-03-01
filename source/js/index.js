// ||INPUT
let lengths = document.getElementById("length");
let generatorButton = document.getElementById("generatorButton");

// ||OUTPUT
let lengthOutput = document.getElementById("lengthOutput");
let outputOne = document.getElementById("outputOne");
let outputTwo = document.getElementById("outputTwo");
let outputThree = document.getElementById("outputThree");
let outputFour = document.getElementById("outputFour");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let passwordThree = document.getElementById("passwordThree");
let passwordFour = document.getElementById("passwordFour");

// ||SET THE LENGTH
lengthOutput.textContent = String(lengths.value);

lengths.addEventListener("input", (event) => {
	lengthOutput.textContent = String(event.target.value);
	lengths.setAttribute("value", event.target.value);
});

// ||GENERATE PASSWORD
generatorButton?.addEventListener("click", (length) => {
	//biome-ignore format: true
	let char = [
	  "a","b","c","d","e","f","g","h","i",
	  "j","k","l","m","n","o","p","q","r",
	  "s","t","u","v","w","x","y","z","!",
	  "@","#","$","%","^","&","*","(",")",
	  "_","-","+","|","{","}","[","]","?",
	  ">","<","/","\\",":",";",
	  0,1,2,3,4,5,6,7,8,9,];

	let password_one = "";
	let password_two = "";
	let password_three = "";
	let password_four = "";

	length = lengths.value;

	for (let i = 0; i < Number(length); i++) {
		let randomPasswordOne = Math.floor(Math.random() * char.length);
		let randomPasswordTwo = Math.floor(Math.random() * char.length);
		let randomPasswordThree = Math.floor(Math.random() * char.length);
		let randomPasswordFour = Math.floor(Math.random() * char.length);

		password_one += char[randomPasswordOne];
		password_two += char[randomPasswordTwo];
		password_three += char[randomPasswordThree];
		password_four += char[randomPasswordFour];
	}

	passwordOne.textContent = String(password_one);
	passwordTwo.textContent = String(password_two);
	passwordThree.textContent = String(password_three);
	passwordFour.textContent = String(password_four);

	outputOne.setAttribute("data-password", String(passwordOne?.textContent));
	outputTwo.setAttribute("data-password", String(passwordTwo?.textContent));
	outputThree.setAttribute("data-password", String(passwordThree?.textContent));
	outputFour.setAttribute("data-password", String(passwordFour?.textContent));
});

// ||COPY PASSWORD
outputOne?.addEventListener("click", () => {
	if (String(outputOne?.dataset.password) != String(passwordOne?.textContent)) {
		return false;
	} else {
		navigator.clipboard
			.writeText(String(outputOne?.dataset.password))
			.then(() => {
				alert("Copied");
			});
	}
});

outputTwo?.addEventListener("click", () => {
	if (String(outputTwo?.dataset.password) != String(passwordTwo?.textContent)) {
		return false;
	} else {
		navigator.clipboard
			.writeText(String(outputTwo?.dataset.password))
			.then(() => {
				alert("Copied");
			});
	}
});

outputThree?.addEventListener("click", () => {
	if (
		String(outputThree?.dataset.password) != String(passwordThree?.textContent)
	) {
		return false;
	} else {
		navigator.clipboard
			.writeText(String(outputThree.dataset.password))
			.then(() => {
				alert("Copied");
			});
	}
});

outputFour?.addEventListener("click", () => {
	if (
		String(outputFour?.dataset.password) != String(passwordFour?.textContent)
	) {
		return false;
	} else {
		navigator.clipboard
			.writeText(String(outputFour.dataset.password))
			.then(() => {
				alert("Copied");
			});
	}
});
