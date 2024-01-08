function scuberGreetingForFeet(depth){
  if (depth <= 400) {
    return `This one is on me!`;
  } else {
    if (depth <= 2000) {
      return `That will be twenty bucks.`;
    } else {
      if (depth <= 2500) {
        return `I will gladly take your thirty bucks.`;
      } else {
        return `No can do.`
      }
    }
  }
}
function ternaryCheckCity(city){
  if (city === `NYC`) {
    return `Ok, sounds good.`
  } else {
    return `No go.`
  }
}

function switchOnCharmFromTip(tip){
  let reply;
  switch (tip) {
    case "generous":
      reply = `Thank you so much.`
      break;
    case "not as generous":
      reply = `Thank you.`;
      break;
    default:
      reply = `Bye.`;
  }
  return reply
}