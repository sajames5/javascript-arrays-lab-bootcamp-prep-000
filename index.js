var kittens = ['Milo', 'Otis', 'Garfield'] 
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift(name)
}
function appendKitten(name) {
  [...name+3]
  return kittens
}