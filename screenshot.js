const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const pages = [
    { url: 'http://localhost:3000', name: 'home' },
    { url: 'http://localhost:3000/blog', name: 'blog' },
    { url: 'http://localhost:3000/blog/eixo-intestino-cerebro-como-sua-microbiota-influencia-suas-emocoes', name: 'blog-post' },
    { url: 'http://localhost:3000/ebooks', name: 'ebooks' },
    { url: 'http://localhost:3000/especialidades/diabetes', name: 'diabetes' },
    { url: 'http://localhost:3000/especialidades/microbiota', name: 'microbiota' },
    { url: 'http://localhost:3000/contato', name: 'contato' },
    { url: 'http://localhost:3000/admin/login', name: 'admin-login' },
  ];

  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    try {
      await page.goto(p.url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(1500);
      await page.screenshot({
        path: `/home/ubuntu/nutrisynapse/screenshots/${p.name}-full.png`,
        fullPage: true,
      });
      await page.screenshot({
        path: `/home/ubuntu/nutrisynapse/screenshots/${p.name}-viewport.png`,
      });
      console.log(`  done`);
    } catch (e) {
      console.log(`  failed: ${e.message}`);
    }
  }

  // Mobile version of home
  console.log('Capturing home mobile...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  try {
    await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
    await mobilePage.waitForTimeout(1500);
    await mobilePage.screenshot({
      path: `/home/ubuntu/nutrisynapse/screenshots/home-mobile-full.png`,
      fullPage: true,
    });
    console.log('  home mobile done');
  } catch (e) {
    console.log(`  home mobile failed: ${e.message}`);
  }

  await browser.close();
  console.log('All done!');
})();
