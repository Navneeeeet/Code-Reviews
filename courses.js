const courses = [];
const container = document.getElementById('card-container');
const compareTable = document.getElementById('compare-table');
const tableBody = compareTable.querySelector('tbody');
const form = document.getElementById('reviewForm');
const reviewBox = document.getElementById('generatedReview');
let selected = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const title = data.get('title');
  const org = data.get('org');
  const sector = data.get('sector');
  const duration = data.get('duration');
  const url = data.get('url');

  const image = `https://source.unsplash.com/300x160/?${encodeURIComponent(title)},course`;
  const review = `📢 ${title} by ${org} is a recommended course in the ${sector} domain. The course covers essential concepts and is well-structured over ${duration}. It is suitable for both beginners and intermediate learners. ⭐ Recommended!`;

  reviewBox.innerText = review;

  courses.push({ title, org, duration, language: 'English', sector, Amount: 'N/A', rating: 'Pending', enrolled: 'N/A', url, image });
  createCard(courses[courses.length - 1], courses.length - 1);
});

function createCard(course, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}">
    <div class="card-content">
      <div class="card-title">${course.title}</div>
      <div class="org-name">${course.org}</div>
      <div class="sector">${course.sector}</div>
      <div class="info"><span>🌐 ${course.language}</span><span>⏱ ${course.duration}</span></div>
      <div class="actions">
        <a href="${course.url}" target="_blank"><button>Apply ➜</button></a>
        <label><input type="checkbox" onchange="toggleCompare(${index}, this)"> Compare</label>
      </div>
    </div>
  `;
  container.appendChild(card);
}

function toggleCompare(index, checkbox) {
  if (checkbox.checked) {
    selected.push(courses[index]);
  } else {
    selected = selected.filter((c) => c.title !== courses[index].title);
  }

  if (selected.length >= 2) {
    compareTable.style.display = 'table';
    renderCompareTable();
  } else {
    compareTable.style.display = 'none';
  }
}

function renderCompareTable() {
  tableBody.innerHTML = '';
  selected.forEach((course) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${course.title}</td>
      <td>${course.org}</td>
      <td>${course.duration}</td>
      <td>${course.language}</td>
      <td>${course.sector}</td>
      <td>${course.Amount}</td>
      <td>${course.rating}</td>
      <td>${course.enrolled}</td>
    `;
    tableBody.appendChild(row);
  });
}
function clearForm() {
  form.reset();
  reviewBox.innerText = '';
  selected = [];
  compareTable.style.display = 'none';
  tableBody.innerHTML = '';
  container.innerHTML = '';
  courses.length = 0; // Clear the courses array
}