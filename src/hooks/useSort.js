import { useState } from "react";
import { OrderDirection } from "../enums/OrderDirection";
import { sortArray } from "../utils/sortArray";
import _isEqual from 'lodash/isEqual';
 
 /**
  *
  * @param {Array} initialState
  * @param {Array|String} initialOrderBy
  * @param {'asc'|'desc'} initialOrderDirection
  * @returns {Array}
  */
 export const useSort = (
     initialState = [],
     initialOrderBy = null,
     initialOrderDirection = null,
     initialOptions
 ) => {
    const [state, setState] = useState(sortArray(initialState, initialOrderBy, initialOrderDirection, initialOptions));

    const [orderBy, setOrderBy] = useState(initialOrderBy);
    const [orderDirection, setOrderDirection] = useState(initialOrderDirection);

    const handleSort = (list, listOrderBy, listOrderDirection, listOptions) => {
        let newOrderDirection = listOrderDirection;
        if (!listOrderDirection) {
            if (_isEqual(listOrderBy, orderBy)) {
                newOrderDirection = orderDirection === OrderDirection.desc ? OrderDirection.asc : OrderDirection.desc;
            } else {
                newOrderDirection = OrderDirection.asc;
            }
        }

        setState(sortArray(list, listOrderBy, newOrderDirection, listOptions));
        setOrderBy(listOrderBy);
        setOrderDirection(newOrderDirection);
    }
 
    return [
        state,
        handleSort,
        {
            orderDirection,
            orderBy
        }
    ];
 };