IELTS Speaking Test Platform - Assignment 7

📝 Overview
This repository contains implementation of Assignment 7 for the IELTS Speaking Test Platform, focusing on routing implementation with both public and private routes. The application is built using React, TypeScript, and React Router DOM.

🚀 Features

Public Routes: Home page and Login page accessible to all users
Private Routes: Admin and Test Taker dashboards accessible only to authenticated users
Authentication System: Simple authentication implementation using localStorage
Responsive Design: Works well on different screen sizes

🛠️ Technologies Used

React 18
TypeScript
React Router DOM
Vite (for build tooling)

📦 Installation

Clone the repository

bashgit clone https://github.com/aseervad/assignment7.git
cd assignment7

Install dependencies

bashnpm install

Run the development server

bashnpm run dev

Open your browser and navigate to http://localhost:5173

🔍 Implementation Details
Components Created:

Home: Landing page for the application
Login: Authentication page
AdminDashboard: Dashboard for administrators
TestTakerDashboard: Dashboard for test takers
PrivateRoute: HOC to protect routes requiring authentication
Header: Navigation component
Footer: Footer component

Routing Structure:
/                     - Home page (public)
/login                - Login page (public)
/admin-dashboard      - Admin dashboard (private)
/test-taker-dashboard - Test taker dashboard (private)

