/*jslint node: true */
/*jslint plusplus: true */
"use strict";

var btnRef = document.getElementById("button-link"),
    paddingRef = document.getElementById("padding"),
    radiusRef = document.getElementById("radius"),
    fontSizeRef = document.getElementById("font-size"),
    borderRef = document.getElementById("border"),
    labelRef = document.getElementById("label"),
    colorRef = document.getElementById("color"),
    blackRadio = document.getElementById("black"),
    whiteRadio = document.getElementById("white"),
    getCSSBtn = document.getElementById("getCSS");

function btnProperties() {
    
    var i;

    btnRef.style.padding = paddingRef.value + "px";
    btnRef.style.borderRadius = radiusRef.value + "px";
    btnRef.style.fontSize = fontSizeRef.value + "px";
    if (borderRef.value > 0) {
        btnRef.style.border = borderRef.value + "px solid black";
    }
    if (borderRef.value === "0") {
        btnRef.style.border = "none";
    }
    btnRef.innerHTML = labelRef.value;
    btnRef.style.backgroundColor = colorRef.value;

    if (whiteRadio.checked) {

        btnRef.style.color = "#fff";

    }

    if (blackRadio.checked) {

        btnRef.style.color = "#000";

    }

}

function getCSS() {
    
    var codeDiv = document.getElementById("codeDiv");
    
    codeDiv.innerHTML = null;
    
    codeDiv.innerHTML += "#button {\n";
    codeDiv.innerHTML += "\tposition: absolute;\n";
    codeDiv.innerHTML += "\tpadding: " + paddingRef.value + "px;\n";
    codeDiv.innerHTML += "\tbackground-color: " + colorRef.value + ";\n";
    codeDiv.innerHTML += "\tcolor: " + btnRef.style.color + ";\n";
    if (borderRef.value > 0) {
        codeDiv.innerHTML += "\tborder: " + borderRef.value + "px solid black;\n";
    }
    codeDiv.innerHTML += "\tborder-radius: " + radiusRef.value + "px;\n";
    codeDiv.innerHTML += "\tfont-size: " + fontSizeRef.value + "px;\n";
    codeDiv.innerHTML += "\ttext-decoration: none;\n";
    codeDiv.innerHTML += "\tbox-shadow: 5px 5px 30px 1px #64656C;\n";
    codeDiv.innerHTML += "}";
    
}

function prepareGUI() {

    btnProperties();

    radiusRef.addEventListener("input", btnProperties, false);
    paddingRef.addEventListener("input", btnProperties, false);
    fontSizeRef.addEventListener("input", btnProperties, false);
    borderRef.addEventListener("input", btnProperties, false);
    labelRef.addEventListener("input", btnProperties, false);
    colorRef.addEventListener("input", btnProperties, false);
    blackRadio.addEventListener("click", btnProperties, false);
    whiteRadio.addEventListener("click", btnProperties, false);

}

window.addEventListener("load", prepareGUI, false);