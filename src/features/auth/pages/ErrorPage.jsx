import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ErrorPage = () => {
  const [redirect, setRedirect] = useState(false)

  useEffect(()=>{
    const reload = setTimeout(()=>{
      setRedirect(true)
    }, 4000)

    return clearTimeout(reload)
  }, [])

  if(redirect) return <Navigate to="/login" replace />


  return (
    <div>
      <h1>Page not Found</h1>
      <p>You will be redirecting in 4 seconds...</p>
    </div>
  )
}


export default ErrorPage;