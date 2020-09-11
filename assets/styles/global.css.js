const { css } = require('ucontent');

const reset = require('./_reset.css.js');
const typography = require('./_typography.css.js');

module.exports = css`
  ${reset}
  ${typography}
  ::selection{
    background-color: hsl(310, 60%, 90%);
    color: hsl(310, 100%, 40%);
  }
  html,body{
    background-color: hsl(310,50%,5%);
  }
  .background{
    position: fixed;
    pointer-events: none;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    background-image: linear-gradient(to bottom, hsl(310,50%,5%) 0%, hsl(310,100%,1%) 100%);
  }
  #easel-container{
    position: fixed;
    width: 96%;
    height: 0;
    padding-bottom: 50%;
    border-radius: 1em;
    box-shadow: 0 0 1em rgba(0,0,0,0.8);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
  }
  #easel{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: hsl(320,50%,5%);
  }
`.min().toString()