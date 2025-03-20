import { useNavigate } from "react-router"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import BackButton from "../../components/BackButton"

export default function Home() {
    let navigateTo = useNavigate();

    function goToPage(page : string) {
        navigateTo(page)
    }

    return(
        <>
        <BackButton location={"/terminal_intro"}></BackButton>
        <div style={{height: "30vh"}}></div>
        <Container className="bg-info text-center w-50 rounded shadow p-3">
            <h1>Files</h1>
            <Row>
            <Col><Button onClick={() => {goToPage("/files/compressing")}}>Archiving and Compressing</Button></Col>
            <Col><Button onClick={() => {goToPage("/files/editing")}}>Making, Modifying, Deleting</Button></Col>
            <Col><Button onClick={() => {goToPage("/files/searching")}}>Searching</Button></Col>
            </Row>
        </Container>
        <p className="text-center">//I talk about the file system as an abstract// </p>
        <Image src="https://cdn.staropstech.com/starops/Blogs/File%20Systems/1.png"></Image>
        </>
        
    )
}