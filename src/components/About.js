import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log('parent constructor');
    }
    componentDidMount() {
        console.log('parent componentDidMount');
    }
    render(){
        console.log('parent render');
        return(
            <div>
                <h1>This is about class coponent</h1>
                {/* <User /> */}
                <UserClass name="Child1" location="Lucknow" />
                {/* <UserClass name="Child2" location="Agra" />
                <UserClass name="Child3" location="Delhi" /> */}
            </div>
        )
    }
}
// const About = () => {
//     return(
//         <div>
//             <h1>This is about page</h1>
//             <UserClass name="Dev" location="Lucknow" />
//         </div>
//     )
// }

export default About;