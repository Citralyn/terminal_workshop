import { Outlet, useNavigate } from "react-router"

export default function Layout() {
    let navigateTo = useNavigate();

    function goToAbout() {
        navigateTo("/about")
    }

    return(
        <>
        <button onClick={goToAbout}></button>
        <Outlet></Outlet>
        </>
    )
}
