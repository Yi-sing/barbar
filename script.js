document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}! Your booking at ${location} on ${date} at ${time} has been confirmed.`;
    document.getElementById('confirmationMessage').textContent = confirmationMessage;
    document.getElementById('confirmationMessage').style.display = 'block';
});
