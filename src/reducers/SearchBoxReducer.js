const initalState = {

    products: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action)  {

    if(action.type === "SearchBox Data"){


        return{

            ...state,
            products: action.payload
        }
    }
    return state;
}