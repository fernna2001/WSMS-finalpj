import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // ข้อมูลจำลอง (Mock Data)
  const courses = [
    { id: 1, name: 'Fullstack JavaScript', category: 'Coding', platform: 'Zoom', price: 3000 },
    { id: 2, name: 'UX/UI Design Masterclass', category: 'Design', platform: 'Meet', price: 1500 },
    { id: 3, name: 'Digital Marketing 2026', category: 'Business', platform: 'YouTube', price: 2800 },
  ];

  // Logic การ Search และ Filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input 
          type="text" 
          placeholder="ค้นหาชื่อคอร์ส..." 
          style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          style={{ padding: '10px', borderRadius: '5px' }}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">ทุกหมวดหมู่</option>
          <option value="Coding">Coding</option>
          <option value="Design">Design</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', background: 'white' }}>
            <small style={{ color: '#007bff' }}>{course.category}</small>
            <h3 style={{ margin: '10px 0' }}>{course.name}</h3>
            <p style={{ fontSize: '14px', color: '#666' }}>เรียนผ่าน: {course.platform}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>฿{course.price}</span>
              <button 
                onClick={() => navigate(`/course/${course.id}`)}
                style={{ background: '#007bff', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
              >
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;