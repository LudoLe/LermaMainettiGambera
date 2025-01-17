import React, { useEffect, useState } from 'react';
import Account from './sub-components/Account';
import { axiosGET } from '../utils/httpRequest.js';
import ShopsListManager from './sub-components/ShopsListManager';
import GoToButton from './sub-components/GoToButton';


const HomeManager = () => {

    const [state, setState] = useState({
        isLoadedShops: false,
        isLoadedAccount: false,
        account: null,
        shops: null
    });

    //fetch shops info
    useEffect(() => {
        const onOk = (response) => {
            setState(prevState => {
                return {
                    ...prevState,
                    isLoadedShops: true,
                    shops: response.data
                }
            });
        }
        axiosGET("SSW", "/shops", {}, onOk, null, null, true, false, true);
    }, []);

    //fetch account info
    useEffect(() => {
        const onOk = (response) => {
            setState(prevState => {
                return {
                    ...prevState,
                    isLoadedAccount: true,
                    account: response.data
                }
            });
        }
        axiosGET("AMW", "/userinfo", {}, onOk, null, null, true, false, true);
    }, []);

    return (
        <div className="flexColumnCenter">
            <Account isLoaded={state.isLoadedAccount} account={state.account} />
            <div className="flexRowCenter width80 topSpace">
                <GoToButton to="/TimeLine" content="Time Line" />
                <GoToButton to="/NewShop" content="New shop" />
            </div>
            <ShopsListManager isLoaded={state.isLoadedShops} shops={state.shops} />
        </div>
    );
}

export default HomeManager;