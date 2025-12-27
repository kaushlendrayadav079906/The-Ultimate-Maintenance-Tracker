import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const SidebarSubmenu = ({ item, collapsed, isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`menu-item has-submenu ${isOpen ? "open" : ""}`}
                onClick={() => toggleMenu(item.name)}
            >
                <div className="icon" style={{ position: 'relative' }}>
                    {item.icon}
                    {/* Badge for Collapsed State or Icon view */}
                    {item.badge && collapsed && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            background: '#dc3545',
                            color: '#fff',
                            borderRadius: '50%',
                            fontSize: '10px',
                            width: '16px',
                            height: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold'
                        }}>
                            {item.badge}
                        </span>
                    )}
                </div>
                {!collapsed && (
                    <>
                        <span className="label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            {item.name}
                            {/* Badge for Expanded State */}
                            {item.badge && (
                                <span style={{
                                    background: '#dc3545',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    padding: '2px 8px',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    marginRight: '10px' // Space before arrow
                                }}>
                                    {item.badge} Overdue
                                </span>
                            )}
                        </span>
                        <span className="arrow">
                            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                        </span>
                    </>
                )}
            </div>
            {/* Submenu Items */}
            <div
                className={`submenu-container ${isOpen && !collapsed ? "show" : ""}`}
            >
                {item.subMenus.map((sub, subIndex) => (
                    <NavLink
                        key={subIndex}
                        to={sub.path}
                        className={({ isActive }) =>
                            `submenu-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="bullet">•</span>
                        <span className="label">{sub.name}</span>
                    </NavLink>
                ))}
            </div>
        </>
    );
};

export default SidebarSubmenu;
