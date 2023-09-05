import React from "react";




class UncontrolledForm extends React.Component {
    constructor(){
        super();
        this.state = {
            card: '',
            email: ''
        }
        this.CardRef = React.createRef();
        this.EmailRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.CardRef.current.value.length < 16){
            alert('Invalid card number')
        }
        return
    }
    
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <input name="card" type="text" ref={this.CardRef} />
                <input name="email" type="email" ref={this.EmailRef} />
                <button>Submit</button>
            </form>
        )
    }
}

export default UncontrolledForm;