import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation:React.FC=()=>{
    return(
      <>
      <div className="app-container">
        <Navbar expand="lg" className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="/"><b>Home</b></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/listTodo"><b>ToDo List</b></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      </div>
      </>
    )
}

export default Navigation;