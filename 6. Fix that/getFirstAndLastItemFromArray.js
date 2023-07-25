const arrayOfNumbers = [1, 2, 3, 4, 5, 7];

const getFirstAndLastItemFromArray = arr => {
	const firstItem = arr[0];
	const lastItem = arr[arr.length - 1];

	return `First element: ${firstItem}, Last element: ${lastItem}`;
}

console.log(getFirstAndLastItemFromArray(arrayOfNumbers));

// const array = [1, 2, 3, 4, 5]

// const getFirstAndLastItemFromArray = (array) => {
// 	const firstItem = array.splice(0, 1)
// 	const lastItem = array.splice(-1, 1)

// 	return "FirstElement:" + firstItem + "LastItem:" + lastItem
// }