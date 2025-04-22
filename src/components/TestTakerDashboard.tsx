// src/components/TestTakerDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const TestTakerDashboard: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Taker Dashboard</h1>
      <p>Welcome to your personal IELTS Speaking Test dashboard. This is a protected route.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Available Tests</h2>
        <ul>
          <li>IELTS Speaking Part 1: Introduction</li>
          <li>IELTS Speaking Part 2: Long-turn speaking</li>
          <li>IELTS Speaking Part 3: Discussion</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Link 
          to="/" 
          style={{
            color: '#2563eb',
            marginRight: '1rem'
          }}
        >
          Back to Home
        </Link>
        <button 
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            window.location.reload();
          }}
          style={{
            background: '#ef4444',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TestTakerDashboard;