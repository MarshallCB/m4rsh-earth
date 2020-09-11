import { html } from 'ucontent'
import document from './_document'

export default document({
  meta: {
    title: "Earth",
    description: "Our only planet (so far)."
  },
  body: html`
  <div id="easel-container">
    <canvas id="easel" />
  </div>
  `
})