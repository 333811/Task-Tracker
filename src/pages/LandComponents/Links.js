import CustomButton from "../../GlobalComponents/CustomButton";

const Links = () => {
  return (
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <CustomButton title={"Continue⇝"} classes={"col-6 center"} custom={"continue"} onClick={event =>  window.location.href='/LoginSignup'}/>
        </div>
      </div>
    </div>

  )
}

export default Links