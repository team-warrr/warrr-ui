# @warrr-ui/loading

Loading 컴포넌트는 로딩 상태인 컴포넌트임을 명시적으로 나타내기 위해 사용합니다.

로딩 상태일 때 노출되는 fallback UI를 해당 컴포넌트로 감싸면 loading에 대한 웹 접근성을 챙길 수 있습니다.

## 설치 방법

```bash
pnpm add @warrr-ui/loading
# or
yarn add @warrr-ui/loading
# or
npm i @warrr-ui/loading
```

## 사용 예시

### as

`as` 속성을 이용하여 polymorphic한 로딩 컴포넌트를 사용할 수 있습니다.

as를 지정하지 않을 경우, 기본적으로 div 태그가 사용됩니다.

```jsx
<Loading as='span'/>
<Loading as='button'/>
```

### children

`children`을 통해 fallback UI를 지정해줄 수 있습니다.

children을 지정하지 않을 경우, 기본적으로 `로딩중입니다...`라는 텍스트가 노출됩니다.

```jsx
<Loading>잠시 기다려주세요</Loading>
```
