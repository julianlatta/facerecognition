import React from 'react';

class Register extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        name: ''
      }
   }
   
   onNameChange = (event) => {
      this.setState({name: event.target.value})
   }

   onEmailChange = (event) => {
      this.setState({email: event.target.value})
   }

   onPasswordChange = (event) => {
      this.setState({password: event.target.value})
   }

   onSubmitSignIn = () => {
      fetch('https://stark-castle-65270.herokuapp.com/register', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
         })
      })
         .then(response => response.json())
         .then(user => {
            if (user.id) {
               this.props.loadUser(user)
               this.props.onRouteChange('home');
            }
         })
   }

   render() {
      return (
         <div>
            <div id="Particles"></div>
               <form>
                  <h3>Register</h3>

                  <label htmlFor="Name">Name</label>
                     <input 
                        className="input-reset"
                        type="text" 
                        placeholder="John Doe" 
                        name="name"
                        id="name"
                        onChange={this.onNameChange} 
                     />

                  <label htmlFor="email-address">Email</label>
                     <input
                        className="input-reset"
                        type="email" 
                        placeholder="john@doe.com" 
                        name="email-address"
                        id="email-address" 
                        onChange={this.onEmailChange} 
                     />
                  
                  <label htmlFor="password">Password</label>
                     <input
                        className="input-reset"
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        id="password" 
                        onChange={this.onPasswordChange} 
                     />

                  <button
                     className="pointer input-reset"
                     onClick={this.onSubmitSignIn}
                     type="submit"
                     value="Register"
                     >Submit</button>
               </form>
            </div>
      );
   }
}
  

export default Register;