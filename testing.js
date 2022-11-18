
function getPasswordOptions() {

    //Password Length
var lengthOfPWA = (prompt("Choose length of your password (10-64 characters)"));

while(lengthOfPWA < 10 || lengthOfPWA > 64) {
    alert("The password length must be at least 10 characters but no more than 64 characters.");
    lengthOfPWA = (prompt("Please reenter the length of your password.\n(Between 10 & 64)"));
}

} //End of function getPasswordOptions
 getPasswordOptions ();