export default function hasProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
