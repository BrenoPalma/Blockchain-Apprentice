const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const cidadeSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'A cidade tem que ter um nome'],
      unique: true,
      trim: true,
      maxlength: [30, 'O nome tem que ter menos de 30 caracteres'],
      minlength: [3, 'O nome tem que ter mais de 3 caracteres']
    },
    slug: String,
    estado:{
        type: String,
        required: [true, 'A cidade tem que ter um estado'],
        trim: true,
        maxlength: [2, 'O estado tem que ter 2 caracteres'],
        minlength: [2, 'O estado tem que ter 2 caracteres']
        }
    },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
cidadeSchema.pre('save', function(next) {
  this.slug = slugify(this.nome, { lower: true });
  next();
});

const Cidade = mongoose.model('Cidade', cidadeSchema);

module.exports = Cidade;
