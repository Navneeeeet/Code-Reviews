// For future use
console.log("About page loaded.");

document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const course = {
    name: document.getElementById("courseName").value,
    instructor: document.getElementById("instructorName").value,
    organization: document.getElementById("organizationName").value,
    review: document.getElementById("review").value,
    duration: document.querySelector("input[name='duration']").value,
    url: document.querySelector("input[name='url']").value,
    rating: document.getElementById("rating").value
  };

  alert(`🎓 Thank you! Your review for "${course.name}" has been submitted.`);

  // Future: Save to localStorage or send to backend
});
