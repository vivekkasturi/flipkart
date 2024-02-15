export const FooterBottom = () =>(dispatch)=>{

    fetch("http://localhost:8080/FooterBtm").then((resp)=>resp.json()).then((result)=>dispatch({
        type:"API Fotter Btm Data",
        payload: result
    }))

 } 
