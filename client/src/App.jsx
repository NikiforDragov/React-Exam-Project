import Header from './components/Header';
function App() {
    const styles = {
        backgroundImage: 'url("src/assets/cover1.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
    };
    return (
        <div style={styles}>
            <Header />
        </div>
    );
}

export default App;
