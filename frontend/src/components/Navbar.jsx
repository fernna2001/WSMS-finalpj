import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload(); 
  };

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 50px', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Link to="/" className="logo" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#007bff' }}>BKK Courses</Link>
      <div className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>คอร์สทั้งหมด</Link>
        <Link to="/pricing" style={{ textDecoration: 'none', color: '#333' }}>แพ็กเกจ</Link>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontWeight: 'bold' }}>สวัสดี, {user.name}</span>
            <button onClick={handleLogout} style={{ padding: '8px 15px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>ออกจากระบบ</button>
          </div>
        ) : (
          <Link to="/login" className="btn-login" style={{ padding: '8px 20px', background: '#007bff', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>เข้าสู่ระบบ</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;