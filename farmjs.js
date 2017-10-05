function parser(code) {
  // if poopout in code AND @ after poopout: print whatever is after @
  if (code.includes("poopout@")) {
    let to_print = code.slice(code.indexOf("@") + 1)
    console.log(to_print)
  }
}

parser("popout@WOOF")
