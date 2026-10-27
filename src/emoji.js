import reactEasyEmoji from "react-easy-emoji";

export default function emoji(element) {
  return reactEasyEmoji(element, {
    baseUrl: `${process.env.PUBLIC_URL || ""}/vendor/twemoji/14.0.2/`,
    protocol: ""
  });
}
