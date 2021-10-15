import { Link, useHistory } from "react-router-dom"
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Brand,
} from "react-bootstrap"

const Header = () => {
  const history = useHistory()

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">CosNoteBook</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="john Smith" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo")
                  history.push("/")
                }}
              >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
