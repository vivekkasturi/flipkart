const initalState = {

    footerbtmarray: [],
    footerHeaderArray:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {

    if (action.type === "API Fotter Btm Data") {


        return {
            ...state,
            footerbtmarray: action.payload

        }

    }

 else if(action.type === "API Fotter Header Data") {


    return {
        ...state,
        footerHeaderArray: action.payload

    }

}

return state

}