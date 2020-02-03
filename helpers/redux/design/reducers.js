// Design TEMPLATE
// {
//     id: 1,
//     thumbnail:
//       "https://cdn.dribbble.com/users/2633414/screenshots/9864240/media/9d334e441e1e60b08a7b0bfa5ad259ee.png",
//     title: "Kamus Hewan",
//     tags: [
//       {
//         text: "Mobile App",
//         color: "blue"
//       }
//     ],
//     desc:
//       "So basicly this is my first design because currently i worked as Team Lead Engineer.
//        Whats make me to start design is to understand what is Designer feels. And i did it!
//        Now i was know what Designer feels and also can give experience from Engineers perspective",
//      link: "https://dribbble.com/shots/9864240-Kamus-Hewan-Animal-Pedia"
//   }
const designs = [
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/users/2633414/screenshots/9864110/media/a485ecc744f8b180aeade52f1b304da3.png",
    title: "Car Rental",
    tags: [
      {
        text: "Mobile App",
        color: "blue"
      }
    ],
    desc:
      "Trying to focus on listing design, i was found similar design of this. And finally i do design exploration about Car Rental",
    link: "https://dribbble.com/shots/9864110-Car-Rental"
  },
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/users/2633414/screenshots/9864240/media/9d334e441e1e60b08a7b0bfa5ad259ee.png",
    title: "Kamus Hewan",
    tags: [
      {
        text: "Mobile App",
        color: "blue"
      }
    ],
    desc:
      "So basicly this is my first design because currently i worked as Team Lead Engineer. Whats make me to start design is to understand what is Designer feels. And i did it! Now i was know what Designer feels and also can give experience from Engineers perspective",
    link: "https://dribbble.com/shots/9864240-Kamus-Hewan-Animal-Pedia"
  }
];

function Reducers(state = designs, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default Reducers;
