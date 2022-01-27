import classes from './AddUser.module.css'
import Card from  "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"
import { Fragment, useState } from 'react'
function AddUser(props){
    const [username,setUsename] = useState('')
    const [age,setAge] = useState('')
    const [error,setError] = useState(null)

    const UserNameChangeHandler = (event) => {
        setUsename(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non empty values)"
            })
            return;
        }
        if (Number(age) < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid age(> 0)"
            })
            return;
        }
        props.onAddUser(username,age)

        setUsename('')
        setAge('')
    }

    const ErrorHandler = () => {
        setError(null)
    }
    return(
        <Fragment>
            {error && <ErrorModal
             title={error.title}
            message={error.message} 
            onConfirm={ErrorHandler}/>}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UerName</label>
                <input id='username' type='text' value={username} onChange={UserNameChangeHandler}></input>
                <label htmlFor='age'>Age (years)</label>
                <input id='age' min="0" type="number" value={age} onChange={ageChangeHandler}></input>
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
        </Fragment>
        
    )
}
export default AddUser