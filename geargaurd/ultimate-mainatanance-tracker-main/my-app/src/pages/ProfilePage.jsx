import React from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaIdBadge, FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff' }}>
            <h1 style={{ marginBottom: '30px' }}>User Profile</h1>

            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(6, 58, 68, 0.5)', borderRadius: '15px', border: '1px solid #063A44', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(45deg, #012B36, #00d0df)', height: '120px' }}></div>

                <div style={{ padding: '0 30px 30px 30px', marginTop: '-50px', position: 'relative' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#012B36', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #063A44' }}>
                        <FaUserCircle size={80} color="#b0c4c9" />
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ margin: 0, fontSize: '1.8rem' }}>Admin User</h2>
                            <div style={{ color: '#00d0df', fontWeight: 'bold' }}>Facility Manager</div>
                        </div>
                        <button style={{ background: 'transparent', border: '1px solid #00d0df', color: '#00d0df', padding: '8px 15px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <FaEdit /> Edit Profile
                        </button>
                    </div>

                    <div style={{ marginTop: '30px', display: 'grid', gap: '20px' }}>
                        <div style={infoRowStyle}>
                            <div style={labelStyle}><FaEnvelope /> Email</div>
                            <div>admin@ultimatetracker.com</div>
                        </div>
                        <div style={infoRowStyle}>
                            <div style={labelStyle}><FaPhone /> Phone</div>
                            <div>+1 (555) 123-4567</div>
                        </div>
                        <div style={infoRowStyle}>
                            <div style={labelStyle}><FaIdBadge /> Employee ID</div>
                            <div>EMP-001</div>
                        </div>
                        <div style={infoRowStyle}>
                            <div style={labelStyle}>Department</div>
                            <div>Operations</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const infoRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    borderBottom: '1px solid rgba(6, 58, 68, 0.5)'
};

const labelStyle = {
    color: '#b0c4c9',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
};

export default ProfilePage;
