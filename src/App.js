import './App.css';
import Routes from './routes/routes';
import CartContextProvider from "./components/CartContext";



function App() {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  );
}

export default App;
