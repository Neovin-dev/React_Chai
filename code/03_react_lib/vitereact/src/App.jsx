import Chai from "./chai.jsx"


function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    {/* this is a fragment, it is used to group multiple elements without adding an extra node to the DOM
    {} is called expression and is used to embed JavaScript expressions into JSX */}
    {/* there is a way to use {} inside JSX we cannot write if statements directly we need to use ternary operator and here we mostly only write to understand this better we will try to implement it in the main.jsx*/}
    <p>test para</p>
   </>
  )
}

export default App