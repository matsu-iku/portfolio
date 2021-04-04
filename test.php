<?php
echo $_SERVER['REQUEST_URI'];
echo "<br>";
echo $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
echo "<br>";
echo (empty($_SERVER["HTTPS"]) ? "http://" : "https://") .
$_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
?>