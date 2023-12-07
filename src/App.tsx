import Form from "./Form"

function App() {
  
  return (
    <main className="flex flex-col w-[360px] md:w-[750px] md:flex-row text-center text-white m-4">
      <div className="flex flex-col">
        <h1 className="text-2xl  font-extrabold m-5">Learn to code by watching&nbsp;others</h1>
        <p className="m-7">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className="flex-col">
        <div className=" flex flex-col md:flex-row bg-purple-400 rounded-lg py-3 px-6 my-5 mx-2 shadow-lg">
          Try it free 7 days then $20/mo.&nbsp;thereafter
        </div>
        <div className="bg-white p-4 m-2 rounded-lg">
          <Form/>
          <div className="text-gray-400 text-xs px-8">
            By clicking the button, you are agreeing to our <a className="text-red-400 font-bold">Terms and Services</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
