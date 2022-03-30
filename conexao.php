<?php
    $mysqli = new mysqli("localhost", "root", "", "test"); // criar a tabela pelo arquivo tabela.sql
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
?>