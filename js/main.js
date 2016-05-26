    	var clockRadius = document.getElementsByClassName("clockRadius")[0];

    	function creator() {
    	    for (i = 1; i <= 30; i++) {
    	        var divs = document.createElement("div");
    	        clockRadius.appendChild(divs);
    	        var divLarge = document.createElement("div");
    	        clockRadius.appendChild(divLarge);
    	        if (i % 5 == 0) {
    	            divLarge.style.width = "2px";
    	            divLarge.style.zIndex = "2";
    	            var degreeL = 6 * i;
    	            divLarge.style.transform = 'rotate(' + degreeL + 'deg)'
    	            console.log(i)

    	        }
    	        divLarge.setAttribute("class", "divLarge");
    	        var degree = 6 * i;
    	        divs.setAttribute("class", "rad1");
    	        divs.style.transform = 'rotate(' + degree + 'deg)'
    	    }
    	}
    	creator();
