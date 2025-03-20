import { useNavigate } from "react-router"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

export default function Home() {
    let navigateTo = useNavigate();

    function goToTerminalIntro() {
        navigateTo("/terminal_intro")
    }
    return(
        <>
        <div style={{height: "30vh"}}></div>
        <Container className="bg-info text-center w-50 rounded shadow p-3">
            <h1>A Newbie's Guide to the Terminal</h1>
            <Button onClick={goToTerminalIntro}>What is the Terminal?</Button>
        </Container>
        <p className="text-center">//Here I introduce my workshop, explain
            that it's going to be half lecture, 
            and half you get to decide what you want to learn// </p>
        
        </>
        
    )
}