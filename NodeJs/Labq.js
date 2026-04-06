<!DOCTYPE html>
<html>
<head>
    <title>Sum Calculator</title>
</head>
<body>

<h2>Sum Calculator using JavaScript</h2>

<script>
let n = parseInt(prompt("Enter how many numbers you want to add:"));

let sum = 0;

for (let i = 1; i <= n; i++) {
    let num = parseFloat(prompt("Enter number " + i + ":"));
    sum = sum + num;
}

let choice = confirm("Do you want to add one more number?");

if (choice) {
    let extra = parseFloat(prompt("Enter the additional number:"));
    sum = sum + extra;
}

alert("The total sum is: " + sum);
</script>

</body>
</html>