import React from 'react';
import PropTypes from 'prop-types';

export default function Row({ id, type, actual, meta, increment, decrement }) {
    return (
        <>
            <tr>
                <td>{type}</td>
                <td>
                    <button onClick={ () => decrement(id) }>
                        -
                    </button>
                    {actual}
                    <button onClick={ () => increment(id) }>
                        +
                    </button>
                </td>
                <td>{meta}</td>
            </tr>
        </>
    )
}

Row.propTypes = {
    type: PropTypes.string.isRequired,
    actual: PropTypes.number.isRequired,
    meta: PropTypes.number.isRequired
}

Row.defaultProps = {
    type: 'Alimento 99',
    actual: 0,
    meta: 99,
}