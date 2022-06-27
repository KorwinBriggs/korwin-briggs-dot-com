//container for whatever sits inside it

import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div id="pageContent">
            <Navbar />
            <div id="mainContent">
                {children}
            </div>
        </div>
    );
}

export default Layout;