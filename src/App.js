import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      {/*<ItemListContainer greeting={'Hola Mundo de ItemListContainer'} />*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
