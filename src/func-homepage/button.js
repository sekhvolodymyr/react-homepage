import React from "react";


const styles = {
    btn:{
        
        

        backgroundColor: 'purple',
        color: 'white',
       
        borderRadius:'20%',
        width:'10%',
        height:'3vw',
        fontSize:'20px',
        marginBottom:'5vw',
        marginTop:'5vw'
        
    }



}

export default function Button(){

return(

        <button style={styles.btn}>View More</button>

    );  


}