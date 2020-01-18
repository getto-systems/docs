---
title: UI層と gRPC で通信する
date: GETTO_DOCS_CONTENT_DATE
description: >
  ブラウザとドメインサービスの通信に gRPC を使用する
---

## 目的

ドメインの知識がアプリケーション層に染み出すのを防ぐため、UI層との通信に gRPC を使用する。

- アプリケーション層として別途、gRPC を使用した通信モジュールを開発することで、ドメイン層を遠ざける
- UI層から通信の責務をなくすことで、UI層にアプリケーションの知識が染み出すのを防ぐ
- gRPC という目立つ要素を取り入れることで、アプリケーション層以外に gRPC の構造が使われていないか確認する


## まずやること

- Fastly を通して gRPC できるのか
  - ブラウザと gRPC してみる
    - [grpc-web](https://github.com/grpc/grpc-web) でブラウザと gRPC できそう
    - [Envoy](https://www.envoyproxy.io/) を使用するみたい
  - Fastly にデプロイして通信できるか検証
    - Envoy を使うことでなんとかなる、かな


## 指標

- TODO : なにを指標として使用するのが良いか


## 検証

追記日時 : `2020-01-19`（検証中）


## 課題

- TODO : なにが課題となるか
