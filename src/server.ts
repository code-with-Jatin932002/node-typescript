import app from './app';
import { connectDB } from './database/connection';
import { config } from './config';

(async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
})();