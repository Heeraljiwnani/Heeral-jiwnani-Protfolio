export const portfolioData = {
    personalInfo: {
        name: "Heeral Jiwnani",
        title: "Full Stack Developer & AI Enthusiast",
        email: "heeral.jiwnani2024@gmail.com",
        phone: "",
        location: "Bhopal, India",
        socials: {
            github: "https://github.com/heeraljiwnani", // inferred
            linkedin: "https://linkedin.com/in/heeraljiwnani", // inferred
            leetcode: "https://leetcode.com/heeraljiwnani", // inferred
            hackerrank: "https://hackerrank.com/heeraljiwnani", // inferred
            portfolio: "https://heeraljiwnani.com"
        }
    },
    education: [
        {
            school: "St. Mary's Sr. Sec. School",
            location: "Udaipur, India",
            degree: "Secondary School (10th Grade)",
            dates: "2022",
            gpa: "10 CGPA"
        },
        {
            school: "Shiv Jyoti International School",
            location: "Kota, India",
            degree: "Higher Secondary (12th Grade)",
            dates: "2024",
            gpa: "84.6%"
        },
        {
            school: "Vellore Institute of Technology (VIT)",
            location: "Bhopal, India",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            dates: "September 2024 – July 2028",
            gpa: "8.90 / 10.0"
        }
    ],
    skills: {
        languages: ["TypeScript", "Node", "Python", "HTML", "CSS", "JavaScript", "C", "C++"],
        frameworks: ["React", "FastAPI", "TensorFlow", "Scikit-learn", "Next.js", "TailwindCSS"],
        database_cloud: ["Supabase", "MongoDB", "PostgreSQL", "MySQL"],
        tools: ["GitLab", "Cursor", "RESTful APIs", "Git", "Docker"]
    },
    experience: [
        {
            company: "KiwiCompute",
            role: "Software Development Intern – Full Stack",
            location: "Remote, India",
            dates: "October 2025 – Present",
            description: [
                "Worked on frontend development using React.js, where I built and updated UI components and helped structure basic page layouts as per project requirements.",
                "Integrated frontend screens with existing backend APIs, ensuring data was fetched, displayed, and updated correctly within the application.",
                "Made multiple UI improvements related to styling, responsiveness, and accessibility, focusing on improving usability across different screen sizes.",
                "Assisted in identifying and fixing frontend bugs, debugging issues during development, and testing changes before deployment.",
                "Used Git and Gitlab for version control, regularly creating commits, working with branches, and raising pull requests under team guidance.",
                "Collaborated with senior developers by following code reviews, understanding feedback, and adapting to standard development workflows used in production environments."
            ]
        }
    ],
    projects: [
        {
            name: "RestrauBuddy",
            subtitle: "AI-Powered Restaurant Management Ecosystem",
            dates: "February 2026 – Present",
            image: "/images/restraubuddy.png",
            tags: ["React 19", "TypeScript", "Tailwind CSS", "Flask", "Python", "Machine Learning", "Supabase"],
            links: {
                demo: "https://restraubuddy.heeraljiwnani.com",
                github: "https://github.com/Heeraljiwnani/RestrauBuddy.git"
            },
            description: [
                "Developed RestrauBuddy, an end-to-end, AI-powered restaurant management ecosystem to help owners predict demand, minimize waste, and streamline daily operations.",
                "Built a premium React 19 dashboard with TypeScript, Vite, and Tailwind CSS, featuring real-time demand visualization, a sleek dark-themed interface, and multilingual support.",
                "Created a Flask-based Python API backend to serve continuous machine learning predictions to the frontend.",
                "Implemented the machine learning core with data generation scripts and Random Forest model training pipelines for accurate demand forecasting.",
                "Developed demand forecasting features to predict exact dish quantities based on historical trends, festivals, and customer footfall.",
                "Enabled inventory optimization with automated insights to help maintain the perfect stock balance.",
                "Integrated real-time synchronization using Supabase for data persistence and the Flask API for AI insights."
            ]
        },
        {
            name: "OptaNex",
            subtitle: "Complete Eye Care Platform",
            dates: "December 2025 – Present",
            image: "/images/optanex.png",
            tags: ["PWA", "AI", "Supabase", "FastAPI"],
            links: {
                demo: "https://optanex.heeraljiwnani.com",
                github: "https://github.com/Heeraljiwnani/Project-Optanex"
            },
            description: [
                "Developed OptaNex, a Progressive Web App (PWA) designed to provide an accessible and low-cost solution for preliminary eye care screening and management.",
                "Implemented AI-based prescreening of retinal fundus images to detect potential indicators of Diabetic Retinopathy (DR) and Age-related Macular Degeneration (AMD), supporting early awareness and referral.",
                "Integrated essential vision assessment tools including a digital Snellen Chart for visual acuity testing and an Ishihara-based color vision test for identifying color vision deficiency.",
                "Designed modules to track vision power trends, securely store and manage eye prescriptions, and maintain a chronological record of eye treatments and medical history.",
                "Built backend functionality using Supabase for authentication, data storage, and real-time synchronization across modules.",
                "Deployed AI inference services using FastAPI, enabling real-time prediction results within the application.",
                "Emphasized accessibility, data privacy, and usability, ensuring compliance with DPDP Act 2023 and suitability for home and community-level use."
            ]
        },
        {
            name: "AlgoWiz",
            subtitle: "Smart Algorithm Visualizer",
            dates: "January 2025 – April 2025",
            image: "/images/algowiz.png",
            tags: ["React", "Three.js", "SCSS", "Algorithms"],
            links: {
                demo: "https://algowiz.heeraljiwnani.com",
                github: "https://github.com/Heeraljiwnani/AlgoViz-Your-one-stop-solution-for-Algorithm-visiualisation"
            },
            description: [
                "Developed an interactive algorithm visualizer to demonstrate sorting, pathfinding, and AI algorithms with real-time animations, improving conceptual clarity of core DSA topics.",
                "Built a modern Glassmorphism-based UI with full dark/light theme support, focusing on responsiveness, smooth transitions, and user experience.",
                "Integrated Three.js to render a dynamic 3D particle background, showcasing advanced frontend rendering and visual performance optimization.",
                "Implemented visualizations for BFS, DFS, Dijkstra, A*, and multiple sorting algorithms with step-by-step execution control.",
                "Structured the application using React component architecture and SCSS, ensuring scalability and clean separation of logic and UI.",
                "Designed the project with production-ready practices, including reusable components, modular styling, and a detailed README, demonstrating strong attention to code quality, documentation, and developer experience."
            ]
        }
    ],
    volunteer: [
        {
            role: "Event Management Lead",
            organization: "Mozilla Firefox VIT",
            dates: "October 2025 - Present",
            description: "Coordinate all aspects events for Club, including planning, scheduling, logistics, and execution, ensuring each event runs smoothly engaging participants."
        },
        {
            role: "Event Management Lead",
            organization: "NeuroByte Club",
            dates: "December 2025 - Present",
            description: "Leading event management initiatives, coordinating planning, logistics, and execution for club activities to drive student engagement."
        }
    ]
};
