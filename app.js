const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 配置代理
app.use('/api', createProxyMiddleware({
  target: 'https://ytzpt.test.wdtszkj.com', // 替换为目标服务的地址
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

// 启动服务器
app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
