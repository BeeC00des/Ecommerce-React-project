/*eslint no-undef: 0*/

import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component{
   constructor(){
      super(); // calling super class constructor
      //intialising the state
      this.state = {
         products:[],
      }; 
   }

  /*  state = {
      products:[
         {
            id:1,
            productName:"Gucci",
            price:200,
            quantity:0
         },
         {
            id:2,
            productName:"VR-glass",
            price:200,
            quantity:0
         },
         {
            id:3,
            productName:"META Bag",
            price:200,
            quantity:0
         },
         {
            id:4,
            productName:"Ferra",
            price:200,
            quantity:0
         },{
            id:5,
            productName:"hubolt",
            price:200,
            quantity:0
         },
      ]
   }; */
   render(){
      return (
         <div className="container-fluid ">
            <h4>Shopping cart </h4>
            <div className="row">
               {this.state.products.map((prod) => {
                  return <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete = {this.handleDelete}>
                     <button className="btn btn-primary">Buy Now</button>
                  </Product> 
               })}
            </div>
            
         </div>
      )
   }

   componentDidMount= async()=>{
      // using async wait
      var response = await fetch("http://localhost:3000/products", {method:"GET"});
      var prods = await response.json();
      console.log(prods);
      this.setState({products:prods})
      

      // using fetch
     /*  fetch("http://localhost:5000/products", {method:"GET"}).then((response)=>{
         console.log(response)
         var promise2 = response.json();
         promise2.then((prods)=>{
            console.log(prods); 
            this.setState({products:prods})
         });
      }).catch((err) => {
         console.log(err)
      });  */
      console.log("component mounted");
   };

   handleIncrement = (product, maxValue)=>{
      // console.log("handle increment clicked", product);
      let allProducts = [...this.state.products];
      let index = allProducts.indexOf(product);
      // console.log(allProducts[index]);

      if(allProducts[index].quantity < maxValue){
         allProducts[index].quantity++;
         this.setState({products:allProducts}); 
      }
      
   }
   handleDecrement = (product,minValue)=>{
      // console.log("handle decrement clicked", product);
      let allProducts = [...this.state.products];
      let index = allProducts.indexOf(product);
      // console.log(allProducts[index]);

      if(allProducts[index].quantity > minValue){
         allProducts[index].quantity--;
         this.setState({products:allProducts}); 
      }
   }

   handleDelete = (product) =>{
      let allProducts = [...this.state.products];
      let index = allProducts.indexOf(product);

      if (window.confirm("Are you sure you want to delete this product")){
         //delete product
         allProducts.splice(index,1);

         this.setState({products:allProducts}); 
      }
   }
}