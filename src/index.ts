import * as http from 'http';
http.createServer(() => {}).listen(4000, () => {
  console.log("listening on port 4000");
});
