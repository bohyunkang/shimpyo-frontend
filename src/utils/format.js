export function numberFormat(number) {
  return Intl.NumberFormat().format(number);
}

export function shortAddressFormat(address) {
  return address.split(' ').slice(0, 2).join(' ');
}

export function titleFormat(location, title) {
  return `[${location}] ${title}`;
}
