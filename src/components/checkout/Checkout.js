import React from "react";
import Header from "../shop/Header";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../shop/Banner";
import CheckoutForm from "./CheckoutForm";
import OrderDetails from "./OrderDetails";
import ReviewModal from "./ReviewModal";
export default function Checkout() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Banner heading="Checkout" />
      <Header heading="Checkout" />
      <Container className="mt-5">
        <Row>
          <Col>
            <CheckoutForm onShow={() => setModalShow(true)} />
          </Col>
          <Col>
            <OrderDetails />
          </Col>
        </Row>
        <ReviewModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
}
