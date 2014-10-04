'use strict';

// Azure Storage Account Credentials
process.env['AZURE_STORAGE_ACCOUNT'] = 'clickaroos';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'axddKfkXfxoGI7Tz4hx69KPxH3kiWima8YyOpF49DkRIUbnSopLwcCIsWpDdewgHCT06dX/DEJmEzfCiimz21w==';

var config = require('../../config/main');
var bodyParser = require('body-parser');
var multiparty = require('multiparty');
var azure = require('azure');

exports.createImage = function(req, res) {
  console.log('req.user._id', req.user._id);

  var userId = req.user._id;
  var blobService = azure.createBlobService();
  var form = new multiparty.Form();
  var magic = '';

  blobService.createContainerIfNotExists('img', {publicAccessLevel : 'blob'}, function(error){
    if(!error){
      console.log('exists and is public');
    }
  });

  form.on('part', function(part) {

    // TODO: Add userid/campaignid/filename
    var filename = 'user/'+userId+'/'+part.filename;
    var size = part.byteCount;
    var contentType = part.headers['content-type'];

    var onEnd = function(error, response) {

      if (error) {
        res.send({ grrr: error });
        return;
      }

      // console.log('success! ', response);

      // console.log('url: ', 'http://clickaroos.blob.core.windows.net/img/'+response.blob);
      // save image url string to DB
      // TODO: use res.body in front-end
      magic = 'http://clickaroos.blob.core.windows.net/img/'+response.blob;
      res.json({ imageUrl: magic });

    };

    blobService.createBlockBlobFromStream('img', filename, part, size, { contentTypeHeader: contentType }, onEnd);

  });

  form.parse(req);

};