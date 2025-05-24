import express from 'express';

import { serverConfig, Logger } from './config';
import apiRoutes from './routes';

const app = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, () => {
    console.log(`Successfully started the server on PORT: ${serverConfig.PORT}`);
})