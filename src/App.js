import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
