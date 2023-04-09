import Quote from "./Quote";
import Heart from "./Heart";
import TaskManager from "./TaskManager";

const ContainerRight = () => {
  return (
    <div class="col-7 rightContainer">
      <div class="row row-1">
        <Quote />
        <Heart />
      </div>
      <hr></hr>
      <div class="row">
        <TaskManager />
      </div>
    </div>
  )
}

export default ContainerRight