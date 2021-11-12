<?php
require_once "configuration/configuration.json";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $request_data_string = file_get_contents("php://input");

    $request_data = json_decode($request_data_string, true);

    $pseudoname = strip_tags($request_data["pseudonameproof"]);
    $password = strip_tags($request_data["passwordproof"]);
    $email = strip_tags($request_data[""]);

    $userlogin = $database->getFirstResult($database->query("SELECT Pseudoname from user WHERE email = ? LIMIT 1", array($email), array("s")));

    if (!$userlogin || !password_verify($password, $userlogin["password"])) {
        echo "Die Anmeldung ist aufgrund invalider Daten falsch";
        return;
    }

    session_start();
    session_regenerate_id(true);




}