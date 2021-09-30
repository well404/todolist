import { TaskContainer } from "./style"
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ task, completedChange, removeTask }) => {

    return (
        <TaskContainer className={task.completed && 'completed'}>

            <Checkbox
                inputProps={{ 'aria-label': 'Checkbox' }}
                checked={task.completed ? true : false}
                onChange={() => completedChange(task.id)}
            />
            {task.value}
            <DeleteIcon className="remove" onClick={() => removeTask(task.id)} />

        </TaskContainer>
    )
}

export default Task