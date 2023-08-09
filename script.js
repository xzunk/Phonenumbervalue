function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phoneNumber").value;

  // Rule 1: Phone number should have 10 digits and the first digit must be 0
  if (phoneNumber.length !== 10 || phoneNumber.charAt(0) !== '0') {
    alert("Invalid phone number. Please enter a 10-digit number starting with 0.");
    return false;
  }

  // Rule 2: Check percentage based on the 3rd digit
  var thirdDigit = phoneNumber.charAt(2);
  var fourthDigit = phoneNumber.charAt(3);
  var fifthDigit = phoneNumber.charAt(4);
  var sixthDigit = phoneNumber.charAt(5); // Added this line for Rule 9
  var seventhDigit = phoneNumber.charAt(6);
  var eighthDigit = phoneNumber.charAt(7);
  var ninthDigit = phoneNumber.charAt(8);
  var tenthDigit = phoneNumber.charAt(9);
  var percentage = 0;

  if (['7', '1', '8', '5', '2'].includes(thirdDigit)) {
    // Rule 4: Check if 3rd and 4th digits are the same
    if (thirdDigit === fourthDigit) {
      percentage = 50;
    } else if (ninthDigit === seventhDigit && tenthDigit === eighthDigit) {
      percentage = 80;
    } else if (ninthDigit === seventhDigit) {
      percentage = 70;
    } else if (fifthDigit === eighthDigit) {
      percentage = 85;
    } else {
      percentage = 40;
    }
  } else if (['0', '4', '6'].includes(thirdDigit)) {
    // Rule 4: Check if 3rd and 4th digits are the same
    if (thirdDigit === fourthDigit) {
      percentage = 50;
    } else if (ninthDigit === seventhDigit && tenthDigit === eighthDigit) {
      percentage = 80;
    } else if (ninthDigit === seventhDigit) {
      percentage = 70;
    } else if (fifthDigit === eighthDigit) {
      percentage = 85;
    } else {
      percentage = 30;
    }
  }

  // Rule 8: Check if 3rd and 4th digits are the same, and 9th and 7th digits are the same, and 10th digit is the same as 8th digit
  if (thirdDigit === fourthDigit && ninthDigit === seventhDigit && tenthDigit === eighthDigit) {
    percentage = 100;
  }

  // Rule 9: Check if numbers in places 5, 6, and 8, 9 are the same
  if (fifthDigit === sixthDigit && eighthDigit === ninthDigit) {
    percentage = 87;
  }

  // Display the result
  document.getElementById("result").innerHTML = "Phone Number Reputation: " + percentage + "%";

 

  return false; // Prevent form submission for this example
}

