const students = [
  { name: "An Pyreak", grade: "A" },
  { name: "Eng Sokchea", grade: "B" }
];

let filtered = [...students];

function renderStudents(list) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";
  list.forEach((student, index) => {
    const card = document.createElement("div");
    card.className = "p-4 border border-blue-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200";
    card.innerHTML = `
      <p class="font-semibold text-base">${index + 1}. ${student.name}</p>
      <p class="text-sm text-gray-600">Grade: ${student.grade}</p>
    `;
    studentList.appendChild(card);
  });
  document.getElementById("studentCount").textContent = list.length;
}

function addStudent() {
  const name = document.getElementById("studentName").value.trim();
  const grade = document.getElementById("studentGrade").value.trim().toUpperCase();
  if (name && grade) {
    students.push({ name, grade });
    resetFilter();
    document.getElementById("studentName").value = "";
    document.getElementById("studentGrade").value = "";
  }
}

function filterStudents() {
  const grade = document.getElementById("filterGrade").value.trim().toUpperCase();
  if (grade) {
    filtered = students.filter(s => s.grade === grade);
    renderStudents(filtered);
  }
}

function resetFilter() {
  filtered = [...students];
  document.getElementById("filterGrade").value = "";
  renderStudents(filtered);
}

renderStudents(filtered);
