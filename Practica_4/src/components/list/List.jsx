import Task from "../task/Task"

const List = ({tasks}) => {

    const tasksMapped = tasks.map((task, index) => (
        <Task key={index} task={task} />
    ))

    return(
        <ul>
            {tasksMapped}
        </ul>
    );
}

export default List