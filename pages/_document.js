import { html, css, raw, svg, js } from 'ucontent';

export default ({meta, body}) => html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <base href="/" >
      <title>${meta.title}</title>
      <meta name="description" content="${meta.description}" />

      <!-- Favicon generated using realfavicongenerator.net -->
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=eEY59WGawk">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=eEY59WGawk">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=eEY59WGawk">
      <link rel="manifest" href="/favicon/site.webmanifest?v=eEY59WGawk">
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=eEY59WGawk" color="#3d668f">
      <link rel="shortcut icon" href="/favicon/favicon.ico?v=eEY59WGawk">
      <meta name="msapplication-TileColor" content="#3d668f">
      <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=eEY59WGawk">
      <meta name="theme-color" content="#ffffff">

      <link rel="stylesheet" type="text/css" href="/styles/global.css" />
    </head>
    <body>
      <script src="/scripts/dots.js" />
      <script>${js`
        window.onload = function(){
          let easel = new Dots("easel", {
            terrain: "world.png",
            colors: {
              "0.0": "hsl(310,50%,5%)",
              "0.02": "hsl(320,100%,5%)",
              "0.15": "hsl(280,100%,20%)",
              "0.2": "hsl(260,100%,40%)",
              "0.4": "hsl(210,100%,70%)",
              "1.0": "#fff"
            },
            particles: 2000000,
            fade: 0.97,
            speed: 0.2,
            dropRate: 0.2
          })
        }
      `}
      </script>
      <div class="background"></div>
      ${body}
    </body>
  </html>
`.min().toString()