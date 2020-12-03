import OBELISK from "./OBELISK";
import { isA, addType } from "./profile";

// You can change this to your own IRI
const myWebid = "https://cleopatra.solid.community/profile/card#me";

const webids = [
  myWebid,
  // This is a known scultptor
  "https://vuittonluis.solid.community/profile/card#me"
];

webids.forEach(async webid => {
  // Here, we read if the profile attached to the webid is an obelisk:Sculptor
  // To do so, we use our generated artifact to get an IRI
  if (await isA(webid, OBELISK.Sculptor.value)) {
    document.getElementById(
      "app"
      // Here, the generated artifact provides a label
    ).innerHTML += `[${webid}] is a [${OBELISK.Sculptor.labelInLang()}]`;
  } else {
    document.getElementById(
      "app"
    ).innerHTML += `[${webid}] is not a [${OBELISK.Sculptor.labelInLang()}], but certainly an obelisk enthusiast`;
  }
  document.getElementById("app").innerHTML += "<br/><br/>";
});

async function makeMeASculptor(webid) {
  await addType(webid, OBELISK.Sculptor.value);
}

// if you want to become a sculptor, add this app to your authorized apps,
// and uncomment the following
//makeMeASculptor(myWebid);
