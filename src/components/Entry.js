
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Entry() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const handleSubmitClick = () => {
    alert(name + desc)
  }

  const change = setter => Event => {
    setter(Event.target.value)
  }
  return (
    <div className='Entry'>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Name" value={name} onChange={change(setName)}/>
          </Col>
          <Col>
            <Form.Control placeholder="Description" value={desc} onChange={change(setDesc)} />
          </Col>
          <Col>
          <Button variant="primary" type="submit" onClick={handleSubmitClick}>
            Submit
          </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}