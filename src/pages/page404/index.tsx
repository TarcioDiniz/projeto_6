import styles from "./page404.module.scss"
import {Player} from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation_page_404.json"

const Page404 = () => {
  return (
    <div className={styles.content}>
      <Player
        autoplay
        loop
        src={animation}
        style={{ height: '50%' }}
      >
      </Player>
    </div>
  );
}

export default Page404;