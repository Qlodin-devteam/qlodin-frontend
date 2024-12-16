import React, { useState } from 'react'

const verifyForm = () => { 

	const [otp , setOtp] = useState()
  return (
	<div>
		<form>
			<input type="text" name="name" placeholder="Enter your name"/>

		</form>

	  
	</div>
  )
}

export default verifyForm
