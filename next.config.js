// next.config.js

const withSass = require("@zeit/next-sass");
module.exports = withSass();


module.exports = {
    target: 'serverless',

    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' }
        };
        return paths; //<--this was missing previously
    }
}

