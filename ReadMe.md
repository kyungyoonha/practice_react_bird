## 제로초 강의

### 버전

-   next: npm install next@9
-

### SSR 서버사이드 렌더링

### \_app.js

-   pages안에 \_app.js는 index.js 보다도 상위개념
-   모든 페이지에 공통으로 들어가는 설정을 해준다.
-   next/head로 헤더도 설정가능하다.
-   layout은 부분적으로 공통된것이 있을때 사용하는 반면 \_app.js는 전부 공통인 것들만 정의한다.

### 리렌더링시 객체 주의

-   {} === {} : false
-   가상돔과 비교하여 다른점을 리렌더링 하는데 객체끼리는 false 이므로 매번 리렌더링 된다.
-   객체끼리 비교하면 false이므로 style={{ marginTop: '10px' }} 와 같이 객체를 써주는 것은 가급적 피해야한다.
