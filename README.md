The sole purpose of this repo is to help on reproducing a Webpack issue.

Clearly `entry.js` is syntatically wrong.

It becomes clear if you have Webpack installed globally and run the cli tool:

    npm i -g webpack
    webpack

But when it's ran as a Node module it doesn't return any errors to the callback:

    node index.js
