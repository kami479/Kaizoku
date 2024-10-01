  document.addEventListener('DOMContentLoaded', function() {
    const spinner = document.getElementById('spinner');
    const loadingText = document.getElementById('loadingText');
    const button = document.getElementById('start');

    // Hide the spinner and loading text initially
    spinner.classList.add('hide');
    loadingText.classList.add('hide');
	start.classList.remove('hide');

    button.addEventListener('click', function() {
        // Show the spinner and loading text when the button is clicked
        spinner.classList.remove('hide');
        loadingText.classList.remove('hide');
		start.classList.add('hide');

        // Simulate a loading period (e.g., 3 seconds) before redirecting
        setTimeout(() => {
            spinner.classList.add('hide');
            loadingText.classList.add('hide');
            // Redirect to home.html after loading
            window.location.href = 'home.html';
        }, 5000); // Adjust the duration as needed
    });
});

