    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message



document.getElementById("myForm").addEventListener("submit", function(event) {
  let field = document.forms["myForm"]["inputField"].value;
  let alphanumeric = /^[a-zA-Z0-9]+$/;

  if (field == "" || !alphanumeric.test(field)) {
    alert("Name must be filled out with alphanumeric characters");
    
    // Prevent form submission
    event.preventDefault();
  } else {
    alert("Data valid, submitting form");
    
    // Let the form submit if data is valid
  }
});
        