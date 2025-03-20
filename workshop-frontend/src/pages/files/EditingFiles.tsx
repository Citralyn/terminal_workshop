import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import BackButton from "../../components/BackButton"

export default function Home() {
  
    return(
        <>
        <BackButton location={"/files"}></BackButton>
        <div style={{height: "30vh"}}></div>
        <Container className="bg-info text-center w-50 rounded shadow p-3">
            <h1>Editing Files</h1>
        </Container>

        <p className="text-center">//Here I demo making a file, 
            editing the file with vim and nano,
            and also redirecting content into the file or echoing it. I'll talk about 
            moving, copying, and removing files too. And demo it. // </p>
        <Image src="EditingFiles.png"></Image>
        <Image src="CopyMoveFiles.png"></Image>
        <Image src="RemovingFiles.png"></Image>
        </>
        
        
    )
}