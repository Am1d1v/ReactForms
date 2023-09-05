import React from "react";



class Subscription extends React.Component {

    state = {
        email: '',
        isAgreed: false
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleCheckbox = (event) => {
        this.setState({
            isAgreed: event.target.checked
        })
    }

    handleSubmit = () => {
        const isEmail = this.state.email;
        const isCheckbox = this.state.isAgreed;

         if (!isEmail) {
            alert('Your email is not valid')
         }

        if (!isCheckbox) {
            alert('Agree with terms')
        }

        if(isEmail && isCheckbox) {
            alert('Subscribed');
        }
    }

    render(){
        const {email, isAgreed} = this.state;

        return(
            <div>
                <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleEmail}
                 />

                <br />
                <input 
                    type="checkbox" 
                    name="" 
                    checked={isAgreed}
                    onChange={this.handleCheckbox}
                     /> I Agree With Terms

                <br />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }
}

export default Subscription;