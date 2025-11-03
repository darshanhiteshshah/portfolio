export const projects = [
  {
    id: 1,
    title: "Virtual Stock Market Simulator",
    subtitle: "MERN Stack",
    duration: "Oct 2024 – Present",
    startMonth: "Oct",
    startYear: 2024,
    status: "In Progress",
    description: "Developed a full-stack trading simulation platform enabling virtual stock trading with live BSE/NSE market data for 100+ stocks. Implemented JWT authentication, portfolio management, candlestick charts, stock screener, and price alerts. Real-time data integration with Yahoo Finance API.",
    longDescription: "A comprehensive virtual stock trading simulator built with the MERN stack. Users can trade virtual stocks with real-time market data, manage their portfolio, track transaction history, set price alerts, and analyze market trends using interactive charts. Features include user authentication, email notifications, and a responsive design for both desktop and mobile devices.",
    
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "REST APIs",
      "JWT Authentication",
      "Yahoo Finance API",
      "Candlestick Charts",
      "Real-time WebSocket"
    ],
    
    image: "/images/projects/stock-simulator.png",
    imageAlt: "Virtual Stock Market Simulator",
    
    liveDemo: "https://virtual-stock-simulator.vercel.app",
    github: "https://github.com/darshanhiteshshah/virtual-stock-simulator",
    
    features: [
      "Live BSE/NSE market data for 100+ stocks",
      "JWT-based authentication & authorization",
      "Portfolio management system",
      "Interactive candlestick charts",
      "Advanced stock screener with filters",
      "Real-time price alerts",
      "Transaction history tracking",
      "Email notifications",
      "Dark mode toggle",
      "Mobile responsive design"
    ],
    
    challenges: [
      "Integrating real-time market data APIs",
      "Implementing complex charting functionality",
      "Managing state for large portfolios",
      "Optimizing API calls and database queries"
    ],
    
    solutions: [
      "Implemented efficient API caching",
      "Used Chart.js for smooth chart rendering",
      "Optimized Redux state management",
      "Added database indexing for faster queries"
    ],
    
    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "MongoDB Atlas",
      url: "https://virtual-stock-simulator.vercel.app"
    },
    
    learnings: [
      "Real-time data handling and WebSocket integration",
      "Complex state management with Redux",
      "RESTful API design best practices",
      "Performance optimization techniques"
    ],
    
    category: "Full-Stack",
    type: "Web Application",
    complexity: "High",
    impact: "100+ users, 5000+ trades simulated"
  },

  {
    id: 2,
    title: "ChromaGen (Neural Networth)",
    subtitle: "ML + Web App",
    duration: "Sept 2024",
    startMonth: "Sept",
    startYear: 2024,
    status: "Completed",
    description: "Built a color palette generator that uses neural networks to suggest harmonious color schemes from text prompts. Integrated Flask ML backend with React frontend for live palette generation using OpenAI and TensorFlow models. Won Neural Networth Internal-Round 3.",
    longDescription: "ChromaGen is an AI-powered color palette generator that leverages machine learning to create harmonious color schemes based on user input. The application combines a React frontend with a Flask backend running ML models. Users can input descriptions or prompts and receive intelligent color palette suggestions with accessibility analysis.",
    
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "TensorFlow",
      "OpenAI API",
      "Python",
      "Tailwind CSS"
    ],
    
    image: "/images/projects/chromagen.png",
    imageAlt: "ChromaGen Color Palette Generator",
    
    github: "https://github.com/GDSC-CRCE-BnB-2025/Neural-Networth",
    
    features: [
      "AI-powered color palette generation",
      "Text-to-color scheme conversion",
      "Neural network-based color suggestions",
      "Flask ML backend integration",
      "Real-time palette preview",
      "OpenAI & TensorFlow integration",
      "Accessibility scoring",
      "Export to multiple formats"
    ],
    
    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "Cloud Storage"
    },
    
    learnings: [
      "Machine learning model integration",
      "Flask REST API development",
      "Neural network implementation",
      "Cross-platform ML deployment"
    ],
    
    category: "Machine Learning",
    type: "Web Application",
    complexity: "High",
    award: "Internal-Round 3 Winner"
  },

  {
    id: 3,
    title: "Food Ordering & Delivery Platform",
    subtitle: "MERN Stack",
    duration: "July 2024",
    startMonth: "July",
    startYear: 2024,
    status: "Completed",
    description: "Built a full-stack food delivery app with real-time order tracking, authentication, and cart management for restaurants and menu items. Developed RESTful APIs with <200ms response time, JWT-based authentication, and Context API-driven responsive frontend.",
    longDescription: "A comprehensive food ordering and delivery platform similar to Zomato/Swiggy. Features include restaurant browsing, menu management, cart operations, order tracking, user authentication, and responsive UI. The backend implements efficient APIs with performance optimization.",
    
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Context API"
    ],
    
    image: "/images/projects/food-delivery.png",
    imageAlt: "Food Ordering Platform",
    
    github: "https://github.com/darshanhiteshshah/tcet1",
    
    features: [
      "Restaurant browsing & filtering",
      "Menu management system",
      "Real-time order tracking",
      "JWT authentication system",
      "Cart management with Context API",
      "RESTful APIs (<200ms response)",
      "Restaurant dashboard",
      "Responsive design"
    ],
    
    deployment: {
      frontend: "Vercel",
      backend: "Render"
    },
    
    learnings: [
      "Performance optimization in API design",
      "Real-time tracking implementation",
      "State management best practices",
      "Database schema design for multi-entity systems"
    ],
    
    category: "Full-Stack",
    type: "Web Application",
    complexity: "Medium-High"
  },

  {
    id: 4,
    title: "Chatbot using NLP and TensorFlow",
    subtitle: "Python, NLTK, TensorFlow",
    duration: "Jun 2024",
    startMonth: "Jun",
    startYear: 2024,
    status: "Completed",
    description: "Built an intelligent chatbot that classifies user intents using neural networks and responds via real-time APIs for weather, jokes, and news. Implemented tokenization, lemmatization, and Bag-of-Words for natural language understanding.",
    longDescription: "An intelligent conversational chatbot powered by machine learning. The system processes user input using NLP techniques, classifies intents, and provides responses from various external APIs. Users can get weather updates, jokes, news, and have general conversations.",
    
    technologies: [
      "Python",
      "NLTK",
      "TensorFlow",
      "NLP",
      "Flask API",
      "External APIs"
    ],
    
    image: "/images/projects/chatbot-nlp.png",
    imageAlt: "NLP Chatbot",
    
    github: "https://github.com/darshanhiteshshah/cbtp",
    
    features: [
      "Intent classification with neural networks",
      "Tokenization & lemmatization",
      "Bag-of-Words model",
      "Real-time API integration (weather, jokes, news)",
      "Natural language understanding",
      "TensorFlow-powered responses",
      "Extensible conversation framework"
    ],
    
    learnings: [
      "NLP fundamentals and text processing",
      "Neural network training for classification",
      "API integration for dynamic responses",
      "Machine learning model deployment"
    ],
    
    category: "Machine Learning",
    type: "Chatbot",
    complexity: "Medium"
  }
];
