import { dispatch } from "react-redux"

export const FooterBottom = () =>(dispatch)=>{

    fetch("http://localhost:8080/FooterBtm").then((response)=> response.json())
            .then((fotterbtmdata)=>dispatch({
                type:"API Fotter Btm Data",
                payload: fotterbtmdata
            }))
    
    

} 