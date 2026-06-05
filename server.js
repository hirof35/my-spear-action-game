const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// publicフォルダ内のファイルを静的ファイルとして公開
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});