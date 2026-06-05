🏹 やり投げゲーム (Javelin Throw Game)
このプロジェクトは、Node.js (Express) と HTML5 Canvas を使用して作成された、ブラウザで遊べるシンプルな物理シミュレーション・やり投げゲームです。
<img width="1528" height="1037" alt="スクリーンショット 2026-06-06 053456" src="https://github.com/user-attachments/assets/941b742e-a0de-4151-aabc-65ec28f152b9" />

🎮 機能
物理演算: 重力と初速に基づいたリアルな放物線運動を再現。

弾道予測: 投げる前に、現在の設定（角度・パワー）でどこに落ちるかを点線で表示。

リアルタイム操作: スライダーで直感的に角度とパワーを調整可能。

Canvas描画: 速度ベクトルに合わせて回転する「やり」のグラフィック。

🚀 使い方
1. 前提条件
Node.js がインストールされていることを確認してください。

Bash
node -v
2. セットアップ
リポジトリをクローン（またはダウンロード）後、以下のコマンドでライブラリをインストールします。

Bash
npm install
3. 起動方法
以下のコマンドでサーバーを起動します。

Bash
node server.js
4. プレイ方法
ブラウザを開き、http://localhost:3000 にアクセスします。

スライダーを使って「角度」と「パワー」を調整します。

「投げる！」ボタンをクリックすると、設定した値で槍が発射されます。

飛距離が画面に表示されます。

🛠 使用技術
Backend: Node.js, Express

Frontend: HTML5 Canvas, Vanilla JavaScript

Build/Dependency: npm

📝 今後の拡張予定
[ ] スコアランキング機能（サーバーへの記録保存）

[ ] CSSによるゲーム画面のデザイン・装飾

[ ] 複数のプレイヤーによるリアルタイム対戦機能（Socket.io）

プロジェクト構成
Plaintext
javelin-game/
├── public/
│   ├── index.html    # ゲームUI
│   └── game.js       # ゲームロジック・物理演算
├── server.js         # Expressサーバー
└── package.json
