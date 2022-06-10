import React, { Fragment } from "react"
import { Auth } from "aws-amplify"

const SignUp = () => {
  const handleSignUp = async () => {
    console.log("signing up...")
    try {
      const user = await Auth.signUp({
        username: "+27834636516",
        password: "hellothere",
        attributes: {
          email: "mdldavies@gmail.com",
          phone_number: "+27834636516",
        },
      })
      console.log("USER 🦸 ", user)
    } catch (err) {
      console.log(err)
    }
  }

  const verifyCode = async () => {
    console.log("verifying user...")
    const res = await Auth.confirmSignUp("+27834636516", "414338")
    console.log("Confirmation Response 📣 ", res)
  }
  return (
    <Fragment>
      <div>Sign Up Page</div>
      {/* <span
        style={{
          padding: 50,
          borderColor: "red",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={handleSignUp}
      >
        Click Me
      </span> */}
      <div style={{ marginTop: 50 }}>THIS IS A DIVIDER</div>
      <span
        style={{ padding: 50, borderColor: "red", borderRadius: 5 }}
        onClick={verifyCode}
      >
        Click Me Too
      </span>
    </Fragment>
  )
}

export default SignUp
