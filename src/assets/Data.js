import dayjs from "dayjs";


var today = new Date();

const currentDate = dayjs();
const formattedDate = currentDate.format("DD-MM-YYYY")
console.log(formattedDate)
const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today.getDate() + 1;

const date1 = date + "-" + month + "-" + year;
const date2 = date + 1 + "-" +month + "-" + year;
const date3 = date + 2 + "-" +month + "-" + year;
const date4 = date + 3 + "-" +month + "-" + year;
const date5 = date + 4 + "-" +month + "-" + year;
const date6 = date + 5 + "-" +month + "-" + year;


const data = [
    {
        name: "Dealer 1",
        location: "Delhi",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date1,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
              carRepair: ["10 AM - 1 PM", "01 PM - 4 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date2,
              carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date3,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
              date:  date4,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date5,
              carWash: ["10 AM - 11 AM", "03 PM - 4 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date6,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["11 AM - 5 PM"]
            }
          ]
    },
    {
        name: "Dealer 2",
        location: "Noida",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "02 PM - 3 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date1,
              carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date2,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
              date:  date3,
              carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date4,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "01 PM - 2 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date5,
              carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date6,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["11 AM - 5 PM"]
            }
          ]
    },
    {
        name: "Dealer 3",
        location: "Gurugram",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date1,
              carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date2,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
              date:  date3,
              carWash: ["10 AM - 11 AM", "03 PM - 4 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date4,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date5,
              carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "02 PM - 5 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date6,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["11 AM - 5 PM"]
            }
          ]
    },
    {
        name: "Dealer 4",
        location: "Delhi",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date1,
              carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date2,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
              date:  date3,
              carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date4,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "01 PM - 2 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date5,
              carWash: ["09 AM - 10 AM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
                date:  date6,
                carWash: ["02 PM - 3 PM", "07 PM - 8 PM"],
                carRepair: ["10 AM - 1 PM"],
                carPaint: ["01 PM - 5 PM"]
            }
          ]
    },
    {
        name: "Dealer 5",
        location: "Sonipat",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date1,
              carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date2,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date3,
              carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date4,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
                date:  date5,
                carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
                carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
                carPaint: ["09 AM - 3 PM"]
            },
            {
                date:  date6,
                carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
                carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
                carPaint: ["09 AM - 3 PM"]
            }
          ]
    },
    {
        name: "Dealer 6",
        location: "Delhi",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "05 PM - 6 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date1,
              carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
              date:  date2,
              carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
              carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date3,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "02 PM - 3 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
                date:  date4,
                carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "06 PM - 7PM"],
                carRepair: ["11 AM - 2 PM", "7PM - 10 PM"],
                carPaint: []
            },
            {
                date:  date5,
                carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
                carRepair: ["07 PM - 10 PM"],
                carPaint: []
            },
            {
                date:  date6,
                carWash: ["09 AM - 10 AM", "04 PM - 5 PM"],
                carRepair: ["11 AM - 2 PM"],
                carPaint: []
            }
          ]
    },
    {
        name : "Dealer 7",
        location : "Delhi",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
              date:  date1,
              carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date2,
              carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
              date:  date3,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
              carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
              carPaint: ["12 PM - 6 PM"]
            },
            {
                date:  date4,
                carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
                carRepair: ["12AM - 3 PM", "03 PM - 6 PM"],
                carPaint: ["09 AM - 3 PM"]
            },
            {
                date:  date5,
                carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
                carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
                carPaint: ["12 PM - 6 PM"]
            },
            {
                date:  date6,
                carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
                carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
                carPaint: ["09 AM - 3 PM"]
            }
          ]
    },
    {
        name : "Dealer 8",
        location : "Delhi",
        bookings: [
            {
              date:  formattedDate,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
              carRepair: [],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date1,
              carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
              carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
              carPaint: ["09 AM - 3 PM"]
            },
            {
              date:  date2,
              carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
              carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
              carPaint: ["11 AM - 5 PM"]
            },
            {
                date:  date3,
                carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
                carRepair: ["10 AM - 1 PM", "01 PM - 4 PM"],
                carPaint: ["12 PM - 6 PM"]
            },
            {
                date:  date4,
                carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
                carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
                carPaint: ["09 AM - 3 PM"]
            },
            {
                date:  date5,
                carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
                carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
                carPaint: ["12 PM - 6 PM"]
            },
            {
                date:  date6,
                carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
                carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
                carPaint: ["12 PM - 6 PM"]
            },
        ]
    },
    {
      name : "Dealer 9",
      location : "Delhi",
      bookings: [
          {   
            date:  formattedDate, 
            carWash: ["09 AM - 10 AM", "03 PM - 4 PM",".."],
            carRepair: ["..."],
            carPaint: ["11 AM - 5 PM"]
          },
          {   
            date:  date1, 
            carWash: ["10 AM - 11 AM", "02 PM - 3 PM"],
            carRepair: ["11 AM - 2 PM"],
            carPaint: ["..."]
          },
          {   
            date:  date2, 
            carWash: ["02 PM - 3 PM"],
            carRepair: ["10 AM - 1 PM"],
            carPaint: ["01 PM - 5 PM"]
          },
          {   
            date:  date3, 
            carWash: ["01 PM - 2 PM"],
            carRepair: ["09 AM - 12 PM"],
            carPaint: ["..."]
          },
          {   
            date:  date4, 
            carWash: ["10 AM - 11 AM"],
            carRepair: ["01 PM - 4 PM"],
            carPaint: ["09 AM - 1 PM"]
          },
          {   
            date:  date5, 
            carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
            carRepair: ["09 AM - 10 AM"],
            carPaint: ["..."]
          },
          {   
            date:  date6, 
            carWash: ["01 PM - 2 PM"],
            carRepair: ["09 AM - 12 PM"],
            carPaint: ["11 AM - 5 PM"]
          }
      ]
  },
  {
    name: "Dealer 10",
    location: "Delhi",
    bookings: [
        {
          date:  formattedDate,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
          date:  date1,
          carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date2,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
          carPaint: ["11 AM - 5 PM"]
        },
        {
          date:  date3,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date4,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "01 PM - 2 PM"],
          carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
          date:  date5,
          carWash: ["09 AM - 10 AM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM"],
          carPaint: ["11 AM - 5 PM"]
        },
        {
            date:  date6,
            carWash: ["02 PM - 3 PM", "07 PM - 8 PM"],
            carRepair: ["10 AM - 1 PM"],
            carPaint: ["01 PM - 5 PM"]
        }
      ]
},
{
    name: "Dealer 11",
    location: "Sonipat",
    bookings: [
        {
          date:  formattedDate,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date1,
          carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
          carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
          date:  date2,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date3,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date4,
          carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
            date:  date5,
            carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
            carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
            carPaint: ["09 AM - 3 PM"]
        },
        {
            date:  date6,
            carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
            carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
            carPaint: ["09 AM - 3 PM"]
        }
      ]
},
{
    name: "Dealer 12",
    location: "Delhi",
    bookings: [
        {
          date:  formattedDate,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "05 PM - 6 PM"],
          carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
          date:  date1,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
          date:  date2,
          carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
          carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date3,
          carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "02 PM - 3 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["11 AM - 5 PM"]
        },
        {
            date:  date4,
            carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "06 PM - 7PM"],
            carRepair: ["11 AM - 2 PM", "7PM - 10 PM"],
            carPaint: []
        },
        {
            date:  date5,
            carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
            carRepair: ["07 PM - 10 PM"],
            carPaint: []
        },
        {
            date:  date6,
            carWash: ["09 AM - 10 AM", "04 PM - 5 PM"],
            carRepair: ["11 AM - 2 PM"],
            carPaint: []
        }
      ]
},
{
    name : "Dealer 13",
    location : "Delhi",
    bookings: [
        {
          date:  formattedDate,
          carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
          carPaint: ["11 AM - 5 PM"]
        },
        {
          date:  date1,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date2,
          carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
          carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
          carPaint: ["11 AM - 5 PM"]
        },
        {
          date:  date3,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
          carPaint: ["12 PM - 6 PM"]
        },
        {
            date:  date4,
            carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
            carRepair: ["12AM - 3 PM", "03 PM - 6 PM"],
            carPaint: ["09 AM - 3 PM"]
        },
        {
            date:  date5,
            carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
            carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
            carPaint: ["12 PM - 6 PM"]
        },
        {
            date:  date6,
            carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
            carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
            carPaint: ["09 AM - 3 PM"]
        }
      ]
},
{
    name : "Dealer 14",
    location : "Delhi",
    bookings: [
        {
          date:  formattedDate,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
          carRepair: [],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date1,
          carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
        },
        {
          date:  date2,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["11 AM - 5 PM"]
        },
        {
            date:  date3,
            carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
            carRepair: ["10 AM - 1 PM", "01 PM - 4 PM"],
            carPaint: ["12 PM - 6 PM"]
        },
        {
            date:  date4,
            carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
            carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
            carPaint: ["09 AM - 3 PM"]
        },
        {
            date:  date5,
            carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
            carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
            carPaint: ["12 PM - 6 PM"]
        },
        {
            date:  date6,
            carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
            carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
            carPaint: ["12 PM - 6 PM"]
        },
    ]
},
{
  name : "Dealer 15",
  location : "Delhi",
  bookings: [
      {   
        date:  formattedDate, 
        carWash: ["09 AM - 10 AM", "03 PM - 4 PM",".."],
        carRepair: ["..."],
        carPaint: ["11 AM - 5 PM"]
      },
      {   
        date:  date1, 
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM"],
        carRepair: ["11 AM - 2 PM"],
        carPaint: ["..."]
      },
      {   
        date:  date2, 
        carWash: ["02 PM - 3 PM"],
        carRepair: ["10 AM - 1 PM"],
        carPaint: ["01 PM - 5 PM"]
      },
      {   
        date:  date3, 
        carWash: ["01 PM - 2 PM"],
        carRepair: ["09 AM - 12 PM"],
        carPaint: ["..."]
      },
      {   
        date:  date4, 
        carWash: ["10 AM - 11 AM"],
        carRepair: ["01 PM - 4 PM"],
        carPaint: ["09 AM - 1 PM"]
      },
      {   
        date:  date5, 
        carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
        carRepair: ["09 AM - 10 AM"],
        carPaint: ["..."]
      },
      {   
        date:  date6, 
        carWash: ["01 PM - 2 PM"],
        carRepair: ["09 AM - 12 PM"],
        carPaint: ["11 AM - 5 PM"]
      }
  ]
},
{
  name: "Dealer 16",
  location: "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date3,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date4,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "01 PM - 2 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date5,
        carWash: ["09 AM - 10 AM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date6,
          carWash: ["02 PM - 3 PM", "07 PM - 8 PM"],
          carRepair: ["10 AM - 1 PM"],
          carPaint: ["01 PM - 5 PM"]
      }
    ]
},
{
  name: "Dealer 17",
  location: "Sonipat",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date3,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date4,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date6,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      }
    ]
},
{
  name: "Dealer 18",
  location: "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "05 PM - 6 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date1,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date2,
        carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
        carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date3,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "02 PM - 3 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "06 PM - 7PM"],
          carRepair: ["11 AM - 2 PM", "7PM - 10 PM"],
          carPaint: []
      },
      {
          date:  date5,
          carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
          carRepair: ["07 PM - 10 PM"],
          carPaint: []
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM"],
          carPaint: []
      }
    ]
},
{
  name : "Dealer 19",
  location : "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date3,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
          carRepair: ["12AM - 3 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      }
    ]
},
{
  name : "Dealer 20",
  location : "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: [],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date3,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "01 PM - 4 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
  ]
},
{
name : "Dealer 21",
location : "Delhi",
bookings: [
    {   
      date:  formattedDate, 
      carWash: ["09 AM - 10 AM", "03 PM - 4 PM",".."],
      carRepair: ["..."],
      carPaint: ["11 AM - 5 PM"]
    },
    {   
      date:  date1, 
      carWash: ["10 AM - 11 AM", "02 PM - 3 PM"],
      carRepair: ["11 AM - 2 PM"],
      carPaint: ["..."]
    },
    {   
      date:  date2, 
      carWash: ["02 PM - 3 PM"],
      carRepair: ["10 AM - 1 PM"],
      carPaint: ["01 PM - 5 PM"]
    },
    {   
      date:  date3, 
      carWash: ["01 PM - 2 PM"],
      carRepair: ["09 AM - 12 PM"],
      carPaint: ["..."]
    },
    {   
      date:  date4, 
      carWash: ["10 AM - 11 AM"],
      carRepair: ["01 PM - 4 PM"],
      carPaint: ["09 AM - 1 PM"]
    },
    {   
      date:  date5, 
      carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
      carRepair: ["09 AM - 10 AM"],
      carPaint: ["..."]
    },
    {   
      date:  date6, 
      carWash: ["01 PM - 2 PM"],
      carRepair: ["09 AM - 12 PM"],
      carPaint: ["11 AM - 5 PM"]
    }
]
},
{
  name: "Dealer 22",
  location: "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date3,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date4,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "01 PM - 2 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date5,
        carWash: ["09 AM - 10 AM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date6,
          carWash: ["02 PM - 3 PM", "07 PM - 8 PM"],
          carRepair: ["10 AM - 1 PM"],
          carPaint: ["01 PM - 5 PM"]
      }
    ]
},
{
  name: "Dealer 23",
  location: "Sonipat",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date3,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date4,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date6,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      }
    ]
},
{
  name: "Dealer 24",
  location: "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "05 PM - 6 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date1,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date2,
        carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
        carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date3,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "02 PM - 3 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "06 PM - 7PM"],
          carRepair: ["11 AM - 2 PM", "7PM - 10 PM"],
          carPaint: []
      },
      {
          date:  date5,
          carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
          carRepair: ["07 PM - 10 PM"],
          carPaint: []
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM"],
          carPaint: []
      }
    ]
},
{
  name : "Dealer 25",
  location : "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date3,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
          carRepair: ["12AM - 3 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      }
    ]
},
{
  name : "Dealer 26",
  location : "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: [],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date3,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "01 PM - 4 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
  ]
},
{
name : "Dealer 27",
location : "Delhi",
bookings: [
    {   
      date:  formattedDate, 
      carWash: ["09 AM - 10 AM", "03 PM - 4 PM",".."],
      carRepair: ["..."],
      carPaint: ["11 AM - 5 PM"]
    },
    {   
      date:  date1, 
      carWash: ["10 AM - 11 AM", "02 PM - 3 PM"],
      carRepair: ["11 AM - 2 PM"],
      carPaint: ["..."]
    },
    {   
      date:  date2, 
      carWash: ["02 PM - 3 PM"],
      carRepair: ["10 AM - 1 PM"],
      carPaint: ["01 PM - 5 PM"]
    },
    {   
      date:  date3, 
      carWash: ["01 PM - 2 PM"],
      carRepair: ["09 AM - 12 PM"],
      carPaint: ["..."]
    },
    {   
      date:  date4, 
      carWash: ["10 AM - 11 AM"],
      carRepair: ["01 PM - 4 PM"],
      carPaint: ["09 AM - 1 PM"]
    },
    {   
      date:  date5, 
      carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
      carRepair: ["09 AM - 10 AM"],
      carPaint: ["..."]
    },
    {   
      date:  date6, 
      carWash: ["01 PM - 2 PM"],
      carRepair: ["09 AM - 12 PM"],
      carPaint: ["11 AM - 5 PM"]
    }
]
},
{
  name: "Dealer 28",
  location: "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date3,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date4,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "01 PM - 2 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date5,
        carWash: ["09 AM - 10 AM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date6,
          carWash: ["02 PM - 3 PM", "07 PM - 8 PM"],
          carRepair: ["10 AM - 1 PM"],
          carPaint: ["01 PM - 5 PM"]
      }
    ]
},
{
  name: "Dealer 29",
  location: "Sonipat",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date3,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date4,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date6,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      }
    ]
},
{
  name: "Dealer 30",
  location: "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "05 PM - 6 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date1,
        carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
        date:  date2,
        carWash: ["10 AM - 11 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
        carRepair: ["11 AM - 2 PM", "04 PM - 7 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date3,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "02 PM - 3 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "06 PM - 7PM"],
          carRepair: ["11 AM - 2 PM", "7PM - 10 PM"],
          carPaint: []
      },
      {
          date:  date5,
          carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
          carRepair: ["07 PM - 10 PM"],
          carPaint: []
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "04 PM - 5 PM"],
          carRepair: ["11 AM - 2 PM"],
          carPaint: []
      }
    ]
},
{
  name : "Dealer 31",
  location : "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "04 PM - 7 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "12 PM - 1 PM", "03 PM - 4 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
        date:  date3,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
        carRepair: ["10 AM - 1 PM", "02 PM - 5 PM"],
        carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "04 PM - 5 PM"],
          carRepair: ["12AM - 3 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "02 PM - 3 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      }
    ]
},
{
  name : "Dealer 32",
  location : "Delhi",
  bookings: [
      {
        date:  formattedDate,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "03 PM - 4 PM"],
        carRepair: [],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date1,
        carWash: ["10 AM - 11 AM", "12 PM - 1 PM", "04 PM - 5 PM"],
        carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
        carPaint: ["09 AM - 3 PM"]
      },
      {
        date:  date2,
        carWash: ["09 AM - 10 AM", "01 PM - 2 PM", "05 PM - 6 PM"],
        carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
        carPaint: ["11 AM - 5 PM"]
      },
      {
          date:  date3,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "01 PM - 4 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date4,
          carWash: ["10 AM - 11 AM", "02 PM - 3 PM", "05 PM - 6 PM"],
          carRepair: ["11 AM - 2 PM", "03 PM - 6 PM"],
          carPaint: ["09 AM - 3 PM"]
      },
      {
          date:  date5,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
      {
          date:  date6,
          carWash: ["09 AM - 10 AM", "11 AM - 12 PM", "04 PM - 5 PM"],
          carRepair: ["10 AM - 1 PM", "03 PM - 6 PM"],
          carPaint: ["12 PM - 6 PM"]
      },
  ]
},
{
name : "Dealer 33",
location : "Delhi",
bookings: [
    {   
      date:  formattedDate, 
      carWash: ["09 AM - 10 AM", "03 PM - 4 PM",".."],
      carRepair: ["..."],
      carPaint: ["11 AM - 5 PM"]
    },
    {   
      date:  date1, 
      carWash: ["10 AM - 11 AM", "02 PM - 3 PM"],
      carRepair: ["11 AM - 2 PM"],
      carPaint: ["..."]
    },
    {   
      date:  date2, 
      carWash: ["02 PM - 3 PM"],
      carRepair: ["10 AM - 1 PM"],
      carPaint: ["01 PM - 5 PM"]
    },
    {   
      date:  date3, 
      carWash: ["01 PM - 2 PM"],
      carRepair: ["09 AM - 12 PM"],
      carPaint: ["..."]
    },
    {   
      date:  date4, 
      carWash: ["10 AM - 11 AM"],
      carRepair: ["01 PM - 4 PM"],
      carPaint: ["09 AM - 1 PM"]
    },
    {   
      date:  date5, 
      carWash: ["11 AM - 12 PM", "03 PM - 4 PM"],
      carRepair: ["09 AM - 10 AM"],
      carPaint: ["..."]
    },
    {   
      date:  date6, 
      carWash: ["01 PM - 2 PM"],
      carRepair: ["09 AM - 12 PM"],
      carPaint: ["11 AM - 5 PM"]
    }
]
},
    
]

export default data;