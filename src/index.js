/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  // const speedConfig = {
  //   family: 4,
  //   friends: 10,
  //   normal_life: 20,
  //   profession: 30,
  //   carrier: 40,
  //   top_peformance: 60
  // }
  let weeks;
  if (knowsProgramming == true) {
    weeks = (800) / config[focus];
  } else weeks = 1300 / config[focus];
  return Math.ceil(weeks);
};



// function getTimeForEducation(status, knowledge, speedConfig) {

// }
