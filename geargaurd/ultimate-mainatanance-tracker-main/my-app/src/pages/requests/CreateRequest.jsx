import React, { useState, useEffect } from 'react';
import { FaSave, FaArrowLeft, FaMagic } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const CreateRequest = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Check for pre-filled data (e.g. from Calendar)
    const preFilled = location.state || {};

    const [formData, setFormData] = useState({
        subject: '',
        type: preFilled.type || 'Corrective',
        equipment: '',
        team: '',
        date: preFilled.date || ''
    });

    // Mock Equipment -> Team Mapping
    const teamMapping = {
        "CNC Machine": "Mechanical Team",
        "Hydraulic Press": "Hydraulics Team",
        "Robot Arm": "Electrical Team",
        "Server Rack": "IT Support"
    };

    const handleEquipmentChange = (e) => {
        const eq = e.target.value;
        setFormData({
            ...formData,
            equipment: eq,
            team: teamMapping[eq] || "" // Auto-fill logic
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Request Created!\nAssigned to: ${formData.team}`);
        navigate('/requests');
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        background: '#012B36',
        border: '1px solid #063A44',
        borderRadius: '8px',
        color: '#fff',
        marginTop: '5px'
    };

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
            <Link to="/requests" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#00d0df', textDecoration: 'none', marginBottom: '20px' }}>
                <FaArrowLeft /> Back to Requests
            </Link>

            <div style={{ background: 'rgba(6, 58, 68, 0.5)', padding: '40px', borderRadius: '15px', border: '1px solid #063A44' }}>
                <h1 style={{ marginTop: 0 }}>Create Maintenance Request</h1>

                <form onSubmit={handleSubmit}>

                    <label style={{ display: 'block', marginTop: '20px', color: '#b0c4c9' }}>Request Subject</label>
                    <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={inputStyle}
                        placeholder="e.g. Unusual noise from motor"
                        required
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div>
                            <label style={{ display: 'block', color: '#b0c4c9' }}>Maintenance Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                style={inputStyle}
                            >
                                <option value="Corrective">Corrective (Breakdown)</option>
                                <option value="Preventive">Preventive (Scheduled)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', color: '#b0c4c9' }}>Target Equipment</label>
                            <select
                                value={formData.equipment}
                                onChange={handleEquipmentChange}
                                style={inputStyle}
                                required
                            >
                                <option value="">-- Select Equipment --</option>
                                <option value="CNC Machine">CNC Machine</option>
                                <option value="Hydraulic Press">Hydraulic Press</option>
                                <option value="Robot Arm">Robot Arm</option>
                                <option value="Server Rack">Server Rack</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div>
                            <label style={{ display: 'block', color: '#b0c4c9' }}>
                                Assigned Team
                                {formData.team && <span style={{ fontSize: '0.8rem', color: '#00d0df', marginLeft: '10px' }}><FaMagic /> Auto-filled</span>}
                            </label>
                            <input
                                type="text"
                                value={formData.team}
                                readOnly
                                style={{ ...inputStyle, background: '#001a21', cursor: 'not-allowed', color: '#adb5bd' }}
                                placeholder="Select equipment to auto-assign"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', color: '#b0c4c9' }}>
                                Scheduled Date {formData.type === 'Preventive' && <span style={{ color: '#dc3545' }}>*</span>}
                            </label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                style={inputStyle}
                                required={formData.type === 'Preventive'}
                            />
                        </div>
                    </div>

                    <button type="submit" style={{ width: '100%', marginTop: '30px', padding: '15px', background: '#00d0df', border: 'none', color: '#012b36', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <FaSave /> Submit Request
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CreateRequest;
