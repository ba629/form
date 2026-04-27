const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware สำหรับจัดการข้อมูล JSON และ Form URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (ถ้ามีไฟล์แยก)
app.use(express.static('public'));

// หน้าหลัก (ใช้ไฟล์ index.html ที่คุณทำไว้)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Endpoint สำหรับรับข้อมูลจากฟอร์ม (ตัวอย่าง)
app.post('/api/save-sales', (req, res) => {
    console.log('Received Data:', req.body);
    // ในอนาคตคุณสามารถเชื่อมต่อ Database เช่น MongoDB หรือ PostgreSQL ตรงนี้
    res.status(200).json({ message: 'บันทึกข้อมูลเรียบร้อยแล้ว' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});