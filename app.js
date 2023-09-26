function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);
  
  console.log(bouncer([7, "ate", "", false, 9]))

//   bounce falsey values answer

// Chunky monkey answer

function chunkArrayInGroups(arr, size) {
    const newArr = [];
    while(arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
    return newArr;
  }
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
  chunkArrayInGroups(["a", "b", "c", "d"], 2);  