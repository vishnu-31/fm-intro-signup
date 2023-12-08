import { useState } from "react";
import EmailValidator from "email-validator"

const Form =() => {
    const [fnErr,setFnErr] = useState<boolean>(false);
    const [lnErr,setLnErr] = useState<boolean>(false);
    const [mErr,setMErr] = useState<string>("");
    const [pErr,setPErr] = useState<boolean>(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail,setMail] = useState("");
    const [password, setPassword] = useState("");

    const validateFn =() =>{
        if(firstName == ""){
            setFnErr(true)
        }else{
            setFnErr(false)
        }
        if(lastName == ""){
            setLnErr(true)
        }else{
            setLnErr(false)
        }
        if(mail == ""){
            setMErr("empty")
        }else if(!EmailValidator.validate(mail)){
            setMErr("valid")
        }else{
            setMErr("")
        }
        if(password == ""){
            setPErr(true)
        }else{
            setPErr(false)
        }
    }

    return(
        <form className="text-md font-bold text-black mx-2 my-2">
            <div className="flex flex-col w-full">
                <div className="my-4 pr-2 flex  flex-nowrap border-2  border-gray-300 h-16 rounded-lg">
                    <input 
                            className="w-full h-full text-gray-700 rounded-lg p-3 pl-8 border-0" 
                            type={"string"}     
                            name={"firstName"} 
                            value={firstName}
                            onChange={e=>setFirstName(e.target.value)}
                            placeholder={"First Name"} formNoValidate/>
                    { fnErr && <div className="flex w-[10%] items-center"><img  src="/images/icon-error.svg" alt="Error Icon" /></div> }   
                </div>
                {fnErr && <div className="italic font-normal text-right pr-5 text-xs text-red-500 " >First Name cannot be empty</div>}
            </div> 
            <div className="flex flex-col w-full">
                <div className="my-4 pr-2 flex  flex-nowrap border-2  border-gray-300 h-16 rounded-lg">
                    <input 
                            className="w-full h-full text-gray-700 rounded-lg p-3 pl-8 border-0" 
                            type={"string"}     
                            name={"lastName"} 
                            value={lastName}
                            onChange={e=>setLastName(e.target.value)}
                            placeholder={"Last Name"} formNoValidate/>
                    {lnErr && <div className=" flex w-[10%] items-center"><img  src="/images/icon-error.svg" alt="Error Icon" /></div>    }
                </div>
                {lnErr &&  <div className="italic font-normal text-right pr-5 text-xs text-red-500 " >Last Name cannot be empty</div>}
            </div> 
            <div className="flex flex-col w-full">
                <div className="my-4 pr-2 flex  flex-nowrap border-2  border-gray-300 h-16 rounded-lg">
                    <input 
                            className="w-full h-full text-gray-700 rounded-lg p-3 pl-8 border-0 focus:border-0" 
                            type={"email"}     
                            name={"mail"} 
                            value={mail}
                            onChange={e=>setMail(e.target.value)}
                            placeholder={"Email Address"} formNoValidate/>
                    {(mErr != "") && <div className=" flex w-[10%] items-center"><img  src="/images/icon-error.svg" alt="Error Icon" /></div>    }
                </div>
                {(mErr == "empty") &&  <div className="italic font-normal text-right pr-5  text-xs text-red-500 " >Email Address cannot be Empty</div>}
                {(mErr == "valid") &&  <div className="italic font-normal text-right pr-5  text-xs text-red-500 " >Looks like this is not an Email</div>}
            </div> 
            <div className="flex flex-col w-full">
                <div className="my-4 pr-2 flex  flex-nowrap border-2  border-gray-300 h-16 rounded-lg">
                    <input 
                            className="w-full h-full text-gray-700 rounded-lg p-3 pl-8 border-0" 
                            type={"password"}     
                            name={"password"} 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            placeholder={"Password"} formNoValidate/>
                    {pErr && <div className=" flex w-[10%] items-center"><img  src="/images/icon-error.svg" alt="Error Icon" /></div>    }
                </div>
                {pErr &&  <div className="italic font-normal text-right pr-5 text-xs text-red-500 " >Password cannot be empty</div>}
            </div>            

            <button className="form-button uppercase text-md text-white h-14 my-2 rounded-lg bg-green-500 p-3 w-full" 
                    type="button"
                    onClick={validateFn}>Claim your free trail</button>
        
        </form>
    );
}



export default Form;