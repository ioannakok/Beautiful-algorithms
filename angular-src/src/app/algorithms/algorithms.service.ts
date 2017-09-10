import { Algorithm } from './algorithm.model';

export class AlgorithmsService {
	
	public algorithms: Algorithm[] = [

		new Algorithm(
		    "Bubble Sort",
		    "Bubble sort starts from the beginning of a list of elements, compares the ones that are adjacent and repeatedly swaps them. After every traversal of the list, the largest unsorted element is placed in the end and becomes sorted.",
		    "O(n2)",
		    "O(n)",
		    "O(n2)",
		    "https://en.wikipedia.org/wiki/Bubble_sort",
		    [

		        {
		            "colour": "purple",
		            "text": "Elements compared"
		        }, {
		            "colour": "green",
		            "text": "Unsorted element"
		        }, {
		            "colour": "yellow",
		            "text": "Sorted element"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "for i to the last index of unsorted elements"
		        }, {
		            "style": "indent-1",
		            "code": "if leftElement > rightElement"
		        }, {
		            "style": "indent-2",
		            "code": "swap(leftElement, rightElement)"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void bubbleSort(int arr[]) {"
		        }, {
		            "style": "indent-1",
		            "code": "int n = arr.length;"
		        }, {
		            "style": "indent-1",
		            "code": "for(int i=0; i < n; i++) {"
		        }, {
		            "style": "indent-2",
		            "code": "for(int j=0; j < n-i-1; j++) {"
		        }, {
		            "style": "indent-3",
		            "code": "if(arr[j] > arr[j+1]) {"
		        }, {
		            "style": "indent-4",
		            "code": "int temp = arr[j];"
		        }, {
		            "style": "indent-4",
		            "code": "arr[j] = arr[j+1];"
		        }, {
		            "style": "indent-4",
		            "code": "arr[j+1] = temp;"
		        }, {
		            "style": "indent-3",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/bubble-sort/",
		    [
		        {
		            "style": "",
		            "code": "def bubbleSort(arr):"
		        }, {
		            "style": "indent-1",
		            "code": "n = len(arr)"
		        }, {
		            "style": "indent-1",
		            "code": "for i in range(n):"
		        }, {
		            "style": "indent-2",
		            "code": "for j in range(0, n-i-1):"
		        }, {
		            "style": "indent-3",
		            "code": "if arr[j] > arr[j+1]:"
		        }, {
		            "style": "indent-4",
		            "code": "arr[j], arr[j+1] = arr[j+1], arr[j]"
		        }
		    ],
		    "http://www.geeksforgeeks.org/bubble-sort/",
		    [
		        {
		            "style": "",
		            "code": "void BubbleSort (int arr[], int n)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "int i, j;"
		        }, {
		            "style": "indent-1",
		            "code": "for (i = 0; i &lt; n-1; i++)"
		        }, {
		            "style": "indent-2",
		            "code": "for (j = 0; j &lt; n-i-1; j++)"
		        }, {
		            "style": "indent-3",
		            "code": "if (arr[j] > arr[j+1])"
		        }, {
		            "style": "indent-3",
		            "code": "{"
		        }, {
		            "style": "indent-4",
		            "code": "arr[j] = arr[j]+arr[j+1];"
		        }, {
		            "style": "indent-4",
		            "code": "arr[j+1] = arr[j]-arr[j + 1];"
		        }, {
		            "style": "indent-4",
		            "code": "arr[j] = arr[j]-arr[j + 1];"
		        }, {
		            "style": "indent-3",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, 
		        {
		            "style": "indent-1",
		            "code": "}"
		        }, 
		        {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.sanfoundry.com/cpluscplus-program-implement-bubble-sort/"
		    ),


		new Algorithm(
		    "Insertion Sort",
		    "Insertion sort starts by marking the first element of the list as sorted and iterates over the rest of the list. If the next element is larger, it keeps iterating. If the next element is smaller, it extracts it from the list and starts comparing it with the previous sorted elements. The extracted element is put back to the list, after the first smaller element is found.",
		    "O(n2)",
		    "O(n)",
		    "O(n2)",
		    "https://en.wikipedia.org/wiki/Insertion_sort",
		    [

		        {
		            "colour": "green",
		            "text": "Unsorted element"
		        }, {
		            "colour": "yellow",
		            "text": "Sorted element"
		        }, {
		            "colour": "purple",
		            "text": "Element extracted from the list"
		        }, {
		            "colour": "blue",
		            "text": "Element compared with the extracted element"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "mark first element as sorted"
		        }, {
		            "style": "",
		            "code": "for each unsorted element"
		        }, {
		            "style": "indent-1",
		            "code": "extract the element from the list"
		        }, {
		            "style": "indent-1",
		            "code": "while extractedElement < previousSortedElement"
		        }, {
		            "style": "indent-2",
		            "code": "move previousSortedElement to the right by 1"
		        }, {
		            "style": "indent-1",
		            "code": "insert extractedElement to the right of the first smaller sorted element"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void insertionSort(int arr[]) {"
		        }, {
		            "style": "indent-1",
		            "code": "int n = arr.length;"
		        }, {
		            "style": "indent-1",
		            "code": "for (int i=1; i < n; ++i) {"
		        }, {
		            "style": "indent-2",
		            "code": "int key = arr[i];"
		        }, {
		            "style": "indent-2",
		            "code": "int j = i-1;"
		        }, {
		            "style": "indent-2",
		            "code": "while (j>=0 && arr[j] > key) {"
		        }, {
		            "style": "indent-3",
		            "code": "arr[j+1] = arr[j];"
		        }, {
		            "style": "indent-3",
		            "code": "j = j-1;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "arr[j+1] = key;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/selection-sort/",
		    [
		        {
		            "style": "",
		            "code": "def insertionSort(arr):"
		        }, {
		            "style": "indent-1",
		            "code": "for i in range(1, len(arr)):"
		        }, {
		            "style": "indent-2",
		            "code": "key = arr[i]"
		        }, {
		            "style": "indent-2",
		            "code": "j = i-1"
		        }, {
		            "style": "indent-2",
		            "code": "while j >=0 and key < arr[j] :"
		        }, {
		            "style": "indent-3",
		            "code": "arr[j+1] = arr[j]"
		        }, {
		            "style": "indent-3",
		            "code": "j -= 1"
		        }, {
		            "style": "indent-2",
		            "code": "arr[j+1] = key"
		        }
		    ],
		    "http://www.geeksforgeeks.org/selection-sort/",
		    [
		        {
		            "style": "",
		            "code": "void insertionSort(int arr[], int n)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "int i, key, j;"
		        }, {
		            "style": "indent-1",
		            "code": "for (i = 1; i < n; i++) {"
		        }, {
		            "style": "indent-2",
		            "code": "key = arr[i];"
		        }, {
		            "style": "indent-2",
		            "code": "j = i-1;"
		        }, {
		            "style": "indent-2",
		            "code": "while (j >= 0 && arr[j] > key) {"
		        }, {
		            "style": "indent-3",
		            "code": "arr[j+1] = arr[j];"
		        }, {
		            "style": "indent-3",
		            "code": "j = j-1;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "arr[j+1] = key;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, 
		        {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "https://www.youtube.com/watch?v=GUDLRan2DWM"
		    ),

		new Algorithm(
		    "Selection Sort",
		    "Selection sort starts by the beginning of the list and marks the first element as minimum. It keeps iterating over the elements of the list and if it finds one element that is less than the minimum, sets this as the minimum. When it reaches the end of list, it swaps the minimum with the fist unsorted element and marks this as sorted. It keeps iterating over the list until all the elements are sorted.",
		    "O(n2)",
		    "O(n2)",
		    "O(n2)",
		    "https://en.wikipedia.org/wiki/Selection_sort",
		    [

		        {
		            "colour": "green",
		            "text": "Unsorted element"
		        }, {
		            "colour": "purple",
		            "text": "Minimum element"
		        }, {
		            "colour": "blue",
		            "text": "Current element"
		        }, {
		            "colour": "yellow",
		            "text": "Sorted lement"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "mark first unsorted element as minimum"
		        }, {
		            "style": "",
		            "code": "for each unsorted element"
		        }, {
		            "style": "indent-1",
		            "code": "if minimum > current element"
		        }, {
		            "style": "indent-2",
		            "code": "set current element as minimum"
		        }, {
		            "style": "indent-1",
		            "code": "swap minimum with the first unsorted element"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void selectionSort(int arr[]) {"
		        }, {
		            "style": "indent-1",
		            "code": "int n = arr.length;"
		        }, {
		            "style": "indent-1",
		            "code": "for (int i = 0; i &lt; n-1; i++) {"
		        }, {
		            "style": "indent-2",
		            "code": "int min_idx = i;"
		        }, {
		            "style": "indent-2",
		            "code": "for (int j = i+1; j < n; j++) {"
		        }, {
		            "style": "indent-3",
		            "code": "if (arr[j] < arr[min_idx]) {"
		        }, {
		            "style": "indent-4",
		            "code": "min_idx = j;"
		        }, {
		            "style": "indent-4",
		            "code": "int temp = arr[min_idx];"
		        }, {
		            "style": "indent-4",
		            "code": "arr[min_idx] = arr[i];"
		        }, {
		            "style": "indent-4",
		            "code": "arr[i] = temp;"
		        }, {
		            "style": "indent-3",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/selection-sort/",
		    [
		        {
		            "style": "",
		            "code": "def selectionSort(arr):"
		        }, {
		            "style": "indent-1",
		            "code": "for i in range(len(arr)):"
		        }, {
		            "style": "indent-2",
		            "code": "min_idx = i"
		        }, {
		            "style": "indent-2",
		            "code": "for j in range(i+1, len(arr)):"
		        }, {
		            "style": "indent-3",
		            "code": "if arr[min_idx] > arr[j]:"
		        }, {
		            "style": "indent-4",
		            "code": "min_idx = j"
		        }, {
		            "style": "indent-4",
		            "code": "arr[i], arr[min_idx] = arr[min_idx], arr[i]"
		        }
		    ],
		    "http://www.geeksforgeeks.org/selection-sort/",
		    [
		        {
		            "style": "",
		            "code": "void selectionSort (int arr[], int n)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "for(int i = 0; i < n-1; i++)"
		        }, {
		            "style": "indent-2",
		            "code": "int iMin = i;"
		        }, {
		            "style": "indent-2",
		            "code": "for (j = i+1; j < n; j++)"
		        }, {
		            "style": "indent-2",
		            "code": "{"
		        }, {
		            "style": "indent-3",
		            "code": "if (arr[j] < arr[min])"
		        }, {
		            "style": "indent-4",
		            "code": "iMin = j;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "int temp = arr[i];"
		        }, {
		            "style": "indent-2",
		            "code": "arr[i] = arr[iMin];"
		        }, {
		            "style": "indent-2",
		            "code": "arr[iMin] = temp;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "https://www.youtube.com/watch?v=GUDLRan2DWM"

		    ),


		new Algorithm(
		    "Quicksort",
		    "Quicksort sets an element of the list as pivot, usually the last one. It starts by the beginning of the list, comparing all the elements with the pivot. It places all the elements that are less than the pivot on the left side of the list, all the elements that are greater than the pivot on the right side of the list and the pivot in the middle of these two sublists. This way, quicksort partitions the list. It keeps sorting recursively the two lists following the same procedure, until the whole list is sorted",
		    "O(n2)",
		    "O(n log n)",
		    "O(n log n)",
		    "https://en.wikipedia.org/wiki/Quicksort",
		    [

		        {
		            "colour": "green",
		            "text": "Unsorted element"
		        }, {
		            "colour": "purple",
		            "text": "Element compared with the pivot"
		        }, {
		            "colour": "yellow",
		            "text": "Pivot"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "set last element of the array as pivot"
		        }, {
		            "style": "",
		            "code": "for every element in the list"
		        }, {
		            "style": "indent-1",
		            "code": "if current element <= pivot"
		        }, {
		            "style": "indent-2",
		            "code": "swap(current element, first element larger than the pivot)"
		        }, {
		            "style": "",
		            "code": "place pivot in the middle of the two partitions"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "int partition(int arr[], int low, int high) {"
		        }, {
		            "style": "indent-1",
		            "code": "int pivot = arr[high];"
		        }, {
		            "style": "indent-1",
		            "code": "int i = (low-1);"
		        }, {
		            "style": "indent-1",
		            "code": "for (int j=low; j < high; j++) {"
		        }, {
		            "style": "indent-2",
		            "code": "if (arr[j] <= pivot) {"
		        }, {
		            "style": "indent-3",
		            "code": "i++;"
		        }, {
		            "style": "indent-3",
		            "code": "int temp = arr[i];"
		        }, {
		            "style": "indent-3",
		            "code": "arr[i] = arr[j];"
		        }, {
		            "style": "indent-3",
		            "code": "arr[j] = temp;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "int temp = arr[i+1];"
		        }, {
		            "style": "indent-1",
		            "code": "arr[i+1] = arr[high];"
		        }, {
		            "style": "indent-1",
		            "code": "arr[high] = temp;"
		        }, {
		            "style": "indent-1",
		            "code": "return i+1;"
		        }, {
		            "style": "",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "void quickSort(int arr[], int low, int high) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (low < high) {"
		        }, {
		            "style": "indent-2",
		            "code": "int pi = partition(arr, low, high);"
		        }, {
		            "style": "indent-2",
		            "code": "quikSort(arr, low, pi-1);"
		        }, {
		            "style": "indent-2",
		            "code": "quickSort(arr, pi+1, high);"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }

		    ],
		    "http://www.geeksforgeeks.org/quick-sort/",
		    [
		        {
		            "style": "",
		            "code": "def partition(arr,low,high):"
		        }, {
		            "style": "indent-1",
		            "code": "pivot = arr[high]"
		        }, {
		            "style": "indent-1",
		            "code": "i = ( low-1 )"
		        }, {
		            "style": "indent-1",
		            "code": "for j in range(low , high):"
		        }, {
		            "style": "indent-2",
		            "code": "if   arr[j] <= pivot:"
		        }, {
		            "style": "indent-3",
		            "code": "i = i+1"
		        }, {
		            "style": "indent-3",
		            "code": "arr[i],arr[j] = arr[j],arr[i]"
		        }, {
		            "style": "indent-1",
		            "code": "arr[i+1],arr[high] = arr[high],arr[i+1]"
		        }, {
		            "style": "indent-1",
		            "code": "return ( i+1 )"
		        }, {
		            "style": "",
		            "code": "def quickSort(arr,low,high):"
		        }, {
		            "style": "indent-1",
		            "code": "if low < high:"
		        }, {
		            "style": "indent-2",
		            "code": "pi = partition(arr,low,high)"
		        }, {
		            "style": "indent-2",
		            "code": "quickSort(arr, low, pi-1)"
		        }, {
		            "style": "indent-2",
		            "code": "quickSort(arr, pi+1, high)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/quick-sort/",
		    [
		        {
		            "style": "",
		            "code": "int Partition (int *A, int start, int end) {"
		        }, {
		            "style": "indent-1",
		            "code": "int pivot = A[end];"
		        }, {
		            "style": "indent-1",
		            "code": "int partitionIndex = start;"
		        }, {
		            "style": "indent-1",
		            "code": "for(int i = start; i < end; i++ {"
		        }, {
		            "style": "indent-2",
		            "code": "if(A[i] <= pivot) {"
		        }, {
		            "style": "indent-3",
		            "code": "swap(A[i], A[partitionIndex]);"
		        }, {
		            "style": "indent-3",
		            "code": "partitionIndex++;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "swap(A[partitionIndex], A[end]);"
		        }, {
		            "style": "indent-1",
		            "code": "return partitionIndex; }"
		        }, {
		            "style": "",
		            "code": "void QuickSort(int *A, int start, int end) {"
		        }, {
		            "style": "indent-1",
		            "code": "if(start < end) {"
		        }, {
		            "style": "indent-2",
		            "code": "int partitionIndex = Partition(A, start, end);"
		        }, {
		            "style": "indent-2",
		            "code": "QuickSort(A, start, partitionIndex-1);"
		        }, {
		            "style": "indent-2",
		            "code": "QuickSort(A, partitionIndex+1, end);"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "https://www.youtube.com/watch?v=COk73cpQbFQ"

		    ),


		new Algorithm(
		    "Stack Push",
		    "An element is added at the top of the stack.",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "if the stack is full"
		        }, {
		            "style": "indent-1",
		            "code": "Stack Overflow"
		        }, {
		            "style": "",
		            "code": "else"
		        }, {
		            "style": "indent-1",
		            "code": "top element = top element + 1"
		        }, {
		            "style": "indent-1",
		            "code": "place x at the top of the stack"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "boolean push(int x) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (top >= MAX) {"
		        }, {
		            "style": "indent-2",
		            "code": "System.out.println(\"Stack Overflow\");"
		        }, {
		            "style": "indent-2",
		            "code": "return false;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "else {"
		        }, {
		            "style": "indent-2",
		            "code": "a[++top] = x;"
		        }, {
		            "style": "indent-2",
		            "code": "return true;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
		    [
		        {
		            "style": "",
		            "code": "def push(stack, item):"
		        }, {
		            "style": "indent-1",
		            "code": "stack.append(item)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
		    [
		        {
		            "style": "",
		            "code": "bool Stack::push(int x) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (top >= MAX) {"
		        }, {
		            "style": "indent-2",
		            "code": "cout << \"Stack Overflow\";"
		        }, {
		            "style": "indent-2",
		            "code": "return false;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "else {"
		        }, {
		            "style": "indent-2",
		            "code": "a[++top] = x;"
		        }, {
		            "style": "indent-2",
		            "code": "return true;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/"

		    ),

		new Algorithm(
		    "Stack Pop",
		    "An element is removed from the top of the stack.",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "if the stack is empty"
		        }, {
		            "style": "indent-1",
		            "code": "Stack Underflow"
		        }, {
		            "style": "",
		            "code": "else"
		        }, {
		            "style": "indent-1",
		            "code": "x = top element"
		        }, {
		            "style": "indent-1",
		            "code": "top element = top element - 1"
		        }, {
		            "style": "indent-1",
		            "code": "return x"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "int pop() {"
		        }, {
		            "style": "indent-1",
		            "code": "if (top < 0) {"
		        }, {
		            "style": "indent-2",
		            "code": "System.out.println(\"Stack Underflow\");"
		        }, {
		            "style": "indent-2",
		            "code": "return 0;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "else {"
		        }, {
		            "style": "indent-2",
		            "code": "int x = a[top--];"
		        }, {
		            "style": "indent-2",
		            "code": "return x;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
		    [
		        {
		            "style": "",
		            "code": "def pop(stack):"
		        }, {
		            "style": "indent-1",
		            "code": "if (isEmpty(stack)):"
		        }, {
		            "style": "indent-2",
		            "code": "return str(-maxsize -1)"
		        }, {
		            "style": "indent-1",
		            "code": "return stack.pop()"
		        }
		    ],
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
		    [
		        {
		            "style": "",
		            "code": "int Stack::pop() {"
		        }, {
		            "style": "indent-1",
		            "code": "if (top <; 0)"
		        }, {
		            "style": "indent-2",
		            "code": "cout << \"Stack Underflow\";"
		        }, {
		            "style": "indent-2",
		            "code": "return 0;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "else {"
		        }, {
		            "style": "indent-2",
		            "code": "int x = a[top--];"
		        }, {
		            "style": "indent-2",
		            "code": "return x;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/"

		    ),

		new Algorithm(
		    "Stack Peek",
		    "It returns the top element of the stack.",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "return the top element"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "int peek() {"
		        }, {
		            "style": "indent-1",
		            "code": "return stackArr[top];"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
		    [
		        {
		            "style": "",
		            "code": "def peek(self):"
		        }, {
		            "style": "indent-1",
		            "code": "return self.items[len(self.items)-1]"
		        }
		    ],
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
		    [
		        {
		            "style": "",
		            "code": "int peek() {"
		        }, {
		            "style": "indent-1",
		            "code": "return stackArr[top];"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/stack-data-structure-introduction-program/"

		    ),

		new Algorithm(
		    "Queue Enqueue",
		    "It adds a new element at the end of the queue",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "if the queue is full"
		        }, {
		            "style": "indent-1",
		            "code": "return"
		        }, {
		            "style": "",
		            "code": "add element at the end of the queue"
		        } 
		    ],
		    [

		        {
		            "style": "",
		            "code": "void enqueue(int item) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (isFull(this)) "
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "this.rear = (this.rear + 1)%this.capacity;"
		        }, {
		            "style": "indent-1",
		            "code": "this.array[this.rear] = item;"
		        }, {
		            "style": "indent-1",
		            "code": ""
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
		    [
		        {
		            "style": "",
		            "code": "def enqueue(self, item):"
		        }, {
		            "style": "indent-1",
		            "code": "self.items.insert(0,item)"
		        }
		    ],
		    "http://interactivepython.org/runestone/static/pythonds/BasicDS/ImplementingaQueueinPython.html",
		    [
		        {
		            "style": "",
		            "code": "void Enqueue(int x) {"
		        }, {
		            "style": "indent-1",
		            "code": "if(IsFull())"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "rear = (rear+1)%MAX_SIZE;"
		        }, {
		            "style": "indent-1",
		            "code": "A[rear] = x;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "https://gist.github.com/mycodeschool/7331785"

		    ),

		new Algorithm(
		    "Queue Dequeue",
		    "It removes and returns the first element of the queue",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "if the queue is empty"
		        }, {
		            "style": "indent-1",
		            "code": "return"
		        }, {
		            "style": "",
		            "code": "remove and return the first element of the queue"
		        } 
		    ],
		    [

		        {
		            "style": "",
		            "code": "int dequeue() {"
		        }, {
		            "style": "indent-1",
		            "code": "if (isEmpty(this))"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "int item = this.array[this.front];"
		        }, {
		            "style": "indent-1",
		            "code": "this.front = (this.front + 1)%this.capacity;"
		        }, {
		            "style": "indent-1",
		            "code": "this.size = this.size - 1;"
		        }, {
		            "style": "indent-1",
		            "code": "return item;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
		    [
		        {
		            "style": "",
		            "code": "def dequeue(self):"
		        }, {
		            "style": "indent-1",
		            "code": "return self.items.pop()"
		        }
		    ],
		    "http://interactivepython.org/runestone/static/pythonds/BasicDS/ImplementingaQueueinPython.html",
		    [
		        {
		            "style": "",
		            "code": "void Dequeue() {"
		        }, {
		            "style": "indent-1",
		            "code": "if(IsEmpty())"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "int item = A[front];"
		        }, {
		            "style": "indent-1",
		            "code": "front = (front+1)%MAX_SIZE;"
		        }, {
		            "style": "indent-1",
		            "code": "size = size - 1;"
		        }, {
		            "style": "indent-1",
		            "code": "return item;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "https://gist.github.com/mycodeschool/7331785"

		    ),

		new Algorithm(
		    "Queue Front",
		    "It returns the first element of the queue",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "if the queue is empty"
		        }, {
		            "style": "indent-1",
		            "code": "return"
		        }, {
		            "style": "",
		            "code": "return the first element of the queue"
		        } 
		    ],
		    [

		        {
		            "style": "",
		            "code": "int front() {"
		        }, {
		            "style": "indent-1",
		            "code": "if (isEmpty(this))"
		        }, {
		            "style": "indent-2",
		            "code": "return Integer.MIN_VALUE;"
		        }, {
		            "style": "indent-1",
		            "code": "return this.array[this.front];"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
		    [
		        {
		            "style": "",
		            "code": "def dequeue(self):"
		        }, {
		            "style": "indent-1",
		            "code": "return self.items[0]"
		        }
		    ],
		    "http://interactivepython.org/runestone/static/pythonds/BasicDS/ImplementingaQueueinPython.html",
		    [
		        {
		            "style": "",
		            "code": "int Front() {"
		        }, {
		            "style": "indent-1",
		            "code": "if(front == -1)"
		        }, {
		            "style": "indent-1",
		            "code": "{"
		        }, {
		            "style": "indent-2",
		            "code": "cout >> \"Error: cannot return front from empty queue\";"
		        }, {
		            "style": "indent-2",
		            "code": "return -1;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "return A[front];"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "https://gist.github.com/mycodeschool/7331785"

		    ),

		new Algorithm(
		    "Queue Rear",
		    "It returns the last element of the queue",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "if the queue is empty"
		        }, {
		            "style": "indent-1",
		            "code": "return"
		        }, {
		            "style": "",
		            "code": "return the last element of the queue"
		        } 
		    ],
		    [

		        {
		            "style": "",
		            "code": "int rear() {"
		        }, {
		            "style": "indent-1",
		            "code": "if (isEmpty(this))"
		        }, {
		            "style": "indent-2",
		            "code": "return Integer.MIN_VALUE;"
		        }, {
		            "style": "indent-1",
		            "code": "return this.array[this.rear];"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
		    [
		        {
		            "style": "",
		            "code": "def dequeue(self):"
		        }, {
		            "style": "indent-1",
		            "code": "return self.items[-1]"
		        }
		    ],
		    "http://interactivepython.org/runestone/static/pythonds/BasicDS/ImplementingaQueueinPython.html",
		    [
		        {
		            "style": "",
		            "code": "int Rear() {"
		        }, {
		            "style": "indent-1",
		            "code": "if(rear == -1)"
		        }, {
		            "style": "indent-1",
		            "code": "{"
		        }, {
		            "style": "indent-2",
		            "code": "cout >> \"Error: cannot return front from empty queue\";"
		        }, {
		            "style": "indent-2",
		            "code": "return -1;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "return A[rear];"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "https://gist.github.com/mycodeschool/7331785"

		    ),

		new Algorithm(
		    "Linked List Insert First",
		    "It inserts an element at the beginning of the linked list. A new node is created, its pointer is set to point to the head of the list and then the head is set to be the newly inserted first element.",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "create new node"
		        }, {
		            "style": "",
		            "code": "new node points to head"
		        }, {
		            "style": "",
		            "code" : "new node becomes head"
		        } 
		    ],
		    [

		        {
		            "style": "",
		            "code": "void insertFirst(int new_data) {"
		        }, {
		            "style": "indent-1",
		            "code": "Node new_node = new Node(new_data);"
		        }, {
		            "style": "indent-1",
		            "code": "new_node.next = head;"
		        }, {
		            "style": "indent-1",
		            "code": "head = new_node;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "http://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
		    [
		        {
		            "style": "",
		            "code": "def insertFirst(self, new_data):"
		        }, {
		            "style": "indent-1",
		            "code": "new_node = Node(new_data)"
		        }, {
		            "style": "indent-1",
		            "code": "new_node.next = self.head"
		        }, {
		            "style": "indent-2",
		            "code": "self.head = new_node"
		        }
		    ],
		    "http://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
		    [
		        {
		            "style": "",
		            "code": "void single_llist::insert_first(int value)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "struct node *p;"
		        }, {
		            "style": "indent-1",
		            "code": "p = create_node(value);"
		        }, {
		            "style": "indent-1",
		            "code": "p->next = start;"
		        }, {
		            "style": "indent-1",
		            "code": "start = p;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.sanfoundry.com/cpp-program-implement-single-linked-list/"

		    ),

		new Algorithm(
		    "Linked List Insert Last",
		    "It inserts an element at the end of the linked list. A new node is created, the pointer of the tail is set to point to the new element of the list and then the tail is set to be the newly inserted last element.",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [

		        
		    ],
		    [

		        {
		            "style": "",
		            "code": "create new node"
		        }, {
		            "style": "",
		            "code": "tail pointer points to new element"
		        }, {
		            "style": "",
		            "code" : "the new element becomes tail"
		        } 
		    ],
		    [

		        {
		            "style": "",
		            "code": "void insertLast(int new_data) {"
		        }, {
		            "style": "indent-1",
		            "code": "Node new_node = new Node(new_data);"
		        }, {
		            "style": "indent-1",
		            "code": "if(head == null) {"
		        }, {
		            "style": "indent-2",
		            "code": "head = new_node;"
		        }, {
		            "style": "indent-2",
		            "code": "tail = head;"
		        }, {
		            "style": "indent-1",
		            "code": "} else {"
		        }, {
		            "style": "indent-2",
		            "code": "tail.next = new_node;"
		        }, {
		            "style": "indent-2",
		            "code": "tail = tail.next;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "GC05 Algorithmics - UCL module",
		    [
		        {
		            "style": "",
		            "code": "def insertLast(self, new_data):"
		        }, {
		            "style": "indent-1",
		            "code": "new_node = Node(new_data)"
		        }, {
		            "style": "indent-1",
		            "code": "if(self.head == null):"
		        }, {
		            "style": "indent-2",
		            "code": "self.head = new_node"
		        }, {
		            "style": "indent-2",
		            "code": "self.tail = self.head"
		        }, {
		            "style": "indent-1",
		            "code": "else:"
		        }, {
		            "style": "indent-2",
		            "code": "self.tail.next = new_node"
		        }, {
		            "style": "indent-2",
		            "code": "self.tail = self.tail.next"
		        }
		    ],
		    "http://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
		    [
		        {
		            "style": "",
		            "code": "void single_llist::insert_begin(int value)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "struct node *p;"
		        }, {
		            "style": "indent-1",
		            "code": "p = create_node(value);"
		        }, {
		            "style": "indent-1",
		            "code": "if(head == NULL) {"
		        }, {
		            "style": "indent-2",
		            "code": "head = p;"
		        }, {
		            "style": "indent-2",
		            "code": "tail = head;"
		        }, {
		            "style": "indent-1",
		            "code": "} else {"
		        }, {
		            "style": "indent-2",
		            "code": "tail->next = p;"
		        }, {
		            "style": "indent-2",
		            "code": "tail = tail->next;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.sanfoundry.com/cpp-program-implement-single-linked-list/"

		    ),

		new Algorithm(
		    "Linked List Insert At Index",
		    "It inserts an element at a given index. A nodepointer is created that starts from the head of the list. While the index of the next element the nodepointer points to is less than the given index, the nodepointer becomes the next element. When the nodepointer is the previous element of the given index, a new element is created. The nodepointer is set to points to the new element and the new element is set to point to the next element of the nodepointer.",
		    "O(1)",
		    "O(n)",
		    "O(n / 2)",
		    "GC05 - Algorithmics module",
		    [
		    	{
		            "colour": "blue",
		            "text": "Position of nodepointer"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "nodepointer points to head"
		        }, {
		            "style": "",
		            "code": "while the index of the nodepointer is less than the given index"
		        }, {
		            "style": "indent-1",
		            "code": "nodepointer = next element of nodepointer"
		        }, {
		            "style": "",
		            "code" : "nodepointer = new element and new element = next element of nodepointer"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void insert(E e, int index) {"
		        }, {
		            "style": "indent-1",
		            "code": "Node nodePointer = head;"
		        }, {
		            "style": "indent-1",
		            "code": "int i = 1;"
		        }, {
		            "style": "indent-1",
		            "code": "while (i < index) {"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = nodePointer.next;"
		        }, {
		            "style": "indent-2",
		            "code": "i++;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer.next = new Node(e, nodePointer.next);"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "GC05 Algorithmics - UCL module",
		    [
		        {
		            "style": "",
		            "code": "def insert(self, e, index):"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer = self.head"
		        }, {
		            "style": "indent-1",
		            "code": "i - 1"
		        }, {
		            "style": "indent-1",
		            "code": "while(i < index):"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = nodePointer.next"
		        }, {
		            "style": "indent-2",
		            "code": "i++"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer.next = Node(e, nodePointer.next)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
		    [
		        {
		            "style": "",
		            "code": "void insert(int data, int index)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "Node* nodePointer = head;"
		        }, {
		            "style": "indent-1",
		            "code": "int i = 1;"
		        }, {
		            "style": "indent-1",
		            "code": "while(i < index) {"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = nodePointer->next; "
		        }, {
		            "style": "indent-2",
		            "code": "i++;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "Node* newNode = new Node();"
		        }, {
		            "style": "indent-1",
		            "code": "newNode->data = data;"
		        }, {
		            "style": "indent-1",
		            "code": "newNode->next = NULL;"
		        }, {
		            "style": "indent-1",
		            "code": "newNode->next = nodePointer-next;"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer->next = newNode;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.sanfoundry.com/cpp-program-implement-single-linked-list/"

		    ),


		new Algorithm(
		    "Linked Delete First",
		    "It deletes the first element of a linked list. The head pointer moves to the next element.",
		    "O(1)",
		    "O(1)",
		    "O(1)",
		    "Thomas H. Cormen et al., \"Introduction to Algorithms\"",
		    [
		    	
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "head.next becomes head"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void deleteFirst() {"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead == null)"
		        }, {
		            "style": "indent-2",
		            "code": "throw Exception(\"Linked list is empty\");"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead.next == null) {"
		        }, {
		            "style": "indent-2",
		            "code": "listHead = null;"
		        }, {
		            "style": "indent-1",
		            "code": "} else {"
		        }, {
		            "style": "indent-2",
		            "code": "listHead = listHead.next;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "GC05 Algorithmics - UCL module",
		    [
		        {
		            "style": "",
		            "code": "def deleteFirst():"
		        }, {
		            "style": "indent-1",
		            "code": "if self.head is None:"
		        }, {
		            "style": "indent-2",
		            "code": "print(\"Linked list is empty\")"
		        }, {
		            "style": "indent-1",
		            "code": "if self.head is not None:"
		        }, {
		            "style": "indent-2",
		            "code": "self.head = None"
		        }, {
		            "style": "indent-1",
		            "code": "else:"
		        }, {
		            "style": "indent-2",
		            "code": "self.head = self.head.next"
		        }
		    ],
		    "Modification from GC05 - Algorithmics",
		    [
		        {
		            "style": "",
		            "code": "void deleteFirst()"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead == NULL)"
		        }, {
		            "style": "indent-2",
		            "code": "throw (\"Linked list is empty\"); "
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead->next == NULL) {"
		        }, {
		            "style": "indent-2",
		            "code": "listHead = NULL;"
		        }, {
		            "style": "indent-1",
		            "code": "} else {"
		        }, {
		            "style": "indent-2",
		            "code": "listHead = listHead->next;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "Modification from GC05 - Algorithmics"

		    ),

		new Algorithm(
		    "Linked List Delete Last",
		    "It deletes the last element of a linked list. A nodepointer is created that starts from the head of the list. While the next element of the nodepointer is not the tail, its next element becomes the nodepointer. When the next element of the nodepointer is the tail, the tail becomes the nodepointer.",
		    "O(1)",
		    "O(n)",
		    "O(n / 2)",
		    "GC05 - Algorithmics module",
		    [
		    	{
		            "colour": "blue",
		            "text": "Position of nodepointer"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "nodepointer points to head"
		        },
		        {
		            "style": "",
		            "code": "while nodepointer.next is not the tail"
		        },
		        {
		            "style": "indent-1",
		            "code": "nodepointer = nodepointer.next"
		        }, {
		            "style": "",
		            "code": "tail = nodepointer"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void deleteLast() {"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead == null) "
		        }, {
		            "style": "indent-2",
		            "code": "throw Exception(\"Linked list is empty\");"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead.next == null) {"
		        }, {
		            "style": "indent-2",
		            "code": "listHead = null;"
		        }, {
		            "style": "indent-2",
		            "code": "listTail = null;"
		        }, {
		            "style": "indent-1",
		            "code": "} else {"
		        }, {
		            "style": "indent-2",
		            "code": "Node nodePointer = listHead;"
		        }, {
		            "style": "indent-2",
		            "code": "while(nodePointer.next != listTail) {"
		        }, {
		            "style": "indent-3",
		            "code": "nodePointer = nodePointer.next;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-2",
		            "code": "listTail = nodePointer;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ],
		    "GC05 Algorithmics - UCL module",
		    [
		        {
		            "style": "",
		            "code": "def deleteLast():"
		        }, {
		            "style": "indent-1",
		            "code": "if self.head is None:"
		        }, {
		            "style": "indent-2",
		            "code": "print(\"Linked list is empty\")"
		        }, {
		            "style": "indent-1",
		            "code": "if self.head.next is None:"
		        }, {
		            "style": "indent-2",
		            "code": "self.head = None"
		        }, {
		            "style": "indent-2",
		            "code": "self.tail = None"
		        }, {
		            "style": "indent-1",
		            "code": "else:"
		        }, {
		            "style": "indent-1",
		            "code": "Node nodePointer = self.head"
		        }, {
		            "style": "indent-2",
		            "code": "while nodePointer.next is not self.tail:"
		        }, {
		            "style": "indent-3",
		            "code": "nodePointer = nodePointer.next"
		        }, {
		            "style": "indent-2",
		            "code": "self.tail = nodePointer"
		        }
		    ],
		    "Modification from GC05 - Algorithmics",
		    [
		        {
		            "style": "",
		            "code": "void deleteLast()"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead == NULL)"
		        }, {
		            "style": "indent-2",
		            "code": "throw (\"Linked list is empty\");"
		        }, {
		            "style": "indent-1",
		            "code": "if(listHead->next == NULL) {"
		        }, {
		            "style": "indent-2",
		            "code": "listHead = NULL;"
		        }, {
		            "style": "indent-2",
		            "code": "listTail = NULL;"
		        }, {
		            "style": "indent-1",
		            "code": "} else {"
		        }, {
		            "style": "indent-2",
		            "code": "struct node *nodePointer;"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = listHead;"
		        }, {
		            "style": "indent-2",
		            "code": "while(nodePointer-> != listTail) {"
		        }, {
		            "style": "indent-3",
		            "code": "nodePointer = nodePointer->next;"
		        }, {
		            "style": "indent-2",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "listTail = nodePointer;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "Modification from GC05 - Algorithmics"

		    ),


		new Algorithm(
		    "Linked List Delete At Index",
		    "It deletes the element at the given index. A nodepointer is created that starts from the head of the list. While the index of the next element of the nodepointer is not the given index, its next element becomes the nodepointer. When the index of the next element of the nodepointer is the given index, the nodepointer points to the following element.",
		    "O(1)",
		    "O(n)",
		    "O(n / 2)",
		    "GC05 - Algorithmics module",
		    [
		    	{
		            "colour": "blue",
		            "text": "Position of nodepointer"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "nodepointer points to head"
		        },
		        {
		            "style": "",
		            "code": "while the index of the nodepointer is less than the given index"
		        },
		        {
		            "style": "indent-1",
		            "code": "nodepointer = nodepointer.next"
		        }, {
		            "style": "",
		            "code": "nodepointer.next = nodepointer.next.next"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void delete(int index) {"
		        }, {
		            "style": "indent-1",
		            "code": "Node nodePointer = head;"
		        }, {
		            "style": "indent-1",
		            "code": "int i = 1;"
		        }, {
		            "style": "indent-1",
		            "code": "while (i < index) {"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = nodePointer.next;"
		        }, {
		            "style": "indent-2",
		            "code": "i++;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer.next = nodePointer.next.next;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }

		    ],
		    "GC05 Algorithmics - UCL module",
		    [
		        {
		            "style": "",
		            "code": "def delete(index):"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer = self.head"
		        }, {
		            "style": "indent-1",
		            "code": "i - 1"
		        }, {
		            "style": "indent-1",
		            "code": "while(i < index):"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = nodePointer.next"
		        }, {
		            "style": "indent-2",
		            "code": "i++"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer.next = nodePointer.next.next"
		        }
		    ],
		    "Modification from GC05 - Algorithmics",
		    [
		        {
		            "style": "",
		            "code": "void delete(int index)"
		        }, {
		            "style": "indent-1",
		            "code": "Node* nodePointer = new Node();"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer = head;"
		        }, {
		            "style": "indent-1",
		            "code": "int i = 1;"
		        }, {
		            "style": "indent-1",
		            "code": "while(i < index) {"
		        }, {
		            "style": "indent-2",
		            "code": "nodePointer = nodePointer->next;"
		        }, {
		            "style": "indent-2",
		            "code": "i++;"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "indent-1",
		            "code": "nodePointer->next = nodePointer->next->next;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "Modification from GC05 - Algorithmics"

		    ),


		new Algorithm(
		    "Inorder Traversal",
		    "Inorder traversal visits the left subtree, the root and the right subtree.",
		    "O(n)",
		    "O(n)",
		    "O(n)",
		    "",
		    [
		    	{
		            "colour": "green",
		            "text": "Unvisited node"
		        },
		        {
		            "colour": "yellow",
		            "text": "Node upon which inorderTraversal() has been called"
		        },
		        {
		            "colour": "purple",
		            "text": "Visited node"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "if node is null"
		        },
		        {
		            "style": "indent-1",
		            "code": "return"
		        },
		        {
		            "style": "",
		            "code": "inorderTraversal(left)"
		        }, {
		            "style": "",
		            "code": "visit node"
		        },
		        {
		            "style": "",
		            "code": "inorderTraversal(right)"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void inorderTraversal (Node node) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (node == null)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "inorderTraversal(node.left);"
		        }, {
		            "style": "indent-2",
		            "code": "System.out.print(node.key + \" \");"
		        }, {
		            "style": "indent-1",
		            "code": "inorderTraversal(node.right);"
		        }, {
		            "style": "",
		            "code": "}"
		        }

		    ],
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
		    [
		        {
		            "style": "",
		            "code": "def inorderTraversal(root):"
		        }, {
		            "style": "indent-1",
		            "code": "if root:"
		        }, {
		            "style": "indent-2",
		            "code": "inorderTraversal(root.left)"
		        }, {
		            "style": "indent-2",
		            "code": "print(root.val)"
		        }, {
		            "style": "indent-2",
		            "code": "inorderTraversal(root.right)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
		    [
		        {
		            "style": "",
		            "code": "void inorderTraversal(struct node* node)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "if (node == NULL)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "inorderTraversal(node->left);"
		        }, {
		            "style": "indent-1",
		            "code": "cout << node->data;"
		        }, {
		            "style": "indent-1",
		            "code": "inorderTraversal(node->right);"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"

		    ),

		new Algorithm(
		    "Preorder Traversal",
		    "Preorder traversal visits the root, the left subtree and the right subtree.",
		    "O(n)",
		    "O(n)",
		    "O(n)",
		    "",
		    [
		    	{
		            "colour": "green",
		            "text": "Unvisited node"
		        },
		        {
		            "colour": "yellow",
		            "text": "Node upon which preorderTraversal() has been called"
		        },
		        {
		            "colour": "purple",
		            "text": "Visited node"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "if node is null"
		        },
		        {
		            "style": "indent-1",
		            "code": "return"
		        },
		        {
		            "style": "",
		            "code": "visit node"
		        }, {
		            "style": "",
		            "code": "preorderTraversal(left)"
		        },
		        {
		            "style": "",
		            "code": "preorderTraversal(right)"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void preorderTraversal(Node node) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (node == null)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "System.out.print(node.key + \" \");"
		        }, {
		            "style": "indent-2",
		            "code": "preorderTraversal(node.left);"
		        }, {
		            "style": "indent-1",
		            "code": "preorderTraversal(node.right);"
		        }, {
		            "style": "",
		            "code": "}"
		        }

		    ],
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
		    [
		        {
		            "style": "",
		            "code": "def preorderTraversal(root):"
		        }, {
		            "style": "indent-1",
		            "code": "if root:"
		        }, {
		            "style": "indent-2",
		            "code": "print(root.val)"
		        }, {
		            "style": "indent-2",
		            "code": "preorderTraversal(root.left)"
		        }, {
		            "style": "indent-2",
		            "code": "preorderTraversal(root.right)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
		    [
		        {
		            "style": "",
		            "code": "void preorderTraversal(struct node* node)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "if (node == NULL)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "cout << node->data;"
		        }, {
		            "style": "indent-1",
		            "code": "preorderTraversal(node->left);"
		        }, {
		            "style": "indent-1",
		            "code": "preorderTraversal(node->right);"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"

		    ),


		new Algorithm(
		    "Postorder Traversal",
		    "Postorder traversal visits the left subtree, the right subtree and the root.",
		    "O(n)",
		    "O(n)",
		    "O(n)",
		    "",
		    [
		    	{
		            "colour": "green",
		            "text": "Unvisited node"
		        },
		        {
		            "colour": "yellow",
		            "text": "Node upon which postorderTraversal() has been called"
		        },
		        {
		            "colour": "purple",
		            "text": "Visited node"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "if node is null"
		        },
		        {
		            "style": "indent-1",
		            "code": "return"
		        },
		        {
		            "style": "",
		            "code": "postorderTraversal(left)"
		        }, {
		            "style": "",
		            "code": "postorderTraversal(right)"
		        },
		        {
		            "style": "",
		            "code": "visit node"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void postorderTraversal(Node node) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (node == null)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "postorderTraversal(node.left);"
		        }, {
		            "style": "indent-2",
		            "code": "postorderTraversal(node.right);"
		        }, {
		            "style": "indent-1",
		            "code": "System.out.print(node.key + \" \");"
		        }, {
		            "style": "",
		            "code": "}"
		        }

		    ],
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
		    [
		        {
		            "style": "",
		            "code": "def postorderTraversal(root):"
		        }, {
		            "style": "indent-1",
		            "code": "if root:"
		        }, {
		            "style": "indent-2",
		            "code": "postorderTraversal(root.left)"
		        }, {
		            "style": "indent-2",
		            "code": "postorderTraversal(root.right)"
		        }, {
		            "style": "indent-2",
		            "code": "print(root.val)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
		    [
		        {
		            "style": "",
		            "code": "void postorderTraversal(struct node* node)"
		        }, {
		            "style": "",
		            "code": "{"
		        }, {
		            "style": "indent-1",
		            "code": "if (node == NULL)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "postorderTraversal(node->left);"
		        }, {
		            "style": "indent-1",
		            "code": "postorderTraversal(node->right);"
		        }, {
		            "style": "indent-1",
		            "code": "cout << node->data;"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"

		    ),


		new Algorithm(
		    "Level order Traversal",
		    "Level order traversal starts from the root and visits all the nodes that have the same height before it moves to the next level. The function givenLevel is called with parameters the root and a level, where level is every number from 1 to the height of the tree. If the node is null, it returns, if the level is 1, it visits the node, if the level is more than 1 it calls itself recursively on the right and left node with the level decreased by 1.",
		    "O(n)",
		    "O(n)",
		    "O(n)",
		    "",
		    [
		    	{
		            "colour": "green",
		            "text": "Unvisited node"
		        },
		        {
		            "colour": "purple",
		            "text": "Visited node"
		        }
		         
		    ],
		    [

		        {
		            "style": "",
		            "code": "for i to the height of the tree"
		        },
		        {
		            "style": "indent-1",
		            "code": "givenLevel(root, i)"
		        },
		        {
		            "style": "",
		            "code": "givenLevel(node, level)"
		        }, {
		            "style": "indent-1",
		            "code": "if node is null"
		        },
		        {
		            "style": "indent-2",
		            "code": "return"
		        }, {
		            "style": "indent-1",
		            "code": "if level = 1"
		        }, {
		            "style": "indent-2",
		            "code": "visit node"
		        }, {
		            "style": "indent-1",
		            "code": "if level > 1"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(left, level - 1)"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(right, level - 1)"
		        }
		    ],
		    [

		        {
		            "style": "",
		            "code": "void levelOrderTraversal() {"
		        }, {
		            "style": "indent-1",
		            "code": "int h = height(root);"
		        }, {
		            "style": "indent-1",
		            "code": "int i;"
		        }, {
		            "style": "indent-1",
		            "code": "for (i=1; i <=h; i++)"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root, i);;"
		        }, {
		            "style": "",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "void givenLevel (Node root, int level) {"
		        }, {
		            "style": "indent-1",
		            "code": "if (root == null)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "if (level == 1)"
		        }, {
		            "style": "indent-2",
		            "code": "System.out.print(root.data + \" \");"
		        }, {
		            "style": "indent-1",
		            "code": "else if (level > 1) {"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root.left, level-1);"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root.right, level-1);"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }

		    ],
		    "http://www.geeksforgeeks.org/level-order-tree-traversal/",
		    [
		        {
		            "style": "",
		            "code": "def levelOrderTraversal(root):"
		        }, {
		            "style": "indent-1",
		            "code": "h = height(root)"
		        }, {
		            "style": "indent-1",
		            "code": "for i in range(1, h+1):"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root, i)"
		        }, {
		            "style": "",
		            "code": "def givenLevel(root, level):"
		        }, {
		            "style": "indent-1",
		            "code": "if root is None:"
		        }, {
		            "style": "indent-2",
		            "code": "return"
		        }, {
		            "style": "indent-1",
		            "code": "if level == 1:"
		        }, {
		            "style": "indent-2",
		            "code": "print \"%d\" %(root.data)"
		        }, {
		            "style": "indent-1",
		            "code": "elif level > 1 :"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root.left, level-1)"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root.right, level-1)"
		        }
		    ],
		    "http://www.geeksforgeeks.org/level-order-tree-traversal/",
		    [
		        {
		            "style": "",
		            "code": "void levelOrderTraversal(struct node* root) {"
		        }, {
		            "style": "indent-1",
		            "code": "int h = height(root);"
		        }, {
		            "style": "indent-1",
		            "code": "int i;"
		        }, {
		            "style": "indent-1",
		            "code": "for (i=1; i<=h; i++)"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root, i);"
		        }, {
		            "style": "",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "void givenLevel (Node root, int level)"
		        }, {
		            "style": "indent-1",
		            "code": "if(root == NULL)"
		        }, {
		            "style": "indent-2",
		            "code": "return;"
		        }, {
		            "style": "indent-1",
		            "code": "if (level == 1) {"
		        }, {
		            "style": "indent-2",
		            "code": "cout<<root->data;"
		        }, {
		            "style": "indent-1",
		            "code": "else if (level > 1) {"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root->left, level-1);"
		        }, {
		            "style": "indent-2",
		            "code": "givenLevel(root->right, level-1);"
		        }, {
		            "style": "indent-1",
		            "code": "}"
		        }, {
		            "style": "",
		            "code": "}"
		        }
		    ], 
		    "http://www.geeksforgeeks.org/level-order-tree-traversal/"

		    )

		
	];

	
	getAlgorithm(index: number) {
		return this.algorithms[index];
	}


}