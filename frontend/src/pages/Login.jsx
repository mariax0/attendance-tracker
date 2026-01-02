import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Button from "../components/Button"
import InputField from "../components/InputField"
import RoleTab from "../components/RoleTab"
import styles from "../styles/Login.module.css"
import Logo from "../components/Logo"
import { UserContext } from '../context/UserContext'

function Login() {
    const navigate = useNavigate();
    const { role, setRole } = useContext(UserContext);

    const handleLogin = () => {
        if (role === "participant") {
            navigate("/home");
        } else if (role === "host") {
            navigate("/dashboard");
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.signIn}>
                <div className={styles.headline}>
                    <Logo />
                    <div className={styles.heading}>
                        <h1>Sign in to your account</h1>
                        <p className="grey-text">Enter your role, email and password to log in</p>
                    </div>
                </div>
                <div>
                    <RoleTab selectedRole={role} onChangeRole={setRole}></RoleTab>
                </div>
                <div className={styles.inputs}>
                    <InputField label="Email" type="email" placeholder="example@gmail.com"/>
                    <InputField label="Password" type="password" placeholder="******"/>
                    <Button text="Log in" onClick={handleLogin}></Button>
                </div>
            </div>
            <div id="sign-up">
                <p className="grey-text">Don't have an account?{" "}<Link to="/signup" className="info">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login