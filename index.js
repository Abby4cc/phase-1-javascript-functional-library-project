function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    for (let value of values) {
        newArray.push(callback(value));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let value of values) {
        if (predicate(value)) {
            result.push(value);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
}

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item) && !shallow) {
            myFlatten(item, false, newArr);
        } else if (Array.isArray(item) && shallow) {
            newArr.push(...item);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Exporting functions if needed for testing
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    mySortBy,
    myFlatten,
    myKeys,
    myValues
};
