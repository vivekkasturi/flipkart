const initalState = {

    footerbtmarray: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {

    if (action.type === "API Fotter Btm Data") {


        return {
            ...state,
            footerbtmarray: action.payload

        }

    }
    console.log(state);
    return state;


}