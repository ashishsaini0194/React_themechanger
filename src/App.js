import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { darktheme, lighttheme } from "./redux_store/themes/theme_action"
import { useEffect, useRef } from "react"

function App() {
  var dispatch = useDispatch()
  var current_theme = useSelector(state => state.theme)
  var prevtheme = useRef("dark");

  var switching = () => {
    if (current_theme == "dark") {
      prevtheme.current = "dark"
      dispatch(lighttheme())
    } else {
      prevtheme.current = "light"
      dispatch(darktheme())
    }
  }

  useEffect(() => { // component will mount + component did update
    console.log(1);

    if (current_theme == "light") {
      document.body.style.backgroundColor = "white"
    } else {
      document.body.style.backgroundColor = "pink"
    }
  }, [current_theme])


  return (
    <div className="App">
      <button onClick={() => switching()} >switch to {prevtheme.current}</button>
    </div>
  );
}

export default App;
