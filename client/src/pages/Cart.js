import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card, Button, ListGroup } from 'react-bootstrap'

const Cart = ({ cartItems, handleProduct, handleRemove }) => {
    console.log("CART ITEMS", cartItems)

    const totalPrice = cartItems.reduce((price, p) => price + p.quantity * p.price + 10, 0)
    const totalPriceNoTax = cartItems.reduce((price, p) => price + p.quantity * p.price, 0)





    return (
        <>

            {cartItems.length !== 0 ? <Row>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        {totalPrice > 250 ? `Subtotal: with no shipping tax ${totalPrice}` :
                                            `Subtotal`}
                                    </Col>
                                    <Col>
                                        {totalPrice}
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        Total:
                                    </Col>
                                    <Col>

                                        {totalPrice > 250 ? totalPriceNoTax : totalPrice}
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

                                {/* <h1>{product.name}</h1> */}
                                <Link to={`/product/${product._id}`}>
                                    <Card.Img src={product.image} variant="top" />
                                </Link>

                                <Card.Body>
                                    <Link to={`/product/${product._id}`}>
                                        <Card.Title as="div">
                                            <strong>{product.name.length > 25 ? product.name.slice(0, 23) + "..." : product.name}</strong>
                                        </Card.Title>
                                    </Link>


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
