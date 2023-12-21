import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Card from './card/pages/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Card/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
