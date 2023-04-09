import Decorator from "./Decorator";
import ContainerRight from "./ContainerRight";

const Page = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <Decorator />
        <ContainerRight />
      </div>
    </div>
  )
}

export default Page