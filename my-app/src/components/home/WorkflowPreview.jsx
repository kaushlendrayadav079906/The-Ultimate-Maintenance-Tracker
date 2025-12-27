import React from 'react';
import { FaFire, FaClock, FaArrowRight } from 'react-icons/fa';

const WorkflowPreview = () => {
    return (
        <div className="section">
            <div className="home-container">
                <h2 className="section-title">Workflow Logic</h2>
                <div className="workflow-container">

                    <div className="flow-block">
                        <h3 className="flow-title"><FaFire color="#dc3545" /> Corrective Breakdown Logic</h3>
                        <div className="flow-steps">
                            <div className="flow-step">Equipment Failure</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">Create Request</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">Assign Tech</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">In Progress</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">Complete</div>
                        </div>
                    </div>

                    <div className="flow-block">
                        <h3 className="flow-title"><FaClock color="#ffc107" /> Preventive Maintenance Logic</h3>
                        <div className="flow-steps">
                            <div className="flow-step">Schedule Job</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">Appear on Calendar</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">Auto-Alert Team</div>
                            <FaArrowRight className="flow-arrow" />
                            <div className="flow-step">Execute</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkflowPreview;
