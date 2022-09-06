/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-trailing-spaces */
"use strict";

/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple families and generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2    4           30
 \ /   /  \           \ 
  3   5    9  15      16
   \ / \    \ / 
    6   7   12  

Sample input/output (pseudodata):
pairs = [(5, 6), (1, 3), (2, 3), (3, 6), (15, 12), (5, 7), (4, 5), (4, 9), (9, 12), (30, 16)]

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Output may be in any order:

findNodesWithZeroAndOneParents(pairs) => [
  [1, 2, 4, 15, 30],   // Individuals with zero parents
  [5, 7, 9, 16]        // Individuals with exactly one parent
]
*/

const pairs = [
  [5, 6], [1, 3], [2, 3], [3, 6], [15, 12],
  [5, 7], [4, 5], [4, 9], [9, 12], [30, 16]
];

const findNodesWithZeroAndOneParents = function(pairs) {
  const zeroParents = [];
  const oneParent = [];
  const relationships = {};
  for (let pair of pairs) {
    if (!relationships[pair[0]]) {
      relationships[pair[0]] = [];
    }
    if (!relationships[pair[1]]) {
      relationships[pair[1]] = [pair[0]];
    } else {
      relationships[pair[1]].push(pair[0]);
    }
  }
  
  for (let key in relationships) {
    if (relationships[key].length === 0) {
      zeroParents.push(key);
    } else if (relationships[key].length === 1) {
      oneParent.push(key);
    }
  }

  return [zeroParents, oneParent];
};

const result = findNodesWithZeroAndOneParents(pairs);

console.log(result);