import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import Button from "../components/Button"
import "../styles/Home.css"

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="content content-home">
            <Navbar />
        </div>
    )
}

export default Dashboard