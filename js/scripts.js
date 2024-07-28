$(document).ready(function(){
    var modal = $("#infoFormModal");
    var closeBtn = $(".close");
    var thankYouMessage = $("#thankYouMessage");
    
    // Show the modal when the page loads
    modal.show();

    // Close the modal when the user clicks on the close button
    closeBtn.on("click", function() {
        modal.hide();
    });

    // Submit form and show thank you message
    $("#infoForm").on("submit", function(event) {
        event.preventDefault();
        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "https://formsubmit.co/ajax/drsaima.medico@gmail.com", // Using formsubmit.co as an example
            data: formData,
            dataType: "json",
            success: function() {
                thankYouMessage.show();
                $("#infoForm").hide();
            },
            error: function() {
                alert("There was an error submitting the form. Please try again.");
            }
        });
    });
});
