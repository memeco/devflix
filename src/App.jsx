import "./App.css";

function App() {
  const Hello = () => {
    alert("Hello");
  };

  return (
    <>
      <h1 className="title">DevFlix - Seus filmes online!</h1>
      <p className="text">Aqui você encontra filmes da API:</p>
      <button onClick={Hello}>Saiba Mais</button>
    </>
  );
}

export default App;
