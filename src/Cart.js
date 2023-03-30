import React from 'react'
import CartItem from './CartItem'

// class Cart extends React.Component{
  const Cart=(props)=>{
    // constructor(){
    //     super();
    //     this.state={
    //         products:[
    //             {
    //                 price:999,
    //                 title:'Watch',
    //                 qty:2,
    //                 img:'',
    //                 id:1
    //               },
    //               {
    //                 price:9999,
    //                 title:'Phone',
    //                 qty:4,
    //                 img:'',
    //                 id:2
    //               },
    //               {
    //                 price:62999,
    //                 title:'Laptop',
    //                 qty:7,
    //                 img:'',
    //                 id:3
    //               }
    //         ]
    //     }
    //   }

    //   handleIncreaseQuantity=(item)=>{
    //     console.log("Hey Please increase the qty of:",item);
    //     const{products}=this.state
    //     const index=products.indexOf(item);
    //     console.log("index",index);
    //     products[index].qty+=1;
    //     this.setState({
    //         products:products,
    //         //  key :  value 
    //     })
    //   }
    //   handleDecreaseQuantity=(item)=>{
    //     console.log("Hey Please Decrease the qty of:",item);
    //     const{products}=this.state
    //     const index=products.indexOf(item);
    //     console.log("index:",index);
    //     if(products[index].qty===0){
    //         return;
    //     }
    //     products[index].qty-=1;
    //     this.setState({
    //         products:products,
    //         //  key :  value 
    //     })
    //   }

    //   handleDeleteProduct=((id)=>{
    //      console.log("Product id NO:",id,"is deleted temporary")
    //      const{products}=this.state;
         
    //     //  filter the products which does not include the id product 
    //      const items=products.filter((item)=> item.id!==id);
    //     //  update the new products 
    //      this.setState({
    //         products:items
    //      })
    //   })

    // render(){
        // const {products}=this.state;
         const {products}=props;

        return(
            <div className='cart'>
                {/* <CartItem qty={1} price={899} title={'watch'} img={''}/> */}
                {/* use this.props to acces  */}
                {products.map((item)=>{
                    return (
                    <CartItem 
                    products={item} 
                    key={item.id}
                    // sending the functions as an props 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                    />)
                    // use this.props.product to access 
                    // key helps react to differentiate between objects 
                })}
            </div>
        )
      
}

export default Cart