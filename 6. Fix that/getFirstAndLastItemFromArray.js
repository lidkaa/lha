const array = [1, 2, 3, 4, 5]

const getFirstAndLastItemFromArray = (array) => {
	const firstItem = array.splice(0, 1)
	const lastItem = array.splice(-1, 1)

	return "FirstElement:" + firstItem + "LastItem:" + lastItem
}
