import React from 'react';
import { FaNewspaper, FaArrowRight } from 'react-icons/fa';

const LatestNews = () => {
    const newsItems = [
        { title: "System Maintenance Scheduled", date: "Oct 30, 2023", desc: "Routine maintenance will occur from 2 AM to 4 AM UTC." },
        { title: "New Feature: Mobile Scanning", date: "Oct 28, 2023", desc: "Technicians can now scan equipment QR codes directly." },
        { title: "Q3 Performance Report", date: "Oct 15, 2023", desc: "Maintenance efficiency has improved by 15% this quarter." }
    ];

    return (
        <div className="section">
            <div className="home-container">
                <h2 className="section-title">Latest Updates</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                    {newsItems.map((item, index) => (
                        <div key={index} style={{ background: 'rgba(6, 58, 68, 0.5)', padding: '25px', borderRadius: '12px', borderLeft: '3px solid #00E6FF' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <FaNewspaper color="#00E6FF" />
                                <span style={{ fontSize: '0.8rem', color: '#b0c4c9' }}>{item.date}</span>
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 10px 0' }}>{item.title}</h3>
                            <p style={{ color: '#ecf0f1', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
                            <div style={{ marginTop: '15px', color: '#00d0df', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                Read more <FaArrowRight size={10} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
