import React, { useState, useEffect } from "react";
import axios from "axios";

const Attendance = () => {
  const [students, setStudents] = useState([]); // List of students
  const [attendance, setAttendance] = useState({}); // Attendance state
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default date
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  useEffect(() => {
    // Fetch students from backend
    axios
      .get("http://127")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  // Handle attendance change for each student
  const handleAttendanceChange = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  // Submit attendance to backend
  const submitAttendance = () => {
    const attendanceData = Object.entries(attendance).map(([id, status]) => ({
      student: id,
      date: date,
      status: status ? "Present" : "Absent",
    }));

    axios
      .post("https://your-backend-api.com/api/attendance", attendanceData)
      .then(() => alert("Attendance submitted successfully!"))
      .catch((error) => console.error("Error submitting attendance:", error));
  };

  // Filter students based on the search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Page</h1>

      {/* Date Picker */}
      <label className="block mb-2 font-medium">Select Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded px-2 py-1 mb-4"
      />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-2 py-1 mb-4 w-full"
      />

      {/* Attendance Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Group</th>
            <th className="border px-4 py-2">Mark Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.group}</td>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={attendance[student.id] || false}
                  onChange={(e) =>
                    handleAttendanceChange(student.id, e.target.checked)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Submit Button */}
      <button
        onClick={submitAttendance}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Submit Attendance
      </button>
    </div>
  );
};

export default Attendance;
