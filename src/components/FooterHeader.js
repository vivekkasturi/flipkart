import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FooterHeader1 } from "../actions/FooterBottom";
export default function FooterHeader() {
    const dispatch = useDispatch();
    const footerHeaderArray = useSelector((state) => state.Footerbtm.footerHeaderArray);

//useEffect
useEffect(()=>{
    dispatch(FooterHeader1());

    console.log(footerHeaderArray);
}, []);
 

    return (

        <div className="FooterHeader">
            {
                footerHeaderArray.map((data, index) => {

                    return (

                        <div className="FooterHeader_inner">
                          
                           {data.Description.map((data)=>{ return(
                            <div>
                                <li>{data}</li>
                                </div>
                           )})}

                        </div>
                    )
                })
            }
             {
                footerHeaderArray.map((data, index) => {

                    return (

                        <div className="FooterHeader_inner">
                          
                           {data.Description.map((data)=>{ return(
                            <div>
                                <li>{data}</li>
                                </div>
                           )})}

                        </div>
                    )
                })
            }
        </div>
    )
}