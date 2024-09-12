#!/bin/sh

if [ ! -d "node_modules" ] || [ ! -d "$HOME/.pnpm-store" ]; then
  echo "저장된 캐시가 없거나 캐시가 손상되었습니다. 의존성을 설치합니다."
  pnpm install --frozen-lockfile
else
  echo "캐시가 저장되어 있어, 설치 과정을 생략합니다."
fi
