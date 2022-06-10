import React, { Fragment } from "react"

const Login = () => {
  return (
    <Fragment>
      <div>Login Page</div>
      <span
        style={{ padding: 50, borderColor: "red", borderRadius: 5 }}
        onClick={() => {
          alert("Loggin ya in boooi!")
        }}
      >
        Click Me
      </span>
      <div>THIS IS A DIVIDER</div>
    </Fragment>
  )
}

export default Login
