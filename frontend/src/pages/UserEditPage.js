import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Form, Button, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'

function UserEditScreen() {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
   

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const userDetails = useSelector((state) => state.userDetails)
    const { error, loading, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            navigate('/admin/userlist')
        } else {

            if (!user.name || user._id !== Number(id)) {
                dispatch(getUserDetails(id))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
        
        }, [dispatch, user, id, successUpdate, navigate])

    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: user._id, name, email, isAdmin }))
    }

    const handleGoBack = () => {
        if (window.confirm('Are you sure you want to go back? Any unsaved changes will be lost.')) {
          navigate('/admin/userlist');
        }
      }


  return (
    <div>
    {loadingUpdate && <Loader />}
    {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

    <Link to='/admin/userlist' 
            onClick={handleGoBack}
            className='btn btn-dark my-3' 
            style={{ fontSize: '1.rem', fontWeight: 300 }}> 
            &#8592;  Go Back
            </Link>

    <FormContainer>
        <h1 className="display-5">Edit User</h1>
        
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
            <Form onSubmit={submitHandler}>

            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="isadmin">
                <Form.Check
                    type='checkbox'
                    label='Is Admin'
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                />
            </Form.Group>
            <br/>
           
            <Button type="submit" variant="primary" className="btn btn-dark my-3">
                Update
            </Button>
        </Form>
        )}

    </FormContainer>

    </div>
    
  )
}

export default UserEditScreen