import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";

function App() {
  return (
    <>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
