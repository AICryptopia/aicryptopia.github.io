/**
 * @jest-environment jsdom
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Index HTML', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = readFileSync(join(__dirname, '..', 'index.html'), 'utf8');
  });

  test('document title is correct', () => {
    expect(document.title).toBe('Welcome to AI Cryptopia');
  });

  test('meta viewport tag exists', () => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    expect(metaViewport).toBeTruthy();
    expect(metaViewport.getAttribute('content')).toBe('width=device-width, initial-scale=1.0');
  });

  test('logo link exists with correct attributes', () => {
    const logoLink = document.querySelector('link[rel="icon"]');
    expect(logoLink).toBeTruthy();
    expect(logoLink.getAttribute('type')).toBe('image/png');
    expect(logoLink.getAttribute('href')).toBe('aicryptopia-logo.png');
  });
}); 