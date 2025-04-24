import React, {Component} from "react";
import {Container,Navbar,Nav, NavDropdown,Image,Card,CardGroup,Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Home extends Component {

    render () {
        return (
            <>
               	<main>
                    <CardGroup>
                    <Card className="card-border">
                        <Card.Img variant="top" src="company_logo.jpeg" className="
                        card-img card-align" />                           
                            <Card.Body className="card-border">
                                <Card.Title>Vedass Infosystem LLP</Card.Title>
                                    <Card.Text className="
                                    text-align">
                                        Office address is 153a/1, Opp. Noble Hospital, Megha Centre, Hadapsar, Pune, Pune City, Maharashtra, India, 411028. 
                                    </Card.Text>
                                    <Link to='/company' className="card-btn">
                                      <Button type="submit" className="register-btn">Register</Button>
                                    </Link>
                            </Card.Body>
                    </Card>       

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="employee_logo.jpeg" className="card-img card-align" />
                            <Card.Body className="card-border">
                                <Card.Title>Employee Details</Card.Title>
                                    <Card.Text className="text-align">
                                        A company must keep accurate records of all employees to work efficiently. There are some records that employers need to keep according to labor laws. 
                                    </Card.Text>
                                    <Link to='/employee' className="card-btn">
                                        <Button type="submit" className="register-btn">Register</Button>
                                    </Link>
                            </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="department_logo.jpeg" className="card-img card-align" />
                            <Card.Body className="card-border">
                                <Card.Title>Department Details</Card.Title>
                                    <Card.Text className="text-align">
                                    Business departments are divisions within a business that specialize in offering certain services that contribute to the overall functionality of the business. 
                                    </Card.Text>
                                    <Link to='/department' className="card-btn">
                                         <Button type="submit" className="register-btn">Register</Button>
                                    </Link>    
                                </Card.Body>
                    </Card>
         
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="accountant_logo.jpeg" className="card-img card-align" />
                        <Card.Body className="card-border">
                            <Card.Title>Accountant Information</Card.Title>
                            <Card.Text className="text-align">
                            An accountant is a professional who performs accounting functions such as account analysis, auditing, or financial statement analysis. They are responsible for the management and reporting of financial data of an organization.
                            </Card.Text>
                            <Link to='/accountant' className="card-btn">
                                <Button type="submit" className="register-btn">Register</Button>
                            </Link> 
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="timesheet_logo.jpeg" className="card-img card-align"/>
                            <Card.Body className="card-border">
                                <Card.Title>Timesheet Details</Card.Title>
                                    <Card.Text className="text-align"> 
                                        A timesheet is a form that allows employees to log how much time they’ve spent working. It typically includes: 
                                        Employee name, Date, Project name, Task description,      Number of hours worked per pay period.
                                    </Card.Text>
                                    <Link to='/timesheet' className="card-btn">
                                        <Button type="submit" className="register-btn">Register</Button>
                                    </Link> 
                            </Card.Body>
                    </Card>        
                       
                    </CardGroup>
				</main>

				<div class="cust-footer card-footer text-body-secondary">
                        Copyright @2025
                </div>
            </>
        )
    }

}

export default Home;