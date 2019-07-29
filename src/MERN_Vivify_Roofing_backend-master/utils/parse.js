const parseEmail = (string) => {
  const projectType = (string.match(/Project Type:\s*(.+)?\s+Roof Frame/i))[1];
  const roofFrameType = (string.match(/Roof Frame Type:\s*(.+)?\s+Approximate Size/i))[1];
  const sizeOfHome = (string.match(/Size of Home:\s*(.+)?\s+House Levels/i))[1];
  const houseLevels = (string.match(/House Levels:\s*(.+)?\s+Roof Type/i))[1]
  const roofType = (string.match(/Roof Type:\s*(.+)?\s+Current Roof/i))[1]
  const currentRoofMaterial = (string.match(/Current Roof Material:\s*(.+)?\s+Desired/i))[1]
  const desiredRoofMaterial = (string.match(/Desired Roof Material:\s*(.+)?\s+Gutter/i))[1]
  const gutterDownpipeReplacement = (string.match(/Downpipe Replacement:\s*(.+)?\s+Name/i))[1]
  const name = (string.match(/Name:\s*(.+)?\s+Suburb/i))[1]
  const suburb = (string.match(/Suburb:\s*(.+)?\s+Email/i))[1]
  let email = (string.match(/Email:\s*(.+)?(\s*<)?\s*Phone/i))[1]
  const phone = (string.match(/Phone:\s*(.+)?\s+Comments/i))[1]
  const comments = (string.match(/Comments:\s*(.+)?/i))[1]

  email = email.split(' ')[0]

  return {
    projectType,
    roofFrameType,
    sizeOfHome,
    houseLevels,
    roofType,
    currentRoofMaterial,
    desiredRoofMaterial,
    gutterDownpipeReplacement,
    name,
    suburb,
    email,
    phone,
    comments
  }
}

const parsePaintQuote = (string) => {
  const name = (string.match(/Name:\s*(.+)?\s+Location/i))[1]
  const suburb = (string.match(/Location:\s*(.+)?\s+Phone/i))[1]
  const phone = (string.match(/Phone:\s*(.+)?\s+Email/i))[1]
  const email = (string.match(/Email:\s*(.+)?(<)?\s*</i))[1]
  const comments = (string.match(/I Require:\s*(.+)?/i))[1]
  const projectType = "Painting"

  return {
    name,
    suburb,
    phone,
    email,
    comments,
    projectType
  }
}

module.exports = {
  parseEmail,
  parsePaintQuote
}