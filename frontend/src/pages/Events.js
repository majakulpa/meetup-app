import React, { Component } from 'react'
import Modal from './../components/Modal/Modal'
import Backdrop from './../components/Backdrop/Backdrop'
import './Event.css'

class Events extends Component {
  state = {
    creating: false
  }

  constructor(props) {
    super(props)
    this.titleElRef = React.createRef()
    this.priceElRef = React.createRef()
    this.dateElRef = React.createRef()
    this.descriptionElRef = React.createRef()
    this.capacityElRef = React.createRef()
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true })
  }

  modalConfirmHandler = () => {
    this.setState({ creating: false })
    const title = this.titleElRef.current.value
    const price = this.priceElRef.current.value
    const date = this.dateElRef.current.value
    const description = this.descriptionElRef.current.value
    const capacity = this.capacityElRef.current.value

    if (!title || !price || !date || !description || !capacity) {
      return
    }

    const event = { title, price, date, description, capacity }
    console.log(event)
  }

  modalCancelHandler = () => {
    this.setState({ creating: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfrim
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="4"
                  id="description"
                  ref={this.descriptionElRef}
                />
              </div>
              <div className="form-control">
                <label htmlFor="capacity">Capacity</label>
                <input type="number" id="capacity" ref={this.capacityElRef} />
              </div>
            </form>
          </Modal>
        )}
        <div className="events-control">
          <h3>Create your own event!</h3>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default Events
