<!-- PR 제목 한 번 확인해주세요!
브랜치 이름 + 주된 작업 요약
ex. feat/#1 프로젝트 세팅 -->

### **요약 (Summary)**

<!-- 가장 먼저 테크 스펙을 세 줄 내외로 정리합니다. 테크 스펙의 제안 전체에 대해 누가/무엇을/언제/어디서/왜를 간략하면서도 명확하게 적습니다.

> Bottom Navigation 영역(하단 탭)을 유저가 원하는 순서로 커스텀할 수 있게 합니다. 서버에 순서 정렬 및 저장 API를 요청할 수 없으므로, 순서를 로컬에 저장하고 불러옵니다. -->

### **배경 (Background)**

<!-- 프로젝트의 Context를 적습니다. 왜 이 기능을 만드는지, 동기는 무엇인지, 어떤 사용자 문제를 해결하려 하는지, 이전에 이런 시도가 있었는지, 있었다면 해결이 되었는지 등을 포함합니다.

> 다양한 탭을 사용하는 유저는 Segment에 따라 하단 탭의 노출 수와 사용 빈도가 다릅니다. 예를 들어, 20대와 30대의 추천 탭 노출 수 사이는 월 n만 정도입니다. 이러한 유저의 Segment에 맞춰 하단 탭 순서를 유저가 직접 커스텀할 수 있다면 뱅크샐러드가 개인화되었다고 인지할 수 있을 것입니다. -->

### **목표 (Goals)**

<!-- 예상 결과들을 Bullet Point 형태로 나열합니다. 이 목표들과 측정 가능한 임팩트들을 이용해 추후 이 프로젝트의 성공 여부를 평가합니다.

> Bottom Navigation의 순서를 유저가 편집할 수 있게 한다.앱을 껐다 켰을 시에도 유저가 편집한 순서대로 하단 탭을 보이게 한다. -->

### **이외 고려 사항들 (Other Considerations)**

<!-- 고려했었으나 하지 않기로 결정된 사항들을 적습니다. 이렇게 함으로써 이전에 논의되었던 주제가 다시 나오지 않도록 할 수 있고, 이미 논의되었던 내용이더라도 리뷰어들이 다시 살펴볼 수 있습니다.

> 앱 데이터 초기화 시에는 사용자가 커스텀했던 리스트를 모두 날리기로 했었으나, 기존 로직에서 앱 데이터 초기화 시에 로컬 관련 추가 핸들링이 없어 이 기능에서도 앱 데이터 초기화 때에 리스트를 날리는 등 추가적인 기능 구현을 하지 않기로 함. -->

#### 관련 이슈

- resolved #(issue_num)