import { useEffect } from "react"
import { Container, Row, Button } from "react-bootstrap"
import "./LandingPage.css"

const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo")
  //   if (userInfo) {
  //     history.push("/mynotes")
  //   }
  // }, [history])

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">welcome to CosNoteBook</h1>
              <p className="subtitle">one safe place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
