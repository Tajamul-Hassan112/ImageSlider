
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div>
      <ImageSlider url={`https://picsum.photos/v2/list`} limit={"20"} page={"1"} />
    </div>
  );
}

export default App;
