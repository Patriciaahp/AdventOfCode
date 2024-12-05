let similarityScore = 0;
let res = 0;
let i = 0;
let domElement = document.getElementById("columns");

let nums2 = domElement.innerHTML.trim();
let colI = nums2.match(/(?<=\s)\d+(?=\s)(?!\n)/g);
let colD = nums2.match(/(?<=\s)\d+(?=\n)/g);

colD.splice(999, 0, "21592");
colI.splice(0, 0, "87501");

colD.sort((a, b) => a - b);
colI.sort((a, b) => a - b);
let length = colD.length;
while (i < length) { res = res + Math.abs(colI[i] - colD[i]); i++ }
window.alert("distance between lists" + res);
let resul = 0;
let count = 0;
i = 0;
let j = 0;
while (i < colI.length) {
    while (j < colD.length) {
        if (colI[i] === colD[j]) {
            count++;

        }
        j++;

    }
    resul = resul + (colI[i] * count);
    count = 0;
    j = 0;
    i++;
}

window.alert("similarity score" + resul);
