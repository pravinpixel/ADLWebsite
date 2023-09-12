export { default as CheckBox } from './CheckBox'
export const slugify = (prefix, str) => {
    return prefix + str
      .toLowerCase() // Convert the string to lowercase
      .replace(/[^\w\s-]/g, '') // Remove non-word characters
      .trim() // Trim leading/trailing spaces
      .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with a single hyphen
      .substring(0, 100); // Limit the slug length (adjust as needed)
  }
export const questions = [
    "Are there any delays in reports?",
    "Are there any complaints for inventory?",
    "Are there any delays in registration?",
    "Do you require changes in Pick time?",
    "Are there any delays in response from help desk?",
    "Are there any registration errors?",
    "Are there any repeat sample count?",
    "Is the client delaying the sample?",
    "Was the Client's code blocked in this week?",
    "Is the Client full sample load coming to us?",
    "Are there any new opportunities?",
    "Is there any drop in the sample load?",
    "Any other request from client?"
];
