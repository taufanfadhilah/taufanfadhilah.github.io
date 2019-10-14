// BLOG TEMPLATE
// {
//     id: 1,
//     thumbnail:
//       "https://e3.365dm.com/19/03/768x432/skynews-meteor-explosion-generic_4612421.jpg?20190318083957",
//     title: "Blog 1",
//     tags: [
//       {
//         text: "React",
//         color: "blue"
//       },
//       {
//         text: "Redux",
//         color: "yellow"
//       }
//     ],
//     desc:
//       "ini adalah deskripsi singkat yang mengambarkan secara keseluruhan postingan ini namun dengan singkat",
//      link:
//   }
const blogs = [
  {
    id: 1,
    thumbnail:
      "https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png",
    embed: "https://www.youtube.com/embed/9Kt6mH-rq2I",
    link: "https://www.youtube.com/watch?v=9Kt6mH-rq2I",
    title: "Tutorial Git",
    tags: [
      {
        text: "Git",
        color: "blue"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    tools: ["Git", "Bitbucket / Github / Gitlab", "Command Promp / Terminal"],
    desc:
      "Git adalah perangkat lunak pengontrol versi atau proyek manajemen kode perangkat lunak yang diciptakan oleh Linus Torvalds, yang pada awalnya ditujukan untuk pengembangan kernel Linux (Wikipedia). Ketertarikan saya mengulik tentang Git berawal dari kesusahan kordinasi saat membuat satu proyek dengan beberapa programmer. Mengalami kesusahan dari mengabungkan code, mencari bug dan mencari perubahan pada tiap file nya.",
    insight:
      "Dengan menggunakan Git, hal-hal buruk yang terjadi saat kolaborasi dengan programmer lain akan berkurang. Adanya fitur-fitur Git mulai dari mencatat perubahan code dan menggabungkan code dari satu programmer ke programmer yang lainnya akan lebih mudah sehingga kesalahan yang akan terjadi dapat terminimalisir. Git adalah ilmu yang harus dipahami oleh programmer yang ingin bekerja secara remote, sehingga semua pekerjaan yang dilakukan dapat digabungkan dan dievaluasi tanpa harus hadir ke kantor.",
    medium: "",
    code: ""
  }
];

function Reducers(state = blogs, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default Reducers;
