// Go to Line - Press Control Key + G (^G)

// Line 3548 - index 100, Line 7263 - index 200, Line 11824 - index 300. Ending...

// Line 16    - Circle ...Starting
// Line 2706  - Bubble
// Line 3804  - Box
// Line 5507  - Line
// Line 6018  - Progress
// Line 6932  - Text
// Line 7742  - Objects
// Line 10463 - Egg
// Line 11557 - Sign

export const loaders = [
  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 5px solid palegoldenrod;
      border-bottom-color: gold;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 5px solid gold;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid gold;
      animation: prixClipFix 2s linear infinite ;
    }

    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid palegoldenrod;
      animation: prixClipFix 2s linear infinite ;
    }
    .loader::after {
      transform: rotate3d(90, 90, 0, 180deg );
      border-color: gold;
    }

    @keyframes rotate {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
    @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before,
    .loader::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid palegoldenrod;
      animation: prixClipFix 2s linear infinite ;
    }
    .loader::after {
      inset: 8px;
      transform: rotate3d(90, 90, 0, 180deg );
      border-color: gold;
    }

    @keyframes rotate {
      0%   {transform: rotate(0deg)}
      100%   {transform: rotate(360deg)}
    }
    @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before,
    .loader::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid palegoldenrod;
      animation: prixClipFix 2s linear infinite ;
    }
    .loader::after{
      border-color: gold;
      animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
      inset: 6px;
    }

    @keyframes rotate {
      0%   {transform: rotate(0deg)}
      100%   {transform: rotate(360deg)}
    }
    @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: gold;
    }
    
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    } 
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: gold;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid;
      border-color: gold transparent;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid;
      border-color: gold transparent;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: gold;
      width: 6px;
      height: 6px;
      transform: translate(150%, 150%);
      border-radius: 50%;
    }
    .loader::before {
      left: auto;
      top: auto;
      right: 0;
      bottom: 0;
      transform: translate(-150%, -150%);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: gold;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .loader::before {
      left: auto;
      top: auto;
      right: 0;
      bottom: 0;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: gold;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }
        
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      border: 2px solid gold;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 4px;
      top: 4px;
      border: 2px solid palegoldenrod;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
        
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      border: 3px solid;
      border-color: palegoldenrod palegoldenrod transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent gold gold;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      animation: rotationBack 0.5s linear infinite;
      transform-origin: center center;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      border: 3px solid;
      border-color: palegoldenrod palegoldenrod transparent transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent gold gold;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-sizing: border-box;
      animation: rotationBack 0.5s linear infinite;
      transform-origin: center center;
    }
    .loader::before {
      width: 32px;
      height: 32px;
      border-color: palegoldenrod palegoldenrod transparent transparent;
      animation: rotation 1.5s linear infinite;
    }
        
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px dotted palegoldenrod;
      border-style: solid solid dotted dotted;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 2s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px dotted gold;
      border-style: solid solid dotted;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      animation: rotationBack 1s linear infinite;
      transform-origin: center center;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 0;
      background: gold;
      width: 3px;
      height: 24px;
      transform: translateX(-50%);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 5px solid gold;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      animation: pulse 1s linear infinite;
    }
    .loader:after {
      content: '';
      position: absolute;
      width: 48px;
      height: 48px;
      border: 5px solid gold;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: scaleUp 1s linear infinite;
    }

    @keyframes scaleUp {
      0% { transform: translate(-50%, -50%) scale(0) }
      60% , 100% { transform: translate(-50%, -50%)  scale(1)}
    }
    @keyframes pulse {
      0% , 60% , 100%{ transform:  scale(1) }
      80% { transform:  scale(1.2)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 2px solid gold;
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s linear infinite;
    }
    .loader::after {
      animation-delay: 1s;
    }

    @keyframes animloader {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 5px dotted gold;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 2s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      color: gold;
      font-size: 10px;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: relative;
      text-indent: -9999em;
      animation: mulShdSpin 1.3s infinite linear;
      transform: translateZ(0);
    }

    @keyframes mulShdSpin {
      0%,100% {
        box-shadow: 0 -3em 0 0.2em, 
        2em -2em 0 0em, 3em 0 0 -1em, 
        2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 -1em, -3em 0 0 -1em, 
        -2em -2em 0 0;
      }
      12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
        3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 -1em, -3em 0 0 -1em, 
        -2em -2em 0 -1em;
      }
      25% {
        box-shadow: 0 -3em 0 -0.5em, 
        2em -2em 0 0, 3em 0 0 0.2em, 
        2em 2em 0 0, 0 3em 0 -1em, 
        -2em 2em 0 -1em, -3em 0 0 -1em, 
        -2em -2em 0 -1em;
      }
      37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
        3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
        -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
        3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
        -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
        3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
        -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
      }
      75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
        3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
      }
      87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
        3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
        -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
      }
    }`,
  },

  {
    css: `.loader {
      font-size: 10px;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: relative;
      text-indent: -9999em;
      animation: mulShdSpin 1.1s infinite ease;
      transform: translateZ(0);
    }

    @keyframes mulShdSpin {
      0%,100% {
        box-shadow: 0em -2.6em 0em 0em gold, 1.8em -1.8em 0 0em rgba(255,215,0, 0.2), 2.5em 0em 0 0em rgba(255,215,0, 0.2), 1.75em 1.75em 0 0em rgba(255,215,0, 0.2), 0em 2.5em 0 0em rgba(255,215,0, 0.2), -1.8em 1.8em 0 0em rgba(255,215,0, 0.2), -2.6em 0em 0 0em rgba(255,215,0, 0.5), -1.8em -1.8em 0 0em rgba(255,215,0, 0.7);
      }
      12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.7), 1.8em -1.8em 0 0em gold, 2.5em 0em 0 0em rgba(255,215,0, 0.2), 1.75em 1.75em 0 0em rgba(255,215,0, 0.2), 0em 2.5em 0 0em rgba(255,215,0, 0.2), -1.8em 1.8em 0 0em rgba(255,215,0, 0.2), -2.6em 0em 0 0em rgba(255,215,0, 0.2), -1.8em -1.8em 0 0em rgba(255,215,0, 0.5);
      }
      25% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.5), 1.8em -1.8em 0 0em rgba(255,215,0, 0.7), 2.5em 0em 0 0em gold, 1.75em 1.75em 0 0em rgba(255,215,0, 0.2), 0em 2.5em 0 0em rgba(255,215,0, 0.2), -1.8em 1.8em 0 0em rgba(255,215,0, 0.2), -2.6em 0em 0 0em rgba(255,215,0, 0.2), -1.8em -1.8em 0 0em rgba(255,215,0, 0.2);
      }
      37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.2), 1.8em -1.8em 0 0em rgba(255,215,0, 0.5), 2.5em 0em 0 0em rgba(255,215,0, 0.7), 1.75em 1.75em 0 0em gold, 0em 2.5em 0 0em rgba(255,215,0, 0.2), -1.8em 1.8em 0 0em rgba(255,215,0, 0.2), -2.6em 0em 0 0em rgba(255,215,0, 0.2), -1.8em -1.8em 0 0em rgba(255,215,0, 0.2);
      }
      50% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.2), 1.8em -1.8em 0 0em rgba(255,215,0, 0.2), 2.5em 0em 0 0em rgba(255,215,0, 0.5), 1.75em 1.75em 0 0em rgba(255,215,0, 0.7), 0em 2.5em 0 0em gold, -1.8em 1.8em 0 0em rgba(255,215,0, 0.2), -2.6em 0em 0 0em rgba(255,215,0, 0.2), -1.8em -1.8em 0 0em rgba(255,215,0, 0.2);
      }
      62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.2), 1.8em -1.8em 0 0em rgba(255,215,0, 0.2), 2.5em 0em 0 0em rgba(255,215,0, 0.2), 1.75em 1.75em 0 0em rgba(255,215,0, 0.5), 0em 2.5em 0 0em rgba(255,215,0, 0.7), -1.8em 1.8em 0 0em gold, -2.6em 0em 0 0em rgba(255,215,0, 0.2), -1.8em -1.8em 0 0em rgba(255,215,0, 0.2);
      }
      75% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.2), 1.8em -1.8em 0 0em rgba(255,215,0, 0.2), 2.5em 0em 0 0em rgba(255,215,0, 0.2), 1.75em 1.75em 0 0em rgba(255,215,0, 0.2), 0em 2.5em 0 0em rgba(255,215,0, 0.5), -1.8em 1.8em 0 0em rgba(255,215,0, 0.7), -2.6em 0em 0 0em gold, -1.8em -1.8em 0 0em rgba(255,215,0, 0.2);
      }
      87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255,215,0, 0.2), 1.8em -1.8em 0 0em rgba(255,215,0, 0.2), 2.5em 0em 0 0em rgba(255,215,0, 0.2), 1.75em 1.75em 0 0em rgba(255,215,0, 0.2), 0em 2.5em 0 0em rgba(255,215,0, 0.2), -1.8em 1.8em 0 0em rgba(255,215,0, 0.5), -2.6em 0em 0 0em rgba(255,215,0, 0.7), -1.8em -1.8em 0 0em gold;
      }
    }`,
  },

  {
    css: `.loader {
      color: gold;
      font-size: 45px;
      text-indent: -9999em;
      overflow: hidden;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: relative;
      transform: translateZ(0);
      animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
    }

    @keyframes mltShdSpin {
      0% {
        box-shadow: 0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
      5%, 95% {
        box-shadow: 0 -0.83em 0 -0.4em, 
        0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
      10%, 59% {
        box-shadow: 0 -0.83em 0 -0.4em, 
        -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
        -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
      }
      20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
        -0.749em -0.34em 0 -0.477em;
      }
      38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
        -0.82em -0.09em 0 -0.477em;
      }
      100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
        0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
      }
    }
    @keyframes round {
      0% { transform: rotate(0deg) }
      100% { transform: rotate(360deg) }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      background: linear-gradient(0deg, palegoldenrod 33%, gold 100%);
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #444;
    }

    @keyframes rotation {
      0% { transform: rotate(0deg) }
      100% { transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      transform: rotateZ(45deg);
      perspective: 1000px;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      color: palegoldenrod;
    }
    .loader:before,
    .loader:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      border-radius: 50%;
      transform: rotateX(70deg);
      animation: 1s spin linear infinite;
    }
    .loader:after {
      color: gold;
      transform: rotateY(70deg);
      animation-delay: .4s;
    }

    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
      }
    }
    @keyframes rotateccw {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
    @keyframes spin {
      0%, 100% {
        box-shadow: .2em 0px 0 0px currentcolor;
      }
      12% {
        box-shadow: .2em .2em 0 0 currentcolor;
      }
      25% {
        box-shadow: 0 .2em 0 0px currentcolor;
      }
      37% {
        box-shadow: -.2em .2em 0 0 currentcolor;
      }
      50% {
        box-shadow: -.2em 0 0 0 currentcolor;
      }
      62% {
        box-shadow: -.2em -.2em 0 0 currentcolor;
      }
      75% {
        box-shadow: 0px -.2em 0 0 currentcolor;
      }
      87% {
        box-shadow: .2em -.2em 0 0 currentcolor;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      border-top: 3px solid gold;
      border-right: 3px solid transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      border-top: 4px solid palegoldenrod;
      border-right: 4px solid transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-bottom: 4px solid gold;
      border-left: 4px solid transparent;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      border-top: 4px solid palegoldenrod;
      border-right: 4px solid transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-left: 4px solid gold;
      border-bottom: 4px solid transparent;
      animation: rotation 0.5s linear infinite reverse;
    }
    
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 5px solid;
      border-color: gold transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      border: 10px solid;
      border-color: rgba(255, 215, 0, 0.15) rgba(255, 215, 0, 0.25) rgba(255, 215, 0, 0.35) rgba(255, 215, 0, 0.5);
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      border: 10px solid;
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        border-color: gold rgba(255, 215, 0, 0) rgba(255, 215, 0, 0) rgba(255, 215, 0, 0);
      }
      33% {
        border-color: gold gold rgba(255, 215, 0, 0) rgba(255, 215, 0, 0);
      }
      66% {
        border-color: gold gold gold rgba(255, 215, 0, 0);
      }
      100% {
        border-color: gold gold gold gold;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border:10px solid palegoldenrod;
      border-radius: 50%;
      position: relative;
      transform:rotate(45deg);
      box-sizing: border-box;
    }
    .loader::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      inset:-10px;
      border-radius: 50%;
      border:10px solid gold;
      animation: prixClipFix 2s infinite linear;
    }

    @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 64px;
      height: 64px;
      background: palegoldenrod;
      border-radius: 50%;
      overflow: hidden;
    }
    .loader:after {
      content: '';
      position: absolute;
      inset: 8px;
      margin: auto;
      background: #333b32;
      border-radius: 50%;
    }
    .loader:before{
      content: '';
      position: absolute;
      inset: 0px;
      margin: auto;
      background: gold;
      animation: crlMugLoader 2s linear infinite alternate;
    }

    @keyframes crlMugLoader {
      0%  ,10% { transform: translateY(64px) }
      90% , 100% { transform: translateY(0px) }
    }`,
  },

  {
    css: `.loader {
      width: 70px;
      height: 35px;
      position: relative;
      overflow: hidden;
    }
    .loader:before {
      content: "";
      width: 70px;
      height: 70px;
      position: absolute;
      left: 0;
      top: 0;
      border: 5px solid #0000;
      border-color: gold gold #0000 #0000;
      border-radius: 50%;
      box-sizing: border-box;
      animation: rotate 3s ease-in-out infinite;
      transform: rotate(-200deg);
    }

    @keyframes rotate {
      0% {
        border-width: 10px;
      }
      25% {
        border-width: 3px;
      }
      50% {
        transform: rotate(115deg);
        border-width: 10px;
      }
      75% {
        border-width: 3px;
      }
      100% {
        border-width: 10px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 3px solid gold;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      position: absolute;
      box-sizing: border-box;
      left: 20px;
      top: 31px;
      border: 10px solid transparent;
      border-right-color: gold;
      transform: rotate(-40deg);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-width: 3px;
      border-style: dashed solid  solid dotted;
      border-color: gold gold transparent gold;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 20px;
      top: 31px;
      border: 10px solid transparent;
      border-right-color: gold;
      transform: rotate(-40deg);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      border: 3px solid;
      border-color: gold #0000 palegoldenrod #0000;
      border-radius: 50%;
      box-sizing: border-box;
     animation: 1s rotate linear infinite;
    }
    .loader:before,
    .loader:after {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      border: 10px solid transparent;
      border-bottom-color: palegoldenrod;
      transform: translate(-10px, 19px) rotate(-35deg);
    }
    .loader:after {
      border-color: gold #0000 #0000 #0000 ;
      transform: translate(32px, 3px) rotate(-35deg);
    }

    @keyframes rotate {
      100%{    transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      border-width: 3px 2px 3px 2px;
      border-style: solid dotted solid dotted;
      border-color: gold rgba(255, 215, 0,0.3) palegoldenrod palegoldenrod;
      border-radius: 50%;
      box-sizing: border-box;
      animation: 1s rotate linear infinite;
    }
    .loader:before,
    .loader:after {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      border: 10px solid transparent;
      border-bottom-color: palegoldenrod;
      transform: translate(-10px, 19px) rotate(-35deg);
    }
    .loader:after {
      border-color: gold #0000 #0000 #0000 ;
      transform: translate(32px, 3px) rotate(-35deg);
    }

    @keyframes rotate {
      100%{transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      background: gold;
      display: inline-block;
      border-radius: 50%;
      box-sizing: border-box;
      animation: animloader 1s ease-in infinite;
    }

    @keyframes animloader {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: gold;
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s linear infinite;
    }
    .loader::after {
      animation-delay: 1s;
    }

    @keyframes animloader {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';  
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: gold;
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      animation: animloader 2s ease-in-out infinite;
    }
    .loader::after {
      animation-delay: 1s;
    }

    @keyframes animloader {
      0%, 100% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        transform: scale(1);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 8px;
      height: 8px;
      position: relative;
      border-radius: 50%;
      background: gold;
      animation: wave 1s ease-in infinite;
    }

    @keyframes wave {
      0% {  box-shadow:
        0 0 0 0px rgba(255, 215, 0, 1),
        0 0 0 20px rgba(255, 215, 0, 0.2),
        0 0 0 40px rgba(255, 215, 0, 0.6),
        0 0 0 60px rgba(255, 215, 0, 0.4),
        0 0 0 80px rgba(255, 215,0, 0.2);
      }
      100% {  box-shadow:
        0 0 0 80px rgba(255, 215,0, 0),
        0 0 0 60px rgba(255, 215,0, 0.2),
        0 0 0 40px rgba(255, 215,0, 0.4),
        0 0 0 20px rgba(255, 215,0, 0.6),
        0 0 0 0px rgba(255, 215,0, 1);
      }
    }`,
  },

  {
    css: `.loader {
      font-size:48px;
      color: gold;
      width: 1em;
      height: 1em;
      box-sizing: border-box;
      background-color: currentcolor;
      position: relative;
      border-radius: 50%;
      transform: rotateX(-60deg) perspective(1000px);
    }
    .loader:before,
    .loader:after {
      content: '';
      display: block;
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      animation: flowerFlow 1s ease-out infinite;
    }
    .loader:after {
      animation-delay: .4s;
    }

    @keyframes flowerFlow {
      0% {
        opacity: 1;
        transform: rotate(0deg);
        box-shadow: 0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor,
        0 0 0 -.5em currentcolor;
      }
      100% {
        opacity: 0;
        transform: rotate(180deg);
        box-shadow: -1em -1em 0 -.35em currentcolor,
        0 -1.5em 0 -.35em currentcolor,
        1em -1em 0 -.35em currentcolor,
        -1.5em 0 0 -.35em currentcolor,
        1.5em -0 0 -.35em currentcolor,
        -1em 1em 0 -.35em currentcolor,
        0 1.5em 0 -.35em currentcolor,
        1em 1em 0 -.35em currentcolor;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50% , -50%);
      width: 48em;
      height: 48em;
      background-image:
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0),
        radial-gradient(circle 10px, gold 100%, transparent 0);
      background-position: 0em -18em, 0em 18em, 18em 0em, -18em 0em, 13em -13em, -13em -13em, 13em 13em, -13em 13em;
      background-repeat: no-repeat;
      font-size: 0.5px;
      border-radius: 50%;
      animation: blast 1s ease-in infinite;
    }
    .loader::after {
      font-size: 1px;
      background: gold;
      animation: bounce 1s ease-in infinite;
    }

    @keyframes bounce {
      0% , 100%{ font-size: 0.75px }
      50% { font-size: 1.5px }
    }
    @keyframes blast {
      0% , 40% {
        font-size: 0.5px;
      }
      70% {
        opacity: 1;
        font-size: 4px;
      }
      100% {
        font-size: 6px;
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: calc(100px - 24px);
      height: 50px;
      position: relative;
      animation: flippx 2s infinite linear;
    }
    .loader:before {
      content: "";
      position: absolute;
      inset: 0;
      margin: auto;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: gold;
      transform-origin: -24px 50%;
      animation: spin 1s infinite linear;
    }
    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50% , -50%);
      background: gold;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    @keyframes flippx {
      0%, 49% {
        transform: scaleX(1);
      }
      50%, 100% {
        transform: scaleX(-1);
      }
    }
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      margin: auto;
      box-sizing: border-box;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid rgba(255, 215, 0, 0.1);
      transform-origin: 50% 50%;
      transform: perspective(200px) rotateX(66deg);
      animation: spinner-wiggle 1.2s infinite;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 4px solid #0000;
      animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, spinner-fade 1.2s linear infinite;
    }
    .loader:before {
      border-top-color: palegoldenrod;
    }
    .loader:after {
      border-top-color: gold;
      animation-delay: 0.4s;
    }

    @keyframes spinner-spin {
      100% { transform: rotate(360deg)}
    }
    @keyframes spinner-fade {
      25%, 75% { opacity: 0.1}
      50% { opacity: 1 }
    }`,
  },

  {
    css: `.loader {
      width: 100px;
      height: 100px;
      background: linear-gradient(
        165deg,
        rgba(255, 215, 0, 1) 0%,
        rgb(218, 165, 32) 40%,
        rgb(184, 134, 11) 98%,
        rgb(10, 10, 10) 100% );
      border-radius: 50%;
      position: relative;
    }
    .loader:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border-bottom: 0 solid #ffd70005;
      box-shadow: 0 -10px 20px 20px #ffd70040 inset,
        0 -5px 15px 10px #ffd70050 inset, 0 -2px 5px #ffd70080 inset,
        0 -3px 2px #ffd700bb inset, 0 2px 0px gold, 0 2px 3px gold,
        0 5px 5px #ffd70090, 0 10px 15px #ffd70060, 0 10px 20px 20px #ffd70040;
      filter: blur(3px);
      animation: 2s rotate linear infinite;
    }

    @keyframes rotate {
      100% { transform: rotate(360deg) }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 6rem;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      animation: pulsOut 1.8s ease-in-out infinite;
      filter: drop-shadow(0 0 1rem rgba(255, 215, 0, 0.75));
    }
    .loader:before {
      width: 100%;
      padding-bottom: 100%;
      box-shadow: inset 0 0 0 1rem gold;
      animation-name: pulsIn;
    }
    .loader:after {
      width: calc(100% - 2rem);
      padding-bottom: calc(100% - 2rem);
      box-shadow: 0 0 0 0 gold;
    }

    @keyframes pulsIn {
      0% {
        box-shadow: inset 0 0 0 1rem gold;
        opacity: 1;
      }
      50%, 100% {
        box-shadow: inset 0 0 0 0 gold;
        opacity: 0;
      }
    }
    @keyframes pulsOut {
      0%, 50% {
        box-shadow: 0 0 0 0 gold;
        opacity: 0;
      }
      100% {
        box-shadow: 0 0 0 1rem gold;
        opacity: 1;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 100px;
      height: 100px;
    }
    .loader:before,
    .loader:after {
      content: '';
      border-radius: 50%;
      position: absolute;
      inset: 0;
      box-shadow: 0 0 10px 2px rgba(255, 215, 0, 0.3) inset;
    }
    .loader:after {
      box-shadow: 0 2px 0 gold inset;
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% {  transform: rotate(0)}
      100% { transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      width: 32px;
      height: 32px;
      transform: translateY(100%);
      border-radius: 50%;
      background: gold;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: gold;
      left: 50%;
      transform: translateX(-50%);
      top: -200%;
    }
    .loader:after {
      animation: moveX 0.5s infinite linear alternate;
    }

    @keyframes moveX {
      0% {
        top: 0% ;
        transform: translateX(-50%) scale(1.5);
      }
      50% {
        top: -75% ;
        transform: translateX(-50%) scale(0.5);
      }
      100% {
        top: -200%;
        transform: translateX(-50%) scale(1.5);
      }
    }`,
  },

  {
    css: `.loader {
      display: inline-block;
      transform: translateZ(1px);
    }
    .loader:after {
      content: '';
      display: inline-block;
      width: 48px;
      height: 48px;
      margin: 8px;
      border-radius: 50%;
      background: gold;
      animation: coin-flip 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    @keyframes coin-flip {
      0%, 100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
      }
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
      }
      100% {
        transform: rotateY(3600deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: -72px 0 gold inset;
      }
      100% {
        box-shadow: 48px 0 gold inset;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      position: relative;
      perspective: 500px;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 24px;
      height: 48px;
      background: gold;
      border-radius: 0 24px 24px 0;
      transform-origin: 0 0;
      animation: flip 2s linear infinite alternate;
    }
    .loader:after {
      left: 0;
      border-radius: 24px 0 0 24px;
      transform-origin: 100% 0;
      animation-delay: 1s;
    }

    @keyframes flip {
      0% , 10% { transform: rotateY(0deg)}
      90%, 100% { transform: rotateY(-180deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      border:24px solid #0000;
      border-radius:50%;
      animation: piefill 2s linear infinite;
    }

    @keyframes piefill {
      0% , 19%{ border-color: #0000 #0000 #0000 #0000 }
      20% , 39%{ border-color: gold #0000 #0000 #0000 }
      40% , 59%{ border-color: gold gold #0000 #0000 }
      60% , 79%{ border-color: gold gold gold #0000 }
      80% , 100% { border-color: gold gold gold gold }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      border:24px solid palegoldenrod;
      border-radius:50%;
      transform: rotate(45deg);
      animation: pieFill 3s linear infinite;
    }

    @keyframes pieFill {
      0% , 19%{ border-color: palegoldenrod palegoldenrod palegoldenrod palegoldenrod }
      20% , 39%{ border-color: gold palegoldenrod palegoldenrod palegoldenrod }
      40% , 59%{ border-color: gold gold palegoldenrod palegoldenrod }
      60% , 79%{ border-color: gold gold gold palegoldenrod }
      80% , 100% { border-color: gold gold gold gold }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      transform:rotate(45deg);
      background: palegoldenrod;
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border:24px solid gold;
      animation: prixClipFix 2s infinite linear;
    }

    @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }`,
  },

  {
    css: `.loader {
      border: 24px solid palegoldenrod;
      border-bottom-color: gold;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      border: 2px solid palegoldenrod;
      width: 48px;
      height: 48px;
      background: gold;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 2s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      border: 24px solid;
      border-color: transparent palegoldenrod;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      border: 24px solid gold;
      border-color: palegoldenrod palegoldenrod gold gold;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(-50% , -125%);
      left: 50%;
      width: 12px;
      height: 12px;
      background: gold;
      border-radius: 50%;
    }

    @keyframes rotate {
      100%   { transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 64px;
      height: 60px;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: gold;
      width: 64px;
      height: 32px;
      border-radius: 0 0 50px 50px;
      animation: move 0.5s linear infinite alternate;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      background: gold;
      width: 24px;
      height: 24px;
      transform: translateX(-50%) rotate(0deg);
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      100% { transform: translateX(-50%) rotate(360deg)}
    }
    @keyframes move {
      0% { transform: rotate(10deg)}
      100% { transform: rotate(-10deg)}
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      animation: rotate 1.5s ease-in infinite alternate;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      color: gold;
      background: currentColor;
      width: 64px;
      height: 32px;
      border-radius: 0 0 50px 50px;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 10%;
      background: palegoldenrod;
      width: 8px;
      height: 64px;
      animation: rotate 1.2s linear infinite alternate-reverse;
    }

    @keyframes rotate {
      100% { transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      background: goldenrod;
      border-radius: 50%;
      position: relative;
      animation: skLinRotate 1s ease-in-out infinite alternate;
    }
    .loader:after {
      content:"";
      position: absolute;
      inset: 5px;
      border-radius: 50%;
      border: 5px solid transparent;
      border-top-color: gold;
    }
    @keyframes skLinRotate {
      95% ,100% { transform: rotate(840deg) }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      background: goldenrod;
      border-radius: 50%;
      position: relative;
      animation: roll 1s ease-in-out infinite alternate;
    }
    .loader:after {
      content:"";
      position: absolute;
      inset: 5px;
      border-radius: 50%;
      border: 5px solid ;
      border-color: gold transparent;
    }

    @keyframes roll {
      0% {
        transform: translateX(-150%) rotate(0deg) ;
      }
      100% {
        transform:  translateX(150%) rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      background: goldenrod;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 6px;
      top: 10px;
      width: 12px;
      height: 12px;
      color: gold;
      background: currentColor;
      border-radius: 50%;
      box-shadow: 25px 2px, 10px 22px;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border: 4px solid;
      background: darkgoldenrod;
      border-color: transparent palegoldenrod palegoldenrod transparent;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s ease-in-out infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      border: 12px solid;
      border-color: transparent gold gold transparent;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      border: 2px solid;
      border-color: transparent palegoldenrod;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 2s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      border: 24px solid;
      border-color: transparent rgba(255, 215, 0, 0.15);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      border: 24px solid;
      border-color: rgba(255, 215, 0, 0.15) rgba(255, 215, 0, 0.25) rgba(255, 215, 0, 0.35) rgba(255, 215, 0, 0.5);
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        border-color: rgba(255, 215, 0, 0.15) rgba(255, 215, 0, 0.25) rgba(255, 215, 0, 0.35) rgba(255, 215, 0, 0.75);
      }
      33% {
        border-color: rgba(255, 215, 0, 0.75) rgba(255, 215, 0, 0.15) rgba(255, 215, 0, 0.25) rgba(255, 215, 0, 0.35);
      }
      66% {
        border-color: rgba(255, 215, 0, 0.35) rgba(255, 215, 0, 0.75) rgba(255, 215, 0, 0.15) rgba(255, 215, 0, 0.25);
      }
      100% {
        border-color: rgba(255, 215, 0, 0.25) rgba(255, 215, 0, 0.35) rgba(255, 215, 0, 0.75) rgba(255, 215, 0, 0.15);
      }
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      border-radius: 50%;
      background: goldenrod;
      box-shadow: -10px 8px 0 18px inset gold;
      animation: rotate 2s ease-in infinite alternate;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 14px;
      bottom: 16px;
      background: gold;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      animation: scale 1s ease-in infinite alternate;
    }

    @keyframes rotate {
      100% { transform: rotate(750deg)}
    }
    @keyframes scale {
      100% { transform: scale(0.5) translateY(5px)}
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      position: relative;
      background: rgba(255, 215, 0, 0.8);
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: gold;
      animation: slide 1s infinite linear alternate;
      opacity: 0.5;
    }
    .loader:after {
      animation: slide2 1s infinite linear alternate;
      opacity: 1;
    }

    @keyframes slide {
      0% , 20% {  transform: translate(0, 0)  }
      80% , 100% { transform: translate(15px, 15px) }
    }
    @keyframes slide2 {
      0% , 20% {  transform: translate(0, 0) }
      80% , 100% { transform: translate(-15px, -15px) }
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 48px;
      position: relative;
      animation: split 1s ease-in infinite alternate;
    }
    .loader::before ,
    .loader::after {
      content: '';
      position: absolute;
      height: 48px;
      width: 48px;
      border-radius: 50%;
      left: 0;
      top: 0;
      transform: translateX(-10px);
      background: gold;
      opacity: 0.75;
      backdrop-filter: blur(20px);
    }
    .loader::after {
      left: auto;
      right: 0;
      background: goldenrod;
      transform: translateX(10px);
    }

    @keyframes split {
      0% , 25% { width: 64px }
      100% { width: 148px }
    }`,
  },

  {
    css: `.loader {
      width: 84px;
      height: 84px;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width:64px;
      height: 64px;
      border-radius: 50%;
      background: gold;
      transform: translate(-50% , -100%)  scale(0);
      animation: push 2s infinite linear;
    }
    .loader:after {
      animation-delay: 1s;
    }

    @keyframes push {
      0% , 50% { transform: translate(-50% , 0%)  scale(1) }
      100% { transform: translate(-50%, -100%) scale(0) }
    }`,
  },

  {
    css: `.loader {
      width: 84px;
      height: 84px;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width:84px;
      height: 84px;
      border-radius: 50%;
      background:gold;
      animation: push 1s infinite linear alternate;
    }
    .loader:after {
      top: auto;
      bottom: 0;
      left: 0;
      background: goldenrod;
      animation-direction: alternate-reverse;
    }

    @keyframes push {
      0% {
        width:14px;
        height: 14px;
      }
      100% {
        width:84px;
        height: 84px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 84px;
      height: 84px;
      position: relative;
      overflow: hidden;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width:64px;
      height: 64px;
      border-radius: 50%;
      background: gold;
      transform: translate(-50% , 100%)  scale(0);
      animation: push 2s infinite ease-in;
    }
    .loader:after {
      animation-delay: 1s;
    }

    @keyframes push {
      0% {
        transform: translate(-50% , 100%)  scale(1);
      }
      15% , 25%{
        transform: translate(-50% , 50%)  scale(1);
      }
      50% , 75% {
        transform: translate(-50%, -30%) scale(0.5);
      }
      80%,  100% {
        transform: translate(-50%, -50%) scale(0);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 100px;
      height: 100px;
    }
    .loader:before{
      content: '';
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      top: 50%;
      left: 0;
      transform: translate(-5px, -50%);
      background: linear-gradient(to right, palegoldenrod 50%, gold 50%) no-repeat;
      background-size: 200% auto;
      background-position: 100% 0;
      animation: colorBallMoveX 1.5s linear infinite alternate;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: gold;
    }

    @keyframes colorBallMoveX {
      0%  {
        background-position: 0% 0;
        transform: translate(-15px, -50%);
      }
      15%  , 25% {
        background-position: 0% 0;
        transform: translate(0px, -50%);
      }
      75% , 85% {
        background-position: 100% 0;
        transform: translate(50px, -50%);
      }
      100% {
        background-position: 100% 0;
        transform: translate(65px, -50%);
      }
    }`,
  },

  {
    css: `.loader {
      width: 32px;
      height: 32px;
      position: relative;
      border-radius: 50%;
      color: goldenrod;
      background: gold;
      animation: fill 1s ease-in infinite alternate;
    }
    .loader::before ,
    .loader::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      left: 48px;
      top: 0;
      background: gold;
      animation: fill 0.9s ease-in infinite alternate;
    }
    .loader::after {
      left: auto;
      right: 48px;
      animation-duration: 1.1s;
    }

    @keyframes fill {
      0% {  box-shadow: 0 0 0 2px inset }
      100%{ box-shadow: 0 0 0 10px inset }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: gold;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }
    .loader::before {
      left: auto;
      right: 0;
      background: darkgoldenrod;
      transform: translate(50%, 100%);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  // Line 2706  - Bubble

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      box-sizing: border-box;
      animation: zeroRotation 1s linear infinite alternate;
    }
    .loader:before,
    .loader:after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: gold;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }
    .loader::before {
      left: auto;
      right: 0;
      transform: translate(50%, 100%);
    }

    @keyframes zeroRotation {
      0% {
        transform: scale(1) rotate(0deg);
      }
      100% {
        transform: scale(0) rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: block;
      margin:15px auto;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader:before,
    .loader:after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      background-color: goldenrod;
      border-radius: 50%;
      animation: scale50 1s infinite ease-in-out;
    }
    .loader::before {
      top: auto;
      bottom: 0;
      background-color: gold;
      animation-delay: 0.5s;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    @keyframes scale50 {
      0%, 100% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: block;
      margin:15px auto;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader:before,
    .loader:after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      width: 24px;
      height: 24px;
      top: 50%;
      left: 50%;
      transform: scale(0.5) translate(0, 0);
      background-color: goldenrod;
      border-radius: 50%;
      animation: animloader 1s infinite ease-in-out;
    }
    .loader::before {
      background-color: gold;
      transform: scale(0.5) translate(-48px, -48px);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    @keyframes animloader {
      50% {
       transform: scale(1) translate(-50%, -50%);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: '';
      width: 15px;
      height: 15px;
      display: block;
      position: relative;
      margin: 10px auto ;
      border-radius: 50%;
      background: goldenrod;
      animation: left 1s infinite ease-in-out;
    }
    .loader:after {
      background: gold;
      animation: right 1s infinite ease-in-out;
    }

    @keyframes right {
      0% , 100% {transform: translate(-15px) }
      50% { transform: translate(15px) }
    }
    @keyframes left {
      0% , 100% { transform: translate(15px) }
      50% { transform: translate(-15px) }
    }`,
  },

  {
    css: `.loader {
      box-sizing: border-box;
      position: relative;
      width: 48px;
      height: 48px;
      animation: flip 1s linear infinite;
    }
    .loader:before,
    .loader:after {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      border-radius: 50%;
      background: gold;
      animation: spin 1s linear infinite;
      transform-origin: 12px 100%;
    }
    .loader:before {
      transform-origin: 0 50%;
      background: goldenrod;
    }

    @keyframes spin {
      to {
       transform: rotate(360deg);
      }
    }
    @keyframes flip {
      0%, 50% {
        transform: rotateY(0deg);
      }
      50%, 100% {
        transform: rotateY(180deg);
      }
    }`,
  },

  {
    css: `.loader {
      box-sizing: border-box;
      position: relative;
      width: 48px;
      height: 48px;
      animation: spin 1s linear infinite;
    }
    .loader:before,
    .loader:after {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      border-radius: 50%;
      background: gold;
      animation: spin 1s linear infinite;
      transform-origin: 0px 100%;
    }
    .loader:before {
      transform-origin: 0 50%;
      background: goldenrod;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      box-sizing: border-box;
      position: relative;
      width: 48px;
      height: 48px;
      animation: spin 1s linear infinite;
    }
    .loader:before,
    .loader:after {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      border-radius: 50%;
      background: gold;
      animation: flipY 1s linear infinite;
      transform-origin: 50% 50%;
    }
    .loader:before {
      transform-origin: 0% 100%;
      background: goldenrod;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes flipY {
      0%, 50% {
        transform: rotateY(0deg);
      }
      50%, 100% {
        transform: rotateY(180deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: calc(100px - 14px);
      height: 50px;
      position: relative;
      animation: flippx 1s infinite linear;
    }
    .loader:before {
      content: "";
      position: absolute;
      inset: 0;
      margin: auto;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: gold;
      transform-origin: -14px 50%;
      animation: spin 0.5s infinite linear;
    }

    @keyframes flippx {
      0%, 49% {
       transform: scaleX(1);
      }
      50%, 100% {
        transform: scaleX(-1);
      }
    }
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader,
    .loader:before,
    .loader:after {
      border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      animation-fill-mode: both;
      animation: bblFadInOut 1.8s infinite ease-in-out;
    }.loader {
      color: gold;
      font-size: 7px;
      position: relative;
      text-indent: -9999em;
      transform: translateZ(0);
      animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
      content: '';
      position: absolute;
      top: 0;
    }
    .loader:before {
      left: -3.5em;
      animation-delay: -0.32s;
    }
    .loader:after {
      left: 3.5em;
    }

    @keyframes bblFadInOut {
      0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
      40% { box-shadow: 0 2.5em 0 0 }
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: gold;
      box-shadow: 32px 0 gold, -32px 0 gold;
      position: relative;
      animation: flash 0.5s ease-out infinite alternate;
    }

    @keyframes flash {
      0% {
        background-color: goldenrod;
        box-shadow: 32px 0 goldenrod, -32px 0 goldenrod;
      }
      50% {
        background-color: gold;
        box-shadow: 32px 0 goldenrod, -32px 0 goldenrod;
      }
      100% {
        background-color: goldenrod;
        box-shadow: 32px 0 gold, -32px 0 goldenrod;
      }
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      background: gold;
      box-sizing: border-box;
      animation: shadowExpandX 2s linear infinite alternate;
    }

    @keyframes shadowExpandX {
      0% {
        box-shadow: 0 0, 0 0;
        color: goldenrod;
      }
      100% {
        box-shadow: -24px 0, 24px 0;
        color: goldenrod;
      }
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      background: goldenrod;
      box-shadow: -24px 0 goldenrod, 24px 0 goldenrod;
      box-sizing: border-box;
      animation: shadowPulse 2s linear infinite;
    }

    @keyframes shadowPulse {
      33% {
        background: goldenrod;
        box-shadow: -24px 0 gold, 24px 0 goldenrod;
      }
      66% {
        background: gold;
        box-shadow: -24px 0 goldenrod, 24px 0 goldenrod;
      }
      100% {
        background: goldenrod;
        box-shadow: -24px 0 goldenrod, 24px 0 gold;
      }
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      background: gold;
      color: goldenrod;
      box-shadow: -24px 0, 24px 0;
      box-sizing: border-box;
      animation: rotation 2s ease-in-out infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 82px;
      height: 18px;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translate(-50% , 10%);
      top: 0;
      background: gold;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      animation: jump 0.5s ease-in infinite alternate;
    }
    .loader::after {
      background: #0000;
      color: goldenrod;
      top: 100%;
      box-shadow: 32px -20px , -32px -20px;
      animation: split 0.5s ease-out infinite alternate;
    }

    @keyframes split {
      0% { box-shadow: 8px -20px, -8px -20px}
      100% { box-shadow: 32px -20px , -32px -20px}
    }
    @keyframes jump {
      0% { transform: translate(-50% , -150%)}
      100% { transform: translate(-50% , 10%)}
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: gold;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: 0;
      background: goldenrod;
      transform: rotate(0deg) translate(30px);
      animation: rotate 1s ease infinite;
    }
    .loader:after {
      animation-delay: 0.5s
    }

    @keyframes rotate {
      100% {transform: rotate(360deg) translate(30px)
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 12px;
      background:
        radial-gradient(circle 6px, goldenrod 100%, transparent 0),
        radial-gradient(circle 6px, goldenrod 100%, transparent 0);
      background-size:12px 12px;
      background-position: left center , right center ;
      background-repeat: no-repeat;
      position: relative;
    }
    .loader:before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: gold;
      inset:0;
      margin: auto;
      animation: mvX 0.6s, mvY 0.3s;
      animation-timing-function:cubic-bezier(.5,-300,.5, 300);
      animation-iteration-count:infinite;
    }

    @keyframes mvX {
      100% { left: 0.85px}
    }
    @keyframes mvY {
      100% { top : 0.5px }
    }`,
  },

  {
    css: `.loader {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      color: gold;
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        box-shadow: -38px -6px, -14px 6px,  14px -6px;
      }
      33% {
        box-shadow: -38px 6px, -14px -6px,  14px 6px;
      }
      66% {
        box-shadow: -38px -6px, -14px 6px, 14px -6px;
      }
      100% {
        box-shadow: -38px 6px, -14px -6px, 14px 6px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 108px;
      height: 16px;
      background:
        radial-gradient(circle 8px at 8px center, gold 100%, transparent 0),
        radial-gradient(circle 8px at 8px center, gold 100%, transparent 0);
      background-size: 16px 16px;
      background-repeat: no-repeat;
      position: relative;
      animation: ballX 1s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: gold;
      inset:0;
      margin:auto;
      animation: moveX 1s cubic-bezier(0.5,300,0.5,-300) infinite;
    }

    @keyframes ballX {
      0%,25%,50%,75%, 100% {background-position: 25% 0,75% 0}
      40% {background-position: 25% 0,85% 0}
      90% {background-position: 15% 0,75% 0}
    }
    @keyframes moveX {
      100% {transform:translate(0.15px)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 100px;
      height: 16px;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: gold;
      box-shadow: 32px 0 gold;
      left: 0;
      top: 0;
      animation: ballMoveX 1s linear infinite;
    }
    .loader:after {
      box-shadow: none;
      transform-origin: 40px 0;
      transform: rotate(-153deg);
      animation: rotateLoader 1s linear infinite;
    }

    @keyframes rotateLoader {
      0% , 10%{ transform: rotate(-153deg); }
      90%, 100% { transform: rotate(0deg); }
    }
    @keyframes ballMoveX {
      0% , 10%{  transform: translateX(0) }
      90%, 100% { transform: translateX(32px) }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 100px;
      height: 16px;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: goldenrod;
      box-shadow: 32px 0 goldenrod;
      left: 0;
      top: 0;
      animation: ballMoveX 2s linear infinite;
    }
    .loader:after {
      box-shadow: none;
      transform: translateX(64px) scale(1);
      z-index: 2;
      animation: none;
      animation: trfLoader 2s linear infinite;
    }

    @keyframes trfLoader {
      0% , 5%{
        transform: translateX(64px) scale(1);
        background: goldenrod;
      }
      10%{
        transform: translateX(64px) scale(1);
        background: gold;
      }
      40%{
        transform: translateX(32px) scale(1.5);
        background: gold;
      }
      90%, 95% {
        transform: translateX(0px) scale(1);
        background: gold;
      }
      100% {
        transform: translateX(0px) scale(1);
        background: goldenrod;
      }
    }
    @keyframes ballMoveX {
      0% , 10%{  transform: translateX(0) }
      90%, 100% { transform: translateX(32px) }
    }`,
  },

  {
    css: `.loader {
      animation: rotate 1s infinite;
      height: 50px;
      width: 50px;
    }
    .loader:before,
    .loader:after {
      border-radius: 50%;
      content: "";
      display: block;
      height: 20px;
      width: 20px;
    }
    .loader:before {
      animation: ball1 1s infinite;
      background-color: goldenrod;
      box-shadow: 30px 0 0 gold;
      margin-bottom: 10px;
    }
    .loader:after {
      animation: ball2 1s infinite;
      background-color: gold;
      box-shadow: 30px 0 0 goldenrod;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg) scale(0.8) }
      50% { transform: rotate(360deg) scale(1.2) }
      100% { transform: rotate(720deg) scale(0.8) }
    }
    @keyframes ball1 {
      0% {
        box-shadow: 30px 0 0 gold;
      }
      50% {
        box-shadow: 0 0 0 gold;
        margin-bottom: 0;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 gold;
        margin-bottom: 10px;
      }
    }
    @keyframes ball2 {
      0% {
        box-shadow: 30px 0 0 goldenrod;
      }
      50% {
        box-shadow: 0 0 0 goldenrod;
        margin-top: -20px;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 goldenrod;
        margin-top: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      color: gold;
      left: -100px;
      box-sizing: border-box;
      animation: shadowRolling 2s linear infinite;
    }

    @keyframes shadowRolling {
      0% {
        box-shadow: 0px 0 rgba(255, 215, 0, 0), 0px 0 rgba(255, 215, 0, 0), 0px 0 rgba(255, 215, 0, 0), 0px 0 rgba(255, 215, 0, 0);
      }
      12% {
        box-shadow: 100px 0 gold, 0px 0 rgba(255, 215, 0, 0), 0px 0 rgba(255, 215, 0, 0), 0px 0 rgba(255, 215, 0, 0);
      }
      25% {
        box-shadow: 110px 0 gold, 100px 0 gold, 0px 0 rgba(255, 215, 0, 0), 0px 0 rgba(255, 215, 0, 0);
      }
      36% {
        box-shadow: 120px 0 gold, 110px 0 gold, 100px 0 gold, 0px 0 rgba(255, 215, 0, 0);
      }
      50% {
        box-shadow: 130px 0 gold, 120px 0 gold, 110px 0 gold, 100px 0 gold;
      }
      62% {
        box-shadow: 200px 0 rgba(255, 215, 0, 0), 130px 0 gold, 120px 0 gold, 110px 0 gold;
      }
      75% {
        box-shadow: 200px 0 rgba(255, 215, 0, 0), 200px 0 rgba(255, 215, 0, 0), 130px 0 gold, 120px 0 gold;
      }
      87% {
        box-shadow: 200px 0 rgba(255, 215, 0, 0), 200px 0 rgba(255, 215, 0, 0), 200px 0 rgba(255, 215, 0, 0), 130px 0 gold;
      }
      100% {
        box-shadow: 200px 0 rgba(255, 215, 0, 0), 200px 0 rgba(255, 215, 0, 0), 200px 0 rgba(255, 215, 0, 0), 200px 0 rgba(255, 215, 0, 0);
      }
    }`,
  },

  {
    css: `.loader {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      color: gold;
      box-sizing: border-box;
      animation: animloader 2s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
      }
      25% {
        box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
      }
      50% {
        box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
      }
      75% {
        box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
      }
      100% {
        box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
      }
    }`,
  },

  // Line 3548 - index 100.

  {
    css: `.loader {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: block;
      margin:15px auto;
      position: relative;
      color: gold;
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0;
      }
      33% {
        box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
      }
      66% {
        box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0;
      }
      100% {
        box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      position: relative;
      left: -32px;
      border-radius: 50%;
      color: goldenrod;
      background: currentColor;
      box-shadow: 32px 0 , -32px 0 ,  64px 0;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: -32px;
      top: 0;
      width: 16px;
      height: 16px;
      border-radius: 10px;
      background:gold;
      animation: move 3s linear infinite alternate;
    }

    @keyframes move {
      0% , 5% {
        left: -32px;
        width: 16px;
      }
      15% , 20% {
        left: -32px;
        width: 48px;
      }
      30% , 35% {
        left: 0px;
        width: 16px;
      }
      45% , 50% {
        left: 0px;
        width: 48px;
      }
      60% , 65% {
        left: 32px;
        width: 16px;
      }
      75% , 80% {
        left: 32px;
        width: 48px;
      }
      95%, 100% {
        left: 64px;
        width: 16px;
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: gold;
      box-shadow: 32px 0 gold, -32px 0 gold;
      position: relative;
      animation: flash 0.3s ease-in infinite alternate;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      left: -64px;
      top: 0;
      background: gold;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transform-origin: 35px -35px;
      transform: rotate(45deg);
      animation: hitL 0.3s ease-in infinite alternate;
    }
    .loader::after {
      left: 64px;
      transform: rotate(-45deg);
      transform-origin: -35px -35px;
      animation: hitR 0.3s ease-out infinite alternate;
    }

    @keyframes flash {
      0%, 100% {
        background-color: rgba(255, 215, 0, 0.25);
        box-shadow: 32px 0 rgba(255, 215, 0, 0.25), -32px 0 rgba(255, 215, 0, 0.25);
      }
      25% {
        background-color: rgba(255, 215, 0, 0.25);
        box-shadow: 32px 0 rgba(255, 215, 0, 0.25), -32px 0 rgba(255, 215, 0, 1);
      }
      50% {
        background-color: rgba(255, 215, 0, 1);
        box-shadow: 32px 0 rgba(255, 215, 0, 0.25), -32px 0 rgba(255, 215, 0, 0.25);
      }
      75% {
        background-color: rgba(255, 215, 0, 0.25);
        box-shadow: 32px 0 rgba(255, 215, 0, 1), -32px 0 rgba(255, 215, 0, 0.25);
      }
    }
    @keyframes hitL {
      0% {
        transform: rotate(45deg);
        background-color: rgba(255, 215, 0, 1);
      }
      25%, 100% {
        transform: rotate(0deg);
        background-color: rgba(255, 215, 0, 0.25);
      }
    }
    @keyframes hitR {
      0%, 75% {
        transform: rotate(0deg);
        background-color: rgba(255, 215, 0, 0.25);
      }
      100% {
        transform: rotate(-45deg);
        background-color: rgba(255, 215, 0, 1);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 15px;
      height: 64px;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      color: gold;
      background: currentColor;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      box-shadow: 45px 0 , -45px 0;
      animation: move 0.5s linear infinite alternate;
    }
    .loader::before {
      top: 100%;
      box-shadow: 50px 0 ;
      left: -25px;
      animation-direction: alternate-reverse;
    }

    @keyframes move {
      0% { top: 0 }
      50% { top: 50% }
      100% { top: 100% }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      display: flex;
    }
    .loader:before,
    .loader:after {
      content: '';
      width: 15px;
      height: 15px;
      display: inline-block;
      position: relative;
      margin: 0  5px  ;
      border-radius: 50%;
      color: goldenrod;
      background: currentColor;
      box-shadow: 50px 0 ,  -50px 0;
      animation: left 1s infinite ease-in-out;
    }
    .loader:after {
      color: gold;
      animation: right 1.1s infinite ease-in-out;
    }
    @keyframes right {
      0% , 100% {transform: translateY(-10px) }
      50% { transform: translateY(10px) }
    }
    @keyframes left {
      0% , 100% { transform: translateY(10px) }
      50% { transform: translateY(-10px) }
    }`,
  },

  {
    css: `.loader {
      height: 150px;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content: '';
      width: 15px;
      height: 15px;
      display: block;
      position: relative;
      margin: 10px auto ;
      border-radius: 50%;
      color: gold;
      background: currentColor;
      box-shadow: 0 50px , 0 100px;
      animation: left 1s infinite ease-in-out;
    }
    .loader:after {
      animation: right 1.1s infinite ease-in-out;
    }

    @keyframes right {
      0% , 100%{transform: translate(-15px) }
      50% { transform: translate(15px) }
    }
    @keyframes left {
      0% , 100%{ transform: translate(15px) }
      50% { transform: translate(-15px) }
    }`,
  },

  //Line 3804  - Box

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      animation: rotation 2s ease-in-out infinite;
    }
    .loader::after {
      border-color: gold;
      animation-delay: 1s;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      border: 4px solid palegoldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s ease-in-out infinite;
    }
    .loader::after {
      border-color: gold;
      animation-delay: 1s;
    }

    @keyframes animloader {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: rotation 2s ease-in-out infinite alternate;
    }
    .loader::after {
      border-color: gold;
      animation-direction: alternate-reverse;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: scaleOut 2s ease-in-out infinite;
    }
    .loader::after {
      border-color: gold;
      animation-delay: 1s;
    }

    @keyframes scaleOut {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::after,
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      border: 2px solid palegoldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: rotationBreak 3s ease-in-out infinite alternate;
    }
    .loader::after {
      border-color: gold;
      animation-direction: alternate-reverse;
    }

    @keyframes rotationBreak {
      0% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      border: 2px solid palegoldenrod;
      box-sizing: border-box;
      animation: rotation 2s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 2px solid gold;
      width: 38px;
      height: 38px;
      animation: rotationBack 1.5s linear infinite;
      transform-origin: center center;
    }
    .loader::before {
      width: 28px;
      height: 28px;
      border-color: palegoldenrod;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 64px;
      height: 64px;
      background-color: darkgoldenrod;
      transform: rotate(45deg);
      overflow: hidden;
    }
    .loader:after {
      content: '';
      position: absolute;
      inset: 8px;
      margin: auto;
      background: goldenrod;
    }
    .loader:before{
      content: '';
      position: absolute;
      inset: -15px;
      margin: auto;
      background: gold;
      animation: diamondLoader 2s linear infinite;
    }

    @keyframes diamondLoader {
      0%, 10% {
        transform: translate(-64px , -64px) rotate(-45deg)
      }
      90%, 100% {
        transform: translate(0px , 0px) rotate(-45deg)
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      background: gold;
      box-sizing: border-box;
      animation: flipX 1s linear infinite;
    }

    @keyframes flipX {
      0% {
        transform: perspective(200px) rotateX(0deg) rotateY(0deg);
      }
      50% {
        transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
      }
      100% {
        transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      color: gold;
      border: 1px solid;
      box-sizing: border-box;
      animation: fill 2s linear infinite alternate;
    }

    @keyframes fill {
      0% {
        box-shadow: 0 0  inset;
      }
      100% {
        box-shadow: 0 -48px inset;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      background: gold;
      box-sizing: border-box;
      animation: zeroRotation 1s ease infinite alternate-reverse;
    }

    @keyframes zeroRotation {
      0% {
        transform: scale(1) rotate(0deg);
      }
      100% {
        transform: scale(0) rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 100px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 4px;
      width: 24px;
      height: 24px;
      animation: ballbns 2s ease-in infinite;
    }
  
    @keyframes ballbns {
      0% {  
        left: 0; 
        transform: translateX(-100%) rotate(0deg);
        border-radius: 0; 
        background: gold;
      }
      100% {  
        left: 100%; 
        transform: translateX(0%) rotate(360deg); 
        border-radius: 50%;
        background: gold; 
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      background: gold;
      animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg) scale(0.2);
        border-radius: 10%;
      }
      50% {
        transform: rotate(180deg) scale(1.5);
        border-radius: 50%;
      }
      100% {
        transform: rotate(360deg) scale(0.2);
        border-radius: 10%;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
    }
    .loader:after {
      content: '';
      background: gold;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 32px;
      height: 32px;
      border-radius:4px;
      transform-origin: -16px -32px;
      animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
      0%, 100% {
        transform: rotate(-45deg)  translate(-50% , -50%)
      }
      50% {
        transform: rotate(-245deg)  translate(-50% , -50%)
      }
    }`,
  },

  {
    css: `.loader {
      width: 24px;
      height: 24px;
      display: inline-block;
      position: relative;
      background: gold;
      box-sizing: border-box;
      animation: animloader 2s linear infinite;
    }

    @keyframes animloader {
      0% {
        transform: translate(0, 0) rotateX(0) rotateY(0);
      }
      25% {
        transform: translate(100%, 0) rotateX(0) rotateY(180deg);
      }
      50% {
        transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
      }
      75% {
        transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
      }
      100% {
        transform: translate(0, 0) rotateX(0) rotateY(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: 0;
      background: gold;
      color: gold;
      animation: animloader 2s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        box-shadow: 0 0, 0 0, 0 0;
      }
      33% {
        box-shadow: 24px 0px, 24px 0px, 24px 0px;
      }
      66% {
        box-shadow: 24px 24px, 24px 24px, 24px 0px;
      }
      100% {
        box-shadow: 0px 24px, 24px 24px, 24px 0px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: -24px;
      animation: animloader1 2s linear infinite alternate;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: rgba(255, 215, 0, 0.85);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      animation: animloader2 2s linear infinite alternate;
    }

    @keyframes animloader1 {
      0%, 32% {
        box-shadow: 0 24px gold, 24px 24px rgba(255, 215, 0, 0), 24px 48px rgba(255, 215, 0, 0), 0px 48px rgba(255, 215, 0, 0);
      }
      33%, 65% {
        box-shadow: 0 24px gold, 24px 24px gold, 24px 48px rgba(255, 215, 0, 0), 0px 48px rgba(255, 215, 0, 0);
      }
      66%, 99% {
        box-shadow: 0 24px gold, 24px 24px gold, 24px 48px gold, 0px 48px rgba(255, 215, 0, 0);
      }
      100% {
        box-shadow: 0 24px gold, 24px 24px gold, 24px 48px gold, 0px 48px gold;
      }
    }
    @keyframes animloader2 {
      0% {
        transform: translate(0, 0) rotateX(0) rotateY(0);
      }
      33% {
        transform: translate(100%, 0) rotateX(0) rotateY(180deg);
      }
      66% {
        transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
      }
      100% {
        transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      transform: rotate(45deg);
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: -24px;
      animation: animloader 4s ease infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: rgba(255, 215, 0, 0.85);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      animation: animloader2 2s ease infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 0 24px rgba(255, 215, 0, 0), 24px 24px rgba(255, 215, 0, 0), 24px 48px rgba(255, 215, 0, 0), 0px 48px rgba(255, 215, 0, 0);
      }
      12% {
        box-shadow: 0 24px gold, 24px 24px rgba(255, 215, 0, 0), 24px 48px rgba(255, 215, 0, 0), 0px 48px rgba(255, 215, 0, 0);
      }
      25% {
        box-shadow: 0 24px gold, 24px 24px gold, 24px 48px rgba(255, 215, 0, 0), 0px 48px rgba(255, 215, 0, 0);
      }
      37% {
        box-shadow: 0 24px gold, 24px 24px gold, 24px 48px gold, 0px 48px rgba(255, 215, 0, 0);
      }
      50% {
        box-shadow: 0 24px gold, 24px 24px gold, 24px 48px gold, 0px 48px gold;
      }
      62% {
        box-shadow: 0 24px rgba(255, 215, 0, 0), 24px 24px gold, 24px 48px gold, 0px 48px gold;
      }
      75% {
        box-shadow: 0 24px rgba(255, 215, 0, 0), 24px 24px rgba(255, 215, 0, 0), 24px 48px gold, 0px 48px gold;
      }
      87% {
        box-shadow: 0 24px rgba(255, 215, 0, 0), 24px 24px rgba(255, 215, 0, 0), 24px 48px rgba(255, 215, 0, 0), 0px 48px gold;
      }
      100% {
        box-shadow: 0 24px rgba(255, 215, 0, 0), 24px 24px rgba(255, 215, 0, 0), 24px 48px rgba(255, 215, 0, 0), 0px 48px rgba(255, 215, 0, 0);
      }
    }
    @keyframes animloader2 {
      0% {
        transform: translate(0, 0) rotateX(0) rotateY(0);
      }
      25% {
        transform: translate(100%, 0) rotateX(0) rotateY(180deg);
      }
      50% {
        transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
      }
      75% {
        transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
      }
      100% {
        transform: translate(0, 0) rotateX(0) rotateY(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      border: 24px solid goldenrod;
      border-color: gold goldenrod  goldenrod goldenrod;
      animation : rotate 2s steps(4) infinite;
    }

    @keyframes rotate {
      100% { transform: rotate(360deg); }
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background-image:
        linear-gradient(goldenrod 16px, transparent 0) ,
        linear-gradient(gold 16px, transparent 0) ,
        linear-gradient(gold 16px, transparent 0) ,
        linear-gradient(goldenrod 16px, transparent 0);
      background-repeat: no-repeat;
      background-size: 16px 16px;
      background-position: left top , left bottom , right top , right bottom;
      animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
      0% {
        width: 64px;
        height: 64px;
        transform: rotate(0deg)
      }
      50% {
        width: 30px;
        height: 30px;
        transform: rotate(180deg)
      }
      100% {
        width: 64px;
        height: 64px;
        transform: rotate(360deg)
      }
    }`,
  },

  {
    css: `.loader {
      animation: rotate 1s infinite;
      height: 50px;
      width: 50px;
    }
    .loader:before,
    .loader:after {
      content: "";
      display: block;
      height: 20px;
      width: 20px;
    }
    .loader:before {
      animation: box1 1s infinite;
      background-color: goldenrod;
      box-shadow: 30px 0 0 gold;
      margin-bottom: 10px;
    }
    .loader:after {
      animation: box2 1s infinite;
      background-color: gold;
      box-shadow: 30px 0 0 goldenrod;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg) scale(0.8) }
      50% { transform: rotate(360deg) scale(1.2) }
      100% { transform: rotate(720deg) scale(0.8) }
    }
    @keyframes box1 {
      0% {
        box-shadow: 30px 0 0 gold;
      }
      50% {
        box-shadow: 0 0 0 gold;
        margin-bottom: 0;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 gold;
        margin-bottom: 10px;
      }
    }
    @keyframes box2 {
      0% {
        box-shadow: 30px 0 0 goldenrod;
      }
      50% {
        box-shadow: 0 0 0 goldenrod;
        margin-top: -20px;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 goldenrod;
        margin-top: 0;
      }
    }`,
  },

  {
    css: `.loader {
      height: 5px;
      width: 5px;
      color: gold;
      box-shadow: -10px -10px 0 5px,
                  -10px -10px 0 5px,
                  -10px -10px 0 5px,
                  -10px -10px 0 5px;
      animation: loader-38 6s infinite;
    }

    @keyframes loader-38 {
      0% {
        box-shadow: -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px;
      }
      8.33% {
        box-shadow: -10px -10px 0 5px,
                     10px -10px 0 5px,
                     10px -10px 0 5px,
                     10px -10px 0 5px;
      }
      16.66% {
        box-shadow: -10px -10px 0 5px,
                     10px -10px 0 5px,
                     10px  10px 0 5px,
                     10px  10px 0 5px;
      }
      24.99% {
        box-shadow: -10px -10px 0 5px,
                     10px -10px 0 5px,
                     10px  10px 0 5px,
                    -10px  10px 0 5px;
      }
      33.32% {
        box-shadow: -10px -10px 0 5px,
                     10px -10px 0 5px,
                     10px  10px 0 5px,
                    -10px -10px 0 5px;
      }
      41.65% {
        box-shadow: 10px -10px 0 5px,
                    10px -10px 0 5px,
                    10px  10px 0 5px,
                    10px -10px 0 5px;
      }
        49.98% {
          box-shadow: 10px 10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px;
      }
      58.31% {
        box-shadow: -10px 10px 0 5px,
                    -10px 10px 0 5px,
                     10px 10px 0 5px,
                    -10px 10px 0 5px;
      }
      66.64% {
        box-shadow: -10px -10px 0 5px,
                    -10px -10px 0 5px,
                     10px  10px 0 5px,
                    -10px  10px 0 5px;
      }
      74.97% {
        box-shadow: -10px -10px 0 5px,
                     10px -10px 0 5px,
                     10px  10px 0 5px,
                    -10px  10px 0 5px;
      }
      83.3% {
        box-shadow: -10px -10px 0 5px,
                     10px  10px 0 5px,
                     10px  10px 0 5px,
                    -10px  10px 0 5px;
      }
      91.63% {
        box-shadow: -10px -10px 0 5px,
                    -10px  10px 0 5px,
                    -10px  10px 0 5px,
                    -10px  10px 0 5px;
      }
      100% {
        box-shadow: -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      height: 24px;
      background: gold;
      animation: mvx 0.3s infinite ease-in alternate;
    }
    .loader:before {
      animation-name:mvrx;
    }

    @keyframes mvx {
      100% {transform: translateY(50%)}
    }
    @keyframes mvrx {
      100% {transform: translateY(-50%)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: flex;
      transform-origin:50% 125%;
      animation: mov-y 1s infinite linear;
    }
    .loader:before,
    .loader:after {
      content:"";
      flex:1;
      background: gold;
      transform-origin: 0% 100%;
      animation: rtr-x 1s infinite linear;
    }
    .loader:before {
      transform-origin: 100% 100%;
      animation-name: rtr-rx;
    }

    @keyframes mov-y {
      0%,25%   {transform:translateY(0) scaleY(1)}
      49%      {transform:translateY(-75%) scaleY(1)}
      50%      {transform:translateY(-75%) scaleY(-1)}
      75%,100% {transform:translateY(-150%) scaleY(-1)}
    }
    @keyframes rtr-x {
      25%,75% {transform: rotate(0deg)}
      50%     {transform: rotate(90deg)}
    }
    @keyframes rtr-rx {
      25%,75% {transform: rotate(0deg)}
      50%     {transform: rotate(-90deg)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: flex;
      animation: rotate 1.5s infinite linear;
    }
    .loader:before,
    .loader:after {
      content:"";
      flex:1;
      background: goldenrod;
      animation: mvx 0.5s infinite linear alternate;
    }
    .loader:before {
      background: gold;
      animation-name: mvrx;
    }

    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes mvx {
      0% {transform: translateX(-15px)}
      100% {transform: translateX(15px)}
    }
    @keyframes mvrx {
      0% {transform: translateX(15px)}
      100% {transform: translateX(-15px)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: flex;
      animation : rotate 2s linear infinite;
    }
    .loader:before,
    .loader:after {
      content:"";
      flex:1;
      background: goldenrod;
      animation: mvx 0.5s infinite linear alternate;
    }
    .loader:before {
      background: gold;
      animation-name:mvrx;
    }

    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes mvx {
      0% , 40% {transform: translateX(0px)}
      20% , 60% {transform: translateX(8px)}
      100% {transform: translateX(15px)}
    }
    @keyframes mvrx {
      0% , 40% {transform: translateX(0px)}
      20% , 60% {transform: translateX(-8px)}
      100% {transform: translateX(-15px)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width:  48px;
      height: 48px;
      background: gold;
      transform: rotateX(65deg) rotate(45deg);
      color: goldenrod;
      animation: layers1 1s linear infinite alternate;
    }
    .loader:after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 215, 0, 0.7);
      animation: layerTr 1s linear infinite alternate;
    }

    @keyframes layers1 {
      0% { box-shadow: 0px 0px 0 0px  }
      90% , 100% { box-shadow: 20px 20px 0 -4px  }
    }
    @keyframes layerTr {
      0% { transform:  translate(0, 0) scale(1) }
      100% {  transform: translate(-25px, -25px) scale(1) }
    }`,
  },

  {
    css: `.loader {
      background: gold;
      width: 48px;
      height: 48px;
      position: relative;
      text-align: center;
      animation: 3s rotate linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: goldenrod;
      animation: 1.5s rotate reverse linear infinite ;
    }

    @keyframes rotate {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 164px;
      height: 164px;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: goldenrod;
      left: 50%;
      top: 50%;
      animation: rotate 1s ease-in infinite;
    }
    .loader::after {
      width: 20px;
      height: 20px;
      background-color: gold;
      animation: rotate 1s ease-in infinite, moveY 1s ease-in infinite ;
    }

    @keyframes moveY {
      0%, 100% {top: 10%}
      45%, 55% {top: 59%}
      60% {top: 40%}
    }
    @keyframes rotate {
      0% { transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)}
      25% { transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)}
      45%, 55% { transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)}
      60% { transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)}
      75% { transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)}
      100% { transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 24px solid transparent;
      border-color: transparent transparent gold gold;
      position: absolute;
      left: 0;
      top: 0;
      animation: mvx 1s infinite ease-in;
    }
    .loader:before {
      left: -1px;
      top: 1px;
      border-color: gold gold transparent transparent;
      animation-name:mvrx;
    }

    @keyframes mvx {
      0%, 25% {transform: translate(0 , 0) rotate(0deg)}
      50% {transform: translate(-50% , 50%) rotate(180deg)}
      100% {transform: translate(0% , 0%) rotate(180deg)}
    }
    @keyframes mvrx {
      0%, 25%  {transform: translate(0 , 0) rotate(0deg)}
      50% {transform: translate(50% , -50%) rotate(180deg)}
      100% {transform: translate(0% , 0%) rotate(180deg)}
    }`,
  },

  {
    css: `.loader {
      width: 47px;
      height: 47px;
      position: relative;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 24px solid;
      border-color: transparent transparent gold gold;
      position: absolute;
      left: 0;
      top: 0;
      animation: mvx 1.2s infinite ease-in;
    }
    .loader:before {
      border-color: gold gold transparent transparent;
      animation-name:mvrx;
    }

    @keyframes mvx {
      0% , 10%  {transform: translate(0 , 0) rotate(0deg)}
      30% {transform: translate(-50% , -50%) rotate(0deg)}
      50% {transform: translate(-50% , -50%) rotate(180deg)}
      75% , 100% {transform: translate(0, 0) rotate(180deg)}
    }
    @keyframes mvrx {
      0% , 10%  {transform: translate(0 , 0) rotate(0deg)}
      30% {transform: translate(50% , 50%) rotate(0deg)}
      50% {transform: translate(50% , 50%) rotate(180deg)}
      75% , 100% {transform: translate(0, 0) rotate(180deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      border: 24px solid;
      border-color: gold  transparent gold transparent;
      animation : rotate 2s linear infinite;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 24px solid transparent;
      border-left-color: gold;
      position: absolute;
      left: -24px;
      top: -24px;
      animation: mvx 1s infinite linear;
    }
    .loader:before {
      border-color: transparent gold transparent transparent;
      animation-name:mvrx;
      animation-delay: 0.5s;
    }
    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes mvx {
      20% , 80% {transform: translateX(0)}
      50% {transform: translateX(-50%)}
    }
    @keyframes mvrx {
      20% , 80% {transform: translateX(0)}
      50% {transform: translateX(50%)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      border: 24px solid;
      border-color: gold  transparent gold transparent;
      animation : rotate 2s linear infinite;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 24px solid transparent;
      border-left-color: gold;
      position: absolute;
      left: -24px;
      top: -24px;
      animation: prix 1s infinite ease-in;
      transform-origin: 0% 100%;
    }
    .loader:before {
      border-color: transparent gold transparent transparent;
      transform-origin: 100% 0%;
      animation-delay: 0.5s;
    }
    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes prix {
      20% , 80% {transform: rotate(0)}
      50% {transform: rotate(-90deg)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      position: relative;
      animation : rotate 4s linear infinite;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 24px solid;
      border-color: transparent transparent goldenrod goldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: mvx 1s infinite ease-in;
    }
    .loader:before {
      left: -1px;
      top: 1px;
      border-color:gold  gold transparent transparent;
      animation-name:mvrx;
    }

    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes mvx {
      0% , 15% {transform: translate(0 , 0) rotate(0deg)}
      50% {transform: translate(-50% , 50%) rotate(180deg)}
      100% {transform: translate(0% , 0%) rotate(180deg)}
    }
    @keyframes mvrx {
      0% , 15%  {transform: translate(0 , 0) rotate(0deg)}
      50% {transform: translate(50% , -50%) rotate(180deg)}
      100% {transform: translate(0% , 0%) rotate(180deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 48px;
      height: 48px;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 32px solid transparent;
      border-top-color: goldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: weld-rotate 2s infinite ease-in;
    }
    .loader:before {
      border-color: transparent  transparent transparent gold;
      animation-delay: 0.5s;
    }

    @keyframes weld-rotate {
      0% , 25% {transform: rotate(0deg)}
      50% , 75% {transform: rotate(180deg)}
      100% {transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 48px;
      height: 48px;
    }
    .loader:before,
    .loader:after {
      content:"";
      display: block;
      border: 32px solid transparent;
      border-top-color: goldenrod;
      position: absolute;
      left: 0;
      top: 0;
      animation: weld-rotate 2s infinite ease-in;
    }
    .loader:before {
      border-color: transparent  transparent transparent gold;
      animation-delay: 0.5s;
      animation-direction: reverse;
    }

    @keyframes weld-rotate {
      0% , 25% {transform: rotate(0deg)}
      50% , 75% {transform: rotate(180deg)}
      100% {transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 48px;
      height: 48px;
    }
    .loader:before{
      content: "";
      border-left: 24px solid gold;
      border-right: 24px solid gold;
      position: absolute;
      height: 24px;
      width: 0;
      left: 50%;
      transform: translateX(-50%);
      top: 0px;
      animation: splitX 1s  linear infinite alternate;
    }
    .loader:after {
      content: '';
      width: 48px;
      height: 24px;
      background: gold;
      position: absolute;
      left: 0;
      bottom:0;
      animation:moveY 1s linear infinite alternate;
    }

    @keyframes splitX {
      0% {width: 0; transform: translate(-50% , 0)}
      33% {width: 100%; transform: translate(-50% , 0)}
      66% {width: 100%; transform: translate(-50% , 24px)}
      100% {width: 0; transform: translate(-50% , 24px)}
    }
    @keyframes moveY {
      0% , 33% {transform: translateY(0)}
      66% , 100% {transform: translateY(-24px)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      margin: auto;
      position: relative;
    }
    .loader:before {
      content: '';
      width: 48px;
      height: 5px;
      background: #000;
      opacity: 0.25;
      position: absolute;
      top: 60px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    .loader:after {
      content: '';
      width: 100%;
      height: 100%;
      background: gold;
      animation: bxSpin 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
    }

    @keyframes bxSpin {
      17% {
        border-bottom-right-radius: 3px;
      }
      25% {
        transform: translateY(9px) rotate(22.5deg);
      }
      50% {
        transform: translateY(18px) scale(1, .9) rotate(45deg);
        border-bottom-right-radius: 40px;
      }
      75% {
        transform: translateY(9px) rotate(67.5deg);
      }
      100% {
        transform: translateY(0) rotate(90deg);
      }
    }
    @keyframes shadow {
      0%, 100% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.2, 1);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 48px;
      height: 48px;
      background: gold;
      border-radius: 50%;
      animation:ellipseAnimation 2s linear infinite;
    }

    @keyframes ellipseAnimation {
      0% {
        border-radius: 50%;
      }
      12.5% {
        border-radius: 0 50% 50% 50%;
        transform: rotate(45deg);
      }
      25% {
        border-radius: 0 0 50% 50%;
        transform: rotate(90deg);
      }
      37.5% {
        border-radius: 0 0 0 50%;
        transform: rotate(135deg);
      }
      50% {
        border-radius: 0;
        transform: rotate(180deg);
      }
      62.5% {
        border-radius: 50% 0 0 0;
        transform: rotate(225deg);
      }
      75% {
        border-radius: 50% 50% 0 0;
        transform: rotate(270deg);
      }
      87.5% {
        border-radius: 50% 50% 50% 0;
        transform: rotate(315deg);
      }
      100% {
        border-radius: 50%;
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 62px;
      height: 62px;
      background: linear-gradient(to right, gold 20%, #0000 21%);
      background-repeat: repeat-x;
      background-size: 36px 8px;
      background-position: 9px bottom;
      animation: moveX 0.5s linear infinite;
    }
    .loader::before  {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: gold;
      left: 50%;
      top: 50%;
      transform: translate(-50% , -50% );
      animation: rotate 0.5s linear infinite;
    }

    @keyframes moveX {
      0%, 25%{    background-position: 10px bottom }
      75% , 100% {background-position: -30px bottom;}
    }
    @keyframes rotate {
      0%, 25% { transform:translate(-50% , -50% ) rotate(0deg)}
      75%,  100% { transform:translate(-55% , -55% ) rotate(90deg)}
    }`,
  },

  {
    css: `.loader {
      width: 50px;
      height: 165px;
      position: relative;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50% , 0);
      width: 16px;
      height: 16px;
      background: gold;
      border-radius: 50%;
      animation: bounce 2s linear infinite;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 48px;
      width: 48px;
      background: gold;
      border-radius: 4px;
      animation: rotate 2s linear infinite;
    }

    @keyframes bounce {
      0% , 50% , 100%{
        transform: translate(-50%, 0px);
        height: 20px;
      }
      20% {
        transform: translate(-25%, 85px);
        height: 28px;
      }
      25% {
        transform: translate(-25%, 110px);
        height: 12px;
      }
      70% {
        transform: translate(-75%, 85px);
        height: 28px;
      }
      75% {
        transform: translate(-75%, 108px);
        height: 12px;
      }
    }
    @keyframes rotate {
      0% , 50% , 100%{ transform: rotate(0deg)}
      25% { transform: rotate(90deg)}
      75%{ transform: rotate(-90deg)}
    }`,
  },

  {
    css: `.loader {
      width: 56px;
      height: 56px;
      position: relative;
      background: goldenrod;
      border-radius: 4px;
      perspective: 500px;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 2px;
      top: 2px;
      width: 24px;
      height: 24px;
      background: gold;
      border-radius: 50%;
      transform-origin: 100% 100%;
      animation: flip 2s linear infinite;
    }

    @keyframes flip {
      0% , 100% { transform: rotateX(0deg) rotateY(0deg)}
      25% { transform: rotateX(0deg) rotateY(-180deg)}
      50% { transform: rotateX(-180deg) rotateY(-180deg)}
      75% { transform: rotateX(-180deg) rotateY(0deg)}
    }`,
  },

  {
    css: `.loader {
      width: 54px;
      height: 54px;
      position: relative;
      background: gold;
      border-radius: 4px;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      width: 24px;
      height: 24px;
      background: goldenrod;
      border-radius: 50%;
      transform-origin: 100% 100%;
      animation: move 1s linear infinite;
    }

    @keyframes move {
      0% , 100%{ transform: translate(0 ,0)}
      25%{ transform: translate(100% ,0)}
      50%{ transform: translate(100% ,100%)}
      75%{ transform: translate(0 ,100%)}
    }`,
  },

  {
    css: `.loader {
      width: 54px;
      height: 54px;
      position: relative;
      border-radius: 4px;
      background-color: darkgoldenrod;
      background-image:
        radial-gradient(circle 5px , gold 100%, transparent 0),
        radial-gradient(circle 5px , gold 100%, transparent 0),
        radial-gradient(circle 5px , gold 100%, transparent 0),
        radial-gradient(circle 5px , gold 100%, transparent 0),
        radial-gradient(circle 5px , gold 100%, transparent 0),
        radial-gradient(circle 5px , gold 100%, transparent 0);
      background-repeat: no-repeat;
      animation: move 4s linear infinite , rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% , 20%{ transform: rotate(0deg)}
      30% , 40% { transform: rotate(90deg)}
      50% , 60% { transform: rotate(180deg)}
      70% , 80% { transform: rotate(270deg)}
      90%,  100% { transform: rotate(360deg)}
    }
    @keyframes move {
      0% ,  9%{
        background-position:
        -12px -15px,  -12px 0px, -12px 15px,
        12px -15px,  12px 0px,  12px 15px;
      }
      10% , 25%{
        background-position:
        0px -15px,  -12px 0px, -12px 15px,
        34px -15px,  12px 0px,  12px 15px;
      }
      30% , 45%{
        background-position:
        0px -34px, -12px -10px, -12px 12px,
        34px -15px, 12px -10px, 12px 12px;
      }
      50% , 65% {
        background-position:
        0px -34px, -12px -34px, -12px 12px,
        34px -12px, 0px -10px, 12px 12px;
      }
      70% , 85% {
        background-position:
        0px -34px, -12px -34px, 0px 12px,
        34px -12px, 0px -10px, 34px 12px;
      }
      90% , 100% {
        background-position:
        0px -34px, -12px -34px, 0px 0px,
        34px -12px, 0px 0px, 34px 12px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 16px;
      height: 16px;
      box-shadow: 0 30px, 0 -30px;
      border-radius: 4px;
      background: currentColor;
      display: block;
      margin: -50px auto 0;
      position: relative;
      color: gold;
      transform: translateY(30px);
      box-sizing: border-box;
      animation: animloader 2s ease infinite;
    }
    .loader::after,
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      box-shadow: 0 30px, 0 -30px;
      border-radius: 4px;
      background: currentColor;
      color: gold;
      position: absolute;
      left: 30px;
      top: 0;
      animation: animloader 2s 0.2s ease infinite;
    }
    .loader::before {
      animation-delay: 0.4s;
      left: 60px;
    }

    @keyframes animloader {
      0% {
        top: 0;
        color: gold;
      }
      50% {
        top: 30px;
        color: rgba(255, 215, 0, 0.2);
      }
      100% {
        top: 0;
        color: gold;
      }
    }`,
  },

  // Line 5507  - Line

  {
    css: `.loader {
      width: 8px;
      height: 40px;
      border-radius: 4px;
      display: inline-block;
      margin-left: 20px;
      margin-top: 10px;
      position: relative;
      background: currentColor;
      color: gold;
      box-sizing: border-box;
      animation: animloader 0.3s 0.3s linear infinite alternate;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      bottom: 0;
      left: 20px;
      animation: animloader1 0.3s 0.45s linear infinite alternate;
    }
    .loader::before {
      left: -20px;
      animation-delay: 0s;
    }

    @keyframes animloader {
      0% {
        height: 40px;
        transform: translateY(0);
      }
      100% {
        height: 10px;
        transform: translateY(30px);
      }
    }
    @keyframes animloader1 {
      0% {
        height: 48px;
      }
      100% {
        height: 4.8px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 8px;
      height: 40px;
      border-radius: 4px;
      display: block;
      margin: 20px auto;
      position: relative;
      background: currentColor;
      color: gold;
      box-sizing: border-box;
      animation: animloader 0.3s 0.3s linear infinite alternate;
    }
    .loader::before,
    .loader::after {
      content: '';
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      box-sizing: border-box;
      animation: animloader 0.3s  0.45s  linear infinite alternate;
    }
    .loader::before {
      left: -20px;
      animation-delay: 0s;
    }

    @keyframes animloader {
      0%   { height: 48px} 
      100% { height: 4px}
    }`,
  },

  {
    css: `.loader {
      width: 8px;
      height: 48px;
      display: block;
      margin: auto;
      left: -20px;
      position: relative;
      border-radius: 4px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        box-shadow: 20px 0 rgba(255, 215, 0, 0.25), 40px 0 gold, 60px 0 gold;
      }
      50% {
        box-shadow: 20px 0 gold, 40px 0 rgba(255, 215, 0, 0.25), 60px 0 gold;
      }
      100% {
        box-shadow: 20px 0 gold, 40px 0 gold, 60px 0 rgba(255, 215, 0, 0.25);
      }
    }`,
  },

  {
    css: `.loader {
      width: 8px;
      height: 48px;
      display: inline-block;
      position: relative;
      border-radius: 4px;
      color: gold;
      box-sizing: border-box;
      animation: animloader 0.6s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 20px -10px, 40px 10px, 60px 0px;
      }
      25% {
        box-shadow: 20px 0px, 40px  0px, 60px 10px;
      }
      50% {
        box-shadow: 20px 10px, 40px -10px, 60px 0px;
      }
      75% {
        box-shadow: 20px 0px, 40px 0px, 60px -10px;
      }
      100% {
        box-shadow: 20px -10px, 40px 10px, 60px 0px;
      }
    }`,
  },

  {
    css: `.loader {
      width:45px;
      height:40px;
      background:
        linear-gradient(#0000 calc(1*100%/6),gold 0 calc(3*100%/6),#0000 0),
        linear-gradient(#0000 calc(2*100%/6),gold 0 calc(4*100%/6),#0000 0),
        linear-gradient(#0000 calc(3*100%/6),gold 0 calc(5*100%/6),#0000 0);
      background-size:10px 400%;
      background-repeat: no-repeat;
      animation:matrix 1s infinite linear;
    }
      
    @keyframes matrix {
      0% {background-position: 0% 100%, 50% 100%, 100% 100% }
      100% {background-position: 0% 0%, 50% 0%, 100% 0% }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 6px;
      display: block;
      margin: auto;
      position: relative;
      border-radius: 4px;
      color: gold;
      box-sizing: border-box;
      animation: animloader 0.6s linear infinite;
    }

    @keyframes animloader {
      0% { box-shadow: -10px 20px, 10px 35px , 0px 50px }
      25% { box-shadow: 0px 20px ,  0px 35px, 10px 50px }
      50% { box-shadow: 10px 20px, -10px 35px, 0px 50px }
      75% { box-shadow: 0px 20px, 0px  35px, -10px 50px }
      100% { box-shadow: -10px 20px, 10px  35px, 0px 50px}
    }`,
  },

  {
    css: `.loader {
      width: 4.8px;
      height: 4.8px;
      display: inline-block;
      margin-top: 20px;
      position: relative;
      border-radius: 4px;
      color: gold;
      background: currentColor;
      box-sizing: border-box;
      animation: animloader 0.3s 0.3s linear infinite alternate;
    }
    .loader::after,
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 4.8px;
      height: 4.8px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      left: 0;
      top: 15px;
      animation: animloader 0.3s 0.45s linear infinite alternate;
    }
    .loader::after {
      top: -15px;
      animation-delay: 0s;
    }

    @keyframes animloader {
      0% {
        width: 4.8px;
      }
      100% {
        width: 48px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 4.8px;
      height: 4.8px;
      display: block;
      margin: 20px auto;
      position: relative;
      border-radius: 4px;
      color: gold;
      background: currentColor;
      box-sizing: border-box;
      animation: animloader 0.3s 0.3s linear infinite alternate;
    }
    .loader::after,
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 4.8px;
      height: 4.8px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 15px;
      animation: animloader 0.3s 0.45s linear infinite alternate;
    }
    .loader::after {
      top: -15px;
      animation-delay: 0s;
    }

    @keyframes animloader {
      0% { width: 4.8px }
      100% { width: 48px}
    }`,
  },

  {
    css: `.loader {
      color: gold;
      position: relative;
      font-size: 11px;
      background: gold;
      animation: escaleY 1s infinite ease-in-out;
      width: 1em;
      height: 4em;
      animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
      content: '';
      position: absolute;
      top: 0;
      left: 2em;
      background: gold;
      width: 1em;
      height: 4em;
      animation: escaleY 1s infinite ease-in-out;
    }
    .loader:before {
      left: -2em;
      animation-delay: -0.32s;
    }

    @keyframes escaleY {
      0%, 80%, 100% {
        box-shadow: 0 0;
        height: 4em;
      }
      40% {
        box-shadow: 0 -2em;
        height: 5em;
      }
    }`,
  },

  {
    css: `.loader {
      width: 8px;
      height: 48px;
      display: inline-block;
      position: relative;
      border-radius: 4px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        box-shadow: 20px 0 rgba(255, 215, 0, 0), 40px 0 rgba(255, 215, 0, 0), 60px 0 rgba(255, 215, 0, 0), 80px 0 rgba(255, 215, 0, 0), 100px 0 rgba(255, 215, 0, 0);
      }
      20% {
        box-shadow: 20px 0 gold, 40px 0 rgba(255, 215, 0, 0), 60px 0 rgba(255, 215, 0, 0), 80px 0 rgba(255, 215, 0, 0), 100px 0 rgba(255, 215, 0, 0);
      }
      40% {
        box-shadow: 20px 0 gold, 40px 0 gold, 60px 0 rgba(255, 215, 0, 0), 80px 0 rgba(255, 215, 0, 0), 100px 0 rgba(255, 215, 0, 0);
      }
      60% {
        box-shadow: 20px 0 gold, 40px 0 gold, 60px 0 gold, 80px 0 rgba(255, 215, 0, 0), 100px 0 rgba(255, 215, 0, 0);
      }
      80% {
        box-shadow: 20px 0 gold, 40px 0 gold, 60px 0 gold, 80px 0 gold, 100px 0 rgba(255, 215, 0, 0);
      }
      100% {
        box-shadow: 20px 0 gold, 40px 0 gold, 60px 0 gold, 80px 0 gold, 100px 0 gold;
      }
    }`,
  },

  {
    css: `.loader {
      height: 30px;
      width: 10px;
      border-radius: 4px;
      color: gold;
      background: currentColor;
      position: relative;
      animation: ht 1s ease-in infinite alternate;
      box-shadow: 15px 0 0 -1px , -15px 0 0 -1px,
                  30px 0 0 -2px , -30px 0 0 -2px,
                  45px 0 0 -3px , -45px 0 0 -3px;
    }

    @keyframes ht {
      100% { height: 0px }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 75px;
      height: 100px;
      background-repeat: no-repeat;
      background-image: linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0);
      background-size: 8px 100%;
      background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px;
      animation: pillerPushUp 4s linear infinite;
    }
    .loader:after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 10px;
      height: 10px;
      background: gold;
      border-radius: 50%;
      animation: ballStepUp 4s linear infinite;
    }

    @keyframes pillerPushUp {
      0% , 40% , 100%{background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px}
      50% ,  90% {background-position: 0px 50px, 15px 58px, 30px 66px, 45px 78px, 60px 90px}
    }
    @keyframes ballStepUp {
      0% {transform: translate(0, 0)}
      5% {transform: translate(8px, -14px)}
      10% {transform: translate(15px, -10px)}
      17% {transform: translate(23px, -24px)}
      20% {transform: translate(30px, -20px)}
      27% {transform: translate(38px, -34px)}
      30% {transform: translate(45px, -30px)}
      37% {transform: translate(53px, -44px)}
      40% {transform: translate(60px, -40px)}
      50% {transform: translate(60px, 0)}
      57% {transform: translate(53px, -14px)}
      60% {transform: translate(45px, -10px)}
      67% {transform: translate(37px, -24px)}
      70% {transform: translate(30px, -20px)}
      77% {transform: translate(22px, -34px)}
      80% {transform: translate(15px, -30px)}
      87% {transform: translate(7px, -44px)}
      90% {transform: translate(0, -40px)}
      100% {transform: translate(0, 0);}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 85px;
      height: 50px;
      background-repeat: no-repeat;
      background-image: linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0);
      background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
      animation: rikSpikeRoll 0.65s linear infinite alternate;
    }
    
    @keyframes rikSpikeRoll {
      0% { background-size: 10px 3px;}
      16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
      33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
      50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
      66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
      83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
      100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 55px;
      height: 55px;
      background-repeat: no-repeat;
      background-image: linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0),
                        linear-gradient(gold 50px, transparent 0);
      background-size: 5px 40px;
      background-position: 0px center, 10px center, 20px center, 30px center, 40px center, 50px center;
      animation: spikeUp 1s linear infinite alternate;
    }

    @keyframes spikeUp {
      0% { background-size: 5px 40px}
      16% { background-size: 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
      33% { background-size: 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
      50% { background-size: 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px}
      66% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px}
      83% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px}
      100% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px}
    }`,
  },

  {
    css: `.loader {
      width: 20px;
      height: 12px;
      display: block;
      margin: auto;
      position: relative;
      border-radius: 4px;
      color: gold;
      background: currentColor;
      box-sizing: border-box;
      animation: animloader 0.6s 0.3s ease infinite alternate;
    }
    .loader::after,
    .loader::before {
      content: '';  
      box-sizing: border-box;
      width: 20px;
      height: 12px;
      background: currentColor;
      position: absolute;
      border-radius: 4px;
      top: 0;
      right: 110%;
      animation: animloader  0.6s ease infinite alternate;
    }
    .loader::after {
      left: 110%;
      right: auto;
      animation-delay: 0.6s;
    }

    @keyframes animloader {
      0% {
        width: 20px;
      }
      100% {
        width: 48px;
      }
    }`,
  },

  // Line 6018  - Progress

  {
    css: `.loader {
      width: 100%;
      height: 4.8px;
      display: inline-block;
      position: relative;
      background: rgba(255, 215, 0, 0.15);
      overflow: hidden;
    }
    .loader::after {
      content: '';
      width: 96px;
      height: 4.8px;
      background: gold;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: hitZak 1s linear infinite alternate;
    }

    @keyframes hitZak {
      0% {
        left: 0;
        transform: translateX(-1%);
      }
      100% {
        left: 100%;
        transform: translateX(-99%);
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 4.8px;
      display: inline-block;
      position: relative;
      background: rgba(255, 215, 0, 0.15);
      overflow: hidden;
    }
    .loader::after {
      content: '';
      width: 192px;
      height: 4.8px;
      background: gold;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: animloader 2s linear infinite;
    }

    @keyframes animloader {
      0% {
        left: 0;
        transform: translateX(-100%);
      }
      100% {
        left: 100%;
        transform: translateX(0%);
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 4.8px;
      display: inline-block;
      position: relative;
      background: rgba(255, 215, 0, 0.15);
      overflow: hidden;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 0;
      height: 4.8px;
      background: gold;
      position: absolute;
      top: 0;
      left: 0;
      animation: animFw 10s linear infinite;
    }

    @keyframes animFw {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }`,
  },

  {
    css: `.loader {
      width: 0;
      height: 4.8px;
      display: inline-block;
      position: relative;
      background: gold;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      box-sizing: border-box;
      animation: animFw 8s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';
      width: 10px;
      height: 1px;
      background: gold;
      position: absolute;
      top: 9px;
      right: -2px;
      opacity: 0;
      transform: rotate(-45deg) translateX(0px);
      box-sizing: border-box;
      animation: coli1 0.3s linear infinite;
    }
    .loader::before {
      top: -4px;
      transform: rotate(45deg);
      animation: coli2 0.3s linear infinite;
    }

    @keyframes animFw {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
    @keyframes coli1 {
      0% {
        transform: rotate(-45deg) translateX(0px);
        opacity: 0.7;
      }
      100% {
        transform: rotate(-45deg) translateX(-45px);
        opacity: 0;
      }
    }
    @keyframes coli2 {
      0% {
        transform: rotate(45deg) translateX(0px);
        opacity: 1;
      }
      100% {
        transform: rotate(45deg) translateX(-45px);
        opacity: 0.7;
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 4.8px;
      display: inline-block;
      position: relative;
      overflow: hidden;
    }
    .loader::after {
      content: '';  
      width: 96px;
      height: 4.8px;
      background: gold;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: hitZak 0.6s ease-in-out infinite alternate;
    }

    @keyframes hitZak {
      0% {
        left: 0;
        transform: translateX(-1%);
      }
      100% {
        left: 100%;
        transform: translateX(-99%);
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 4.8px;
      display: inline-block;
      background: rgba(255, 215, 0, 0.15);
      position: relative;
      overflow: hidden;
    }
    .loader::after {
      content: '';  
      width: 0%;
      height: 4.8px;
      background-color: gold;
      background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
      background-size: 15px 15px;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: animFw 6s ease-in infinite;
    }

    @keyframes animFw {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 4.8px;
      display: inline-block;
      background: rgba(255, 215, 0, 0.15);
      position: relative;
      overflow: hidden;
    }
    .loader::after {
      content: '';  
      width: 0%;
      height: 4.8px;
      background-color: gold;
      font-size: 15px;
      background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
      background-size: 1em 1em;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: animFw 10s ease-in infinite,  barStripe 1s linear infinite;
    }

    @keyframes barStripe {
      0% {
        background-position: 1em 0;
      }
      100% {
        background-position: 0 0;
      }
    }
    @keyframes animFw {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 8px;
      display: inline-block;
      position: relative;
      overflow: hidden;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      background-color: rgba(255, 215, 0, 0.15);
      background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
      background-size: 15px 15px;
      z-index: 10;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 0%;
      height: 100%;
      background-color: gold;
      position: absolute;
      border-radius: 0 4px 4px 0;
      top: 0;
      left: 0;
      animation: animFw 10s ease-in infinite;
    }

    @keyframes animFw {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }`,
  },

  {
    css: `.loader {
      width: 100%;
      height: 12px;
      display: inline-block;
      background-color: gold;
      background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
      font-size: 30px;
      background-size: 1em 1em;
      box-sizing: border-box;
      animation: barStripe 1s linear infinite;
    }

    @keyframes barStripe {
      0% {
        background-position: 1em 0;
      }
      100% {
        background-position: 0 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 96px;
      height: 16px;
      display: inline-block;
      background-color: gold;
      border: 1px solid gold;
      border-radius: 4px;
      background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
      font-size: 30px;
      background-size: 1em 1em;
      box-sizing: border-box;
      animation: barStripe 1s linear infinite;
    }

    @keyframes barStripe {
      0% {
        background-position: 1em 0;
      }
      100% {
        background-position: 0 0;
      }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 12px;
      width: 80%;
      border: 1px solid gold;
      border-radius: 10px;
      overflow: hidden;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background: gold;
      animation: 6s prog ease-in infinite;
    }
      
    @keyframes prog {
      to {width: 100%;}
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 12px;
      width: 80%;
      border: 1px solid gold;
      border-radius: 10px;
      overflow: hidden;
    }
    .loader::after {
      content: '';
      width: 40%;
      height: 100%;
      background: gold;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: animloader 2s linear infinite;
    }
    
    @keyframes animloader {
      0% {
        left: 0;
        transform: translateX(-100%);
      }
      100% {
        left: 100%;
        transform: translateX(0%);
      }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 25px;
      width: 200px;
      background: goldenrod;
      overflow: hidden;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background: gold;
      animation: 6s prog ease-in infinite;
    }

    @keyframes prog {
      to {width: 100%;}
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 200px;
      background: goldenrod;
      border:2px solid palegoldenrod;
      color: gold;
      overflow: hidden;
    }
    .loader::before {
      content: '';
      background: gold;
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      animation: loading 10s linear infinite;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 24px;
      line-height: 32px;
      color: rgb(255,215,0);
      mix-blend-mode: difference;
      animation: percentage 10s linear infinite;
    }
    
    @keyframes loading {
      0% { width: 0 }
      100% { width: 100% }
    }
    @keyframes percentage {
      0% { content: "0%"}
      5% { content: "5%"}
      10% { content: "10%"}
      20% { content: "20%"}
      30% { content: "30%"}
      40% { content: "40%"}
      50% { content: "50%"}
      60% { content: "60%"}
      70% { content: "70%"}
      80% { content: "80%"}
      90% { content: "90%"}
      95% { content: "95%"}
      96% { content: "96%"}
      97% { content: "97%"}
      98% { content: "98%"}
      99% { content: "99%"}
      100% { content: "100%"}
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 140px;
      border: 3px solid gold;
      border-radius: 20px;
      box-sizing: border-box;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: gold;
      animation: ballbns 2s ease-in-out infinite alternate;
    }

    @keyframes ballbns {
      0% { left: 0; transform: translateX(0%); }
      100% { left: 100%; transform: translateX(-100%); }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 150px;
      box-sizing: border-box;
      overflow: hidden;
      border: 2px solid gold;
      border-radius: 20px;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 2px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: gold;
      animation: ballbns 3s ease-in-out infinite;
    }
  
    @keyframes ballbns {
      0% {  
        left: 0; 
        transform: translateX(0%); 
        box-shadow: -5px  0 0 -1px rgba(255, 215, 0, 0.9),
                    -10px 0 0 -2px rgba(255, 215, 0, 0.8),
                    -15px 0 0 -4px rgba(255, 215, 0, 0.6),
                    -20px 0 0 -6px rgba(255, 215, 0, 0.4),
                    -25px 0 0 -8px rgba(255, 215, 0, 0.2);
      }
      49% {  
        left: 100%; 
        transform: translateX(-100%); 
        box-shadow: -5px  0 0 -1px rgba(255, 215, 0, 0.9),
                    -10px 0 0 -2px rgba(255, 215, 0, 0.8),
                    -15px 0 0 -4px rgba(255, 215, 0, 0.6),
                    -20px 0 0 -6px rgba(255, 215, 0, 0.4),
                    -25px 0 0 -8px rgba(255, 215, 0, 0.2);
      }
      51% {  
        left: 100%; 
        transform: translateX(-100%); 
        box-shadow: 5px  0 0 -1px rgba(255, 215, 0, 0.9),
                    10px 0 0 -2px rgba(255, 215, 0, 0.8),
                    15px 0 0 -4px rgba(255, 215, 0, 0.6),
                    20px 0 0 -6px rgba(255, 215, 0, 0.4),
                    25px 0 0 -8px rgba(255, 215, 0, 0.2);
      }
      100% {  
        left: 0; 
        transform: translateX(0%); 
        box-shadow: 5px  0 0 -1px rgba(255, 215, 0, 0.9),
                    10px 0 0 -2px rgba(255, 215, 0, 0.8),
                    15px 0 0 -4px rgba(255, 215, 0, 0.6),
                    20px 0 0 -6px rgba(255, 215, 0, 0.4),
                    25px 0 0 -8px rgba(255, 215, 0, 0.2);
      }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 140px;
      border: 3px solid gold;
      border-radius: 20px;
      box-sizing: border-box;
      animation: balancing 2s linear infinite alternate;
      transform-origin: center center;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 52px;
      height: 26px;
      border-radius: 20px;
      background: gold;
      animation: ballbns 2s linear infinite alternate;
    }

    @keyframes ballbns {
      0% { left: 0; transform: translateX(0%); }
      100% { left: 100%; transform: translateX(-100%); }
    }
    @keyframes balancing {
      0% { transform: rotate(-25deg); }
      50% { transform: rotate(0deg); }
      100% { transform: rotate(25deg); }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 120px;
      background: linear-gradient(gold 4px, transparent 0) no-repeat;
      background-position: 0 16px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 2px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: gold;
      border:6px solid darkgoldenrod;
      box-sizing: border-box;
      animation: ballbns 1.5s linear infinite;
    }
  
    @keyframes ballbns {
      0% { left: 0; transform: translateX(-100%); }
      100% { left: 100%; transform: translateX(0%); }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 100px;
      background: linear-gradient(goldenrod 4px, transparent 0) no-repeat;
      background-position: 0 14px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 4px;
      width: 24px;
      height: 24px;
      background: gold;
      animation: ballbns 1s linear infinite alternate ;
    }
  
    @keyframes ballbns {
      0% { left: 0; transform: translateX(0%) rotate(45deg); }
      100% { left: 100%; transform: translateX(-100%) rotate(45deg); }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      border: 2px solid goldenrod;
      width: 120px;
      background: darkgoldenrod;
      box-sizing: border-box;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 28px;
      height: 28px;
      background: gold;
      animation: ballbns 1s ease-in-out infinite alternate;
    }
  
    @keyframes ballbns {
      0% { left: 0; transform: translateX(0%); }
      100% { left: 100%; transform: translateX(-100%); }
    }`,
  },

  {
    css: `.loader {
      width: 200px;
      height: 40px;
      background-color: darkgoldenrod;
      position: relative;
      border-radius: 50px;
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);
    }
    .loader:after {
      border-radius: 50px;
      content: "";
      position: absolute;
      background-color: gold;
      left: 2px;
      top: 2px;
      bottom: 2px;
      right: 360px;
      animation: slide 2s linear infinite;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    @keyframes slide {
      0% {
        right: 150px;
        left: 2px;
      }
      5% {
        left: 2px;
      }
      50% {
        right: 2px;
        left: 150px;
      }
      55% {
        right: 2px;
      }
      100% {
        right: 150px;
        left: 2px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 100px;
      height: 46px;
      position: relative;
      border-bottom: 5px solid gold;
      border-top: 5px solid gold;
      box-sizing: border-box;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      left: 0;
      top: -20px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: gold;
      border: 5px solid darkgoldenrod;
      box-sizing: border-box;
      animation: slide 1s infinite ease-in-out alternate;
    }
    .loader:after {
      top: 20px;
      animation-direction: alternate-reverse;
    }

    @keyframes slide {
      0% , 20% {  transform: translateX(70px)  }
      80% , 100% { transform: translateX(-1px) }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 20px;
      width: 140px;
      background-image: 
        linear-gradient(goldenrod 20px, transparent 0), 
        linear-gradient(goldenrod 20px, transparent 0), 
        linear-gradient(goldenrod 20px, transparent 0), 
        linear-gradient(goldenrod 20px, transparent 0);
      background-repeat: no-repeat;
      background-size: 20px auto;
      background-position: 0 0, 40px 0, 80px 0, 120px 0;
      animation: pgfill 1s linear infinite;
    }
  
    @keyframes pgfill {
      0% { background-image: linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      25% { background-image: linear-gradient(gold 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      50% { background-image: linear-gradient(gold 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      75% { background-image: linear-gradient(gold 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      100% { background-image: linear-gradient(gold 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(gold 20px, transparent 0); }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 20px;
      width: 140px;
      background-image: 
      linear-gradient(goldenrod 20px, transparent 0), 
      linear-gradient(goldenrod 20px, transparent 0), 
      linear-gradient(goldenrod 20px, transparent 0), 
      linear-gradient(goldenrod 20px, transparent 0);
      background-repeat: no-repeat;
      background-size: 20px auto;
      background-position: 0 0, 40px 0, 80px 0, 120px 0;
      animation: pgfill 1s linear infinite;
    }

    @keyframes pgfill {
      0% { background-image: linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      25% { background-image: linear-gradient(gold 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      50% { background-image: linear-gradient(goldenrod 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      75% { background-image: linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(gold 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0); }
      100% { background-image: linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(goldenrod 20px, transparent 0), linear-gradient(gold 20px, transparent 0); }
    }`,
  },

  {
    css: `.loader {
      width:120px;
      height:24px;
      -webkit-mask:
        radial-gradient(circle closest-side, goldenrod 94%,#0000) 0 0/25% 100%,
        linear-gradient(goldenrod 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
      mask:
        radial-gradient(circle closest-side,goldenrod 94%,#0000) 0 0/25% 100%,
        linear-gradient(goldenrod 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
      background: linear-gradient(gold 0 0) left/0% 100% no-repeat goldenrod;
      animation:bblprg 2s infinite linear;
    }
    
    @keyframes bblprg {
      100% {background-size:100% 100%}
    }`,
  },

  {
    css: `.loader {
      width: 96px;
      height: 24px;
      display: inline-block;
      background-color: gold;
      border: 1px solid gold;
      border-radius: 4px;
      background: linear-gradient(45deg, transparent 49%, gold 50%, gold 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, gold 50%, gold 50%, transparent 51%, transparent);
      font-size: 15px;
      background-size: 1em 1em;
      box-sizing: border-box;
      animation: barStripe 0.6s linear infinite;
    }

    @keyframes barStripe {
      0% {
        background-position: 1em 0;
      }
      100% {
        background-position: 0 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 130px;
      height: 48px;
      display: inline-block;
      background: linear-gradient(45deg, darkgoldenrod 25%, transparent 25%, transparent 75%, darkgoldenrod 75%, darkgoldenrod 100%), linear-gradient(45deg, darkgoldenrod 25%, darkgoldenrod 25%, gold 75%, darkgoldenrod 75%, darkgoldenrod 100%);
      font-size: 10px;
      background-size: 32px 32px;
      box-sizing: border-box;
      animation: raceBoard 0.6s linear infinite;
      background-position: 0 0, 16px 16px;
    }

    @keyframes raceBoard {
      0% {
        background-position: 0 0, 16px 16px;
      }
      100% {
        background-position: 32px 0px, 48px 16px;
      }
    }`,
  },

  // Line 6932  - Text

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      display: inline-block;
      color: gold;
      letter-spacing: 2px;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: darkgoldenrod;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      animation: animloader 6s linear infinite;
    }

    @keyframes animloader {
      0% {
        height: 100%;
      }
      100% {
        height: 0%;
      }
    }`,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: gold;
      letter-spacing: 2px;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: darkgoldenrod;
      text-shadow: 0 0 2px gold, 0 0 1px gold, 0 0 1px gold;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      animation: animloader 6s linear infinite;
    }

    @keyframes animloader {
      0% {
        height: 100%;
      }
      100% {
        height: 0%;
      }
    }`,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: darkgoldenrod;
      box-sizing: border-box;
      text-shadow: 0 0 2px gold, 0 0 1px gold, 0 0 1px gold;
      letter-spacing: 2px;
      position: relative;
    }
    .loader::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: gold;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      animation: animloader 6s linear infinite;
    }

    @keyframes animloader {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }`,
  },

  {
    content: 'L &nbsp; ading',
    html: `<span class="loader">L &nbsp; ading</span>`,
    css: `.loader {
      display: inline-block;
      font-size: 48px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: gold;
      position: relative;
    }
    .loader::before {
      content: '';  
      position: absolute;
      left: 34px;
      bottom: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 5px solid palegoldenrod;
      border-bottom-color: gold;
      box-sizing: border-box;
      animation: rotation 0.6s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    content: 'Load&nbsp;ng',
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader {
      color: gold;
      position: relative;
      display: inline-block;
      margin-top: 40px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 4px;
      box-sizing: border-box;
    }
    .loader::before {
      content: '';  
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 28px;
      width: 5.15px;
      background: currentColor;
      box-sizing: border-box;
      animation: animloader1 1s linear infinite alternate;
    }
    .loader::after {
      content: '';  
      width: 10px;
      height: 10px;
      position: absolute;
      left: 125px;
      top: 2px;
      border-radius: 50%;
      background: gold;
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        transform: translate(0px, 0px) scaleX(1);
      }
      14% {
        transform: translate(-12px, -16px) scaleX(1.05);
      }
      28% {
        transform: translate(-27px, -28px) scaleX(1.07);
      }
      42% {
        transform: translate(-46px, -35px) scaleX(1.1);
      }
      57% {
        transform: translate(-70px, -37px) scaleX(1.1);
      }
      71% {
        transform: translate(-94px, -32px) scaleX(1.07);
      }
      85% {
        transform: translate(-111px, -22px) scaleX(1.05);
      }
      100% {
        transform: translate(-125px, -9px) scaleX(1);
      }
    }
    @keyframes animloader1 {
      0% {
        box-shadow: 0 -6px, -122.9px -8px;
      }
      25%, 75% {
        box-shadow: 0 0px, -122.9px -8px;
      }
      100% {
        box-shadow: 0 0px, -122.9px -16px;
      }
    }`,
  },

  {
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader {
      font-size: 48px;
      color: transparent;
      overflow:hidden;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      text-shadow:0 0 gold, 5em 0 gold;
      animation:marquee 2s infinite ease;
    }
    .loader:before {
      content:"Loading...";
    }

    @keyframes marquee {to{text-shadow:-5em 0 gold, 0 0 gold}}

    `,
  },

  {
    content: 'Load&nbsp;ng',
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader {
      color: gold;
      position: relative;
      display: inline-block;
      margin-top: 20px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 4px;
      box-sizing: border-box;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 24px;
      width: 5.15px;
      background: currentColor;
    }
    .loader::after {
      content: '';  
      width: 8px;
      height: 8px;
      position: absolute;
      left: 125px;
      top: 2px;
      border-radius: 50%;
      background: gold;
      box-sizing: border-box;
      animation: animloader 1s ease-in infinite;
    }

    @keyframes animloader {
      0% {
        transform: translateY(8px) scaleY(1) scaleX(1.25);
      }
      25%, 75% {
        transform: translateY(-5px) scaleY(1.2) scaleX(1);
      }
      50% {
        transform: translateY(-10px) scaleY(1) scaleX(1);
      }
      100% {
        transform: translateY(8px) scaleY(0.8) scaleX(0.8);
      }
    }`,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      color: gold;
      display: inline-block;
      position: relative;
      font-size: 48px;
      font-family: Arial, Helvetica, sans-serif;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      width: 5px;
      height: 5px;
      background: currentColor;
      position: absolute;
      bottom: 10px;
      right: -5px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 10px 0 rgba(255, 215, 0, 0), 20px 0 rgba(255, 215, 0, 0);
      }
      50% {
        box-shadow: 10px 0 gold, 20px 0 rgba(255, 215, 0, 0);
      }
      100% {
        box-shadow: 10px 0 gold, 20px 0 gold;
      }
    }`,
  },

  // Line 7263 - index 200.

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      font-weight: 600;
      display: inline-block;
      letter-spacing: 2px;
      font-family: Arial, Helvetica, sans-serif;
      color: gold;
      box-sizing: border-box;
      animation: spotlight 2s linear infinite alternate;
    }

    @keyframes spotlight {
      0% , 20% {
        opacity: 1;
        letter-spacing: 2px;
      }
      80% , 100% {
        opacity: 0;
        letter-spacing: 23px;
      }
    }`
  },

  {
    content: 'Load&nbsp;ng',
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader {
      color: gold;
      display: inline-block;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 4px;
      box-sizing: border-box;
    }
    .loader::before {
      content: '';  
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 24px;
      width: 5px;
      background: currentColor;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      width: 4px;
      height: 4px;
      background: currentColor;
      position: absolute;
      right: 70px;
      top: 8px;
      box-sizing: border-box;
      animation: animloader 0.6s ease-out infinite alternate;
    }

    @keyframes animloader {
      0% {
        top: 8px;
        transform: rotate(0deg) scale(1);
      }
      100% {
        top: 0px;
        transform: rotate(180deg) scale(1.5);
      }
    }`,
  },

  {
    content: 'Load&nbsp;ng',
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader {
      color: gold;
      display: inline-block;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 4px;
      box-sizing: border-box;
    }
    .loader::before {
      content: '';  
      position: absolute;
      right: 68px;
      bottom: 10px;
      height: 24px;
      width: 7px;
      outline: 1px solid gold;
      color: gold;
      box-sizing: border-box;
      animation: animloader1 1s linear infinite alternate;
    }
    .loader::after {
      content: '';  
      width: 4px;
      height: 4px;
      background: gold;
      position: absolute;
      right: 70px;
      top: 8px;
      box-sizing: border-box;
      animation: animloader 1s ease-out infinite alternate;
    }

    @keyframes animloader {
      0% {
        top: 8px;
        transform: rotate(0deg) scale(1);
      }
      100% {
        top: 0px;
        transform: rotate(180deg) scale(1.5);
      }
    }
    @keyframes animloader1 {
      0% {
        box-shadow: 0 0 inset;
      }
      100% {
        box-shadow: 0 -28px inset;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      display: inline-block;
    }
    .loader::before {
      content: 'Loading';
      color: gold;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 2px;
      display: inline-block;
      box-sizing: border-box;
      animation: floating 1s ease-out infinite alternate;
    }
    .loader::after {
      content: '';  
      width: 100%;
      height: 10px;
      background: rgba(0, 0, 0, 0.15);
      position: absolute;
      left: 0;
      top: 100%;
      filter: blur(4px);
      border-radius: 50%;
      box-sizing: border-box;
      animation: animloader 1s ease-out infinite alternate;
    }

    @keyframes floating {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-25px);
      }
    }
    @keyframes animloader {
      0% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1.2);
      }
    }`,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      display: inline-block;
      letter-spacing: 2px;
      font-family: Arial, Helvetica, sans-serif;
      color: gold;
      box-sizing: border-box;
      animation: animloader 1s ease-in infinite alternate;
    }

    @keyframes animloader {
      0% {
        filter: blur(0px);
        transform: skew(0deg);
      }
      100% {
        filter: blur(3px);
        transform: skew(-4deg);
      }
    }`,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: darkgoldenrod;
      letter-spacing: 2px;
      position: relative;
    }
    .loader::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: gold;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      animation: animloader 10s ease-in infinite;
    }

    @keyframes animloader {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }`,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      font-size: 48px;
      color: gold;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:after {
      content: '';
      height: 4px;
      width:0%;
      display: block;
      background: gold;
      animation: 5s lineGrow linear infinite;
    }

    @keyframes lineGrow {to{width: 100%;}}
    
    `,
  },

  {
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
      display: inline-block;
      text-align: center;
      line-height: 86px;
      text-align: center;
      position: relative;
      padding: 0 48px;
      font-size: 48px;
      font-family: Arial, Helvetica, sans-serif;
      color: gold;
    }
    .loader:before,
    .loader:after {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      background: currentColor;
      position: absolute;
      animation: load .7s infinite alternate ease-in-out;
      top: 0;
    }
    .loader:after {
      top: auto;
      bottom: 0;
    }

    @keyframes load {
      0% {
        left: 0;
        height: 43px;
        width: 15px;
        transform: translateX(0)
      }
      50% {
        height: 10px;
        width: 40px
      }
      100% {
        left: 100%;
        height: 43px;
        width: 15px;
        transform: translateX(-100%)
      }
    }`,
  },

  {
    css: `.loader {
      font-size: 48px;
      color: gold;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:after {
      content: 'Loading';
      position: relative;
      z-index: 5;
    }
    .loader:before{
      content: '';
      height: 6px;
      border: 1px solid;
      border-radius: 10px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(gold 100%, transparent 0) no-repeat;
      background-size: 0% auto;
      animation: 10s lineGrow linear infinite;
    }

    @keyframes lineGrow {to {  background-size: 100% auto}}

    `,
  },

  {
    css: `.loader {
      font-size: 48px;
      color: gold;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:before{
      content: '';
      animation: 5s print linear alternate infinite;
    }
    .loader:after {
      content: '';
      position: absolute;
      right: -4px;
      top: 50%;
      transform: translatey(-45%);
      width: 2px;
      height: 1.3em;
      background: currentColor;
      opacity: 0.8;
      animation: 1s blink steps(2) infinite;
    }
    
    @keyframes blink {
      0% {visibility: hidden;}
      100% {visibility: visible;}
    }
    @keyframes print {
      0% { content: 'L'}
      10% { content: 'Lo'}
      20% { content: 'Loa'}
      30% { content: 'Load'}
      40% { content: 'Loadi'}
      50% { content: 'Loadin'}
      60% { content: 'Loading'}
      70% { content: 'Loading.'}
      80% { content: 'Loading..'}
      90% , 100% { content: 'Loading...'}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      font-size: 48px;
      letter-spacing: 2px;
    }
    .loader:before {
      content: "Loading";
      color: gold;
    }
    .loader:after {
      content: "";
      width: 20px;
      height: 20px;
      background-color: gold;
      border-radius: 50%;
      position: absolute;
      inset: 0;
      margin: auto;
      top: -70px;
      animation: motion 3s ease-in-out infinite;
    }

    @keyframes motion {
      0%, 50%, 100% {
        transform: translateX(0) scale(1);
      }
      25% {
        transform: translateX(-100px) scale(0.3);
      }
      75% {
        transform: translateX(100px) scale(0.3);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      font-size: 48px;
      letter-spacing: 6px;
    }
    .loader:before {
      content: "Loading";
      color: gold;
    }
    .loader:after {
      content: "";
      width: 20px;
      height: 20px;
      background-color: gold;
      background-image: radial-gradient(circle 2px, gold 100%, transparent 0), radial-gradient(circle 1px, gold 100%, transparent 0);
      background-position: 14px -4px, 12px -1px;
      border-radius: 50%;
      position: absolute;
      margin: auto;
      top: -5px;
      right: 66px;
      transform-origin: center bottom;
      animation: fillBaloon 1s ease-in-out infinite alternate;
    }

    @keyframes fillBaloon {
      0% { transform: scale(1)}
      100% { transform: scale(3)}
    }`,
  },

  {
    css: `.loader {
      font-size: 48px;
      font-weight: bold;
      letter-spacing: 2px;
      font-family: Arial, Helvetica, sans-serif;
      color: gold;
      animation: smokeOut 1s ease-in-out infinite alternate;
      text-shadow: 0 0 1px white;
    }
    .loader:before {
      content: "Loading";
    }

    @keyframes smokeOut {
      100% {
        opacity: 0.08;
        filter: blur(5px);
        letter-spacing: 4px;
      }
    }`,
  },

  // Line 7742  - Objects

  {
    css: `.loader {
      position: relative;
      font-size: 16px;
      width:  5.5em;
      height: 5.5em;
    }
    .loader:before{
      content: '';
      position: absolute;
      transform: translate(-50%, -50%) rotate(45deg);
      height: 100%;
      width: 4px;
      background: gold;
      left: 50%;
      top: 50%;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 0.2em;
      bottom: 0.18em;
      width: 1em;
      height: 1em;
      background-color: gold;
      border-radius: 15%;
      animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
    }

    @keyframes rollingRock {
      0% {transform: translate(0, -1em) rotate(-45deg)}
      5% {transform: translate(0, -1em) rotate(-50deg)}
      20% {transform: translate(1em, -2em) rotate(47deg)}
      25% {transform: translate(1em, -2em) rotate(45deg)}
      30% {transform: translate(1em, -2em) rotate(40deg)}
      45% {transform: translate(2em, -3em) rotate(137deg)}
      50% {transform: translate(2em, -3em) rotate(135deg)}
      55% {transform: translate(2em, -3em) rotate(130deg)}
      70% {transform: translate(3em, -4em) rotate(217deg)}
      75% {transform: translate(3em, -4em) rotate(220deg)}
      100% {transform: translate(0, -1em) rotate(-225deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      height: 40px;
      width: 6px;
      color: gold;
      animation: paddles 0.75s ease-out infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 15px;
      width: 12px;
      height: 12px;
      background-color: gold;
      border-radius: 50%;
      animation: ballbounce 0.6s ease-out infinite;
    }

    @keyframes paddles {
      0% {box-shadow: -25px -10px, 25px 10px}
      50% {box-shadow: -25px 8px, 25px -10px }
      100% {box-shadow: -25px -10px, 25px 10px}
    }
    @keyframes ballbounce {
      0% { transform: translateX(-20px) scale(1, 1.2) }
      25% { transform: scale(1.2, 1) }
      50% { transform: translateX(15px) scale(1, 1.2) }
      75% { transform: scale(1.2, 1) }
      100% { transform: translateX(-20px) }
    }`,
  },

  {
    css: `.loader {
      color: gold;
      font-family: Consolas, Menlo, Monaco, monospace;
      font-weight: bold;
      font-size: 78px;
      opacity: 0.8;
    }
    .loader:before {
      content: "{";
      display: inline-block;
      animation: pulse 0.4s alternate infinite ease-in-out;
    }
    .loader:after {
      content: "}";
      display: inline-block;
      animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
    }

    @keyframes pulse {
      to {
        transform: scale(0.8);
        opacity: 0.5;
      }
    }`,
  },

  {
    css: `.loader, .loader:before {
      display: inline-block;
      border: 20px double transparent;
      border-top-color: gold;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .loader {
      padding: 8px;
      animation: wifiLoading 1s ease-in infinite;
    }
    .loader:before {
      content: '';
      width: 0; height: 0;
    }

    @keyframes wifiLoading {
      0% { border-style: none}
      100% { border-style: double}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      color: gold;
      width: 0;
      height: 0;
      border-right: 50px solid transparent;
      border-bottom: 35px solid gold;
      border-left: 50px solid transparent;
      animation: 3s starRotate linear infinite;
    }
    .loader:before {
      border-bottom: 40px solid gold;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -22px;
      left: -31px;
      display: block;
      content: '';
      transform: rotate(-35deg);
    }
    .loader:after {
      content: '';
      position: absolute;
      display: block;
      color: gold;
      top: 1.5px;
      transform: rotate(-70deg);
      left: -52px;
      width: 0px;
      height: 0px;
      border-right: 50px solid transparent;
      border-bottom: 35px solid gold;
      border-left: 50px solid transparent;
    }

    @keyframes starRotate {
      0% {transform: rotate(0deg) scale(0.15)}
      50% {transform: rotate(360deg) scale(1)}
      100% {transform: rotate(720deg) scale(0.15)}
    }`,
  },

  {
    css: `.loader {
      transform: translateZ(1px);
    }
    .loader:after {
      content: '$';
      display: inline-block;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      text-align: center;
      line-height:40px;
      font-size: 32px;
      font-weight: bold;
      background: #FFD700;
      color: #DAA520;
      border: 4px double ;
      box-sizing: border-box;
      box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, .1);
      animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    @keyframes coin-flip {
      0%, 100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
      }
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
      }
      100% {
        transform: rotateY(3600deg);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 40px;
      height: 60px;
      animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .loader:before,
    .loader:after {
      content: "";
      background: gold ;
      width: 40px;
      height: 60px;
      border-radius: 50px 50px 0 0;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: rotate(45deg);
      transform-origin: 50% 68%;
      box-shadow: 5px 4px 5px #0004 inset;
    }
    .loader:after {
      transform: rotate(-45deg);
    }

    @keyframes heartBeat {
      0% { transform: scale(0.95) }
      5% { transform: scale(1.1) }
      39% { transform: scale(0.85) }
      45% { transform: scale(1) }
      60% { transform: scale(0.95) }
      100% { transform: scale(0.9) }
    }`,
  },

  {
    css: `.loader {
      width: 32px;
      height: 84px;
      border-radius: 0 0 20px 20px;
      position: relative;
      background: gold radial-gradient(circle 5px at 50% 85%, goldenrod 100%, transparent 0);
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 32px;
      height: 84px;
      border-radius: 0 0 20px 20px;
      background: gold;
      opacity: 0.8;
      transform: rotate(60deg);
      transform-origin: 50% 85%;
      z-index: -2;
      animation: rotate 1s infinite linear alternate;
    }
    .loader:after {
      animation: rotate2 1s infinite linear alternate;
      opacity: 0.5;
    }

    @keyframes rotate {
      0% , 20% { transform: rotate(0deg) }
      80% , 100% { transform: rotate(30deg) }
    }
    @keyframes rotate2 {
      0% , 20% { transform: rotate(0deg) }
      80% , 100% { transform: rotate(60deg) }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 120px;
      height: 90px;
      margin: 0 auto;
    }
    .loader:before {
      content: "";
      position: absolute;
      bottom: 30px;
      left: 50px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: gold;
      animation: loading-bounce 0.5s ease-in-out infinite alternate;
    }
    .loader:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 7px;
      width: 45px;
      border-radius: 4px;
      box-shadow: 0 5px 0 gold, -35px 50px 0 gold, -70px 95px 0 gold;
      animation: loading-step 1s ease-in-out infinite;
    }

    @keyframes loading-bounce {
      0% { transform: scale(1, 0.7)}
      40% { transform: scale(0.8, 1.2)}
      60% { transform: scale(1, 1)}
      100% { bottom: 140px }
    }
    @keyframes loading-step {
      0% {
        box-shadow: 0 10px 0 rgba(0,0,0,0),
                    0 10px 0 gold,
                    -35px 50px 0 gold,
                    -70px 90px 0 gold;
      }
      100% {
        box-shadow: 0 10px 0 gold,
                    -35px 50px 0 gold,
                    -70px 90px 0 gold,
                    -70px 90px 0 rgba(0,0,0,0);
      }
    }`,
  },

  {
    css: `.loader {
      width: 86px;
      height: 50px;
      border-radius: 50px;
      background:
        radial-gradient(farthest-side,#0000 calc(100% - 10px),darkgoldenrod calc(100% - 10px) 100%,#0000) left,
        radial-gradient(farthest-side,#0000 calc(100% - 10px),darkgoldenrod calc(100% - 10px) 100%,#0000) right;
      background-size: calc(50% + 5px) 100%;
      background-repeat: no-repeat;
      position: relative;
      animation: flipX 1s infinite linear;
    }
    .loader:before {
      content: "";
      position: absolute;
      inset:0;
      margin:auto;
      width:10px;
      height: 10px;
      border-radius: 50%;
      background:gold;
      transform-origin: -14px 50%;
      animation: rotate 0.5s infinite linear;
    }

    @keyframes flipX {
      0%,49.99% {transform:scaleX(1)}
      50%,100% {transform:scaleX(-1)}
    }

    @keyframes rotate {
      100% {transform:rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 164px;
      height: 164px;
      perspective: 300px;
    }
    .loader::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image:
        radial-gradient(circle 15px, gold 100%, transparent 0),
        radial-gradient(circle 15px, gold 100%, transparent 0),
        linear-gradient(gold 100px, transparent 0),
        linear-gradient(gold 100px, transparent 0);
      background-repeat: no-repeat;
      background-size: 30px 30px, 30px 30px, 40% 2px, 40% 2px;
      background-position: left center, right center, left center, right center;
      animation: rotateY 1s linear infinite;
    }
    .loader::after  {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image:
        radial-gradient(circle 15px, darkgoldenrod 100%, transparent 0),
        radial-gradient(circle 15px, darkgoldenrod 100%, transparent 0),
        linear-gradient(darkgoldenrod 100px, transparent 0),
        linear-gradient(darkgoldenrod 100px, transparent 0);
      background-repeat: no-repeat;
      background-size: 30px 30px, 30px 30px, 2px 40% , 2px 40%;
      background-position: top center, bottom center, top center, bottom center;
      animation: rotateX 1s linear infinite;
    }

    @keyframes rotateY {
      0%{ transform: rotateY(0deg)}
      100% { transform: rotateY(-180deg)}
    }
    @keyframes rotateX {
      0%, 25% { transform: rotateX(0deg)}
      75%,  100% { transform: rotateX(-180deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      border: 24px solid gold;
      border-radius: 50%;
      box-sizing: border-box;
      animation: eat 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translateY(-50%);
      background: gold;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      box-sizing: border-box;
      opacity: 0;
      animation: move 2s linear infinite;
    }
    .loader::before {
      animation-delay: 1s;
    }

    @keyframes eat {
      0% , 49% { border-right-color: gold }
      50% , 100% { border-right-color: #0000 }
    }
    @keyframes move {
      0% { left: 75px ; opacity: 1}
      50% { left: 0px; opacity: 1 }
      52%, 100% { left: -5px; opacity: 0; }
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: darkgoldenrod;
      border-radius: 4px;
      overflow: hidden;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 40px;
      transform: rotate(45deg) translate(30%, 40%);
      background: gold;
      box-shadow: 32px -34px 0 5px gold;
      animation: slide 2s infinite ease-in-out alternate;
    }
    .loader:after {
      content: "";
      position: absolute;
      left: 10px;
      top: 10px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: gold;
      transform: rotate(0deg);
      transform-origin: 35px 145px;
      animation: rotate 2s infinite ease-in-out;
    }

    @keyframes slide {
      0% , 100%{ bottom: -35px}
      25% , 75%{ bottom: -2px}
      20% , 80%{ bottom: 2px}
    }
    @keyframes rotate {
      0% { transform: rotate(-15deg)}
      25% , 75%{ transform: rotate(0deg)}
      100% {  transform: rotate(25deg)}
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: goldenrod;
      border-radius: 50%;
      transform: rotate(45deg);
      animation: rotate 2s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 15px;
      height: 30px;
      background: gold;
      transform: skew(5deg , 60deg) translate(-50%, -5%);
    }
    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: darkgoldenrod;
      transform:translate(-50% , -50%);
    }

    @keyframes rotate {
      0% { transform: rotate(45deg)}
      30% , 50% , 70%  { transform: rotate(230deg)}
      40% , 60% , 80% { transform: rotate(240deg)}
      100% {  transform: rotate(245deg)}
   }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 120px;
      height: 140px;
      background-image: radial-gradient(circle 30px, goldenrod 100%, transparent 0),
      radial-gradient(circle 5px, goldenrod 100%, transparent 0),
      radial-gradient(circle 5px, goldenrod 100%, transparent 0),
      linear-gradient(goldenrod 20px, transparent 0);
      background-position: center 127px , 94px 102px , 16px 18px, center 114px;
      background-size: 60px 60px, 10px 10px , 10px 10px , 4px 14px;
      background-repeat: no-repeat;
      z-index: 10;
      perspective: 500px;
    }
    .loader::before {
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius:50%;
      border: 3px solid goldenrod;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -55%) rotate(-45deg);
      border-right-color: transparent;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';
      position: absolute;
      height: 80px;
      width: 80px;
      transform: translate(-50%, -55%) rotate(-45deg) rotateY(0deg) ;
      left: 50%;
      top: 50%;
      box-sizing: border-box;
      border: 7px solid gold;
      border-radius:50%;
      animation: rotate 0.5s linear infinite;
    }

    @keyframes rotate {
      to{transform: translate(-50%, -55%) rotate(-45deg) rotateY(360deg)   }
    }`,
  },

  {
    css: `.loader {
      box-sizing: border-box;
      display: inline-block;
      width: 50px;
      height: 80px;
      border-top: 5px solid goldenrod;
      border-bottom: 5px solid goldenrod;
      position: relative;
      background: linear-gradient(gold 30px, transparent 0) no-repeat;
      background-size: 2px 40px;
      background-position: 50% 0px;
      animation: spinx 5s linear infinite;
    }
    .loader:before,
    .loader:after {
      content: "";
      width: 40px;
      left: 50%;
      height: 35px;
      position: absolute;
      top: 0;
      transform: translatex(-50%);
      background: rgba(255, 215, 0, 0.4);
      border-radius: 0 0 20px 20px;
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: 0 0px;
      animation: lqt 5s linear infinite;
    }
    .loader:after {
      top: auto;
      bottom: 0;
      border-radius: 20px 20px 0 0;
      animation: lqb 5s linear infinite;
    }

    @keyframes lqt {
      0%, 100% {
        background-image: linear-gradient(gold 40px, transparent 0);
        background-position: 0% 0px;
      }
      50% {
        background-image: linear-gradient(gold 40px, transparent 0);
        background-position: 0% 40px;
      }
      50.1% {
        background-image: linear-gradient(gold 40px, transparent 0);
        background-position: 0% -40px;
      }
    }
    @keyframes lqb {
      0% {
        background-image: linear-gradient(gold 40px, transparent 0);
        background-position: 0 40px;
      }
      100% {
        background-image: linear-gradient(gold 40px, transparent 0);
        background-position: 0 -40px;
      }
    }
    @keyframes spinx {
      0%, 49% {
        transform: rotate(0deg);
        background-position: 50% 36px;
      }
      51%, 98% {
        transform: rotate(180deg);
        background-position: 50% 4px;
      }
      100% {
        transform: rotate(360deg);
        background-position: 50% 36px;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 78px;
      height: 78px;
      border-radius: 50%;
      box-sizing: border-box;
      background: palegoldenrod;
      border: 8px solid darkgoldenrod;
      overflow: hidden;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 0;
      top: -50%;
      width: 100%;
      height: 100%;
      background: goldenrod;
      z-index: 5;
      border-bottom: 8px solid darkgoldenrod;
      box-sizing: border-box;
      animation: eyeShade 3s infinite;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 20px;
      bottom: 15px;
      width: 32px;
      z-index: 2;
      height: 32px;
      background: gold;
      border-radius: 50%;
      animation: eyeMove 3s infinite;
    }

    @keyframes eyeShade {
      0%   {transform: translateY(0)}
      20%   {transform: translateY(5px)}
      40% , 50%   {transform: translateY(-5px)}
      60%   {transform: translateY( -8px)}
      75%   {transform: translateY( 5px)}
      100%   {transform: translateY(10px)}
    }
    @keyframes eyeMove {
      0%   {transform: translate(0 , 0)}
      20%   {transform: translate(0px , 5px)}
      40% , 50%   {transform: translate(0px , -5px)}
      60%   {transform: translate(-10px , -5px)}
      75%   {transform: translate(-20px , 5px)}
      100%   {transform: translate(0 , 10px)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 108px;
      display: flex;
      justify-content: space-between;
    }
   .loader::before,
   .loader::after {
      content: '';
      display: inline-block;
      width: 48px;
      height: 48px;
      background-color: palegoldenrod;
      background-image:  radial-gradient(circle 14px, gold 100%, transparent 0);
      background-repeat: no-repeat;
      border-radius: 50%;
      animation: eyeMove 10s infinite , blink 10s infinite;
    }

    @keyframes eyeMove {
      0%  , 10% {background-position: 0px 0px}
      13%  , 40% {background-position: -15px 0px}
      43%  , 70% {background-position: 15px 0px}
      73%  , 90% {background-position: 0px 15px}
      93%  , 100% {background-position: 0px 0px}
    }
    @keyframes blink {
      0%  , 10% , 12% , 20%, 22%, 40%, 42% , 60%, 62%,  70%, 72% , 90%, 92%, 98% , 100%
      { height: 48px}
      11% , 21% ,41% , 61% , 71% , 91% , 99%
      { height: 18px}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      background: radial-gradient(ellipse at center, gold 0%, gold 14%, darkgoldenrod 15%, darkgoldenrod 100%);
      background-size: cover;
      background-position: center;
      border-radius: 50%;
    }
    .loader::before,
    .loader::after {
      content: '';  
      position: absolute;
      height: 16px;
      width: 4px;
      background: gold;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) rotate(0deg);
      transform-origin: 25% 0;
      box-sizing: border-box;
      animation: rotation 10s linear infinite;
    }
    .loader::before {
      height: 22px;
      width: 2px;
      transform: translateX(-50%) rotate(0deg);
      animation-duration: 1s;
    }

    @keyframes rotation {
      0%   {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }`,
  },

  {
    note: 'Set background', css: `.loader {
      width: 60px;
      height: 40px;
      position: relative;
      display: inline-block;
    }
    .loader::before {
      content: '';  
      left: 0;
      top: 0;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: gold;
      background-image: radial-gradient(circle 8px at 18px 18px, #333 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, #333 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, #333 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, #333 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, #333 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #333 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #333 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, #333 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, #333 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, #333 100%, transparent 0);
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: rotationBack 3s linear infinite;
    }
    .loader::after {
      content: '';  
      left: 35px;
      top: 15px;
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: gold;
      background-image: radial-gradient(circle 5px at 12px 12px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, #333 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, #333 100%, transparent 0);
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: rotationBack 4s linear infinite reverse;
    }

    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 15px;
      height: 20px;
      margin-left: 15px;
      background: gold;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: bump 0.4s ease-in infinite alternate;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-top-color: gold;
    }

    @keyframes bump {
      0% {
        transform: translate(-50%, 5px);
      }
      100% {
        transform: translate(-50%, -5px);
      }
    }`,
  },

  {
    css: `.loader {
      width: 15px;
      height: 20px;
      background: gold;
      margin-left: 15px;
      margin-top: 15px;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: bump 0.4s linear infinite alternate;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-bottom-color: gold;
    }

    @keyframes bump {
      0% {
        transform: translate(-50%, 5px);
      }
      100% {
        transform: translate(-50%, -5px);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 12px;
      background: gold;
      margin-top: 40px;
      display: inline-block;
      position: relative;
    }
    .loader::after {
      content: '';  
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-top-color: gold;
      box-sizing: border-box;
      animation: bump 0.4s ease-in-out infinite alternate;
    }
    .loader::before {
      content: '';  
      left: 50%;
      bottom: 25px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 20px;
      background: gold;
      box-sizing: border-box;
      animation: bump 0.4s ease-in-out infinite alternate;
    }

    @keyframes bump {
      0% {
        transform: translate(-50%, 5px);
      }
      100% {
        transform: translate(-50%, -5px);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 12px;
      margin-top: 40px;
      background: gold;
      display: inline-block;
      position: relative;
    }
    .loader::after {
      content: '';  
      left: 50%;
      top: -47px;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-bottom-color: gold;
      box-sizing: border-box;
      animation: bump 0.4s ease-in-out infinite alternate;
    }
    .loader::before {
      content: '';  
      left: 50%;
      bottom: 15px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 20px;
      background: gold;
      box-sizing: border-box;
      animation: bump 0.4s ease-in-out infinite alternate;
    }

    @keyframes bump {
      0% {
        transform: translate(-50%, 5px);
      }
      100% {
        transform: translate(-50%, -5px);
      }
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 44px;
      position: relative;
      border: 5px solid gold;
      border-radius: 8px;
    }
    .loader::before {
      content: '';
      position: absolute;
      border: 5px solid gold;
      width: 32px;
      height: 28px;
      border-radius: 50% 50% 0 0;
      left: 50%;
      top: 0;
      transform: translate(-50% , -100%)
    }
    .loader::after {
      content: '';
      position: absolute;
      transform: translate(-50% , -50%);
      left: 50%;
      top: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: gold;
      box-shadow: 16px 0 gold, -16px 0 gold;
      animation: flash 0.5s ease-out infinite alternate;
    }

    @keyframes flash {
      0% {
        background-color: rgba(255, 215, 0, 0.25);
        box-shadow: 16px 0 rgba(255, 215, 0, 0.25), -16px 0 rgba(255, 215, 0, 1);
      }
      50% {
        background-color: rgba(255, 215, 0, 1);
        box-shadow: 16px 0 rgba(255, 215, 0, 0.25), -16px 0 rgba(255, 215, 0, 0.25);
      }
      100% {
        background-color: rgba(255, 215, 0, 0.25);
        box-shadow: 16px 0 rgba(255, 215, 0, 1), -16px 0 rgba(255, 215, 0, 0.25);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 24px;
      display: inline-block;
      position: relative;
      color: gold;
      border: 1px solid;
      box-sizing: border-box;
      animation: fillX 2s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      background: gold;
      width: 5px;
      height: 12px;
    }

    @keyframes fillX {
      0% {
        box-shadow: 0 0 inset;
      }
      100% {
        box-shadow: 48px 0 inset;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 24px;
      display: inline-block;
      position: relative;
      border: 1px solid gold;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid gold;
      width: 5px;
      height: 12px;
    }
    .loader::before {
      content: '';  
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      height: 80%;
      width: 6px;
      box-sizing: border-box;
      animation: animloader  2s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 11px 0 rgba(255, 215, 0, 0), 22px 0 rgba(255, 215, 0, 0), 33px 0 rgba(255, 215, 0, 0), 44px 0 rgba(255, 215, 0, 0);
      }
      25% {
        box-shadow: 11px 0 gold, 22px 0 rgba(255, 215, 0, 0), 33px 0 rgba(255, 215, 0, 0), 44px 0 rgba(255, 215, 0, 0);
      }
      50% {
        box-shadow: 11px 0 gold, 22px 0 gold, 33px 0 rgba(255, 215, 0, 0), 44px 0 rgba(255, 215, 0, 0);
      }
      75% {
        box-shadow: 11px 0 gold, 22px 0 gold, 33px 0 gold, 44px 0 rgba(255, 215, 0, 0);
      }
      100% {
        box-shadow: 11px 0 gold, 22px 0 gold, 33px 0 gold, 44px 0 gold;
      }
    }`,
  },

  {
    css: `.loader {
      width: 100px;
      height: 75px;
      margin: 0 auto;
      background: gold;
      position: relative;
      border-radius: 100%;
    }
    .loader:before {
      content: '';
      position: absolute;
      box-sizing: border-box;
      border: 15px solid transparent;
      border-top: 25px solid gold;
      transform: rotate(45deg);
      top: 50px;
      left: -15px;
    }
    .loader:after {
      content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50% , -50%);
      border-radius: 50%;
      background-color: gold;
      box-shadow: 20px 0 gold, -20px 0 gold;
      animation: flash 0.5s ease-out infinite alternate;
    }

    @keyframes flash {
      0% {
        background-color: darkgoldenrod;
        box-shadow: 20px 0 darkgoldenrod, -20px 0 gold;
      }
      50% {
        background-color: gold;
        box-shadow: 20px 0 darkgoldenrod, -20px 0 darkgoldenrod;
      }
      100% {
        background-color: darkgoldenrod;
        box-shadow: 20px 0 gold, -20px 0 darkgoldenrod;
      }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      height: 32px;
      width: 120px;
      border-bottom: 5px solid gold;
      box-sizing: border-box;
      animation: balancing 2s linear infinite alternate;
      transform-origin: 50% 100%;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: gold;
      animation: ballbns 2s linear infinite alternate;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 20px;
      width: 20px;
      transform: translate(-50%, 100%);
      border-radius: 50%;
      border: 6px solid gold;
    }

    @keyframes ballbns {
      0% {left: 0; transform: translateX(0%); }
      100% {left: 100%; transform: translateX(-100%); }
    }
    @keyframes balancing {
      0% {transform: rotate(-15deg); }
      50% {transform: rotate(0deg); }
      100% {transform: rotate(15deg); }
    }`
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: inline-block;
      position: relative;
      border: 4px solid gold;
      box-sizing: border-box;
      animation: fill 2s linear infinite alternate;
      color: gold;
      border-radius: 0 0 4px 4px;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 4px solid gold;
      width: 20px;
      height: 25px;
      border-radius: 0 4px 4px 0;
    }

    @keyframes fill {
      0% {
        box-shadow: 0 0  inset;
      }
      100% {
        box-shadow: 0 -48px inset;
      }
    }`,
  },

  {
    css: `.loader {
      width: 32px;
      height: 72px;
      display: inline-block;
      left: 5px;
      position: relative;
      border: 2px solid gold;
      box-sizing: border-box;
      animation: animloader 2s linear infinite alternate;
      color: gold;
      border-radius: 0 0 4px 4px;
      transform: perspective(140px) rotateX(-45deg);
    }

    @keyframes animloader {
      0% {
        box-shadow: 0 0  inset;
      }
      100% {
        box-shadow: 0 -70px inset;
      }
    }`,
  },

  {
    css: `.loader {
      width: 40px;
      height: 98px;
      display: inline-block;
      position: relative;
      border: 2px solid palegoldenrod;
      box-sizing: border-box;
      color: gold;
      border-radius: 20px 20px 4px 4px;
      background: rgba(255, 215, 0, .5);
      animation: fill 2s linear infinite alternate;
    }
    .loader::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 0%;
      transform: translate(-50% , -95%);
      border: 2px solid gold;
      border-bottom: none;
      background: palegoldenrod;
      width: 15px;
      height: 35px;
      animation: fillNeck 2s linear infinite alternate;
    }

    @keyframes fill {
      0% { box-shadow: 0 0  inset }
      50% , 100% { box-shadow: 0 -98px inset }
    }
    @keyframes fillNeck {
      0% , 50%{ box-shadow: 0 0  inset }
      100% { box-shadow: 0 -20px inset }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 40px;
      margin-top: 30px;
      display: inline-block;
      position: relative;
      background: gold;
      border-radius: 15% 15% 35% 35%;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 45px;
      top: 8px;
      border: 4px solid gold;
      width: 16px;
      height: 20px;
      border-radius: 0 4px 4px 0;
    }
    .loader::before {
      content: '';  
      position: absolute;
      width: 1px;
      height: 10px;
      color: gold;
      top: -15px;
      left: 11px;
      box-sizing: border-box;
      animation: animloader 1s ease infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 2px 0px rgba(255, 215, 0, 0), 12px 0px rgba(255, 215, 0, 0.3), 20px 0px rgba(255, 215, 0, 0);
      }
      50% {
        box-shadow: 2px -5px rgba(255, 215, 0, 0.5), 12px -3px rgba(255, 215, 0, 0.5), 20px -2px rgba(255, 215, 0, 0.6);
      }
      100% {
        box-shadow: 2px -8px rgba(255, 215, 0, 0), 12px -5px rgba(255, 215, 0, 0), 20px -5px rgba(255, 215, 0, 0);
      }
    }`,
  },

  {
    css: `.loader {
      width: 96px;
      height: 48px;
      display: inline-block;
      position: relative;
      background: darkgoldenrod;
      border-radius: 48px 48px 0 0;
      box-sizing: border-box;
      overflow: hidden;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      width: 24px;
      height: 12px;
      border-radius: 24px 24px 0 0;
      background: gold;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
    .loader::before {
      content: '';  
      position: absolute;
      width: 4px;
      height: 32px;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 0;
      background: gold;
      transform-origin: 50% 100%;
      box-sizing: border-box;
      animation: animloader 2s linear infinite alternate;
    }

    @keyframes animloader {
      0% {
        transform: rotate(-70deg);
      }
      10% {
        transform: rotate(-40deg);
      }
      20%, 45%, 35% {
        transform: rotate(-10deg);
      }
      40%, 30% {
        transform: rotate(-30deg);
      }
      50%, 60% {
        transform: rotate(20deg);
      }
      55%, 65%, 75% {
        transform: rotate(40deg);
      }
      70% {
        transform: rotate(45deg);
      }
      85%, 90% {
        transform: rotate(50deg);
      }
      95% {
        transform: rotate(75deg);
      }
      100%, 93% {
        transform: rotate(70deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: block;
      margin: 20px auto;
      position: relative;
      border: 3px solid gold;
      border-radius: 50%;
      box-sizing: border-box;
      animation: animloader 2s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 6px;
      height: 24px;
      background: gold;
      transform: rotate(-45deg);
      position: absolute;
      bottom: -20px;
      left: 46px;
    }

    @keyframes animloader {
      0% {
        transform: translate(-10px, -10px);
      }
      25% {
        transform: translate(-10px, 10px);
      }
      50% {
        transform: translate(10px, 10px);
      }
      75% {
        transform: translate(10px, -10px);
      }
      100% {
        transform: translate(-10px, -10px);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      display: block;
      margin: 20px auto;
      box-sizing: border-box;
      position: relative;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      left: 0;
      bottom: 0;
      position: absolute;
      border-radius: 50% 50% 0;
      border: 15px solid gold;
      transform: rotate(45deg) translate(0, 0);
      box-sizing: border-box;
      animation: animMarker 0.4s ease-in-out infinite alternate;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 150%;
      width: 24px;
      height: 4px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      animation: animShadow 0.4s ease-in-out infinite alternate;
    }

    @keyframes animMarker {
      0% {
        transform: rotate(45deg) translate(5px, 5px);
      }
      100% {
        transform: rotate(45deg) translate(-5px, -5px);
      }
    }
    @keyframes animShadow {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 48px;
      background: gold;
      display: block;
      margin: 20px auto;
      position: relative;
      box-sizing: border-box;
      animation: rotationBack 1s ease-in-out infinite reverse;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: rotate(45deg);
      position: absolute;
      width: 48px;
      height: 48px;
      background: gold;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      background: palegoldenrod;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }

    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 60px;
      height: 60px;
      display: block;
      margin: 20px auto;
      position: relative;
      background: radial-gradient(ellipse at center, gold 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, gold 48%, gold 52%, rgba(0, 0, 0, 0) 53%);
      background-size: 20px 20px , 20px auto;
      background-repeat: repeat-x;
      background-position: center bottom, center -5px;
      box-sizing: border-box;
    }
    .loader::before,
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: -20px;
      top: 0;
      width: 20px;
      height: 60px;
      background: radial-gradient(ellipse at center, gold 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, gold 48%, gold 52%, rgba(0, 0, 0, 0) 53%);
      background-size: 20px 20px , 20px auto;
      background-repeat: no-repeat;
      background-position: center bottom, center -5px;
      transform: rotate(0deg);
      transform-origin: 50% 0%;
      animation: animPend 1s linear infinite alternate;
    }
    .loader::after {
      animation: animPend2 1s linear infinite alternate;
      left: 100%;
    }

    @keyframes animPend {
      0% {
        transform: rotate(22deg);
      }
      50% {
        transform: rotate(0deg);
      }
    }
    @keyframes animPend2 {
      0%, 55% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-22deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 4px;
      height: 86px;
      background: gold;
      margin: auto;
      position: relative;
      animation: shake 1s linear infinite alternate, lightup 1s linear infinite;
      transform-origin: 0 0;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      width: 32px;
      height: 16px;
      box-sizing:border-box;
      border: 5px solid gold;
      border-top: none;
      border-radius: 0 0 20px 20px;
    }
    .loader::after {
      content: '';
      left: 50%;
      bottom: 0;
      position: absolute;
      transform: translateX(-50%);
      width: 64px;
      height: 32px;
      border-radius: 50px 50px 0 0;
      background: gold;
    }

    @keyframes shake {
      0% { transform: rotate(10deg)  }
      100% { transform: rotate(-10deg)  }
    }
    @keyframes lightup {
      0% ,20% , 40% {
        opacity: 0
      }
      10%, 30% , 50% , 100% {
        opacity: 1
      }
    }`
  },

  {
    css: `.loader {
      width: 24px;
      height: 80px;
      display: block;
      margin: 35px auto 0;
      border: 1px solid gold;
      border-radius: 0 0 50px 50px;
      position: relative;
      box-shadow: 0px 0px gold inset;
      background-image: linear-gradient(gold 100px, transparent 0);
      background-position: 0px 0px;
      background-size: 22px 80px;
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: animloader 6s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      border: 1px solid palegoldenrod;
      border-radius: 50%;
      width: 28px;
      height: 6px;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      left: 0;
      bottom: -4px;
      border-radius: 50%;
      position: absolute;
      width: 6px;
      height: 6px;
      animation: animloader1 6s linear infinite;
    }

    @keyframes animloader {
      0% {
        background-position: 0px 80px;
      }
      100% {
        background-position: 0px 0px;
      }
    }
    @keyframes animloader1 {
      0% {
        box-shadow: 4px -10px rgba(255, 215, 0, 0), 6px 0px rgba(255, 215, 0, 0), 8px -15px rgba(255, 215, 0, 0), 12px 0px rgba(255, 215, 0, 0);
      }
      20% {
        box-shadow: 4px -20px rgba(255, 215, 0, 0), 8px -10px rgba(255, 215, 0, 0), 10px -30px rgba(255, 215, 0, 0.5), 15px -5px rgba(255, 215, 0, 0);
      }
      40% {
        box-shadow: 2px -40px rgba(255, 215, 0, 0.5), 8px -30px rgba(255, 215, 0, 0.4), 8px -60px rgba(255, 215, 0, 0.5), 12px -15px rgba(255, 215, 0, 0.5);
      }
      60% {
        box-shadow: 4px -60px rgba(255, 215, 0, 0.5), 6px -50px rgba(255, 215, 0, 0.4), 10px -90px rgba(255, 215, 0, 0.5), 15px -25px rgba(255, 215, 0, 0.5);
      }
      80% {
        box-shadow: 2px -80px rgba(255, 215, 0, 0.5), 4px -70px rgba(255, 215, 0, 0.4), 8px -120px rgba(255, 215, 0, 0), 12px -35px rgba(255, 215, 0, 0.5);
      }
      100% {
        box-shadow: 4px -100px rgba(255, 215, 0, 0), 8px -90px rgba(255, 215, 0, 0), 10px -120px rgba(255, 215, 0, 0), 15px -45px rgba(255, 215, 0, 0);
      }
    }`,
  },

  {
    css: `.loader {
      width: 64px;
      height: 64px;
      display: block;
      border: 1px solid palegoldenrod;
      border-radius: 50px ;
      position: relative;
      box-shadow: 0px 0px gold inset;
      background-color: rgba(255, 215, 0, .5);
      background-image: linear-gradient(gold 100px, transparent 0);
      background-position: 0  20px;
      background-size: 100% auto;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 0%;
      transform: translate(-50% , -95%);
      border: 2px solid rgba(255, 215, 0, .2);
      border-bottom: none;
      background: palegoldenrod;
      width: 15px;
      height: 35px;
    }
    .loader::before {
      content: '';
      box-sizing: border-box;
      left: 50%;
      transform: translateX(-125%);
      bottom: -4px;
      border-radius: 50%;
      position: absolute;
      width: 6px;
      height: 6px;
      z-index: 10;
      animation: bubbles 6s linear infinite;
    }
    @keyframes bubbles {
      0% {
        box-shadow: 4px -10px rgba(255, 215, 0, 0), 6px 0px rgba(255, 215, 0, 0), 8px -15px rgba(255, 215, 0, 0), 12px 0px rgba(255, 215, 0, 0);
      }
      20% {
        box-shadow: 4px -20px rgba(255, 215, 0, 0), 8px -10px rgba(255, 215, 0, 0), 10px -30px rgba(255, 215, 0, 0.5), 15px -5px rgba(255, 215, 0, 0);
      }
      40% {
        box-shadow: 2px -40px rgba(255, 215, 0, 0.5), 8px -30px rgba(255, 215, 0, 0.4), 8px -60px rgba(255, 215, 0, 0.5), 12px -15px rgba(255, 215, 0, 0.5);
      }
      60% {
        box-shadow: 4px -60px rgba(255, 215, 0, 0.5), 6px -50px rgba(255, 215, 0, 0.4), 10px -90px rgba(255, 215, 0, 0.5), 15px -25px rgba(255, 215, 0, 0.5);
      }
      80% {
        box-shadow: 2px -80px rgba(255, 215, 0, 0.5), 4px -70px rgba(255, 215, 0, 0.4), 8px -120px rgba(255, 215, 0, 0), 12px -35px rgba(255, 215, 0, 0.5);
      }
      100% {
        box-shadow: 4px -100px rgba(255, 215, 0, 0), 8px -90px rgba(255, 215, 0, 0), 10px -120px rgba(255, 215, 0, 0), 15px -45px rgba(255, 215, 0, 0);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: inset 0 0 20px -5px rgba(255, 215, 0, 0.2), inset 0 -40px 40px -20px rgba(255, 215, 0, 0.2);
      background: linear-gradient(gold 120px, transparent 0) no-repeat;
      background-position: 0px 120px;
      animation: fillLq 10s linear infinite alternate;
    }
    .loader:before {
      position: absolute;
      content: '';
      width: 40%;
      height: 25%;
      top: 20px;
      left: 10px;
      background: rgba(255,215,0,0.1);
      border-radius: 50%;
      transform: rotate(-45deg);
    }

    @keyframes fillLq {
      0% , 10% {background-position: 0 120px}
      90% , 100% {background-position: 0 0}
    }`,
  },

  {
    css: `.loader {
      width: 20px;
      height: 20px;
      display: block;
      margin: 80px auto 20px;
      border-radius: 50%;
      background: gold;
      border: 5px solid darkgoldenrod;
      position: relative;
      box-sizing: border-box;
    }
    .loader::before {
      content: '';  
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      width: 8px;
      height: 80px;
      border: 2px solid goldenrod;
      border-bottom: none;
      background: darkgoldenrod;
      color: gold;
      border-radius: 50px 50px 0 0;
      box-shadow: 0px 0px  inset;
      box-sizing: border-box;
      animation: animloader 6s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 0px 0px  inset;
      }
      100% {
        box-shadow: 0px -80px  inset;
      }
    }`,
  },

  {
    css: `.loader {
      width: 150px;
      height: 150px;
      background-color: gold;
      border-radius: 50%;
      position: relative;
      box-shadow: 0 0 30px 4px palegoldenrod inset, 0 5px 12px palegoldenrod;
      overflow: hidden;
    }
    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 45%;
      top: -40%;
      background-color: goldenrod;
      animation: wave 5s linear infinite;
    }
    .loader:before {
      border-radius: 30%;
      background: darkgoldenrod;
      animation: wave 5s linear infinite;
    }

    @keyframes wave {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 96px;
      box-sizing: content-box;
      height: 48px;
      background: darkgoldenrod;
      border-color: gold;
      border-style: solid;
      border-width: 2px 2px 50px 2px;
      border-radius: 100%;
      position: relative;
      animation: 3s yinYang linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      background: darkgoldenrod;
      border: 18px solid gold;
      border-radius: 100%;
      width: 12px;
      height: 12px;
      box-sizing: content-box;
    }
    .loader:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      background: gold;
      border: 18px solid darkgoldenrod;
      border-radius: 100%;
      width: 12px;
      height: 12px;
      box-sizing: content-box;
    }

    @keyframes yinYang {
      100%{transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 78px;
      box-sizing: border-box;
      border: 2px solid gold;
      position: relative;
      border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50% , 50%);
      width: 10px;
      height: 10px;
      background: gold;
      border-radius: 50%;
      animation: fadeDown 1s ease-out infinite;
    }

    @keyframes fadeDown {
      0% {
        top: 0%;
        opacity: 1;
      }
      100% {
        top: 60%;
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 78px;
      position: relative;
      box-sizing: border-box;
      border: 2px solid gold;
      margin: auto;
      border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
    }
    .loader::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: gold;
      border-radius: 10px;
      animation: scrollDown 1.5s linear infinite;
    }

    @keyframes scrollDown {
      0% {
        top: 15px;
        height: 4px;
        opacity: 1;
      }
      33% {
        top: 15px;
        height: 40px;
      }
      66% {
        top: 50px;
        height: 10px;
        opacity: 1;
      }
      100% {
        top: 56px;
        height: 4px;
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 86px;
      position: relative;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50% , 50%);
      width: 10px;
      height: 10px;
      background: gold;
      border-radius: 50%;
      animation: bounce 1s ease-in infinite alternate;
    }
    .loader::after {
      content: '';
      left: 0;
      top: 0;
      position: absolute;
      width: 48px;
      height: 86px;
      box-sizing: border-box;
      border: 2px solid gold;
      border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
      animation: kick 1s ease-in infinite alternate;
    }

    @keyframes bounce {
      0% {
        top: 0%;
        opacity: 1;
      }
      100% {
        top: 75%;
        opacity: 0.2;
      }
    }
    @keyframes kick {
      0% , 75% {
        height: 86px
      }
      100% {
        height: 78px
      }
    }`,
  },

  {
    css: `.loader {
      width: 180px;
      height: 140px;
      display: block;
      margin: 0 auto 20px;
      background-image: radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, gold 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 15px at 15px 15px, gold 100%, transparent 0), linear-gradient(gold 50px, transparent 0);
      background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
      background-repeat: no-repeat;
      background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      position: absolute;
      left: 2px;
      top: 65px;
      width: 2px;
      height: 6px;
      color: gold;
      box-sizing: border-box;
      animation: animloader 0.6s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 25px 0 gold, 50px 0 gold, 75px 0 gold, 100px 0 gold, 125px 0 gold, 150px 0 gold, 25px 0 gold, 50px 0 gold, 75px 0 gold, 100px 0 gold, 125px 0 gold, 150px 0 gold;
      }
      50% {
        box-shadow: 25px 20px gold, 50px 60px rgba(255, 215, 0, 0), 75px 30px rgba(255, 215, 0, 0), 100px 70px rgba(255, 215, 0, 0), 125px 40px gold, 150px 60px rgba(255, 215, 0, 0), 25px 20px gold, 50px 30px gold, 75px 10px gold, 100px 30px gold, 125px 30px rgba(255, 215, 0, 0), 150px 30px rgba(255, 215, 0, 0);
      }
      100% {
        box-shadow: 25px 60px rgba(255, 215, 0, 0), 50px 60px rgba(255, 215, 0, 0), 75px 50px rgba(255, 215, 0, 0), 100px 70px rgba(255, 215, 0, 0), 125px 70px rgba(255, 215, 0, 0), 150px 60px rgba(255, 215, 0, 0), 25px 80px rgba(255, 215, 0, 0), 50px 80px rgba(255, 215, 0, 0), 75px 70px rgba(255, 215, 0, 0), 100px 60px rgba(255, 215, 0, 0), 125px 30px rgba(255, 215, 0, 0), 150px 30px rgba(255, 215, 0, 0);
      }
    }`,
  },

  {
    css: `.loader {
      width: 175px;
      height: 80px;
      display: block;
      margin: auto;
      background-image: radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, gold 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), linear-gradient(gold 50px, transparent 0);
      background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
      background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
      background-repeat: no-repeat;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-top-color: darkgoldenrod;
      box-sizing: border-box;
      animation: fadePush 1s linear infinite;
    }
    .loader::before {
      content: '';  
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 15px;
      background: darkgoldenrod;
      box-sizing: border-box;
      animation: fadePush 1s linear infinite;
    }

    @keyframes fadePush {
      0% {
        transform: translate(-50%, -15px);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, 0px);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, 15px);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 175px;
      height: 80px;
      display: block;
      margin: auto;
      background-image: radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, gold 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), linear-gradient(gold 50px, transparent 0);
      background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
      background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
      background-repeat: no-repeat;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-bottom-color: darkgoldenrod;
      box-sizing: border-box;
      animation: fadePull 1s linear infinite;
    }
    .loader::before {
      content: '';  
      left: 50%;
      bottom: 15px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 15px;
      background: darkgoldenrod;
      box-sizing: border-box;
      animation: fadePull 1s linear infinite;
    }

    @keyframes fadePull {
      0% {
        transform: translate(-50%, 15px);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, 0px);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -15px);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 175px;
      height: 80px;
      display: block;
      margin: auto;
      background-image: radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, gold 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), linear-gradient(gold 50px, transparent 0);
      background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
      background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
      background-repeat: no-repeat;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      left: 0;
      right: 0;
      margin: auto;
      bottom: 20px;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 5px solid transparent;
      border-color: darkgoldenrod transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 175px;
      height: 80px;
      display: block;
      margin:auto;
      background-image: radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, gold 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), linear-gradient(gold 50px, transparent 0);
      background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
      background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
      background-repeat: no-repeat;
      position: relative;
      box-sizing: border-box;
    }
    .loader::before {
      content: '';  
      left: 60px;
      bottom: 18px;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: darkgoldenrod;
      background-image: radial-gradient(circle 8px at 18px 18px, gold 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, gold 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, gold 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, gold 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, gold 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, gold 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, gold 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, gold 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, gold 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, gold 100%, transparent 0);
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: rotationBack 3s linear infinite;
    }
    .loader::after {
      content: '';  
      left: 94px;
      bottom: 15px;
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: darkgoldenrod;
      background-image: radial-gradient(circle 5px at 12px 12px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, gold 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, gold 100%, transparent 0);
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: rotationBack 4s linear infinite reverse;
    }

    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 175px;
      height: 80px;
      display: block;
      margin:auto;
      background-image: linear-gradient(palegoldenrod 50px, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, gold 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, gold 100%, transparent 0), linear-gradient(gold 50px, transparent 0);
      background-size: 64px 6px, 50px 50px, 100px 76px, 50px 50px, 120px 40px;
      background-position: 55px 60px, 0px 30px, 37px 0px, 122px 30px, 25px 40px;
      background-repeat: no-repeat;
      position: relative;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(-180deg);
      top: 62px;
      height: 64px;
      width: 60px;
      background-color: goldenrod;
      background-image: linear-gradient(darkgoldenrod 20px, transparent 0), linear-gradient(darkgoldenrod 5px, transparent 0), linear-gradient(darkgoldenrod 10px, transparent 0), linear-gradient(darkgoldenrod 10px, transparent 0);
      background-size: 50px 20px;
      background-position: 5px 36px, 5px 25px, 5px 10px;
      background-repeat: no-repeat;
      border-radius: 2px 2px 4px 4px;
      z-index: 10;
      box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      animation: animloader 4s linear infinite;
    }

    @keyframes animloader {
      0% {
        height: 64px;
      }
      90%, 100% {
        height: 0px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 48px;
      height: 24px;
      color: gold;
      background: currentColor;
      border-radius: 50% 50% 0 0;
      position: relative;
      display: block;
      margin: 60px auto 0;
      box-sizing: border-box;
      animation: animloader 4s linear infinite;
    }
    .loader::after {
      content: '';  
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: currentColor;
      top: -34px;
      box-sizing: border-box;
      animation: animloader1 4s linear infinite;
    }

    @keyframes animloader {
      0% {
        box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px;
      }
      20% {
        box-shadow: 40px -1px 0 -2px , 0 0 0 -2px , 40px -1px 0 -5px , 0 0 0 -5px;
      }
      40% {
        box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,  40px -1px 0 -5px ,-40px -1px 0 -5px;
      }
      60% {
        box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px ,-40px -1px 0 -5px;
      }
      80%, 95% {
        box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px , -23px -29px 0 -5px;
      }
      100% {
        box-shadow: 40px -1px 0 -2px rgba(255, 215, 0, 0), -40px -1px 0 -2px rgba(255, 215, 0, 0), 23px -29px 0 -5px rgba(255, 215, 0, 0), -23px -29px 0 -5px rgba(255, 215, 0, 0);
      }
    }
    @keyframes animloader1 {
      0% {
        box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px;
      }
      20% {
        box-shadow: 40px 2px 0 -2px  , 0 0 0 -2px , 40px 2px 0 -5px , 0 0 0 -5px;
      }
      40% {
        box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 40px 2px 0 -5px , -40px 2px 0 -5px;
      }
      60% {
        box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -40px 2px 0 -5px;
      }
      80%, 95% {
        box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -23px -23px 0 -5px;
      }
      100% {
        box-shadow: 40px 2px 0 -2px rgba(255, 215, 0, 0), -40px 2px 0 -2px rgba(255, 215, 0, 0), 23px -23px 0 -5px rgba(255, 215, 0, 0), -23px -23px 0 -5px rgba(255, 215, 0, 0);
      }
    }`,
  },

  {
    css: `.loader {
      width: 106px;
      height: 56px;
      display: block;
      margin: 30px auto;
      background-image: linear-gradient(gold 50px, transparent 0), linear-gradient(gold 50px, transparent 0), linear-gradient(gold 50px, transparent 0), linear-gradient(gold 50px, transparent 0), radial-gradient(circle 14px, gold 100%, transparent 0);
      background-size: 48px 15px , 15px 35px, 15px 35px, 25px 15px, 28px 28px;
      background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
      background-repeat: no-repeat;
      position: relative;
      transform: rotate(-45deg);
      box-sizing: border-box;
    }
    .loader::before,
    .loader::after {
      content: '';  
      position: absolute;
      width: 56px;
      height: 56px;
      border: 6px solid gold;
      border-radius: 50%;
      left: -45px;
      top: -10px;
      background-repeat: no-repeat;
      background-image: linear-gradient(gold 64px, transparent 0), linear-gradient(gold 66px, transparent 0), radial-gradient(circle 4px, gold 100%, transparent 0);
      background-size: 40px 1px , 1px 40px, 8px 8px;
      background-position: center center;
      box-sizing: border-box;
      animation: rotation 0.3s linear infinite;
    }
    .loader::before {
      left: 25px;
      top: 60px;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 164px;
      height: 164px;
      border-radius: 50%;
      animation: rotate 0.75s linear infinite;
    }
    .loader::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 40px;
      border: 1px solid gold;
      border-width: 12px 2px 7px;
      border-radius: 2px 2px 1px 1px;
      box-sizing: border-box;
      transform: rotate(45deg) translate(24px, -10px);
      background-image: linear-gradient(gold 20px, transparent 0),
        linear-gradient(gold 30px, transparent 0),
        linear-gradient(gold 30px, transparent 0);
      background-size: 10px 12px , 1px 30px, 1px 30px;
      background-repeat: no-repeat;
      background-position: center, 12px 0px , 3px 0px;
    }
    .loader::after {
      content: '';
      position: absolute;
      height: 4px;
      width: 4px;
      left: 20px;
      top: 47px;
      border-radius: 50%;
      color: palegoldenrod;
      box-shadow: -4px 7px 2px, -7px 16px 3px 1px,
                  -11px 24px 4px 1px, -6px 24px 4px 1px,
                  -14px 35px 6px 2px, -5px 36px 8px 2px,
                  -5px 45px 8px 2px, -14px 49px 8px 2px,
                  6px 60px 11px 1px, -11px 66px 11px 1px,
                  11px 75px 13px, -1px 82px 15px;
    }

    @keyframes rotate {
      to{transform:rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      position: relative;
      animation: flix 3s ease-in infinite alternate;
    }
    .loader:before {
      content: '';
      display: block;
      font-size: 0;
      width: 48px;
      height: 48px;
      background-color: darkgoldenrod;
      background-image:
        radial-gradient(circle 12px at 22px 22px, gold 100%, transparent 0),
        radial-gradient(circle 10px at 6px 40px, gold 100%, transparent 0),
        radial-gradient(circle 14px at 31px -6px, gold 100%, transparent 0),
        radial-gradient(circle 5px at 40px 30px, gold 100%, transparent 0);
      border-radius: 50%;
      animation: rotate 1s linear infinite;
    }
    .loader:after {
      content: '';
      position: absolute;
      top: 0%;
      transform: translate(-50% , -100%);
      left: 50%;
      width: 24px;
      height: 12px;
      background: goldenrod;
      border-radius: 50px 50px 0 0;
    }

    @keyframes flix {
      0%  , 60% {transform: rotate(-10deg)}
      100%  , 30% , 80% {transform: rotate(5deg)}
    }
    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }`,
  },

  {
    css: `.loader {
      width: 32px;
      height: 90px;
      display: block;
      margin: 20px auto;
      position: relative;
      border-radius: 50% 50% 0 0;
      border-bottom: 10px solid gold;
      background-color: palegoldenrod;
      background-image: radial-gradient(ellipse at center, goldenrod 34%, gold 35%, gold 54%, palegoldenrod 55%), linear-gradient(gold 10px, transparent 0);
      background-size: 28px 28px;
      background-position: center 20px, center 2px;
      background-repeat: no-repeat;
      box-sizing: border-box;
      animation: animloaderBack 1s linear infinite alternate;
    }
    .loader::before {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 64px;
      height: 44px;
      border-radius: 50%;
      box-shadow: 0px 15px gold inset;
      top: 67px;
    }
    .loader::after {
      content: '';  
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 34px;
      height: 34px;
      top: 112%;
      background: radial-gradient(ellipse at center, goldenrod 8%, gold 24%, rgba(0, 0, 0, 0) 100%);
      border-radius: 50% 50% 0;
      background-repeat: no-repeat;
      background-position: -44px -44px;
      background-size: 100px 100px;
      box-shadow: 4px 4px 12px 0px rgba(255, 215, 0, 0.5);
      box-sizing: border-box;
      animation: animloader 1s linear infinite alternate;
    }

    @keyframes animloaderBack {
      0%, 30%, 70% {
        transform: translateY(0px);
      }
      20%, 40%, 100% {
        transform: translateY(-5px);
      }
    }
    @keyframes animloader {
      0% {
        box-shadow: 4px 4px 12px 2px rgba(255, 215, 0, 0.75);
        width: 34px;
        height: 34px;
        background-position: -44px -44px;
        background-size: 100px 100px;
      }
      100% {
        box-shadow: 2px 2px 8px 0px rgba(255, 215, 0, 0.5);
        width: 30px;
        height: 28px;
        background-position: -36px -36px;
        background-size: 80px 80px;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 130px;
      height: 100px;
      background-repeat: no-repeat;
      background-image: linear-gradient(gold, gold),
      linear-gradient(darkgoldenrod, darkgoldenrod), linear-gradient(darkgoldenrod, darkgoldenrod);
      background-size: 80px 70px, 30px 50px, 30px 30px;
      background-position: 0 0, 80px 20px, 100px 40px;
    }
    .loader:after {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 12px;
      width: 10px;
      height: 10px;
      background: gold;
      border-radius: 50%;
      box-sizing: content-box;
      border: 10px solid goldenrod;
      box-shadow: 78px 0 0 -10px gold, 78px 0 goldenrod;
      animation: wheelSk 0.75s ease-in infinite alternate;
    }
    .loader:before {
      content: "";
      position: absolute;
      right: 100%;
      top: 0px;
      height: 70px;
      width: 70px;
      background-image: linear-gradient(gold 45px, transparent 0),
        linear-gradient(gold 45px, transparent 0),
        linear-gradient(gold 45px, transparent 0);
      background-repeat: no-repeat;
      background-size: 30px 4px;
      background-position: 0px 11px, 8px 35px, 0px 60px;
      animation: lineDropping 0.75s linear infinite;
    }

    @keyframes wheelSk {
      0%, 50%, 100% { transform: translatey(0) }
      30%, 90% { transform: translatey(-3px) }
    }
    @keyframes lineDropping {
      0% {
        background-position: 100px 11px, 115px 35px, 105px 60px;
        opacity: 1;
      }
      50% { background-position: 0px 11px, 20px 35px, 5px 60px }
      60% { background-position: -30px 11px, 0px 35px, -10px 60px }
      75%, 100% { background-position: -30px 11px, -30px 35px, -30px 60px; opacity: 0; }
    }`,
  },

  // Line 10463 - Egg

  {
    css: `.loader {
      position: relative;
      width: 100px;
      height: 130px;
      background: darkgoldenrod;
      border-radius: 4px;
    }
    .loader:before{
      content: '';
      position: absolute;
      width: 54px;
      height: 25px;
      left: 50%;
      top: 0;
      background-image:
      radial-gradient(ellipse at center, #0000 24%,gold 25%,gold 64%,#0000 65%),
      linear-gradient(to bottom, #0000 34%,gold 35%);
      background-size: 12px 12px , 100% auto;
      background-repeat: no-repeat;
      background-position: center top;
      transform: translate(-50% , -65%);
      box-shadow: 0 -3px rgba(0, 0, 0, 0.25) inset;
    }
    .loader:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      width: 66%;
      height: 60%;
      background: linear-gradient(to bottom, gold 30%, #0000 31%);
      background-size: 100% 16px;
      animation: writeDown 2s ease-out infinite;
    }

    @keyframes writeDown {
      0% { height: 0%; opacity: 0;}
      20%{ height: 0%; opacity: 1;}
      80% { height: 65%; opacity: 1;}
      100% { height: 65%; opacity: 0;}
    }`,
  },

  {
    css: `.loader {
      width: 200px;
      height: 140px;
      background: darkgoldenrod;
      box-sizing: border-box;
      position: relative;
      border-radius:8px;
      perspective: 1000px;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: 10px;
      right: 10px;
      top: 10px;
      bottom: 10px;
      border-radius:8px;
      background: goldenrod no-repeat;
      background-size: 60px 10px;
      background-image: linear-gradient(gold 100px, transparent 0),
                        linear-gradient(gold 100px, transparent 0), 
                        linear-gradient(gold 100px, transparent 0), 
                        linear-gradient(gold 100px, transparent 0), 
                        linear-gradient(gold 100px, transparent 0), 
                        linear-gradient(gold 100px, transparent 0);
      background-position: 15px 30px , 15px 60px , 15px 90px, 105px 30px , 105px 60px , 105px 90px;
      box-shadow: 0 0 10px rgba(0,0,0,0.25);
    }
    .loader:after {
      content: '';
      position: absolute;
      width: calc(50% - 10px);
      right: 10px;
      top: 10px;
      bottom: 10px;
      border-radius: 8px;
      background: goldenrod no-repeat;
      background-size: 60px 10px;
      background-image: linear-gradient(gold 100px, transparent 0), linear-gradient(gold 100px, transparent 0), linear-gradient(gold 100px, transparent 0);
      background-position: 50% 30px ,50% 60px , 50%  90px;
      transform: rotateY(0deg );
      transform-origin: left center;
      animation: paging 1s linear infinite;
    }

    @keyframes paging {
      to {
        transform: rotateY( -180deg );
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      height: 200px;
      width: 200px;
      border-bottom: 3px solid gold;
      box-sizing: border-box;
      animation: drawLine 4s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: calc(100% + 14px);
      bottom: -6px;
      width: 16px;
      height: 100px;
      border-radius: 20px 20px 50px 50px;
      background-repeat: no-repeat;
      background-image: linear-gradient(gold 6px, transparent 0),
        linear-gradient(45deg, rgba(0, 0, 0, 0.02) 49%, gold 51%),
        linear-gradient(315deg, rgba(0, 0, 0, 0.02) 49%, gold 51%),
        linear-gradient( to bottom, palegoldenrod 10%, gold 10%, gold 90%, palegoldenrod 90% );
      background-size: 3px 3px, 8px 8px, 8px 8px, 16px 88px;
      background-position: center bottom, left 88px, right 88px, left top;
      transform: rotate(25deg);
      animation: pencilRot 4s linear infinite;
    }

    @keyframes drawLine {
      0%, 100% { width: 0px }
      45%, 55% { width: 200px }
    }

    @keyframes pencilRot {
      0%, 45% {
        bottom: -6px;
        left: calc(100% + 14px);
        transform: rotate(25deg);
      }
      55%, 100% {
        bottom: -12px;
        left: calc(100% + 16px);
        transform: rotate(220deg);
      }
    }`,
  },

  {
    css: `.loader {
      width: 148px;
      height: 148px;
      border-radius: 50%;
      margin: -64px auto 0;
      background-color: goldenrod;
      background-image: radial-gradient(gold 4px, #0000  0),
                        radial-gradient(gold 4px, #0000  0),
                        radial-gradient(gold 4px, #0000  0),
                        radial-gradient(gold 4px, #0000  0);
      background-position: 24px center, 8px center, -8px center, -24px center;
      position: relative;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) inset;
      animation: flash 1s linear infinite;
    }
    .loader::before,
    .loader::after {
      content: '';
      position: absolute;
      border: 1px solid gold;
      border-top-color:#0000;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      width: 16px;
      height: 18px;
      background: gold;
    }
    .loader::before {
      width: 0px;
      height: 64px;
      transform: translate(-50% , 18px);
    }

    @keyframes flash {
      0% {
        background-image:
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(goldenrod 4px, #0000  0);
      }
      25% {
        background-image:
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0);
      }
      50% {
        background-image:
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0);
      }
      75% {
        background-image:
        radial-gradient(goldenrod 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0);
      }
      100% {
        background-image:
        radial-gradient(gold 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0),
        radial-gradient(gold 4px, #0000  0);
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 92px;
      height: 180px;
      border-radius: 8px;
      transform: translateY(-30px);
      background-color: darkgoldenrod;
      background-image:
      radial-gradient(ellipse at center, rgba(255,125,0,1) 0%,rgba(255,125,0,1) 4%,rgba(255,125,0,1) 14%,rgba(255,125,0,1) 26%,rgba(255,125,0,1) 53%,rgba(255,125,0,1) 65%,rgba(255,125,0,0) 66%),
      linear-gradient(gold, gold);
      background-repeat: no-repeat;
      background-size: 10px 10px , 84px 162px;
      background-position: center 2px, 4px 8px;
      animation: lightUp 6s linear infinite alternate;
    }
    .loader:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 190px;
      transform: translateX(-50%);
      width: 32px;
      height: 75px;
      background-image:
      linear-gradient(gold, gold),
      linear-gradient(goldenrod, goldenrod),
      linear-gradient(gold, gold);
      background-repeat: no-repeat;
      background-position: center 4px , center top, center 5px;
      background-size: 11px 11px , 7px 4px ,  2px 100%;
      animation: plugin 6s linear infinite alternate;
    }
    .loader:after {
      content: '';
      width: 30px;
      height: 60px;
      background-image:
      linear-gradient(gold, gold),
      linear-gradient(to right, rgba(255,215,0,0.1) 0%,rgba(255,215,0,0.5) 40%,rgba(255,215,0,0.3) 50%,rgba(255,215,0,0.1) 100%),
      linear-gradient(gold, gold),
      linear-gradient(darkgoldenrod, darkgoldenrod);
      background-size: 12px 4px, 30px 52px , 30px 0px , 30px 56px;
      background-position: center 0 , center 6px , center bottom , center 4px;
      background-repeat: no-repeat;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50% , -50%);
      animation: charging 6s linear infinite alternate;
    }

    @keyframes charging {
      0%  , 25% {
        opacity: 0;
        background-size: 12px 4px, 30px 52px , 30px 0px , 30px 56px;
      }
      26% ,  75% {
        opacity: 1;
        background-size: 12px 4px, 30px 52px , 30px 0px , 30px 56px;
      }
      50% , 100% {
        opacity: 1;
        background-size: 12px 4px, 30px 52px , 30px 56px , 30px 56px
      }
    }
    @keyframes lightUp {
      0%  , 25% {
        background-image:
        radial-gradient(ellipse at center, rgba(255,125,0, .1) 0%,rgba(255,125,0, .1) 4%,rgba(255,125,0, .1) 14%,rgba(255,125,0, 1) 26%,rgba(255,125,0, 1) 53%,rgba(255,125,0, 1) 65%,rgba(255,125,0, 0) 66%),
        linear-gradient(gold, gold);
      }
      26% , 100% {
        background-image:
        radial-gradient(ellipse at center, rgba(255,125,0, 1) 0%,rgba(255,125,0, 1) 4%,rgba(255,125,0, 1) 14%,rgba(255,125,0, 1) 26%,rgba(255,125,0, 1) 53%,rgba(255,125,0, 1) 65%,rgba(255,125,0, 0) 66%),
        linear-gradient(darkgoldenrod, darkgoldenrod);
      }
    }
    @keyframes plugin {
      0%, 25% {
        top: 190px;
        background-position: center 4px , center top, center 5px;
      }
      26%, 100% {
        background-position: center 0 , center top, center 5px;
        top: 180px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 112px;
      height: 218px;
      border-radius: 8px;
      background: #222;
      background-image:
        linear-gradient(white 30px, transparent 0),
        linear-gradient(gold 30px, transparent 0),
        linear-gradient(red 30px, transparent 0),
        linear-gradient(green 30px, transparent 0),
        linear-gradient(blue 30px, transparent 0);
      background-repeat: no-repeat;
      background-position: 5px 5px, 5px 40px, 5px 75px, 5px 110px , 5px 145px;
      background-size: 90px 30px;
      border: 6px solid #333;
      border-width: 18px 6px 20px;
      box-sizing: border-box;
      position: relative;
      animation: clpszp 4s linear infinite;
    }
    .loader:before{
      content: '';
      position: absolute;
      left: -6px;
      top: -18px;
      width: 112px;
      height: 218px;
      border-radius: 8px;
      background: linear-gradient(80deg, rgba(0,0,0,0.05) 45%,rgba(0,0,0,0) 46%);
    }
    .loader:after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      left: 60px;
      top: 8px;
      width: 24px;
      height: 24px;
      z-index: 2;
      backdrop-filter: blur(5px);
      border-radius: 50%;
      background: rgba(0,0,0,0.12);
      border: 2px solid rgba(255,255,255,0.2);
      animation: thumbMove 4s linear infinite ;
    }

    @keyframes thumbMove {
      0% {
        left: 60px;
        top: 8px;
      }
      10% {
        left: 20px;
        top: 8px;
      }
      20% {
        left: 10px;
        top: 40px;
      }
      30% {
        left: 50px;
        top: 40px;
      }
      40% {
        left: 50px;
        top: 80px;
      }
      50% {
        left: 20px;
        top: 80px;
      }
      60% {
        left: 10px;
        top: 110px;
      }
      70% {
        left: 60px;
        top: 110px;
      }
      80% {
        left: 75px;
        top: 135px;
      }
      90% {
        left: 45px;
        top: 155px;
      }
      100% {
        left: 25px;
        top: 8px;
      }
    }
    @keyframes clpszp {
      0% {
        background-position: 5px 5px, 5px 40px, 5px 75px, 5px 110px , 5px 145px;
      }
      20% {
        background-position: -100px 5px, 5px 40px, 5px 75px, 5px 110px , 5px 145px;
      }
      40% {
        background-position: -100px 5px, 100px 40px, 5px 75px, 5px 110px , 5px 145px;
      }
      60% {
        background-position: -100px 5px, 100px 40px, -100px 75px, 5px 110px , 5px 145px;
      }
      80% {
        background-position: -100px 5px, 100px 40px, -100px 75px, 100px 110px , 5px 145px;
      }
      100% {
        background-position: -100px 5px, 100px 40px, -100px 75px, 100px 110px , -100px 145px;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      border-style: solid;
      box-sizing: border-box;
      border-width: 40px 60px 30px 60px;
      border-color: gold goldenrod goldenrod goldenrod;
      animation: envFloating 1s ease-in infinite alternate;
    }
    .loader:after {
      content:"";
      position: absolute;
      right: 62px;
      top: -40px;
      height: 70px;
      width: 50px;
      background-image:
        linear-gradient(gold 45px, transparent 0),
        linear-gradient(gold 45px, transparent 0),
        linear-gradient(gold 45px, transparent 0);
      background-repeat: no-repeat;
      background-size: 30px 4px;
      background-position: 0px 11px , 8px 35px, 0px 60px;
      animation: envDropping 0.75s linear infinite;
    }

    @keyframes envFloating {
      0% { transform: translate(-2px, -5px)}
      100% { transform: translate(0, 5px)}
    }
    @keyframes envDropping {
      0% {background-position: 100px 11px , 115px 35px, 105px 60px; opacity: 1;}
      50% {background-position: 0px 11px , 20px 35px, 5px 60px; }
      60% {background-position: -30px 11px , 0px 35px, -10px 60px; }
      75%, 100% {background-position: -30px 11px , -30px 35px, -30px 60px; opacity: 0;}
    }`,
  },

  {
    html: `<span class="loader">Deleting</span>`,
    content: 'Deleting',
    css: `.loader {
      position: relative;
      background: goldenrod;
      width: 80px;
      height: 30px;
      line-height: 18px;
      text-align: center;
      color: darkgoldenrod;
      font-weight: 700;
      letter-spacing: 0.5px;
      font-size: 14px;
      box-sizing: border-box;
      border: 5px groove gold;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 5px 7px darkgoldenrod;
    }
    .loader:before {
      content: "";
      width: 70px;
      height: 80px;
      background: goldenrod;
      box-shadow: 0 0 10px darkgoldenrod;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      bottom: calc(100% + 6px);
      animation: loadPaper 4s ease-in infinite;
    }
    .loader:after {
      content: "";
      width: 70px;
      height: 80px;
      background: linear-gradient(to right, gold 50%, #000 51%);
      background-size: 9px 80px;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      top: calc(100% + 6px);
      animation: disposePaper 4s ease-in infinite;
    }

    @keyframes loadPaper {
      0%, 10% {
        height: 80px;
        bottom: calc(100% + 40px);
      }
      50% {
        height: 80px;
        bottom: calc(100% + 6px);
      }
      75%, 100% {
        height: 0px;
        bottom: calc(100% + 6px);
      }
    }
    @keyframes disposePaper {
      0%, 50% {
        height: 0px;
        top: calc(100% + 6px);
      }
      75% {
        height: 80px;
        top: calc(100% + 6px);
        opacity: 1;
      }
      100% {
        height: 80px;
        top: calc(100% + 40px);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 120px;
      height: 55px;
      background-repeat: no-repeat;
      background-image:
        radial-gradient(circle 2.5px , darkgoldenrod 100%, transparent 0),
        radial-gradient(circle 2.5px , darkgoldenrod 100%, transparent 0),
        linear-gradient(darkgoldenrod 20px, transparent 0),
        linear-gradient(darkgoldenrod 90px, transparent 0),
        linear-gradient(gold 120px, transparent 0),
        linear-gradient(to right, gold 10%, goldenrod 10%, goldenrod 90%, gold 90%);
      background-size: 5px 5px, 5px 5px, 30px 5px, 90px 10px, 120px 45px , 100px 15px;
      background-position: 48px 20px , 60px 20px,  10px 20px, center bottom , center bottom , center 0;
    }
    .loader:before {
      content: "";
      width: 70px;
      height: 80px;
      background-color: darkgoldenrod;
      background-image: linear-gradient(to bottom, palegoldenrod 50%, gold 51%), linear-gradient(to bottom, darkgoldenrod 50%, goldenrod 51%);
      background-size: 60px 20px,  60px 10px;
      background-repeat: no-repeat, repeat-y;
      background-position: center -5px , center 0;
      box-shadow: 0 0 10px darkgoldenrod;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      bottom: calc(100% + 30px);
      animation: loadPaper 2s ease-in infinite;
    }
    .loader:after {
      content: "";
      width: 70px;
      height: 90px;
      background-image:
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%),
        linear-gradient(to right, gold 50%, #0000 51%);
      background-size: 10px 80px;
      background-position: 0 0px , 9px 5px, 18px 0px, 27px 7px, 36px 10px, 45px 5px, 55px 0px, 64px 8px;
      background-repeat: no-repeat;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      top: calc(100% + 6px);
      animation: disposePaper 2s ease-in infinite;
    }

    @keyframes loadPaper {
      0% {
        opacity: 0;
        height: 80px;
        bottom: calc(100% + 30px);
      }
      2% {
        opacity: 0;
        height: 80px;
        bottom: calc(100% + 15px);
      }
      50% {
        height: 80px;
        bottom: calc(100% - 10px);
      }
      75%, 100% {
        height: 0px;
        bottom: calc(100% - 10px);
      }
    }
    @keyframes disposePaper {
      0%, 60% {
        height: 0px;
        top: calc(100% - 9px);
        background-position: 0 0px , 9px 0, 18px 0, 27px 0, 36px 0, 45px 0, 55px 0, 64px 0;
      }
      80% {
        height: 90px;
        top: calc(100% - 9px);
        opacity: 1;
      }
      100% {
        height: 90px;
        top: calc(100% + 25px);
        background-position: 0 0px , 9px 5px, 18px 0px, 27px 7px, 36px 10px, 45px 5px, 55px 0px, 64px 8px;
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      margin: auto;
      width: 100px;
      height: 30px;
      overflow: hidden;
      position: relative;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      box-shadow: 0px 35px 0 -5px #aaa, 0 -5px 0 0px #ddd, 0 -25px 0 -5px #fff,
                  -25px -30px 0 0px #ddd, -25px 30px 0 0px #ddd, 25px -30px 0 0px #ddd,
                  25px 30px 0 0px #ddd, 20px 10px 0 5px #ddd, 20px -10px 0 5px #ddd,
                  -20px -10px 0 5px #ddd, -20px 10px 0 5px #ddd;
    }
    .loader:before,
    .loader:after {
      content: "";
      border-radius: 100%;
      width: 35px;
      height: 35px;
      display: block;
      position: absolute;
      border: 4px dashed #fff;
      bottom: -4px;
      transform: rotate(0deg);
      box-sizing: border-box;
      animation: tape 4s linear infinite;
    }
    .loader:before {
      right: 0;
      box-shadow: 0 0 0 4px #fff, 0 0 0 34px #000;
    }
    .loader:after {
      left: 0;
      box-shadow: 0 0 0 4px #fff, 0 0 0 65px #000;
    }

    @keyframes tape {
      0% {
        transform: rotate(0deg) scale(0.4);
      }
      100% {
        transform: rotate(-360deg) scale(0.4);
      }
    }`,
  },

  {
    css: `.loader {
      width: 120px;
      height: 80px;
      position: relative;
      transform: rotate(-90deg);
      background: linear-gradient(174deg, #0000 49%,#000 50%, #0000 51%);
    }
    .loader:before,
    .loader:after {
      content: "";
      border-radius: 100%;
      width: 35px;
      height: 35px;
      display: block;
      position: absolute;
      border: 4px dashed #fff;
      bottom: 49px;
      transform: rotate(0deg);
      box-sizing: border-box;
      animation: tape 4s linear infinite;
    }
    .loader:before {
      right: -14px;
      box-shadow: 0 0 0 4px #fff, 0 0 0 34px #000 , 0 0 5px 34px #0005;
    }
    .loader:after {
      left: -13px;
      box-shadow: 0 0 0 4px #fff, 0 0 0 65px #000, 0 0 5px 65px #0005;
    }

    @keyframes tape {
      0% { transform: rotate(0deg) scale(0.4) }
      100% { transform: rotate(-360deg) scale(0.4) }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 120px;
      height: 55px;
      background-repeat: no-repeat;
      background-image:
        radial-gradient(circle 2.5px , goldenrod  100%, transparent 0),
        linear-gradient(goldenrod 90px, transparent 0),
        linear-gradient(gold 120px, transparent 0),
        linear-gradient(to right, gold 10%, #333 10%, #333 90%, gold 90%);
      background-size: 5px 5px, 90px 10px, 120px 45px , 100px 15px;
      background-position: 110px 15px,center bottom , center bottom , center 0;
    }
    .loader:before {
      content: "";
      width: 70px;
      background-color: goldenrod;
      box-shadow: 0 0 10px #0003;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      bottom: calc(100% - 10px);
      animation: printerPaper 4s ease-in infinite;
    }
    .loader:after {
      content: "";
      width: 70px;
      height: 80px;
      background-color: goldenrod;
      background-image: linear-gradient(to bottom, palegoldenrod 50%, darkgoldenrod 51%), linear-gradient(to bottom, gold 50%, goldenrod 51%);
      background-size: 60px 20px,  60px 10px;
      background-repeat: no-repeat, repeat-y;
      background-position: center 55px , center 0;
      position: absolute;
      left: 50%;
      transform: translatex(-50%) rotate(180deg);
      box-shadow: 0 10px darkgoldenrod inset;
      top: calc(100% - 8px);
      animation: PrintedPaper 4s ease-in infinite;
    }

    @keyframes printerPaper {
      0% , 25% { height: 50px}
      75%, 100% { height: 0}
    }
    @keyframes PrintedPaper {
      0%, 30% {
        height: 0px;
        top: calc(100% - 8px);
      }
      80% {
        height: 80px;
        top: calc(100% - 8px);
        opacity: 1;
      }
      100% {
        height: 80px;
        top: calc(100% + 10px);
        opacity: 0;
      }
    }`,
  },

  {
    css: `.loader {
      width: 120px;
      height: 150px;
      background-color: gold;
      background-repeat: no-repeat;
      background-image: linear-gradient(goldenrod 50%, goldenrod 51%),
        linear-gradient(goldenrod, goldenrod), linear-gradient(goldenrod, goldenrod),
        radial-gradient(ellipse at center, gold 25%, goldenrod 26%, goldenrod 50%, #0000 55%),
        radial-gradient(ellipse at center, gold 25%, goldenrod 26%, goldenrod 50%, #0000 55%),
        radial-gradient(ellipse at center, gold 25%, goldenrod 26%, goldenrod 50%, #0000 55%);
      background-position: 0 20px, 45px 0, 8px 6px, 55px 3px, 75px 3px, 95px 3px;
      background-size: 100% 4px, 1px 23px, 30px 8px, 15px 15px, 15px 15px, 15px 15px;
      position: relative;
      border-radius: 6%;
      animation: shake 3s ease-in-out infinite;
      transform-origin: 60px 180px;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 5px;
      top: 100%;
      width: 7px;
      height: 5px;
      background: goldenrod;
      border-radius: 0 0 4px 4px;
      box-shadow: 102px 0 goldenrod;
    }
    .loader:after {
      content: "";
      position: absolute;
      width: 95px;
      height: 95px;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 20px;
      background-image: linear-gradient( to right, #0004 0%, #0004 49%, #0000 50%, #0000 100% ), linear-gradient(135deg, rgba(255,125,0,.5) 50%, goldenrod 51%);
      background-size: 30px 100%, 90px 80px;
      border-radius: 50%;
      background-repeat: repeat, no-repeat;
      background-position: 0 0;
      box-sizing: border-box;
      border: 10px solid goldenrod;
      box-shadow: 0 0 0 4px gold inset, 0 0 6px 6px palegoldenrod inset;
      animation: spin 3s ease-in-out infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg) }
      50% { transform: rotate(360deg) }
      75% { transform: rotate(750deg) }
      100% { transform: rotate(1800deg) }
    }
    @keyframes shake {
      65%, 80%, 88%, 96% { transform: rotate(0.5deg) }
      50%, 75%, 84%, 92% { transform: rotate(-0.5deg) }
      0%, 50%, 100%  { transform: rotate(0) }
    }`,
  },

  {
    css: `.loader {
      height: 150px;
      width: 100px;
      border-radius: 55px 55px 10px 10px;
      position: relative;
      background: black;
      background-image: linear-gradient(0deg,
        deepskyblue 25%,
        gold 25%,
        gold 25%,
        gold 50%,
        #6b3e26 50%,
        #6b3e26 50%,
        #6b3e26 75%,
        #f63a99 75%);
      background-position: 0px 0px;
      background-size: auto 175px;
      background-repeat: repeat-y;
      animation: colorShift 6s linear infinite;
    }
    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50% , 0);
      box-shadow: 0 15px 2px rgba(0, 0, 0, 0.25) inset;
      width: 32px;
      height: 45px;
      background: #E09C5F;
      border-radius: 0 0 12px 12px;
    }

    @keyframes colorShift {
      to {background-position: 0 175px}
    }`,
  },

  {
    css: `.loader {
      width: 160px;
      height: 185px;
      position: relative;
      background: gold;
      border-radius: 100px 100px 0 0;
    }
    .loader:after {
      content: "";
      position: absolute;
      width: 100px;
      height: 125px;
      left: 50%;
      top: 25px;
      transform: translateX(-50%);
      background-image: radial-gradient(circle, darkgoldenrod 48%, transparent 55%),
        radial-gradient(circle, darkgoldenrod 48%, transparent 55%),
        radial-gradient(circle, goldenrod 30%, transparent 45%),
        radial-gradient(circle, darkgoldenrod 48%, transparent 51%),
        linear-gradient(darkgoldenrod 20px, transparent 0),
        linear-gradient(goldenrod 60px, transparent 0),
        radial-gradient(circle, goldenrod 50%, transparent 51%),
        radial-gradient(circle, goldenrod 50%, transparent 51%);
      background-repeat: no-repeat;
      background-size: 16px 16px, 16px 16px, 10px 10px, 42px 42px, 12px 3px, 50px 25px, 70px 70px, 70px 70px;
      background-position: 25px 10px, 55px 10px, 36px 44px, 50% 30px, 50% 85px, 50% 50px, 50% 22px, 50% 45px;
      animation: faceLift 3s linear infinite alternate;
    }
    .loader:before {
      content: "";
      position: absolute;
      width: 140%;
      height: 125px;
      left: -20%;
      top: 0;
      background-image: radial-gradient(circle, gold 48%, transparent 50%), radial-gradient(circle, gold 48%, transparent 50%);
      background-repeat: no-repeat;
      background-size: 65px 65px;
      background-position: 0px 12px, 145px 12px;
      animation: earLift 3s linear infinite alternate;
    }

    @keyframes faceLift {
      0% {
        transform: translateX(-60%);
      }
      100% {
        transform: translateX(-30%);
      }
    }
    @keyframes earLift {
      0% {
        transform: translateX(10px);
      }
      100% {
        transform: translateX(0px);
      }
    }`,
  },

  {
    css: `.loader {
      display: block;
      position: relative;
      width: 118px;
      height: 160px;
      background-color: #FFF;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      transform-origin: 50% 100%;
      animation: 2s eggRot linear infinite alternate;
    }
    .loader:after {
      content:"";
      position: absolute;
      left: 50%;
      bottom: 15%;
      width: 80px;
      height: 86px;
      transform: translateX(-50%);
      background-color: #ffd900;
      border-radius: 50% ;
    }

    @keyframes eggRot {
      0%{transform: rotate(-25deg)}
      100%{transform: rotate(25deg)}
    }`,
  },

  {
    css: `.loader {
      width: 100px;
      height: 100px;
      display: block;
      margin: auto;
      position: relative;
      background: #333;
      border-radius: 50%;
      box-sizing: border-box;
      transform-origin: 170px 50px;
      border: 4px solid #333;
      box-shadow: 3px 4px #0003 inset, 0 0 6px #0002 inset;
      animation: panmov 0.4s ease-in-out infinite alternate;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) skew(-15deg, 15deg) rotate(-15deg);
      width: 55px;
      height: 53px;
      background: #fff;
      background-image: 
      radial-gradient(circle 3px , #fff6 90%, transparent 10%),
      radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
      radial-gradient(circle 12px , #ffae00 100%, transparent 0);
      background-repeat: no-repeat;
      background-position: -4px -6px , -2px -2px , -1px -1px;
      box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
      border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
      animation: ylmov 0.6s ease-in-out infinite alternate;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 48px;
      height: 15px;
      width: 70px;
      background: #333222;
      border-radius: 0 8px 8px 0;
      box-shadow: 3px 0 3px #eee2 inset;
      transform: rotate(5deg) translateX(3px);
    }

    @keyframes panmov {
      0% , 10% { transform: rotate(5deg) }
      90% , 100% { transform: rotate(-5deg) }
    }
    @keyframes ylmov {
      to { 
        border-radius: 50% 36% 50% 50% / 49% 50% 45% 45%;
        background-position: -2px -4px , 2px 2px , 1px 1px;
      }
    }`,
  },

  {
    css: `.loader {
      position: relative;
      width: 120px;
      height: 14px;
      border-radius: 0 0 15px 15px;
      background-color: #3e494d;
      box-shadow: 0 -1px 4px #5d6063 inset;
      animation: panex 0.5s linear alternate infinite;
      transform-origin: 170px 0;
      z-index: 10;
      perspective: 300px;
    }
    .loader::before {
      content: '';
      position: absolute;
      left: calc( 100% - 2px);
      top: 0;
      z-index: -2;
      height: 10px;
      width: 70px;
      border-radius: 0 4px 4px 0;
      background-repeat: no-repeat;
      background-image: linear-gradient(#6c4924, #4b2d21), linear-gradient(#4d5457 24px, transparent 0), linear-gradient(#9f9e9e 24px, transparent 0);
      background-size: 50px 10px , 4px 8px , 24px 4px;
      background-position: right center , 17px center , 0px center;
    }
    .loader::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      z-index: -2;
      transform: translate(-50% , -20px) rotate3d(75, -2, 3, 78deg);
      width: 55px;
      height: 53px;
      background: #fff;
      background-image:
      radial-gradient(circle 3px , #fff6 90%, transparent 10%),
      radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
      radial-gradient(circle 12px , #ffae00 100%, transparent 0);
      background-repeat: no-repeat;
      background-position: -4px -6px , -2px -2px , -1px -1px;
      box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
      border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
      animation: eggRst 1s ease-out infinite;
    }

    @keyframes eggRst {
      0% ,  100%{  transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg); opacity: 0; }
      10% , 90% {  transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg); opacity: 1; }
      25%  {transform:  translate(-50% , -40px) rotate3d(85, 17, 2, 70deg) }
      75% {transform:  translate(-50% , -40px) rotate3d(75, -3, 2, 70deg) }
      50% {transform:  translate(-55% , -50px) rotate3d(75, -8, 3, 50deg) }
    }
    @keyframes panex {
      0%{transform: rotate(-5deg)}
      100%{transform: rotate(10deg)}
    }`,
  },

  // Line 11557 - Sign

  {
    css: `.loader {
      width: 360px;
      height: 100px;
      display: block;
      background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), radial-gradient(circle 50px at 50px 50px, #FFF 99%, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
      background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
      }
      100% {
        background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 360px;
      height: 100px;
      display: block;
      background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 100px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
      background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
      }
      100% {
        background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 360px;
      height: 100px;
      display: block;
      position: relative;
      background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 100px,  125px 20px, 260px 20px, 260px 20px;
      background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      width: 100px;
      height: 100px;
      border-radius: 8px;
      background: #FFF;
      position: absolute;
      top: 0;
      left: 0;
    }

    @keyframes animloader {
      0% {
        background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
      }
      100% {
        background-position: 100% 0, 120px 0, 120px 40px, 120px 80px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 320px;
      height: 150px;
      margin: auto;
      display: block;
      position: relative;
      background: #FFF;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), linear-gradient(#DDD 56px, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
      background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      }
      100% {
        background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 320px;
      height: 150px;
      display: block;
      margin: auto;
      position: relative;
      background: #FFF;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';  
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), radial-gradient(circle 28px at 28px 28px, #DDD 99%, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
      background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      0% {
        background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      }
      100% {
        background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 315px;
      height: 200px;
      background:
        linear-gradient(0.25turn, transparent, #FFF, transparent),
        linear-gradient(#DDD, #DDD),
        radial-gradient(38px circle at 19px 19px, #DDD 50%, transparent 51%),
        linear-gradient(#DDD, #DDD);
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: 315px 200px, 315px 130px, 100px 100px, 225px 30px;
      background-position: -315px 0, 0 0, 15px 140px, 65px 145px;
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      to {
        background-position: 315px 0, 0 0, 15px 140px, 65px 145px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 215px;
      height: 215px;
      display: block;
      margin: auto;
      position: relative;
      background: #FFF;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
      radial-gradient(circle 50px , #DDD 100%, transparent 0),
      linear-gradient(#DDD 16px, transparent 0),
      linear-gradient(#DDD 24px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 175px, 100% 100px, 80% 16px, 80% 16px;
      background-position: -185px 0, center 10px, center 125px, center 155px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      to {
        background-position: 185px 0, center 10px, center 125px, center 155px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 215px;
      height: 215px;
      display: block;
      margin: auto;
      position: relative;
      background: #FFF;
      box-sizing: border-box;
    }
    .loader::after {
      content: '';
      width: calc(100% - 30px);
      height: calc(100% - 15px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
      linear-gradient(#DDD 100px, transparent 0),
      linear-gradient(#DDD 16px, transparent 0),
      linear-gradient(#DDD 50px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 175px, 100% 100px, 100% 16px, 100% 30px;
      background-position: -185px 0, center 0, center 115px, center 142px;
      box-sizing: border-box;
      animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
      to {
        background-position: 185px 0, center 0, center 115px, center 142px;
      }
    }`,
  },

  {
    css: `.loader {
      width: 215px;
      height: 220px;
      background:
        linear-gradient(0.25turn, transparent, #FFF, transparent),
        linear-gradient(#DDD, #DDD),
        linear-gradient(#DDD, #DDD),
        linear-gradient(#DDD, #DDD);
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: 215px 220px, 215px 130px, 100px 15px, 150px 15px;
      background-position: -215px 0, 0 0, 15px 150px, 15px 180px;
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      to {
        background-position: 215px 0, 0 0, 15px 150px, 15px 180px;
      }
    }`,
  },
];