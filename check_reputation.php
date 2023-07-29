<?php
$phoneNumber = $_POST['phoneNumber'];

$percentage = 0;

if (strlen($phoneNumber) === 10 && $phoneNumber[0] === '0') {
  $thirdDigit = $phoneNumber[2];
  $fourthDigit = $phoneNumber[3];
  $fifthDigit = $phoneNumber[4];
  $sixthDigit = $phoneNumber[5]; // Added this line for Rule 9
  $seventhDigit = $phoneNumber[6];
  $eighthDigit = $phoneNumber[7];
  $ninthDigit = $phoneNumber[8];
  $tenthDigit = $phoneNumber[9];

  
  if (in_array($thirdDigit, ['7', '1', '8', '5', '2'])) {
    // Rule 4: Check if 3rd and 4th digits are the same
    
    if ($ninthDigit === $seventhDigit && $tenthDigit === $eighthDigit) {
      $percentage = 80;
    } elseif ($ninthDigit === $seventhDigit) {
      $percentage = 70;
    } elseif ($fifthDigit === $eighthDigit) {
      $percentage = 85;
    } else {
      $percentage = 51;
    }
  } elseif (in_array($thirdDigit, ['0', '4', '6'])) {
    // Rule 4: Check if 3rd and 4th digits are the same
    if ($ninthDigit === $seventhDigit && $tenthDigit === $eighthDigit) {
      $percentage = 80;
    } elseif ($ninthDigit === $seventhDigit) {
      $percentage = 70;
    } elseif ($fifthDigit === $eighthDigit) {
      $percentage = 85;
    } else {
      $percentage = 30;
    }
  }

 
  if ($thirdDigit === $fourthDigit && $ninthDigit === $seventhDigit && $tenthDigit === $eighthDigit) {
    $percentage = 94;
  }

  
  if ($fifthDigit === $sixthDigit && $eighthDigit === $ninthDigit) {
    $percentage = 96;
  }
}

// Return the percentage as JSON response
$response = [
  'percentage' => $percentage
];
echo json_encode($response);
?>

