const path = require('path');
const fs = require('fs-extra');
// Sync:
try {
    fs.copySync(
        path.resolve(__dirname, '../src/base/css/bulma.scss'),
        path.resolve(__dirname, '../lib/base/css/bulma.scss')
    )
} catch (err) {
    console.error(err)
}