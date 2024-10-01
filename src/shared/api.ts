
import frontend from "../versions/v2/assets/frontend.svg";
import backend from "../versions/v2/assets/backend.svg";
import fullstack from "../versions/v2/assets/fullstack.svg";
import uiux from "../versions/v2/assets/uiux.svg";

export const courses = [
    {
      id: "graphic-design",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Graphic Design",
      rating:4.5,
      desc:`
      This program typically cover topics such as design principles, typography, layout, color theory, and software proficiency in tools like Adobe Photoshop, Illustrator, and InDesign.
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"12 Weeks",
      modules: [
        {
        topic: "Fundermentals of Graphic Design",
        desc: `
          
The fundamentals of graphic design encompass essential principles and concepts guiding the creation of visually compelling designs. 
These include typography, color theory, layout and composition, visual hierarchy, whitespace usage, grid systems, 
image selection and manipulation, brand identity consistency, user experience (UX) design, and proficiency in graphic design software.
 Mastering these fundamentals enables designers to create effective designs across different mediums, ensuring readability, coherence, and visual appeal.
        `,
      },
      {
        topic: "Design techniques",
        desc: `
        
Design techniques are methods used by designers to create visually appealing and effective designs. They include principles such as hierarchy, balance, contrast, repetition, alignment, proximity, color harmonies, grid systems, typography pairing, whitespace utilization, visual storytelling, and responsive design. 
By implementing these techniques, designers can organize content, enhance readability, create visual interest, and effectively communicate messages to their audience.
        `,

      },
      {
        topic: "Branding and Corporate Identity",
        desc: "",
      }
    ]
    },
    {
      id:"software-development",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Software Development",
      desc:`
      Software developers use programming languages, frameworks, and tools to write, test and deploy code that meets specific functionality and design requirements. 
      The development process can vary depending on the methodology used, such as Agile, Waterfall, or DevOps. Software development encompasses a wide range of applications, from desktop and web applications to mobile apps, embedded systems, and enterprise-level software solutions. 
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"24 Weeks",
      rating: 5,
      modules: [
        {
          "topic": "HTML & CSS",
          "desc": "This course covers the fundamentals of HTML and CSS, the building blocks of web development. Learn how to structure your web pages with HTML and style them with CSS to create visually appealing and responsive websites. This course is perfect for beginners looking to get started with web development."
        },
        {
          "topic": "Introduction to Programming",
          "desc": "This course introduces the basics of programming, focusing on fundamental concepts such as variables, data types, control structures, functions, and object-oriented programming. Ideal for beginners, this course will help you develop problem-solving skills and provide a strong foundation in programming using a popular language like Python or JavaScript."
        },
        {
          "topic": "Introduction to Software Testing",
          "desc": "This course provides an overview of software testing principles and practices. Learn about different types of testing, including manual and automated testing, as well as techniques for writing effective test cases and ensuring software quality. This course is designed for those new to software testing or looking to enhance their understanding of testing methodologies."
        }
        
      ],
    },
    {
      id:"frontend-development",
      image_url: frontend.src,
      course: "Frontend Development",
      rating: 5,
      desc:`Frontend development focuses on creating the user interface and experience of web applications. 
      It involves using languages like HTML, CSS, and JavaScript to build interactive and responsive interfaces that users interact with directly.
      `,
      type:"Professional Certificate Short Course",
      level:"Intermediate",
      price:"Paid",
      duration:"24 Weeks",
      modules: [
        [
          {
            "topic": "JavaScript Frameworks I (React/Vue/Angular)",
            "desc": "This course explores popular JavaScript frameworks including React, Vue, and Angular. Learn how to build dynamic and interactive web applications using each framework's unique features and best practices. Ideal for developers looking to specialize in frontend development with modern JavaScript frameworks."
          },
          {
            "topic": "TypeScript",
            "desc": "This course introduces TypeScript, a strongly typed superset of JavaScript that compiles to plain JavaScript. Learn how to enhance code quality, maintainability, and developer productivity by leveraging TypeScript's static typing and advanced language features. Suitable for JavaScript developers transitioning to TypeScript."
          },
          {
            "topic": "JavaScript Frameworks II (Next TS)",
            "desc": "This course focuses on Next.js with TypeScript, a popular framework for building server-rendered React applications. Learn how to create optimized, scalable, and SEO-friendly web applications using Next.js's powerful features like server-side rendering and API routes. Recommended for developers familiar with React and TypeScript."
          },
          {
            "topic": "Advanced Software Testing",
            "desc": "This course delves into advanced topics in software testing, covering techniques for automated testing, performance testing, security testing, and continuous integration/continuous deployment (CI/CD). Learn how to implement comprehensive testing strategies to ensure high-quality software solutions."
          }
        ]
        
        
      ],
    },
    {
      id:"backend-development",
      image_url: backend.src,
      course: "Backend Development",
      rating: 4.5,
      desc:`
      Backend development involves creating the server-side logic and infrastructure of web applications. 
      It includes handling databases, server management, and building APIs using technologies like Node.js, Python/Django, or Java/Spring Boot.
      `,
      type:"Professional Certificate Short Course",
      level:"Intermediate",
      price:"Paid",
      duration:"16 Weeks",
      modules: [
        {
          "topic": "JavaScript Backend (Node/TypeScript/Express)",
          "desc": "This course dives into backend development using JavaScript with Node.js, TypeScript, and Express. Learn how to build robust and scalable server-side applications, handle routing, manage databases, and implement RESTful APIs. This course is perfect for those with a basic understanding of JavaScript looking to expand their skills into backend development."
        },
        {
          "topic": "PostgreSQL/MYSQL & Database Design",
          "desc": "This course covers relational database management systems (RDBMS) with a focus on PostgreSQL and MySQL. Learn how to design efficient and scalable databases, write complex SQL queries, and understand normalization and indexing. Ideal for aspiring database administrators and developers, this course provides a strong foundation in database concepts and practical skills."
        },
        {
          "topic": "JavaScript Backend Frameworks (Nest JS)",
          "desc": "This course introduces NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Learn how to leverage NestJS's modular architecture, TypeScript support, and powerful features to create enterprise-grade applications. This course is designed for developers with basic knowledge of Node.js and TypeScript who want to advance their backend development skills."
        }
        
      
      ],
    },
    {
      id:"full-stack-development",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: fullstack.src,
      desc:`
      Fullstack development combines both frontend and backend development skills. 
      Fullstack developers are proficient in both client-side and server-side technologies, allowing them to build complete, end-to-end web applications.
      `,
      type:"Professional Certificate Short Course",
      level:"Intermediate",
      rating: 5,
      price:"Paid",
      duration:"24 Weeks",
      modules: [
        {
          "topic": "Frontend Development with React & Typescript",
          "desc": "This course teaches you how to build modern, interactive web applications using React and TypeScript. Learn how to manage state, handle props, create reusable components, and implement TypeScript for type-safe coding. This course is ideal for developers who want to enhance their frontend skills with two of the most popular technologies in the industry."
        },
        {
          "topic": "Backend Development (Node/Express or Python/Django or Java/Spring Boot)",
          "desc": "This course explores backend development using three different technology stacks: Node.js with Express, Python with Django, and Java with Spring Boot. Learn how to build and manage server-side applications, handle databases, and implement RESTful APIs. This course is designed for developers who want to gain expertise in one or more backend technologies."
        },
        {
          "topic": "Advanced Software Testing",
          "desc": "This course covers advanced concepts in software testing, including automated testing frameworks, performance testing, security testing, and continuous integration/continuous deployment (CI/CD) practices. Learn how to design and implement comprehensive testing strategies to ensure high-quality software. This course is ideal for experienced testers looking to deepen their skills."
        },
        {
          "topic": "Introduction to Cloud Computing",
          "desc": "This course provides an overview of cloud computing concepts and services. Learn about the different cloud service models (IaaS, PaaS, SaaS), cloud deployment models, and major cloud providers like AWS, Azure, and Google Cloud. Understand the benefits of cloud computing and how to leverage it for scalable and cost-effective solutions. This course is suitable for beginners and those new to cloud computing."
        }
        
        
      ],
    },
    {
      id:"software-engineering-fundamentals",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Software Engineering Fundamentals",
      rating: 3,
      desc:`Software engineering fundamentals cover essential concepts and practices in software development. 
      Topics include software lifecycle, requirements engineering, design principles, testing, version control, and project management.
      `,
      type:"Professional Certificate Short Course",
      level:"Intermediate",
      price:"Paid",
      duration:"24 Weeks",
      modules: [
        {
          "topic": "Software Development Life Cycle (SDLC)",
          "desc": "Understand the phases and methodologies of the software development life cycle. Topics include requirements, design, implementation, testing, deployment, maintenance, and various SDLC models like Waterfall, Agile, Scrum, and more."
        },
        {
          "topic": "Requirements Engineering",
          "desc": "Learn techniques for gathering, analyzing, and managing software requirements. Topics cover requirements elicitation, analysis, specification, validation, and management tools."
        },
        {
          "topic": "Software Design Principles and Patterns",
          "desc": "Understand software design principles and patterns to create scalable and maintainable software. Topics include SOLID principles, design patterns, and UML diagrams."
        },
        {
          "topic": "Version Control and Configuration Management",
          "desc": "Learn the importance of version control and configuration management in software development. Topics include Git, branching and merging strategies, CI/CD, and configuration management tools."
        },
        {
          "topic": "Software Testing and Quality Assurance",
          "desc": "Understand the principles and practices of software testing and quality assurance. Topics cover testing levels, types, TDD, BDD, and quality assurance processes and metrics."
        },
        {
          "topic": "Software Maintenance and Evolution",
          "desc": "Learn the strategies and best practices for maintaining and evolving software. Topics include types of maintenance, refactoring techniques, managing technical debt, and legacy system modernization."
        },
        {
          "topic": "Software Project Management",
          "desc": "Understand the principles of project management in software development. Topics cover project planning, estimation, risk management, resource management, agile project management, and monitoring and control."
        },
        {
          "topic": "Advanced Topics in Software Engineering",
          "desc": "Explore advanced topics and emerging trends in software engineering. Topics include DevOps, microservices architecture, cloud-native development, AI/ML in software engineering, and security and privacy considerations."
        },
        {
          "topic": "Ethical and Professional Issues in Software Engineering",
          "desc": "Understand the ethical and professional responsibilities of software engineers. Topics cover the code of ethics, professional responsibility, ethical issues, and legal and regulatory compliance."
        },
        {
          "topic": "Capstone Project",
          "desc": "Apply the knowledge and skills acquired throughout the course in a real-world project. Tasks include project planning, requirements gathering, system design, implementation, testing, documentation, and presentation."
        }
      ],
    },
    
    {
      id:"it-systems",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "IT Systems",
      rating: 5,
      desc:`
        
IT systems, short for Information Technology systems, refer to the interconnected components, hardware, software, and networks used to manage and process digital information within an organization or enterprise. These systems play a crucial role in supporting various business operations, including communication, data storage, processing, and decision-making. IT systems can range from basic setups like individual computers and local area networks (LANs) to complex infrastructures such as enterprise resource planning (ERP) systems, customer relationship management (CRM) software, and cloud computing platforms. They may include components like servers, storage devices, routers, switches, operating systems, databases, and applications. Effective IT systems are essential for enhancing productivity, efficiency, and competitiveness in today's digital age.
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"12 Weeks",
      modules: [],
    },
    {
      id:"website-design",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Website Design",
      desc:`
      
Website design refers to the process of creating the visual appearance, layout, and structure of a website. It involves various elements such as graphic design, typography, color schemes, navigation menus, and user interface components to create an engaging and user-friendly online experience. Website designers use tools like graphic design software, wireframing tools, and HTML/CSS to design and code the website's layout and aesthetics. The goal of website design is to not only create an attractive website but also to ensure that it is functional, easy to navigate, and effectively communicates the intended message or purpose of the site. Good website design considers factors such as user experience, responsiveness across different devices, and accessibility to ensure that the website meets the needs of its target audience and delivers a positive overall experience.
      
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"12 Weeks",
      modules: [],
    },
    {
      id:"ui-ux-design",
      image_url: uiux.src,
      course: "UI/UX Design",
      desc:`
      UI/UX design refers to the process of creating user interfaces (UI) and user experiences (UX) for digital products, such as websites, mobile apps, and software applications. UI design focuses on the visual elements and layout of the interface, including buttons, menus, typography, colors, and graphics, with the goal of making the interface aesthetically pleasing and easy to navigate. On the other hand, UX design concentrates on the overall experience of the user when interacting with the product, aiming to ensure that it is intuitive, efficient, and satisfying. This involves understanding user behaviors, conducting research, creating user personas, wireframing, prototyping, and testing designs to optimize usability and user satisfaction. Effective UI/UX design is crucial for enhancing user engagement, retention, and overall success of digital products.
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"12 Weeks",
      modules: [],
    },
    {
      id:"intro-generative-ai",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Introduction to Generative AI (ChatGPT)",
      desc:`
      
Generative AI, specifically referring to models like ChatGPT, is a branch of artificial intelligence focused on creating data or content, such as text, images, or music, that is original and coherent. These models are trained on large datasets and use algorithms to generate new content based on patterns and structures learned during training. ChatGPT, for instance, is a language model trained on vast amounts of text data from the internet, enabling it to understand and generate human-like text responses. Generative AI has applications in various fields, including natural language processing, content generation, creative arts, and even scientific research. However, it's important to note that while generative AI can produce highly realistic and coherent content, it may sometimes generate inaccurate or inappropriate outputs, requiring careful monitoring and ethical considerations in its use.
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"4 Weeks",
      modules: [],
    },
    {
      id:"office-productivity",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Office Productivity (Microsoft Office Suite & Google Suite",
      desc:`
      
Generative AI, specifically referring to models like ChatGPT, is a branch of artificial intelligence focused on creating data or content, such as text, images, or music, that is original and coherent. These models are trained on large datasets and use algorithms to generate new content based on patterns and structures learned during training. ChatGPT, for instance, is a language model trained on vast amounts of text data from the internet, enabling it to understand and generate human-like text responses. Generative AI has applications in various fields, including natural language processing, content generation, creative arts, and even scientific research. However, it's important to note that while generative AI can produce highly realistic and coherent content, it may sometimes generate inaccurate or inappropriate outputs, requiring careful monitoring and ethical considerations in its use.
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"12 Weeks",
      modules: [],
    },
    {
      id:"pc-fundamentals",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "PC Fundermentals",
      desc:`
      PC fundamentals provides an overview of the basic principles and components involved in operating and maintaining personal computers (PCs). Students learn about hardware components like the CPU, memory, storage, and peripherals, as well as software applications and operating systems. The course covers topics such as file management, security measures, basic maintenance tasks, networking basics, and backup and recovery procedures. By the end of the course, students gain the knowledge and skills needed to effectively use and troubleshoot personal computers in various settings.
      `,
      type:"Professional Certificate Short Course",
      level:"Beginner",
      price:"Paid",
      duration:"8 Weeks",
      modules: [],
    },
    {
      id:"intro-iot",
      image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      course: "Introduction to IoT",
      desc:`
      
IoT (Internet of Things) encompasses the understanding of interconnected devices that collect, 
exchange, and act on data via the internet, without requiring human intervention. IoT devices can range from everyday objects 
such as smart thermostats, wearable fitness trackers, and home appliances to industrial machinery and infrastructure components. 
These devices are equipped with sensors, processors, and communication modules that enable them to gather data, transmit it over networks,
 and respond to commands or triggers. The data collected by IoT devices can be analyzed to gain insights, optimize operations, 
 automate processes, and improve efficiency in various domains, including healthcare, agriculture, transportation, manufacturing, 
 and smart cities. However, along with its benefits, IoT also raises concerns related to security, 
privacy, and data management, which require careful consideration in its implementation and deployment.
      `,
      type:"Professional Certificate Short Course",
      level:"Intermediate",
      price:"Paid",
      duration:"4 Weeks",
      modules: [],
    },
    {
      id:"cloud-fundamentals",
        image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        course: "Cloud Computing Fundamentals",
        desc:`This course offers a comprehensive introduction to cloud computing with Amazon Web Services (AWS). Learn the core concepts of cloud computing, explore essential AWS services, and understand best practices for security, networking, storage, and cost management. Gain hands-on experience through practical labs and projects, preparing you to effectively deploy and manage cloud solutions using AWS.
        
        `,
        type:"Professional Certificate Short Course",
        level:"Intermediate",
        price:"Paid",
        duration:"12 Weeks",
        modules: [
            {
              "topic": "Introduction to Cloud Computing",
              "desc": "Understand the basics of cloud computing, including its definition, benefits, and service models (IaaS, PaaS, SaaS). Learn about different cloud deployment models such as public, private, hybrid, and multi-cloud."
            },
            {
              "topic": "Overview of AWS",
              "desc": "Get an introduction to Amazon Web Services (AWS), its global infrastructure, and core services. Understand how AWS provides scalable, reliable, and cost-effective cloud solutions."
            },
            {
              "topic": "AWS Identity and Access Management (IAM)",
              "desc": "Learn how to manage access to AWS resources securely using IAM. Topics include creating users, groups, and roles, and implementing policies to control permissions."
            },
            {
              "topic": "AWS Compute Services (EC2 and Lambda)",
              "desc": "Explore AWS compute services, including EC2 for virtual servers and Lambda for serverless computing. Learn how to launch and manage instances, configure auto-scaling, and deploy serverless functions."
            },
            {
              "topic": "AWS Storage Services (S3, EBS, and Glacier)",
              "desc": "Understand AWS storage solutions such as S3 for object storage, EBS for block storage, and Glacier for archival storage. Learn how to create and manage buckets, volumes, and backup policies."
            },
            {
              "topic": "AWS Networking (VPC, Route 53, and CloudFront)",
              "desc": "Learn about AWS networking services, including VPC for creating isolated networks, Route 53 for DNS management, and CloudFront for content delivery. Understand how to configure and manage these services to optimize network performance."
            },
            {
              "topic": "AWS Databases (RDS, DynamoDB, and Redshift)",
              "desc": "Explore AWS database services, including RDS for relational databases, DynamoDB for NoSQL databases, and Redshift for data warehousing. Learn how to set up, manage, and scale databases on AWS."
            },
            {
              "topic": "AWS Security and Compliance",
              "desc": "Understand the security and compliance best practices on AWS. Learn about AWS security services, such as AWS Shield, WAF, and Inspector, and how to implement security measures to protect your cloud resources."
            },
            {
              "topic": "Monitoring and Logging (CloudWatch and CloudTrail)",
              "desc": "Learn how to monitor and log your AWS resources using CloudWatch and CloudTrail. Understand how to set up monitoring dashboards, alarms, and audit logs to ensure visibility and accountability."
            },
            {
              "topic": "AWS Management Tools (CloudFormation and AWS Config)",
              "desc": "Discover AWS management tools like CloudFormation for infrastructure as code and AWS Config for resource inventory and configuration management. Learn how to automate resource provisioning and ensure compliance."
            },
            {
              "topic": "Cost Management and Optimization",
              "desc": "Understand AWS pricing models and strategies for cost management and optimization. Learn how to use tools like AWS Cost Explorer, Budgets, and Trusted Advisor to manage and reduce your AWS spending."
            },
            {
              "topic": "Hands-On Labs and Project",
              "desc": "Apply your knowledge through hands-on labs and a final project. Deploy and manage a real-world application on AWS, incorporating compute, storage, networking, and security services to demonstrate your cloud computing skills."
            }
        ],
      },
      {
        id:"introduction-to-programming",
        image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        course: "Introduction to Software Programming",
        desc:`This course provides a comprehensive introduction to programming, ideal for beginners. 
        Learn core programming concepts, control structures, data structures, and secure coding practices. Choose between Python or C/C++ to write efficient and maintainable programs. By the end of the course, you'll be able to build simple applications and have a solid foundation in programming.
        
        `,
        type:"Professional Certificate Short Course",
        level:"Beginner",
        price:"Paid",
        duration:"12 Weeks",
        modules: [
          [
            {
              "topic": "Introduction to Programming Concepts",
              "desc": "This module introduces fundamental programming concepts such as algorithms, flowcharts, and pseudocode. Learn the basics of writing and understanding simple programs, focusing on problem-solving and logical thinking."
            },
            {
              "topic": "Getting Started with Python Programming",
              "desc": "In this module, learn how to set up the Python development environment and write your first Python programs. Topics include basic syntax, variables, data types, and simple input/output operations. Ideal for those choosing Python as their programming language."
            },
            {
              "topic": "Getting Started with C/C++ Programming",
              "desc": "This module covers setting up the development environment for C/C++ and writing your first programs. Learn the basics of syntax, variables, data types, and simple input/output operations. Ideal for those choosing C/C++ as their programming language."
            },
            {
              "topic": "Control Structures and Flow Control",
              "desc": "Understand and implement control structures such as loops and conditional statements. Learn how to control the flow of your programs efficiently and avoid common pitfalls in logic and syntax."
            },
            {
              "topic": "Functions and Modular Programming",
              "desc": "Learn how to create and use functions to make your code more modular, reusable, and organized. Understand the importance of functions, parameter passing, and return values in both Python and C/C++."
            },
            {
              "topic": "Data Structures and Algorithms",
              "desc": "Explore basic data structures such as arrays, lists, stacks, and queues. Learn fundamental algorithms for sorting and searching, and understand how to implement them efficiently in your chosen programming language."
            },
            {
              "topic": "Object-Oriented Programming (OOP)",
              "desc": "Understand the principles of object-oriented programming, including classes, objects, inheritance, and polymorphism. Learn how to apply OOP concepts to write more structured and maintainable code."
            },
            {
              "topic": "Error Handling and Debugging",
              "desc": "Learn techniques for error handling and debugging your programs. Understand common programming errors and how to resolve them, ensuring your code runs smoothly and securely."
            },
            {
              "topic": "File Handling and I/O Operations",
              "desc": "Understand how to work with files for reading and writing data. Learn the basics of file handling and input/output operations to manage data in your programs effectively."
            },
            {
              "topic": "Introduction to Secure Coding Practices",
              "desc": "Learn the basics of writing secure code to protect your programs from vulnerabilities. Understand common security issues and best practices for writing secure and robust programs."
            },
            {
              "topic": "Project: Building a Simple Application",
              "desc": "Apply what you've learned by building a simple application in your chosen programming language. This project will help you integrate various programming concepts and demonstrate your ability to write efficient and secure programs."
            }
          ]
          
        ],
      },
      {
        id:"web-analytics",
        image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        course: "Web Analytics",
        desc:`
        
        `,
        type:"Professional Certificate Short Course",
        level:"Intermediate",
        price:"Paid",
        duration:"12 Weeks",
        modules: [],
      },
      {
        id:"digital-marketing",
        image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        course: "Digital Marketing",
        desc:`
        
        `,
        type:"Professional Certificate Short Course",
        level:"Beginner",
        price:"Paid",
        duration:"12 Weeks",
        modules: [],
      },
      {
        id:"content-management-wordpress",
        image_url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        course: "Content Management (Wordpress)",
        desc:`
        
        `,
        type:"Professional Certificate Short Course",
        level:"Beginner",
        price:"Paid",
        duration:"12 Weeks",
        modules: [],
      }
  ]