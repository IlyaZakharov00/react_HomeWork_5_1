import './App.css'
import { Card } from './components/Card/Card'

function App() {
  const title = 'WANTED'
  const text = 'A reward of 1,000,000 has been assigned;.'
  const src = 'https://ih1.redbubble.net/image.1545962059.4327/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
  const info = {title:title, text: text, src: src}
  return (
    <>
    <Card info = {info}> 
        <img src = {src} className = "card-img-top" alt = "Какая - то картинка :)"></img>
    </Card> 
    </>
  )
}

export default App
