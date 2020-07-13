"use strict";

let table = "";

for (let i = 8; i > 0; i--) {
    let row = "";
    for (let j = 0; j < 8; j++) {
        if (i % 2 == j % 2) {
            row += "<td><\/td>";
        }
        else {
            row += "<td class=\"black\"><\/td>";
        }
    };
    table += "<tr><td>" + i + "<\/td>" + row + "<\/tr>";
};

table += "<tr><td class=\"streak\"><\/td>";

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for (let i = 0; i < 8; i++) {
    table += "<td>" + chars[i] + "<\/td>";
};

table = "<table>" + table + "<\/tr><\/table>";

document.body.innerHTML += table;
