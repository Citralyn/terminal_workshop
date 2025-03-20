import { useNavigate } from "react-router"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Home() {
    let navigateTo = useNavigate();

    function goToPage(page : string) {
        navigateTo(page)
    }

    return(
        <>
        <div style={{height: "30vh"}}></div>
        <Container className="bg-info text-center w-50 rounded shadow p-3">
            <h1>Miscellaneous</h1>
            <Row>
            <Col><Button onClick={() => {goToPage("/misc/packages")}}>Package Management</Button></Col>
            <Col><Button onClick={() => {goToPage("/misc/commands")}}>Various Other Useful Commands</Button></Col>
            <Col><Button onClick={() => {goToPage("/misc/services")}}>Common Services</Button></Col>
            </Row>
        </Container>
        <p className="text-center">//Here I talk about any other things I didn't cover,
            like common services, package management, or useful commands like exit, alias, or time// </p>
        
        </>
        
    )
}