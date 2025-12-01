function Signup(){

    return(

        <div className="signup">

            <div className="signupimg">
                <img src="images/onepunchman.jpg" alt="" />
            </div>

            <div className="container">

                <div className="form-container">
                    <h1 className="form-title">Sign-Up</h1>
                    <form action="" id="signupform">
            
                        <div className="input-group">
                            <i className="ri-user-fill"></i>
                            <input type="text" name="fname" placeholder="Username" id="username" />
                            <label for="fname">Username</label>
                        </div>
            
                        <div className="input-group">
                            <i className="ri-mail-fill"></i>
                            <input type="text" name="email" placeholder="Email" id="email" />
                            <label for="email">Email</label>
                        </div>
            
                        <div className="input-group">
                            <i className="ri-key-fill"></i>
                            <input type="password" name="password" placeholder="Password" id="password" />
                            <label for="password">Password</label>
                        </div>
            
                        <div className="input-group">
                            <i className="ri-key-fill"></i>
                            <input type="password" name="password" placeholder="Confirm Password" />
                            <label for="password">Confirm Password</label>
                        </div>
            
                        <button type="submit">Continue</button>
        
                        <div className="input-group">
                            <p>Already have an account ? <a href="/signin">Signin</a></p>
                        </div>
                    </form>

                    <div className="err-div"></div>
                    
                </div>


            </div>

        
        </div>

    )

}

export default Signup;