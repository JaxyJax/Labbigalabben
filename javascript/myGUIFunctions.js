/* myGUIFunctions.js */

"use strict";

window.addEventListener("load", prepareGUI, false);

function prepareGUI() {
			var pName = document.getElementsByClassName("pExpandedImage");
			var cName = document.getElementsByClassName("cExpanded");
			var i=pName.length;
			var r = document.querySelector("#contentsection");
			r.addEventListener("click", expandCollapse, false);
			
			while(i--)
				pName[i].setAttribute("class", "pCollapsedImage");

			i=cName.length;
			while(i--)
				cName[i].setAttribute("class", "cCollapsed");

			/* ~~~~~~~~~ Alternativ loop ~~~~~~~~~~ //OBS! Kräver annan variabeldeklaration
			for (i=0; i < pName.length; i++)
				pName[i].setAttribute("class", "pCollapsedImage");
			for(i=0; i < cName.length; i++)
				cName[i].setAttribute("class", "cCollapsed");
			*/
}

function expandCollapse(klick) {
			

			var t = document.querySelectorAll("[title=parent]");
			var total = t.length;
			var i;
			var clickRef = klick.target;   // den jag klickar på
			var x = klick.target;
			
			for( i=0; i<=t.length; i++){

				if(clickRef === t[i-1]){

						if(clickRef.getAttribute("class") =="pExpandedImage"){
						 	clickRef.className = "pCollapsedImage";
						 	total = t.length[clickRef];
					 		document.querySelector("#ulChild"+i).setAttribute("class", "cCollapsed");
						}

						else if(clickRef.getAttribute("class") == "pCollapsedImage"){
							clickRef.className = "pExpandedImage";
					 		document.querySelector("#ulChild"+i).setAttribute("class", "cExpanded");

						}
						
						//document.getElementById("sitefooter").innerHTML = "Triggered by a " + clickRef.tagName + " element  " + clickRef.className;
				}
			}
		}
