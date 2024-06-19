const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
  {
    //Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.
    nome: {
      type: String,
      required: [true, 'O cliente tem que ter um nome'],
      trim: true,
      maxlength: [50, 'O nome tem que ter menos de 50 caracteres'],
      minlength: [3, 'O nome tem que ter mais de 3 caracteres'],
      unique: true
    },
    cidade: {
      type: mongoose.Schema.ObjectId,
      ref: 'Cidade',
      required: [true, 'O cliente deve ter uma cidade']
    },
    sexo: {
      type: String,
      required: [true, 'O cliente tem que ter um sexo'],
      trim: true
    },
    dataNascimento: {
      type: Date,
      required: [true, 'O cliente tem que ter uma data de nascimento']
    },
    idade: {
      type: Number,
    }
  }
);

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;