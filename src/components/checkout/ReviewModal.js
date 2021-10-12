import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import ShippingDetails from "./ShippingDetails";
export default function ReviewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OrderDetails />
        <ShippingDetails />
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={props.onHide} className="cart-button" type="submit">
            Complete Order
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
