import React from 'react'
import './index.css';
//rafce (enter)

// class CartItem extends React.Component{
  const CartItem=(props)=>{
  
    // render(){
        // console.log('this.props',this.props);
        // de-structring of Object 
        // const{price,title,qty,img}=this.state;
        // const{price,title,qty}=this.props;
      // const{price,title,qty}=this.props.product;
      // after using arrow function 
      const{price,title,qty}=props.products;
      const{products,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return (
           <div className='cart-item'>
             {/* left div  */}
              <div className='left-block'>
                <img  style={styles.image} src={products.img}/>
              </div> 
             {/* right div  */}
              <div className='right-block'>
                {/* <div style={{ fontSize:25}}> Phone </div> */}
                {/* after creating the constructor and this.state  */}
                {/* <div style={{ fontSize:25}}> {this.state.title} </div> */}
                {/* after de-structring the this.state; */}
                <div style={{ fontSize:25}}> {title }</div>
                <div style={{ color:'#777'}}> Rs.{price}</div>
                <div style={{color:'#777'}}> Qty: {qty}</div>
                <div className='cart-item-actions'>
                    {/* buttons  */}
                    <img alt="increase"
                     className='action-icons'
                      src=' https://cdn-icons-png.flaticon.com/512/992/992651.png ' 
                      //M1 // onClick={this.increaseQuantity.bind(this)}
                      // or just bind it in the constuctor 
                      // onClick={()=> this.props.onIncreaseQuantity(this.props.product)}
                      onClick={()=> props.onIncreaseQuantity(props.products)}

                        //  from here we will go the function dleIncreaseQuantity in Cart.js 
                      />

                    <img alt="decrease"
                     className='action-icons' 
                     src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                    //  onClick={()=> this.props.onDecreaseQuantity(this.props.product)}
                     onClick={()=> props.onDecreaseQuantity(props.products)}

                     />

                    <img alt="delete"
                     className='action-icons'
                      src='https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1654968340~hmac=7b7c49b2a8c8b663ac6d14c5c19ba7d9 ' 
                      // onClick={()=> this.props.onDeleteProduct(this.props.product.id)}
                      onClick={()=> props.onDeleteProduct(props.products.id)}
                      />
                    
                </div>
              </div>

            </div>
        );
}

const styles ={
    // <img  style={styles.image}/> 
    image:{
        height:120,
        width: 110,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem