require('./object.polyfill.js')

import MothershipJs from "./MothershipJs";

if (typeof window.MothershipConfig !== "undefined") {
  const options = window.MothershipConfig;
  window.MothershipJs = new MothershipJs(options);
} else {
  console.warn(
    "Mothership: You need to set (at minimum) window.MothershipConfig={ apiKey: xxxxx } "
  );
}
