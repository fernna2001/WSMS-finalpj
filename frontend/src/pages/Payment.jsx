import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || { name: 'ผู้ใช้งาน', package: 'Basic' };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '30px', border: '2px solid #007bff', borderRadius: '20px' }}>
        <h2>ชำระเงินสำหรับแพ็กเกจ {user.package}</h2>
        <p>คุณ <strong>{user.name}</strong> กรุณาโอนเงินมาที่:</p>
        <div style={{ background: '#f8f9fa', padding: '20px', margin: '20px 0', borderRadius: '10px' }}>
          <h3 style={{ color: '#007bff' }}>ธนาคารกสิกรไทย</h3>
          <h2 style={{ letterSpacing: '2px' }}>012-3-45678-9</h2>
          <p>ชื่อบัญชี: บจก. แบงค็อก คอร์สเซส</p>
        </div>
        <button onClick={() => { alert("แจ้งโอนเงินสำเร็จ!"); navigate('/login'); }} style={{ width: '100%', padding: '15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' }}>แจ้งโอนเงินเรียบร้อย</button>
      </div>
    </div>
  );
};

export default Payment;