import { isValueNumberType, isValueNumberIsBiggerThanZero } from "../../validation.js";

function showChristmasTree(treeHeight = 5) {

    isValueNumberType(treeHeight);
    isValueNumberIsBiggerThanZero(treeHeight);

    if (treeHeight <= 0 || treeHeight > 10) throw new Error('Pass values between 1 and 10');

    const leaf = 'x'
    const levels = leaf.repeat(treeHeight);
    const emptySpace = ' '
    const leftSideOfTree = '/'
    const rightSideOfTree = '\\'
    const topOfTree = emptySpace.repeat(treeHeight) + '*';
    const bottomOfTree = emptySpace.repeat(treeHeight) + '|';
    let leavesLevel = '';

    let i = 0;
    let j = treeHeight;

    for (const _ of levels) {

        i = i + 2;
        j = j - 1;

        const repeatedEmptySpaces = emptySpace.repeat(j)
        const repeatedContent = leaf.repeat(i - 1)
        leavesLevel += `${repeatedEmptySpaces}${leftSideOfTree}${repeatedContent}${rightSideOfTree}\n`
    }

    return topOfTree + '\n' + leavesLevel.trimEnd() + '\n' + bottomOfTree;
}

console.log(showChristmasTree(6));