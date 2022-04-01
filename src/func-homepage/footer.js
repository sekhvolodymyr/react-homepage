import React from "react";

const styles = {
    ft:{
        marginTop: 'auto',
        display: 'block',
        position:'absolute',
        background:'#333',
        color:'#fff',
        width:'100%'
    },

    ftHead:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignContent:'center',
        width:'90%',
        margin:'0 auto',
    },
    flxbc:{
        width: '30%',
        margin:'0.5vw 0.2vw',
        whiteSpace: 'pre-wrap',
    },
    ftlog:{
        display:'block',
        height:'100px',
        width:'100px',
        margin:'0px auto'
    },
    fticons:{
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        
    },
    fticonst:{
        fontSize: '26px',
        color: '#fff',
        opacity: '0.6',
        margin: '2vh',
    },
    fthr:{
        width:'90%',
        opacity:'0.6',
    },
    ftft:{
        textAlign:'center',
        opacity:'0.5',
    }
    
    
}

export default function Footer(){

return(
    <div style={styles.ft}>
            <div style={styles.ftHead}>
                 <div style={styles.flxbc}>

                    <h4>Branding Stuff</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ipsum eligendi laudantium architecto ratione
                    </p>
                 </div>
                 <div style={styles.flxbc}>
                     
                     <img style={styles.ftlog} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLmxY1nX_PhnFmemlGHXIz2S3zJHLvkzTPDUshA9928X5ZJ-Q-_MG5p0URvWxWD0dkow&usqp=CAU"></img>
                     
                     </div>
                 <div style={styles.flxbc}>
                    
                     <a href="#" style={styles.fticonst}><i className="fab fa-telegram"></i></a>
                     <a href="#" style={styles.fticonst}><i className="fab fa-instagram"></i></a>
                     <a href="#" style={styles.fticonst}><i className="fab fa-pinterest"></i></a>
                     <a href="#" style={styles.fticonst}><i className="fa-brands fa-facebook"></i></a>

                    
                 </div>
            </div>
        <hr style={styles.fthr}></hr>
            <div style={styles.ftft}>
                 <p>2022 IoT © Copyright namesite All Rights Reserved</p>
             </div>
    </div>
);

}