import { Provider } from "react-redux"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import store from "./redux/store"
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Main />
      </div>
    </Provider>
  )
}

export default App
