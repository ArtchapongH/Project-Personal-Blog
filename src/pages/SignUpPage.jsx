import { useState } from 'react'
import '../App.css'
import SignUpPageFill from '../components/SignUpPageFill'
import SignUpPageSubmit from '../components/SignUpPageSubmit'

function SignUpPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    Name: "",
    Username: "",
    Email: "",
    Password: ""
  })

  const handleSubmit = (data) => {
    setFormData(data)
    setIsSubmitted(true)
  }

  {/*
  const handleNewSurvey = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      movie: "",
      comment: "",
    })
  }
  */}

  return (
    <>
      {!isSubmitted ? 
        <SignUpPageFill 
          onSubmit={handleSubmit}
        /> 
        : 
        <SignUpPageSubmit
        />
      }
    </>
  )
}

export default SignUpPage;
