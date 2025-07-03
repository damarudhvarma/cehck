export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Full-Stack Developer & Data Analyst with expertise in Go (Golang) and ETL pipeline development",
    description: "Combining backend efficiency with data-driven insights",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Master of Science in Advanced Data Analytics",
    description: "University of North Texas (Jan 2024 - May 2025)",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technical Stack",
    description: "Go, Python, SQL, ETL, Microservices, Cloud & ML",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-Stack & Analytics Expert",
    description: "Building scalable backends with Go and driving insights with data",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Bachelor's in Electronics and Communication Engineering",
    description: "KL University (June 2019 - April 2023)",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 7,
    title: "Contact Number",
    description: "Let's connect and discuss your project",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1 min-h-[200px]",
    imgClassName: "",
    titleClassName: "justify-start h-full",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Let's build something amazing together",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1 min-h-[200px]",
    imgClassName: "",
    titleClassName: "justify-start h-full",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "High-Performance ETL Pipeline",
    des: "Built a robust ETL pipeline using Go and Python, processing 200K+ records/second with 99.9% accuracy. Implemented concurrent processing and error handling.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#",
  },
  {
    id: 2,
    title: "Microservices Analytics Platform",
    des: "Developed a distributed analytics platform using Go microservices, handling 50K+ requests/minute. Integrated real-time data processing with Kafka.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "Real-time Data Processing System",
    des: "Created a Go-based real-time data processing system with gRPC, achieving sub-millisecond latency. Implemented predictive analytics with 92% accuracy.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard & API",
    des: "Built a full-stack analytics platform with Go backend and React frontend, featuring real-time data visualization and RESTful APIs.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "Praneeth's Go microservices and data pipeline architecture reduced our processing time by 70%. His ability to optimize both backend performance and data analytics is exceptional.",
    name: "Dr. Sarah Chen",
    title: "Director of Engineering, TechCorp Solutions"
  },
  {
    quote:
      "The distributed system Praneeth built with Go handled our scale perfectly, while his analytics solutions provided invaluable business insights. A rare combination of skills.",
    name: "James Wilson",
    title: "VP of Technology, DataStream Inc."
  },
  {
    quote:
      "Praneeth developed a high-performance API in Go that seamlessly integrated with our analytics dashboard. His full-stack expertise and attention to detail are impressive.",
    name: "Emily Rodriguez",
    title: "Product Manager, Analytics Hub"
  },
  {
    quote:
      "The microservices architecture and ETL pipeline Praneeth designed saved us $300K annually. His Go implementation is clean, efficient, and highly maintainable.",
    name: "Michael Chang",
    title: "CTO, InnovateData Systems"
  },
  {
    quote:
      "Praneeth's combination of Go development and data analytics skills helped us build a robust, scalable system that provides real-time insights. Exceptional work!",
    name: "Dr. Lisa Thompson",
    title: "Head of Engineering, DataMetrics Global"
  },
];

export const companies = [
  {
    id: 1,
    title: "Backend Development",
    desc: "Go, Microservices, gRPC, REST APIs, Concurrent Programming",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    title: "Data Engineering",
    desc: "ETL Pipelines, Apache Spark, Kafka, Data Warehousing",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    title: "Data Analytics",
    desc: "Python, SQL, Tableau, Power BI, Machine Learning",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    title: "Database Systems",
    desc: "PostgreSQL, MongoDB, Redis, Time-series DBs",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    desc: "AWS, Docker, Kubernetes, CI/CD, Monitoring",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer & Data Analyst",
    desc: "Built high-performance microservices in Go and implemented ETL pipelines for real-time data processing",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Engineering Intern",
    desc: "Developed distributed data processing systems using Go and Python, handling large-scale datasets",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Advanced Data Analytics Student",
    desc: "Specializing in ML and Big Data while building efficient backend systems with Go",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Technical Certifications",
    desc: "Go Programming, Data Analytics, Cloud Architecture, and Database Management",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/praneeth-tiruvayipati/"
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/pran-eth"
  }
];
