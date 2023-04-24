var PDF = require('html-pdf')
var fs = require('fs')


fs.readFile('index.html','utf-8',function(err,data) {
    var content = `'${data}'`
    PDF.create(content).toFile('test.pdf',function(err) {})
})