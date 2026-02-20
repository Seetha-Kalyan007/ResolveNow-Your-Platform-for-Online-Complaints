import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SubmitComplaint from './pages/SubmitComplaint'
import MyComplaints from './pages/MyComplaints'
import Chat from './pages/Chat'

export default function App() {
  return (
    <div className="container py-4">
      <nav className="mb-4">
        <Link to="/" className="me-3">Home</Link>
        <Link to="/register" className="me-3">Sign Up</Link>
        <Link to="/login" className="me-3">Login</Link>
        <Link to="/dashboard" className="me-3">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome to ResolveNow</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitComplaint />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </div>
  )
}
