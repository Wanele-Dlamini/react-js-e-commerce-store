import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="start" title="shopping" />
                            <p className="text-center lead text-muted">Are you a hardworking professional, who spends a good portion of the day
                            focused on building a career and adding value to other peoples' lives? Good! Keep focusing on that and let us
                            worry about making sure you look the part while you do so.</p>
                        <div className="row">
                            <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
