release_build_version
release_sync_version package.json

sed -i -e 's|baseURL = "https://docs.getto.systems/dev/"|baseURL = "https://docs.getto.systems/'"$version"'/"' config.toml
git add config.toml
