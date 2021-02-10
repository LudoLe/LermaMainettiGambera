import React from 'react';
import { useHistory } from "react-router-dom";

const GoBackButton = () => {

    const history = useHistory();

    return (
        <button onClick={() => { history.goBack() }}> Go back </button>
    );
}

export default GoBackButton;