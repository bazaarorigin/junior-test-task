import getAd from "./module/ad-api";
import mainClient from "./init/mainClient";
import getAds from "./module/ads-api";

export default {
  getAd: getAd(mainClient),
  getAds: getAds(mainClient)
};
