export function numberFormat(number) {
  return Intl.NumberFormat().format(number);
}

export function shortAddressFormat(address) {
  return address.split(' ').slice(0, 2).join(' ');
}

export function titleFormat(location, title) {
  return `[${location}] ${title}`;
}

export function timeFormat(time) {
  if (time === '24') {
    return '자정';
  }

  return `${time}:00`;
}

export function phoneNumberFormat(number) {
  return number
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
}

export function lineBreakFormat(text, breakpoint) {
  return text.split(breakpoint).join(`${breakpoint}\n`);
}
