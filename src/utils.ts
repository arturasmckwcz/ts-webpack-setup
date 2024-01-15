/**
 * @notation Creates a colored box element and appends it to a specified container.
 *
 * @param {number} clr - The proprietary color code for the box.
 * @param {Element} [container] - The container element to which the box will be appended if provided.
 * @returns {HTMLDivElement} - The created box element.
 */
export const createBox = (clr: number, container?: Element): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("box");
  div.classList.add(`fill_primary__${clr}`);
  const clrFront = clr <= 400 ? 900 : 200;
  div.classList.add(`color_primary__${clrFront}`);
  container?.appendChild(div);
  return div;
};

/**
 * @notation Convert an RGB color value to a hexadecimal string.
 *
 * @param {string} rgb - The RGB color value (e.g., "rgb(255, 0, 0)").
 * @returns {string} The equivalent hexadecimal color value (e.g., "#FF0000").
 */
export const rgbToHex = (rgb: string) => {
  const rgbArray = rgb.match(/\d+/g);
  if (
    !rgbArray ||
    rgbArray.length !== 3 ||
    rgbArray.some((clr) => isNaN(+clr) || +clr < 0 || +clr > 255)
  ) {
    console.error("Invalid RGB format");
    return "";
  }

  const hex = rgbArray
    .map((component) => parseInt(component).toString(16).padStart(2, "0"))
    .join("");

  return `#${hex.toUpperCase()}`;
};

/**
 * @notation Get the computed background color of an HTML element.
 *
 * @param {Element} element - The HTML element for which to get the background color.
 * @param {boolean} [hex=true] - A flag indicating whether to return the color in hexadecimal format.
 * @returns {string} The computed background color. If hex is true, the color is in hexadecimal format (e.g., "#FF0000").
 */
export const getBackgroundColor = (element: Element, hex = true): string => {
  const rgbColor = window.getComputedStyle(element).backgroundColor;
  return hex ? rgbToHex(rgbColor) : rgbColor;
};
