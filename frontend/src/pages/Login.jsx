import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. ตรวจสอบว่ากรอกข้อมูลครบถ้วนไหม
    if (email && password) {
      
      // 2. จำลองข้อมูล User (ในอนาคตส่วนนี้จะดึงมาจากฐานข้อมูลของเพื่อน)
      const userData = { 
        name: "Fern Account", 
        email: email, 
        tier: "Gold" 
      };

      // 3. บันทึกข้อมูลลงใน localStorage เพื่อให้ Navbar แสดงชื่อได้
      localStorage.setItem('user', JSON.stringify(userData)); 
      
      alert("ยินดีต้อนรับเข้าสู่ระบบ!");

      // 4. สั่งให้เด้งไปหน้าคอร์สทั้งหมด (หน้าแรก)
      navigate('/');

      // 5. บังคับรีเฟรชหน้าจอเพื่อให้ Navbar อัปเดตสถานะชื่อทันที
      window.location.reload(); 

    } else {
      alert("กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน");
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '100px auto', 
      padding: '40px 20px', 
      textAlign: 'center',
      border: '1px solid #e0e0e0',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ marginBottom: '30px', color: '#333' }}>เข้าสู่ระบบ</h2>
      
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="email" 
            placeholder="อีเมล" 
            required
            onChange={(e) => setEmail(e.target.value)} 
            style={{
              width: '90%', 
              padding: '12px', 
              borderRadius: '10px', 
              border: '1px solid #ddd',
              fontSize: '16px'
            }} 
          />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <input 
            type="password" 
            placeholder="รหัสผ่าน" 
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '90%', 
              padding: '12px', 
              borderRadius: '10px', 
              border: '1px solid #ddd',
              fontSize: '16px'
            }} 
          />
        </div>
        
        <button 
          type="submit" 
          style={{ 
            width: '96%', 
            padding: '12px', 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          ล็อกอิน
        </button>
      </form>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        ยังไม่มีบัญชี? <span 
          onClick={() => navigate('/pricing')} 
          style={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}
        >
          สมัครสมาชิกที่นี่
        </span>
      </p>
    </div>
  );
};

export default Login;