import React from 'react';


export const Login = () => { 
    return (
        <div className="mt-5 d-flex align-items-center">
            <section className="container w-md-25">
                <h1 className="pb-2 text-center">LogIn</h1>
                <form className="form-container d-flex justify-content-center align-items-center">
                    <div className="form-group">
                        <label for="login"><b>Email: </b></label>
                        <input type="email" id="login" className="form-control mb-2" name="email" placeholder="Enter Email">
                        <label for="password"><b>Password:</b></label>
                        <input type="password" id="password" className="form-control mb-3" name="password" placeholder="Password">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </form>
            </section>
        </div>  
    );
}