import React, {Component} from 'react';
import logo from './../static/logo.png';

class Post extends Component {
    render() {
        const { postData } = this.props
        return (
            <div className="postDiv">
                <div className='icon'>
                    <img src={logo} height='30px' />
                </div>

                <div className='content'>
                    <p> {postData.description} </p>
                    <h3> {postData.heading} </h3>    
                </div>
            </div>
        )
    }
}

export default Post;