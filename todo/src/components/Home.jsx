
import { useState , useEffect} from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
  // State to manage the list of tasks
  // This will hold the tasks entered by the user

  const [tasks, setTasks] = useState([]); // Initialize tasks as an empty array
  const [todo, setTodo] = useState("");
  
useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks); // Set the tasks state with the loaded tasks
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle changes in the input field
 
 
 
 const handleChange= (e)=> {
     setTodo(e.target.value); // Update tasks with the current input value
    }
    
    const handleSave = () => {
      if(todo != "" ) { // Check if the input is not empty
        setTasks([...tasks, {id: uuidv4() , todo, isCompleted: false }]); // Add the new task to the list
        setTodo(""); // Clear the input field after saving
        console.log(tasks); // Log the current tasks to the console
        localStorage.setItem("tasks", JSON.stringify([...tasks, {id: uuidv4() , todo, isCompleted: false }])); // Save tasks to localStorage
    }
  };
    
        const handleCheckbox = (id) => {
          const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
              return { ...task, isCompleted: !task.isCompleted }; // toggle isCompleted
            }
            return task;
          });
          localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
    setTasks(updatedTasks);
    };

    
    const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {   
        setTodo(taskToEdit.todo); // Set the input field to the task's current value
        setTasks(tasks.filter((task) => task.id !== id)); // Remove the task from the list for editing
    }}

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id); // Remove the task with the given id
        setTasks(updatedTasks); // Update the tasks state with the filtered list
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save the updated tasks to localStorage
    };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to the To Do App
      </h1>
      <p className="text-center mt-4">
        This app helps you manage your tasks efficiently.
      </p>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          spellCheck="false"
          placeholder="Enter your tasks here! "
          value = {todo}
          onChange={handleChange}onKeyDown={(e) => {
    if (e.key === "Enter") handleSave();
  }}
          className=" border-2 p-1 text-center w-xs rounded-2xl"
        />

        <button
          className=" bg-amber-200 rounded-2xl p-3 text-2xl font-medium hover:bg-amber-300 cursor-pointer"
          onClick={handleSave}
        >
          {" "}
          Save{" "}
        </button>
      </div>

      <div className="flex flex-col  mt-10 bg-yellow-50 p-3 rounded-lg shadow-md max-w-10/12 min-h-[30vw]  mx-auto sm:w-1/2">
        <h2 className="text-2xl font-bold pb-3 text-center border-b-1  ">
          Your Tasks
        </h2>

        <ul className="list-decimal list-inside mt-4 items-center justify-between w-auto">

          {/* Just for design purpose, you can remove this later */}
            {/* <div
                className="flex justify-between items-center p-2 "
              >
                
                <li className="text-2xl "> Demo Task Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                <div className="flex mt-4 ">
                  <button onClick={(e)=>handleEdit} className=" p-2 text-3xl cursor-pointer ">
                    <FaRegEdit />
                  </button>
                  <button className=" p-2 text-3xl cursor-pointer bg-red-300 rounded-lg ">
                    <RiDeleteBin2Fill />
                  </button>
                </div>
              </div> */}

          {tasks.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center p-2 "
              >
                <li
        className={`text-2xl ${item.isCompleted ? "line-through text-gray-500" : ""}`}
      >
        {item.todo}
      </li>
                <div className="flex mt-4 items-center ">
                <input type="checkbox" onClick={ ()=>handleCheckbox(item.id) } className=" size-5"></input>
                  <button onClick={()=>handleEdit(item.id)} className=" p-2 text-3xl cursor-pointer ">
                    <FaRegEdit /> 
                  </button>
                  <button onClick={()=>handleDelete(item.id)} className=" p-2 text-3xl cursor-pointer bg-red-300 rounded-lg ">
                    <RiDeleteBin2Fill />
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
