import Quote from "./Quote";
import Heart from "./Heart";
import Links from "./Links";

const ContainerRight = () => {
  return (
    <div class="col-7 rightContainer">
      <div class="row row-1">
        <Quote />
        <Heart />
      </div>
      <hr></hr>
      <div class="row">
        <Links />
      </div>
    </div>
  )
}

export default ContainerRight