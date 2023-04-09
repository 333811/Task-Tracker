import Decorator from "./Decorator";
import TaskManager from "./TaskManager";

const Page = () => {
  return (
    <div class="container-fluid">
      <div class="row">
      <Decorator />
      <TaskManager />
      </div>
    </div>
  )
}

export default Page