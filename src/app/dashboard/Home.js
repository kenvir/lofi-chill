import Control from "../../components/Control";
import Player from "../../components/Player";

function Home() {
  return (
    <div className="flex w-full" id="Home">
      <Player />
      <Control />
    </div>
  );
}

export default Home;
