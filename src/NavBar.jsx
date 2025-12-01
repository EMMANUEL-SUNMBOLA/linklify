function NavBar() {

        return (
            <nav className="bg-red-400 fixed top-4 left-30 flex w-[80%] h-[10vh] gap-[700px] rounded-3xl place-self-center items-center">

                <div className="brand flex items-center gap-[2px]">
                    <div className="logo w-[100px]"><img src="images/linklifylogo3.png" alt=""></img></div>
                    <div className="brand-name">Linklify</div>
                </div>

                <div className="nav-menu flex items-center gap-[20px]">

                    <a href="/signup">
                        <div className="nav-item">Sign-Up</div>
                    </a>

                    <a href="/signin">
                        <div className="nav-item login">Log-In</div>
                    </a>
                    
                    
                    <div className="nav-item hamburger">
                        <i className="ri-skip-right-line"></i>
                    </div>
                </div>

            </nav>
        )
}
  
  export default NavBar;
  