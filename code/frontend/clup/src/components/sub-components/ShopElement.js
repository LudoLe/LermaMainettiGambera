import React from 'react';
import { useHistory } from "react-router-dom";
import shopImg from '../../images/shop.png';

const ShopElement = (props) => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push('/Shop/' + props.shop.id);
    }

    return (

        <div className="flexColumnCenter card" onClick={handleOnClick}>
            <div className="flexRowCenter">
                <div>
                    <img
                        className="shopImg"
                        src={shopImg}
                        alt="Account" />
                </div>
                <div className="flexColumnCenter">
                    <div className="bold"> {props.shop.name} </div>
                    <button className="smallButton">More info</button>
                    <div> {props.shop.position} </div>
                </div>
            </div>
        </div>

    );
}

export default ShopElement;