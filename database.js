const pgp = require('pg-promise')();
var db = pgp('postgres://mqvvplpgwkwaww:bbe283a5d4ce86d696c0794bfca51f66630f8553225b83bff3880b169880250a@ec2-54-243-147-162.compute-1.amazonaws.com:5432/ddhq6akm6qbbtp?ssl=true');

function getAllCategories(req, res) {
    db.any('select * from categories')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL categories'
                });
        })

        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


function getCategoryByID(req, res) {
    db.any('select * from categories where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved categories id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved categories id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}







//export file ทำให้เป็น public คนอื่นสามารถเรียกใช้ได้
module.exports = {
    //Categories
    getAllCategories,
    getCategoryByID,
    
    
};