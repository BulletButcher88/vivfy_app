import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './editUser.css'

const initialState = {
  password: "",
  confirmPassword: "",
  passwordError: "",
}

class EditUser extends React.Component {
  initialState = {
    password: '',
    confirmPassword: '',
    passwordError: "",
  }
  state = initialState

  editApiCall = async (data) => {
    try {
      const token = localStorage.getItem('token')
      const { _id } = this.props.currentUser
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${_id}`,
        data,
        {
          headers: { token: token }
        }
      )
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  validate = () => {
    let passwordError = "";

    if (this.state.password !== this.state.confirmPassword ||
        !this.state.password) {
      passwordError = "Passwords must match";
    }

    if (passwordError) {
      this.setState({
        flashMessage: passwordError,
      });
      return false;
    }
    return true;
  };

  handleClick = async e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const { password } = this.state;
      const res = await this.editApiCall({
        password
      });
      if (res) {
        this.setState({
          flashMessage: "You successfully changed your password. Redirecting to main page..."
        })
        setTimeout(() => {
          window.location = "/";
        }, 2000)
      } else {
        this.setState({
          loginError: "There was a problem changing your details"
        });
      }
    }
  };

  render() {
    return (
      <div className='edit-container'>
        <h1>Change your password</h1>
        <p className='explanation'>
          This page will allow you to change your user password.
        </p>
        {
          this.state.flashMessage &&
          <p className='flash'>{this.state.flashMessage}</p>
        }
        <form className='register-form'>
          <p>
            <label>New Password</label><br />
            <input
              type='password'
              id='password'
              onChange={this.handleChange}
              value={this.state.password}
              placeholder={this.state.passwordError}
            />
          </p>

          <p>
            <label>Confirm New Password</label><br />
            <input
              type='password'
              id='confirmPassword'
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
          </p>
          <div className='buttons'>
            <div className="btn-register back-to-dashboard-btn" onClick={this.handleClick}>
              <p>Change Password</p>
            </div>
            <div className="btn-register back-to-dashboard-btn">
              <Link to="/"> Back to Dashboard</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUser