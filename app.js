let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let price = {'1': 5, '2': 5, "3": 5, '4': 5, '5': 5, '6': 5};

let value_text_1 = document.getElementById("value_text_1");
let value_text_2 = document.getElementById("value_text_2");
let value_text_3 = document.getElementById("value_text_3");
let value_text_4 = document.getElementById("value_text_4");
let value_text_5 = document.getElementById("value_text_5");
let value_text_6 = document.getElementById("value_text_6");

let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let btn1_minus = document.getElementById("btn1:2");
let btn2_minus = document.getElementById("btn2:2");
let btn3_minus = document.getElementById("btn3:2");
let btn4_minus = document.getElementById("btn4:2");
let btn5_minus = document.getElementById("btn5:2");
let btn6_minus = document.getElementById("btn6:2");

let btn1_plus = document.getElementById("btn1:1");
let btn2_plus = document.getElementById("btn2:1");
let btn3_plus = document.getElementById("btn3:1");
let btn4_plus = document.getElementById("btn4:1");
let btn5_plus = document.getElementById("btn5:1");
let btn6_plus = document.getElementById("btn6:1");

function total_price() {
	return price['1'] * value1 + price['2'] * value2 + price['3'] * value3 + price['4'] * value4 + price['5'] * value5 + price['6'] * value6
}


btn1.addEventListener("click", function(){
	btn1.style.display = "none"
	value1 = value1 + 1
	value_text_1.style.display = "inline-block"
	document.getElementById("value_text_1").textContent = value1
	btn1_plus.style.display = "inline-block"
	btn1_minus.style.display = "inline-block"
	if (tg.MainButton.isVisible) {
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		tg.MainButton.setText(`Price: ${total_price()}`)
		tg.MainButton.show()
	}
});

btn1_minus.addEventListener("click", function () {
	value1 = value1 - 1
	if (value1 !== 0) {
		document.getElementById("value_text_1").textContent = value1
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		btn1.style.display = "inline-block"
		btn1_minus.style.display = "none"
		btn1_plus.style.display = "none"
		value_text_1.style.display = "none"
		if (total_price() === 0) {tg.MainButton.hide()}
	}
})

btn1_plus.addEventListener("click", function () {
	value1 = value1 + 1
	document.getElementById("value_text_1").textContent = value1
	tg.MainButton.setText(`Price: ${total_price()}`)
});


btn2.addEventListener("click", function() {
	btn2.style.display = "none"
	value2 = value2 + 1
	value_text_2.style.display = "inline-block"
	document.getElementById("value_text_2").textContent = value2
	btn2_plus.style.display = "inline-block"
	btn2_minus.style.display = "inline-block"
	if (tg.MainButton.isVisible) {
		tg.MainButton.setText(`Price: ${total_price()}`)
	} else {
		tg.MainButton.setText(`Price: ${total_price()}`)
		tg.MainButton.show()
	}
});

btn2_minus.addEventListener("click", function () {
	value2 = value2 - 1
	if (value2 !== 0) {
		document.getElementById("value_text_2").textContent = value2
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		btn2.style.display = "inline-block"
		btn2_minus.style.display = "none"
		btn2_plus.style.display = "none"
		value_text_2.style.display = "none"
		if (total_price() === 0) {tg.MainButton.hide()}
	}
})

btn2_plus.addEventListener("click", function () {
	value2 = value2 + 1
	document.getElementById("value_text_2").textContent = value2
	tg.MainButton.setText(`Price: ${total_price()}`)
});

btn3.addEventListener("click", function() {
	btn3.style.display = "none"
	value3 = value3 + 1
	value_text_3.style.display = "inline-block"
	document.getElementById("value_text_3").textContent = value3
	btn3_plus.style.display = "inline-block"
	btn3_minus.style.display = "inline-block"
	if (tg.MainButton.isVisible) {
		tg.MainButton.setText(`Price: ${total_price()}`)
	} else {
		tg.MainButton.setText(`Price: ${total_price()}`)
		tg.MainButton.show()
	}
});

btn3_minus.addEventListener("click", function () {
	value3 = value3 - 1
	if (value3 !== 0) {
		document.getElementById("value_text_3").textContent = value3
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		btn3.style.display = "inline-block"
		btn3_minus.style.display = "none"
		btn3_plus.style.display = "none"
		value_text_3.style.display = "none"
		if (total_price() === 0) {tg.MainButton.hide()}
	}
})

btn3_plus.addEventListener("click", function () {
	value3 = value3 + 1
	document.getElementById("value_text_3").textContent = value3
	tg.MainButton.setText(`Price: ${total_price()}`)
});

btn4.addEventListener("click", function() {
	btn4.style.display = "none"
	value4 = value4 + 1
	value_text_4.style.display = "inline-block"
	document.getElementById("value_text_4").textContent = value4
	btn4_plus.style.display = "inline-block"
	btn4_minus.style.display = "inline-block"
	if (tg.MainButton.isVisible) {
		tg.MainButton.setText(`Price: ${total_price()}`)
	} else {
		tg.MainButton.setText(`Price: ${total_price()}`)
		tg.MainButton.show()
	}
});

btn4_minus.addEventListener("click", function () {
	value4 = value4 - 1
	if (value4 !== 0) {
		document.getElementById("value_text_4").textContent = value4
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		btn4.style.display = "inline-block"
		btn4_minus.style.display = "none"
		btn4_plus.style.display = "none"
		value_text_4.style.display = "none"
		if (total_price() === 0) {tg.MainButton.hide()}
	}
})

btn4_plus.addEventListener("click", function () {
	value4 = value4 + 1
	document.getElementById("value_text_4").textContent = value4
	tg.MainButton.setText(`Price: ${total_price()}`)
});

btn5.addEventListener("click", function() {
	btn5.style.display = "none"
	value5 = value5 + 1
	value_text_5.style.display = "inline-block"
	document.getElementById("value_text_5").textContent = value5
	btn5_plus.style.display = "inline-block"
	btn5_minus.style.display = "inline-block"
	if (tg.MainButton.isVisible) {
		tg.MainButton.setText(`Price: ${total_price()}`)
	} else {
		tg.MainButton.setText(`Price: ${total_price()}`)
		tg.MainButton.show()
	}
});

btn5_minus.addEventListener("click", function () {
	value5 = value5 - 1
	if (value5 !== 0) {
		document.getElementById("value_text_5").textContent = value5
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		btn5.style.display = "inline-block"
		btn5_minus.style.display = "none"
		btn5_plus.style.display = "none"
		value_text_5.style.display = "none"
		if (total_price() === 0) {tg.MainButton.hide()}
	}
})

btn5_plus.addEventListener("click", function () {
	value5 = value5 + 1
	document.getElementById("value_text_5").textContent = value5
	tg.MainButton.setText(`Price: ${total_price()}`)
});

btn6.addEventListener("click", function() {
	btn6.style.display = "none"
	value6 = value6 + 1
	value_text_6.style.display = "inline-block"
	document.getElementById("value_text_6").textContent = value6
	btn6_plus.style.display = "inline-block"
	btn6_minus.style.display = "inline-block"
	if (tg.MainButton.isVisible) {
		tg.MainButton.setText(`Price: ${total_price()}`)
	} else {
		tg.MainButton.setText(`Price: ${total_price()}`)
		tg.MainButton.show()
	}
});

btn6_minus.addEventListener("click", function () {
	value6 = value6 - 1
	if (value6 !== 0) {
		document.getElementById("value_text_6").textContent = value6
		tg.MainButton.setText(`Price: ${total_price()}`)
	}
	else {
		btn6.style.display = "inline-block"
		btn6_minus.style.display = "none"
		btn6_plus.style.display = "none"
		value_text_6.style.display = "none"
		if (total_price() === 0) {tg.MainButton.hide()}
	}
})

btn6_plus.addEventListener("click", function () {
	value6 = value6 + 1
	document.getElementById("value_text_6").textContent = value6
	tg.MainButton.setText(`Price: ${total_price()}`)
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);