<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        echo "<h1>Preview</h1> <br>";
        
        if(empty($_POST['fname'])) {
            echo "Name: Not provided <br>";
        } else {
            echo "" . $_POST['fname'] . "<br>";
        }

        if(empty($_POST['uname'])) {
            echo "Username: Not provided <br>";
        } else {
            echo "" . $_POST['uname'] . "<br>";
        }

        if(empty($_POST['password'])) {
            echo "Password: Not provided <br>";
        } else {
            echo "" . $_POST['password'] . "<br>";
        }

        if(empty($_POST['adres'])) {
            echo "Address: Not provided <br>";
        } else {
            echo "" . $_POST['adres'] . "<br>";
        }

        if(($_POST['country'] == "default")) {
            echo "Country: Not provided <br>";
        } else {
            echo "" . $_POST['country'] . "<br>";
        }

        if(empty($_POST['zipcode'])) {
            echo "Zip Code: Not provided <br>";
        } else {
            echo "" . $_POST['zipcode'] . "<br>";
        }

        if(empty($_POST['email'])) {
            echo "Email: Not provided <br>";
        } else {
            echo "" . $_POST['email'] . "<br>";
        }

        if(empty($_POST['gender'])) {
            echo "Sex: Not provided <br>";
        } else {
            echo "" . $_POST['gender'] . "<br>";
        }

        if(empty($_POST['language'])) {
            echo "Language: Not provided <br>";
        } else {
            foreach($_POST['language'] as $value) {
                echo $value . " <br>";
            }
        }

        if(empty($_POST['about'])) {
            echo "About: Not provided <br>";
        } else {
            echo "" . $_POST['about'] . "<br>";
        }

    ?>
</body>
</html>