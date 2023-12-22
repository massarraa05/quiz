document.getElementById('quiz-form').addEventListener('submit', function(e) {
	e.preventDefault();
	
	var score = 0;
	var answers = ['c', 'a', 'c'];
	
	var q1 = document.querySelector('input[name="q1"]:checked');
	var q2 = document.querySelector('input[name="q2"]:checked');
	var q3 = document.querySelector('input[name="q3"]:checked');
	
	if (q1 && q2 && q3) {
		if (q1.value == answers[0]) {
			score++;
		}
		if (q2.value == answers[1]) {
			score++;
		}
		if (q3.value == answers[2]) {
			score++;
		}
		
		document.getElementById('results').innerHTML = 'Score: ' + score + '/3';
		document.getElementById('results').style.display = 'block';
	}
});