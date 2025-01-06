const defineColorBySeverity = (
  severity: any | undefined,
  rgb = false
): string => {
  const postfix = rgb ? "rgb-color" : "color";
  switch (severity) {
    case "error":
    case "warning":
    case "success":
      return `var(--${severity}-${postfix})`;
    case "info":
    default:
      return `var(--primary-${postfix})`;
  }
};

export default defineColorBySeverity;
