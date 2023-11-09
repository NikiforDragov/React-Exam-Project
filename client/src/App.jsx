import Header from './components/Header';
import Footer from './components/Footer';
import FighterCard from './components/FighterCard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const styles = {
        backgroundImage: 'url("src/assets/cover1.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };
    return (
        <div style={styles}>
            <Header />
            <div className='container-fluid d-flex flex-column' style={{minHeight: '100vh'}}>
                <FighterCard />
            </div>
            <Footer />
        </div>
    );
}

export default App;
