// node.js 에서 쓰는 import 같은 개념
const res = require('express/lib/response');
var mysql = require('mysql');

//connection 변수에 mysql 안에 있는 .createConnerction 함수 호출 ({객체})
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'ppic'
});

//커넥션 연결
connection.connect();

//쿼리 전송
connection.query('SELECT no from board', function (error, results, fields) {

    res.send(JSON.stringify(results));
    console.log('results', results);

    connection.release();


    if (error) throw error;



});
//커넥션 닫기
// connection.end(); 