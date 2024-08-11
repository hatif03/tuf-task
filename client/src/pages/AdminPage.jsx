import React, { useState } from 'react';
import axios from 'axios';
import AdminDashboard from '../components/AdminDashboard';

const AdminPage = () => {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = async ({ question, answer }) => {
    try {
      const { data } = await axios.post(
        '/api/flashcards',
        { question, answer },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setFlashcards([...flashcards, data]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Admin Dashboard</h1>
      <AdminDashboard addFlashcard={addFlashcard} />
    </div>
  );
};

export default AdminPage;
