# js

- 이전에 사용한 코드를 입력하고 사용하고 싶으면 console에서 위에 방향키를 누르면 된다

## 1.  숫자와 문자

**숫자 (number)**

- 정수:0,1,2,3,-1,-2      /       실수:0.1,0.2,0.3,0.5

- ```js
   alert(1 + 5);    //6 숫자 경고창이 뜬다
  ```

- ```js
  Math.pow(3,2);    //3의2승인 제곱근으로 숫자 9가나온다
  ```

- ```js
  Math.round(10.6)  //10.6의 반올림으로 숫자 11이 나온다
  ```

- ```js
  Math.ceil(12.1)   //12.1의 가장 가까운 위의 정수로 올려줘 숫자 13이된다
  ```

- ```js
  Math.floor(15.6)  //15.6의 가장 가까운 아래 정수로 내려줘 15가된다
  ```

- ```js
  Math.sqrt(9)     //9의 제곱근의 값으로 숫자 3이나온다
  ```

- ```js
  Math.random()   //랜덤한 숫자를 원할때 사용
  ```

- ```js
  Math.round(10*Math.random()) 
  ```

  - 랜덤한숫자에 10 곱하기를 하면 10보다 아래인 숫자가 나오고 거기에 반올림을 하면 

    10미만의 숫자가 랜덤으로 나온다.

    

**문자 (string)**

"문자"  ,  '문자'   문자 앞뒤로 똑같은 기호를 써줘야된다

- ```js
  alert("hye")      //hye가 출력된다
  ```

- ```js
  alert('hye')     //hye가 출력된다
  ```

- ```js
  alert('hye")    //Uncaught SyntaxError: Invalid or unexpected token 오류
  ```

- ```js
  alert('hello min\'s nice meet you') 
  ```

  - 문자안에 똑같은 기호를 사용해야되면 그 기호앞에 역슬래시 `\`를 넣어준다

    그러면 역슬래시 뒤에 오는 정보는 방해받지 않고 원하는 문장이 출력된다

     `hello min's nice meet you`

**typeof 연산자**

- ```js
  typeof 1   //'number' 숫자라는 값이 나온다
  ```

- ```js
  typeof "1"  //'string'  문자라는 값이 나온다
  ```

**문자에 대한 명령**

- ```JS
  alert("coding\neverybody");
  ```

  - coding

    everybody  `\n` 이걸로 인해  줄바꿈이되어 출력됨

- ```js
  alert("coding " + "everybody");
  ```

  - coding  everybody 라고 출력됨 `+`로인해서 문자열 두개가 합쳐짐

- ```js
  alert("1" + "1");   // 11 이라고 출력됨
  ```

- ```js
  "hello".length   // 5라는 값이 나옴 hello의 단어갯수가 5개이기 때문이다
  ```

- ```js
  "hello".indexOf("o")   //hello 단어에서 o단어의 숫서를 알려준다 값은 4이다
  ```

  - 순서는 0부터 시작하기 때문에 4라는 값이 나온다



## 2. 변수

- 변수에는 숫자,문자,어떠한 데이터든 들어갈수있다 

- ```js
  var a = 1  
  a          // 숫자 1값이 나온다
  a+2        // 숫자 3값이 나온다
  ```

- ```js
  var first = "hello"
  alert(first+" mine")   //hello mine 이라는 문자가 출력된다
  ```

  

## 3.주석

- ```js
  //alert("coding " + "everybody");
  /*
      안녕하세요
      안녕하세요
      안녕하세요
     */
  ```

  - //뒤에서부터 줄바꿈을 하기전까지 주석처리 된다.
  - / * */  여러줄을 주석처리 할 수 있다.

- ```js
  var a = 1; alert(a);
  ```

  - ; 세미콜론은 명령이 끝났다는 것을 명시적으로 알려주는것 



## 4. 비교

**대입연산자**

- ```js
  a=1  //a라는 변수에 1이라는 값을 대입한다는 뜻
  ```

  - `=` 은 대입연산자 이다.   오른쪽값을 왼쪽에 대입하는 것  a <= 1
  - 변수에 반대되는 개념은 상수이다 변하지 않는 값.

**비교연산자**

비교연산자를 통해 얻은 `true/false`값을 `boolean`이라고 한다 

**동등연산자**

좌항과 우항이 같으면 true 다르면 false가 된다 

```js
alert(1==2)  //false라는 값이나옴
alert(1==1)  //true라는 값이나옴
```

**일치연산자**

좌항과 우항의 값이 정확하게 같은때 true 다르면 false가 된다

- ```js
  alert(1 === "1")  //false 라는 값이 나옴
  alert(1 == "1")  // true라는 값이 나옴
  ```

  - `===`은 데이터 타입까지 같아야 true라고 함  ( === 더선호함  )

**심화  ==,===**

- ```js
  alert(null == undefined);  //true
  alert(null === undefined);  //false
  ```

  - null은 의도하여 값이 없다라는 뜻 , undefined는 값이 정의 되지 않았다라는 뜻(의도X)

- ```js
  alert(true == 1);  //true
  alert(true === 1);  //false
  ```

  - true는 1만 true가되고 나머지는 다 false가된다 

- ```js
  alert(0 === -0);  //true
  alert(NaN === NaN);  //false
  ```

  - 0,-0둘다 0이기 때문에 true이다. 

    그리고 NaN는 숫자가 아니라서 계산할수가 없음이라 false이다.  

**부정**

!는 부정을 의미 한다 그래서 같다의 부정의 반대로 `같지 않다` 라는뜻 이다.  

이것을 기호로는 `!=`로 표시한다 

- ```js
  alert(1!=2);  //true   
  alert(1!=1);  //false
  ```

`!===` 는 `===`의 반대 개념이다.  정확하게 같지 않다라는 의미이다.

**부등호**

- ```js
  alert(20 > 10);  //true
  alert(20 > 30);  //false
  ```

  - `>` 은 좌항이 우항보다 크면 true이고 그렇지않으면 false이다  그반대 개념은  `<` 이다.

- ```js
  alert(20 >= 10);  //true
  alert(20 >= 30);  //false
  ```

  - 좌항이 우항보다 크거나 같다 라는 의미이다  그반대개념은  `<=`이다



## 5. 조건문

**if**

- ```js
  if (true) {
      alert("hello");
  }
  //---------------------------------------------------------------------
   if (false) {    
       alert("1");
       alert("2");
       alert("3");
   }
       alert("10");        //  10
  ```

  - if뒤에 (   )안에 값이 true이면 중괄호가 실행이되고 false이면 실행이 되지않는다.
  - (  )의 값이 false인 조건문은 중괄호가 실행되지않고 바로 10이라는 경고문만 뜬다.

**else**

- ```js
  if (false) {
      alert("1");
  }else{
      alert("2");
  }                      //  2
  ```

  - if가 true이면 if의 { }중괄호만 실행이되고 if가 false면 else의 {  }중괄호만 실행된다.

**else if**

- ```js
  if (false) {
      alert("1");
  }else if(true) {
      alert("2");
  }else if(true) {
      alert("3");
  }else {
      alert("4");
  }                                // 2 라는 경고문만 뜬다
  ```

  - 경고문 1은 flase라 실행이안되고 밑으로 내려와 경고문 2가 true이기때문에 실행되고 그밑으로는 무시가 된다 

**조건문 응용**

- ```js
  a = 1   //   1
  
  if (a===1){
      alert("hi");
  }                 // hi
  ```

  - a==1 은 true 이기때문에 경고문 hi가  실행된다.

- ```js
  prompt("당신의 나이는?")
  '16'
  //-------------------------------------------------------------------------------
   alert(prompt("당신의 나이는?"))     //사용자가 입력한 값이 경고문으로 뜬다.
  ```

  - prompt 는 어떠한 값을 사용자로 부터 받을수있는 기능

**아이디 일치 여부 코드**

- ```js
  const id = prompt("아이디를 입력해주세요.");
  
        if (id === "hello123") {
          alert("아이디가 일치 합니다😊");
        } else {
          alert("아이디가 일치하지 않습니다🤔");
        }
  ```

  - prompt 에 입력한 값과 "hello123 " 이 같으면 아이디가 일치합니다 라고 경고문이뜨고 아니면 일치하지않습니다 경고문이 뜬다.

- ```js
   const id = prompt("아이디를 입력해주세요.");
        if (id === "hello123") {
          const password = prompt("비밀번호를 입력해주세요!");
          if (password === "123") {
            alert("로그인 하셨습니다👍 " + id + "님 반갑습니다");
          } else {
            alert("비밀번호가 다릅니다.😢");
          }
        } else {
          alert("아이디가 일치하지 않습니다.😭");
        }
  ```

  - 아이디와 비밀번호 물어보는 경고문









