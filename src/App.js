
import './App.css';
import Header from './semantic/Header';
import Footer from './semantic/Footer';
function App() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <main>
        <p>This is main tag</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
