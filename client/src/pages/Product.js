import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Card, Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'


const Home = ({ products, handleProduct }) => {
    const [orderedProducts, setOrderedProducts] = useState(products)

    const sortingPrice = (orderingBy) => {
        if (orderingBy[0] === "price" && orderingBy[1] === "ASC") {
            const sorted = [...orderedProducts].sort((a, b) =>
                b["price"] - a["price"])
            setOrderedProducts(sorted)
        } else {
            const sorted = [...orderedProducts].sort((a, b) =>
                a["price"] - b["price"])
            setOrderedProducts(sorted)

        }
    }

    const sortingScore = (orderingBy) => {
        if (orderingBy[0] === "score" && orderingBy[1] === "ASC") {
            const sorted = [...orderedProducts].sort((a, b) =>
                b["score"] - a["score"])
            setOrderedProducts(sorted)
        } else {
            const sorted = [...orderedProducts].sort((a, b) =>
                a["score"] - b["score"])
            setOrderedProducts(sorted)
        }
    }

    const sortingString = (orderingBy) => {
        if (orderingBy[0] === "name" && orderingBy[1] === "ASC") {
            const sorted = [...orderedProducts].sort((a, b) =>
                a["name"].toLowerCase() > b["name"].toLowerCase() ? 1 : -1)
            setOrderedProducts(sorted)
        } else {
            const sorted = [...orderedProducts].sort((a, b) =>
                a["name"].toLowerCase() < b["name"].toLowerCase() ? 1 : -1)
            setOrderedProducts(sorted)

        }
    }

    return (
        <>
            <h1>My shop</h1>
            <Row>
                <Col md={3}>
                    <DropdownButton
                        as={ButtonGroup}
                        key={1}
                        title={"Order"}>
                        <Dropdown.Item onClick={() => sortingString(["name", "ASC"])}>Order by Name A-Z</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortingString(["name", "DES"])}>Order by Name Z-A</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortingScore(["score", "ASC"])}>High Score</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortingScore(["score", "DESC"])}>Lower Score</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortingPrice(["price", "ASC"])}>High Price</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortingPrice(["price", "DESC"])}>Lower Price</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>

            <Row>
                {orderedProducts.map(product =>
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
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

                                <Button onClick={() => handleProduct(product)} className="btn-block">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default Home
