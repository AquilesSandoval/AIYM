# AIYM - Web Component

This is a clean, isolated web component from the All In Your Mind (AIYM) application.

## Structure

```
.
├── index.html          # Main component file (AIYM Dashboard)
├── assets/             # All resources (CSS, JS, images, fonts)
│   ├── *.css          # Stylesheets
│   ├── *.js.descarga  # JavaScript files
│   ├── *.png          # Images and icons
│   ├── *.svg          # Vector graphics
│   └── *.jpg/jpeg     # Photos
└── README.md          # This file
```

## Features

The component includes:
- Main dashboard interface (AIYM Panel)
- Responsive design with Bootstrap
- Interactive maps with Leaflet
- Multiple language support (Spanish/English)
- Training and exercise management interface
- User activity tracking

## Assets

All resources are centralized in the `assets/` folder:
- **CSS**: Bootstrap, Atlantis theme, Leaflet, custom styles
- **JavaScript**: jQuery, Leaflet, ESRI Leaflet, UI libraries
- **Images**: Logos, icons, user avatars, menu graphics
- **Fonts**: Custom web fonts

## Usage

Simply open `index.html` in a web browser. All resources are referenced locally and the component is fully self-contained.

## Notes

- This is a static snapshot of the AIYM web application
- External API calls reference `app.allinyourmind.es` domain
- All local resources work offline
- The component is optimized and deduplicated

## Original Source

Extracted from: https://app.allinyourmind.es/web/index.php?r=site/index
