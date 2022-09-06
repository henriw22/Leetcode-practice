var minMovesToSeat = function(seats, students) {
  const sortedSeats = seats.sort((a,b) => a - b);
  const sortedStudents = students.sort((a,b) => a - b);
  let result = 0;
  for (let i = 0; i < seats.length; i++) {
      result += Math.abs(seats[i] - students[i])
  }
  return result;
};