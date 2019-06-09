const flatten = (array) => {
    return array.reduce((a, c) => {
        return Array.isArray(c) ? a.concat(flatten(c)) : a.concat(c);
    }, []);
};