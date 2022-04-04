import mongoose from "mongoose";
const { Schema } = mongoose;

const anagraficaSchema = new Schema(
  {
    pubblica: {
      Città: {
        type: String,
        required: true,
      },
      Regione: {
        type: String,
        required: true,
      },
      Familiari: {
        type: String,
        required: true,
      },
    },
    privata: {
      NomeFamiglia: {
        type: String,
        required: true,
      },
      Indirizzo: {
        type: String,
        required: true,
      },
      Telefono: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        required: true,
      },
    },
  },
  { timestaps: true }
);

const Anagrafica = mongoose.model("Anagrafica", anagraficaSchema);
export default Anagrafica;
