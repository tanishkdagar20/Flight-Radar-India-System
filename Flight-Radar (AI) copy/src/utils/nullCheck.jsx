import { MdOutlineQuestionMark as Question } from "react-icons/md";

/**
 * If the given value exists, return it;
 * otherwise, return a question mark icon.
 *
 * @param {*} value - The value to check for null or undefined.
 * @param {string} color - Optional color for the fallback icon.
 * @returns {*} Either the value itself or a fallback icon.
 */
const nullCheck = (value, color) => {
  return value || <Question style={{ color: color || "#535bf2" }} />;
};

export default nullCheck;
