document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const first = document.getElementById("firstName").value;
  const last = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  if (!first || !last) {
    alert("Please enter both first name and last name.");
    return;
  }

  if (!age || age < 18) {
    alert("Please enter a valid age (age must be 18 or above).");
    return;
  }

  const data = {
    firstName: first,
    lastName: last,
    age: age,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "submit.json", true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Form submitted successfully!");
    } else if (xhr.readyState === 4) {
      alert("An error occurred while submitting the form.");
    }
  };

  xhr.send(JSON.stringify(data));
  console.log(data);
});
