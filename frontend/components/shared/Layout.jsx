//container for whatever sits inside it

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <main id="page-content">
            <Navbar />
            <main id="main-content">
                {children}
            </main>
            <Footer />
        </main>
    );
}

export default Layout;