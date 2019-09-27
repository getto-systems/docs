---
title: Slack
linkTitle: Slack
date: GETTO_DOCS_CONTENT_DATE
weight: 1
description: >
  Slack Bot 概観
---

![概観](abstract.png)


## 概要

- Handler : Event Type ごとに Action を実行する

各所で使用される情報は以下の通り。

- Event Info : `{ type, team, channel, timestamp, text }`
- セッション ID : `{ team, channel, timestamp }`
- 返信先 : `{ channel, timestamp }`
- Job シグニチャ : `{ team, channel }`


### Handler

- detect_actions : Event Info の type から対象の Action を取得
- perform : Action から処理を取得し、実行する

Action からは条件にあった処理が１つだけ返されることを想定している。
複数の処理が返された場合、先頭の処理のみ実行される。
条件にあった処理が無い場合は処理を行わない。

Action の詳細については [Actions](actions/) を参照。


### Conversation

以下の要素の集約ルート。

- Condition : Action での判定に使用する条件
- Progress : Session に処理開始済みかを問い合わせる
- Job : Pipeline をトリガーする
- Message : Stream に返信する


#### Condition

仕様パターンで、Action を起動するための条件を構築する。

- is_not_started_and : 条件の配列を「処理開始済みでない」の条件と and 結合して返す
- includes_some : キーワードのどれか１つでもテキストに含まれているなら true
- not_includes_any : includes_some の否定
- has_deploy_target : 「デプロイターゲットが存在する」なら true
- has_no_deploy_target : has_deploy_target の否定

以下の条件では各エンティティに問い合わせる。

- 処理開始済みでないか : Progress に問い合わせる
- デプロイターゲットが存在するか : Job に問い合わせる


#### Progress

- 初期化時に Session から uuid を取得する
- is_not_started : uuid、セッション ID を使用して、Session に会話開始済みか問い合わせる


##### Session

- generate_uuid : UUID Store から uuid を生成する
- is_not_started : Document Store を使用して会話処理の開始済み判定を行う


#### Job

- has_deploy_target : Job シグニチャを使用して、Deployment にデプロイターゲットを要求し、テキストにターゲットが含まれているなら true
- trigger_deploy_job : Job シグニチャ、返信先、デプロイターゲットを使用して、 Pipeline をトリガーする


##### Deployment

- targets : Job シグニチャを使用して、Secret Store からデプロイターゲットを取得する


##### Pipeline

- deploy : Job シグニチャ、デプロイターゲットを使用して、Secret Store から Job トークンを取得し、返信先と共に Job Store にデプロイする


#### Message

- reply : テキストの配列を受け取り、ランダムで Stream に返信する
- reaction : 絵文字の名前を使用して、 Stream に追加する


##### Stream

- post : Secret Store からメッセージトークンを取得し、返信先、テキストと共に Message Store にメッセージを投稿する
- add : Secret Store からメッセージトークンを取得、返信先、絵文字名と共に Message Store にリアクションを追加する


### UI

外部から提供される情報に対応する腐敗防止層。

- Slack Bot Event : AWS Lambda Function のイベントから Event Info を整形する
- i18n : Action が要求する言語ごとのテキストを提供する


### CONFORMIST

外部の接続先に対応する順応者。

- UUID Store : uuid で v4 uuid を生成する
- Document Store : AWS DynamoDB にアクセスする
- Secret Store : AWS Secret Manager にアクセスする
- Job Store : GitLab API にリクエストを送信する
- Message Store : Slack API にリクエストを送信する

このアプリケーションで扱えるようにするだけで、インターフェイスは外部のコンテキストそのまま。
ドメインの言語に変換するのはリポジトリなどの腐敗防止層が行う。
