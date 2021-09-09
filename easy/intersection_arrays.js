var intersection = function(nums1, nums2) {
  let result = [];
  nums1.forEach(elm => {
      if(nums2.includes(elm) && !result.includes(elm)){
          result.push(elm)
      }
  })
  return result;
}