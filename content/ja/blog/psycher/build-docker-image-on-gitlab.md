---
title: "GitLab で Docker イメージをビルド"
date: GETTO_DOCS_CONTENT_DATE
description: >
  Docker イメージを GitLab でビルドすることでリリースの手順を減らす
---

## 目的

Docker イメージのテストを GitLab で行っている。
なら、リリースのためのビルドも GitLab でやれば良いのでは。

- GitLab でビルドすることで DockerHub のビルドを待つ必要がなくなる
- ビルド開始の通知を行うことができる


## 検証

追記日時 : `2020-01-18`（検証完了）

リリースの手順から DockerHub のビルドがなくなり、簡略化された。
