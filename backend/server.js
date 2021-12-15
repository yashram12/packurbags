import app from './index.js'

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});


