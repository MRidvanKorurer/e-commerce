import "./App.css";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </MainLayout>
    </>
  );
}

export default App;
