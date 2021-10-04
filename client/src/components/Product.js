import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            {/* <h1>{product.name}</h1> */}
            <a href={`/product/${product.id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>

            <Card.Body>
                <a href={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <strong>{product.name.length > 25 ? product.name.slice(0, 23) + "..." : product.name}</strong>
                    </Card.Title>
                </a>


                <Card.Text as="div">
                    <div className="py-3">
                        Product score:<p className="text-info">{product.score}</p>
                    </div>
                </Card.Text>


                <Card.Text as="h3">${product.price}</Card.Text>

            </Card.Body>

        </Card>
    )
}

export default Product
