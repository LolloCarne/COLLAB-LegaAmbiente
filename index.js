import express from 'express';
import path from 'path';
import { cwd } from 'process';

const app = express();
const port = 2000;
let anagrafiche=[];

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'))
app.get("/", (req, res)=>{

    // var options = {
    //     root: path.join(cwd(),'index.html')
    // };
     
    res.sendFile(path.join(cwd(),'index.html')) //cwd() riturna la current directory
});

app.post('/anagrafica', (req,res)=>{

let anagrafica={
    pubblica:{
        "Città":req.body.Città,
        "Regione":req.body.Regione,
        "Numero componenti familiari": req.body.familiari

    },
    privata:{
        "Nome Famiglia": req.body.Nome,
        "Indirizzo": req.body.Indirizzo,
        "Telefono": req.body.Telefono,
        "E-mail": req.body.Email

    }
}
anagrafiche.push(anagrafica)
console.log(anagrafiche)

});

/*let domande = [];
domande.push({
    domanda: "testo domanda",
    ripsoste: []
})

let anagrafica=[];
anagrafica.push({
pritvata:{
    nome:""
},
pubblica:{

}    
})*/

app.listen(port, ()=>{
    console.log('listening on '+port)
})