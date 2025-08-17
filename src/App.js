
import { useRoutes } from 'react-router-dom';
import './App.css';
import routesi from './routes'
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
function App() {
  let rotis=useRoutes(routesi)
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
{rotis}
<Footer></Footer>
    </div>
  );
}

export default App;
