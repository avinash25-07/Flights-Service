const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
// const exec = require('./controllers')

// // const aboutController = require('./controllers/about-controller');
// // const homeController = require('./controllers/home-controller');
// //or
// const { AbortController, HomeControllerr } = require('./controllers');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`port strted running on port: ${ServerConfig.PORT}`);
})