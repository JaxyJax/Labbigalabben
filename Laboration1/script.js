"use strict";

function windowLoaded() {

    var canvas = document.getElementById("c"),
        context = canvas.getContext("2d"),
        xWing = new Image(),
        rotation = 0,
        xPos = 30,
        yPos = 30;

    // Bildkälla: http://orig07.deviantart.net/a508/f/2012/221/f/0/incom_t65b_x_wing_starfighter_sprite_by_pacrankydm-d5ai3lk.gif
    xWing.src = "xwing.gif";
    xWing.width = 60;
    xWing.height = 60;

    function drawScreen() {

        var xCenter = canvas.width / 2,
            yCenter = canvas.height / 2;

        // Bakgrundsfärg
        context.fillStyle = "black";
        context.fillRect(0, 0, 500, 400);

        // Ram
        context.strokeStyle = "#FFE800";
        context.lineWidth = 2;
        context.strokeRect(10, 10, 480, 380);

        // Deathstar main - Figur 1
        var mainGrd = context.createRadialGradient(xCenter - 150, yCenter + 120, 240, xCenter - 150, yCenter + 120, 180); // Gradient
        mainGrd.addColorStop(0, "grey");
        mainGrd.addColorStop(1, "#262626");
        context.beginPath(); // Påbörjar cirkeln
        context.strokeStyle = "#262626"; // Linjefärg
        context.fillStyle = mainGrd; // Fyllfärg är tidigare skapad gradient
        context.lineWidth = 5; // Linjens tjocklek
        context.arc(xCenter, yCenter, 100, 0, Math.PI * 2, true); // Skapar en cirkel med 100px i radie
        context.stroke(); // Cirkelns stroke
        context.fill(); // Fyller cirkeln med färg
        context.closePath(); // Avslutar cirkeln

        // Ekvatorlinje - Figur 2
        context.strokeStyle = "#252525"; // Linjefärg
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(xCenter - 100, yCenter); // Flytta till där linjen ska börja
        context.quadraticCurveTo(xCenter - 30, yCenter + 25, xCenter + 100, yCenter); // Punkter där linjen ska målas ut
        context.stroke();
        context.closePath();

        // Öga - Figur 3
        var eyeGrd = context.createRadialGradient(xCenter - 30, yCenter - 30, 40, xCenter - 15, yCenter - 45, 30);
        eyeGrd.addColorStop(0, "grey");
        eyeGrd.addColorStop(1, "#262626");
        context.beginPath();
        context.strokeStyle = "#353535";
        context.fillStyle = eyeGrd;
        context.lineWidth = 5;
        context.arc(xCenter - 35, yCenter - 30, 30, 0, Math.PI * 2, true);
        context.stroke();
        context.fill();
        context.closePath();

        // Liten rektangel upp i vänstra hörnet - Figur 4
        context.fillStyle = "#7C3B8A";
        context.fillRect(30, 30, 30, 30);

        // Liten rektangel nere i högra hörnet - Figur 5
        context.fillStyle = "#6963B5";
        context.fillRect(440, 340, 30, 30);
        
        // Liten halvmåne uppe i högra hörnet - Figur 6
        var moonGrd = context.createRadialGradient(420, 70, 20, 440, 60, 100);
        moonGrd.addColorStop(0, "black");
        moonGrd.addColorStop(1, "red");
        context.beginPath();
        context.fillStyle = moonGrd;
        context.lineWidth = 5;
        context.arc(440, 60, 30, Math.PI / 180 * -145, Math.PI / 180 * 55, false);
        context.fill();

        // X-Wing
        // Transformation - Inspiration från kurslitteratur s. 389
        var angleInRadians = rotation * Math.PI / 180;
        context.save(); // Spara canvas som den är hittills
        context.setTransform(1, 0, 0, 1, 0, 0);

        context.translate(xPos, yPos);
        context.rotate(angleInRadians);

        // Skugga
        context.shadowColor = "black";
        context.shadowBlur = 30;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        
        // Ritas på width/2 för att centrera rotationen
        context.drawImage(xWing, -xWing.width / 2, -xWing.width / 2, xWing.width, xWing.height);

        // Hämtar den tidigare sparade canvasen. Denna tillsammans med context.save() gör att X-Wingen och bakgrunden ritas ut som det ska
        context.restore();

    }

    // Kontroller - Inspiration från kurslitteratur s. 157
    function controls(e) {

        var speed = 10;

        switch (e.keyCode) {

        case 38:
            // Pil upp
            yPos -= speed;
            rotation = 0;
            if (yPos < xWing.height / 2) {
                yPos = xWing.height / 2;
            }
            break;

        case 40:
            // Pil ner
            yPos += speed;
            rotation = 180;
            if (yPos > canvas.height - xWing.height / 2) {
                yPos = canvas.height - xWing.height / 2;
            }
            break;

        case 37:
            // Pil vänster
            xPos -= speed;
            rotation = 270;
            if (xPos < xWing.width / 2) {
                xPos = xWing.height / 2;
            }
            break;

        case 39:
            // Pil höger
            xPos += speed;
            rotation = 90;
            if (xPos > canvas.width - xWing.width / 2) {
                xPos = canvas.width - xWing.width / 2;
            }
            break;
        }

    }

    setInterval(drawScreen, 10);

    document.addEventListener("keydown", controls, false); // Lyssnare till knapptryck

}

window.addEventListener("load", windowLoaded, false);