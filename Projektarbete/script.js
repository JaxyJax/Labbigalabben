/*jslint node: true */
/*jslint plusplus: true */
"use strict";

function windowLoaded() {

    var canvas = document.getElementById("c"),
        context = canvas.getContext("2d"),
        xWing = new Image(),
        xPos = 10,
        yPos = 10;

    // Bildkälla: http://orig07.deviantart.net/a508/f/2012/221/f/0/incom_t65b_x_wing_starfighter_sprite_by_pacrankydm-d5ai3lk.gif
    xWing.src = "xwing.gif";
    xWing.width = 60;
    xWing.height = 60;

    function drawScreen() {

        // Bakgrundsfärg
        context.fillStyle = "black";
        context.fillRect(0, 0, 500, 400);

        // Ram
        context.strokeStyle = "#FFE800";
        context.lineWidth = 2;
        context.strokeRect(10, 10, 480, 380);

        // Cirkel
        context.beginPath(); // Påbörjar cirkeln
        context.strokeStyle = "#333333"; // Linjefärg
        context.fillStyle = "grey"; // fyllfärg
        context.lineWidth = 5; // Linjens tjocklek
        context.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2, true);
        context.stroke(); // Cirkelns stroke
        context.fill(); // Fyller cirkeln med färg
        context.closePath(); // Avslutar cirkeln

        // Vänsteröga
        context.beginPath();
        context.fillStyle = "#666666";
        context.lineWidth = 5;
        context.arc((canvas.width / 2) - 45, (canvas.height / 2) - 20, 30, 0, Math.PI * 2, true);
        context.stroke();
        context.fill();
        context.closePath();

        context.beginPath();
        context.fillStyle = "black";
        context.lineWidth = 5;
        context.arc((canvas.width / 2) - 45, (canvas.height / 2) - 20, 15, 0, Math.PI * 2, true);
        context.stroke();
        context.fill();
        context.closePath();

        // Laser
        context.beginPath();
        context.fillStyle = "grey";
        context.moveTo((canvas.width / 2) - 45, (canvas.height / 2) - 20);
        context.lineTo((canvas.width / 2) - 70, (canvas.height / 2) - 30);
        context.stroke();
        context.closePath();

        context.fillStyle = "#7C3B8A";
        context.fillRect(30, 30, 30, 30);

        context.fillStyle = "#6963B5";
        context.fillRect(440, 340, 30, 30);

        // X-Wing

        context.drawImage(xWing, xPos, yPos, 60, 60);


    }

    // Kontroller - Inspiration från kurslitteratur s. 157
    document.onkeydown = function (e) {

        switch (e.keyCode) {

        case 38:
            // arrowup
            yPos -= 10;
            if (yPos < 0) {
                yPos = 0;
            }
            break;

        case 40:
            // arrowdown
            yPos += 10;
            if (yPos > canvas.height - xWing.height) {
                yPos = canvas.height - xWing.height;
            }
            break;

        case 37:
            // arrowleft
            xPos -= 10;
            if (xPos < 0) {
                xPos = 0;
            }
            break;

        case 39:
            // arrowright
            xPos += 10;
            if (xPos > canvas.width - xWing.width) {
                xPos = canvas.width - xWing.width;
            }
            break;
        }

    }

    setInterval(drawScreen, 50);
    console.log(xWing.height + " " + xWing.width);

}

window.addEventListener("load", windowLoaded, false);