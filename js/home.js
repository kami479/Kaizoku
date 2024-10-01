// Function to toggle the visibility of the menu
function showView(viewId) {
    const view = document.getElementById(viewId);
    
    if (view) {
        // Toggle the 'active' class on the view
        view.classList.toggle('active');
    }
}

// Optional: Ensure the menu is hidden when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('view2');
    if (menu) {
        menu.classList.remove('active'); // Ensure it starts hidden
    }
});