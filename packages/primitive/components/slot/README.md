# @warrr-ui/primitive-slot

`slot` 컴포넌트를 사용하면 코드의 반복을 줄이고, 응집력 있는 UI 구조를 유지하면서도 다양한 사용자 인터페이스 요구사항을 충족할 수 있습니다. 컴포넌트 간의 props 전달과 병합, 슬롯을 통한 유연한 구조 변경, ref 핸들링 등의 기능을 제공하여 React 컴포넌트 개발을 더욱 효율적으로 만들어줍니다.

## 설치 방법

```bash
pnpm add @warrr-ui/primitive-slot
# or
yarn add @warrr-ui/primitive-slot
# or
npm install @warrr-ui/primitive-slot
```

## 주요 기능

### 1. Props 위임

`Slot` 컴포넌트를 사용하면 부모 컴포넌트와 자식 컴포넌트 간의 관계를 재정의하거나 스타일을 변경할 수 있습니다. 특정 컴포넌트를 다양한 방식으로 래핑하거나 이벤트 핸들러 또는 props를 일관되게 전달할 수 있습니다.

```tsx
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp {...props} ref={ref} />;
});

<Button
  asChild
  style={{ padding: "10px", borderRadius: "5px", background: "blue", color: "white" }}
>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      alert("Slot 버튼이 클릭되었습니다!");
    }}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    클릭하세요 (버튼 스타일의 a 태그입니다)
  </a>
</Button>;
```

### 2. Props 병합

`Slot` 컴포넌트는 부모와 자식 컴포넌트의 props를 자동으로 병합합니다. 이벤트 핸들러, 스타일, 클래스 이름 등의 props가 병합되어 부모와 자식 컴포넌트에 모두 적용됩니다.

```tsx
const Parent = ({ children, ...parentProps }) => {
  return <Slot {...parentProps}>{children}</Slot>;
};

const Child = ({ className, onClick, style, ...rest }) => (
  <button className={className} onClick={onClick} style={style} {...rest}>
    Child 버튼
  </button>
);

const App = () => (
  <Parent
    className="parent-class"
    onClick={() => console.log("Parent 클릭")}
    style={{ padding: "10px", color: "red" }}
    data-test="parent"
  >
    <Child
      className="child-class"
      onClick={() => console.log("Child 클릭")}
      style={{ backgroundColor: "blue" }}
      id="child-button"
    />
  </Parent>
);

/* 
병합 결과: 
{
  id: "child-button",
  "data-test": "parent"
  className: "child-class parent-class",
  onClick: chainFunctions([() => console.log('Child 클릭'), () => console.log('Parent 클릭')]),
  style: {
    padding: "10px",
    color: "red",
    backgroundColor: "blue"
  },
}
*/
```

### 3. Slottable 컴포넌트

`Slottable` 컴포넌트를 사용하면 컴포넌트의 특정 부분을 유연하게 대체할 수 있습니다. 이를 통해 컴포넌트의 구조를 유지하면서도 특정 부분만 커스터마이징할 수 있습니다.

```tsx
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }
>(({ asChild = false, iconLeft, iconRight, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp {...props} ref={forwardedRef}>
      {iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight}
    </Comp>
  );
});

// 사용 예시
<Button asChild iconLeft={<Icon name="link" />}>
  <a href="https://example.com">Visit Website</a>
</Button>;
```

### 4. Ref 핸들링

`Slot` 컴포넌트는 상위 컴포넌트에서 전달된 ref를 받아 슬롯에 전달된 요소의 ref와 병합합니다. 함수 타입의 ref는 해당 함수를 호출하여 DOM 노드를 전달하고, 객체 타입의 ref는 해당 객체의 current 속성에 DOM 노드를 할당합니다.

```tsx
const Parent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Slot ref={inputRef}>
      <input type="text" placeholder="포커스가 잡힙니다." />
    </Slot>
  );
};
```
