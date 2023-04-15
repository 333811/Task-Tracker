import CustomButton from "../../GlobalComponents/CustomButton";

const Links = () => {
  return (
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <CustomButton title={"Continue⇝"} classes={"col-6 center"} custom={"continue"} link={"/Login"}/>
        </div>
      </div>
    </div>

  )
}

export default Links