import { createStore } from "redux";
import theme_reducer from "./themes/theme_reducer";

var store1 = createStore(theme_reducer)

export default store1;