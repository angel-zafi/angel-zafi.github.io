
/* -- Projects Data -- */

const projects = [
  /* -- BookFind -- */

  {
    id: 1,
    title: "BookFind",
    category: "Web Development",

    description:
      "A full-stack online library system that allows users to browse books, check availability, and manage reservations, with role-based features for users and librarians.",

    topics: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Role-Based Access",
    ],

    github: "",
    documentation: "",
    video: "",
  },

  /* --------------------------------------------------
     BookGuru
  -------------------------------------------------- */

  {
    id: 2,
    title: "BookGuru",
    category: "Web Development & DevOps",

    description:
      "A library management application focused on adding, editing, and deleting books, with automated testing, CI/CD pipelines, deployment, and monitoring workflows.",

    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "REST API",
      "Jest",
      "Supertest",
      "Playwright",
      "Jenkins",
      "Docker",
      "Minikube",
      "CI/CD",
    ],

    github: "",
    documentation: "/docs/BookGuru.pdf",
    video: "",
  },

  /* --------------------------------------------------
     Sprout
  -------------------------------------------------- */

  {
    id: 3,
    title: "Sprout",
    category: "Mobile Development",

    description:
      "A mobile application that promotes environmentally friendly habits through sustainable transport tracking, recycling activities, and participation in community projects.",

    topics: [
      "Flutter",
      "Dart",
      "Firebase",
      "Authentication",
      "Location Services",
      "QR Code Integration",
      "Mobile Development",
    ],

    github: "",
    documentation: "",
    video: "",
  },

  /* --------------------------------------------------
     SmartPot
  -------------------------------------------------- */

  {
    id: 4,
    title: "SmartPot",
    category: "IoT & Cloud Computing",

    description:
      "An IoT plant monitoring system using the M5Stack Core2 and AWS to monitor moisture levels, detect when a plant pot tips over, and send automated alerts through cloud services.",

    topics: [
      "M5Stack Core2",
      "MicroPython",
      "IoT",
      "MQTT",
      "AWS IoT Core",
      "AWS Lambda",
      "DynamoDB",
      "Amazon SNS",
      "API Gateway",
      "Cloud Computing",
    ],

    github: "",
    documentation: "",
    video: "",
  },
];

export default projects;
