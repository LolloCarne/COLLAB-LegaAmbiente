import express from "express";
import path from "path";
import { cwd } from "process";
import mongoose from "mongoose";
import Anagrafica from "./models/anagrafica.js";

const app = express();
const port = 2000;
let anagrafiche = [];

mongoose
  .connect("mongodb://localhost:27017/questionario")
  .then((result) => console.log("connect to db"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
  // var options = {
  //     root: path.join(cwd(),'index.html')
  // };

  res.sendFile(path.join(cwd(), "index.html")); //cwd() riturna la current directory
});

app.get("/Domande", (req, res) => {
  // var options = {
  //     root: path.join(cwd(),'index.html')
  // };

  res.sendFile(path.join(cwd(), "domande.html")); //cwd() riturna la current directory
});

app.post("/anagrafica", (req, res) => {
  const anagrafica = new Anagrafica({
    pubblica: {
      Città: req.body.Città,
      Regione: req.body.Regione,
      Familiari: req.body.familiari,
    },
    privata: {
      NomeFamiglia: req.body.Nome,
      Indirizzo: req.body.Indirizzo,
      Telefono: req.body.Telefono,
      Email: req.body.Email,
    },
  });

  anagrafica.save().then((result) => {
    res.send(result);
  });
  anagrafiche.push(anagrafica);
  console.log(anagrafiche);
});

app.post("/send", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log("listening on " + port);
});
