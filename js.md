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

**논리 연산자 ** 

&& : 좌항과 우항이 모두 true일때만 true가된다  (and  연산자라고 한다.)

- ```js
  if (true && true) {
      alert(1) 
  }                      // 1
  if (false && false) {
      alert(2)  
  }                     // 작동하지않음
  if(true && false) {
      alert(1) 
  }                    // 작동하지않음
  ```

  - 하나라도 false가 있으면 작동하지않는다 

||: 좌우항 중에 하나라도 true이면 true가 된다 (or 연산자라고 한다.)

- ```js
  if (true ||false) {
      alert(5)
  }                    //5
  if (true ||true) {
      alert(5)
  }                    //5
  ```

  - 하나라도 true가 있으면 실행이된다

**논리연산자 응용**

- ```js
   const id = prompt("아이디를 입력해주세요.");
        const password = prompt("비밀번호를 입력해주세요");
        if (
          (id === "hello123" || id === "hahaha" || id === "hi123") &&
          password === "123"
        ) {
          alert("인증했습니다👍");
        } else {
          alert("인증에 실패했습니다.😭");
        }
  ```

!: 부정의 의미로 Boolean의 값을 역전시킨다. true를 false로 false는 true로 만든다. (not연산자 이다.)

- ```js
  if (!false && !false){
      alert("안녕")}          //안녕
  ```

  - !false  ==>true이기때문에 둘다 true가 되어서  안녕이라는 경고문이 뜬다.

**boolean의 대체재**

- ```js
  if (0){
      alert("hi")}   // 실행이안됨 
  if (1){
      alert("hi")}   // hi     
  ```

  - js에서는 1은 true이기때문이다 

- ```js
  if (""){
      alert("히히")}   //빈문자열은 false로 간주해서 실행이 안됨
  //-------------------------------------------------------------------
  if ("채움"){
      alert("hello")}    //hello라는 경고문이 뜬다.
  ```

## 6. 반복

**반복문의 기본문법**

`while (조건) { 반복해서 실행할 코드  }`

- 조건은 Boolean이어야 한다
- 조건이 true이면 반복해서 실행된다 false가 될때 까지

```js
  while (true) {
        document.write("coding everybody<br/>");
      }
```

- 이렇게 무한루프 무한반복이 실행되면 브라우저가 강제로 종료를 한다 

**반복조건**

```js
 let i = 0;
      while (i < 10) {
        document.write("coding everybody" + i + "<br/>");
        i = i + 1;
      }
```

- 조건문인 (i < 10)이 true일경우 계속실행되고 false일 경우 실행을 멈춘다
- +i+ 하면 숫자도 같이나온다 

**for 반복문법**

```js
for (let i = 0; i < 10; i = i + 1) {
document.write("coding everybody" + i + "<br/>");
}
```

- 조건에(초기화 파트; 언제까지 반복할것인지; 반복실행 조건 )을 넣어주면된다 
- 마지막에는 세미클론;넣으면안됨

- `i = i + 1`와 `i++`는 같은 의미 이다 .(의미는 구문이 실행될때 마다 1씩증가한다는 뜻)

**i++ 와 ++i의 차이점**

```js
i=0;           //0
alert(i++);   //0
//--------------------------------------------------------------------------
i=0;         //0
alert(++i); //1
```

- i++은 0부터 증가하고 ++i는 1부터 증가한다 (1씩증가하는 것은 같다.)

**i활용하기**

```js
for (let i = 0; i < 10; i = i + 1) {
document.write("coding everybody" + (i*2) + "<br/>");
}
```

- (i+1) 1부터 증가하게 해줌
- (i*2) 2배수 만큼 증가됨

**반복문의 제어**

```js
for (let i = 0; i < 10; i = i + 1) {
     if (i === 5) {
        break;
      }
    document.write("coding everybody" + i + "<br/>");
    }
```

- break로 언제든지 반복문을 중단 시킬수있다
- 반복문안에 조건문이 들어갈수있다

```js
for (let i = 0; i < 10; i = i + 1) {
     if (i === 5) {
        continue;
      }
    document.write("coding everybody" + i + "<br/>");
    }
```

- 그순간에만 멈추고 그뒤로 계속 반복됨 그래서 다섯번째는 나타나지 않음

**반복문의 중첩**

```js
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        document.write("coding everybody" + i + j + "<br/>");
    }
}
```

- `("coding everybody" + i + j + "<br/")`  문자+숫자+숫자+문자 형태는  숫자부분을 자동으로 문자 형태로 바꿔줌 그래서  i와 j부분은 문자형태가 된다.
- i가 한번실행될때 j는 10번실행이된다 

## for 구구단

```html
<body>
    <script>
      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          document.write("<h4>" + i + "x" + j + "=" + i * j + "</h4>");
        }
      }
    </script>
  </body>
```

## for 짝수

```html
 <head>
 <style>
      .first {
        display: flex;
      }
      span {
        width: 100px;
        height: 100px;
        border: 1px solid black;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div class="first">
      <span></span><span></span><span></span><span></span><span></span>
    </div>

    <script>
      const red = document.querySelectorAll("span");
      for (let i = 1; i < red.length; i++) {
        if (i % 2 === 1) {
          red[i].style.backgroundColor = "red";
        }
      }
    </script>
  </body>
```

- `i % 2`  나머지를 구하는 연산자이다 (i를 2로 나눴을 때 나머지)

## 7. 함수

**함수**:  function 함수명 ( 인자) { 코드 return 반환값  }

```js
function numbering() {
document.write(1);
}
numbering();
```

- 함수 호출하기 
- 여러 맥락에서 호출을 하면 사용할수있다 (반복문은 그안에서만 실행된다)  =재사용성

```js
function numbering() {
 let i = 0;
 while (i < 10) {
 document.write(i + "<br/>");
 i += 1;
 }
}
numbering();
```



**함수 출력(return)**

return은 함수의 출력값으로 반환한다

return   ; 다음으로 오는 코드는 실행이 안된다 

```js
function get_member1() {
    return "hey";
    return "hi";
    return "hello";
}
alert(get_member1());
```

- hey만 출력이 된다 



**함수 입력 (인자)**

```js
function get_argument(arg) {
        return arg;
       }
        alert(get_argument(1));
        alert(get_argument(2));
```

- arg=1   /   arg=2 가된다. 그리고 arg는 변수이다.
- arg는 매개변수 (parameter) 이다, 인자의 값은 받는다.  
- get_argument(1)의 괄호안에 "1"은 인자 (arguments)라고 한다 

**복수의 인자**

```js
function get_argument(arg1, arg2) {
        return arg1 + arg2;
      }
      alert(get_argument(10, 20));
```

- arg1=10, arg2=20 이다

**함수예제 종류**

```js
get_argument = function () {
        return "hello";
       }
     alert(get_argument());
```

- 함수명 = function( ){      }  이렇게 함수를 적을수도 있다 

```js
(function () {
    i = 0;
    while (i < 10) {
        document.write(i);
        i += 1;
    }
})();
```

- 정의와 호출을 같이하는 함수 이고 이름이없는 익명함수이다 (일회성 함수)

## 함수_계산기

```html
 <script>
      const A = Number(prompt("숫자A를 입력하세요"));
      const B = prompt("연산자를 입력하세요 ex)+,-,*,/");
      const C = Number(prompt("숫자B를 입력하세요"));

      function promptCa(first, operator, second1) {
        if (operator === "+") {
          alert(first + second);
        } else if (operator === "-") {
          alert(first - second);
        } else if (operator === "*") {
          alert(first * second);
        } else {
          alert(first / second);
        }
      }

      promptCa(A, B, C);
    </script>
```

- 인자값 operator 안에는 문자열 형태의 연산자가 들어온다.

-  `if (operator === "비행기") { alert(first + second);  }`는

  1입력하고 비행기 입력하고 3 입력하면 4가 출력된다. 

## 8. 배열

array배열은 연관된 데이터를 모아서 통으로 관리하기 위한 데이터 타입이다.

```js
const member = ["a","b","c"];
alert(member[1]);             // b
```

- 하나의 변수안에 여러개의 데이터를 담을수있다.
- 3개의 원소(element)가 들어있는 배열이다
- 배열의 순서는 0부터시작한다  (0,1,2,3,,,,)  =index라고 부른다 

 **배열과 반복문 같이 사용**

```js
function get_member() {
    return ["a", "b", "c", "D"];
}
menubars = get_member();

for (let i = 0; i < menubars.length; i++) {
    document.write(menubars[i].toUpperCase() + "<br/>");
}
```

- menubars.length  값은  4이다.
- 배열의 순서는 0,1,2,3까지 있다 
- length의 값은 항상 배열보다는 1이많다 그래서 작동됨 

**데이터 추가**

push: 하나의 데이터를 추가할때

```js
let li=["a","b","c"];
li.push("d")
alert(li)           //a,b,c,d
```

concat: 여러데이터를 추가할때

```js
let li=["a","b","c"];
li=li.concat(["d","e"]);  // (5) ['a', 'b', 'c', 'd', 'e']
alert(li);                //a,b,c,d,e
```

unshift:  앞쪽에 데이터를 추가할때

```js
let li=["a","b","c"];
li.unshift("z")
alert(li);            //z,a,b,c
```

splice: 어느지점에 데이터를 추가할때

```js
let li=["a","b","c"];
li.splice(1,0,"A")
li                    //(4) ['a', 'A', 'b', 'c']
```

- `li.splice(1,0,"A")` :  (index번호,index에서 부터 제거될 원소들의 수 ,추가할것) 지정인덱스 앞에 추가됨.

```js
let li=["a","b","c"];
li.splice(1,1,"z","y");
li                     //(6) ['a', 'z', 'y','c']

```

- `li.splice(1,1,"z","y")`:  index의 번호가 1인 원소 부터 1개의 원소가 삭제되고 그자리에 z,y데이터가 추가 됨.

**데이터 제거와 정렬**

shift: 맨앞의 데이터를 제거

```js
let li=["a","b","c"];
li.shift()           //'a'
li                   // ['b', 'c']
```

pop: 맨뒤의 데이터를 제거

```js
let li=["a","b","c"];
li.shift()           //'c'
li                   // ['a', 'b']
```

sort: 배열을 정렬 해준다  (그반대 개념으로 `변수명.reverse( )` 는 정렬을 역순으로 해준다.)

```js
let li=["d","f","a","b","e"]
li.sort()                   // ['a', 'b', 'd', 'e', 'f']
```



 ## 9. 객체

```js
const name ={"hey":10, "won":20, "jun":30};
name                                       //{hey: 10, won: 20, jun: 30}
```

- index를 만들수있다 (hey,won,jun)
- key와 value 이다.

**다른방법들로 object 만들기**

```js
const name = {};
name["hey"] = 10;
name["won"] = 20;
name["jun"] = 30;
name                 //{hey: 10, won: 20, jun: 30}
```

```js
const name = new Object();
name["hey"] = 10;
name["won"] = 20;
name["jun"] = 30;
name                 //{hey: 10, won: 20, jun: 30}
```

- { }와 new Object( )는 같은 의미이다.

  

**객체의 값을 가져오는 방법**

```js
const name ={"hey":10, "won":20, "jun":30};
name["hey"]   // 10
```



**객체와 반복문** `for (a in b)`

```js
const grades = { hey: 10, hello: 20, hi: 30 };
for (const name in grades) {
    document.write("key: " + name + " value: " + grades[name] + "<br/>");
}
```

- `for (const name in grades)`에서 name은 grades배열에서 key값을 담는다 (hey,hello,hi)
- `grades[name]`는 객체에 저장된  value값을 담는다.



**객체에 담길수 있는 값**

```js
const grades = {
        list: { hey: 10, hello: 20, hi: 30 },
      };
      alert(grades["list"]["hey"]);
```

- list에 있는 hey 값을 출력함 :10

```js
 const grades = {
        list: { hey: 10, hello: 20, hi: 30 },
        show: function () {
          alert("hello world");
        },
      };
      grades["show"]();
```

- 객체안에는 함수도 저장될수 있다

**변수 this**

```js
const grades = {
    list: { hey: 10, hello: 20, hi: 30 },
    show: function () {
            for (const name in this.list) {
            console.log(name, this.list[name]);
            }
        },
	};
grades.show();
```

- this: 자신이 속한 함수가 속해 있는 객체를 가리키는 변수이다. (this = grades)



## 10. 라이브러리 사용

-jQuery

https://jquery.com/



## 11. UI와 API

- 웹브라우저 API

https://developer.mozilla.org/en-US/docs/Web/API

- node.js API

https://nodejs.org/api/

- google apps script APT

https://developers.google.com/apps-script/

## 12. 함수_유효범위

 ``` js
 const vscope = 'global';       //전역변수
 function fscope(){
     const vscope = 'local';    //지역변수
     alert(vscope);          
 }
 fscope();                   //local  
 alert(vscope);             //global   
 ```

- 함수 밖에서 변수를 선언하면 그 변수는 전역변수가 된다. 
- 전역변수는 에플리케이션 전역에서 접근이 가능한 변수다. (다시 말해서 어떤 함수 안에서도 그 변수에 접근 가능)
-  같은 이름의 지역변수와 전역변수가 동시에 정의되어 있다면 지역변수가 우선한다는 것을 알 수 있다.
- const 를 해줘야 그지역에서 지역 

**지역변수 사용 예시**

```js
function a (){
    var i = 0;
}
for(var i = 0; i < 5; i++){
    a();
    document.write(i);                //01234
}                               
```

**익명함수를 호출함으로 전역변수 없애기**

```js
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())
```

- `(function(){ 실핼코드 }( ))` :익명함수

**자바스크립트의 지역변수는 함수에서만 유효하다**

```js
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name);
```

- name 변수가 {}중괄호 안에 선언되었지만 밖에서도 호출이 가능하다 함수가 아니기 때문이다 

**값으로서 함수**

```js
function a () {}      --->         const a = function(){}  //함수가 a라는 변수가됨
```

- JavaScript의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.

```js
a = {
    b:function(){
    }
};                    //객체안에 b라는 함수가 값으로 담겨져있다
```

-  함수는 객체의 값으로 포함될 수 있다. 이렇게 객체의 속성 값으로 담겨진 함수를 

  **메소드**(method)라고 부른다.

```js
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
alert(cal(increase, 1));     //2    
```

- 함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다.
- `alert(cal(increase, 1));`     => `alert(cal(2, 1));` -> 2(1) = 답2

```js
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1));        //3
alert(cal('minus')(2,1));       //1
```

- 함수는 함수의 리턴 값으로도 사용할 수 있다.

# js for web

js는 body태그가 끝나는 지점에 작성해준다

```html
<body>
   <script src="index.js"></script>
</body>   
```

## 전역객체 window

```js
alert('Hello world');
window.alert('Hello world');
```

- Window 객체는 식별자 window를 통해서 얻을 수 있다. 또한 생략 가능하다. 
- Window 객체의 메소드인 alert을 호출하는 방법은 두가지 있고 둘다같은 의미이다
- 모든 객체는 사실 window의 자식이라는 것도 알 수 있다. 

## alert

```js
<input type="button" value="alert" onclick="alert('hello world');" />
```

- 경고창이라고 부른다. 사용자에게 정보를 제공하거나 디버깅등의 용도로 많이 사용한다.

## confirm

```html
<body>
    <input type="button" value="confirm" onclick="funcConfirm()" />
    <script>
      function funcConfirm() {
        if (confirm("확인하시겠습니까?")) {
          alert("ok");
        } else {
          alert("cancel");
        }
      }
    </script>
  </body>
```

- 확인을 누르면 true, 취소를 누르면 false를 리턴한다

## prompt

```html
<body>
    <input type="button" value="prompt" onclick="funcPrompt()" />
    <script>
      function funcPrompt() {
        if (prompt("아디이를 입력해주세요") === "hye") {
          alert("환영합니다.");
        } else {
          alert("아이디를 다시 입력해 주세요");
        }
      }
    </script>
  </body>
```

## location

```js
console.log(location.toString(), location.href);   
```

- 아래는 현재 윈도우의 문서가 위치하는 URL을 알아내는 방법이다.

```js
console.log(location.protocol, location.host, location.port, location.pathname, location.search, location.hash)
```

- location 객체는 URL을 의미에 따라서 별도의 프로퍼티로 제공하고 있다. ![image-20220331224420299](C:\Users\Son\AppData\Roaming\Typora\typora-user-images\image-20220331224420299.png)

```js
location.href = 'http://egoing.net';
```

- 아래 코드는 현재 문서를 http://egoing.net으로 이동한다.  (주소이동)

```js
location.reload();
```

- 아래는 현재 문서를 리로드하는 간편한 방법을 제공한다.

## navigator

```js
console.dir(navigator);
```

- dir명령을 통해서 navigator이 객체의 모든 프로퍼티를 열람할 수 있다.

```js
console.dir(navigator.appName);
```

- 웹브라우저의 이름을 알수있다 IE는 Microsoft Internet Explorer/  파이어폭스, 크롬등은 Nescape로 표시함

```js
console.dir(navigator.appVersion);
```

- 브라우저의 현재 버전을 알수있다

## getElementsByTagName

```html
<body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>

    <script>
      const red = document.getElementsByTagName("ul")[0];
      red.style.color = "red";
      const blue = red.getElementsByTagName("li")[1];
      blue.style.color = "blue";
    </script>
  </body>
```

- `document.getElementsByTagName("ul")[0]` : ul태그중 첫번째 index의 색을 바꾼다는 뜻

## getElementsByClassName

```html
 <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li class="green">3</li>
      <li id="wheat">7</li>
    </ul>

    <script>
      const green = document.getElementsByClassName("green")[0];
      green.style.color = "green";
    </script>
  </body>
```

## getElementById

```html
 <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li class="green">3</li>
      <li id="wheat">7</li>
    </ul>

    <script>
      const wheat = document.getElementById("wheat");
      wheat.style.color = "wheat";
    </script>
  </body>
```

## querySelector

```html
 <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li class="green">3</li>
      <li id="wheat">7</li>
    </ul>

    <script>
     const baColor = document.querySelector(".green");
      baColor.style.backgroundColor = "black";
    </script>
  </body>
```

- querySelectorAll  관련된 모든 객체를 조회해준다.

##  constructor.name 객체이름알기

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li id="active">JavaScript</li>
</ul>
<script>
    var li = document.getElementById('active');
    console.log(li.constructor.name);              //HTMLLIElement 
    var lis = document.getElementsByTagName('li'); 
    console.log(lis.constructor.name);             //HTMLCollection
</script>
```

- 즉 실행결과가 하나인 경우 HTMLLIELement, 복수인 경우 HTMLCollection을 리턴하고 있다. 

```html
<a id="anchor" href="http://opentutorials.org">opentutorials</a>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li id="list">JavaScript</li>
</ul>
<input type="button" id="button" value="button" />
<script>
    var target = document.getElementById('list');
    console.log(target.constructor.name);           //HTMLLIElement
 
    var target = document.getElementById('anchor');
    console.log(target.constructor.name);           //HTMLAnchorElement
 
    var target = document.getElementById('button');
    console.log(target.constructor.name);              //HTMLInputElement
 
</script>
```

- 엘리먼트의 종류에 따라서 리턴되는 객체가 조금씩 다르다 HTMLLIElement/HTMLAnchroElement/HTMLInputElement

## Element.tagName 태그이름 알기(읽기전용)

```html
<ul>
    <li>html</li>
    <li>css</li>
    <li id="active" class="important current">JavaScript</li>
</ul>
<script>
console.log(document.getElementById('active').tagName)    //li
</script>
```

- 해당 엘리먼트의 태그 이름을 알아낸다. 태그 이름을 변경하지는 못한다.

 ## Element.id 아이디 이름 알기 (변경가능)

```html
<ul>
    <li>html</li>
    <li>css</li>
    <li id="active">JavaScript</li>
</ul>
<script>
var active = document.getElementById('active');
console.log(active.id);                           //active
active.id = 'deactive';  
console.log(active.id);                           //deactive
</script>
```

- 문서에서 id는 단 하나만 등장할 수 있는 식별자다. id의 값을 읽고 변경하는 방법을 보여준다. 

## Element.className 클래스이름알기 

```html
ul>
    <li>html</li>
    <li>css</li>
    <li id="active">JavaScript</li>
</ul>
<script>
var active = document.getElementById('active');
// class 값을 변경할 때는 프로퍼티의 이름으로 className을 사용한다.
active.className = "important current";
console.log(active.className);
// 클래스를 추가할 때는 아래와 같이 문자열의 더한다.
active.className += " readed"
</script>
```

## Element.classList

```js
active.classList.add('marked');        //class추가
active.classList.remove('important');  //class제거
active.classList.toggle('current');    //class 추가,제거
```

- className에 비해서 훨씬 편리한 사용성을 제공함

## attribute

```js
list.getAttribute("id")  // "title"
```

- 속성의 값을 가져온다 (id이름이 무엇인지 알려주고 있다.)

```js
list.setAttribute("id","main")  
```

- list의 id이름을 main으로 바꾼다

```js
list.removeAttribute("title")
```

- list값에 있는 내용을 없앤다 

## Document 객체

```js
const li = document.createElement("li")
```

- document  객체의 주요 임무는 새로운 element를 생성해주는 역할이다

## event

 ```
 <input type="button" onclick="alert(window.location)" value="alert(window.href)" />
 ```

- event target은 button태그이다.
- event type은  click 이 이벤트 타입이다.
- event handler는 이벤트가 발생했을 때 동작하는 코드를 의미한다.  `"alert(window.location)"`
- 태그안에 이벤트가 속성으로 들어가있어서 인라인 방식이다.

## addEventListener()

```js
const t = document.getElementById('target');
    t.addEventListener('click', function(event){
        alert(1);
    });
    t.addEventListener('click', function(event){
        alert(2);
    });
```

-  하나의 이벤트 대상에  복수의 동일 이벤트 타입 리스너를 등록할 수 있다

```html
<input type="button" id="target1" value="button1" />
<input type="button" id="target2" value="button2" />
<script>
    var t1 = document.getElementById('target1');
    var t2 = document.getElementById('target2');
    function btn_listener(event){
        switch(event.target.id){
            case 'target1':
                alert(1);
                break;
            case 'target2':
                alert(2);
                break;
        }
    }
    t1.addEventListener('click', btn_listener);
    t2.addEventListener('click', btn_listener);
```

- 이벤트 객체를 이용하면 복수의 엘리먼트에 하나의 리스너를 등록해서 재사용할 수 있다. 

## preventDefault 이벤트 기본동작 취소

 ```js
 document.querySelector('a').addEventListener(
 'click', function(event)
 {
 if(document.getElementById('prevent').checked)
 event.preventDefault();
 }
 );
 ```

-  이벤트 객체의 preventDefault 메소드를 실행하면 기본 동작이 취소된다. 

**submit 동작취소**

```html
<form id="target" action="result.html">
    <label for="name">name</label> <input id="name" type="name" />
    <input type="submit" />
</form>
<script>
var t = document.getElementById('target');
t.addEventListener('submit', function(event){
    if(document.getElementById('name').value.length === 0){
        alert('Name 필드의 값이 누락 되었습니다');
        event.preventDefault();
    }
});
</script>
```

**change**

```html
<p id="result"></p>
<input id="target" type="name" />
<script>
var t = document.getElementById('target');
t.addEventListener('change', function(event){
    document.getElementById('result').innerHTML=event.target.value;
});
</script>
```

- change는 폼 컨트롤의 값이 변경 되었을 때 발생하는 이벤트다.
- `event.target.value;` 는 input에 작성한 내용을 말함.

​      그래서 그값을 id가 result인  곳에 innerHTML으로 넣는다는 뜻 

**마우스이벤트**

```
click
클릭했을 때 발생하는 이벤트. 
dblclick
더블클릭을 했을 때 발생하는 이벤트
mousedown
마우스를 누를 때 발생
mouseup
마우스버튼을 땔 때 발생
mousemove
마우스를 움직일 때
mouseover
마우스가 엘리먼트에 진입할 때 발생
mouseout
마우스가 엘리먼트에서 빠져나갈 때 발생
contextmenu
컨텍스트 메뉴가 실행될 때 발생
```

```
event.shiftKey
event.altKey
event.ctrlKey
```

```
clientX
clientY
```

## Json

JSON(JavaScript Object Notation)의 약자로 JavaScript에서 객체를 만들 때 사용하는 표현식을 의미한다

```js
const man = {"height":170, "job":"student"};   //객체
const member = ["철수", "영희", "길동"]         //배열
```

- 객체는 {  }중괄호로 만든다/ 값의 이름과 값은 :세미클론으로 구분한다/ 값과 값사이는 ,콤마로 구분한다.
- 배열은 [ ]대괄호로 만든다/ 값과 값사이에는 ,콤마로 구분한다.

# jQuery

```js
$("li").css("color","red");
```

- $()는 jQuery의 함수이다. 이 함수의 인자로 CSS 선택자(li)를 전달하면 jQuery 객체라는 것을 리턴한다

```js
const lis = document.getElementsByClassName('active');
for(var i=0; i &lt; lis.length; i++){
    lis[i].style.color='red'; 
```

```js
$('.active').css('color', 'red')</pre>
```

- 둘다 같은 의미이고 위:js 아래:jQ이다.

```js
const li = document.getElementById('active');
li.style.color='red';
li.style.textDecoration='underline';</pre>
```

```js
$('#active').css('color', 'red').css('textDecoration', 'underline');
```

- 둘다 같은 의미이고 위:js 아래:jQ이다.

## jQuery 객체

```js
const list = $("li");
list;                     // <li>hello</li>  (list는 jQuery의 객체를 가지고있다.)
list.css("text-decoration","underline"); //list의 모든 객체의 element에게 텍스트 언더라인이 만들어진다.
```

- `$("li")` : jQuery 함수이다.

```js
list.css("text-decoration","underline").css("color","red");
```

- 밑줄이 쳐지고 색을 red가 된다 

```js
list.css("text-decoration");    //첫번째 객체만 적용된다 
list.css("text-decoration","underline") // (가져오기,설정) 이기때문에 모든 객체가 적용된다
```

- `.css(    )` : 가져오기   / `.css( , )`: 설정

## jQuery 속성제어 api

```
list.attr("title","hello")
list.removeAttr('title'); // title 속성을 제거한다.
```

- list 변수안에 있는  내용을 hello로 바꾼다
- jQuery 객체의 메소드 중 setAttribute, getAttribute에 대응되는 메소드는 attr이다. 또한 removeAttribute에 대응되는 메소드로는 removeAttr이 있다. 

## jQuery 하위 element 선택

```js
$( "#active .marked").css( "background-color", "red" );
```

- 아이디가 active에 하위 element인 클래스가 marked인 것을 배경색을 red로 한다.

find

```js
$( "#active").find('.marked').css( "background-color", "red" );
```

- find는 jQuery 객체 내에서 엘리먼트를 조회하는 기능을 제공한다. 위에코드와 같은 의미이다

```js
$('#active').css('color','blue').find('.marked').css( "background-color", "red" );
```

- find를 쓰는 이유는 체인을 끊지 않고 작업의 대상을 변경하고 싶을 때 사용한다. 

## jQuery 이벤트

```html
<script>
    // 순수하게 구현했을 때
    const target = document.getElementById('pure');
    if(target.addEventListener){
        target.addEventListener('click', function(event){
            alert('pure');
        });
    }
 
    // jQuery를 사용했을 때
    $('#jquery').on('click', function(event){
        alert('jQuery');
    })
</script>
```

- 코드 분량에 큰차이가 있다. jQuery는 크로스 브라우징을 알아서 처리해주고, 이벤트를 보다 적은 코드로 구현할 수 있도록 해준다. 

**on api**

on의 기본적인 문법

```js
.on( events [, selector ] [, data ], handler(eventObject) )
```

- event : 등록하고자 하는 이벤트 타입을 지정한다. (예: "click")
- selector : 이벤트가 설치된 엘리먼트의 하위 엘리먼트를 이벤트 대상으로 필터링함
- data : 이벤트가 실행될 때 핸들러로 전달될 데이터를 설정함
- handler : 이벤트 핸들러 함수

selector

```html
<ul>
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
</ul>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
    $('ul').on('click','a, li', function(event){
        console.log(this.tagName);                       
    })
</script>
```

- ul 엘리먼트의 하위 엘리먼트 중에  a, li 엘리먼트들에 대해서만 이벤트가 발생한다.
- css내용이담기 li를 클릭하면  실행결과 a,li가 나온다  ul태그는 안뜬다.

다중 이벤트

```HTML
<input type="text" id="target" />
<p id="status"></p>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
    $('#target').on({
        'focus' : function(e){
 
        }, 
        'blur' : function(e){
             
        }
    })
------------------------------------------------------다른방법----------------------------
      $('#target').on('focus blur', function(e){
        $('#status').html(e.type);
    })
------------------------------------------------------다른방법----------------------------
   const handler = function(e){
    $("status").html(e.type);
}
    $("#target").on("focus",handler).on("blur",handler);
</script>
```

- focus, blur 이벤트를 적용함

이벤트 제거

```html
<input type="text" id="target"></textarea>
<input id="remove"  type="button" value="remove" />
<p id="status"></p>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
  var handler = function(e){
    $('#status').text(e.type+Math.random());
  };
  $('#target').on('focus blur', handler)
  $('#remove').on('click' , function(e){
    $('#target').off('focus blur', handler);
    console.log(32);
  })
</script>
```

- 이벤트를 제거할 때는 off를 사용한다. 

















