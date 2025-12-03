import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {


    nav: {
      Companyname: "Al Tawafuq Advance",
      Companyname2: "Contracting Company",
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
      career: "Career",
      certifications: "Certifications",
      joinUs: "Join Us",
    },
    // ...rest of your content

    slides: [
      {
        heading: "Building the Future",
        text: "Trusted Partner in General Contracting & Compliance",
      },
      {
        heading: "Shaping Modern Infrastructure",
        text: "Delivering excellence in every project we build",
      },
      {
        heading: "Innovation & Sustainability",
        text: "Creating value through advanced construction solutions",
      },
    ],
    highlightWords: [
      "Building",
      "Infrastructure",
      "Innovation",
      "Our Services",
    ],
    btnServices: "Our Services",
    btnProjects: "View Projects",
    whoWeAre: "Who We Are",
    whoWeAreText:
      "Crafting structures that last a lifetime. We combine advanced materials, resilient design, and sustainable practices to create innovative and durable projects. With decades of expertise, our team ensures quality and precision at every stage.",
    services: "Our Services",
    projects: "Featured Projects",
    headingstats: "We are a Leading Saudi Contracting Group",
    stats1: "Projects Delivered",
    stats2: "Production Plants",
    stats3: "Clients",
    stats4: "",
    stats5: "",
    stats6: "",
    serviceh1: "Our Services",
    servicetitle1: "General Contracting",
    servicetitle2: "Civil Works",
    servicetitle3: "Structural Works",
    servicedesc1:
      "Comprehensive solutions for commercial, residential, and industrial projects.",
    servicedesc2:
      "Roads, foundations, concrete structures, and infrastructure development.",
    servicedesc3:
      "Steel fabrication, building frameworks, and structural reinforcement.",
    servicebtn: "Read More",
    projecth1: "",
    projecttitle1: "",
    projecttitle2: "",
    projecttitle3: "",
    projectddesc1: "",
    projectddesc2: "",
    projectddesc3: "",
    projectbtn: "",

    whyChooseUs: {
      title: "WHY CHOOSE US",
      items: [
        {
          icon: "fas fa-cogs",
          title: "Cutting-Edge Solutions",
          desc: "Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily.",
        },
        {
          icon: "fas fa-users-cog",
          title: "Expert Team",
          desc: "Our experts bring decades of combined experience to deliver innovative solutions while keeping quality at the forefront.",
        },
        {
          icon: "fas fa-clock",
          title: "On-Time Delivery",
          desc: "We pride ourselves on delivering projects on time, every time, with unmatched precision and dedication.",
        },
      ],
    },

     



    testimonials: {
      title: "TESTIMONIALS",
      subtitle: "What our clients say",
      reviews: [
        {
          id: 1,
          name: "Saleh Isa Hamd",
          role: "Corporate Client",
          image: "s1.jpg",
          review:
            "Working with Al Tawafuq Advance Contracting Company was a seamless experience. Their team was always available to answer questions, provide updates, and ensure everything went smoothly",
        },
        {
          id: 2,
          name: "Abu Fahdi Qanai",
          role: "Business Owner",
          image: "s2.jpg",
          review:
            "Al Tawafuq Advance Contracting Company is one of the best partners we’ve worked with. Their industrial facility construction for our plant was executed flawlessly, with strict adherence to safety and international standards",
        },
        {
          id: 3,
          name: "Abu hamza Ghamdi",
          role: "Commercial Client",
          image: "s3.jpg",
          review:
            "The cladding work done by Al Tawafuq Advance Contracting Company was truly exceptional. Our building’s façade has been completely transformed with a modern, professional look that stands out",
        },
        {
          id: 4,
          name: "Abdullah Al-Farouq",
          role: "Business Owner",
          image: "s4.jpg",
          review:
            "We recently hired Al Tawafuq Advance Contracting Company for galvanised steel works, and the results were outstanding. The team delivered structures that are not only strong and durable but also resistant to rust and weather conditions",
        },
      ],
    },

    aboutPage: {
      heroTitle: "About Us",
      heroSubtitle: "Building with Excellence & Integrity",
      whoWeAre: {
        title: "Who We Are",
        text: "Crafting structures that last a lifetime. We combine advanced materials, resilient design, and sustainable practices to create innovative and durable projects. With decades of expertise, our team ensures quality and precision at every stage.",
      },
      section: {
        label: "ABOUT US",
        title: "Building trust, delivering excellence",
        text: "At Al Tawafuq Advance Contracting Company, we specialize in delivering high-quality construction solutions tailored to our clients’ unique needs. With years of expertise in civil works, MEP services, and project management, we are committed to innovation, safety, and on-time delivery.",
      },
      detail: {
        title: "Shaping Tomorrow with Excellence",
        text: "With years of industry expertise, our company has been at the forefront of delivering innovative construction solutions. From civil works to MEP and interior fit-outs, we are committed to exceeding expectations. Our approach combines cutting-edge technology, sustainable practices, and a strong focus on safety and quality.",
      },
      missionVision: [
        {
          icon: "fas fa-bullseye",
          title: "Our Mission",
          text: "To deliver innovative, safe, and sustainable construction solutions that exceed client expectations while creating lasting value for communities.",
        },
        {
          icon: "fas fa-eye",
          title: "Our Vision",
          text: "To be recognized as a leader in construction excellence — where innovation, quality, and trust drive every project we undertake.",
        },
      ],
      values: {
        title: "Our Core Values",
        items: [
          {
            icon: "fas fa-hard-hat",
            title: "Safety First",
            text: "We prioritize health, safety, and environment at every step.",
          },
          {
            icon: "fas fa-check-circle",
            title: "Quality Assurance",
            text: "Commitment to excellence through strict QA/QC standards and meticulous execution.",
          },
          {
            icon: "fas fa-handshake",
            title: "Client Trust",
            text: "Building long-term relationships through honesty, transparency, and collaboration.",
          },
        ],
      },
      members: {
        title: "Our Members",
        items: [
          {
            image: "mm.jpg",
            name: "Muhammad Sharif Gamdi",
            role: "Director — 20+ years of leadership in construction.",
          },
          {
            image: "mm6.jpg",
            name: "Muhammad Saeed",
            role: "Project Manager — Ensures timely delivery with quality.",
          },
          {
            image: "mm8.jpg",
            name: "Muhammad Shakir Qureshi",
            role: "Company Supervisor — Specialist in sustainable building designs.",
          },
        ],
      },
    },

    servicesPage: {
      heroTitle: "Our Services",
      heroSubtitle:
        "Delivering Excellence in Al Tawafuq Advance Contracting Company",
      sectionTitle: "What We Offer",
    },

    servicesData: [
      {
        id: 1,
        title: "Cladding Works",
        description:
        "Modern façade cladding solutions using aluminum, glass, stone, and composite panels to enhance durability and aesthetic appeal.",
        detail:
        "At Al Tawafuq Advance Contracting Company, our Cladding Works service transforms buildings into modern landmarks by combining style, safety, and performance. We specialize in aluminum composite panels, glass, stone, and other high-quality cladding systems that meet international standards. Each project is executed with precision engineering to ensure weather resistance, thermal efficiency, and long-term durability, while providing an elegant architectural appearance for commercial, residential, and industrial structures.",      },
      {
        id: 2,
        title: "Civil Works",
        description:
          "Roads, foundations, concrete structures, and infrastructure development.",
        detail:
          "Al Tawafuq Advance Contracting Company, our Civil Works division forms the foundation of everything we build. With years of expertise and a strong commitment to engineering excellence, we deliver infrastructure that is safe, sustainable, and designed to last Our civil works services cover a broad range of construction activities, including earthworks, foundations, concrete structures, roads, drainage systems, and utility networks. Each project is managed with precision, using modern techniques and high-quality materials that comply with international standards.By combining technical knowledge with innovative practices, Certification & Compliance Est delivers civil works solutions that not only meet client expectations but also contribute to the growth of communities and the development of sustainable urban environments.",
      },
      {
        id: 3,
        title: "Structural Works",
        description:
          "Steel fabrication, building frameworks, and structural reinforcement.",
        detail:
          "Al Tawafuq Advance Contracting Company, we recognize that structural integrity is at the heart of every successful project. Our Structural Works division provides comprehensive solutions that ensure buildings and infrastructure are not only functional but also safe, durable, and built to withstand the test of time.Our expertise covers steel fabrication, reinforced concrete structures, load-bearing frameworks, and structural reinforcements across residential, commercial, and industrial projects. Using advanced engineering methods and internationally approved materials, we guarantee that every project meets the highest standards of quality and compliance.",
      },
      {
        id: 4,
        title: "MEP Services",
        description:
          "Mechanical, electrical, and plumbing works with full compliance.",
        detail:
          "Al Tawafuq Advance Contracting Company, our Mechanical, Electrical, and Plumbing (MEP) Services are an essential part of delivering fully integrated and functional building solutions. We understand that MEP systems form the backbone of modern facilities, ensuring safety, comfort, and operational efficiency.Our scope of work includes HVAC systems, electrical installations, lighting, fire protection systems, water supply, drainage, and plumbing networks. Each system is designed and executed with strict adherence to international standards and local regulations, ensuring both reliability and compliance.",
      },
      {
        id: 5,
    title: "Interior Fit-outs",
    description: "Customized design and build solutions for offices, retail, and residential. same goes with this one",
    detail:
      "Al Tawafuq Advance Contracting Company, we provide Interior Fit-out services that transform empty spaces into functional, elegant, and customized environments. Whether it is corporate offices, retail outlets, or residential interiors, our fit-out solutions are tailored to reflect the unique identity and requirements of our clients.Our expertise covers partitioning, flooring, ceilings, lighting, HVAC integration, joinery, and custom finishes. We work closely with architects, designers, and clients to ensure every detail — from concept to completion — meets the highest standards of quality and craftsmanship.",
      },

      {
        id: 6,
        title: "Maintenance Services",
        description:
          "Preventive and corrective maintenance for long-term durability.",
        detail:
          "Al Tawafuq Advance Contracting Company, we understand that construction does not end at project handover. To ensure long-term durability and performance, we provide comprehensive Maintenance Services tailored to the unique needs of each client. Our goal is to protect your investment, minimize downtime, and extend the lifespan of assets.We offer both preventive and corrective maintenance, covering mechanical, electrical, plumbing, structural, and civil systems. Preventive programs are designed to identify potential issues before they arise, reducing the risk of costly repairs and operational interruptions. Corrective maintenance, on the other hand, ensures that any unexpected faults are addressed quickly and effectively.",
      },
    ],

    projectsPage: {
      heroTitle: "Our Projects",
      heroSubtitle: "Delivering Excellence Across All Sectors",
      sectionTitle: "Featured Projects",
    },
    projectsData: [
      {
        id: 1,
        title: "Innovative Cladding Works",
        description:
          "We provide advanced cladding solutions that enhance both the functionality and aesthetics of buildings. Our expertise covers aluminum, glass, stone, and composite cladding systems designed to meet international safety and quality standards. Each cladding project is executed with precision engineering, ensuring durability, weather resistance, and modern architectural appeal. Whether for commercial towers, residential complexes, or industrial facilities, our cladding works transform structures into iconic landmarks that combine beauty with performance.",
        detail:
          "High-quality cladding projects delivering durability, safety, and modern design.",
        sector: "Cladding",
      },

      {
  id: 2,
  title: "Precision Coring Solutions",
  description:
    "Our coring work services deliver precise, efficient, and safe solutions for a wide range of construction and infrastructure projects. We specialize in concrete coring, wall and slab openings, and structural modifications required for plumbing, electrical, HVAC, and fire protection systems. Using advanced diamond drilling techniques and state-of-the-art equipment, we ensure accuracy without compromising the strength and integrity of the structure. Our team is skilled in handling projects across commercial, industrial, and residential sectors, from small openings to large-scale coring works. We emphasize dust-free, vibration-controlled operations, enabling work in sensitive environments such as hospitals, high-rise buildings, and operational facilities. With a strong commitment to quality, safety, and timely delivery, our coring solutions support seamless integration of essential services while adhering to international construction standards. Whether for renovations, retrofitting, or new developments, our expertise ensures durable, cost-effective, and highly reliable results.",
  detail:
    "High-precision concrete coring and structural modifications with advanced techniques.",
  sector: "Civil Works",
},

  {
    id: 3,
    title: "Driving Industrial Growth",
    description:
      "Our industrial projects include warehouses, factories, and production facilities that support productivity and economic growth. We deliver facilities built with durability and compliance in mind, using advanced engineering practices and high-quality materials. Each project ensures long-term performance, safety, and sustainability while meeting international standards.",
    detail:
      "Large-scale industrial facilities and infrastructure developed to global standards.",
    sector: "Industrial",
  },
      {
        id: 4,
        title: "Residential Complex Development",
        description:
          "At Al Tawafuq Advance Contracting Company, we specialize in delivering modern Residential Complex Developments that combine comfort, functionality, and sustainability. Our projects are designed to create vibrant communities where residents can enjoy safe, efficient, and aesthetically pleasing living spaces. From initial planning and architectural design to structural works, MEP installations, and interior finishes, we provide end-to-end solutions for residential complexes of all scales. Each development is executed with precision and strict adherence to international building standards, ensuring durability and long-term value.",
        detail:
          "Delivered a modern housing community with complete infrastructure and utilities.",
        sector: "Residential",
      },
      {
        id: 5,
        title: "Commercial Office Tower",
        description:
          "At Al Tawafuq Advance Contracting Company, we deliver Commercial Office Towers that stand as symbols of innovation, efficiency, and architectural excellence. Our expertise in high-rise construction enables us to create workplaces that meet the evolving demands of modern businesses while maintaining the highest standards of safety and sustainability. From foundation to finishing, our team manages every aspect of construction, including structural works, MEP systems, façade engineering, and interior fit-outs. Each tower is designed with functionality in mind, providing flexible floor plans, advanced building systems, and integrated technologies that enhance productivity and energy efficiency.",
        detail:
          "High-rise project executed with precision, modern design, and safety-first policies.",
        sector: "Commercial",
      },
      {
        id: 6,
        title: "Industrial Facility Construction",
        description:
          "At Al Tawafuq Advance Contracting Company, we play a vital role in shaping communities through the delivery of reliable and sustainable industrial facilities. Our expertise spans the design and construction of warehouses, factories, production plants, and utility infrastructure, all executed with a strong commitment to quality and safety. We understand that industrial facilities form the backbone of economic growth, enabling productivity, innovation, and improved quality of life. That is why our projects are built with precision, using advanced engineering practices and durable materials that ensure long-term performance.",
        detail:
          "Large-scale warehouse and production plant construction, adhering to global standards.",
        sector: "Industrial",
      },
      {
  id: 7,
  title: "Galvanized Works",
  description:
    "At Al Tawafuq Advance Contracting Company, our Galvanized Works services provide durable, long-lasting solutions for structural and industrial applications. We specialize in delivering high-quality galvanized steel products that combine strength, resilience, and corrosion resistance, ensuring that every project stands the test of time. Our expertise covers a wide range of applications, including structural frameworks, roofing systems, pipelines, fences, and industrial facilities. By using advanced hot-dip galvanization techniques, we guarantee superior protection against rust, harsh weather, and heavy usage, making our solutions ideal for both residential and commercial projects. Each project is executed with strict adherence to international safety and quality standards, ensuring precision, reliability, and efficiency at every stage.",
  detail:
    "High-quality galvanized steel works for structures, roofing, and industrial facilities with superior durability and corrosion resistance.",
  sector: "Galvanized",
},


      {
  id: 8,
  title: "Paint Works",
  description:
    "At Al Tawafuq Advance Contracting Company, we deliver professional paint works that enhance the beauty, durability, and protection of buildings. Our services include interior and exterior painting, industrial coatings, protective finishes, and decorative treatments tailored to each client’s needs. We use premium quality paints and advanced techniques to ensure smooth finishes, long-lasting color retention, and resistance to weathering. Whether it is residential, commercial, or industrial projects, our painting solutions are designed to combine aesthetics with functionality. Every project is executed with attention to detail, safety, and compliance with international standards.",
  detail:
    "High-quality interior, exterior, and industrial painting solutions that combine aesthetics and durability.",
  sector: "Paint",
},

      {
  id: 9,
  title: "AC Ducting Works",
  description:
    "At Al Tawafuq Advance Contracting Company, our AC Ducting Works services ensure efficient, reliable, and energy-saving air distribution systems for residential, commercial, and industrial buildings. We specialize in the design, fabrication, and installation of high-quality ducting systems using advanced materials and technologies. Our expertise covers HVAC ducting, insulation, and air balancing to guarantee maximum comfort, indoor air quality, and system performance. Each ducting project is delivered with precision engineering and strict compliance with international safety and environmental standards. By providing sustainable and cost-effective solutions, we help clients achieve long-term efficiency and comfort in their facilities.",
  detail:
    "Efficient and durable AC ducting systems designed and installed to meet international HVAC standards.",
  sector: "AC Ducting",
},

    
    ],


    certificationsPage: {
      heroTitle: "Our Achievements",
      heroSubtitle: "Excellence proven by global standards",
      gridtitle: "Certifications",
    },

    footer: {
      aboutTitle: "Al Tawafuq Advance Contracting Company",
      aboutTitleAr: "(شركة التوافق المتقدمة للمقاولات)",
      aboutDesc:
        "Delivering excellence in general contracting, civil works, and infrastructure projects across Saudi Arabia with a strong focus on quality, safety, and sustainability.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Certifications", path: "/certifications" },
        { name: "Careers", path: "/careers" },
      ],
      contactTitle: "Contact",
      address: "Jeddah – Al-Bawadi Dist., Saad bin Qais Street",
      address2: "Near Embassy of Algeria, Behind Honda Company",
      contact1: "Muhammad Sharif Gamdi",
      phone1: "+966556655605",
      contact2: "Muhammad Saeed",
      phone2: "+966535007727",
      contact3: "Muhammad Shakir Qureshi",
      phone3: "+966560302049",
      telefax: "Telefax: (Provide if available)",
      poBox: "PO Box: 10433 – Code: 21331",
      followUs: "Follow Us",
      rights: "All Rights Reserved",
    },

    ContactPage: {
      Title: "Contact Us",
      message1: "Message sent successfully!",
       message2:"Name",
        message3:"Email",
         message4:"Phone",
          message5:"Message",
           message6:"Send",
    },
CareersPage: {
      Title: "Careers",
      message1: "Message sent successfully!",
       message2:"Name",
        message3:"Email",
         message4:"apply",
    },
    LoginPage: {
      Title: "Login",
      message1: "Login successful!",
       message2:"Invalid credentials",
        message3:"Something went wrong",
         message4:"Username",
          message5:"Password",
           message6:"Don’t have an account?",
           message7:"Register",
    },
    RegisterPage: {
      Title: "Create Account",
      message1: "Username",
       message2:"Email",
        message3:"Password",
         message4:"Register",
          message5:"Registration failed",
           message6:"Something went wrong",
    },
    
  },


  ar: {
    nav: {
      Companyname: "المتقدمة للمقاولات",
      Companyname2: "شركة التوافق",
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "اتصل بنا",
      career: "الوظائف",
      certifications: "الشهادات",
      joinUs: "انضم إلينا",
    },
    // ...rest of your content

    slides: [
      {
        heading: "نبني المستقبل",
        text: "شريك موثوق في المقاولات العامة والامتثال",
      },
      {
        heading: "تشكيل البنية التحتية الحديثة",
        text: "نقدم التميز في كل مشروع نقوم بتنفيذه",
      },
      {
        heading: "الابتكار والاستدامة",
        text: "خلق قيمة من خلال حلول البناء المتقدمة",
      },
    ],
    highlightWords: ["نبني", "البنية", "الابتكار"],
    btnServices: "خدماتنا",
    btnProjects: "عرض المشاريع",
    whoWeAre: "من نحن",
    whoWeAreText:
      "بناء هياكل تدوم مدى الحياة. نحن ندمج المواد المتطورة، والتصاميم المتينة، والممارسات المستدامة لابتكار مشاريع مبتكرة ومرنة. وبخبرة تمتد لعقود، يضمن فريقنا الجودة والدقة في كل مرحلة.",
    services: "خدماتنا",
    projects: "المشاريع المميزة",
    headingstats: "نحن مجموعة مقاولات رائدة في المملكة العربية السعودية",
    stats1: "المشاريع المنجزة",
    stats2: "محطات الإنتاج",
    stats3: "العملاء",
    stats4: "",
    stats5: "",
    stats6: "",
    serviceh1: "خدماتنا",
    servicetitle1: "المقاولات العامة",
    servicetitle2: "الأعمال المدنية",
    servicetitle3: "الأعمال الإنشائية",
    servicedesc1: "حلول شاملة للمشاريع التجارية والسكنية والصناعية.",
    servicedesc2: "الطرق، الأساسات، الهياكل الخرسانية، وتطوير البنية التحتية.",
    servicedesc3: "تصنيع الفولاذ، هياكل المباني، والتعزيزات الإنشائية.",
    servicebtn: "اقرأ المزيد",

    whyChooseUs: {
      title: "لماذا تختارنا",
      items: [
        {
          icon: "fas fa-cogs",
          title: "حلول متطورة",
          desc: "الأفعال الصغيرة تصنع تأثيرات كبيرة. يبدأ الأمر وينتهي بالتزام كل موظف بممارسات عمل أكثر أماناً يومياً.",
        },
        {
          icon: "fas fa-users-cog",
          title: "فريق خبراء",
          desc: "يجلب خبراؤنا عقوداً من الخبرة المشتركة لتقديم حلول مبتكرة مع الحفاظ على الجودة في المقدمة.",
        },
        {
          icon: "fas fa-clock",
          title: "تسليم في الوقت المحدد",
          desc: "نفتخر بتسليم المشاريع في الوقت المحدد، في كل مرة، مع دقة والتزام لا مثيل لهما.",
        },
      ],
    },

    testimonials: {
      title: "آراء العملاء",
      subtitle: "ماذا يقول عملاؤنا",
      reviews: [
        {
  id: 1,
  name: "صالح عيسى حمد",
  role: "عميل شركات",
  image: "s1.jpg",
  review:
    "كان العمل مع شركة التوافق المتقدمة للمقاولات تجربة سلسة للغاية. كان فريقهم دائمًا متاحًا للإجابة على الأسئلة، وتقديم التحديثات، وضمان سير كل شيء بسلاسة.",
},
{
  id: 2,
  name: "أبو فهدي قناعي",
  role: "صاحب عمل",
  image: "s2.jpg",
  review:
    "شركة التوافق المتقدمة للمقاولات هي واحدة من أفضل الشركاء الذين عملنا معهم. تم تنفيذ مشروع إنشاء منشأتنا الصناعية بشكل مثالي، مع الالتزام الصارم بمعايير السلامة والمعايير الدولية.",
},
{
  id: 3,
  name: "أبو حمزة الغامدي",
  role: "عميل تجاري",
  image: "s3.jpg",
  review:
    "كان عمل الكسوة الذي قامت به شركة التوافق المتقدمة للمقاولات متميزًا حقًا. لقد تحول واجهة مبنانا بالكامل إلى مظهر حديث واحترافي يبرز بوضوح.",
},
{
  id: 4,
  name: "عبد الله الفاروق",
  role: "صاحب عمل",
  image: "s4.jpg",
  review:
    "لقد قمنا مؤخرًا بتوظيف شركة التوافق المتقدمة للمقاولات لأعمال الفولاذ المجلفن، وكانت النتائج مذهلة. قدم الفريق هياكل قوية ومتينة ومقاومة للصدأ والعوامل الجوية.",
},

      ],
    },

    aboutPage: {
      heroTitle: "من نحن",
      heroSubtitle: "نبني بالتميز والنزاهة",
      whoWeAre: {
        title: "من نحن",
        text: "نصنع هياكل تدوم مدى الحياة. نحن ندمج المواد المتطورة، والتصميم القوي، والممارسات المستدامة لخلق مشاريع مبتكرة ودائمة. مع عقود من الخبرة، يضمن فريقنا الجودة والدقة في كل مرحلة.",
      },
      section: {
        label: "من نحن",
        title: "نبني الثقة ونحقق التميز",
        text: "في شركة التوافق المتقدمة للمقاولات، نحن متخصصون في تقديم حلول إنشائية عالية الجودة مصممة خصيصاً لتلبية احتياجات عملائنا. مع سنوات من الخبرة في الأعمال المدنية وخدمات MEP وإدارة المشاريع، نحن ملتزمون بالابتكار والسلامة والتسليم في الوقت المحدد.",
      },
      detail: {
        title: "نصنع الغد بالتميز",
        text: "مع سنوات من الخبرة، كانت شركتنا في طليعة تقديم حلول إنشائية مبتكرة. من الأعمال المدنية إلى خدمات MEP والتشطيبات الداخلية، نحن ملتزمون بتجاوز التوقعات. يجمع نهجنا بين التكنولوجيا المتطورة والممارسات المستدامة مع التركيز على السلامة والجودة.",
      },
      missionVision: [
        {
          icon: "fas fa-bullseye",
          title: "مهمتنا",
          text: "تقديم حلول إنشائية مبتكرة وآمنة ومستدامة تتجاوز توقعات العملاء وتخلق قيمة دائمة للمجتمعات.",
        },
        {
          icon: "fas fa-eye",
          title: "رؤيتنا",
          text: "أن يتم الاعتراف بنا كرواد في التميز الإنشائي — حيث يقود الابتكار والجودة والثقة كل مشروع نقوم به.",
        },
      ],
      values: {
        title: "قيمنا الأساسية",
        items: [
          {
            icon: "fas fa-hard-hat",
            title: "السلامة أولاً",
            text: "نحن نعطي الأولوية للصحة والسلامة والبيئة في كل خطوة.",
          },
          {
            icon: "fas fa-check-circle",
            title: "ضمان الجودة",
            text: "الالتزام بالتميز من خلال معايير صارمة للجودة والتنفيذ الدقيق.",
          },
          {
            icon: "fas fa-handshake",
            title: "ثقة العملاء",
            text: "نبني علاقات طويلة الأمد من خلال الصدق والشفافية والتعاون.",
          },
        ],
      },
      members: {
        title: "أعضاء فريقنا",
        items: [
          {
            image: "mm.jpg",
            name: "محمد شريف جامدي",
            role: "مدير — أكثر من 20 عاماً من القيادة في مجال البناء.",
          },
          {
            image: "mm6.jpg",
            name: "محمد سعيد",
            role: "مدير المشروع — يضمن التسليم في الوقت المحدد مع الحفاظ على الجودة",
          },
          {
            image: "mm8.jpg",
            name: "محمد شاكر قريشي",
            role: "مشرف الشركة — متخصص في التصاميم المستدامة.",
          },
        ],
      },
    },

    servicesPage: {
      heroTitle: "خدماتنا",
      heroSubtitle: "نقدم التميز في شركة التوافق المتقدمة للمقاولات",
      sectionTitle: "ماذا نقدم",
    },

    servicesData: [
      {
  id: 1,
  title: "أعمال الكسوة",
  description: "حلول كسوة حديثة للواجهات باستخدام الألمنيوم والزجاج والحجر والألواح المركبة لتعزيز المتانة والجاذبية الجمالية.",
  detail:
    "في شركة التوافق المتقدمة للمقاولات، تعمل خدمات الكسوة لدينا على تحويل المباني إلى معالم عصرية من خلال الجمع بين الأسلوب والسلامة والأداء. نحن متخصصون في ألواح الألمنيوم المركبة والزجاج والحجر وأنظمة الكسوة عالية الجودة الأخرى التي تلبي المعايير الدولية. يتم تنفيذ كل مشروع بدقة هندسية لضمان مقاومة العوامل الجوية والكفاءة الحرارية والمتانة على المدى الطويل، مع توفير مظهر معماري أنيق للهياكل التجارية والسكنية والصناعية.",
},

      {
        id: 2,
        title: "الأعمال المدنية",
        description:
          "الطرق، الأساسات، الهياكل الخرسانية، وتطوير البنية التحتية.",
        detail:
          "في شركة التوافق المتقدمة للمقاولات، يشكل قسم الأعمال المدنية الأساس لكل ما نقوم ببنائه. مع سنوات من الخبرة والتزام قوي بالتميز الهندسي، نقدم بنية تحتية آمنة ومستدامة ومصممة لتدوم. تشمل خدماتنا في الأعمال المدنية مجموعة واسعة من أنشطة البناء، بما في ذلك أعمال الحفر، الأساسات، الهياكل الخرسانية، الطرق، أنظمة الصرف، وشبكات المرافق. تتم إدارة كل مشروع بدقة باستخدام تقنيات حديثة ومواد عالية الجودة تتوافق مع المعايير الدولية. ومن خلال الجمع بين المعرفة التقنية والممارسات المبتكرة، تقدم مؤسسة الشهادات والامتثال حلولاً في الأعمال المدنية تلبي توقعات العملاء وتساهم في نمو المجتمعات وتطوير بيئات حضرية مستدامة.",
      },
      {
        id: 3,
        title: "الأعمال الإنشائية",
        description: "تصنيع الفولاذ، هياكل المباني، والتعزيزات الإنشائية.",
        detail:
          "في شركة التوافق المتقدمة للمقاولات، ندرك أن السلامة الإنشائية هي جوهر كل مشروع ناجح. يقدم قسم الأعمال الإنشائية لدينا حلولاً شاملة تضمن أن المباني والبنية التحتية ليست فقط عملية، بل أيضًا آمنة ومتينة ومصممة لتتحمل اختبار الزمن. تشمل خبراتنا تصنيع الفولاذ، الهياكل الخرسانية المسلحة، الهياكل الحاملة، والتعزيزات الإنشائية عبر المشاريع السكنية والتجارية والصناعية. وباستخدام أساليب هندسية متقدمة ومواد معتمدة دوليًا، نضمن أن كل مشروع يحقق أعلى معايير الجودة والامتثال.",
      },
      {
        id: 4,
        title: "خدمات الميكانيكا والكهرباء والسباكة (MEP)",
        description:
          "أعمال الميكانيكا والكهرباء والسباكة مع التزام كامل بالمعايير.",
        detail:
          "في شركة التوافق المتقدمة للمقاولات، تعد خدمات الميكانيكا والكهرباء والسباكة (MEP) جزءًا أساسيًا من تقديم حلول متكاملة وعملية للمباني. نحن ندرك أن أنظمة MEP تشكل العمود الفقري للمرافق الحديثة، حيث تضمن السلامة والراحة والكفاءة التشغيلية. يشمل نطاق عملنا أنظمة التكييف، التركيبات الكهربائية، الإضاءة، أنظمة الحماية من الحرائق، إمدادات المياه، أنظمة الصرف الصحي، وشبكات السباكة. يتم تصميم وتنفيذ كل نظام وفقًا للمعايير الدولية واللوائح المحلية، مما يضمن الموثوقية والامتثال.",
      },
      {
        id: 5,
        title: "التشطيبات الداخلية",
        description: "حلول تصميم وتنفيذ مخصصة للمكاتب والمتاجر والمساكن.",
        detail:
          "في شركة التوافق المتقدمة للمقاولات، نقدم خدمات التشطيبات الداخلية التي تحول المساحات الفارغة إلى بيئات عملية وأنيقة ومخصصة. سواء كانت مكاتب إدارية، متاجر تجزئة، أو مساكن، فإن حلول التشطيبات لدينا مصممة لتعكس الهوية والاحتياجات الفريدة لعملائنا. تشمل خبراتنا تقسيم المساحات، الأرضيات، الأسقف، الإضاءة، دمج أنظمة التكييف، أعمال النجارة، والتشطيبات المخصصة. نحن نعمل بشكل وثيق مع المهندسين المعماريين والمصممين والعملاء لضمان أن كل تفصيل — من الفكرة إلى التنفيذ — يفي بأعلى معايير الجودة والحرفية.",
      },
      {
        id: 6,
        title: "خدمات الصيانة",
        description: "صيانة وقائية وتصحيحية لضمان المتانة على المدى الطويل.",
        detail:
          "في شركة التوافق المتقدمة للمقاولات، ندرك أن البناء لا ينتهي عند تسليم المشروع. لضمان المتانة والأداء على المدى الطويل، نقدم خدمات صيانة شاملة مصممة لتلبية الاحتياجات الفريدة لكل عميل. هدفنا هو حماية استثمارك، تقليل وقت التوقف، وإطالة عمر الأصول. نقدم برامج صيانة وقائية وتصحيحية تغطي الأنظمة الميكانيكية والكهربائية والسباكة والإنشائية والمدنية. تم تصميم البرامج الوقائية لتحديد المشكلات المحتملة قبل حدوثها، مما يقلل من مخاطر الإصلاحات المكلفة والانقطاعات التشغيلية. أما الصيانة التصحيحية فتضمن معالجة أي أعطال غير متوقعة بسرعة وفعالية.",
      },
    ],

    projectsPage: {
      heroTitle: "مشاريعنا",
      heroSubtitle: "نحقق التميز عبر جميع القطاعات",
      sectionTitle: "المشاريع المميزة",
    },
    projectsData: [
      {
        id: 1,
        title: "تطوير مجمع سكني",
        description:
          "في شركة التوافق المتقدمة للمقاولات، نحن متخصصون في تقديم مشاريع تطوير المجمعات السكنية الحديثة التي تجمع بين الراحة والوظائف العملية والاستدامة. تم تصميم مشاريعنا لخلق مجتمعات نابضة بالحياة حيث يتمتع السكان بمساحات معيشة آمنة وفعالة وجذابة من الناحية الجمالية. من التخطيط الأولي والتصميم المعماري إلى الأعمال الإنشائية، وتركيبات الميكانيكا والكهرباء والسباكة (MEP)، والتشطيبات الداخلية، نقدم حلولاً متكاملة للمجمعات السكنية بجميع أحجامها. يتم تنفيذ كل مشروع بدقة والتزام صارم بالمعايير الدولية للبناء، مما يضمن المتانة والقيمة طويلة الأمد.",
        detail: "تسليم مجتمع سكني حديث مع بنية تحتية ومرافق متكاملة.",
        sector: "سكني",
      },
      {
        id: 2,
        title: "برج مكاتب تجارية",
        description:
          "في شركة التوافق المتقدمة للمقاولات، نقدم أبراج المكاتب التجارية التي تمثل رمزًا للابتكار والكفاءة والتميز المعماري. خبرتنا في بناء الأبراج العالية تمكننا من إنشاء أماكن عمل تلبي احتياجات الأعمال الحديثة المتطورة مع الحفاظ على أعلى معايير السلامة والاستدامة. من الأساسات إلى التشطيبات، يدير فريقنا كل جانب من جوانب البناء، بما في ذلك الأعمال الإنشائية، أنظمة الميكانيكا والكهرباء والسباكة (MEP)، هندسة الواجهات، والتشطيبات الداخلية. يتم تصميم كل برج بعناية مع التركيز على الوظائف العملية، من خلال توفير مخططات طوابق مرنة، أنظمة مبانٍ متقدمة، وتقنيات مدمجة تعزز الإنتاجية وكفاءة الطاقة.",
        detail:
          "مشروع برج عالي تم تنفيذه بدقة وتصميم حديث وسياسات قائمة على السلامة أولاً.",
        sector: "تجاري",
      },
      {
        id: 3,
        title: "إنشاء منشأة صناعية",
        description:
          "في شركة التوافق المتقدمة للمقاولات، نلعب دورًا محوريًا في تشكيل المجتمعات من خلال تقديم منشآت صناعية موثوقة ومستدامة. تمتد خبرتنا إلى تصميم وبناء المستودعات والمصانع ومحطات الإنتاج والبنية التحتية للمرافق، جميعها يتم تنفيذها مع التزام قوي بالجودة والسلامة. نحن ندرك أن المنشآت الصناعية تشكل العمود الفقري للنمو الاقتصادي، حيث تُمكّن من رفع الإنتاجية والابتكار وتحسين جودة الحياة. ولهذا السبب، يتم بناء مشاريعنا بدقة باستخدام ممارسات هندسية متقدمة ومواد متينة تضمن الأداء على المدى الطويل.",
        detail:
          "بناء مستودع ومنشأة إنتاج واسعة النطاق وفقًا للمعايير العالمية.",
        sector: "صناعي",
      },
      {
        id: 4,
        title: "أعمال الكسوة المبتكرة",
        description:
          "نقدم حلول كسوة متقدمة تعزز من الوظائف العملية والجمالية للمباني. تشمل خبرتنا أنظمة الكسوة بالألمنيوم والزجاج والحجر والمواد المركبة، وفقًا لأعلى معايير الجودة والسلامة الدولية. يتم تنفيذ كل مشروع كسوة بدقة هندسية تضمن المتانة ومقاومة العوامل الجوية والمظهر المعماري العصري. سواء للأبراج التجارية أو المجمعات السكنية أو المنشآت الصناعية، تعمل أعمال الكسوة لدينا على تحويل المباني إلى معالم مميزة تجمع بين الجمال والأداء.",
        detail:
          "مشاريع كسوة عالية الجودة توفر المتانة والسلامة والتصميم العصري.",
        sector: "كسوة",
      },

      {
    id: 5,
    title: "إعادة تعريف التميز التجاري",
    description:
      "نقدم مشاريع تجارية مبتكرة تشمل أبراج المكاتب ومساحات البيع بالتجزئة والتطويرات متعددة الاستخدامات. تغطي خبرتنا الأعمال الإنشائية وأنظمة MEP المتقدمة وهندسة الواجهات والتشطيبات الداخلية. تم تصميم كل مشروع تجاري لتعزيز الإنتاجية وتوفير مساحات مرنة ودمج تقنيات حديثة مع الالتزام بأعلى معايير السلامة والاستدامة.",
    detail:
      "مشاريع أبراج عالية ومتعددة الاستخدامات تم تنفيذها بتصميم حديث وكفاءة عالية.",
    sector: "تجاري",
  },
  {
    id: 6,
    title: "قيادة النمو الصناعي",
    description:
      "تشمل مشاريعنا الصناعية المستودعات والمصانع ومنشآت الإنتاج التي تدعم الإنتاجية والنمو الاقتصادي. يتم تنفيذ هذه المرافق مع مراعاة المتانة والامتثال باستخدام ممارسات هندسية متقدمة ومواد عالية الجودة. كل مشروع يضمن الأداء على المدى الطويل والسلامة والاستدامة وفقًا للمعايير الدولية.",
    detail:
      "منشآت صناعية واسعة النطاق وبنية تحتية تم تطويرها وفقًا للمعايير العالمية.",
    sector: "صناعي",
  },
  {
  id: 7,
  title: "أعمال الجلفنة",
  description:
    "في شركة التوافق المتقدمة للمقاولات، نقدم خدمات أعمال الجلفنة التي توفر حلولاً متينة وطويلة الأمد للتطبيقات الهيكلية والصناعية. نحن متخصصون في تقديم منتجات فولاذية مجلفنة عالية الجودة تجمع بين القوة والمرونة ومقاومة التآكل، مما يضمن أن كل مشروع يصمد أمام اختبار الزمن. تشمل خبرتنا مجموعة واسعة من التطبيقات مثل الهياكل الإنشائية، أنظمة الأسقف، الأنابيب، الأسوار، والمنشآت الصناعية. ومن خلال استخدام تقنيات الجلفنة بالغمس الساخن المتقدمة، نضمن حماية فائقة ضد الصدأ والظروف الجوية القاسية والاستخدام المكثف، مما يجعل حلولنا مثالية للمشاريع السكنية والتجارية. يتم تنفيذ كل مشروع بدقة ووفق التزام صارم بمعايير الجودة والسلامة الدولية، بما يضمن الكفاءة والموثوقية في كل مرحلة.",
  detail:
    "أعمال فولاذية مجلفنة عالية الجودة للهياكل والأسقف والمنشآت الصناعية بمتانة فائقة ومقاومة للتآكل.",
  sector: "الجلفنة",
},

{
  id: 8,
  title: "أعمال الدهانات",
  description:
    "في شركة التوافق المتقدمة للمقاولات، نقدم أعمال دهانات احترافية تعزز جمال المباني ومتانتها وحمايتها. تشمل خدماتنا الدهانات الداخلية والخارجية، الطلاءات الصناعية، التشطيبات الواقية، والمعالجات الزخرفية المصممة وفقًا لاحتياجات كل عميل. نستخدم دهانات عالية الجودة وتقنيات متطورة لضمان تشطيبات ناعمة، وثبات طويل الأمد للألوان، ومقاومة للعوامل الجوية. سواء في المشاريع السكنية أو التجارية أو الصناعية، تم تصميم حلولنا في الدهانات لتجمع بين الجماليات والوظائف العملية. يتم تنفيذ كل مشروع بعناية فائقة، مع الالتزام بمعايير السلامة والجودة الدولية.",
  detail:
    "حلول دهانات داخلية وخارجية وصناعية عالية الجودة تجمع بين الجمال والمتانة.",
  sector: "الدهانات",
},

{
  id: 9,
  title: "أعمال مجاري الهواء (التكييف)",
  description:
    "في شركة التوافق المتقدمة للمقاولات، تضمن خدمات مجاري الهواء (التكييف) لدينا أنظمة توزيع هواء فعالة وموثوقة وموفرة للطاقة في المباني السكنية والتجارية والصناعية. نحن متخصصون في تصميم وتصنيع وتركيب أنظمة مجاري هواء عالية الجودة باستخدام مواد وتقنيات متقدمة. تشمل خبرتنا مجاري أنظمة التكييف، العزل، وتحقيق توازن الهواء لضمان أقصى درجات الراحة وجودة الهواء الداخلي وأداء النظام. يتم تنفيذ كل مشروع بدقة هندسية ووفق التزام صارم بمعايير السلامة والبيئة الدولية. ومن خلال تقديم حلول مستدامة وفعالة من حيث التكلفة، نساعد عملاءنا على تحقيق الكفاءة والراحة طويلة الأمد في منشآتهم.",
  detail:
    "أنظمة مجاري هواء للتكييف عالية الكفاءة والمتانة مصممة ومركبة وفقًا لمعايير HVAC الدولية.",
  sector: "مجاري الهواء",
}

    ],

    certificationsPage: {
      heroTitle: "إنجازاتنا",
      heroSubtitle: "تميز مثبت بالمعايير العالمية",
      gridtitle: "الشهادات",
    },

    footer: {
      aboutTitle: "شركة التوافق المتقدمة للمقاولات",
      aboutTitleAr: "(Al Tawafuq Advance Contracting Company)",
      aboutDesc:
        "نحن نقدم التميز في المقاولات العامة، والأعمال المدنية، ومشاريع البنية التحتية في المملكة العربية السعودية مع تركيز قوي على الجودة والسلامة والاستدامة.",
      quickLinksTitle: "روابط سريعة",
      quickLinks: [
        { name: "الرئيسية", path: "/" },
        { name: "من نحن", path: "/about" },
        { name: "الخدمات", path: "/services" },
        { name: "المشاريع", path: "/projects" },
        { name: "الشهادات", path: "/certifications" },
        { name: "الوظائف", path: "/careers" },
      ],
      contactTitle: "تواصل معنا",
      address: "جدة – حي البوادي، شارع سعد بن قيس",
      address2: "قرب سفارة الجزائر، خلف شركة هوندا",
      contact1: "محمد شريف جامدي",
      phone1: "+966556655605",
      contact2: "محمد سعيد",
      phone2: "+966535007727",
      contact3: "محمد شاكر قريشي",
      phone3: "+966560302049",
      telefax: "فاكس: (يُضاف عند توفره)",
      poBox: "ص.ب: 10433 – الرمز: 21331",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة",
    },

    ContactPage: {
      Title: "ہم سے رابطہ کریں",
      message1: "پیغام کامیابی سے بھیج دیا گیا!",
      message2: "نام",
      message3: "ای میل",
      message4: "فون",
      message5: "پیغام",
      message6: "بھیجیں",
    },
    CareersPage: {
      Title: "کریئرز",
      message1: "پیغام کامیابی سے بھیج دیا گیا!",
      message2: "نام",
      message3: "ای میل",
      message4: "درخواست دیں",
    },
    LoginPage: {
      Title: "لاگ ان",
      message1: "لاگ ان کامیاب!",
      message2: "غلط اسناد",
      message3: "کچھ غلط ہو گیا",
      message4: "یوزر نیم",
      message5: "پاس ورڈ",
      message6: "اکاؤنٹ نہیں ہے؟",
      message7: "رجسٹر کریں",
    },
    RegisterPage: {
      Title: "اکاؤنٹ بنائیں",
      message1: "یوزر نیم",
      message2: "ای میل",
      message3: "پاس ورڈ",
      message4: "رجسٹر کریں",
      message5: "رجسٹریشن ناکام",
      message6: "کچھ غلط ہو گیا",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLang, t: translations[lang] }}
    >
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
