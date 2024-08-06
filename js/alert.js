document.getElementById('subscribeBtn').addEventListener('click', function() {
    // Create an alert message
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert');
    alertDiv.innerHTML = 'Subscription confirmed. Welcome to Elakh Plus! <span class="closebtn" onclick="this.parentElement.style.display=\'none\'">&times;</span>';
    document.body.appendChild(alertDiv);

    // Scroll the alert message into view
    alertDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });

    // Automatically close the alert after 3 seconds
    setTimeout(function() {
        alertDiv.style.display = 'none';
    }, 9000);
});