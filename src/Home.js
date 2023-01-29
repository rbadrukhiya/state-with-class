import React from "react"
class Home extends React.Component {
    state = {
        name: 'ravi',
        email: 'raci@gmail.com',
    }
        constructor() {
        super();
        // alert();
    }    
    render() {
        return (
            <>
                <h1>hello</h1>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.props.id}</p>


            </>
        )
    }
}
export default Home