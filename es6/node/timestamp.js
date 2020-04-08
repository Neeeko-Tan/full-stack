let startTime;
function appStart() {
    startTime = new Date();
    console.log('app started')
}

function timestamp() {
    console.log(`${new Date() - startTime} ms passed`);
}

console.log(__dirname, __filename);

module.exports = { appStart, timestamp }