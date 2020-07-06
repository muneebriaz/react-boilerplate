import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Products() {
    const { id } = useParams()
    const url = `https://5eff233adfd1400016ae0dc0.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
    })

    useEffect(() => {
        setProduct({
            loading: true,
            data: null
        })
        axios.get(url)
            .then((response) => {
                setProduct({
                    loading: false,
                    data: response.data
                })
            })
    }, [url])

    if (product.loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (product.data) {
        return (
            <div>
                <h1 className="text-2xl font-bold m-3">{product.data.name}</h1>
                <div className="h-48 m-3">
                    <img className="h-full" src={product.data.images} alt={product.data.name} />
                </div>
                <div className="font-xl font-bold mb-3 ml-3">
                    ${product.data.price}
                </div>
                <div className="ml-3">
                    {product.data.description}
                </div>
            </div>
        )
    }
    return (
        <div>
            <h1>No product(s) to display</h1>
        </div>
    )
}

export default Products