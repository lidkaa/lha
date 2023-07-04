import { validation } from "../../validation.js";

function showChristmasTree(treeHeight = 5) {
    validation({
        value: treeHeight,
        type: 'Number',
    })

    if (treeHeight <= 0 || treeHeight > 10) throw new Error('Pass values between 1 and 10');

    const leaf = 'x'
    const levels = leaf.repeat(treeHeight);
    const emptySpace = ' '
    const leftSideOfTree = '/'
    const rightSideOfTree = '\\'
    const topOfTree = emptySpace.repeat(treeHeight) + '*';
    const bottomOfTree = emptySpace.repeat(treeHeight) + '|';

    let i = 0;
    let j = treeHeight;
    let result = '';

    console.log(topOfTree);

    for (const _ of levels) {

        i = i + 2;
        j = j - 1;

        const repeatedEmptySpaces = emptySpace.repeat(j)
        const repeatedContent = leaf.repeat(i - 1)
        const leavesLevel = `${repeatedEmptySpaces}${leftSideOfTree}${repeatedContent}${rightSideOfTree}`
        console.log(leavesLevel);
    }

    console.log(bottomOfTree);

    return result
}

console.log(showChristmasTree(5));