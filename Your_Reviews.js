document.querySelector("form").addEventListener("submit", function (e) {
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

  // You could save the data to localStorage, or send it to a backend in the future
});
function renderCompareTable() {
  tableBody.innerHTML = '';
  selected.forEach((course, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${course.title}</td>
      <td>${course.org}</td>
      <td>${course.sector}</td>
      <td>${course.duration}</td>
      <td>${course.language}</td>
      <td><a href="${course.url}" target="_blank">View Course</a></td>
    `;
    tableBody.appendChild(row);
  });
}