/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var count = 0;
var para;
  
 for (let a = 0; a < preferences.length; a++){
     var n = a + 1; 
    var k1 = preferences[n-1]; 
    var k2 = preferences[k1-1]; 
    var k3 = preferences[k2 - 1]; 
    if(n == k3 && n != k1){
        count++; 
    } else{ count += 0;}
 };
   para = count / 3;
   return para;
};  


