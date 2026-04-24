import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    [...row.children].forEach((cell) => {
      const picture = cell.querySelector('picture');
      if (picture) {
        const img = picture.querySelector('img');
        cell.replaceWith(createOptimizedPicture(img.src, img.alt, true, [{ width: '1200' }]));
      }
    });
  });
}
