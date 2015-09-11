
function InsertionSort(arr) {
	var i, j, swap;

	function swap(arr, i, j) {
		var swap;

		swap = arr[i];
		arr[i] = arr[j];
		arr[j] = swap;
	}

	function insertionSort() {
		var x, copy;

		console.time('insertionSort');

		copy = this.original.slice(0);

		if (arr == null || copy.length < 2) return copy;

		for (i = 1; i < copy.length; i++) {
			j = i - 1;
			x = copy[i];
			while(i >0 && j >= 0 && x < copy[j]) {
				swap(copy, i, j);
				i--;
				j--;
			}
		}

		console.timeEnd('insertionSort');

		return copy;
	}

	this.original = arr;
	this.sorted = insertionSort.bind(this)();
}
