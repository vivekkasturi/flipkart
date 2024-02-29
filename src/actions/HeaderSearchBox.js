export const HeaderSearchBox = () => (dispatch) => {

    fetch("http://localhost:8080/products").then((resp) => resp.json()).then((result) => dispatch({
        type: "SearchBox Data",
        payload: result
    }))

}
