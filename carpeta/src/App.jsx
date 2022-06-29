import './App.css';
import Title from './components/Title';
import Background from './components/Background';
import Button from './components/Button';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className="App">
      <Background bg="bg1">
        <Title nombre="Pablo"/>
        <Button text="soy un boton" color="color1"/>
      </Background>
      <Background bg="bg2">
        <Title nombre="Pablo"/>
        <Button text="soy el mismo boton" color="color2"/>
      </Background>
      <ItemContainer />
    </div>
  );
}

export default App;
