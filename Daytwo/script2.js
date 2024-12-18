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
	
	let resul = 0;
	let k = 0;
	let h = 1;

	while (k < num.length) {
		let directionChange = 0;
		let direction = null;
		let contador = 0;
		h = 1;
		if (contador === 0) {
			while (h < num[k].length) {
	let diff = Math.abs(num[k][h] - num[k][h - 1]);

				if (diff > 3 || diff < 1) {
	
					contador++;
					if (diff === 0) contador--;
				}
				if (direction === null) {
					direction = num[k][h] > num[k][h - 1] ? "increasing" : "decreasing";
				} else if (direction === "increasing" && num[k][h] < num[k][h - 1]) {
					directionChange++;
				} else if (direction === "decreasing" && num[k][h] > num[k][h - 1]) {
					directionChange++;
				} h++;
			}
			if (directionChange > 1) contador++;

			if (contador != 0) resul++;

			
			k++;

		}
	}

	window.alert("safe rows: " + (1000 - resul));
