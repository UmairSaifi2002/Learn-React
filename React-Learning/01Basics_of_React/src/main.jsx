import { React, StrictMode } from 'react'
import { ReactDOM, createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

// ye create ellement h jo ki hame batata h ki react jsx to kaise convert krta h
// aur kis format m krta h
// React use krta h createElement ko
const reactElement = React.createElement(
  'a', // tag
  {href: 'https://google.com',target: '_blank' }, // attributes
  'click me to visit google', // y children means k jo hame text inject krna h apny html m
  anotherElement // last evaluated Expression
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement

)