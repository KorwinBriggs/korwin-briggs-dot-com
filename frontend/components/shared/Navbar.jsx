import Link from "next/Link";



const Navbar = () => {

    // const useScript = url => {
    //     useEffect( () => {
    //         const script = document.createElement
    //     })
    // }


    const mobileMenu = () => {
        const toggleMenu = () => {
            const navButtons = document.getElementById("navbuttons");
            navButtons.classList.toggle("menu-closed");
            navButtons.classList.toggle("menu-open");
            console.log("test");
        }

        const menuButton = document.getElementById("mobile-menu-button")
        menuButton.addEventListener("click", toggleMenu());
        
    }

    return (
        <header id="header" class="navOpen">
            <nav id="navbar">
                <h2 id="navlogo">Korwin Briggs (.com)</h2>

                <button href="javascript:void(0);" id="mobile-menu-button" onClick={mobileMenu}>
                    
                    <svg viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="10" rx="8"></rect>
                        <rect y="30" width="100" height="10" rx="8"></rect>
                        <rect y="60" width="100" height="10" rx="8"></rect>
                    </svg>

                </button>


                <ul id="navbuttons" className="menu-closed">
                    <li className="navbutton"><Link href="/">Illustrations</Link></li>
                    <li className="navbutton"><Link href="/books">Books</Link></li>
                    {/* <li className="navbutton"><Link href="/blog">Doodleblog</Link></li> */}
                    <li className="navbutton"><Link href="/about">Korwin Who?</Link></li>
                    {/* <li><a href="#">Codings</a></li> */}
                </ul>

                

            </nav>

            {/* <div id="navbarMailingList">
                <h4>Mailing List</h4>
                <p>(I mostly send silly poems)</p>
            </div>

            <div id="navbarLatestBlog">
                <h4>Latest doodle, poem, and/or blogpost</h4>
            </div> */}
            
        </header>
    )
}

export default Navbar;