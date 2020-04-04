const choice = (fruitsArray) => {
  const randFruit = fruitsArray[Math.floor(Math.random() * fruitsArray.length)]
  console.log(randFruit)
  return randFruit
}

const remove = (fruitsArray, item) => {
  if (item) {
    return fruitsArray.splice(fruitsArray.indexOf(item), 1)
  }
}

export { choice, remove }
