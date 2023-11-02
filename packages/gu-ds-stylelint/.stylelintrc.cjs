/**
 * @type {import("stylelint").Config}
 */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "keyframes-name-pattern": "^([a-zA-Z]+(-{1,2}|_{1,2})?[a-z0-9]+)*$",
    "selector-class-pattern": "^([a-zA-Z]+(-{1,2}|_{1,2})?[a-z0-9]+)*$",
  },
};
