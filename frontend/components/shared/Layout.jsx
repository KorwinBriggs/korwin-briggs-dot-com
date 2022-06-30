//container for whatever sits inside it

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div id="pageContent">
            <Navbar />
            <div id="mainContent">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;