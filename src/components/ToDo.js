import Button  from "react-bootstrap/Button"

export default function ToDO({name, description}) {
    return (
        <div className="todo">
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <Button variant="outline-primary">
                Complete
            </Button>
            <Button variant="outline-danger">
                Delete
            </Button>
        </div>
    )
}