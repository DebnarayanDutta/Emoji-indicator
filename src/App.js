import React, {useState} from "react"
import './App.css';

const emojiDictionary = {
  "ð": "Grinning Face",
  "ð":"Face with Tears of Joy",
  "ð¥°":"Smiling Face With Hearts",
  "ð":"Upside Down Face",
  "ð":"Face With Tongue",
  "ð":"Beaming Face with Smiling Eyes",
  "ð¿":"Angry Face with Horns",
  "ð·":"Construction Worker",
  "ð§":"Woman with Headscarf",
  "ð°":"Anxious Face with Sweat",
}

const emojiarray = Object.keys(emojiDictionary)

function App() {
const [text,setText] = useState("")

function emojiinput(event){
const emojivalue = emojiDictionary[event.target.value]
if(emojivalue === undefined){
  setText("Emoji not in dictionary")
}else{
  setText(emojivalue)
}

}

function emojibutton(emoji){
  const emojivalue = emojiDictionary[emoji]
  setText(emojivalue)
}

  return (
    <div className="App">
      <h1 className="emoji">ð¤ªEmoji Indicator</h1>
      <input className="input" onChange={emojiinput}/>
      <div>
        {emojiarray.map ((emoji)=>{
          return <button className="button" key={emoji} onClick={() => 
          emojibutton(emoji)}>{emoji}</button>
        })}
      </div>
    
    <h2 className="text">{text}</h2>

    
    </div>
  );

}

export default App;




