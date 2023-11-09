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
        <>
            <Header />
            <div className='container-fluid d-flex flex-column' style={styles}>
                <FighterCard />
            </div>
            <Footer />
        </>
    );
}

export default App;
