document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a console log when the "Book Now" button on homepage is clicked
    const bookButton = document.querySelector('.hero button');
    if (bookButton) {
        bookButton.addEventListener('click', function(){
            console.log("Book Now button was clicked");
            window.location.href = "schedule.html";
        });
    }
      const serviceButtons = document.querySelectorAll('.service-card button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
             console.log("Service button was clicked");
              window.location.href = "schedule.html";
        });
    });
});
