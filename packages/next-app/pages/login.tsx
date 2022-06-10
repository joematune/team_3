import { Auth } from "aws-amplify"
import React, { Fragment } from "react"
import { useListUsersLazyQuery } from "../src/generated/graphql"
const Login = () => {
  const [listUsers, { data }] = useListUsersLazyQuery({
    fetchPolicy: "network-only",
    onError: (err) => console.log("ERROR 🏟 ", err),
    onCompleted: (data) => console.log(data),
  })
  React.useEffect(() => {
    console.log(data)
  }, [data])

  const signIn = async () => {
    try {
      console.log("Signing in... 🥼 ")
      // sign in user
      const user = await Auth.signIn("+27834636516", "hellothere")
      console.log(user)
    } catch (err) {
      console.log("ERROR 🥪 ", err)
    }
    return Promise.resolve()
  }
  return (
    <Fragment>
      <div>Login Page</div>
      <span
        style={{ cursor: "pointer", borderColor: "red", borderRadius: 5 }}
        onClick={signIn}
      >
        Click Me
      </span>
      <div style={{ marginBottom: 10, marginTop: 10 }}>THIS IS A DIVIDER</div>
      <span
        style={{ cursor: "pointer", borderColor: "red", borderRadius: 5 }}
        onClick={() => {
          console.log("Listing Users 🦸 ")
          listUsers()
        }}
      >
        Click Me
      </span>
    </Fragment>
  )
}

export default Login
