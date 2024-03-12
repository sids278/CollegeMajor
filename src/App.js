import React, { useState } from 'react';
import EventForm from './components/form';
import EventList from './components/eventlist';
import MyCalendar from './components/calendar';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Header, Content } = Layout;

const App = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Client',
      description: 'Discuss project requirements and timeline.',
      date: new Date('2024-03-10T09:00:00'),
    },
    {
      title: 'Lunch with Team',
      description: 'Team building and socializing.',
      date: new Date('2024-03-15T12:30:00'),
    },
    {
      title: 'Presentation',
      description: 'Present project progress to stakeholders.',
      date: new Date('2024-03-20T14:00:00'),
    },
    {
      title: 'Training Session',
      description: 'Training new team members on project tools.',
      date: new Date('2024-03-25T10:00:00'),
    },
    {
      title: 'Project Deadline',
      description: 'Final submission of project deliverables.',
      date: new Date('2024-03-31T17:00:00'),
    },
  ]
);

  const handleEventSubmit = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/event-form">Add Event</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" exact key="calendar" element={<><MyCalendar events={events} /> 
              <EventList events={events} /></>}/>
              
            
            <Route path="/event-form" key="event-form"
              element={<EventForm onSubmit={handleEventSubmit} />}
            />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
