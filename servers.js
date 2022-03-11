//express 모듈을 express 로 부르겠다
const express = require('express');
//변수 app 은 express 함수를 호출한다.
const app = express();


//express는 기본적으로 Get만 지원하기때문에 post로 전송된 값을 출력하기 위해선 
//npm install body-parser 를 설치한후  아래 두줄을 추가해준다.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

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
    res.render('about.html')
});


app.get('/index', (req, res) => {    // http://localhost:3000/index
    res.render('index.html')  //페이지를 렌더해서 보여준다.
});

// app.post('/dodo', (req, res) => {    // post form 으로 전송했기때문에 post form으로 받는다.
//     var name = req.body.name;  //name 변수에 request 요청! body 안에 있는 name 라는 name값을 가져와서 저장.

//     res.send('입력된 값은  :' + name);

// });

app.post('/dodo', (req, res) => {    // post form 으로 전송했기때문에 post form으로 받는다.
    var name = req.body.name;  //name 변수에 request 요청! body 안에 있는 name 라는 name값을 가져와서 저장.

    //formOk.ejs 를 렌더 ejs 파일은 views 폴더 안에 작성해야한다. 
    //{ 'data': name }, (err, html)   = { '넘길 이름', 값 }, (에러, 반환방식) 
    res.render('formOk.ejs', { 'data': name }, (err, html) => {
        if (err) {
            console.log(err); //에러가 발생시 콘솔에 출력
        }
        res.end(html);  //html로 반환한다.
    });


});



