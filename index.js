import express from 'express';
import path from 'path';
import { cwd } from 'process';

const app = express();
const port = 2000;

app.use(express.static('public'))
app.get("/", (req, res)=>{

    // var options = {
    //     root: path.join(cwd(),'index.html')
    // };
     
    res.sendFile(path.join(cwd(),'index.html')) //cwd() riturna la current directory
});

app.listen(port, ()=>{
    console.log('listening on '+port)
})