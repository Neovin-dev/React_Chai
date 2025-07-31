import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react" 
// // this is the jsx import that is used to convert JSX to ReactElement, it is not used in the code but it is used by babel to convert JSX to ReactElement. best way to understand this is that JSX is a syntax extension for JavaScript that looks similar to HTML, but it is not HTML. It is a way to write React elements in a more readable way. Babel is used to convert JSX to ReactElement, which is a plain object that describes what the UI should look like.
// dig deeper in the react source code to understand how it works, it is a very simple code that converts JSX to ReactElement.
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
        // this gets parsed like our ReactElement
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } to run this we need to write our own render method that will follow the rules of our code.

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

// this methods works because babel is use to inject this into the render part of the react to do that we use the keyword 
const reactElement = React.createElement(
    // this is according to Reacts rules of creating a ReactElement
    // React element is a plain object that describes what the UI should look like. 
    // tag, object with props, and children this is how we create a ReactElement
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser // this is not a valid ReactElement, it is just a JSX element. this is how {} works in JSX, it allows us to embed JavaScript expressions into JSX. it lets us inject variables or expressions into JSX. we cannot use if else as simpley we dont do this things in an object, we use ternary operator or logical operators to conditionally render elements in JSX. 
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
//   <MyApp />,
  reactElement // we arent using it as <> because it is not a valid ReactElement, it is just a JSX element. This is working because ReactDOM.createRoot is expecting a ReactElement, not a JSX element.
  // this will not run in the browser and the reason is simple because the element is defined by us and the render method where we are trying to input is not written by us so it doesnt follow ths structure or the syntax of our code. so either we can follow the rules of render method or we can write our own render method that will follow the rules of our code.

//   <App /> // can be written as App() be we wont use that as it can be problmatic for other developers + optimization. 
  
)// we can do all this but react has already done this for us so we will use the ReactDOM.render method to render our ReactElement to the DOM.

