import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons'; // Import the logout icon
import LoginForm from './components/userform';
import MyCalendar from './components/calendar';
import EventForm from './components/form';
import AnalysisForm from './components/analysisform';
import '../src/App.css';

const { Header, Content } = Layout;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [events, setEvents] = useState([ // Define the events state
    {
      title: 'Meeting with Client',
      description: 'Discuss project requirements and timeline.',
      date: new Date('2024-05-10T09:00:00'),
    },
    {
      title: 'Lunch with Team',
      description: 'Team building and socializing.',
      date: new Date('2024-05-15T12:30:00'),
    },
    // Add more events as needed
  ]);

  const handleLogin = (studentId) => {
    if (studentId.trim() !== '') {
      setLoggedIn(true);
    }
  };


  return (
    <Router>
      <Layout>
        {loggedIn && (
          <Header className="header-container"style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Menu className="header-menu"theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/calendar">Calendar</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/event-form">Add Event</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/analysis-form">Analyse Yourself</Link>
              </Menu.Item>
            </Menu>
            
          </Header>
        )}
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route
              path="/"
              element={loggedIn ? <Navigate to="/calendar" /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route path="/calendar" element={<MyCalendar events={events} />} /> {/* Pass events data to MyCalendar */}
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/analysis-form" element={<AnalysisForm />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
