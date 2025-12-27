import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { FaUserCircle } from 'react-icons/fa';

const KanbanBoard = () => {
    // Initial Columns State
    const [columns, setColumns] = useState({
        new: {
            name: 'New',
            items: [
                { id: '101', content: 'Hydraulic Leak', equipment: 'Hydraulic Press', color: '#00E6FF' },
                { id: '104', content: 'Emergency Stop Fail', equipment: 'Conveyor Belt', color: '#00E6FF' },
            ]
        },
        inProgress: {
            name: 'In Progress',
            items: [
                { id: '101b', content: 'Motor Noise', equipment: 'Air Compressor', color: '#ffc107' },
                { id: '106', content: 'Belt Alignment', equipment: 'Conveyor 2', color: '#ffc107' }
            ]
        },
        repaired: {
            name: 'Repaired',
            items: [
                { id: '103', content: 'Sensor Calibration', equipment: 'Robot Arm', color: '#28a745' },
                { id: '107', content: 'Fuse Replacement', equipment: 'Main Panel', color: '#28a745' }
            ]
        },
        scrap: {
            name: 'Scrap',
            items: [
                { id: '105', content: 'Broken Bit', equipment: 'CNC Milling', color: '#dc3545' }
            ]
        }
    });

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);

            // Update color based on column (optional visual tweak)
            // removed.color = ... logic could go here

            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', height: '100%' }}>
            <h1 style={{ marginBottom: '30px' }}>Task Kanban Board</h1>

            <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 150px)', overflowX: 'auto', paddingBottom: '20px' }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: '280px',
                                    background: 'rgba(6, 58, 68, 0.5)',
                                    borderRadius: '12px',
                                    border: '1px solid #063A44',
                                    height: '100%'
                                }}
                                key={columnId}
                            >
                                <h2 style={{
                                    fontSize: '1.1rem',
                                    margin: '15px 0',
                                    padding: '0 20px',
                                    width: '100%',
                                    borderBottom: '1px solid #063A44',
                                    paddingBottom: '15px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    {column.name}
                                    <span style={{ fontSize: '0.8rem', background: '#012b36', padding: '2px 8px', borderRadius: '10px' }}>{column.items.length}</span>
                                </h2>

                                <div style={{ width: '100%', flexGrow: 1, padding: '10px', overflowY: 'auto' }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver ? 'rgba(0, 208, 223, 0.1)' : 'transparent',
                                                    minHeight: '100px',
                                                    borderRadius: '8px',
                                                    transition: 'background 0.2s',
                                                    flexGrow: 1
                                                }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        userSelect: 'none',
                                                                        padding: '16px',
                                                                        margin: '0 0 12px 0',
                                                                        minHeight: '50px',
                                                                        backgroundColor: '#00222b',
                                                                        color: 'white',
                                                                        borderLeft: `4px solid ${item.color}`,
                                                                        borderRadius: '8px',
                                                                        boxShadow: snapshot.isDragging ? '0 5px 15px rgba(0,0,0,0.5)' : 'none',
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    <div style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '8px' }}>{item.content}</div>
                                                                    <div style={{ fontSize: '0.8rem', color: '#b0c4c9', marginBottom: '12px' }}>{item.equipment}</div>
                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: '#7f99a0' }}>
                                                                            <FaUserCircle /> Tech ID: 42
                                                                        </div>
                                                                        <span style={{ fontSize: '0.75rem', background: '#063A44', padding: '2px 6px', borderRadius: '4px' }}>#{item.id}</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            </div>
                        );
                    })}
                </DragDropContext>
            </div>
        </div>
    );
};

export default KanbanBoard;
