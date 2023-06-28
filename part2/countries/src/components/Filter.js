import React, {useState} from 'react';

const Filter = ({onChange}) => {
    const [filter, setFilter] = useState("");

    const handlerOnChange = (event) => {
        const newFilter = event.target.value;
        onChange(newFilter);
        setFilter(newFilter);
    }

    return (
        <div>
            find countries <input value={filter} onChange={handlerOnChange}/>
        </div>
    );
};

export default Filter;