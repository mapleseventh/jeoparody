# jeoparody

For Windows Developer:

If you are having a hard time run nodemon and webpack-dev-server at the same time, you can install the npm `concurrently` package. Go to your package.json file and modifies within your 'scripts' in this way: 

    ''scripts': {
        ...
        "dev": "concurrently \"webpack-dev-server\" \"nodemon server/server.js\"",
        ...
    }

Hope that makes Windows machine developers life easier.
