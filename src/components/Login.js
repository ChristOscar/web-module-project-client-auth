import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials);

        //1. make an axios post call to localhost:5001/api/login. Make sure that we pass in our credentials.
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        //2. if the call is successful, save the token returned to localStorage
        .then(resp =>{
            console.log(resp);
            localStorage.setItem("token", resp.data.token);
            localStorage.setItem("role", resp.data.role);
            localStorage.setItem("username", resp.data.username);
            this.props.history.push('/friends');
        })
        //3. if the call fails console.log the error.
        .catch(err=> {
            console.log(err);
        });
    }

    render() {
        return (
            
            <div className='LoginPass'>
                <h1>LOGIN</h1>
                <form onSubmit={this.login}>
                    <label>USERNAME: 
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    /></label>
                    <label>PASSWORD: 
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    /></label>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default Login;