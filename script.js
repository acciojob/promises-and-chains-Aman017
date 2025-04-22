//your JS code here. If required.
 const form = document.getElementById("voteForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value.trim());

      // Basic validation
      if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
      }

      // Create a promise
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000);
      })
      .then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
    });