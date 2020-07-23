import { app } from './app';

const start = async () => {
  console.log('Starting up...');
  app.listen(3000, () => {
    console.log('running on port 3000!!');
  });
};

start();
