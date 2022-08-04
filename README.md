# Git

一応リンクを残しておく<br>
https://qiita.com/konatsu_p/items/dfe199ebe3a7d2010b3e?utm_source=Qiita%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9&utm_campaign=1b94df5c7b-Qiita_newsletter_442_12_23_2020&utm_medium=email&utm_term=0_e44feaa081-1b94df5c7b-34690649

## コミットメッセージについて

一旦 gitmoji は利用しない

- fix: バグ修正
- add: 新規機能追加
- update: 機能修正（バグではない）
- remove: 機能（ファイル）削除
- clean: 整理（リファクタリング等）
- test: テストツール関連
- chore: ビルド、補助ツール、ライブラリ関連
- docs: ドキュメントのみの変更

# oshizukani

## まずは、単純な機能を作ってみる

- ログイン機能（今回は idaas を利用せず、自前で作る）
- ユーザー登録 or 招待
- oshizukani 機能
  トグルがオンの時は、oshizukani 状態にする！

## 将来的に追加

- 〇〇中という状態を増やせるようにする。たとえば、「お出かけ中」とか。

## 認証機能について

- **案 1 Azure AD B2C を利用** <br>
  - B2C で認証する場合、家族の紐付けはどのように行うのか？
  - たとえば、メールでリンクを送るとか？
  - 家族情報をどこかで保持しておいて、認証に成功したら家族情報も DB に登録する？

## Azure AD 認証

参考資料

- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react
- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/scenario-spa-app-registration
- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/scenario-spa-app-registration#redirect-uri-msaljs-20-with-auth-code-flow

## Azure AD B2C 認証

参考資料

- https://docs.microsoft.com/ja-jp/azure/active-directory-b2c/configure-authentication-sample-angular-spa-app
- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes （スコープについて）
- https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/3-Authorization-II/2-call-api-b2c/SPA/src/authConfig.js

## 検討

- azurite
