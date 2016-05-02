"use strict";

function btnProperties() {
    
    var btnRef = document.getElementById("button-link"),
        paddingVal = document.getElementById("padding").value,
        radiusVal = document.getElementById("radius").value,
        fontSizeVal = document.getElementById("font-size").value,
        borderVal = document.getElementById("border").value,
        labelRef = document.getElementById("label"),
        colorVal = document.getElementById("color").value,
        blackRadio = document.getElementById("black"),
        whiteRadio = document.getElementById("white"),
        i;
    
    btnRef.style.padding = paddingVal + "px";
    btnRef.style.borderRadius = radiusVal + "px";
    btnRef.style.fontSize = fontSizeVal + "px";
    if (borderVal > 0) {
        btnRef.style.border = borderVal + "px solid black";
    }
    btnRef.innerHTML = labelRef.value;
    btnRef.style.backgroundColor = colorVal;
    
    if (whiteRadio.checked) {
        
        btnRef.style.color = "#fff";
        
    }
    
    if (blackRadio.checked) {
        
        btnRef.style.color = "#000";
        
    }
        
}

function getCSS() {
    
    var btnRef = document.getElementById("button-link"),
        paddingVal = document.getElementById("padding").value,
        radiusVal = document.getElementById("radius").value,
        fontSizeVal = document.getElementById("font-size").value,
        borderVal = document.getElementById("border").value,
        labelRef = document.getElementById("label"),
        colorVal = document.getElementById("color").value,
        blackRadio = document.getElementById("black"),
        whiteRadio = document.getElementById("white"),
        codeDiv = document.getElementById("codeDiv");
    
    codeDiv.innerHTML = null;
    
    codeDiv.innerHTML += "#button {\n";
    codeDiv.innerHTML += "\tposition: absolute;\n";
    codeDiv.innerHTML += "\tpadding: " + paddingVal + "px;\n";
    codeDiv.innerHTML += "\tbackground-color: " + colorVal + ";\n";
    codeDiv.innerHTML += "\tcolor: " + btnRef.style.color + ";\n";
    if (borderVal > 0) {
        codeDiv.innerHTML += "\tborder: " + borderVal + "px solid black;\n";
    }
    codeDiv.innerHTML += "\tborder-radius: " + radiusVal + "px;\n";
    codeDiv.innerHTML += "\tfont-size: " + fontSizeVal + "px;\n";
    codeDiv.innerHTML += "\ttext-decoration: none;\n";
    codeDiv.innerHTML += "\tbox-shadow: 5px 5px 30px 1px #64656C;\n";
    codeDiv.innerHTML += "}";
    
}

function prepareGUI() {
    
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
    
    btnProperties();
    
    radiusRef.addEventListener("input", btnProperties, false);
    paddingRef.addEventListener("input", btnProperties, false);
    fontSizeRef.addEventListener("input", btnProperties, false);
    borderRef.addEventListener("input", btnProperties, false);
    labelRef.addEventListener("input", btnProperties, false);
    colorRef.addEventListener("input", btnProperties, false);
    blackRadio.addEventListener("click", btnProperties, false);
    whiteRadio.addEventListener("click", btnProperties, false);
    getCSSBtn.addEventListener("click", getCSS, false);
    
}

window.addEventListener("load", prepareGUI, false);