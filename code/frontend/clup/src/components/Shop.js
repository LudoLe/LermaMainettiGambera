import React, { useState, useEffect } from 'react';
import { WaveLoading } from 'react-loadingg';
import history from '../utils/history.js';
import { axiosGET } from '../utils/httpRequest.js';

const Shop = (props) => {

    const [state, setState] = useState({
        isLoadedShop: false,
        shop: null,
        shopId: props.match.params.id
    });

    //TODO: i should fetch shop shift here, or maybe the server should already send me them, i'm talking to you @LudoLe >:|


    //fetch shop info
    useEffect(() => {
        const onOk = (response) => {
            setState(prevState => {
                return {
                    ...prevState,
                    isLoadedShop: true,
                    shop: response.data
                }
            });
        }
        axiosGET("SSW", ("/shopDetail/" + state.shopId), {}, onOk, null, null, true, false, true);
    }, [state.shopId]);

    const handleBack = () => {
        history.goBack();
    }

    const handleEnqueue = () => {
        //TODO:
    }

    return (
        <div className="flexColumnCenter">
            <button onClick={handleBack}> Go back </button>
            {state.isLoadedShop ?
                <div className="flexColumnCenter">
                    {/* TODO: display shop info */}
                    <button onClick={handleEnqueue}> Dequeue </button>
                </div>
                :
                <WaveLoading />
            }
        </div>
    );
}

export default Shop;