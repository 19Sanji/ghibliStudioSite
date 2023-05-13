import HowlParallax from "./components/HowlParallax";
import Menu from "./components/Menu";
import AboutStudio from "./components/AboutStudio";
import AboutHM from "./components/AboutHM";
import Movies from "./components/Movies";

function App() {
  return (
    <div>
      <Menu />
      <HowlParallax />
      <AboutStudio />
      <AboutHM />
      {/* Добавить карусель фильмов, при наведении на фильм, его карточка увеличивается
      При нажатии появляется новое поле с информацией о фильме, трейлером */}
      <Movies />
    </div>
  );
}

export default App;
