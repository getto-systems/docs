---
title: Psycher
linkTitle: Psycher
date: GETTO_DOCS_CONTENT_DATE
weight: 2
description: >
  システム同士のコミュニケーション円滑化
---

## 目的

- システム同士のコミュニケーションを円滑にする
  - 通知から Pipeline など、外部システム同士でつなぐ必要がある場合の緩衝材
  - １つのイベントから、複数の宛先にメッセージを投げることを可能にする

この目的のため、イベントの発行元ごとに Bot を作成する。

- Slack : Slack App からの通知を受け取る
- Getto : 独自イベントの通知を受け取る
- Docker Hub : ビルド完了の通知を受け取る

## 概要

### Slack

#### Mention

Slack Bot に対して mention をつけた場合、以下の処理を行う。

- deploy : プロダクトのデプロイを行う
- deploy target not found : デプロイの対象が見つからないというメッセージを返す
- greeting : あいさつのメッセージを返す
- unknown mention : 不明な mention がされたというメッセージを返す


### Getto

各種通知に対してアクションを行う。


#### Deploy

デプロイスクリプトからデプロイ完了の通知を受け取って Slack に通知する。

- 成功・失敗のリアクションを追加する


#### Push Latest

push スクリプトから latest イメージの push 完了の通知を受け取って Slack に通知する。


### Docker Hub

#### Pushed

DockerHub Webhook からビルド完了の通知を受け取って latest タグの push を行う。

