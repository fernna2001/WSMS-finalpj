import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', 
    package: location.state?.pkg || 'Basic'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลไปหน้าจ่ายเงิน
    navigate('/payment', { state: { user: formData } });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '15px' }}>
      <h2>สมัครสมาชิก</h2>
      <p>แพ็กเกจที่เลือก: <strong style={{color:'#007bff'}}>{formData.package}</strong></p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ชื่อ-นามสกุล" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="อีเมล" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="รหัสผ่าน" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>ลงทะเบียนและชำระเงิน</button>
      </form>
    </div>
  );
};

export default Register;