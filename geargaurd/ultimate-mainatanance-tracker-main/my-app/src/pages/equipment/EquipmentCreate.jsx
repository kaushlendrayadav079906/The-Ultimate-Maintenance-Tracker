import React, { useState } from 'react';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const EquipmentCreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        model: '',
        serial: '',
        location: '',
        installDate: '',
        status: 'Operational'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Equipment:", formData);
        // Mock API call simulation
        alert(`Successfully added ${formData.name}!`);
        navigate('/equipment/list');
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

    const labelStyle = {
        display: 'block',
        marginTop: '20px',
        color: '#b0c4c9',
        fontSize: '0.9rem'
    };

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
            <Link to="/equipment/list" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#00d0df', textDecoration: 'none', marginBottom: '20px' }}>
                <FaArrowLeft /> Back to List
            </Link>

            <div style={{ background: 'rgba(6, 58, 68, 0.5)', padding: '40px', borderRadius: '15px', border: '1px solid #063A44' }}>
                <h1 style={{ marginTop: 0, borderBottom: '1px solid #063A44', paddingBottom: '20px' }}>Add New Equipment</h1>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {/* Left Column */}
                        <div>
                            <label style={labelStyle}>Equipment Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="e.g. CNC Machine X1" required />

                            <label style={labelStyle}>Model Number</label>
                            <input type="text" name="model" value={formData.model} onChange={handleChange} style={inputStyle} placeholder="e.g. MX-5000" />

                            <label style={labelStyle}>Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} style={inputStyle}>
                                <option value="Operational">Operational</option>
                                <option value="Maintenance">Under Maintenance</option>
                                <option value="Offline">Offline</option>
                                <option value="Scrap">Scrap</option>
                            </select>
                        </div>

                        {/* Right Column */}
                        <div>
                            <label style={labelStyle}>Serial Number</label>
                            <input type="text" name="serial" value={formData.serial} onChange={handleChange} style={inputStyle} placeholder="e.g. SN-2023-XYZ" required />

                            <label style={labelStyle}>Location</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} style={inputStyle} placeholder="e.g. Workshop B" required />

                            <label style={labelStyle}>Installation Date</label>
                            <input type="date" name="installDate" value={formData.installDate} onChange={handleChange} style={inputStyle} />
                        </div>
                    </div>

                    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                        <button type="button" onClick={() => navigate('/equipment/list')} style={{ padding: '12px 25px', background: 'transparent', border: '1px solid #6c757d', color: '#ccc', borderRadius: '8px', cursor: 'pointer' }}>
                            Cancel
                        </button>
                        <button type="submit" style={{ padding: '12px 30px', background: '#00d0df', border: 'none', color: '#012b36', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaSave /> Save Equipment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EquipmentCreate;
