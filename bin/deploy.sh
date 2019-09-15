#!/bin/bash

build_main(){
  local version
  local domain
  local metadata

  version=$(cat .release-version)

  sed -i -e 's|baseURL = "https://\([^/]\+\)/dev/"|baseURL = "https://\1/'"$version"'/"|' config.toml
  domain=$(grep "baseURL" config.toml | sed -e 's|.*baseURL = "https://\([^/]\+\)/.*|\1|')

  hugo -e production

  metadata=$(node metadata.js)

  aws s3 cp \
    --acl private \
    --cache-control "public, max-age=31536000" \
    --metadata "$metadata" \
    --recursive \
    public s3://$domain/$version
}

build_main