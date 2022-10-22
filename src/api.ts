const apiCall = async (name: string): Promise<string[]> => {
  const promise: Promise<string[]> = new Promise((res) => {
    setTimeout(() => res(
      fruits.filter(item => item.toLowerCase().includes(name.toLowerCase()))
    ), 500)
  })

  return promise;
}

export  { apiCall }

const fruits = [
  'Apple',
  'Apricot',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberry',
  'Cherry',
  'Coconut',
  'Cucumber',
  'Durian',
  'Dragonfruit',
  'Fig',
  'Gooseberry',
  'Grape',
  'Guava',
  'Jackfruit',
  'Plum',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Mango',
  'Watermelon',
  'Mulberry',
  'Orange',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Pineapple',
  'Pineberry',
  'Quince',
  'Raspberry',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarind',
  'Yuzu',
]