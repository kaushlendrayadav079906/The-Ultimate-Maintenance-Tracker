import React, { useState } from 'react';
import { FaUserPlus, FaUserCircle, FaCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const TeamsPage = () => {
    // Mock Data
    const [teams] = useState([
        {
            id: 1,
            name: "Mechanical Maintenance",
            head: "John Doe",
            activeJobs: 5,
            members: [
                { name: "Mike Ross", status: "Busy", role: "Senior Mechanic" },
                { name: "Harvey Specter", status: "Available", role: "Hydraulics Expert" },
                { name: "Louis Litt", status: "On Leave", role: "Junior Mechanic" },
            ]
        },
        {
            id: 2,
            name: "Electrical & Instrumentation",
            head: "Rachel Zane",
            activeJobs: 2,
            members: [
                { name: "Donna Paulsen", status: "Available", role: "PLC Specialist" },
                { name: "Jessica Pearson", status: "Busy", role: "Instrumentation" },
            ]
        },
        {
            id: 3,
            name: "IT & Systems Support",
            head: "Benjamin",
            activeJobs: 0,
            members: [
                { name: "Katrina Bennett", status: "Available", role: "Network Admin" },
                { name: "Alex Williams", status: "Available", role: "Software Support" },
            ]
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Available': return '#28a745';
            case 'Busy': return '#ffc107';
            case 'On Leave': return '#6c757d';
            default: return '#fff';
        }
    };

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ margin: 0 }}>Teams & Technicians</h1>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#00d0df', color: '#012b36', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                    <FaUserPlus /> Add Technician
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
                {teams.map(team => (
                    <div key={team.id} style={{
                        background: 'rgba(6, 58, 68, 0.5)',
                        borderRadius: '15px',
                        border: '1px solid #063A44',
                        overflow: 'hidden'
                    }}>
                        {/* Header */}
                        <div style={{ padding: '20px', background: '#063A44', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{team.name}</h2>
                                <div style={{ fontSize: '0.85rem', color: '#b0c4c9', marginTop: '5px' }}>Head: {team.head}</div>
                            </div>
                            <div style={{ background: '#00d0df', color: '#012b36', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>
                                {team.activeJobs} Active Jobs
                            </div>
                        </div>

                        {/* Members List */}
                        <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {team.members.map((member, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '15px', borderBottom: idx !== team.members.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00222b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d0df', fontSize: '1.2rem' }}>
                                                <FaUserCircle />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '600' }}>{member.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#7f99a0' }}>{member.role}</div>
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: getStatusColor(member.status), fontWeight: '500' }}>
                                                <FaCircle size={8} /> {member.status}
                                            </div>
                                            <div style={{ display: 'flex', gap: '10px', marginTop: '5px', justifyContent: 'flex-end', color: '#b0c4c9' }}>
                                                <FaPhone size={12} style={{ cursor: 'pointer', ':hover': { color: '#fff' } }} />
                                                <FaEnvelope size={12} style={{ cursor: 'pointer', ':hover': { color: '#fff' } }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: '15px', borderTop: '1px solid #063A44', textAlign: 'center' }}>
                            <button style={{ background: 'transparent', border: 'none', color: '#00d0df', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
                                View Team Schedule
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamsPage;
