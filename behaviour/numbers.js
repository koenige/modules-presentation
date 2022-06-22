/**
 * presentation module
 * animate incrementing numbers
 *
 * Part of »Zugzwang Project«
 * https://www.zugzwang.org/modules/presentation
 *
 * @author Gustaf Mossakowski <gustaf@koenige.org>
 * @copyright Copyright © 2020-2022 Gustaf Mossakowski
 * @license http://opensource.org/licenses/lgpl-3.0.html LGPL-3.0
 */


function animateValue(el, start, end, duration) {
    // assumes integer values for start and end
    
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        el.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
    run();
}

function animateNumbers() {
	var block = document.getElementById('numbers');
	var numbers = block.getElementsByTagName('strong');

	var observer = new IntersectionObserver(function(entries) {
		for (i = 0; i < entries.length; i++ ) {
			if (entries[i].isIntersecting === true) {
				var end = entries[i]['target'].getAttribute('data-value')
				animateValue(entries[i]['target'], 1, end, 2000);
			}
		}
	}, { threshold: [1] });

	for (i = 0; i < numbers.length; i++) {
		observer.observe(numbers[i]);
	}
}

animateNumbers();
