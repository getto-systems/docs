---
title: DockerHub
linkTitle: DockerHub
date: GETTO_DOCS_CONTENT_DATE
weight: 3
description: >
  DockerHub Bot 概観
---

![概観](abstract.png)


## 概要

- Handler : Event Type ごとに Action を実行する

各所で使用される情報は以下の通り。

- Event Info : `{ type, name, tag }`
- Job シグニチャ : `{ name, tag }`
- 返信先 : `{ channel }`


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
- Job : Pipeline をトリガーする


#### Condition

仕様パターンで、Action を起動するための条件を構築する。

- has_push_latest_target_and : 条件の配列を「push latest ターゲットが存在する」の条件と and 結合して返す
- tag_not_matches_any : どのキーワードも tag にマッチしないなら true

以下の条件では各エンティティに問い合わせる。

- push latest ターゲットが存在する : Job に問い合わせる


#### Job

- has_push_latest_target : Job シグニチャを使用して、Deployment に push latest ターゲットが存在するか確認
- trigger_push_latest_job : Job シグニチャ、返信先、push latest ターゲットを使用して、 Pipeline をトリガーする


##### Deployment

- target_exists : Job シグニチャを使用して、Secret Store からデプロイターゲットを取得する
- channel : Job シグニチャを使用して、Secret Store から返信先 channel を取得する


##### Pipeline

- push_latest : Job シグニチャ、返信先を使用して、Secret Store から Job トークンを取得し、返信先と共に Job Store に push latest を指示する


### UI

外部から提供される情報に対応する腐敗防止層。

- DockerHub Webhook Event : DockerHub Webhook のイベントから Event Info を整形する
- i18n : Action が要求する言語ごとのテキストを提供する


### INFRA

外部の接続先に対応する腐敗防止層。

- Secret Store : AWS Secret Manager にアクセスする
- Job Store : GitLab API にリクエストを送信する
