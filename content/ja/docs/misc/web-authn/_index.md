---
title: WebAuthn で認証する
linkTitle: WebAuthn で認証する
date: GETTO_DOCS_CONTENT_DATE
weight: 2
description: >
  認証フレームワークの役割の明確化
---

## 目的

- 認証の判定をフレームワークに任せる
- ユーザーのルックアップや属性の保存は各アプリケーションの責務
- ただし、WebAuthn 用の属性も存在する（認証回数とか）


## 概要

- 証明書をアカウントに紐づける
- 登録済みの証明書を保持しているなら認証する
