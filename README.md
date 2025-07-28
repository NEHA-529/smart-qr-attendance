# Smart QR Attendance System (Web Version)

The **Smart QR Attendance System** is a lightweight and user-friendly website that helps automate student attendance using **QR code scanning**.

This version is built using:
- **HTML, CSS, JavaScript**
- **LocalStorage** (no backend or database needed)
- **Webcam QR Scanner** using `html5-qrcode`

---

## 🔐 Features

### 👨‍🏫 Staff Panel
- Staff login (default: **Username:** `admin`, **Password:** `1234`)
- Add student details: Name, Register Number, Password
- Generate QR code automatically for each student
- Scan student QR code via webcam to mark attendance
- Attendance is tracked **date-wise**
- View full attendance table
- ✅ **Tick mark for present days**

### 🎓 Student Panel
- Login with Register Number and Password
- View their own **QR Code**
- View their attendance history

---

## 📁 Pages Included

| File | Description |
|------|-------------|
| `index.html` | Login for staff & students |
| `staff.html` | Dashboard for staff (add, scan, view attendance) |
| `student.html` | Student QR code & attendance |
| `style.css` | Page styling |
| `script.js` | Login & student adding logic |
| `scanner.js` | QR scan logic |
| `attendance.js` | Attendance display & save |

---

## 🛠 Setup Instructions

1. Download or clone the repository

2.  Open `index.html` in any modern browser (like Chrome).

3. Allow **camera permission** for scanning QR codes.

4. Test by adding a student, logging in as student, and scanning the QR!

---

## 🚫 Notes

- No server or database needed — all data is saved in **local browser storage**.
- Works best on **desktop browsers** with webcam access.
- Not suitable for use across different devices (since LocalStorage is device-based).

---

## 👩‍💻 Developed by
**Neha N, Divyabharathi M, Vishnupriya S, Mirjahan Sahitha S**  
B.Sc. Computer Science  
Loganathan Narayanasamy Government Arts and Science College (Autonomous)  
[GitHub: NEHA-529](https://github.com/NEHA-529)

---

✅ Project Completed with ❤️ and JavaScript.
