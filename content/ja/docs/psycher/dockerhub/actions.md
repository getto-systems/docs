---
title: DockerHub Bot Actions
linkTitle: Actions
date: GETTO_DOCS_CONTENT_DATE
weight: 1
description: >
  イベントごとの Action 詳細
---

## Pushed

DockerHub Webhook が pushed された場合、以下の処理を行う。

- trigger_push_latest : latest タグの push を行う


### trigger_push_latest

以下の条件を全て満たすなら、処理を行う。

- push latest ターゲットが存在する
- tag が「無視するタグ」に一致しない

処理の内容は以下の通り。

- push latest Job をトリガーする
