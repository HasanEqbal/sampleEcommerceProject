import React from "react";
import { Field, reduxForm } from "redux-form";
import { MDBInput, MDBBtn } from "mdbreact";
import { auth, createUserProfileDocument } from "../../firebase/firbase-utils";
import "./signUpPage.css";

class SignUpPage extends React.Component {
  renderInput = ({ input, lable, icon, type }) => {
    return (
      <React.Fragment>
        <MDBInput {...input} label={lable} icon={icon} type={type} />
      </React.Fragment>
    );
  };

  onSubmit = async formValues => {
    try {
      const { displayName, email, password } = formValues;
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <form
        className="signup"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <p className="h2 text-center mb-4">Create Account</p>
        <p className="h5 text-center mb-4">Sign up</p>
        <Field
          name="displayName"
          component={this.renderInput}
          lable="First Name"
        />
        <Field name="lastName" component={this.renderInput} lable="Last Name" />
        <Field
          name="email"
          component={this.renderInput}
          lable="Email Address"
        />
        <Field
          name="password"
          component={this.renderInput}
          lable="Password"
          type="password"
        />
        <div className="text-center">
          <MDBBtn gradient="aqua" type="submit">
            Sign Up
          </MDBBtn>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "signUpForm"
})(SignUpPage);
