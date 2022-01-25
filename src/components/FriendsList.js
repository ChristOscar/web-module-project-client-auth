import React from "react";

class FriendsList extends React.Component{
    state = {
        friends: []
    };

    render(){
        return(
            <div className="FriendsList">
                <h1>Friends List</h1>
            </div>
        )
    }
}

export default FriendsList;