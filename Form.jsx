import React from "react";



class Form extends React.Component {

    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        inputValue: ''
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    validateName = () => {
        if(this.state.firstName.length < 5){
            alert('Your first name cannot be less than 5 letters');
        }
    }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    } 

    render(){

        const {firstName, email, message, select, subscription} = this.state;

        return(
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                    />

                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    />

                <br /> 
                <textarea name="message" value={message}/>  

                <br />
                    <select name="select" value={select} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> 

                <br />
                    <label>
                        <input
                           type="checkbox"
                           name="subscription"
                           checked={subscription}
                           onChange={this.handleCheckboxChange}
                            /> Subscription
                    </label>

                <br />
                    <input type="radio" name="inputValue" value="Value 1" onChange={this.handleChange} /> Value 1
                    <input type="radio" name="inputValue" value="Value 2" onChange={this.handleChange} /> Value 2


            </div>
        )
    }
}

export default Form;