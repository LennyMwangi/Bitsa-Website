import { v4 as uuidv4 } from "uuid";

export const data = {
  blogs: [
    {
      uuid: uuidv4(),
      title: "Computer Clinic March 2023",
      alt: "",
      date: new Date().toDateString(),
      author: "John Doe",
      banner:
        "https://images.pexels.com/photos/9242887/pexels-photo-9242887.jpeg?cs=srgb&dl=pexels-mikhail-nilov-9242887.jpg&fm=jpg",
      excerpt:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro facilis facere, illo voluptatem, vel ut impedit deleniti alias distinctio natus dolore beatae. Accusamus, porro sint amet in ullam pariatur amet consectetur, adipisicing elit. Voluptates, amet? harum",
    },
    {
      uuid: uuidv4(),
      date: new Date().toDateString(),
      author: "Henry Schenzy",
      alt: "",
      title: "Coding Bootcamps in the Bitsa Club",
      banner:
        "https://images.pexels.com/photos/4050470/pexels-photo-4050470.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050470.jpg&fm=jpg",
      excerpt:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro facilis facere, illo voluptatem, vel ut impedit deleniti alias distinctio natus dolore beatae. Accusamus, porro sint amet in ullam pariatur amet consectetur, adipisicing elit. Voluptates, amet? harum",
    },
  ],
  developers: [
    {
      avatar:
        "https://wangaevans.vercel.app/_next/image?url=%2Fimages%2Fevans.jpg&w=128&q=75",
      alt: "Wanga.png",
      name: "Wanga Evans",
      role: "",
      bio: " ",
      github: "https://github.com/wangaevans",
      twitter: "https://twitter.com/wangaonly",
      website: "https://wangaevans.vercel.app",
    },

    {
      avatar: "https://musaubrian.netlify.app/assets/avataaars.a85d8514.png",
      alt: "Ernest.png",
      name: "Musau Ernest",
      role: "",
      bio: " ",
      github: "https://github.com/musaubrian",
      twitter: "https://twitter.com/_musaubrian",
      website: "https://musaubrian.vercel.app",
    },

    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
      alt: "blank",
      name: "Elvis Ndubi",
      role: "",
      bio: "",
      github: "",
      twitter: "",
      website: "",
    },
    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
      alt: "blank",
      name: "Lenny Mwangi",
      role: "",
      bio: "",
      github: "https://github.com/LennyMwangi",
      twitter: "",
      website: "https://lennymwangi.github.io/portfolio.github.io/",
    },
  ],
  events: [
    {
      banner:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/44RTBPTQEBOPJJS4DZGDBIRFWI.jpg",
      alt: "blank",
      name: "Huawei Baraton Academy Launch",
      status: "Coming soon",
      info: " The Manager's role in managing the clubs content flow, is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    },
  ],
  officials: [
    {
      name: "Peter Muriuki",
      role: "President",
      avatar: "/assets/president.jpeg",
    },
    {
      name: "Vincent Kiberenge",
      role: "Deputy President",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
    },

    {
      name: "Nouwen Makoa",
      role: "BBIT Rep",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
    },
    {
      name: "Collins Mwirigi",
      role: "Networking Rep",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
    },
    {
      name: "Titus Rono",
      role: "Software Rep",
      avatar: "/assets/rono.jpeg",
    },
    {
      name: "Joseph Chuchu",
      role: "Public Relations",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
    },
    {
      name: "Grace Muthoni",
      role: "Secretary",
      avatar: "/assets/grace.jpeg",
    },
    {
      name: "Odero Otieno",
      role: "Chaplain",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg",
    },
    {
      name: "Wilfred Manyara",
      role: "Treasurer",
      avatar: "/assets/wilfred.png",
    },
    {
      name: "Ogwanda Makayo",
      role: "Diploma Rep",
      avatar: "/assets/magwanda.jpeg",
    },
  ],
};
