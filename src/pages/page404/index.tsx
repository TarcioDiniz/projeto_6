import {Player} from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation_page_404.json"

const Page404 = () => {
  return (
    <Player
      autoplay
      loop
      src={animation}
      style={{ height: '50%' }}
    >
    </Player>
  );
}

export default Page404;