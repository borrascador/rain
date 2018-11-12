export const BRIGHT_RED = "#F00";
export const DISCONNECT_RED = "#F36";
export const MEDIUM_RED = "rgba(100, 11, 33, 0.9)";
export const DARK_RED = "rgba(33, 5, 11, 0.9)";

export const PALE_GREEN = "#6F6";
export const BRIGHT_GREEN = "#0F0";
export const CONNECT_GREEN = "#3F6";
export const HOVER_GREEN = "rgba(10, 100, 15, 0.95)";

export const BRIGHT_YELLOW = "#FF0";

export const SOLID_WHITE = "#FFF";

export const FOREST_BLACK = "#010";

export const BRIGHT_OPAQUE = "rgba(256, 256, 256, 0.2)";
export const MEDIUM_OPAQUE = "rgba(0, 0, 0, 0.6)";
export const DARK_OPAQUE = "rgba(0, 0, 0, 0.8)";

export function alphaGreen(alpha) {
  return `rgba(0, 256, 0, ${alpha})`
}

export function alphaYellow(alpha) {
  return `rgba(256, 256, 0, ${alpha})`
}

export function alphaRed(alpha) {
  return `rgba(256, 0, 0, ${alpha})`
}

export function alphaDarkRed(alpha) {
  return `rgba(128, 0, 0, ${alpha})`
}
