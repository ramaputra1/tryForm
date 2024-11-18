document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const firstName = document.getElementById("firstName").value.trim();
  const age = parseInt(document.getElementById("age").value, 10); //What is ten
  const from = document.getElementById("from").value.trim();
  const comments = document.getElementById("comments").value.trim(); // why use trim
  const rating = parseInt(document.getElementById("rating").value, 10); //What is ten

  // Validate inputs
  if (!firstName || !from || !comments) {
    alert("Name, From, and Comments are required!");
    return;
  }

  if (!age || age < 18 || age > 100) {
    //di atas 18 tok
    alert("Please enter a valid age (18-100).");
    return;
  }

  if (!rating || rating < 1 || rating > 5) {
    alert("Please rate your experience between 1 and 5.");
    return;
  }

  // Create data object
  const data = {
    firstName,
    age,
    from,
    comments,
    rating,
  };

  // AJAX Request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "submit.json", true); // Use GET for GitHub Pages
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("message").innerHTML = response.message;

        // Clear the form and notify user
        document.getElementById("myForm").reset();
        document.getElementById("myForm").style.display = "none";
      } else {
        alert("An error occurred while submitting the form.");
      }
    }
  };

  xhr.onerror = function () {
    //what is that
    alert("Unable to connect to the server.");
  };

  xhr.send(JSON.stringify(data)); // Mock sending data
  console.log("Form Data Sent:", data); // Log to console
});
