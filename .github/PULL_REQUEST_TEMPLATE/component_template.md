<!-- PR 제목 한 번 확인해주세요!
브랜치 이름 + 주된 작업 요약
ex. feat/#1 프로젝트 세팅 -->

### 예상 동작 (Expected Behavior)

<!-- 컴포넌트를 사용했을 때의 예상 동작에 대해 작성합니다.

> 콘텐츠 섹션이 시각적으로 구분이 됩니다.
> 레이아웃의 구조를 명확히 하며, 사용자의 정보 탐색을 돕습니다.

-->

### 고민했던 내용 (Considerations)

<!-- 컴포넌트를 개발하며 어떤 것을 고민했는지, 작성한 로직 이외에 다른 대안이나 방법이 있었는지를 기술합니다.

> [radix ui의 Separator](https://github.com/radix-ui/primitives/blob/660060a765634e9cc7bf4513f41e8dabc9824d74/packages/react/separator/src/Separator.tsx#L10)의 경우 ORIENTATIONS 변수를 생성 후 Orientaion이라는 type을 만들었습니다.

warrr-ui에서는 Orientation의 type은 2개만 사용될 예정이고, `type Orientation = "horizontal" | "vertical";`로 작성하는 것이 가독성면에서 더 좋다고 판단하여 이와같이 작성하였습니다.

-->

### 관련 이슈

- resolved #(issue_num)
