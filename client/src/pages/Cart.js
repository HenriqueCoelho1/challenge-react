import React from 'react'
import { Col, Row, Card, Button, ListGroup } from 'react-bootstrap'

const Cart = ({ cartItems, handleProduct, handleRemove }) => {
    // console.log("CART ITEMS", cartItems)

    const totalPrice = cartItems.reduce((price, p) => price + p.quantity * p.price, 0)
    const totalPriceWithTax = totalPrice < 250 && cartItems.reduce((price, p) => price + p.quantity * p.price + 10, 0)

    return (
        <>

            {cartItems.length !== 0 ? <Row>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                {<Row>
                                    <Col>
                                        Shipping:
                                    </Col>
                                    <Col>
                                        ${totalPrice < 250 ? `${totalPriceWithTax - totalPrice}`
                                            : `0`}
                                    </Col>
                                </Row>}
                                <br />
                                <Row>
                                    <Col>
                                        Subtotal:
                                    </Col>
                                    <Col>
                                        ${totalPrice}
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        Total:
                                    </Col>
                                    <Col>

                                        ${totalPrice > 250 ? totalPrice : totalPriceWithTax}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                        </ListGroup>

                    </Card>
                </Col>
            </Row> : <h1>No Items in your cart yet</h1>}

            <Row>
                {cartItems && cartItems.map(product => (
                    <>
                        <Col key={product._id} sm={12} md={6} lg={3} xl={4}>
                            <Card className="my-3 p-3 rounded">

                                <Card.Img src={product.image} variant="top" />


                                <Card.Body>
                                    <Card.Title as="div">
                                        <strong>{product.name.length > 25 ? product.name.slice(0, 23) + "..." : product.name}</strong>
                                    </Card.Title>

                                    <Card.Text as="div">
                                        <div className="py-3">
                                            Product score:<p className="text-info">{product.score}</p>
                                        </div>
                                    </Card.Text>


                                    <Card.Text as="h3">${product.price}</Card.Text>
                                    <br />
                                    <Card.Text as="h5">Quantity {product.quantity}</Card.Text>
                                    <Card.Text as="h5">Actual price: {product.quantity * product.price}</Card.Text>

                                    <Button onClick={() => handleRemove(product)} className="btn btn-danger btn-sm"> - </Button>
                                    {" "}
                                    <Button onClick={() => handleProduct(product)} className="btn btn-success btn-sm">+</Button>

                                </Card.Body>

                            </Card>
                        </Col>



                    </>
                ))}

            </Row>
        </>
    )
}

export default Cart
