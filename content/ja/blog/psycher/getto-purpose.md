---
title: "Getto Bot による通知の処理"
linkTitle: "Getto Bot による通知"
date: GETTO_DOCS_CONTENT_DATE
description: >
  Getto Bot の目的まとめ
---

## 目的

下記の目的で Getto Bot を実装した。

- リリース完了通知を受け取る
  - Slack のメッセージにリアクションをつけることで完了通知を行う
- ビルド完了通知を受け取る
  - Slack にメッセージを投稿することで完了通知を行う


## 指標

Getto Bot によって、各種通知を受け取りたい。

この検証には、下記指標が使用できる。

- リリースの指示をする mention に対するアクション開始、完了の通知数
- リリース完了後のビルド完了の通知数


## 検証

追記日時 : `2019-09-24`（検証完了）

リリースの指示に対して開始、完了の通知が行われるようになった。

ビルドのトリガーとなるリリース完了の後に、ビルド完了の通知が行われるようになった。

これにより、処理が失敗しているのに待機している、という状況がなくなった。


## 課題

- リリースされたバーションを知りたい
  - スレッドに投稿
  - etc.
- ビルド開始を知りたい
  - リリース時に gitlab でビルドする
  - etc.