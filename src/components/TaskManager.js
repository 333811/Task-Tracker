import CustomButton from "./CustomButton";

const TaskManager = () => {
  return (
    <div class="col-12 center">
      <div class="row">
        <div class="col-6 right">
          <CustomButton title={"Login"} classes={"right"} />
        </div>
        <div class="col-6">
          <CustomButton title={"Sign-Up"} />
        </div>
      </div>
    </div>

  )
}

export default TaskManager