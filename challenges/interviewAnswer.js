'use strict';
/*
    The more robust answer below should account for any user input and strings them into a paragraph. The only downside is it'll repeat the sentence everytime the keyword is found
*/

const r = {
  'arts': 'We\'ll have to get creative!',
  'economy': 'Time is money.',
  'transportation': 'It\'s going to be a long road, so we better get moving.'
};

const t1 = 'Something arts asdljk is a arts economy and transportation!'; // We'll have to get creative! We'll have to get creative! Time is money. It's going to be a long road, so we better get moving.
const t2 = 'arts, funding';
const t3 = 'economy#43';
const t4 = 'arts.. transportation,';
// def fn that splits all of the user responses and finds certain keywords

const returnWordList = t => {
  let wordList = [];
  if(t && t.length) {
    wordList = t.replace(/\W/g, ' ').split(' ');
  }
  return wordList;
};

// if the keyword is found, then return the expected response. 
const createSentences = (topic, responses, finder) => {
  if(topic && topic.length) {
    let wordList = finder(topic);
    let resp = [];
    for(let i=0; i < wordList.length; i++) {
      let w = wordList[i].toLowerCase();
      if(w in responses) {
        resp.push(responses[w]);
      }
    }
    return resp;
  }
};

const interviewAnswer = (input, resp, wordListFn, sentenceFn) => {
  let finalAnswer;

  if(input && input.length) {
    finalAnswer = sentenceFn(input, resp, wordListFn).join(' ');
  }

  return finalAnswer;
};

console.log(interviewAnswer(t1, r, returnWordList, createSentences));

// actual answer submitted:

// const interviewAnswer = (topic) => {
//     if(topic) {
//       t = topic.toLowerCase()
//       if(t === 'arts funding'){
//         return 'We\'ll have to get creative!'
//       } else if (t === 'economy'){
//         return 'Time is money.'
//       } else if (t === 'transportation'){
//         return 'It\'s going to be a long road, so we better get moving.'
//       } else {
//         return 'nah'
//       }
//     }
//   }