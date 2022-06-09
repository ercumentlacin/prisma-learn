import { app } from './app';

import { connectPrisma } from './utils/connectPrisma';

const PORT = process.env.PORT || 4000;

const bootstap = () => {
  (async () => {
    try {
      await connectPrisma();
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  })();
};
export default bootstap;
