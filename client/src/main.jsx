import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Knowledgebase from './pages/Knowledgebase'
import NewKnowledgebase from './pages/newKnowledgebase'
import NotFound from './pages/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/newKnowledgebase" element={<NewKnowledgebase />} />
          <Route path="/knowledgebase/:id" element={<Knowledgebase />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)