const express = require('express');
const storeController = require('./../controllers/storeController');
const { catchErrors } = require('./../handlers/errorHandlers');

const router = express.Router();

router.get('/', storeController.homePage);
// show all stores on stores page
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
// router.post('/add', catchErrors(storeController.createStore));

router.post(
  '/add',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore),
);

router.get('/stores/:id/edit', catchErrors(storeController.editStore));
router.post('/add/:id', catchErrors(storeController.updateStore));

module.exports = router;
