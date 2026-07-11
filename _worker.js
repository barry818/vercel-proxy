export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 将目标主机改为你的 Vercel 应用域名
    url.hostname = "webhtv-iota.vercel.app";
    url.protocol = "https:";

    // 保留原始路径和查询参数（比如 /api/xxx?key=value）
    // 构造新的请求，并复制原请求的 body 和 headers
    const newRequest = new Request(url, request);

    // 重要：Vercel 可能会根据 Host 头来识别站点，所以需要强制设置 Host
    newRequest.headers.set('Host', 'webhtv-iota.vercel.app');

    // 发起请求并返回响应
    return fetch(newRequest);
  },
};
