// Get elements
      const addnote = document.querySelector("#add-note");
      const formContainer = document.querySelector(".form-container");
      const closeForm = document.querySelector(".closeForm");

      // Get the form itself
const form = document.querySelector(".form-container form");

// Get individual input fields
const imageUrl = form.querySelector('input[name="imageUrl"]') || form.querySelector('input[type="text"]:nth-of-type(1)');
const fullName = form.querySelector('input[name="fullName"]') || form.querySelector('input[type="text"]:nth-of-type(2)');
const homeTown = form.querySelector('input[name="homeTown"]') || form.querySelector('input[type="text"]:nth-of-type(3)');
const purpose = form.querySelector('input[name="purpose"]') || form.querySelector('input[type="text"]:nth-of-type(4)');

// Get the category radio buttons
const categories = form.querySelectorAll('input[name="category"]');

// Example: reading values on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh

  const selectedCategory = Array.from(categories).find(r => r.checked)?.value;

  console.log({
    imageUrl: imageUrl.value,
    fullName: fullName.value,
    homeTown: homeTown.value,
    purpose: purpose.value,
    category: selectedCategory
  });
});

      // Show form
      addnote.addEventListener("click", () => {
        formContainer.style.display = "block";
      });

      // Hide form
      closeForm.addEventListener("click", () => {
        formContainer.style.display = "none";
      });