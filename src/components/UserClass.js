import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {}
        }
        console.log(`${this.props.name} constructor`);
    }
    async componentDidMount() {
        console.log(`${this.props.name} componentDidMount`);
        const data = await fetch('https://api.github.com/users/devanshchawlaaa')
        const json = await data.json();
        console.log(json);
        this.setState({userInfo: json})
        this.timer = setInterval(() => {
            console.log('interval started');
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevState.userInfo.name is ', prevState.userInfo.name);
        console.log('this.state.userInfo.name is ', this.state.userInfo.name);
        if(prevState.userInfo.name !== this.state.userInfo.name){
            console.log('componentDidUpdate called');
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('componentWillUnmount called');
    }
    render() {
        // debugger;
        console.log(`${this.props.name} render`);
        console.log('this.state.userInfo is ', this.state.userInfo);
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className='user-card'>
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: devansh.chawlaa</h4>
            </div>
        )
    }
}

export default UserClass;