import React from "react";

const styles = {
    cnt:{
        color:'white',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems:'center',
        width:'90%',
        margin:'0 auto',
    },
    mnBc:{
        width: '17%',
        margin:'0.5vw 0.2vw',
        whiteSpace:'wrap',
    },
    mnimg:{
        height:'200px',
        width:'200px'
    }

}



export default function Main(){

    return(

        <div style={styles.cnt}>
                <div style={styles.mnBc}>
                    <img style={styles.mnimg} src="https://bipbap.ru/wp-content/uploads/2017/09/0_14a7fc_411c2622_XXL.jpg"></img>
                    <div>
                        <h1>Tile 1 heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ipsum eligendi laudantium architecto ratione</p>
                    </div>
                </div>
                <div style={styles.mnBc}>
                    <img style={styles.mnimg} src="https://bipbap.ru/wp-content/uploads/2017/09/0_14a7fc_411c2622_XXL.jpg"></img>
                    <div>
                        <h1>Tile 2 heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ipsum eligendi laudantium architecto ratione</p>
                    </div>
                </div>
                <div style={styles.mnBc}>
                    <img style={styles.mnimg} src="https://bipbap.ru/wp-content/uploads/2017/09/0_14a7fc_411c2622_XXL.jpg"></img>
                    <div>
                        <h1>Tile 3 heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ipsum eligendi laudantium architecto ratione</p>
                    </div>
                </div>


        </div>


    );
}