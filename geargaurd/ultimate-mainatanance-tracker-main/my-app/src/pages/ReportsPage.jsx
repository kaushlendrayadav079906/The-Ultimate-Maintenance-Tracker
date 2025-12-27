import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { FaArrowUp, FaArrowDown, FaChartPie, FaClock } from 'react-icons/fa';

const ReportsPage = () => {
    // Mock Data
    const workloadData = [
        { name: 'Mechanical', active: 5, resolved: 12 },
        { name: 'Electrical', active: 2, resolved: 8 },
        { name: 'IT', active: 0, resolved: 5 },
        { name: 'Safety', active: 1, resolved: 3 },
    ];

    const categoryData = [
        { name: 'CNC Machines', value: 35 },
        { name: 'Hydraulics', value: 25 },
        { name: 'Electronics', value: 20 },
        { name: 'Infrastructure', value: 20 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const trendData = [
        { month: 'Jan', Preventive: 4, Corrective: 2 },
        { month: 'Feb', Preventive: 5, Corrective: 3 },
        { month: 'Mar', Preventive: 4, Corrective: 6 },
        { month: 'Apr', Preventive: 6, Corrective: 2 },
        { month: 'May', Preventive: 7, Corrective: 1 },
    ];

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', height: '100%', overflowY: 'auto' }}>
            <h1 style={{ marginBottom: '30px' }}>Reports & Analytics</h1>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div style={cardStyle}>
                    <div style={{ fontSize: '0.9rem', color: '#b0c4c9' }}>Total Requests</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00d0df' }}>42</div>
                    <div style={{ fontSize: '0.8rem', color: '#28a745', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaArrowUp /> 12% vs last month
                    </div>
                </div>
                <div style={cardStyle}>
                    <div style={{ fontSize: '0.9rem', color: '#b0c4c9' }}>Mean Time To Repair (MTTR)</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>4.2 Hrs</div>
                    <div style={{ fontSize: '0.8rem', color: '#28a745', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaArrowDown /> 0.5hr improvement
                    </div>
                </div>
                <div style={cardStyle}>
                    <div style={{ fontSize: '0.9rem', color: '#b0c4c9' }}>Preventive Compliance</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>94%</div>
                    <div style={{ fontSize: '0.8rem', color: '#b0c4c9' }}>Target: 95%</div>
                </div>
                <div style={cardStyle}>
                    <div style={{ fontSize: '0.9rem', color: '#b0c4c9' }}>Cost This Month</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>$3,450</div>
                    <div style={{ fontSize: '0.8rem', color: '#dc3545', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaArrowUp /> Over budget
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                {/* Bar Chart */}
                <div style={{ ...cardStyle, height: '400px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '20px' }}>Team Workload Analysis</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={workloadData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#063A44" />
                            <XAxis dataKey="name" stroke="#b0c4c9" />
                            <YAxis stroke="#b0c4c9" />
                            <Tooltip contentStyle={{ backgroundColor: '#012B36', borderColor: '#00d0df' }} />
                            <Legend />
                            <Bar dataKey="active" name="Active Jobs" fill="#ffc107" />
                            <Bar dataKey="resolved" name="Resolved (Mtd)" fill="#00d0df" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div style={{ ...cardStyle, height: '400px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '20px' }}>Breakdown by Category</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#012B36', borderColor: '#00d0df' }} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Line Chart */}
            <div style={{ ...cardStyle, height: '350px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '20px' }}>Maintenance Trends (Preventive vs Corrective)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#063A44" />
                        <XAxis dataKey="month" stroke="#b0c4c9" />
                        <YAxis stroke="#b0c4c9" />
                        <Tooltip contentStyle={{ backgroundColor: '#012B36', borderColor: '#00d0df' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Preventive" stroke="#28a745" strokeWidth={2} />
                        <Line type="monotone" dataKey="Corrective" stroke="#dc3545" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

const cardStyle = {
    background: 'rgba(6, 58, 68, 0.5)',
    padding: '20px',
    borderRadius: '15px',
    border: '1px solid #063A44'
};

export default ReportsPage;
