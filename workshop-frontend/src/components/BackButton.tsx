import { useNavigate } from "react-router"
import Button from "react-bootstrap/Button"

export default function BackButton({location} : {location : string}) {
    let navigateTo = useNavigate();


    function goBack(page : string) {
        navigateTo(page)
    }

    return(
        <Button variant="outline-secondary" className="m-3" onClick={() => {goBack(location)}}>Back</Button>
    )
}