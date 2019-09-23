---
title: Psycher
linkTitle: Psycher
date: GETTO_DOCS_CONTENT_DATE
weight: 2
description: >
  通知や WebHook を一旦引き取って Slack や Pipeline につなぐ Bot
---

Bot は下記の目的で作成する。

- 通知から Pipeline につなぐなど、外部システム同士でつなぐ必要がある場合の緩衝材
- １つのイベントから Slack、Pipeline など、複数の宛先にメッセージを投げることを可能にする

この目的のため、イベントの発行元ごとに Bot を作成する。

- Slack : Slack App からの通知を受け取る
- Docker Hub : ビルド完了の通知を受け取る
- Getto : 独自イベントの通知を受け取る
