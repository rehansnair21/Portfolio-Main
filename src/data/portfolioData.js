import cpDashboard from "../assets/projects/careerpilot-dashboard.jpg";
import cpResume from "../assets/projects/careerpilot-resume-analysis.jpg";
import cpRecommendations from "../assets/projects/careerpilot-recommendations.jpg";
import cpRecruiter from "../assets/projects/careerpilot-recruiter.jpg";
import cpLogin from "../assets/projects/careerpilot-login.jpg";
import bicycleSecurityImg from "../assets/projects/bicycle-security.jpg";
import agroHome from "../assets/projects/agrofresh-home.jpg";
import agroSeller from "../assets/projects/agrofresh-seller-dashboard.png";
import agroDelivery from "../assets/projects/agrofresh-delivery-dashboard.png";
import agroRegister from "../assets/projects/agrofresh-register.jpg";
import agroLogin from "../assets/projects/agrofresh-login.jpg";
import petHome from "../assets/projects/petstore-home.jpg";
import petProducts from "../assets/projects/petstore-products.jpg";
import petCart from "../assets/projects/petstore-cart.jpg";
import petPayment from "../assets/projects/petstore-payment.jpg";
import petCheckout from "../assets/projects/petstore-checkout.jpg";
import movieLensHome from "../assets/projects/movielens-home.jpg";
import movieLensRegistration from "../assets/projects/movielens-registration.png";
import movieLensAbout from "../assets/projects/movielens-about.jpg";
import msCybersecurityImg from "../assets/certificates/microsoft-cybersecurity-analyst.svg";
import scrumCertImg from "../assets/certificates/scrum-fundamentals-certified.jpg";

export const personal = {
  name: "Rehan S Nair",
  firstName: "REHAN",
  location: "Pala, Kerala, India",
  email: "rehansnair@gmail.com",
  phone: "+91 7907243685",
  github: "https://github.com/rehansnair21",
  githubLabel: "github.com/rehansnair21",
  linkedin: "https://linkedin.com/in/rehansnair",
  linkedinLabel: "linkedin.com/in/rehansnair",
  resume: "/resume/Rehan_S_Nair_Resume.pdf",
  titles: ["Full-Stack Developer", "Software Developer", "DevOps Enthusiast"],
  tagline:
    "Building modern web applications, developing scalable backend solutions, and exploring innovative technologies.",
  intro: [
    "I'm Rehan S Nair, a final-year Integrated MCA student and aspiring Full-Stack Developer passionate about building modern, responsive, and user-friendly web applications.",
    "I have hands-on experience in frontend and backend development, working with technologies such as React.js, JavaScript, Node.js, Express.js, PHP, MongoDB, and MySQL. Through my internships and academic projects, I've gained practical experience in developing responsive interfaces, building REST APIs, integrating databases, and solving real-world development challenges.",
    "I enjoy turning ideas into functional applications, exploring emerging technologies, and continuously improving my technical skills. I'm particularly interested in Full-Stack Development, Cloud Computing, and DevOps.",
    "My goal is to become a skilled software developer, contribute to impactful projects, and build technology that makes a difference.",
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const aboutCards = [
  {
    icon: "eye",
    title: "My Vision",
    text: "I aspire to build innovative and user-friendly software applications by combining modern technologies, creative thinking, and strong problem-solving skills.",
  },
  {
    icon: "target",
    title: "My Goal",
    text: "My goal is to grow as a software developer, contribute to real-world projects, and continuously improve my expertise in full-stack development, cloud computing, and DevOps.",
  },
];

export const skillCategories = [
  { title: "Programming Languages", icon: "code", items: ["C", "C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend", icon: "layout", items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Bootstrap", "Vite"] },
  { title: "Backend", icon: "server", items: ["Node.js", "Express.js", "PHP"] },
  { title: "Databases", icon: "database", items: ["MongoDB", "MySQL"] },
  { title: "API & Integration", icon: "plug", items: ["REST APIs", "API Integration", "JSON"] },
  { title: "Tools", icon: "wrench", items: ["Git", "GitHub", "Postman", "VS Code"] },
  {
    title: "Core Concepts",
    icon: "brain",
    items: ["Data Structures and Algorithms", "MVC", "JWT", "Responsive Web Design", "Agile/Scrum"],
  },
];

export const experiences = [
  {
    company: "Syntecxhub",
    role: "Frontend Development Intern",
    duration: "June 2026 – July 2026",
    mode: "Online",
    points: [
      "Developed responsive interfaces using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Implemented reusable frontend components.",
      "Improved responsiveness across different screen sizes.",
      "Used Git for version control and team collaboration.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
  },
  {
    company: "Ainsoft Solutions Pvt. Ltd.",
    role: "Software Development Intern",
    duration: "June 2026 – July 2026",
    mode: "Hybrid",
    points: [
      "Built React.js pages and integrated REST APIs.",
      "Developed backend REST APIs using Node.js and Express.js.",
      "Integrated MongoDB connectivity.",
      "Performed debugging and API testing using Postman.",
      "Managed source code using Git and GitHub.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Postman", "GitHub"],
  },
];

// Add real links here when available. Leave empty strings to hide the buttons.
export const projects = [
  {
    title: "AI Personalized Learning and Career Recommendation Platform",
    short: "AI Career Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI API"],
    description:
      "An AI-powered platform designed to provide personalized career recommendations, skill-gap analysis, and customized learning roadmaps.",
    features: [
      "Career assessments",
      "Skill-gap analysis",
      "Personalized learning plans",
      "Resume and portfolio analysis",
      "Job application tracking",
      "Role-based modules for students, mentors, recruiters, and administrators",
    ],
    image: cpDashboard,
    images: [
      { src: cpDashboard, title: "Student Dashboard" },
      { src: cpResume, title: "Resume Analysis & ATS Scoring" },
      { src: cpRecommendations, title: "Career Recommendations" },
      { src: cpRecruiter, title: "Recruiter Co-pilot Dashboard" },
      { src: cpLogin, title: "Role-Based Authentication" },
    ],
    github: "https://github.com/rehansnair21/CareerPilot-AI",
    live: "https://careerpilot-ai-eta-navy.vercel.app/mentor/dashboard",
  },
  {
    title: "IoT-Based Bicycle Security System",
    short: "Bicycle Security",
    tech: ["ESP32", "Vibration Sensor", "HTML", "CSS", "JavaScript", "C++"],
    description:
      "An IoT-based bicycle security prototype that detects suspicious movement using an ESP32 and vibration sensor.",
    features: ["Vibration detection", "Suspicious movement alerts", "Hardware integration", "ESP32-based monitoring"],
    image: bicycleSecurityImg,
    images: [
      { src: bicycleSecurityImg, title: "ESP32 Security Dashboard" },
    ],
    github: "https://github.com/rehansnair21/iot-bicycle-disturbance-alert-system",
    live: null,
  },
  {
    title: "AgroFresh – Online Marketplace",
    short: "AgroFresh",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    description: "An online marketplace for fresh fruits, vegetables, and dairy products.",
    features: [
      "User authentication",
      "Shopping cart",
      "Order management",
      "Razorpay payment integration",
      "Admin dashboard",
    ],
    image: agroHome,
    images: [
      { src: agroHome, title: "Marketplace Landing Page" },
      { src: agroSeller, title: "Seller Dashboard & Orders" },
      { src: agroDelivery, title: "Delivery Agent Dashboard" },
      { src: agroRegister, title: "Community Registration" },
      { src: agroLogin, title: "User Login Portal" },
    ],
    github: "https://github.com/rehansnair21/projectagro",
    live: null,
  },
  {
    title: "Pet Supplies – E-Commerce Website",
    short: "Pet Supplies",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    description: "An e-commerce platform for browsing and purchasing pet-related products.",
    features: [
      "User registration and login",
      "Product search",
      "Shopping cart",
      "Wishlist",
      "Razorpay payment integration",
      "Order management",
    ],
    image: petHome,
    images: [
      { src: petHome, title: "PetStore Home & Categories" },
      { src: petProducts, title: "Product Catalog & Filters" },
      { src: petCart, title: "Shopping Cart & Items" },
      { src: petPayment, title: "Razorpay Checkout Gateway" },
      { src: petCheckout, title: "Order Checkout & Summary" },
    ],
    github: "https://github.com/rehansnair21/pet-",
    live: null,
  },
  {
    title: "Movie Lens – Movie Review System",
    short: "Movie Lens",
    tech: ["WordPress"],
    description:
      "A responsive movie review website featuring movie reviews, ratings, user feedback, customized themes, and plugins.",
    features: ["Movie reviews", "Ratings", "User feedback", "Customized themes and plugins"],
    image: movieLensHome,
    images: [
      { src: movieLensHome, title: "MovieLens Reviews & Ratings" },
      { src: movieLensRegistration, title: "Member Registration Portal" },
      { src: movieLensAbout, title: "About Us & Vision" },
    ],
    github: null,
    live: null,
  },
];

export const education = [
  {
    degree: "Integrated Master of Computer Applications",
    institution: "Amal Jyothi College of Engineering (Autonomous)",
    duration: "2022 – 2027 (Expected)",
    scoreLabel: "CGPA",
    score: "7.08/10",
  },
  {
    degree: "Higher Secondary (Plus Two)",
    institution: "Board of Higher Secondary Education, Kerala",
    duration: "2020 – 2022",
    scoreLabel: "Percentage",
    score: "93%",
  },
  {
    degree: "Class X",
    institution: "Central Board of Secondary Education (CBSE)",
    duration: "2019 – 2020",
    scoreLabel: "Percentage",
    score: "71%",
  },
];

export const certifications = [
  {
    title: "Microsoft Cybersecurity Analyst",
    provider: "Microsoft & Coursera",
    date: "February 2026",
    id: "KSB6YASUVZZF",
    image: msCybersecurityImg,
    verifyUrl: "https://coursera.org/verify/professional-cert/KSB6YASUVZZF",
    pdfUrl: "/certificates/microsoft-cybersecurity-analyst.pdf",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    provider: "SCRUMstudy – VMEdu, Inc.",
    date: "February 2025",
    id: "1068995",
    image: scrumCertImg,
    verifyUrl: "https://www.scrumstudy.com/certification/verify?id=1068995",
  },
];
