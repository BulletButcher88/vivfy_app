import React from "react";
import "./login.css";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  loginError: ""
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.id]: e.target.value
    });

    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";


    if(!this.state.password) {
      passwordError = "* forgot to enter in your password";
    } 

    if (!this.state.email.includes("@") || !this.state.email) {
      emailError = "* invalid email";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  };

  handleClick = async e => {
    const { authCall } = this.props;
    e.preventDefault();
    const response = await authCall({
      email: this.state.email,
      password: this.state.password
    });
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
    if (response) {
      localStorage.setItem('token', response)
      window.location = "/";
    } else {
      this.setState({
        loginError: "Invalid credentials"
      });
    }
  };

  render() {
    return (
      <div className="login-form">
        <h1 className="login-logo">VIVIFY</h1>
        <div className="login-error">
          <h3>{this.state.loginError}</h3>
        </div>
        <form className="inner-form-login">
          <p>
            <label>Email</label>
            <br />
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              id="email"
            />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              id="password"
            />
          </p>
          <div className="btn-login" onClick={this.handleClick}>
            <p className="btn-text">Log In</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
