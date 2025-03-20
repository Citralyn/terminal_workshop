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
        <Container className="bg-info text-center w-75 rounded shadow p-3">
            <h1>The Terminal: How you talk to your OS!</h1>
            <Row>
            <Col><Button onClick={() => {goToPage("/networks")}}>Networks</Button></Col>
            <Col><Button onClick={() => {goToPage("/users")}}>Users</Button></Col>
            <Col><Button onClick={() => {goToPage("/scripting")}}>Scripting</Button></Col>
            <Col><Button onClick={() => {goToPage("/misc")}}>Miscellaneous</Button></Col>
            <Col><Button onClick={() => {goToPage("/system")}}>System Information</Button></Col>
            <Col><Button onClick={() => {goToPage("/files")}}>The File System</Button></Col>
            </Row>
        </Container>
        <p className="text-center">//Here I talk about how the terminal
            is the user's gateway to the OS, and I also differentiate the terminal
            from the CLI and the shell. I talk about
            different shells in various OSs *zsh, bash, powershell...*,
            specifying that I'm primarily focusing on 
            Bash and Ubuntu// </p>
        
        </>
        
    )
}