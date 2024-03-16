export const FooterBottom = () =>(dispatch)=>{

    fetch("http://localhost:8080/FooterBtm").then((resp)=>resp.json()).then((result)=>dispatch({
        type:"API Fotter Btm Data",
        payload: result
    }))

 } 
 export const FooterHeader1 = () =>(dispatch)=>{

    fetch("http://localhost:8080/FooterHeader").then((resp)=>resp.json()).then((result)=>dispatch({
        type:"API Fotter Header Data",
        payload: result
    }))
}