/**
 * @jest-environment jsdom
 */

describe('Index HTML', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = require('fs').readFileSync('./index.html', 'utf8');
  });

  test('document has a title', () => {
    expect(document.title).toBeTruthy();
  });

  test('meta viewport tag exists', () => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    expect(metaViewport).toBeTruthy();
    expect(metaViewport.getAttribute('content')).toBe('width=device-width, initial-scale=1.0');
  });

  test('favicon link exists', () => {
    const logoLink = document.querySelector('link[rel="icon"]');
    expect(logoLink).toBeTruthy();
    expect(logoLink.getAttribute('type')).toBe('image/png');
  });
}); 