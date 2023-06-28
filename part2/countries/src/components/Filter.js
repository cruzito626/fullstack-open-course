import React from 'react';

const Filter = ({value, onChange}) => {

    const handlerOnChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div>
            find countries <input value={value} onChange={handlerOnChange}/>
        </div>
    );
};

export default Filter;