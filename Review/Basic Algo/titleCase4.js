function titleCase(str) {
    return str.toLowerCase().replace(/\/, W => W.toUpperCase());
}
  
titleCase("I'm a little tea pot");