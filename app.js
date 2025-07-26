// Add a new student
function addStudent() {
  const name = document.getElementById("studentName").value.trim();
  const regNo = document.getElementById("registerNo").value.trim();
  if (!name || !regNo) {
    alert("Please fill both name and register number.");
    return;
  }

  let students = JSON.parse(localStorage.getItem("students") || "[]");

  if (students.find(s => s.regNo === regNo)) {
    alert("Student already exists.");
    return;
  }

  students.push({ name, regNo });
  localStorage.setItem("students", JSON.stringify(students));

  alert("✅ Student added successfully!");
  showAttendanceTable();
}

// Show attendance table
function showAttendanceTable() {
  const students = JSON.parse(localStorage.getItem("students") || "[]");
  const attendance = JSON.parse(localStorage.getItem("attendance") || "{}");

  // Collect all unique dates
  let allDates = new Set();
  Object.values(attendance).forEach(dates => dates.forEach(date => allDates.add(date)));
  const sortedDates = Array.from(allDates).sort();

  let html = "<table><tr><th>Name</th><th>Register No</th>";

  sortedDates.forEach(date => {
    html += `<th>${date}</th>`;
  });

  html += "</tr>";

  students.forEach(({ name, regNo }) => {
    html += `<tr><td>${name}</td><td>${regNo}</td>`;
    sortedDates.forEach(date => {
      const marked = attendance[regNo]?.includes(date) ? "✔️" : "❌";
      html += `<td>${marked}</td>`;
    });
    html += "</tr>";
  });

  html += "</table>";

  const tableDiv = document.getElementById("attendanceTable");
  if (tableDiv) tableDiv.innerHTML = html;
}

// Save attendance when QR is scanned
function markAttendance(regNo) {
  const today = new Date().toLocaleDateString();
  let attendance = JSON.parse(localStorage.getItem("attendance") || "{}");

  if (!attendance[regNo]) {
    attendance[regNo] = [];
  }

  if (!attendance[regNo].includes(today)) {
    attendance[regNo].push(today);
    localStorage.setItem("attendance", JSON.stringify(attendance));
    alert(`✅ Attendance marked for ${regNo}`);
  } else {
    alert("⚠️ Already marked today.");
  }
}

// Auto-load attendance table on page open (for staff.html)
window.onload = function () {
  if (document.getElementById("attendanceTable")) {
    showAttendanceTable();
  }
};