'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dnaSchema = Schema({
    count_mutant_dna: Number,
    count_human_dna: Number,
    ratio: Number
});

module.exports = mongoose.model('dna', dnaSchema);