---
title: UI層と gRPC で通信する
linkTitle: UI層と gRPC で通信する
date: GETTO_DOCS_CONTENT_DATE
weight: 1
description: >
  ドメインに集中する
---

## 目的

ドメインの知識がアプリケーション層に染み出すのを防ぐ。

- アプリケーション層として別途、gRPC を使用した通信モジュールを開発することで、ドメイン層を遠ざける
- UI層から通信の責務をなくすことで、UI層にアプリケーションの知識が染み出すのを防ぐ
- gRPC という目立つ要素を取り入れることで、アプリケーション層以外に gRPC の構造が使われていないか確認する


## 概要

- 通信、認証認可をアプリケーション層が受け持つ形にする
