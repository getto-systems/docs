---
title: DockerHub Bot Actions
linkTitle: Actions
date: GETTO_DOCS_CONTENT_DATE
draft: true
weight: 1
description: >
  イベントごとの Action 詳細
---

## Pushed

### trigger_push_latest

以下の条件を全て満たすなら、処理を行う。

- push latest ターゲットが存在する
- tag が「無視するタグ」に一致しない

処理の内容は以下の通り。

- push latest Job をトリガーする
