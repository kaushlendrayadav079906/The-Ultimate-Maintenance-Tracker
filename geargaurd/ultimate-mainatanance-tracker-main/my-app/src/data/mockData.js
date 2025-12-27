export const equipmentData = [
    { id: 1, name: "Hydraulic Press X200", serial: "HP-X200-01", team: "Alpha Team", status: "Operational" },
    { id: 2, name: "Conveyor Belt A1", serial: "CB-A1-05", team: "Beta Team", status: "Under Repair" },
    { id: 3, name: "CNC Machine M4", serial: "CNC-M4-02", team: "Alpha Team", status: "Operational" },
    { id: 4, name: "Generator G-500", serial: "GEN-500-12", team: "Gamma Team", status: "Maintenance Due" },
    { id: 5, name: "Forklift F1", serial: "FL-F1-08", team: "Beta Team", status: "Operational" },
];

export const requestData = [
    { id: 101, type: "Corrective", equipment: "Conveyor Belt A1", technician: "John Doe", stage: "In Progress", overdue: false, date: "2023-10-25" },
    { id: 102, type: "Preventive", equipment: "Generator G-500", technician: "Jane Smith", stage: "New", overdue: true, date: "2023-10-20" },
    { id: 103, type: "Corrective", equipment: "Hydraulic Press X200", technician: "Mike Johnson", stage: "Repaired", overdue: false, date: "2023-10-22" },
    { id: 104, type: "Preventive", equipment: "CNC Machine M4", technician: "Sarah Lee", stage: "Scheduled", overdue: false, date: "2023-11-01" },
    { id: 105, type: "Corrective", equipment: "Forklift F1", technician: "John Doe", stage: "New", overdue: false, date: "2023-10-27" },
];

export const teamData = [
    { name: "Alpha Team", activeJobs: 5, members: 4 },
    { name: "Beta Team", activeJobs: 8, members: 3 },
    { name: "Gamma Team", activeJobs: 2, members: 5 },
];

export const kpistats = {
    totalEquipment: 42,
    activeRequests: 12,
    overdueRepairs: 3,
    preventiveScheduled: 8
};
