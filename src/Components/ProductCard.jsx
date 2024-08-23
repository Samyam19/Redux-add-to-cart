import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer, 
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((items) => (
            <MDBCol key={items.id} size="md">
              <MDBCard>
                <MDBCardImage src={items.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{items.title}</MDBCardTitle>
                  <MDBCardText>{items.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(items))} href="#">Add to cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
