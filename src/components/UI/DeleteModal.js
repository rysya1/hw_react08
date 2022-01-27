import Card from "./Card"
import classes from "./DeleteModal.module.css"
import Button from "./Button"

const DeleteModal = (props) => {
    
    return(
        <div >
            <div className={classes.back_blak} onClick={props.onDelete}/>
                <Card className={classes.modal}>
                <div className={classes.content}>
                    <h3>Do you really want to delete?</h3>
                </div>
                <footer className={classes.btn}>
                    <Button onClick={props.onConfirmOk}>Okay</Button>
                    <Button onClick={props.onConfirmNot}>Сancel</Button>
                </footer>
                </Card>
        </div>
    )
}
export default DeleteModal