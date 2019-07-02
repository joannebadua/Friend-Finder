// ===============================================================================
// DATA
// Below data will hold all of the mentor/mentees.
// Initially we just set it equal to a "dummy" user.
// ===============================================================================

var friendsArray = [
    {
      userName: "esquire",
      phoneNumber: "esquire@example.com",
      userEmail: "law1234",
      practiceArea: "000-000-0000",
      cityState: "Honolulu, HI",
      // answers: [1,3,4,2,2,5,2,3,4,1]

    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  