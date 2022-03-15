import logo from './logo.svg';
import { useState } from 'react';
import Modal2 from './Modal';

import './App.css';

function App() {


  //선언해준 useState 를 불러주면 결과값이 [a,b] Array 형식으로 남게된다.
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집',
    '파이썬 독학']);

  function 제목바꾸기() {


    // [...배열명] 으로 하는것은 deep copy 라고 해서 값공유가 되지않고 독립적인 값을가진다.
    var newArray = [...글제목];
    //배열의 0번째 데이터를 '여자코트추천으로 바꾼다'
    newArray[0] = '여자코트추천';

    //글제목변경 함수안에 새롭게 변경된 배열을 넣어준다.
    글제목변경(newArray);
  }

  function 정렬() {
    var newArray = [...글제목];
    newArray = ['파이썬독학', '남자코트추천', '강남우동맛집'];
    글제목변경(newArray);
  }
  let [count, countUp] = useState(0);


  let post = " 강남 고기 맛집";

  let st = { color: 'orange', fontSize: '20px' };

  return (
    <div className="App">
      <div className="black-nav">

        {/* 스타일도 변수로 적용가능하다 */}
        <div style={st}>개발 Blog</div>
      </div>
      <button onClick={() => 정렬()}>정렬</button>

      <div className="list">
        {/* 제목 */}
        <h3>{글제목[0]}<span onClick={() => { countUp(count + 1) }}>👍</span>{count}</h3>
        <button onClick={() => { 제목바꾸기() }}>변경</button>

        <p>2월17일 발행</p>
        <hr />
      </div>

      <div className="list">
        {/* 제목 */}
        <h3>{글제목[1]}<span onClick={() => { countUp(count + 1) }}>👍</span>{count}</h3>
        <button onClick={() => { 제목바꾸기() }}>변경</button>
        <p>2월17일 발행</p>
        <hr />
      </div>

      <div className="list">
        {/* 제목 */}
        <h3>{글제목[2]}<span onClick={() => { countUp(count + 1) }}>👍</span>{count}</h3>
        <button onClick={() => { 제목바꾸기() }}>변경</button>
        <p>2월17일 발행</p>
        <hr />
      </div>

      <Modal />
      <Modal2 />

    </div >
  );
}


function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

  )
}

export default App;
