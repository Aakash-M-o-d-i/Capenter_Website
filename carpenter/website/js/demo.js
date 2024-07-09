function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';

    // Simulate a form submission delay
    setTimeout(function() {
        document.getElementById('loadingOverlay').style.display = 'none';
        alert('Form submitted!');
        document.getElementById('myForm').submit(); // Uncomment this line to actually submit the form
    }, 2000);
}
