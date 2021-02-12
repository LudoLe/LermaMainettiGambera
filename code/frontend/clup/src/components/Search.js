import React from 'react';
import { useHistory } from "react-router-dom";
import Navigation from './sub-components/Navigation';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Search = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("function not availble...");
    }

    const handleAllShops = () => {
        history.push("/Shops");
    }

    return (
        <div className="flexColumnCenter">

            <Navigation goBack={true} goHome={false} />

            <div className="width80 flexRowCenter">
                <TextField id="standard-basic" label="Search a shop" fullWidth />
            </div>


            <div className="width80 topSpace">
                <Button onClick={handleAllShops} size="medium" disabled variant="contained" color="secondary">Nearby</Button>
            </div>

            <div className="width80 topSpace">
                <Button onClick={handleAllShops} size="medium" variant="contained" color="secondary">All shops</Button>
            </div>
        </div>
    );
}

export default Search;