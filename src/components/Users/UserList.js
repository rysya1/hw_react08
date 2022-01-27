import { useState } from "react/cjs/react.development"
import Button from "../UI/Button"
import Card from "../UI/Card"
import DeleteModal from "../UI/DeleteModal"
import classes from "./UserList.module.css"
const UserList = (props) => {
    const [deleteModal,setDeleteModal] = useState(null)
    const [useras, setUsers] = useState()
    const removeTask = (e) => {
        setDeleteModal(true)
        setUsers(props.users.filter((user) => user.id !== e.target.id))
      }

    const yesHandler = () => {
        props.onGetUsers(useras)
        setDeleteModal(null)
    } 
    const notHandler = () => {
        setDeleteModal(null)
    }
    return(
    <>
        {deleteModal && <DeleteModal  onConfirmNot={notHandler} onConfirmOk={yesHandler}/>}
        <Card className={classes.users}>
            
            <ul >
                {props.users.map((user) => (
                    <li className={classes.flex} key={user.id}>
                        
                        {user.name} ({user.age } years old)
                        
                        <Button onClick={removeTask} id={user.id}>delete</Button>
                    </li>
                ))}
            </ul>
        </Card>
    </>
    
    )
}
export default UserList