import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Form = props => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get(`https://api.github.com/users`).then(resp => {
      props.onSubmit(resp.data)
      console.log(resp.data)
      setUsername('')
    })
    
  }, [])
  const handleSubmit = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data)
      console.log(resp.data)
      setUsername('')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Form
