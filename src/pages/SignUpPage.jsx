import { useState } from 'react'
import '../App.css'
import SignUpPageFill from '../components/SignUpPageFill'
import SignUpPageSubmit from '../components/SignUpPageSubmit'
import useAuth from '../contexts/authenticaition.jsx'

function SignUpPage() {
  const { register, state } = useAuth()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (data) => {
    try {
      await register(data)
      setIsSubmitted(true)
    } catch {
      setIsSubmitted(false)
    }
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
          isSubmitting={state.loading}
          submitError={state.error}
        /> 
        : 
        <SignUpPageSubmit
        />
      }
    </>
  )
}

export default SignUpPage;
