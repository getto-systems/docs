---
title: Getto
linkTitle: Getto
date: GETTO_DOCS_CONTENT_DATE
weight: 2
description: >
  Getto Bot 概観
---

![概観](abstract.png)


## 概要

- Handler : Event Type ごとに Action を実行する

各所で使用される情報は以下の通り。

- Event Info : `{ type, detail }`
- detail
  - deply : `{ reply_to, info: {}, result }`
  - push_latest : `{ reply_to, info: { image }, result }`
- 返信先 : `{ channel, timestamp }`


### Handler

- detect_actions : Event Info の type から対象の Action を取得
- perform : Action から処理を取得し、実行する

Action からは条件にあった処理が１つだけ返されることを想定している。
複数の処理が返された場合、先頭の処理のみ実行される。
条件にあった処理が無い場合は処理を行わない。

Action の詳細については [Actions](actions/) を参照。


### Notification

以下の要素の集約ルート。

- Condition : Action での判定に使用する条件
- Message : Stream に返信する


#### Condition

仕様パターンで、Action を起動するための条件を構築する。

- result_matches : 結果がキーワードに一致するなら true


#### Message

- reply : ユーザーとテキストの配列を受け取り、ランダムで Stream に返信する
- reaction : ユーザーと絵文字の名前を使用して、 Stream に追加する


##### Stream

- post : Secret Store からメッセージトークンを取得し、返信先、テキストと共に Message Store にメッセージを投稿する
- add : Secret Store からメッセージトークンを取得、返信先、絵文字名と共に Message Store にリアクションを追加する


### UI

外部から提供される情報に対応する腐敗防止層。

- Slack Bot Event : AWS Lambda Function のイベントから Event Info を整形する
- i18n : Action が要求する言語ごとのテキストを提供する


### INFRA

外部の接続先に対応する腐敗防止層。

- Secret Store : AWS Secret Manager にアクセスする
- Message Store : Slack API にリクエストを送信する
