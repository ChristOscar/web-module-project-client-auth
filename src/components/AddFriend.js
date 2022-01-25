import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
    state={
        id: 0,
        name: '',
        age: 0,
        email: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const newFriend = {
            id: Date.now(),
            name: this.state.name,
            age: 22,
            email: this.state.email
        }
        axiosWithAuth().post('/friends', {headers:{authorization: token}}, newFriend)
            .then(resp => {
                console.log(resp.data);
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return(
            <div>
                <h1>ADD FRIEND</h1>
                <form onSubmit={this.submit}>
                    <label className='input-container'><p>FRIEND NAME</p>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    /></label>
                    <label className='input-container'><p>FRIEND EMAIL</p>
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    /></label>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;
