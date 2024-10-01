
function toggleActivities() {
    var activities = document.getElementById('activities');
    if (activities.style.display === 'block' || activities.style.display === '') {
        activities.style.display = 'none';
    } else {
        activities.style.display = 'block';
    }
}

	
    function toggleDataEntry() {
            var input = document.getElementById('input');
            if (input.style.display === 'block') {
                input.style.display = 'none';
            } else {
                input.style.display = 'block';
            }
        }
		