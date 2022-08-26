import React, {useState} from 'react';
export default function Login(){
    const [isLogin, setLogin] = useState(true)
    return (
        <div className="form-container-parent">
            <div className="form-container">
                <form>
                    <div className="form-header">
                        <h2 className={isLogin?'active':null} onClick={()=> {
                                    setLogin(true)
                                }
                            }>LOGIN</h2>
                        <h2 className={isLogin?null:'active'} onClick={()=> {
                                setLogin(false)
                            }
                            }>REGISTER</h2>
                    </div>
                    {isLogin?renderLogin():renderRegister()}
                    {isLogin?renderFooter():<></>}
                </form>
            </div>
        </div>
    )
}

function renderLogin(){
    return (
        <>
            <div key={Math.random() * 1000} className="input-container">        {/*i have no idea why i did this ah yes it forces the component to be re-rendered by destorying it first*/}
                <input type="email" placeholder="Email" id="email" />
            </div>
            <div className="input-container">
                <input type="password" placeholder="Password" id="password" />
            </div>
            <div className="button-container">
                <button className="btn" type="submit">Login</button>
            </div>
        </>
    )
}
function renderRegister(){
    return (
        <>
            <div className="input-container">
                <input type="text" placeholder="Username" id="username" />
            </div>
            <div className="input-container">
                <input type="email" placeholder="Email" id="email" />
            </div>
            <div className="input-container">
                <input type="password" placeholder="Password" id="password" />
            </div>
            <div className="input-container">
                <input type="password" placeholder="Re-enter Password" id="confirmpassword" />
            </div>
            <div className="button-container">
                <button className="btn" type="submit">Register</button>
            </div>
        </>
    )  
}

function renderFooter(){
    return (
        <div className="form-footer">
            <a className="primary" href="google.com">Forgot your password?</a>
        </div>
    )
}