<?php
	require_once "Databankconnection.php";
	$configuration_file_contents = file_get_contents("configuration/configuration.json");
	$configuration = json_decode($configuration_file_contents, true);

	$database = new DatabaseConnection($configuration["hostname"], $configuration["username"], $configuration["password"], $configuration["database"]);
?>
