import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;
