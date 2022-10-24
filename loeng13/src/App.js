import './App.css';

function Pealkiri() {
  return (
    <h1>Pealkiri</h1>
  )
}

const Sisu = () => {
  return (
    <header className="App-header">
      <p>
        ilusti muudab ära
      </p>
      asdf
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Pealkiri />
      <Sisu />
    </div>
  );
}

export default App;
