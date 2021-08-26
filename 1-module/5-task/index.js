function truncate(str, maxlength) {
  if (str.length >= maxlength) {
  let string = str.substr(0, maxlength - 1) + "…";
  return string;
  } else {
    return str;
  }
}

