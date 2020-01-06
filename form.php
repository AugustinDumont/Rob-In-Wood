<?php

function test_input($data)
{ // allow to sort display datas from user before posting
    $data = trim($data); // remove the useless characters
    $data = stripslashes($data); // remove the \
    $data = htmlspecialchars($data); // convert special characters in html characters
    return $data;
};


if (isset($_POST['submit'])) {

    $name = $tel  = $email = $subject = $message = "";
    $name_error = $tel_error = $email_error = $subject_error = $message_error = "";
    $counter = 0;
    $to = "augustindmt@gmail.com";
    $headers = "Vous avez reçu un message de la part de : " . $usr_name;


    if (empty($_POST["usr_name"])) {
        $name_error = "N'oubliez pas d'indiquer votre nom et prénom";
        $counter++;
    } else {
        $name = test_input($_POST["usr_name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z]*$/", $name)) {
            $name_error = "Lettres et espaces uniquement";
            $counter++;
        }
    }

    if (empty($_POST["usr_tel"])) {
        $name_error = "N'oubliez pas d'indiquer votre numéro de téléphone";
        $counter++;
    } else {
        $tel = test_input($_POST["usr_tel"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[0-9]*$/gm", $tel)) {
            $tel_error = "Chiffres uniquement";
            $counter++;
        }
    }

    if (empty($_POST["usr_email"])) {
        $email_error = "N'oubliez pas d'indiquer votre adresse email";
        $counter++;
    } else {
        $from = test_input($_POST["usr_email"]);
        if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
            $email_error = "Le format de votre adresse email est incorrect";
            $counter++;
        }
    }

    if (empty($_POST["usr_message"])) {
        $message_error = "Votre message est vide";
    } else {
        $message = test_input($_POST["usr_message"]);
    }

    if ($counter == 0) {
        mail($to, $subject, $message, $headers);
        echo "Votre email a bien été envoyé. Je vous répondrai dans les plus brefs délais";
    }
}
