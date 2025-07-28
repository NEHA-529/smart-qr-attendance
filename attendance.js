
function displayAttendanceTable() {
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  let dates = new Set();

  students.forEach(s => {
    if (s.attendance) {
      s.attendance.forEach(d => dates.add(d));
    }
  });

  dates = Array.from(dates).sort();
  let html = `<table border="1" style="width:100%; text-align:center;">
    <tr>
      <th>Name</th>
      <th>Register No</th>`;
  dates.forEach(d => {
    html += `<th>${d}</th>`;
  });
  html += `</tr>`;

  students.forEach(s => {
    html += `<tr><td>${s.name}</td><td>${s.reg}</td>`;
    dates.forEach(d => {
      const mark = s.attendance && s.attendance.includes(d) ? "✅" : "";
      html += `<td>${mark}</td>`;
    });
    html += `</tr>`;
  });

  html += `</table>`;
  document.getElementById("attendanceTable").innerHTML = html;
}

// Load on page open
window.onload = displayAttendanceTable;
