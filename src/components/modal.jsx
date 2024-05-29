/* eslint-disable react/prop-types */
import { useState } from "react"
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import { nanoid } from "nanoid" 
const UserModal = (props) => {
  const [form, setForm] = useState({})
  const {cars, setCars, toggle} = props

  const handleChange= (e)=>{
    
    const {name,value} = e.target
    setForm({...form, [name]: value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    let id = nanoid()
   cars.push({...form, id})
   setCars([...cars])
   toggle()
  }
  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1 className="text-center">Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input type="text" placeholder="Name" required onChange={handleChange} name="name" className="form-control my-2" />
          <input type="symbol" placeholder="Price"onChange={handleChange} required name="price" className="form-control my-2" />
          <input type="date" placeholder="Year"onChange={handleChange} required name="year" className="form-control my-2" />
          <input type="color" placeholder="Color"onChange={handleChange} required name="color" className="form-control my-2" />
          <input type="text" placeholder="Brand"onChange={handleChange} required name="brand" className="form-control my-2" />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>Cancel</button>
        <button className="btn btn-success" type="submit" form="submit">Save</button>

      </ModalFooter>
    </Modal>
  )
}

export default UserModal
