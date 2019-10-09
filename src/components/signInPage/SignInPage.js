import React from "react";
import { Field, reduxForm } from "redux-form";
import { MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import "./SignInPage.css";
import { auth, signInWithGoogle } from "../../firebase/firbase-utils";

class SignInPage extends React.Component {
  renderInput = ({ input, lable, icon, type }) => {
    return (
      <div>
        <MDBInput {...input} label={lable} icon={icon} type={type} />
      </div>
    );
  };

  onSubmit = async formValues => {
    const { email, password } = formValues;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <form
        className="signin"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <p className="h2 text-center mb-4">Returning customer</p>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text"></div>
        <Field
          type="text"
          name="email"
          component={this.renderInput}
          icon="envelope"
          lable="Email Address"
        />
        <Field
          name="password"
          type="password"
          component={this.renderInput}
          icon="lock"
          lable="Password"
        />
        <div className="text-center">
          <MDBBtn gradient="aqua" type="submit">
            Sign In
          </MDBBtn>
          <MDBBtn gradient="peach" onClick={signInWithGoogle}>
            <MDBIcon fab icon="google-plus-g" className="pr-1" /> Sign In With
            Google
          </MDBBtn>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "signInForm"
})(SignInPage);
