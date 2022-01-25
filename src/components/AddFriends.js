import React from "react";

class AddFriends extends React.Component{
    state = {
        friends: []
    };

    render(){
        return(
            <div className="AddFriends">
                <h1>Friends List</h1>
            </div>
        )
    }
}

export default AddFriends;