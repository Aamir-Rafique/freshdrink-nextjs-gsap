import localFont from 'next/font/local';

export const mona = localFont({
  src: '../../../public/fonts/MonaSans-VariableFont_wdth,wght.ttf',
  variable: '--font-mona',
  display: 'swap',
});

export const negra = localFont({
  src: '../../../public/fonts/modern-negra-demo.ttf',
  variable: '--font-negra',
  display: 'swap',
});

export const dmSerif = localFont({
  src: '../../../public/fonts/DMSerifText-Regular.ttf',
  variable: '--font-dmserif',
  display: 'swap',
});