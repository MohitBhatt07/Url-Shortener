const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId : {
    type : String,
    required : true,
    unique : true,
  },
  redirectUrl : {
    type : String,
    required : true,
  },
  visitHistory : [{timestamps : {type : Number}}],
  generatedBy  : {
    type: mongoose.SchemaTypes.Mixed,
    required : true
    
  }
    
},
{
  timestamps : true
});

urlSchema.methods.deleteEntry = function (callback) {
  return this.model('url').deleteOne({ _id: this._id }, callback);
};

const URL = mongoose.model("url",urlSchema);

module.exports = URL;