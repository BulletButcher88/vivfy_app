import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  password: "",
  role: "Sales",
  phone: "",
  email: "",
  nameError: "",
  passwordError: "",
  roleError: "",
  phoneError: "",
  emailError: ""
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({ [e.target.id]: e.target.value });
    this.setState({
      [e.target.id]: isCheckbox ? e.target.checked : e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";
    let roleError = "";
    let phoneError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "* name required";
    }
    if (!this.state.password) {
      passwordError = "* password required";
    }
    if (!this.state.role) {
      roleError = "* type of role required";
    }
    if (!this.state.phone) {
      phoneError = "* phone number required";
    }
    if (!this.state.email) {
      emailError = "* email required";
    }

    if (nameError || passwordError || roleError || phoneError || emailError) {
      this.setState({
        nameError,
        passwordError,
        roleError,
        phoneError,
        emailError
      });
      return false;
    }
    return true;
  };

  toLogin = e => {
    window.location = "/login";
  };

  handleClick = async e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const { email, password, role, name, phone } = this.state;
      const res = await this.props.authCall({
        email,
        password,
        role,
        name,
        phone
      });
      if (res) {
        this.setState({
          loginError: "Successfully created user, redirecting to dashboard"
        })
        setTimeout(() => {
          window.location = "/"
        }, 2000)
      } else {
        this.setState({
          loginError: "There was a problem signing you up"
        });
      }
    }
  };

  render() {
    return (
      <div className="container-register">
        <div className="register">
          <h1>Sign Up User</h1>
          <h3>{this.state.loginError}</h3>
          <form className="register-form">
            <p>
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </p>
            <div className="validation-prompt">{this.state.nameError}</div>

            <p>
              <label htmlFor="email">E-mail</label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="Use this to log in"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </p>
            <div className="validation-prompt">{this.state.emailError}</div>

            <p>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </p>
            <div className="validation-prompt">{this.state.passwordError}</div>

            <p>
              <label htmlFor="role">Role</label>
              <br />
              <select
                id="role"
                onChange={this.handleChange}
                value={this.state.type}
              >
                <option>Sales</option>
                <option>Admin</option>
              </select>
            </p>
            <div className="validation-prompt">{this.state.typeError}</div>

            <p>
              <label htmlFor="phone">Mobile Number</label>
              <br />
              <input
                type="text"
                id="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </p>
            <div className="validation-prompt">{this.state.phoneError}</div>
          </form>
          <div className="btn-register" onClick={this.handleClick}>
            <p>Register</p>
          </div>
          <div className="btn-register">
            <Link to="/">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
