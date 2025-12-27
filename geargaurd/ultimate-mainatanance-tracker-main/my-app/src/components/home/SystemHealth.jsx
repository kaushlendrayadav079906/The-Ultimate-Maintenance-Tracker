import React from 'react';
import { FaServer, FaDatabase, FaWifi, FaCheckCircle } from 'react-icons/fa';

const SystemHealth = () => {
    return (
        <div className="section" style={{ background: '#00222b' }}>
            <div className="home-container">
                <h2 className="section-title">System Health Status</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

                    <div style={{ background: 'rgba(0, 208, 223, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid #00d0df', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaServer size={30} color="#00E6FF" />
                        <div>
                            <h4 style={{ margin: 0, color: '#fff' }}>Main Server</h4>
                            <div style={{ color: '#28a745', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <FaCheckCircle /> Online (99.9%)
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(0, 208, 223, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid #00d0df', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaDatabase size={30} color="#ffc107" />
                        <div>
                            <h4 style={{ margin: 0, color: '#fff' }}>Database</h4>
                            <div style={{ color: '#28a745', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <FaCheckCircle /> Connected
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(0, 208, 223, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid #00d0df', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaWifi size={30} color="#28a745" />
                        <div>
                            <h4 style={{ margin: 0, color: '#fff' }}>API Gateway</h4>
                            <div style={{ color: '#28a745', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <FaCheckCircle /> Operational
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SystemHealth;
