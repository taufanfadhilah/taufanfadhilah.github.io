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
    id: 2,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzQ9oMP9AOLwHNAv8B_gamZPQ_7xftFXeR8kPoKLym19_tl5x&s",
    embed: "https://www.youtube.com/embed/fJlR-fKIBjI",
    link: "https://www.youtube.com/watch?v=fJlR-fKIBjI",
    title: "Nuxt Recipe App",
    tags: [
      {
        text: "Nuxt js",
        color: "green"
      },
      {
        text: "Vue js",
        color: "green"
      },
      {
        text: "Front End Development",
        color: "blue"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    tools: ["Code Editor", "Package Manager", "Javascript", "Nuxt.js"],
    desc:
      "Apasih yang bikin aku pingin nyoba Nuxt? Sebelumnya aku kurang lebih sudah satu setengah tahun berkutat dengan Next (SSR nya React.js), sudah ngerasa nyaman sih dengan Next cuma karena lama-lama muncul rasa bosan akhirnya aku explore framework lainnya yaitu Nuxt. Buat experimenku, aku bikin suatu apps tentang resep-resep makanan yang aku dapatkan API nya dari spooncular.com dan API buat login (pemanis doang sih) dari jsonplaceholder.",
    insight:
      "Jadi menurutku Nuxt ini dapet banget developer experience nya dan menurutku cocok untuk bikin project Front End dengan skala yang besar karena strukturnya lebih baku sehingga aman buat berbagai macam style developer. Kalau misalkan temen-temen backgroundnya fullstack dari Laravel, kalian akan tau mengapa Laravel menggandeng Vue. Menurutku pun ada beberapa hal dari Laravel yang diimplementasikan di Nuxt seperti layout dan middleware. Kalau dari sisi minus nya adalah kalau temen-temen backgroundnya dari React yang bisa YOLO pas ngoding, disini bakalan ngerasa lebih strict. Yang awalnya ngerasa HTML, CSS, JS bisa dibuat dalam satu function tapi kalau di Vue ga boleh. Tapi percayalah, peraturan itu dibuat dengan tujuan yang baik bukan untuk dilanggar :3. So, for me this one its so recommended to try!",
    medium:
      "https://medium.com/@taufanfadhilahiskandar/pengalaman-migrasi-dari-next-js-ke-nuxt-js-968a43854c36",
    code: "https://github.com/taufanfadhilah/Nuxt-RecipeWikia"
  },
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
