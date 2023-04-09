import Button from "./AddTask";
import Quote from "./Quote";

const TaskManager = () => {
  return (
    <div class="col-7">
      <div class="row">
        <Quote />
        <img src="paris.jpg" alt="Paris" width="300" height="300"></img>
      </div>
      <div class="row">
        <Button />
      </div>
    </div>

  )
}

export default TaskManager