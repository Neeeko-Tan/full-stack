module.exports = {
    app: [
        {
            name:'posts-app',
            script: './src/index.js',
            env_production: {
                NODE_ENV: 'production',
                PORT: 4444
            }
        }
    ]
};