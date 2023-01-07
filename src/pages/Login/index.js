import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Login.css';
import {useStateValue} from '../../services/StateProvider';
import Sidebar from '../../components/Sidebar';
import LoginServices from '../../services/authentificationServices';

const Login = () => {
    const [{isSidebarOpen}, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (evt) => {
        LoginServices.login({
            email,
            password,
        }).then((response) => {
            if (response.status === 200) {
                localStorage.setItem('token', response?.data?.token);
                localStorage.setItem('role', response?.data?.user?.role);
                if (response?.data?.user?.role === 'admin') {
                    history.replace('/admin/affiliation/clubs/affiliated');
                } else if (response?.data?.user?.role === 'club') {
                    history.replace('/admin/affiliation/athlete/affiliated');
                }
            } else {
                console.log('error', response);
            }
        }).catch((error) => {
            console.log(error);
        });
        evt.preventDefault();
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggle={() => dispatch({type: 'TOGGLE_SIDEBAR'})}/>
            <Navbar toggle={() => dispatch({type: 'TOGGLE_SIDEBAR'})}/>
            <section className="container registration">
                <h2>Se Connecter</h2>
                <p style={{marginBottom:30}}>
                    Veuillez vous connecter 
                </p>
                <form className="registration__form" onSubmit={handleSubmit}>
                    <input
                        required
                        style={{width:"100%"}}
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Votre email"
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <input
                        required
                        style={{width:"100%"}}
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Votre mot de passe"
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <button className="btn primary">Se connecter</button>
                    <button
                        className="btn secondary"
                        onClick={() => history.push('/register')}
                    >
                        Inscriver-vous
                    </button>
                </form>
            </section>
            <Footer/>
        </>
    );
}

export default Login;
