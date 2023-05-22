const projects = [
  {
    name: "Правда или ложь",
    description: "Игровой проект с квиз-системой. Разработка все еще ведется и по итогу будет функционал, позволяющий нескольким игрокам собираться в комнате и соревноваться между собой в своей эрудиции, повышая рейтинг за победы. Фактически, мы перенесли настолки в веб-приложение :)",
    pic: "./quiz.png",
    tech: ["JS", "ООП", "Node.js", "MongoDB", "Express"],
    links: [
      {
        label: "Сайт",
        icon: "link",
        url: "http://quiz.hixozen.ru",
      },
      {
        label: "Github (фронт)",
        icon: "github",
        url: "https://github.com/hixozen/truth-or-lie-game",
      },
      {
        label: "Github (бэк)",
        icon: "github",
        url: "https://github.com/hixozeN/truth-or-lie-backend",
      },
    ],
  },
  {
    name: "MESTO React",
    description:
      "Проект Место - классическое MERN-приложение в рамках курса веб-разработки в Яндекс.Практикуме. Франкенштейн инстаграмма и той самой стены Дурова (которую он все еще не вернул), но в виде сетки :)",
    pic: "./mesto.png",
    tech: ["MongoDB", "Express", "React", "NodeJS"],
    links: [
      {
        label: "Сайт",
        icon: "link",
        url: "https://mesto.hixozen.ru",
      },
      {
        label: "GitHub",
        icon: "github",
        url: "https://github.com/hixozeN/react-mesto-api-full-gha",
      },
    ],
  },
];

export const extraProjects = [
  {
    name: "Место на JS Native",
    type: "Учеба",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, illum.",
    tech: ["JS Native", "ООП", "Адаптив"],
    links: [
      {
        label: "Сайт",
        icon: "link",
        url: "https://hixozen.github.io/mesto/",
      },
    ],
  },
  {
    name: "Бэкенд проекта Quiz",
    type: "Пет",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, illum.",
    tech: ["NodeJS", "Express", "MongoDB"],
    links: [
      {
        label: "IP",
        icon: "link",
        url: "45.146.165.205",
      },
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/hixozeN/truth-or-lie-backend",
      },
    ],
  },
  {
    name: "Параллакс",
    type: "Пет",
    description:
      "Сайт с параллакс-эффектом для игры Phasmaphobia (в процессе разработки).",
    tech: ["CSS3", "JS"],
    links: [
      {
        label: "Сайт",
        icon: "link",
        url: "https://hixozen.github.io/phasmaphobia/",
      },
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/hixozeN/phasmaphobia",
      },
    ],
  },
  {
    name: "Путешествия по России",
    type: "Учебный",
    description:
      "Учебный проект в рамках курса Яндекс.Практикум с адаптивной версткой. Помимо ТЗ от Яндекса добавлена мультиязычность и модульная архитектура.",
    tech: ["HTML5", "CSS3", "JS"],
    links: [
      {
        label: "Сайт",
        icon: "link",
        url: "https://hixozen.github.io/russian-travel/",
      },
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/hixozeN/russian-travel",
      },
    ],
  },
  {
    name: "Портфолио",
    type: "Рабочий",
    description:
      "Сайт-портфолио, разработанный на React с использованием chakra-ui/react.",
    tech: ["React", "JS", "Chakra-UI"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/hixozeN/portfolio",
      },
      {
        label: "Сайт",
        icon: "link",
        url: "https://hixozen.github.io/portfolio/",
      },
    ],
  },
];

export default projects;
