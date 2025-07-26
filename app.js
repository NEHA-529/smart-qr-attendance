function addStudent() {
  const name = document.getElementById("studentName").value.trim();
  const regNo = document.getElementById("registerNo").value.trim();
  if (!name || !regNo) return alert("Please fill in all fields.");

  let students = JSON.parse(localStorage.getItem("students") || "[]");
  if (students.find(s => s.regNo === regNo)) {
    alert("Student already exists.");
    return;
  }

  students.push({ name, regNo });
  localStorage.setItem("students", JSON.stringify(students));
  alert("Student added successfully!");
  showAttendanceTable();
}

function showAttendanceTable() {
  let students = JSON.parse(localStorage.getItem("students") || "[]");
  let attendance = JSON.parse(localStorage.getItem("attendance") || "{}");

  // Collect all unique dates
  let allDates = new Set();
  Object.values(attendance).forEach(dates => dates.forEach(date => allDates.add(date)));
  let sortedDates = Array.from(allDates).sort();

  let html = "<table><tr><th>Name</th><th>Reg No</th>";
  sortedDates.forEach(date => html += `<th>${date}</th>`);
  html += "</tr>";

  students.forEach(({ name, regNo }) => {
    html += `<tr><td>${name}</td><td>${regNo}</td>`;
    sortedDates.forEach(date => {
      let mark = (attendance[regNo] || []).includes(date) ? "✔️" : "";
      html += `<td>${mark}</td>`;
    });
    html += "</tr>`;
  });

  html += "</table>";
  document.getElementById("attendanceTable").innerHTML = html;
}

// Run on page load
if (document.getElementById("attendanceTable")) {
  window.onload = showAttendanceTable;
}

