import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FooterBottom, FooterHeader } from '../actions/FooterBottom';

export default function Footerbtm() {

    const dispatch = useDispatch();
    const footerbtmArray = useSelector((state) => state.Footerbtm.footerbtmarray)

    useEffect(() => { dispatch(FooterBottom()) }, []);
   
    console.log(footerbtmArray);
    return (
        <div className="footerbtm">
 

<span>{footerbtmArray[0] } &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {footerbtmArray[1]} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {footerbtmArray[2]}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {footerbtmArray[3]} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {footerbtmArray[4] }</span>


        </div>
    )
}
