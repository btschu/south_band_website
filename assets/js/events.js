// these three functions are used to modify the date info from dateTime to display correctly on the date-container
const monthValue = function () {
    const getMonth = new Date(this.dateTime);
    const fullMonth = getMonth.toLocaleString("default", { month: "long" });
    return fullMonth;
  };
  
  const dayValue = function () {
    const getDay = new Date(this.dateTime);
    return getDay.getDate();
  };
  
  const weekdayValue = function () {
    const dayOfWeek = new Date(this.dateTime).getDay();
    return isNaN(dayOfWeek) ? null
      : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",][dayOfWeek];
  };
  
  // Event details being passed into the DOM
  const eventData = [
    {
      // todo ***change this information for all new events
      dateTime: "11/17/2022",
      eventName: "All-City Jazz Concert",
      time: "7:00PM",
      location: "South High Auditorium",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "11/22/2022",
      eventName: "SE District Clinic Concert",
      time: "4:00PM",
      location: "East High Auditorium",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "12/08/2022",
      eventName: "South Triad Winter Concert",
      time: "7:00PM",
      location: "Storey Gym",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "1/15/2023",
      eventName: "All-State Band",
      time: "January 15 - 18",
      location: "Sheridan, WY",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "02/6/2023",
      eventName: "Casper Jazz Festival",
      time: "February 6 - 8",
      location: "Casper, WY",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "02/16/2023",
      eventName: "All-Northwest",
      time: "February 16 - 19",
      location: "Bellevue, WA",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "02/21/2023",
      eventName: "Northwest Jazz Festival",
      time: "All Day",
      location: "Powell, WY",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "02/27/2023",
      eventName: "UW Jazz Festival",
      time: "February 27 - 28",
      location: "Laramie, WY",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "04/06/2023",
      eventName: "Spring Concert",
      time: "7:00PM",
      location: "South High Auditorium",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "04/20/2023",
      eventName: "UNC Jazz Festival",
      time: "April 20 - 21",
      location: "Greeley, CO",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "04/24/2023",
      eventName: "SE District Festival",
      time: "April 24 - 25",
      location: "Cheyenne, WY",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "05/02/2023",
      eventName: "All-City Band",
      time: "7:00PM",
      location: "Storey Gym",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "05/09/2023",
      eventName: "Final Concert",
      time: "7:00PM",
      location: "South High Auditorium",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
    {
      // todo ***change this information for all new events
      dateTime: "05/18/2023",
      eventName: "Band Banquet",
      time: "6:00PM",
      location: "South High School",
      // This information will populate automatically based off of the dateTime value
      month: monthValue,
      day: dayValue,
      weekday: weekdayValue,
    },
  ];
  