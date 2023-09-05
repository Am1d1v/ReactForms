import React from "react";




class FormWithRef extends React.Component {
    constructor(){
        super();
        this.state = {
            card: '',
            email: ''
        }
        this.NumberRef = React.createRef();
        this.EmailRef = React.createRef();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value},() => {
            if(this.state.card.length === 16){
                this.EmailRef.current.focus();
            }
        });
    }


    componentDidMount(){
        console.log(this.NumberRef)
        this.NumberRef.current.focus()
    }
    

    render(){

        const {card} = this.state;

        return(
            <div>
                <input name="card" value={card} type="text" ref={this.NumberRef} placeholder="Your Card Numbers" onChange={this.handleChange}/>
                <input type="email"  ref={this.EmailRef} placeholder="Email" />
            </div>
        )
    }
}

export default FormWithRef;