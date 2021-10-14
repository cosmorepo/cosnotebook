import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import LandingPage from "./screens/LandingPage/LandingPage"
import { BrowserRouter, Route } from "react-router-dom"
import MyNotes from "./screens/MyNotes/MyNotes"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen"

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" exact component={LandingPage} exact />
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />

      <Route path="/mynotes" component={MyNotes} />
    </main>

    <Footer />
  </BrowserRouter>
)

export default App
