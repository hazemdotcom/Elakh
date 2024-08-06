<?php
// Check if form data is received
var_dump($_POST);
exit;
?>

<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Perform any necessary login validation (not implemented in this example)
    
    // Redirect to main.html
    header("Location: main.html");
    exit; // Ensure that no other code is executed after the redirect
}
?>
