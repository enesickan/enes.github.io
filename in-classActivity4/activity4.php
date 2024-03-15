<!DOCTYPE html>

<html lang="en">
<head>
  <title>Java Jam Coffee House</title>
  <meta name="description" content="CENG 311 Inclass Activity 4" />
</head>

<body>


<?php
  $currencies = array("USD" => 1, "CAD" => 1.35, "EUR" => 0.92);

  $from_value = ""; 
  $to_value = "";    

  
  if (isset($_GET["from_value"]) && isset($_GET["to_value"])) {
    $from_currency = $_GET["from_currencies"];
    $to_currency = $_GET["to_currencies"];
    $amount = floatval($_GET["from_value"]);
    $result = $amount * ($currencies[$to_currency] / $currencies[$from_currency]);

    $from_value = $amount;
    $to_value = $result;    
  }
?>

<form action="activity4.php" method="GET">
  <table>
    <tr>
      <td>From:</td>
      <td>
        <input type="text" name="from_value" value="<?php echo $from_value; ?>"/>
      </td>
      <td>Currency:</td>
      <td>
        <select name="from_currencies">
          <option value="USD"> USD </option>
          <option value="CAD"> CAD </option>
          <option value="EUR"> EUR </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>To:</td>
      <td>
        <input type="text" name="to_value" value="<?php echo $to_value; ?>"/>
      </td>
      <td>Currency:</td>
      <td>
        <select name="to_currencies">
          <option value="USD"> USD </option>
          <option value="CAD"> CAD </option>
          <option value="EUR"> EUR </option>
        </select>
      </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><input type="submit" value="convert"/></td>
    </tr>
  </table>
</form>
</body>