import React from "react";
import { Field, reduxForm } from "redux-form";
import { MDBInput, MDBBtn } from "mdbreact";
import { auth, createUserProfileDocument } from "../../firebase/firbase-utils";
import "./signUpPage.css";

class SignUpPage extends React.Component {
  renderInput = ({ input, lable, icon }) => {
    return (
      <div>
        <MDBInput {...input} label={lable} icon={icon} />
      </div>
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
        <div className="grey-text"></div>
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
        <Field name="password" component={this.renderInput} lable="Password" />
        <MDBBtn className="text-center" type="submit">
          Sign Up
        </MDBBtn>
      </form>
    );
  }
}

export default reduxForm({
  form: "signUpForm"
})(SignUpPage);
