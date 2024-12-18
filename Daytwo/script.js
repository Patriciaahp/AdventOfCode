
	let domElem = document.getElementById("rows");
	let domElemText = domElem.innerHTML.trim();
	let row = domElemText.match(/^([^\n]+)$/gm);
	let i = 0;
	let row2 = [];
	while (i < row.length) {
		row2[i] = row[i].replace(/[\n\t\r]/g, "");
		i++;
	}
	//row[2].replace(/[\n\t\r]/g,"");

	let j = 0;
	let num = [];
	while (j < row2.length) {
		num[j] = row2[j].split(" ").map(Number);
		j++;
	}
	//let safe = 0;
	let resul = 0;
	let contador = 0;
	let k = 0;
	let h = 1;
	let direction = null;

	while (k < num.length) {

		if (contador === 0) {
			while (h < num[k].length) {


				if (Math.abs(num[k][h] - num[k][h - 1]) > 3 || Math.abs(num[k][h] - num[k][h - 1]) < 1) {
					contador++;
				}
				if (direction === null) {
					direction = num[k][h] > num[k][h - 1] ? "increasing" : "decreasing";
				} else if (direction === "increasing" && num[k][h] < num[k][h - 1]) {
					contador++;
				} else if (direction === "decreasing" && num[k][h] > num[k][h - 1]) {
					contador++;
				} h++;
			}
			if (contador != 0) {
				resul++;
			}
			direction = null;
			contador = 0;
			k++;
			h = 1;
		}
	}

	window.alert("safe rows: " + (1000 - resul));
