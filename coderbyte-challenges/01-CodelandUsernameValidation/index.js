function CodelandUsernameValidation(str) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
  return str.length >= 4 && str.length <= 25 && regex.test(str)
}

// keep this function call here
console.log(CodelandUsernameValidation("aa_"))
console.log(CodelandUsernameValidation("u__hello_world123"))

//127.0.2.2
//127.0.2.3
//fd01:db8:1111::2
