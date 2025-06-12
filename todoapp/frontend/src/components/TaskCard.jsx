import './TaskCard.css'

export default function TaskCard(props) {
    const { task, onEdit, onDelete, onToggle } = props;

    const handleCheckboxChange = () => {
        onToggle(task);
    };

    return (
        <div id="taskCard" className='taskCard'>
            <div id='taskNameContainer' className='taskNameContainer'>
                <span id='checkBox'>
                    <input
                        type='checkbox'
                        checked={task.completed}
                        onChange={handleCheckboxChange} // ✅ Toggle handler
                    />
                </span>
                <span
                    id='taskName'
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                    {task.title}
                </span>
            </div>
            <div id="cardActions" className='cardActions'>
                <button id='editButton' onClick={() => onEdit(task)} className='actionButton'>Edit</button>
                <button id='deleteButton' onClick={() => onDelete(task)} className='actionButton deleteButton'>Delete</button>
            </div>
        </div>
    )
}
