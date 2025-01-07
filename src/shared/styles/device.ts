const size = {
  mobile: 320,
  smallTablet: 600,
  tablet: 768,
  desktop: 1024,
};

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  smallTablet: `(min-width: ${size.smallTablet}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

export const DESKTOP = `@media ${device.desktop}`;
export const TABLET = `@media ${device.tablet}`;
export const SMALL_TABLET = `@media ${device.smallTablet}`;
