
function showChristmasTree(treeHeight) {
    if (!treeHeight || typeof(treeHeight) != 'number') {return}
    if (treeHeight <=0 || treeHeight > 10) {return}
    let i = 0;
    let j = treeHeight;
    let str = 'x'
    let rows = 'x'.repeat(treeHeight);

    for (let element of rows) {
        if (i === 0) {
            console.log((' ').repeat(treeHeight) + '*');
        }
        i = i + 2;
        j = j - 1;
        console.log((' ').repeat(j) + '/' + str.repeat(i - 1) + '\\');  
    }
}

showChristmasTree(4);