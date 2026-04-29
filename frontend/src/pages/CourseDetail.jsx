import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  
  // สมมติว่า User คนนี้เป็นระดับ 'Basic' (ในอนาคตจะดึงจาก State/Context)
  const userTier = 'Basic'; 

  const course = {
    name: 'Fullstack JavaScript',
    platform: 'Zoom',
    time: 'ทุกวันเสาร์ 09:00 - 12:00 น.',
    link: 'https://zoom.us/j/123456789',
    description: 'เรียนรู้การเขียนโปรแกรมตั้งแต่พื้นฐานจนถึงระดับมืออาชีพ',
    requiredTier: 'Silver' // คอร์สนี้ต้องระดับ Silver ขึ้นไปถึงจะเห็นลิงก์
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

      {/* ระบบเช็กระดับสมาชิก */}
      {userTier === 'Basic' && course.requiredTier !== 'Basic' ? (
        <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', border: '1px solid #ffeeba' }}>
          <p style={{ margin: 0 }}>⚠️ <strong>จำกัดสิทธิ์:</strong> เฉพาะสมาชิกระดับ <strong>{course.requiredTier}</strong> ขึ้นไปเท่านั้นที่สามารถเข้าถึงลิงก์เรียนได้</p>
          <button style={{ marginTop: '10px', color: '#856404', background: 'none', border: '1px solid #856404', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
            อัปเกรดสมาชิกเลย
          </button>
        </div>
      ) : (
        <a href={course.link} target="_blank" rel="noreferrer">
          <button style={{ width: '100%', padding: '15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer' }}>
            กดเพื่อเข้าสู่ห้องเรียน ({course.platform})
          </button>
        </a>
      )}
    </div>
  );
};

export default CourseDetail;