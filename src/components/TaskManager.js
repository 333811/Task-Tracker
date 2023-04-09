import Button from "./AddTask";
import Quote from "./Quote";
import Heart from "./Heart";

const TaskManager = () => {
  return (
    <div class="col-7">
      <div class="row row-1">
        <Quote />
        <Heart />
      </div>
      <hr></hr>
      <div class="row">
        <Button />
      </div>
    </div>

  )
}

export default TaskManager