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
                    <img style={styles.mnimg} src="apple 13.jpg" alt="iPhone 13 Starlight"></img>
                    <div>
                        <h1>Apple iPhone 13</h1>
                        <p>Model:Apple iPhone 13 128Gb Starlight<br/>
                            Sim: e-SIM, Nano-SIM<br/>
                            Screen resolution: 2532х1170<br/>
                            Color: White
                        </p>
                    </div>
                </div>
                <div style={styles.mnBc}>
                    <img style={styles.mnimg} src="apple 13 pink.jpg" alt = "iPhone 13 pink"></img>
                    <div>
                        <h1>Apple iPhone 13</h1>
                        <p>Model:Apple iPhone 13 256Gb Pink<br/>
                            Sim: e-SIM, Nano-SIM<br/>
                            Screen resolution: 2532х1170<br/>
                            Color: Pink</p>
                    </div>
                </div>
                <div style={styles.mnBc}>
                    <img style={styles.mnimg} src="apple 13 pro.jpg" alt="iPhone 13 pro"></img>
                    <div>
                        <h1>Apple iPhone 13 Pro</h1>
                        <p>Model:Apple iPhone 13 Pro 256Gb Sierra Blue<br/>
                            Sim: e-SIM, Nano-SIM<br/>
                            Screen resolution: 2532х1170<br/>
                            Color: Blue</p>
                    </div>
                </div>


        </div>


    );
}