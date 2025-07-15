import {
  h,
  registerInstance
} from "./chunk-FGEO3OPM.js";

// node_modules/@ekyc_qoobiss/qbs-ect-cmp/dist/esm/loader-dots.entry.js
var loaderDotsCss = "i,i::before,i::after{animation-duration:0.5s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}body{font-family:sans-serif}i{width:300px;height:75px;margin:auto;display:block;background:no-repeat;background-image:radial-gradient(closest-side, #1FEAA6 90%, rgba(0, 0, 0, 0)), radial-gradient(closest-side, #1FEAA6 90%, rgba(0, 0, 0, 0));background-size:75px 75px;background-position:0%, 50%;position:relative;transform:translateZ(0) scale(0.25);animation-name:slide}i::before,i::after{content:'';width:75px;height:75px;background:radial-gradient(closest-side, #1FEAA6 90%, rgba(0, 0, 0, 0));position:absolute;top:50%;margin-top:-37.5px;animation-name:reveal}i::before{left:1%;animation-delay:40ms}i::after{right:1%;animation-direction:reverse}@keyframes slide{from{background-position:0%, 50%}to{background-position:50%, 100%}}@keyframes reveal{from{transform:scale(0.001)}to{transform:scale(1)}}";
var LoaderDots = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("i", {
      key: "dd20660b01ae262582c83d8b81a7f544ff220cd7"
    });
  }
};
LoaderDots.style = loaderDotsCss;
export {
  LoaderDots as loader_dots
};
