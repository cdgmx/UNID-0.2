import express from 'express';
import qrController from '../controllers/qrController';
import apiErrorHandler from "../middlewares/apiErrorHandler";

const router = express.Router()

router.get('/getQr', qrController.getQrInfo);
router.get('/putQr', qrController.putQrInfo);

router.use(apiErrorHandler.errorHandler);

export {router};
