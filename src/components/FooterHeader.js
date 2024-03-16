import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FooterHeader1 } from "../actions/FooterBottom";
export default function FooterHeader() {
    const dispatch = useDispatch();
    const footerHeaderArray = useSelector((state) => state.Footerbtm.footerHeaderArray);

    //useEffect
    useEffect(() => {
        dispatch(FooterHeader1());

        console.log(footerHeaderArray);
    }, []);


    return (

        <div className="FooterHeader">
            {
                footerHeaderArray.map((item) => (
                    <div className="innerFooterHeaderEle" key={item.id}>
                        <span >{item.title}</span>
                            {item.Description.map((desc, index) => (
                                
                                <li key={index} >{desc}</li>
                            ))}
                 
                    </div>
                    )
                )
                
            }



        </div>
    )
}
