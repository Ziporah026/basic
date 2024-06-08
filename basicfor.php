<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "basic_form";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Create database if it doesn't exist
$sql_create_db = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql_create_db) === TRUE) {
  // Select database
  $conn->select_db($dbname);
  
  // Create users table
  $sql_create_table = "CREATE TABLE IF NOT EXISTS user (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    age VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    profile LONGBLOB NOT NULL,
    upload_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )";
  
  if ($conn->query($sql_create_table) === TRUE) {
    echo "Table created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate inputs
    $fullname = $_POST['fname'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $profile = $_FILES['profile_picture']['name'];

    // Path where the file will be stored
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["profile_picture"]["name"]);
    
    // Check if file has been uploaded
    if (move_uploaded_file($_FILES["profile_picture"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["profile_picture"]["name"])). " has been uploaded.";
      } else {
        echo "Sorry, there was an error uploading your file.";
    }

    // Insert into database
    $sql_insert_user = "INSERT INTO user (fullname, email, age, gender, profile) VALUES ('$fullname', '$email', '$age', '$gender', '$profile')";

    if ($conn->query($sql_insert_user) === TRUE) {
      echo "Registration successful!";
    } else {
      echo "Error: " . $sql_insert_user . "<br>" . $conn->error;
    }
  } else {
    echo "Error creating table: " . $conn->error;
  }
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
 