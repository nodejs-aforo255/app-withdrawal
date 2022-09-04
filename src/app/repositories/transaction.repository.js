const mysql = require('mysql2');
const config = require('../config/environments')

const con = mysql.createConnection(config.DB)

const transactionRepository = {
    addTransaction: async (amount, accountId) => {
        const sql = `INSERT INTO transaction(amount, type, creationdate, accountid) VALUES(${amount}, 'withdrawal', NOW(), ${accountId});`
        const response = await new Promise((resolve, reject) =>{
            con.query(sql, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
        if(response.insertId > 0)
            return { status: 'sucess', message: '1 record inserted type withdrawal, ID: ' + response.insertId, id: response.insertId}       
        else 
            return { status: 'failure', message: 'Registration failed', id: 0}    
    }
}

module.exports = transactionRepository;