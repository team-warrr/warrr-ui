#!/bin/sh

if [ -f ".github/environments/versions.env" ]; then
  export $(grep -v '^#' .github/environments/versions.env | xargs)
  echo "NODE_VERSION=$NODE_VERSION" >> $GITHUB_ENV
  echo "PNPM_VERSION=$PNPM_VERSION" >> $GITHUB_ENV
else
  echo "환경 변수 파일이 존재하지 않습니다."
  exit 1
fi
