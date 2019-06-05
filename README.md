## ViewContainerRefTest

Angular 개발 하면서 컴포넌트를 동적으로 생성하려고 할때가 있다.<br>
공통 팝업 같은 경우에 그냥 컴포넌트르 만들어서 selector로 잡아서 사용했는데 .. 다른 방법도 있다는것을 알았다. <br>
처음으로 ComponentFactoryResolver를 이용해봤다.<br>

<hr>
ng start 로 시작 <br>
Hello 버튼을 클릭하면 Hello를 보여주는 컴포넌트를 생성하고
Bye버튼으 클릭하며 Bye룰 보여주는 컴포넌트를 동적으로 생성한다. 
재미있다!
