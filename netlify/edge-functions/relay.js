export default async (request, context) => {
  // آدرس سرور خودت را اینجا وارد کن
  // مثال: "https://example.com:5959" یا "https://12.34.56.78:443"
  const TARGET_URL = "https://add.siatest.shop:59969";
  
  const url = new URL(request.url);
  const targetUrl = `${TARGET_URL}${url.pathname}${url.search}`;
  
  const headers = new Headers(request.headers);
  headers.set("Host", new URL(TARGET_URL).host);
  
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: headers,
    body: request.body,
  });
  
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
};

export const config = { path: "/*" };
