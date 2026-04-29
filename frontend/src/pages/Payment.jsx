import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // รับข้อมูล user และ package จากหน้าสมัครสมาชิก
  const user = location.state?.user || { name: 'ผู้ใช้งาน', package: 'Basic' };

  // State เก็บข้อมูลการโอน
  const [paymentData, setPaymentData] = useState({
    slip: null,
    date: '',
    hour: '',
    minute: ''
  });

  const handleConfirm = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูลให้ครบถ้วน
    if (paymentData.slip && paymentData.date && paymentData.hour && paymentData.minute) {
      
      // จัดรูปแบบวันที่แบบไทย (พ.ศ.)
      const thaiDate = new Date(paymentData.date).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const timeString = `${paymentData.hour}:${paymentData.minute}`;

      alert(`แจ้งชำระเงินสำเร็จ!\n----------------------\nวันที่โอน: ${thaiDate}\nเวลาโอน: ${timeString} น.\n----------------------\nระบบจะตรวจสอบสลิปของท่านภายใน 24 ชม. ค่ะ`);
      
      navigate('/login');
    } else {
      alert("กรุณาแนบรูปสลิป ระบุวันที่ และเลือกเวลาที่โอนให้ครบถ้วนนะคะ");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <div style={{ 
        maxWidth: '480px', 
        margin: '0 auto', 
        padding: '35px', 
        borderRadius: '25px', 
        backgroundColor: '#fff',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)' 
      }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>แจ้งชำระเงิน</h2>
        <p style={{ color: '#666' }}>แพ็กเกจ: <strong style={{ color: '#007bff' }}>{user.package}</strong></p>

        {/* ข้อมูลธนาคาร */}
        <div style={{ 
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', 
          padding: '20px', 
          margin: '25px 0', 
          borderRadius: '20px', 
          border: '1px solid #90caf9' 
        }}>
          <h3 style={{ color: '#1565c0', margin: '0 0 5px 0' }}>ธนาคารกสิกรไทย</h3>
          <h2 style={{ letterSpacing: '2px', margin: '10px 0', color: '#0d47a1' }}>012-3-45678-9</h2>
          <p style={{ margin: 0, fontWeight: '600', color: '#1565c0' }}>ชื่อบัญชี: บจก. แบงค็อก คอร์สเซส</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          {/* อัปโหลดสลิป */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: '#444' }}>แนบรูปภาพสลิป :</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setPaymentData({...paymentData, slip: e.target.files[0]})}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            {/* วันที่โอน */}
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: '#444' }}>วันที่โอน :</label>
              <input 
                type="date" 
                lang="th-TH"
                onChange={(e) => setPaymentData({...paymentData, date: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '12px', 
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* เวลาโอน (Dropdown 24 ชม.) */}
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: '#444' }}>เวลาโอน :</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <select 
                  onChange={(e) => setPaymentData({...paymentData, hour: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #ddd' }}
                >
                  <option value="">ชม.</option>
                  {[...Array(24)].map((_, i) => (
                    <option key={i} value={i.toString().padStart(2, '0')}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <span>:</span>
                <select 
                  onChange={(e) => setPaymentData({...paymentData, minute: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #ddd' }}
                >
                  <option value="">นาที</option>
                  {[...Array(60)].map((_, i) => (
                    <option key={i} value={i.toString().padStart(2, '0')}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={handleConfirm}
          style={{ 
            width: '100%', 
            padding: '16px', 
            background: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '30px', 
            fontSize: '18px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)',
            transition: 'all 0.2s ease'
          }}
        >
          ยืนยันการแจ้งโอนเงิน
        </button>

        <p 
          onClick={() => navigate('/pricing')} 
          style={{ marginTop: '20px', color: '#999', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
        >
          ยกเลิกและกลับไปเลือกแพ็กเกจใหม่
        </p>
      </div>
    </div>
  );
};

export default Payment;