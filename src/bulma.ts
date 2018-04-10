const bulma = require('bulma/bulma.sass');

function toCamelCase(str: string) {
    // Lower cases the string
    return str.toLowerCase()
    // Replaces any - or _ characters with a space
        .replace(/[-_]+/g, ' ')
        // Removes any non alphanumeric characters
        .replace(/[^\w\s]/g, '')
        // Uppercases the first character in each group immediately following a space
        // (delimited by spaces)
        .replace(/ (.)/g, ($1) => {
            return $1.toUpperCase();
        })
        // Removes spaces
        .replace(/ /g, '');
}

for (const key in bulma) {
    if (!bulma.hasOwnProperty(key)) {
        continue;
    }
    if (key.search(/[-_]+/g) === -1) {
        continue;
    }
    const camelCaseKey = toCamelCase(key);
    if (!bulma[camelCaseKey]) {
        bulma[camelCaseKey] = bulma[key];
    }
}

export default bulma;
