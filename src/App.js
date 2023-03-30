import React from 'react'
import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

 class App extends React.Component{
  // paste the state and handle increase, decrease,delete
  constructor(){
    super();
    this.state={
        products:[
            {
                price:999,
                title:'Watch',
                qty:2,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id:1
              },
              {
                price:9999,
                title:'Phone',
                qty:4,
                img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                id:2
              },
              {
                price:62999,
                title:'Laptop',
                qty:7,
                img:'https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?s=612x612',
                id:3
              }
        ]
    }
  }

  handleIncreaseQuantity=(item)=>{
    console.log("Hey Please increase the qty of:",item);
    const{products}=this.state
    const index=products.indexOf(item);
    console.log("index",index);
    products[index].qty+=1;
    this.setState({
        products:products,
        //  key :  value 
    })
  }
  handleDecreaseQuantity=(item)=>{
    console.log("Hey Please Decrease the qty of:",item);
    const{products}=this.state
    const index=products.indexOf(item);
    console.log("index:",index);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products:products,
        //  key :  value 
    })
  }

  handleDeleteProduct=((id)=>{
     console.log("Product id NO:",id,"is deleted temporary")
     const{products}=this.state;
     
    //  filter the products which does not include the id product 
     const items=products.filter((item)=> item.id!==id);
    //  update the new products 
     this.setState({
        products:items
     })
  })
  getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((item)=>{
      count+=item.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let CountTotal=0;
    products.forEach((item)=>{
      CountTotal=CountTotal+item.qty * item.price;
    })
    return CountTotal;
  }
     render(){
      const {products}=this.state;
       return (
         <div>
               <Navbar count={this.getCartCount()}/>
               <Cart
               products={products}
                // passing the information to cart using proops 
                  onIncreaseQuantity={this.handleIncreaseQuantity}
                  onDecreaseQuantity={this.handleDecreaseQuantity}
                  onDeleteProduct={this.handleDeleteProduct}
               />
               <div> TOTAL :{this.getCartTotal()}</div>
        </div>
     
  );
 }
}

export default App;
