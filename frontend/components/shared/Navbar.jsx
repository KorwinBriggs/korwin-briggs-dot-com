
const Navbar = () => {
    return (
        <header id="header" class="navOpen">
            
            <nav id="navbar">
                <h2 id="navlogo">Korwin Briggs (.com)</h2>
                <ul>
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <li><a href="/">Illustrations</a></li>
                    <li><a href="/books">Books</a></li>
                    <li><a href="/blog">Doodleblog</a></li>
                    <li><a href="/about">Korwin Who?</a></li>
                    {/* <li><a href="#">Codings</a></li> */}
                </ul>
            </nav>

            <div id="navbarMailingList">
                <h4>Mailing List</h4>
                <p>(I mostly send silly poems)</p>
            </div>

            <div id="navbarLatestBlog">
                <h4>Latest doodle, poem, and/or blogpost</h4>
            </div>
            
        </header>
    )
}

export default Navbar;