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
    id: 10,
    thumbnail:
      "https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2018/06/PROMO_MARKETING_PDC18-53.png",
    title: "Tech In Asia PDC ‘18",
    tags: [
      {
        text: "Event",
        color: "white"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Pada sesi kali ini yang saya dapatkan adalah bagaimana implementasi testing yang lebih baik dalam suatu proses development. Disini ini yang ditekankan adalah metode Agile Testing yaitu testing bersama yang bisa berkombinasi antara orang teknik dengan orang bisnis.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/resume-tech-in-asia-pdc-18-36fffbb5ab24"
  },
  {
    id: 9,
    thumbnail: "https://miro.medium.com/max/1536/1*4Zga7doxGAObi15GO6bAbQ.png",
    title: "Create a Recycler View",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Jadi pada tutorial kali ini kita akan belajar membuat Recycler View dimana recycler view adalah suatu layout scroll yang dapat memuat data dinamis yang cukup banyak. Contoh aplikasi yang menggunakan Recycler View adalah Instagram, Line, dan Facebook.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/create-a-recycler-view-538746acc8e7"
  },
  {
    id: 8,
    thumbnail: "https://miro.medium.com/max/1536/1*4Zga7doxGAObi15GO6bAbQ.png",
    title: "Using Keyboards, Input Controls, Alerts, and Pickers",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Jadi pada tutorial kali ini, kita akan belajar membuat Tab Navigation. Langsung saja buatlah project baru serta salin script sesuai filenya.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/using-the-app-bar-and-tabs-for-navigation-51def455f525"
  },
  {
    id: 7,
    thumbnail: "https://miro.medium.com/max/1536/1*8bm1Q2ohveik_oiktHdO_A.png",
    title: "Using Keyboards, Input Controls, Alerts, and Pickers",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Jadi pada tutorial kali ini berpatok pada Google Dev, kita akan belajar membuat keyboard pada device android dapat memberikan sugesti kata, auto-capitalization, dan password. Lalu ada pula membuat spinner atau dropdown atau combobox. Membuat alert. Menggunakan date and time pickers, Imageview, serta radio buttons.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/using-keyboards-input-controls-alerts-and-pickers-d78e7f5a8760"
  },
  {
    id: 6,
    thumbnail: "https://miro.medium.com/max/1536/1*S9784jGxrqKajOfqRObPdA.png",
    title: "Using The Android Support Librarie",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Pertama, untuk mengetahui macam-macam library yang telah terpasang pada Android Studio kita, kita dapat melihatnya dengan cara membuka Tools->Android->SDK Manager. Pada tab SDK Tools kita bisa menginstall library sesuai kebutuhan kita.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/using-the-android-support-libraries-d82398787c05"
  },
  {
    id: 5,
    thumbnail: "https://miro.medium.com/max/664/1*baKQTzJs46gCkk_8x_sB_g.png",
    title: "Testing Apps With Unit Tests",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Testing = mencoba? yup benar sekali. Story kali ini saya akan bercerita tentang Testing pada Android.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/testing-apps-with-unit-tests-5e97cfe04796"
  },
  {
    id: 4,
    thumbnail: "https://miro.medium.com/max/2730/1*UwSJ8g2-vQ2igI-q54gEmw.png",
    title: "Using the Debugger",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Sekarang kita akan membahas tentang Debug. Jadi pada story kali ini kita akan belajar Debug pada Android. Yang akan kita pelajari adalah menjalankan debug mode pada aplikasi kita, apa yang harus kita lakukan ketika mendapatkan bug, menggunakan breakpoints, dan menganalisa dan mengubah variable pada mode Debug.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/using-the-debugger-241c00cd2b23"
  },
  {
    id: 3,
    thumbnail: "https://miro.medium.com/max/1536/1*WUtdSiQAkVBZOddYQX7Etg.png",
    title: "Start Activities with Implicit Intents",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Pada story ini, saya mengambil referensi dari Google Android Developer Training Book. Story ini membahas tentang Intent yang tidak hanya memindahkan activity didalam satu aplikasi, tetapi bisa menggunakan aplikasi lain yang dapat membangun aplikasi kita lebih baik.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/start-activities-with-implicit-intents-34cd34849a0f"
  },
  {
    id: 2,
    thumbnail: "https://miro.medium.com/max/2602/1*oeCkHnnG27NtLrUDcYjHTw.png",
    title: "Activity Lifecycle and Instance State",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Melanjutkan pembahasan dari story Create and Start Activities . Secara garis besar, disini kita akan fokus membahas tentang life cycle dari si Android ini. Beberapa life cycle yang kita ketahui adalah onCreate, onStart, onPause, onStop dan onDestroy.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/activity-lifecycle-and-instance-state-8ce2e97a97c5"
  },
  {
    id: 1,
    thumbnail: "https://miro.medium.com/max/1248/1*pUBpLgOLWyX0bUmJ1Pd2Jg.png",
    title: "Create and Start Activities",
    tags: [
      {
        text: "Android",
        color: "green"
      },
      {
        text: "Java",
        color: "yellow"
      },
      {
        text: "Bahasa",
        color: "red"
      }
    ],
    desc:
      "Baiklah, pada story kali ini saya akan membahas tentang “Create and Start Activities” yang base on Android Developer Fundamentals Course. Pada story saya akan membahas tentang perpindahan activity pada Android.",
    link:
      "https://medium.com/@taufanfadhilahiskandar/create-and-start-activities-91e21a825fb3"
  }
];

function Reducers(state = blogs, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default Reducers;
