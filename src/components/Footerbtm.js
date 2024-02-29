import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FooterBottom } from '../actions/FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footerbtm() {
    const dispatch = useDispatch();
    const footerbtmArray = useSelector((state) => state.Footerbtm.footerbtmarray);

    useEffect(() => {
        dispatch(FooterBottom());
    }, []);

    console.log(footerbtmArray);

    return (
        <div className="footerbtm">
            <div className="footerbtm-content">
                {footerbtmArray.map((data, index) => (
                    <div key={index} className='footerbtmarray'>
                        <FontAwesomeIcon icon="fa-regular fa-star" size="sm" />
                        <a href={data.url}> {data.title}</a>
                    </div>
                ))}
            </div>
            <div className='footerCardIcon'>
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-mastercard" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-mastercard" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
                <FontAwesomeIcon className="footer-icon" icon="fa-brands fa-cc-visa" />
            </div>

        </div>
    );
}
