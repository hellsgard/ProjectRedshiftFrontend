const Login = () => {
    return ( 
        <div>
            <h1> This is the redshift logo</h1>
        <h2>
         The redshift login page
        </h2>
        <form> 
        <label for="username">username</label>
        <input type="text" id="username" name="username"/>
        <label for="password">password</label>
        <input type="password" id="password" name="password"/> 
        <button type="submit" >Login</button>
        <button >Reset</button>
        </form>
        </div>
     );
}
 
export default Login;