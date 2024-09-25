import Task from "../task/Task"

const List = ({ tasks , Delete }) => {

    const tasksMapped = tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={Delete} taskId={index}/>
    ))

    return(
        <ul>
            {tasksMapped}
        </ul>
    );
}

export default List