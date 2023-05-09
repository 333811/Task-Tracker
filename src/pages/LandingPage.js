import Decorator from "./LandComponents/Decorator";
import ContainerRight from "./LandComponents/ContainerRight";

const LandingPage = () => {
  return (
    <div class="container-fluid background">
      <div class="row">
        <Decorator />
        <ContainerRight />
      </div>
    </div>
  )
}

export default LandingPage