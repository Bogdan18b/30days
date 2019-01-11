  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  console.table(people);
  console.table(comments);

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  let youngAdults = people.some(p => new Date().getFullYear() - p.year > 18);
  console.log(youngAdults ? 'There are adults' : 'There are no adults');

  // Array.prototype.every() // is everyone 19 or older?
  let allAdults = people.every(p => new Date().getFullYear() - p.year > 18);
  console.log(allAdults ? 'Everyone is an adult' : 'Not everyone is an adult');

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  let comment = comments.find(com => com.id === 823423);
  console.log(comment.text);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  let commentId = comments.findIndex(com => com.id === 823423);
  console.log(commentId);
  // delete the comment with the ID of 823423
  newComments = [
    ...comments.slice(0,commentId),
    ...comments.slice(commentId + 1)
  ]; // cool way
  // comments.splice(commentId, 1); traditional way
  console.table(newComments);
