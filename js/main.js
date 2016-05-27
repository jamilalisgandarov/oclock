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
    	        }
    	        divLarge.setAttribute("class", "divLarge");
    	        var degree = 6 * i;
    	        divs.setAttribute("class", "rad1");
    	        divs.style.transform = 'rotate(' + degree + 'deg)';

    	    }
    	}
    	creator();

    	function time() {
    	    var d = new Date();
    	    var seconds = d.getSeconds();
    	    var mins = d.getMinutes();
    	    var hours = d.getHours();
    	    document.getElementsByClassName("crossSecond")[0].style.transform = 'rotate(' + seconds * 6 + 'deg)';
    	    document.getElementsByClassName("crossMin")[0].style.transform = 'rotate(' + mins * 6 + 'deg)';
    	    document.getElementsByClassName("crossHours")[0].style.transform = 'rotate(' + (hours * 30 + mins * 0.5) + 'deg)';
    	    console.log(document.getElementsByClassName("crossSecond")[0].style.transform);
    	}
    	var date = setInterval(function() { time() }, 1000);
