const blogs = [
  {
    thumbnail:
      "https://e3.365dm.com/19/03/768x432/skynews-meteor-explosion-generic_4612421.jpg?20190318083957",
    title: "Blog 1",
    tags: [
      {
        text: "React",
        color: "blue"
      },
      {
        text: "Redux",
        color: "yellow"
      }
    ],
    desc:
      "ini adalah deskripsi singkat yang mengambarkan secara keseluruhan postingan ini namun dengan singkat"
  }
];

function Reducers(state = blogs, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default Reducers
