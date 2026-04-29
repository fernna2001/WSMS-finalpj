const API_URL = 'http://localhost:5000/api'; // เปลี่ยนตาม URL ของเพื่อนฝั่ง Backend

export const getAllCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};