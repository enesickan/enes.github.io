$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        //event.preventDefault(); // Prevent default form submission

        // Get form data
        /* const formData = {
            fname: $('#fname').val(),
            lname: $('#lname').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            questions: $('#questions').val()
        };
        */
        
        // Alert message
        alert("Thanks, we got your message and we will contact you soon!");

        // Reset the form after submission
        $('#contactForm')[0].reset();
    });
});