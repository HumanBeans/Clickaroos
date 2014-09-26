'use strict';

// Azure Storage Account Credentials
process.env['AZURE_STORAGE_ACCOUNT'] = 'clickaroos';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'axddKfkXfxoGI7Tz4hx69KPxH3kiWima8YyOpF49DkRIUbnSopLwcCIsWpDdewgHCT06dX/DEJmEzfCiimz21w==';

var config = require('../../config/main');
var multiparty = require('multiparty');
var azure = require('azure');

exports.createImage = function(req, res) {
  
  var blobService = azure.createBlobService();

  blobService.createContainerIfNotExists('img', {publicAccessLevel : 'blob'}, function(error){
    if(!error){
      console.log('exists and is public');
    }
  });

  var form = new multiparty.Form();
  var magic = '';

  form.on('part', function(part) {
    if (part.filename) {
      // this filename can be whatver you want.
      // we'd use the imageID to keep it unique
      var filename = part.filename;
      var size = part.byteCount;

      var onEnd = function(error, response) {
        if (error) {
          res.send({ grrr: error });
        }
        else {
          console.log('success! ', response);
          // TODO: change URL to a variable
          console.log('url: ', 'https://clickaroos.blob.core.windows.net/img/'+response.blob);
          // TODO: save image url string to DB
          magic = 'https://clickaroos.blob.core.windows.net/img/'+response.blob;
          // TODO: use res.body in front-end
          res.json({ imageUrl: magic });
        }
      };
      // TODO: Change contentTypeHeader to any image type 
      blobService.createBlockBlobFromStream('img', filename, part, size, { contentTypeHeader:'image/jpg' }, onEnd);

    } else {
      form.handlePart(part);
    }

  });

  form.parse(req);

  // res.send("Got the image" + "<img src=\"" + magic +"\" />");
};