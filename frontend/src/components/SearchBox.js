import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBox() {
  const [keyword, setKeyword] = useState('')

  let navigate = useNavigate()
  let location = useLocation()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword) {
      navigate(`/store?keyword=${keyword}&page=1`);
    } else {
      navigate(location.pathname)
    }
  };

  return (
    <div className="d-flex ml-auto search-box">
    <Form onSubmit={submitHandler} inline className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      />

      <Button type="submit" variant='dark'  className="p-2">
        <i className="fas fa-search"></i>
      </Button>
    </Form>
    </div>
  )
}

export default SearchBox
