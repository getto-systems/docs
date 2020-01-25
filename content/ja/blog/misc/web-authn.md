---
title: WebAuthn で認証する
date: GETTO_DOCS_CONTENT_DATE
description: >
  ブラウザでの認証に WebAuthn を使用する
---

## 目的

パスワードを使用しないようにすることでよりセキュアにしたい。


## やったこと

- tour of go やった


## やること

- hello world 的な web app を作る
- WebAuthn のサンプルを試す
  - [webauthn basic web client/server](https://www.herbie.dev/blog/webauthn-basic-web-client-server/)
- 本番用の構成を考える
  - [duo-labs/webauthn.io](https://github.com/duo-labs/webauthn.io)


## あとでやること（たぶんできる）

- scratch イメージから本番用イメージを作成する
- Yubi Key が届いたら認証を試す


## 指標

- 実現できればそれだけでセキュアになる


## 検証

追記日時 : 2020-01-24（検証中）


## 課題

- 各現場にどうやって導入するか考えないといけない
  - パソコンを個人ごとに使用している場合
  - パソコンを複数人で共有している場合
