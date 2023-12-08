import Form from "./Form"



function App() {
  
  return (
    <main className="flex flex-col w-[375px] md:w-[1300px] md:flex-row text-center mt-32 text-white mx-4  ">
      <div className="flex flex-col md:w-[650px] md:justify-center md:text-left pl-0">
        <h1 className="text-2xl md:text-5xl font-extrabold m-5">Learn to code by watching&nbsp;others</h1>
        <p className="m-7 md:text-lg font-medium">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className="flex-col w-full md:w-[50%] p-8">
        <div className=" banner shadow-div flex flex-col md:flex-row rounded-lg py-5 px-6 md:justify-center my-5 mx-2 ">
         <p> <a className="font-bold"> Try it free 7 days</a> then $20/mo.&nbsp;thereafter </p>
        </div>
        <div className="shadow-div bg-white p-4 my-2 mx-0 rounded-lg">
          <Form/>
          <div className="text-gray-400 text-xs px-5">
            By clicking the button, you are agreeing to our <a className="text-red-400 font-bold">Terms and Services</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
