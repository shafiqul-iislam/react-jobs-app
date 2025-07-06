import React from 'react';
import { ClipLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "100px auto",
}
const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color='#338ca'
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner