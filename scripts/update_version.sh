#!/bin/bash

./scripts/update_gcloud.sh
./scripts/update_hugo.sh

if [ "$(git status -s Dockerfile)" ]; then
  git add Dockerfile
  git commit -m "update: tool version"

  curl https://trellis.getto.systems/ci/bump-version/1.2.2/request.sh | bash -s -- ./.update-version-message.sh
fi
