const { v4: uuidv4 } = require('uuid')
import mysql from 'mysql2/promise';
import config from '../database/dbconfig';
import handle from '../handlers/promiseHandler';


const ApiError = require('../middlewares/errorAPI')
const dbParser = require('../utils/dbParser');

const db =  mysql.createPool(config);


const getQrInfo = async(req,res,next) => {
        try{
            let parsedData
            const {clientId} = req.body
            if (!clientId) {
                return next(ApiError.BadRequest(`missing required parameters`))
            }
            const sqlSelect = `SELECT qrkey FROM users WHERE clientId = ?` 
            const [data, dataError] = await handle(db.execute(sqlSelect, [clientId]))

            if(dataError) throw dataError

            if(data[0].length !== 0) {
                parsedData = dbParser.parseData(data[0])
                return res.send(parsedData[0].qrkey)
                
            }

            return next(ApiError.NotFound(`No data Found`))
        }
        catch (error){
            console.log(error)
            return next(ApiError.Internal(`${error}`))
        }   
}

const putQrInfo = async(req,res,next) => {
    try{
        const {clientId} = req.body
        //future bug, diff device to refresh qr
        if (!clientId) {
            return next(ApiError.BadRequest(`missing required parameters`))
        }

        const qrkey = uuidv4()

        const sqlUpdate = `UPDATE users SET qrkey = ? WHERE clientId = ?` 
        const [response, dataError] = await handle(db.execute(sqlUpdate, [qrkey,clientId]))

        if(dataError) throw dataError
       

        if(response[0].affectedRows !== 0) {
            return res.send(response[0].info)
        }

        return next(ApiError.NotFound(`No data Found`))
     
    }
    catch (error){
        console.log(error)
        return next(ApiError.Internal(`${error}`))
    }   
}

<<<<<<< HEAD:backend/controllers/qrController.ts
export = getQrInfo
     
=======
module.exports = {
    getQrInfo,
    putQrInfo,
    
}

>>>>>>> parent of 2cff4a0... converted to TS file:backend/controllers/qrController.js

