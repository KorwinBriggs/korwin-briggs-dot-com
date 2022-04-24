//container for whatever sits inside it

import Navbar from './shared/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <p>dis main area start</p>
            {children}
        </div>
    );
}

export default Layout;