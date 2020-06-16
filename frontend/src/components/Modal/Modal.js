import React from 'react'
import './Modal.css'

const modal = props => (
  <div className="modal">
    <header className="modal__header">
      <h2>{props.title}</h2>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfrim && (
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      )}
    </section>
  </div>
)

export default modal
