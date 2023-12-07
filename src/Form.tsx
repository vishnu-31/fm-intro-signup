

const Form =() => {
    return(
        <form className="text-md mx-2 my-4">
            <input 
                className="w-full h-16 my-2 border-2 rounded p-3" 
                type="text"     
                name="firstname" 
                placeholder="First Name"/>
            <input 
                className="w-full h-16 my-2 border-2 rounded p-3" 
                type="text"     
                name="lastname"  
                placeholder="Last Name"/>
            <input 
                className="w-full h-16 my-2 border-2 rounded p-3" 
                type="email"    
                name="mail"      
                placeholder="Email address"/>
            <input 
                className="w-full h-16 my-2 border-2 rounded p-3" 
                type="password" 
                name="password"  
                placeholder="Password"/>
            <button className=" my-2 rounded-lg bg-green-500 p-3 w-full" type="button">Claim your free trail</button>
        </form>
    );
}



export default Form;