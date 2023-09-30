document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emergencyForm');
    const displayDetails = document.getElementById('displayDetails');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;

        // Display submitted details
        displayDetails.innerHTML = `
            <h2>Submitted Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Emergency Contact:</strong> ${contact}</p>
            <!-- Add more fields as needed -->
        `;
    });
});
