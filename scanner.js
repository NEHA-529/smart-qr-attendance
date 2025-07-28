const scanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

scanner.render(onScanSuccess);

function onScanSuccess(qrCodeMessage) {
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const match = students.find(s => s.reg === qrCodeMessage.trim());

  if (match) {
    const date = new Date().toLocaleDateString();
    if (!match.attendance) match.attendance = [];
    if (!match.attendance.includes(date)) {
      match.attendance.push(date);
      alert(`✅ Attendance marked for ${match.name} (${match.reg})`);
    } else {
      alert(`⚠️ Already marked for today`);
    }
    localStorage.setItem('students', JSON.stringify(students));
    displayAttendanceTable();
  } else {
    alert('❌ Student not found!');
  }
}

