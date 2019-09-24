---
title: "DockerHub Bot による latest タグの登録"
linkTitle: "DockerHub Bot によるタグ登録"
date: GETTO_DOCS_CONTENT_DATE
description: >
  DockerHub Bot の目的まとめ
---

## 目的

下記の目的で DockerHub Bot を実装した。

- latest タグを登録するのに複数回ビルドするのではなく、同一のイメージを使用する
  - ビルド完了時に latest タグを push する


## 指標

DockerHub Bot によって、ビルド回数が減少する。

この検証には、下記指標が使用できる。

- tag に対して行われるビルド回数


## 検証

追記日時 : `2019-09-24`（検証完了）

### DockerHub Bot 以前

計 2 回。

1. tag のビルド
1. latest のビルド


### DockerHub Bot 以後

計 1 回。

1. tag のビルド


### 比較

tag が push された場合のみ、DockerHub でビルドされるようになった。
