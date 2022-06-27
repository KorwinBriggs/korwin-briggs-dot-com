
const Navbar = () => {
    return (
        <header id="navbar" class="navOpen">
            
            <p>dis navigation buttons beep boop</p>
            <ul>
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <li><a href="/">Illustrations</a></li>
                <li><a href="#">Doodles and Poems</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Codings</a></li>
            </ul>

            <div>
                <p>this will be a mailing list sign-up</p>
            </div>
            
        </header>
    )
}

export default Navbar;