//express 모듈을 express 로 부르겠다
const express = require('express');
//변수 app 은 express 함수를 호출한다.
const app = express();

//server 변수에 app.listen(포트번호,콜백함수) 
const server = app.listen(3000, () => {
    console.log("서버가 접속되었습니다");
});

//렌더링을 할 폴더 설정   __dirname 은 현재 경로 를 의미한다. view 폴더의 폴더명은 반드시 views 로 설정
app.set('views', __dirname + '/views');

//보여줄 템플릿 엔진은 'ejs'를 사용할것이다 . ejs는 JSP 와 비슷하다.
//ejs는 html안에서 자바스크립트 문법을 같이 사용할수 있게 해준다.
app.set('view engine', 'ejs');

//app에 엔진을 셋팅 *npm install ejs --save 설치필요
app.engine('html', require('ejs').renderFile);


//get방식으로 페이지를 받는다.
app.get('/', (req, res) => {
    res.send("안녕하세요");  //response.send 로 페이지를 보낸다.
});

app.get('/about', (req, res) => {    // http://localhost:3000/about
    res.send("about 페이지");  //response.send 로 페이지를 보낸다.
});


app.get('/index', (req, res) => {    // http://localhost:3000/index
    res.render('index.html')  //페이지를 렌더해서 보여준다.
});



