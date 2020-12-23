const express = require('express')
const qrController = require('../controllers/qrController')
const apiErrorHandler = require("../middlewares/apiErrorHandler")

const router = express.Router()

router.get('/getQr', qrController.getQrInfo);
router.get('/putQr', qrController.putQrInfo);

router.use(apiErrorHandler);

export {router};
