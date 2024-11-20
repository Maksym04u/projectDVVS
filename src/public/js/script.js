// Confirmation before deleting a post
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const confirmDelete = confirm('Are you sure you want to delete this post?');
        if (!confirmDelete) {
            e.preventDefault(); // Prevent the form from submitting if user cancels
        }
    });
});
