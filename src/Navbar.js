import React from 'react'
//rafce (enter)

// class Navbar extends React.Component{
  const Navbar=(props)=>{
    // arrow function pass props by default ... use (props.something) 
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
    
}

const styles ={
    // <img  style={styles.image}/> 
     nav:{
          height:70,
          background:'#4277b2',
          display:'flex',
          justifyContent:'flex-end',
          alignItem:'center'
    },
    cartIcon:{
        height:32,
        marginRight:20,
        marginTop:20,
    },
    cartIconContainer:{
        position:'relative',
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:1,
        top:9
    }
}


export default Navbar