function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((a, b) => a === arr2[b])
}

function getUsersNamesInAgeRange(users, gender) {
  if ((gender == "мужской" || gender == "женский") && users.length != 0) {  
    filred = users.filter(x => x.gender === gender)
    return filred.reduce((a, b) => a + Number(b.age), 0) / filred.length }
  else {return 0}}
