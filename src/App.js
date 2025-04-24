import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Company from './component/Company';
import Department from './component/Department';
import Employee from './component/Employee';
import TimeSheet from './component/TimeSheet';
import Accountant from './component/Accountant';
import Home from './component/Home';
import {Container,Navbar,Nav, NavDropdown,Image, Form,Row , Col, Button} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import EditCompanyData from './component/EditCompanyData';

function App() {
  return (
      <div className="cust-main-div">
        <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary cust-navbar">       
          <Container>
            <Navbar.Brand href="#home">HRMS</Navbar.Brand>
            <img src='hrms_icon.jpeg' className='img-icon'/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/company">Company</Nav.Link>
                <Nav.Link href="/employee">Employee</Nav.Link>
                <Nav.Link href="/department">Department</Nav.Link>
                <Nav.Link href="/accountant">Accountant</Nav.Link>
                <Nav.Link href="/timesheet">TimeSheet</Nav.Link> 
              </Nav>
            </Navbar.Collapse>

            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>

          </Container>
    		</Navbar>
        <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/company" element={<Company/>} />
              <Route path="/accountant" element={<Accountant/>} />
              <Route path="/employee" element={<Employee/>} />
              <Route path="/department" element={<Department/>} />
              <Route path="/timesheet" element={<TimeSheet/>} />
              <Route path="/editcompanydata" element={<EditCompanyData/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
