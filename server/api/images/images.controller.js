'use strict';

// Azure Storage Account Credentials
process.env['AZURE_STORAGE_ACCOUNT'] = 'clickaroos';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'axddKfkXfxoGI7Tz4hx69KPxH3kiWima8YyOpF49DkRIUbnSopLwcCIsWpDdewgHCT06dX/DEJmEzfCiimz21w==';

var config = require('../../config/main');
var bodyParser = require('body-parser');
// var multiparty = require('multiparty');
var Busboy = require('busboy');
var azure = require('azure');

exports.createImage = function(req, res) {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    file.on('data', function(data) {
      console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
    });
    file.on('end', function() {
      console.log('File [' + fieldname + '] Finished');
    });
  });
  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
    console.log('Field [' + fieldname + ']: value: ' + val);
  });
  busboy.on('finish', function() {
    console.log('Done parsing form!');
    res.writeHead(303, { Connection: 'close', Location: '/' });
    res.end();
  });
  req.pipe(busboy);




  
  // var blobService = azure.createBlobService();

  // blobService.createContainerIfNotExists('img', {publicAccessLevel : 'blob'}, function(error){
  //   if(!error){
  //     console.log('exists and is public');
  //   }
  // });

  // var form = new multiparty.Form();
  // console.log('form', form);
  // var magic = '';

  // form.on('part', function(part) {
  //   if (part.filename) {
  //     // this filename can be whatver you want.
  //     // we'd use the imageID to keep it unique
  //     var filename = part.filename;
  //     var size = part.byteCount;

  //     var onEnd = function(error, response) {
  //       if (error) {
  //         res.send({ grrr: error });
  //       }
  //       else {
  //         console.log('success! ', response);
  //         // TODO: change URL to a variable
  //         console.log('url: ', 'https://clickaroos.blob.core.windows.net/img/'+response.blob);
  //         // TODO: save image url string to DB
  //         magic = 'https://clickaroos.blob.core.windows.net/img/'+response.blob;
  //         // TODO: use res.body in front-end
  //         res.json({ imageUrl: magic });
  //       }
  //     };
  //     // TODO: Change contentTypeHeader to any image type 
  //     blobService.createBlockBlobFromStream('img', filename, part, size, { contentTypeHeader:'image/jpg' }, onEnd);

  //   } else {
  //     form.handlePart(part);
  //   }

  // });

  // form.parse(req);

};