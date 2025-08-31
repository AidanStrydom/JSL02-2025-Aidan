function AddTask(taskNo)
{
    const taskTitle = prompt(`Enter task ${taskNo} title:`);
    console.log(taskTitle);

    const taskDesc = prompt("Enter task description:");
    console.log(taskDesc);

    let isValid = false;

    while (isValid === false) 
    {
        const taskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
        console.log(taskStatus);

        const validStatuses = ["todo", "doing", "done"];

        if (!validStatuses.includes(taskStatus)) 
        {
             console.log("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }

        else    
        {
            isValid = true;
        }
    }
}
AddTask(1);
AddTask(2);

