import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import './CalendarPage.css'; // We will create this for overrides

const CalendarPage = () => {
    const navigate = useNavigate();

    const handleDateClick = (arg) => {
        // Navigate to Create Request with pre-filled data
        navigate('/requests/create', {
            state: {
                type: 'Preventive',
                date: arg.dateStr
            }
        });
    };

    // Mock Events
    const events = [
        { title: 'Oil Check - CNC', date: '2023-11-01', color: '#00d0df' },
        { title: 'Filter Change - Press', date: '2023-11-05', color: '#00d0df' },
        { title: 'Robot Arm Inspection', date: '2023-11-12', color: '#28a745' }, // Green for "Done" maybe?
        { title: 'Safety Audit', date: '2023-11-20', color: '#ffc107' },
        // Add a current date event for visibility
        { title: 'Urgent Maintenance', date: new Date().toISOString().split('T')[0], color: '#dc3545' }
    ];

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', height: '100%' }}>
            <h1 style={{ marginBottom: '20px' }}>Preventive Maintenance Calendar</h1>
            <div className="calendar-wrapper" style={{
                background: 'rgba(6, 58, 68, 0.5)',
                padding: '20px',
                borderRadius: '15px',
                border: '1px solid #063A44',
                height: 'calc(100vh - 120px)'
            }}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick}
                    events={events}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek'
                    }}
                    height="100%"
                />
            </div>
        </div>
    );
};

export default CalendarPage;
