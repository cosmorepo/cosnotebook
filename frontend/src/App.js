import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import LandingPage from "./screens/LandingPage/LandingPage"
import { BrowserRouter, Route } from "react-router-dom"
import MyNotes from "./screens/MyNotes/MyNotes"

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" exact component={LandingPage} />
      <Route path="/mynotes" component={MyNotes} />
    </main>

    <Footer />
  </BrowserRouter>
)

export default App
