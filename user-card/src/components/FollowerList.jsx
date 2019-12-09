import React from 'react'

class FollowerList extends React.Component{
render(){
    console.log(this.props.followers)
    return (
        <div className="follower-list">
            {this.props.followers.map(el=>{
                return (
                    <div key={el.id} className="follower">
                        {el.login}
                    </div>
                )
            })}
        </div>
    )
}
}

export default FollowerList