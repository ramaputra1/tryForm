document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const firstName = document.getElementById("firstName").value;
  const age = document.getElementById("age").value;
  const from = document.getElementById("from").value;
  const comments = document.getElementById("comments").value;
  const rating = document.getElementById("rating").value;

  // 1
  if (!firstName || !from || !comments) {
    alert("Name, From, and Comments are required!");
    return;
  }

  //2
  if (!age || age < 18) {
    alert("Please enter a valid age");
    return;
  }

  //3
  if (!rating || rating < 1 || rating > 5) {
    alert("Please rate your experience between 1 and 5.");
    return;
  }

  // Create data object
  const data = {
    firstName: firstName,
    age: age,
    from: from,
    comments: comments,
    rating: rating,
  };

  // AJAX Request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "submit.json", true); // Use GET for GitHub Pages
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      document.getElementById("message").innerHTML = response.message;

      // Clear the form and notify user

      document.getElementById("myForm").innerHTML = "";
      // document.getElementById("myForm").style.display = "none";
    } else {
      alert("An error occurred while submitting the form.");
    }
  };

  xhr.send(JSON.stringify(data)); // Mock sending data
  console.log(data); // Log to console
});
