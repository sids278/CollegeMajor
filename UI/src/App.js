import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import LoginForm from './components/loginform';
import UserForm from './components/userform';

import MyCalendar from './components/calendar';
import EventForm from './components/form';
import AnalysisForm from './components/analysisform';
import '../src/App.css';

const { Header, Content } = Layout;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);

  const handleLogin = () => {
    // Logic for handling successful login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic for handling logout
    setLoggedIn(false);
  };

  return (
    <Router>
      <Layout>
        <Header className="header-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {loggedIn && (
            <Menu className="header-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/calendar">Calendar</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/event-form">Add Event</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/analysis-form">Analyse Yourself</Link>
              </Menu.Item>
              <Menu.Item key="4" onClick={handleLogout} icon={<LogoutOutlined />}>
                Logout
              </Menu.Item>
            </Menu>
          )}
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route
              path="/"
              element={loggedIn ? <Navigate to="/calendar" /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route path="/calendar" element={<MyCalendar events={events} />} />
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/analysis-form" element={<AnalysisForm />} />
            <Route path="/register" element={<UserForm />} />

          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
