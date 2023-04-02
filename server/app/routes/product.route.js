const product = require('../controllers/product.controller.js');
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../', 'uploads'));
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`.replace(/\\/g, '/');
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

module.exports = (app) => {
  const router = require('express').Router();

  // Add a new route for file uploads
  router.post('/files', upload.single('file'), (req, res) => {
    if (req.file) {
      res.status(200).json({ filePath: req.file.path });
    } else {
      res.status(400).json({ message: 'File upload failed.' });
    }
  });

  router.get('/', product.myFindAll);
  router.post('/', product.myCreate);
  router.get('/:id', product.myFindOne);
  router.delete('/:id', product.myDestroy);
  router.put('/product-edit/:id', product.myUpdate);

  app.use('/api/products', router);
};
