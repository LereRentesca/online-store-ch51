import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Catalog from './pages/catalog.jsx';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>{/* Navbar */}
      <Catalog></Catalog>{/* Catalog */}
      <Footer></Footer>{/* Footer */}
    </div>
  );
}

export default App;