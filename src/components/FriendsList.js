import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        // get friends
        axiosWithAuth()
            .get('/friends')
            .then(resp => {
                this.setState({
                    friends: resp.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <h1>FRIENDS LIST</h1>
                <div className='friends-container'>
                {
                    this.state.friends.map(friend => {
                        return(
                        <div>
                            <h3>📎 {friend.name}</h3>
                            <p>- - - - - -> {friend.email}</p>
                        </div>)
                    })
                }
                </div>
            </div>
        )
    }
}

export default FriendsList;