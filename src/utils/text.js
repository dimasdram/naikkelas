export function toLowerCase(text) {
  return text.toLowerCase();
}

export function capitalizeFirst(string) {
  if (typeof string !== 'string') {
    throw new Error('capitalize(string) expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}