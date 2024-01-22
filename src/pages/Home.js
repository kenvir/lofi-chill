import Control from "../components/Control";
import Player from "../components/Player";

function Home() {
  return (
    <div className="flex w-full">
      <Player />
      <Control />
    </div>
  );
}

export default Home;
