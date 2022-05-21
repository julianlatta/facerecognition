import React from 'react';
import './Signin.css';

class Signin extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         signInEmail: '',
         signInPassword: ''
      }
   }

   onEmailChange = (event) => {
      this.setState({signInEmail: event.target.value})
   }

   onPasswordChange = (event) => {
      this.setState({signInPassword: event.target.value})
   }

   onSubmitSignIn = () => {
      fetch('https://stark-castle-65270.herokuapp.com/signin', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
         })
      })
         .then(response => response.json())
         .then(user => {
            if(user.id){ // does the user exist?
              this.props.loadUser(user);
              this.props.onRouteChange('home');
            }
         })
   }

   render() {
      //const { onRouteChange } = this.props;
      return (
         <div>
            <div id="Particles"></div>
               <form>
                  <h3>Login Here</h3>

                  <label htmlFor="email-address">Username</label>
                     <input 
                        className="input-reset"
                        type="email" 
                        placeholder="Email" 
                        name="email-address"
                        id="email-address"
                        onChange={this.onEmailChange} 
                     />

                  <label htmlFor="password">Password</label>
                     <input
                        className="input-reset"
                        type="password" 
                        placeholder="Password" 
                        name="email-address"
                        id="password" 
                        onChange={this.onPasswordChange} 
                     />

                  <button
                     className="pointer input-reset"
                     onClick={this.onSubmitSignIn}
                     type="submit"
                     value="Sign in"
                     >Sign In</button>
               </form>
            </div>
      );
   }
}

export default Signin;