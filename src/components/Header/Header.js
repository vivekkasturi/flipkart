import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { HeaderSearchBox } from '../../actions/HeaderSearchBox';
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  const productsapiData = useSelector((state) => state.SearchBox.products)
  const [inputDisplay, setInputDisplay] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderSearchBox());
  }, []);

  const SearchBox = (event) => {

    console.log("testing", event.target.value);

    if (event.target.value != null) {
      productsapiData.find((pd) => {
        if (pd.title === event.target.value) {
          setDropdown(true);
          setInputDisplay(pd.price);
          console.log("a", inputDisplay);
          return setInputDisplay(pd.price)
        }

        // setDropdown(false);
      })
    }
    if (event.target.value === "") {
      setDropdown(false);
      setInputDisplay(" ");
    }
    console.log("d", productsapiData, inputDisplay);
  }


  return (
    <div className='Header'>
      <div className='BrandName'>
        <h6>Flipkart</h6>
      </div>
      <div className='SearchBox'>

        <span> <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" className='MagnifyingIcon' /> <input type='text' placeholder='Search for Produts, Brands and more' onChange={(event) => SearchBox(event)} /></span>
        {dropdown && dropdown ? (
          <div className='Dropdown'>

            <div className='dropdown-content'>
              <a href='https://google'> {inputDisplay}</a>

            </div>

          </div>) : " "}
      </div>
      <div className='LoginIcon'>

        {/* <span> <FontAwesomeIcon icon="fa-regular fa-circle-user" size='lg' /> Login</span> */}
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon="fa-regular fa-circle-user" size='lg' /> Login
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="https://google.com">New Customer? &nbsp;&nbsp;<strong>Sign up</strong></a></li>
            <hr />
            <li><a class="dropdown-item" href="https://google.com">Login</a></li>
            <li><a class="dropdown-item" href="https://google.com">My Orders</a></li>
            <li><a class="dropdown-item" href="https://google.com">Whishlist</a></li>
          </ul>
        </div>
      </div>
      <div className='CartIcon'>
        <span><FontAwesomeIcon icon="fa-solid fa-cart-shopping" size='lg' />Cart</span>
      </div>
      <div className='SellerIcon'>
        <span><FontAwesomeIcon icon="fa-solid fa-dumpster-fire" size='lg' />Beacome a Seller</span>
      </div>
      <div className='DotsIcon'>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <span >...</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="https://google.com">Notifications</a></li>
            <li><a class="dropdown-item" href="https://google.com">24 * 7 Customer Care</a></li>
            <li><a class="dropdown-item" href="https://google.com">Help Center</a></li>
          </ul>
        </div>
      </div>


    </div>


  )
}
