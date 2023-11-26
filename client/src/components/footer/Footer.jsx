export default function Footer() {
    return (
        <footer
            className='bg-dark text-light py-3 footer'
            style={{ marginTop: '2em' }}
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p>&copy; Nikifor Dragov 2023</p>
                    </div>
                    <div className='col-md-6 text-md-right'>
                        <a className='text-light' href='#top'>
                            Back to Top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
