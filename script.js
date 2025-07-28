function staffLogin() {
  const username = document.getElementById('staff-username').value;
  const password = document.getElementById('staff-password').value;

  if (username === 'admin' && password === '1234') {
    window.location.href = 'staff.html';
  } else {
    alert('Invalid staff login');
  }
}

function studentLogin() {
  const reg = document.getElementById('student-reg').value;
  const pass = document.getElementById('student-pass').value;

  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const match = students.find(s => s.reg === reg && s.pass === pass);

  if (match) {
    localStorage.setItem('loggedStudent', JSON.stringify(match));
    window.location.href = 'student.html';
  } else {
    alert('Invalid student login');
  }
}
function addStudent() {
  const name = document.getElementById('sname').value;
  const reg = document.getElementById('sreg').value;
  const pass = document.getElementById('spass').value;

  if (!name || !reg || !pass) {
    alert("Please fill all fields");
    return;
  }

  const students = JSON.parse(localStorage.getItem('students') || '[]');
  if (students.find(s => s.reg === reg)) {
    alert("Register number already exists");
    return;
  }

  students.push({ name, reg, pass, attendance: [] });
  localStorage.setItem('students', JSON.stringify(students));
  alert("✅ Student added!");

  document.getElementById('sname').value = '';
  document.getElementById('sreg').value = '';
  document.getElementById('spass').value = '';
  displayAttendanceTable();
}
