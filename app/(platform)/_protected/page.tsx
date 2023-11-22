'use client'

import { UserButton, auth, currentUser, useAuth, useUser } from "@clerk/nextjs"

const ProtectedPage = () => {  // async
  const { userId } = useAuth()
  const { user } = useUser()

  // const user = await currentUser()
  // const { userId } = auth()
  return (
    <div>
      Protected Page!
      <br />
      User: {user?.firstName}
      <br />
      userId : {userId}
      <UserButton 
      afterSignOutUrl="/"
      />
    </div>
  )
}
export default ProtectedPage