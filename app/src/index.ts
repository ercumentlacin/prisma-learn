import { app } from './app';
import { connectPrisma } from './utils/connectPrisma';

const PORT = process.env.PORT || 4000;

connectPrisma()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
