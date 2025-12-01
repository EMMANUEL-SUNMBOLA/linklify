function Signin(){

    return(

        <div className="signup">
            <div className="signupimg">
                <img src="images/onepunchman.jpg" alt=""  />
            </div>

            <div className="container">

                <div className="form-container justify-items-center">
        
                    <h1 className="form-title">Log-In</h1>
                    <form action="" id="signinform" >
            
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
            
                        <button type="submit">Log-in</button>
        
                        <div className="input-group">
                            <p>Don't have an account ? <a href="/signup">Signup</a></p>
                        </div>
                    </form>
        
                    <div className="err-div"></div>

                </div>

            </div>
        </div>

    )

}

export default Signin;