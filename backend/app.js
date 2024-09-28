const express = require('express');
const router = express();
const cors = require('cors')


router.use(express.json());
router.use(cors());



router.listen(4000, () => {
  console.log('Aplicacion ejecutandose ....');
}); 
