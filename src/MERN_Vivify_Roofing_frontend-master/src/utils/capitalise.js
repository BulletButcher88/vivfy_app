export const capitalise = string => {
  try {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  } catch (error) {
    console.log(error)
  }
};

export const capitaliseMultiple = string => {
  try {
    let words = string.toLowerCase().split(" ");
    const newWord = words.map(word => capitalise(word));
    return newWord.join(" ");
  } catch (error) {
    console.log(error)
  }
};

export default { capitalise, capitaliseMultiple };
