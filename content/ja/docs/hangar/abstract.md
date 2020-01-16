---
title: 概観
linkTitle: 概観
date: GETTO_DOCS_CONTENT_DATE
draft: true
weight: 1
description: >
  ドメインモデル概観
---

![概観](abstract.png)

## PROJECT SOURCES

- [getto-systems/hangar : GitHub](https://github.com/getto-systems/hangar)


## 概要

### ベースイメージの作成

以下ので順でホストに push する。

1. イメージのビルド
1. ホストに `getto/hangar:{HANGAR_ID}-{日時}` tag を push


### リリースイメージの作成

以下ので順でホストに push する。

1. イメージのビルド
1. ホストに `{イメージ名}:{バージョン番号|latest}` tag を push


### イメージのテスト

イメージに対して以下のテストを行う。

- 成果物のテスト
- イメージの脆弱性チェック
