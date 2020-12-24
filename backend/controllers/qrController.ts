const { v4: uuidv4 } = require('uuid')
const mysql = require('mysql2/promise');
const config = require ('../database/dbconfig');
const handle = require('../handlers/promiseHandler');


import {ErrorAPI} from '../middlewares/errorAPI';
const dbParser = require('../utils/dbParser');

const db =  mysql.createPool(config);


const getQrInfo = async(req: { body: { clientId: any; }; },res: { send: (arg0: any) => any; },next: (arg0: any) => any) => {
        try{
            let parsedData: { qrkey: any; }[]
            const {clientId} = req.body

            if (!clientId) {
                return next(ErrorAPI.BadRequest(`missing required parameters`))
            }
            const sqlSelect = `SELECT qrkey FROM users WHERE clientId = ?` 
            const [data, dataError] = await handle(db.execute(sqlSelect, [clientId]))

            if(dataError) throw dataError

            if(data[0].length !== 0) {
                parsedData = dbParser.parseData(data[0])
                return res.send(parsedData[0].qrkey)
                
            }

            return next(ErrorAPI.NotFound(`No data Found`))
        }
        catch (error){
            console.log(error)
            return next(ErrorAPI.Internal(`${error}`))
        }   
}

const putQrInfo = async(req: { body: { clientId: any; }; },res: { send: (arg0: any) => any; },next: (arg0: any) => any) => {
    try{
        const {clientId} = req.body
        // future bug, diff device to refresh qr
        if (!clientId) {
            console.log("Bad Request")
            return next(ErrorAPI.BadRequest(`missing required parameters`))
        }

        const qrkey = uuidv4()

        const sqlUpdate = `UPDATE users SET qrkey = ? WHERE clientId = ?` 
        const [response, dataError] = await handle(db.execute(sqlUpdate, [qrkey,clientId]))

        if(dataError) throw dataError
       

        if(response[0].affectedRows !== 0) {
            return res.send(response[0].info)
        }

        return next(ErrorAPI.NotFound(`No data Found`))
     
    }
    catch (error){
        console.log(error)
        return next(ErrorAPI.Internal(`${error}`))
    }   
}



export default {
    getQrInfo,
    putQrInfo,
    
}


