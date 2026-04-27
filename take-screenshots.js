const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const pages = [
    ['home', '/'],
    ['blog', '/blog'],
    ['ebooks', '/ebooks'],
    ['contato', '/contato'],
    ['diabetes', '/especialidades/diabetes'],
    ['microbiota', '/especialidades/microbiota'],
  ];
  for (const [name, path] of pages) {
    const page = await ctx.newPage();
    await page.goto('http://localhost:3000' + path, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.screenshot({ path: 'screenshots/' + name + '-current.png', fullPage: true });
    console.log('done: ' + name);
    await page.close();
  }
  // blog post
  const page2 = await ctx.newPage();
  await page2.goto('http://localhost:3000/blog', { waitUntil: 'networkidle', timeout: 10000 }).catch(() => {});
  const firstLink = await page2.$('a[href*="/blog/"]');
  if (firstLink) {
    const href = await firstLink.getAttribute('href');
    await page2.goto('http://localhost:3000' + href, { waitUntil: 'networkidle', timeout: 10000 }).catch(() => {});
    await page2.screenshot({ path: 'screenshots/blog-post-current.png', fullPage: true });
    console.log('done: blog-post');
  } else {
    console.log('no blog post link found');
  }
  await browser.close();
  console.log('all done');
})();
