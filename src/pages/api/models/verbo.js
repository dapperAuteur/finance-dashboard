// {
//   "id": 3,
//   "spanish": "aceptar",
//   "english": "to accept",
//   "reflexive": false,
//   "grupo": 0
// }
import mongoose from 'mongoose';

import mongoosePaginate from 'mongoose-paginate';

var verboSchema = new mongoose.Schema({
  spanish: {
    type: String,
    required: true,
  },
  english: {
    type: String,
    default: ""
  },
  reflexive: {
    type: Boolean,
    default: false
  },
  irregular: {
    type: Boolean,
    default: false
  },
  categoría_de_irregular: {
    type: String,
    default: ""
  },
  cambiar_de_irregular: {
    type: String,
    default: ""
  },
  terminación: {
    type: String,
    default: "-ar"
  },
  grupo: {
    type: Number,
    min: 0,
    default: 0
  }
}, {
  timestamps: true
});

verboSchema.plugin(mongoosePaginate);

var Verbo = mongoose.model('Verbo', verboSchema);

module.exports = Verbo;
