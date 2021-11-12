<?php
require_once "configuration/configuration.json";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $request_data_string = file_get_contents("php://input");

        $request_data = json_decode($request_data_string, true);

        $firstname = strip_tags($request_data["firstnamesaving"]);
        $surname = strip_tags($request_data["surnamesabing"]);
        $password = strip_tags($request_data["passwordsaving"]);
        $pseudoname = strip_tags($request_data["peudonamesaving"]);
        $email = strip_tags($request_data["emailsaving"]);

        $userlogin = $database->query("SELECT Pseudoname FROM user WHERE email=?", array($email), array("s"));

        if ($userlogin->num_rows > 0) {
            echo "Dieser Benutzer existiert bereits";
            return;
        }

        session_start();
        session_regenerate_id(true);

        $erstellungbenutzer = $database->query("INSERT INTO user(firstname, Surname, Pseudoname, Password, sessionid, E-Mail-Address) VALUES(?,?,?,?,?,?) ", array($firstname, $surname, $pseudoname, password_hash($password, PASSWORD_DEFAULT), session_id(), $email), array("s", "s", "s", "s", "s" , "s"));

        if (!$erstellungbenutzer || ($erstellungbenutzer !== true && $erstellungbenutzer->affected_rows != 1)) {
            echo  "Die Registrierung ist aufgrund eines Fehlers fehlgeschlagen";
            return;
        }




    }







?>