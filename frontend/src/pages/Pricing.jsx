import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const packages = [
    { name: 'Basic', price: 'ฟรี', features: ['ค้นหาคอร์สเรียนได้ไม่จำกัด', 'เปรียบเทียบราคาคอร์ส'], color: '#fff' },
    { name: 'Silver', price: '฿990', features: ['เห็นคอร์ส Exclusive ก่อนใคร', 'รับส่วนลดพิเศษจากสถาบัน', 'บันทึกคอร์สที่ชอบได้'], color: '#f1f1f1' },
    { name: 'Gold', price: '฿2500', features: ['ที่ปรึกษาการเรียนส่วนตัว', 'เข้าถึงลิงก์เรียนได้ทันทีไม่ต้องรอ', 'รับสิทธิ์เรียนฟรี 1 คอร์ส/เดือน'], color: '#fff3cd' }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>สมัครสมาชิกเพื่อรับสิทธิพิเศษ</h1>
      <p>เลือกแผนสมาชิกเพื่อยกระดับการค้นหาคอร์สเรียนของคุณ</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
        {packages.map((pkg) => (
          <div key={pkg.name} style={{ border: '2px solid #007bff', borderRadius: '20px', padding: '30px', width: '250px', backgroundColor: pkg.color }}>
            <h2>{pkg.name}</h2>
            <h1 style={{ color: '#007bff' }}>{pkg.price}</h1>
            <ul style={{ textAlign: 'left', margin: '20px 0', minHeight: '150px' }}>
              {pkg.features.map(f => <li key={f} style={{ marginBottom: '10px' }}>{f}</li>)}
            </ul>
            <button 
              onClick={() => navigate('/register', { state: { pkg: pkg.name } })}
              style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              เริ่มต้นใช้งานแผนนี้
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;