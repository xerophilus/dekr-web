import localFont from 'next/font/local';

// Austin News Deck Family
export const austinNewsFont = localFont({
  variable: '--font-austin',
  src: [
    {
      path: '../../public/fonts/AustinNewsDeck-Roman-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AustinNewsDeck-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AustinNewsDeck-Semibold-Trial.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AustinNewsDeck-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AustinNewsDeck-Italic-Trial.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
});

// Graphik Font Family
export const graphikFont = localFont({
  variable: '--font-graphik',
  src: [
    {
      path: '../../public/fonts/Graphik-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Semibold-Trial.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-RegularItalic-Trial.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
}); 