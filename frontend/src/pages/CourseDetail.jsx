import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // เพิ่ม useNavigate

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // สร้างตัวแปรสำหรับเปลี่ยนหน้า
  
  // 1. ดึงข้อมูล User จาก localStorage มาใช้จริง
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userTier = storedUser ? storedUser.tier : 'Basic'; // ถ้าไม่ได้ล็อกอิน ให้เป็น Basic

  const course = {
    name: 'Fullstack JavaScript',
    platform: 'Zoom',
    time: 'ทุกวันเสาร์ 09:00 - 12:00 น.',
    link: 'https://zoom.us/j/123456789',
    description: 'เรียนรู้การเขียนโปรแกรมตั้งแต่พื้นฐานจนถึงระดับมืออาชีพ',
    requiredTier: 'Silver' 
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1>{course.name}</h1>
      <p style={{ color: '#666' }}>{course.description}</p>
      <hr />
      <div style={{ margin: '20px 0' }}>
        <p><strong>📍 แพลตฟอร์ม:</strong> {course.platform}</p>
        <p><strong>⏰ เวลาเรียน:</strong> {course.time}</p>
      </div>

      {/* 2. ระบบเช็กระดับสมาชิกแบบใช้งานจริง */}
      {/* ถ้าระดับ user ต่ำกว่าที่คอร์สต้องการ (Basic < Silver หรือ Basic < Gold) */}
      {userTier === 'Basic' && course.requiredTier !== 'Basic' ? (
        <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '12px', border: '1px solid #ffeeba', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#856404' }}>
            ⚠️ <strong>จำกัดสิทธิ์:</strong> คอร์สนี้เฉพาะสมาชิกระดับ <strong>{course.requiredTier}</strong> ขึ้นไปเท่านั้น
          </p>
          <button 
            onClick={() => navigate('/pricing')} // 3. เชื่อมไปหน้าเลือกแพ็กเกจ
            style={{ 
              marginTop: '15px', 
              color: 'white', 
              background: '#856404', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '25px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            อัปเกรดสมาชิกเพื่อดูลิงก์เรียน
          </button>
        </div>
      ) : (
        /* ถ้าเป็น Silver/Gold หรือคอร์สนี้เป็นระดับ Basic ก็จะเห็นปุ่มเข้าเรียน */
        <a href={course.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ width: '100%', padding: '15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}>
            กดเพื่อเข้าสู่ห้องเรียน ({course.platform})
          </button>
        </a>
      )}
    </div>
  );
};

export default CourseDetail;