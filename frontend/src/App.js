import "./App.css"
import { useState } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import LandingPage from "./screens/LandingPage/LandingPage"
import { BrowserRouter, Route } from "react-router-dom"
import MyNotes from "./screens/MyNotes/MyNotes"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen"
import CreateNote from "./screens/CreateNote/CreateNote"
import SingleNote from "./screens/SingleNote/SingleNote"
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"

const App = () => {
  const [search, setSearch] = useState("")
  console.log(search)
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" exact component={LandingPage} exact />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/createnote" exact component={CreateNote} />
        <Route path="/note/:id" exact component={SingleNote} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
