import _isString from 'lodash/isString';
import _get from 'lodash/get';
import _orderBy from 'lodash/orderBy';
import _has from 'lodash/has';
import _isBoolean from 'lodash/isBoolean';

import { sortArrayValidator } from './validator';

/**
 * Options 
 * @typedef {Object} Options
 * @property {boolean} disableCaseSensitive=true
 */

/**
 * @param {Array} list
 * @param {String|Array} orderBy
 * @param {'asc'|'desc'} orderDirection
 * @param {Options} options
 * @returns {Array} - Sorted Array
 */
export const sortArray = (
    list,
    orderBy,
    orderDirection,
    options = {
        disableCaseSensitive: true
    }
) => {
    if (orderBy && orderDirection) {
        sortArrayValidator(list, orderBy, orderDirection, options);

        const additionalOptions = options ? {...options} : {};

        if (_has(additionalOptions, 'disableCaseSensitive')) {
            if (!_isBoolean(additionalOptions.disableCaseSensitive)) {
                throw new Error('disableCaseSensitive property can be only boolean');
            }
        } else {
            additionalOptions.disableCaseSensitive = true;
        }

        const orderByList = _isString(orderBy) ? [orderBy] : orderBy;

        let finalOrderByList = orderByList;

        if (additionalOptions.disableCaseSensitive) {
            finalOrderByList = orderByList.map(orderBy => {
                return (i) => {
                    const item = _get(i, orderBy);
                    return _isString(item) ? item.toLowerCase() : item
                }
            });
        }

        return _orderBy(list, finalOrderByList, orderDirection);
    }
    return list;
}