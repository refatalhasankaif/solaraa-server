import app from './app';
import { envVariables } from './config/envVariables';

const bootstrap = async () => {
    try {
        app.listen(envVariables.PORT, () => {
            console.log(`Server is running on port ${envVariables.PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server', error);
    }
};

bootstrap();