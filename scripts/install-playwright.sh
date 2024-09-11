#!/bin/sh

if [ ! -d "$HOME/.cache/ms-playwright" ]; then
  echo "저장된 캐시가 없습니다. playwright를 설치합니다."
  pnpm exec playwright install --with-deps
else
  echo "캐시가 저장되어 있어, 설치 과정을 생략합니다."
fi
