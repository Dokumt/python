function hover() {
	this.animate
	(
		[
			{
				transform: "rotate(0deg)"
			},
			{
				transform: "rotate(12deg)"
			},
			{
				transform: "rotate(-12deg)"
			},
			{
				transform: "rotate(0deg)"
			}
		],
		{
			duration: 400,
			easing: "ease",
			fill: "forwards"
		}
	);
}

document.addEventListener("DOMContentLoaded", (e) => {
	document.querySelectorAll(".cursor").forEach
	((item) =>
		{
			item.addEventListener("mouseover", hover);
		}
	);
});



function visible(cursor) {
	var direction;

	if (cursor.parentElement.parentElement.querySelector(".hide").classList.contains("hidden")) {
		//cursor.parentElement.parentElement.querySelector(".hide").classList.toggle("hidden");
		cursor.removeEventListener("mouseover", hover);
		direction = "normal";
	} else {
		//cursor.parentElement.parentElement.querySelector(".hide").classList.toggle("hidden");
		window.setTimeout(function() {
			cursor.addEventListener("mouseover", hover);
		},400);
		direction = "reverse";
	}
	cursor.parentElement.parentElement.querySelector(".hide").classList.toggle("hidden");
	
	//Прокрутка, если появившийся блок не виден полностью
	if (direction == "normal") {
		window.setTimeout(function() {
				if (cursor.parentElement.parentElement.querySelector(".hide").getBoundingClientRect().bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
					cursor.parentElement.parentElement.querySelector(".hide").scrollIntoView(false);
				}
		},400);
	}
	//cursor.classList.toggle("active");
	
	
	//анимация поворота курсора
	cursor.animate(
		[
			{
				transform: "rotate(0deg)",
				filter: "none"
			},
			{
				transform: "rotate(90deg)",
				filter: "hue-rotate(-110deg) saturate(500%)"
			}
		],
		{
			duration: 400,
			easing: "ease-in-out",
			direction: direction,
			fill: "forwards"
		}
	);	
}

/*
function getAnimationList(){
// Return a list of all of the animation keyframes in all style sheets.
    var ss = document.styleSheets;
    var anims = [];
    // loop through all the style sheets
    for (var s = 0; s < ss.length; s++) {
        if (ss[s].cssRules) {
            // loop through all the rules
            for (var r = ss[s].cssRules.length - 1; r >= 0; r--) {
                var rule = ss[s].cssRules[r];
                if ((rule.type === window.CSSRule.KEYFRAMES_RULE || rule.type === window.CSSRule.WEBKIT_KEYFRAMES_RULE)) {
                    anims.push(rule);
                }
            }
        }
    }
    return anims;
};

// Write all the animation (keyframe) names to the console.
animList = getAnimationList();
if (animList.length == 0){
    console.log('>>> No Animations');
} else {
    console.log('>>> Number of animations is ' + animList.length);
    for (var a = 0; a < animList.length; a++) {
        console.log('>>> ' + animList[a].name);
    };
};
*/

/*
//need <link rel="stylesheet" href="style/style.css" crossorigin="anonymous"/>
const styleSheets = document.styleSheets;
const firstStyleSheet = styleSheets[0];
const cssRules = firstStyleSheet.cssRules;
for (let i = 0; i < cssRules.length; i++) {
    const rule = cssRules[i];
    console.log(rule.cssText); // Logs the full CSS text of the rule
        // You can also check the rule type, e.g., if (rule.type === CSSRule.STYLE_RULE)
        // and access properties like rule.selectorText and rule.style
}
*/