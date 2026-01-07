import ReactGA from "react-ga4";

// Replace with your actual Google Analytics Measurement ID
const TRACKING_ID = "G-XXXXXXXXXX"; // Get this from Google Analytics

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
