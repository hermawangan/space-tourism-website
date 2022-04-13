module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          whiteblur: "rgba(255,255,255,0.04)",
          lightpurple: "#D0D6F9",
          lightdark: "#383B4B",
        },
      },
      backgroundImage: {
        "home-mobile": "url('/public/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/public/assets/home/background-home-tablet.jpg')",
        "home-desktop":
          "url('/public/assets/home/background-home-desktop.jpg')",
        "destination-tablet":
          "url('/public/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/public/assets/destination/background-destination-mobile.jpg')",
        "destination-desktop":
          "url('/public/assets/destination/background-destination-desktop.jpg')",
        "crew-tablet": "url('/public/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/public/assets/crew/background-crew-mobile.jpg')",
        "crew-desktop":
          "url('/public/assets/crew/background-crew-desktop.jpg')",
        "technology-tablet":
          "url('/public/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/public/assets/technology/background-technology-mobile.jpg')",
        "technology-desktop":
          "url('/public/assets/technology/background-technology-desktop.jpg')",
        "technology-launch-vehicle-landscape":
          "url('/public/assets/technology/image-launch-vehicle-landscape.jpg')",
        "technology-launch-vehicle-portrait":
          "url('/public/assets/technology/image-launch-vehicle-portrait.jpg')",
        "technology-spacesport-landscape":
          "url('/public/assets/technology/image-spaceport-landscape.jpg')",
        "technology-spacesport-portrait":
          "url('/public/assets/technology/image-spaceport-portrait.jpg')",
        "technology-space-capsule-landscape":
          "url('/public/assets/technology/image-space-capsule-landscape.jpg')",
        "technology-space-capsule-portrait":
          "url('/public/assets/technology/image-space-capsule-portrait.jpg')",
      },
    },
  },
  plugins: [],
};
