import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // จำลองข้อมูลจาก Database
      const userData = { name: "Fern Account", email: email };
      localStorage.setItem('user', JSON.stringify(userData)); 
      
      alert("ยินดีต้อนรับกลับมา!");
      navigate('/');
      window.location.reload(); 
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '15px', textAlign: 'center' }}>
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="อีเมล" required style={{ width: '90%', padding: '10px', marginBottom: '10px' }} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="รหัสผ่าน" required style={{ width: '90%', padding: '10px', marginBottom: '20px' }} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>ล็อกอิน</button>
      </form>
    </div>
  );
};

export default Login;