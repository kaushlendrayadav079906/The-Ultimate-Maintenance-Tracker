import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EquipmentList = () => {
    // Mock Data
    const [equipment, setEquipment] = useState([
        { id: 1, name: "CNC Milling Machine", model: "X500", serial: "SN-2023-001", location: "Workshop A", status: "Operational" },
        { id: 2, name: "Hydraulic Press", model: "HP-20T", serial: "SN-2022-045", location: "Assembly Line", status: "Maintenance" },
        { id: 3, name: "Conveyor Belt System", model: "CB-100", serial: "SN-2021-112", location: "Packaging", status: "Operational" },
        { id: 4, name: "Industrial Robot Arm", model: "R-2000", serial: "SN-2023-089", location: "Welding Stn", status: "Offline" },
        { id: 5, name: "Air Compressor", model: "AC-500", serial: "SN-2020-033", location: "Utility Room", status: "Operational" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const getStatusColor = (status) => {
        switch (status) {
            case 'Operational': return '#28a745';
            case 'Maintenance': return '#ffc107';
            case 'Offline': return '#dc3545';
            default: return '#6c757d';
        }
    };

    const filteredEquipment = equipment.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.serial.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ margin: 0 }}>Equipment Inventory</h1>
                <Link to="/equipment/create" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#00d0df', color: '#012b36', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                    <FaPlus /> Add Equipment
                </Link>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <FaSearch style={{ position: 'absolute', left: '10px', top: '12px', color: '#6c757d' }} />
                    <input
                        type="text"
                        placeholder="Search equipment..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '10px 10px 10px 35px', borderRadius: '5px', border: '1px solid #063A44', background: '#00222b', color: '#fff' }}
                    />
                </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto', background: 'rgba(0, 34, 43, 0.8)', borderRadius: '10px', padding: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ecf0f1' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #063A44', textAlign: 'left' }}>
                            <th style={{ padding: '15px' }}>Name</th>
                            <th style={{ padding: '15px' }}>Model</th>
                            <th style={{ padding: '15px' }}>Serial Number</th>
                            <th style={{ padding: '15px' }}>Location</th>
                            <th style={{ padding: '15px' }}>Status</th>
                            <th style={{ padding: '15px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEquipment.map((item) => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #063A44' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>{item.name}</td>
                                <td style={{ padding: '15px' }}>{item.model}</td>
                                <td style={{ padding: '15px', fontFamily: 'monospace', color: '#00d0df' }}>{item.serial}</td>
                                <td style={{ padding: '15px' }}>{item.location}</td>
                                <td style={{ padding: '15px' }}>
                                    <span style={{
                                        padding: '5px 10px',
                                        borderRadius: '15px',
                                        background: `${getStatusColor(item.status)}20`,
                                        color: getStatusColor(item.status),
                                        fontSize: '0.85rem',
                                        fontWeight: 500
                                    }}>
                                        {item.status}
                                    </span>
                                </td>
                                <td style={{ padding: '15px', display: 'flex', gap: '10px' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#ffc107', cursor: 'pointer' }}><FaEdit /></button>
                                    <button style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer' }}><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredEquipment.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#7f99a0' }}>
                        No equipment found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default EquipmentList;
