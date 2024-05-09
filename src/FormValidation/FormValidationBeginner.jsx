import { useRef, useState } from "react";
import "./FormValidation.css";
export default function FormValidationBeginner() {
  const nameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const messageRef = useRef();
  const acceptRef = useRef();

  const [formValue, setFormValue] = useState();
  const [Errors, setErrors] = useState({});
  const [valid, setValid] = useState("");

  const resetForm = () => {
    if (
      nameRef.current.value.trim() !== "" &&
      emailRef.current.value.trim() !== "" &&
      emailRef.current.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/) &&
      messageRef.current.value.trim() !== "" &&
      messageRef.current.value.length >= 200 &&
      countryRef.current.value.trim() !== "" &&
      acceptRef.current.checked !== false
    ) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      countryRef.current.value = "";
      acceptRef.current.checked = false;
    }
  };

  const onSubmitRef = (e) => {
    e.preventDefault();
    setErrors([]);
    console.log("current:" + typeof messageRef.current.value.length);
    const myObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      country: countryRef.current.value,
      accept: acceptRef.current.checked,
    };
    console.log(myObj);
    setFormValue(myObj);
    setValid(true);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const country = countryRef.current.value;
    const accept = acceptRef.current.checked;

    if (name.trim() === "") {
      setErrors((prevState) => {
        return { ...prevState, ...{ name: " name required" } };
      });
      setValid(false);
    }

    if (email.trim() === "") {
      setErrors((prevState) => {
        return { ...prevState, ...{ email: "email required" } };
      });
      setValid(false);
    } else if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
      setErrors((prevState) => {
        return { ...prevState, ...{ email: "invalid format" } };
      });
      setValid(false);
    }
    if (message.trim() === "") {
      setErrors((prevState) => {
        return { ...prevState, ...{ message: "message required" } };
      });
      setValid(false);
    } else if (message.length < 200) {
      setErrors((prevState) => {
        return { ...prevState, ...{ message: "min 200 caractere" } };
      });
      setValid(false);
    }

    if (country === "") {
      setErrors((prevState) => {
        return { ...prevState, ...{ country: " country required" } };
      });
      setValid(false);
    }
    if (accept === false) {
      setErrors((prevState) => {
        return { ...prevState, ...{ accept: " accept require" } };
      });
      setValid(false);
    }
    // Object.keys(Errors).length === 0 && resetForm();

    resetForm();
    // console.log(valid);
  };
  // const displayErrors =
  //   Errors.length <= 5
  //     ? Errors.map((er, key) => <li key={key}>{er.field}:{er.message}</li>)
  //     : "";

  const displayErrors = () => {
    return Object.entries(Errors).map((error, key) => {
      const [field, message] = error;
      return (
        <li key={key}>
          {field}:{message}
        </li>
      );
    });
  };

  const handelError = (value) => {
    return <div className="error">{Errors[value]}</div>;
  };

  return (
    <>
      <div className="container ">
        {Object.keys(Errors).length > 0 ? (
          <div className="alert alert-danger" role="alert">
            <h4>Errors:</h4>
            {displayErrors()}
          </div>
        ) : (
          ""
        )}

        {/* valid : {valid.toString()} */}
        {valid ? (
          <div className="alert alert-success" role="alert">
            Data Sent Successfuly
          </div>
        ) : (
          ""
        )}
      </div>
      {/* {JSON.stringify(formValue)} */}
      <form>
        <div className="container mt-4">
          <h3>Contact Form</h3>
          <div className="mb-3 col-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={
                Errors.name ? "ErrorInput  form-control" : "form-control"
              }
              id="name"
              ref={nameRef}
            />
            {handelError("name")}
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className={
                Errors.email ? "ErrorInput form-control" : "form-control"
              }
              id="email"
              ref={emailRef}
            />
            {handelError("email")}
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              type="text"
              className={
                Errors.message ? "ErrorInput form-control" : "form-control"
              }
              id="message"
              ref={messageRef}
            />
            {handelError("message")}
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              className={
                Errors.country ? "ErrorInput form-control" : "form-control"
              }
              aria-label="Default select example"
              ref={countryRef}
              id="country"
            >
              <option value="" selected>
                Choise
              </option>
              <option value="MA">Maroc</option>
              <option value="EG">Egypt</option>
              <option value="TN">Tunisie</option>
            </select>
            {handelError("country")}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={
                Errors.name ? "ErrorInput form-check-input" : "form-check-input"
              }
              id="accept"
              ref={acceptRef}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
            {handelError("accept")}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSubmitRef}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
