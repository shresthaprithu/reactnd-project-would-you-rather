let users = {
  ade: {
    id: 'ade',
    name: 'Ade',
    avatarURL: '/images/avatar/ade.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  chris: {
    id: 'chris',
    name: 'Chris',
    avatarURL: '/images/avatar/chris.jpg',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  christian: {
    id: 'christian',
    name: 'Christian',
    avatarURL: '/images/avatar/christian.jpg',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  },
  // users with no question
  daniel: {
    id: 'daniel',
    name: 'Daniel',
    avatarURL: '/images/avatar/daniel.jpg',
    answers: {},
    questions: []
  },
  elliot: {
    id: 'elliot',
    name: 'Elliot',
    avatarURL: '/images/avatar/elliot.jpg',
    answers: {},
    questions: []
  },
  elyse: {
    id: 'elyse',
    name: 'Elyse',
    avatarURL: '/images/avatar/elyse.png',
    answers: {},
    questions: []
  },
  helen: {
    id: 'helen',
    name: 'Helen',
    avatarURL: '/images/avatar/helen.jpg',
    answers: {},
    questions: []
  },
  jenny: {
    id: 'jenny',
    name: 'Jenny',
    avatarURL: '/images/avatar/Jenny.jpg',
    answers: {},
    questions: []
  }
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'ade',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['ade'],
      text: 'eat your favorite meal for every meal for the rest of your life'
    },
    optionTwo: {
      votes: [],
      text: 'never be able to eat your favorite meal again'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'christian',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'live in a place where it is always hot'
    },
    optionTwo: {
      votes: ['christian', 'ade'],
      text: 'always cold'
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'ade',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be poor with lots of good friends'
    },
    optionTwo: {
      votes: ['ade'],
      text: 'rich with no friends'
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'chris',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'only be able to jump everywhere you go'
    },
    optionTwo: {
      votes: ['ade'],
      text: 'only be able to walk on your hands'
    }
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'chris',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['chris'],
      text: 'control space'
    },
    optionTwo: {
      votes: ['christian'],
      text: 'time'
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'christian',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['christian'],
      text: 'wear clown shoes every day'
    },
    optionTwo: {
      votes: ['chris'],
      text: 'a clown wig every day'
    }
  }
};

function generateUID() {
  return (
      Math.random()
          .toString(36)
          .substring(2, 15) +
      Math.random()
          .toString(36)
          .substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000);
  });
}

function formatQuestion({optionOneText, optionTwoText, author}) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  };
}


export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authUser = question.author;
    const formattedQuestion = formatQuestion(question);
    
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };
      
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          questions: users[authUser].questions.concat([formattedQuestion.id])
        }
      };
      
      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [qid]: answer
          }
        }
      };
      
      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authUser])
          }
        }
      };
      
      res();
    }, 500);
  });
}