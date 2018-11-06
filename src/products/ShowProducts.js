import React, { Component } from 'react';
import products from '../data.json'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Container,  Row, Col } from 'reactstrap';
//import Pagination from "react-js-pagination";

//add for pagination
import Pagination from "./Pagination";
import DropdownList from '../nav3/DropdownList.js';



class ShowProducts extends Component {
    state = {
        allProducts: [],
        currentProducts: [],
        currentPage: 0,
        pageLimit: 8,
        totalPage: null,
        filter: {
            type: "dog",
            category: null,
            subCategory: null,
            sortedBy: null
        }
    };

    componentDidMount() {
        const allProducts = products;
        this.setState({ allProducts, currentProducts: this.filterAndSortAndPagedProducts() });
    }
    
    onPageChanged = data => {
        const { allProducts } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        console.log("from dropdown list " + DropdownList);

        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = allProducts.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentProducts, totalPages });
    }

    selectionChangeHandler = data => {
        this.setState({
            filter: {...data},
            currentProducts: this.filterAndSortAndPagedProducts() 
        })
    }

    filterAndSortAndPagedProducts = () => {
        let {
            allProducts=[],
            filter={},
            pageLimit,
            currentPage
          } = this.state;


         console.log(filter);

         let products= allProducts.filter(p=> {
             return (!filter.type || filter.type==p.pet) && (!filter.category || p.category == filter.category) && (!filter.subCategory || filter.subCategory == p.subcategory)
          });

         if (filter.sortedBy) {
             return products.sort((p1,p2)=> p1.localCompare(p2)).slice((currentPage-1)*pageLimit, currentPage*pageLimit) ||[]
         } else {
             return products.slice((currentPage-1)*pageLimit, currentPage*pageLimit) || []
         }
    }


    render() {
        const {
            allProducts,
            currentProducts,
            currentPage,
            totalPages
          } = this.state;


        const totalProducts = allProducts.length;
        console.log("*** total products is " + totalProducts);

        if(totalProducts === 0)
            return null;

            const headerClass = [
                "text-dark py-2 pr-4 m-0",
                currentPage ? "border-gray border-right" : ""
              ]
                .join(" ")
                .trim();




        return (
            <div>
              <DropdownList filter={this.state.filter} onChange={this.selectionChangeHandler} />
              <div style={{ display: "inline-block" }}>
                <Container style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '25px', gridAutoRows: 'minMax(100px, auto)' }}>
                    {currentProducts.map(product =>
                        <div style={{ border: "1px solid  lightgray" }}>
                            <div>
                                <img top src={product.imageUrl} alt="product" style={{ marginTop: "15px", height: "120px" }} />
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <p>{product.product_name}</p>
                                <Button>{product.price}</Button>
                            </div>
                        </div>
                    )}
                </Container><br></br>
                <div>
                   
                    <Pagination
                        totalRecords={totalProducts}
                        pageLimit={8}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged}
                    />
                </div>
              </div>
            </div>
        );
    }
}



export default ShowProducts;
