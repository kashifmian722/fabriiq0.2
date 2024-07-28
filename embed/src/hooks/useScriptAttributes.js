import { useEffect, useState } from "react";
import { embedderSettings } from "../main";

const DEFAULT_SETTINGS = {
  embedId: null, //required
  baseApiUrl: null, // required

  // Override properties that can be defined.
  prompt: null, // override
  model: null, // override
  temperature: null, //override

  // style parameters
  chatIcon: "plus",
  brandImageUrl: null, // will be forced into 100x50px container
  greeting: null, // empty chat window greeting.
  buttonColor: "#262626", // must be hex color code
  userBgColor: "#2C2F35", // user text bubble color
  assistantBgColor: "#2563eb", // assistant text bubble color
  noSponsor: null, // Shows sponsor in footer of chat
  sponsorText: "Powered by FabriiQ", // default sponsor text
  sponsorLink: "https://fabriiq.com", // default sponsor link
  position: "bottom-right", // position of chat button/window
  assistantName: "FabriiQ Chat Assistant", // default assistant name
  assistantIcon: null, // default assistant icon
  windowHeight: null, // height of chat window in number:css-prefix
  windowWidth: null, // width of chat window in number:css-prefix
  textSize: null, // text size in px (number only)

  // behaviors
  openOnLoad: "off", // or "on"
  supportEmail: null, // string of email for contact
};

export default function useGetScriptAttributes() {
  const [settings, setSettings] = useState({
    loaded: false,
    ...DEFAULT_SETTINGS,
  });

  useEffect(() => {
    function fetchAttribs() {
      if (!document) return false;
      if (
        !embedderSettings.settings.baseApiUrl ||
        !embedderSettings.settings.embedId
      )
        throw new Error(
          "[FabriiQ Embed Module::Abort] - Invalid script tag setup detected. Missing required parameters for boot!"
        );

      const scriptTag = document.currentScript;
      const customSettings = {
        chatIcon: scriptTag.getAttribute('data-chat-icon') || DEFAULT_SETTINGS.chatIcon,
        buttonColor: scriptTag.getAttribute('data-button-color') || DEFAULT_SETTINGS.buttonColor,
        userBgColor: scriptTag.getAttribute('data-user-bg-color') || DEFAULT_SETTINGS.userBgColor,
        assistantBgColor: scriptTag.getAttribute('data-assistant-bg-color') || DEFAULT_SETTINGS.assistantBgColor,
        brandImageUrl: scriptTag.getAttribute('data-brand-image-url') || DEFAULT_SETTINGS.brandImageUrl,
        greeting: scriptTag.getAttribute('data-greeting') || DEFAULT_SETTINGS.greeting,
        noSponsor: scriptTag.hasAttribute('data-no-sponsor'),
        sponsorLink: scriptTag.getAttribute('data-sponsor-link') || DEFAULT_SETTINGS.sponsorLink,
        sponsorText: scriptTag.getAttribute('data-sponsor-text') || DEFAULT_SETTINGS.sponsorText,
        position: scriptTag.getAttribute('data-position') || DEFAULT_SETTINGS.position,
        assistantName: scriptTag.getAttribute('data-assistant-name') || DEFAULT_SETTINGS.assistantName,
        assistantIcon: scriptTag.getAttribute('data-assistant-icon') || DEFAULT_SETTINGS.assistantIcon,
        windowHeight: scriptTag.getAttribute('data-window-height') || DEFAULT_SETTINGS.windowHeight,
        windowWidth: scriptTag.getAttribute('data-window-width') || DEFAULT_SETTINGS.windowWidth,
        textSize: scriptTag.getAttribute('data-text-size') || DEFAULT_SETTINGS.textSize,
      };

      setSettings({
        ...DEFAULT_SETTINGS,
        ...embedderSettings.settings,
        ...customSettings,
        loaded: true,
      });
    }
    fetchAttribs();
  }, [document]);

  return settings;
}
