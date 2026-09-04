/**
 * Curriculum & Research Portfolio Data — Multi-Language Support (i18n)
 * Sebastián Castañeda — Mechatronics Engineer & Aspiring PhD Researcher
 */

const cvData = {
  // Available Languages Definition
  languagesList: [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" }
  ],

  // UI Common Dictionary (Dynamic Text Translations)
  i18n: {
    es: {
      nav: {
        about: "Perfil",
        education: "Educación",
        researchProjects: "Investigación",
        engineeringProjects: "Ingeniería",
        expertise: "Especialidad",
        publications: "Publicaciones",
        languages: "Idiomas",
        targetLabs: "Metas Ph.D.",
        contactBtn: "Contacto",
        pdfBtn: "Exportar PDF"
      },
      hero: {
        name: "Sebastián Castañeda",
        subtitle: "Estudiante de Ingeniería Mecatrónica | Aspirante a Investigador Ph.D.",
        tagline: "Estudiante de Ingeniería Mecatrónica en la Universidad Militar Nueva Granada, trabajando en manipulación robótica, sistemas de control, visión por computador, sistemas embebidos y automatización inteligente.",
        statusBadge: "Graduación 2027 — Buscando Posiciones de Ph.D. (Japón, Corea del Sur, Alemania)",
        contactAction: "Contacto para Investigación / Ph.D.",
        targetAction: "Entornos Ph.D. Objetivo"
      },
      sections: {
        aboutTag: "// Perfil de Investigación",
        aboutTitle: "Sobre Mí y Visión Científica",
        eduTag: "// Formación",
        eduTitle: "Educación y Grupos de Investigación",
        interestsTag: "// Áreas de Enfoque",
        interestsTitle: "Intereses de Investigación y Horizontes",
        researchTag: "// Investigación Verificable",
        researchTitle: "Proyectos de Investigación Científica",
        engTag: "// Sistemas y Manufactura",
        engTitle: "Proyectos de Ingeniería Aplicada y Prototipado",
        expertiseTag: "// Toolkit Científico",
        expertiseTitle: "Especialidad Científica y Técnica",
        phdTag: "// Estrategia Doctoral",
        phdTitle: "Entornos Ph.D. Objetivo y Alineación Académica",
        pubTag: "// Producción Académica",
        pubTitle: "Publicaciones, Ponencias y Congresos",
        langTag: "// Comunicación",
        langTitle: "Idiomas y Competencia",
        skillsTag: "// Matriz Técnica",
        skillsTitle: "Capacidades de Programación y Manufactura",
        awardsTag: "// Reconocimiento",
        awardsTitle: "Premios y Roles de Liderazgo"
      },
      breakdown: {
        problem: "Problema",
        methodology: "Metodología",
        model: "Modelo Matemático",
        simulation: "Simulación",
        results: "Resultados Cuantitativos",
        conclusions: "Conclusiones",
        evidenceLabel: "Evidencia Verificable:",
        engEvidenceLabel: "Artefactos de Ingeniería:"
      },
      modal: {
        title: "Contacto y Consultas Ph.D.",
        subtitle: "Sebastián David Castañeda Moncada — Ingeniero Mecatrónico",
        emailLabel: "Correo Electrónico",
        copyBtn: "Copiar Email",
        phoneLabel: "Teléfono / WhatsApp",
        waBtn: "WhatsApp",
        linkedinLabel: "Perfil de LinkedIn",
        locationLabel: "Ubicación y Disponibilidad",
        locationVal: "Bogotá, Colombia • Buscando Ingreso a Ph.D. 2027",
        notice: "Disponible para discusiones con laboratorios de investigación, colaboración remota y entrevistas de admisión doctoral."
      }
    },
    en: {
      nav: {
        about: "About",
        education: "Education",
        researchProjects: "Research",
        engineeringProjects: "Engineering",
        expertise: "Expertise",
        publications: "Publications",
        languages: "Languages",
        targetLabs: "Target Labs",
        contactBtn: "Contact",
        pdfBtn: "Export PDF"
      },
      hero: {
        name: "Sebastián Castañeda",
        subtitle: "Mechatronics Engineering Student | Aspiring PhD Researcher",
        tagline: "Mechatronics Engineering student at Universidad Militar Nueva Granada, working on robotic manipulation, control systems, computer vision, embedded systems and intelligent automation.",
        statusBadge: "Graduating 2027 — Seeking PhD Positions (Japan, South Korea, Germany)",
        contactAction: "Contact for Research / PhD",
        targetAction: "Target Research Environments"
      },
      sections: {
        aboutTag: "// Research Profile",
        aboutTitle: "About Me & Scientific Vision",
        eduTag: "// Background",
        eduTitle: "Education & Research Groups",
        interestsTag: "// Focus Areas",
        interestsTitle: "Research Interests & Horizons",
        researchTag: "// Verifiable Investigation",
        researchTitle: "Scientific Research Projects",
        engTag: "// Systems & Manufacturing",
        engTitle: "Applied Engineering & Prototyping Projects",
        expertiseTag: "// Research Toolkit",
        expertiseTitle: "Research & Technical Expertise",
        phdTag: "// Doctoral Strategy",
        phdTitle: "Target Research Environments & Faculty Alignment",
        pubTag: "// Academic Output",
        pubTitle: "Publications, Papers & Conferences",
        langTag: "// Communication",
        langTitle: "Languages & Proficiency",
        skillsTag: "// Technical Matrix",
        skillsTitle: "Programming, Hardware & Fabrication Capabilities",
        awardsTag: "// Recognition",
        awardsTitle: "Awards & Leadership Roles"
      },
      breakdown: {
        problem: "Problem",
        methodology: "Methodology",
        model: "Mathematical Model",
        simulation: "Simulation Environment",
        results: "Quantitative Results",
        conclusions: "Conclusions",
        evidenceLabel: "Verifiable Evidence:",
        engEvidenceLabel: "Engineering Artifacts:"
      },
      modal: {
        title: "Contact & PhD Inquiry",
        subtitle: "Sebastián David Castañeda Moncada — Mechatronics Engineer",
        emailLabel: "Direct Email",
        copyBtn: "Copy Email",
        phoneLabel: "Phone / WhatsApp",
        waBtn: "WhatsApp",
        linkedinLabel: "LinkedIn Profile",
        locationLabel: "Location & Availability",
        locationVal: "Bogotá, Colombia • Seeking PhD Entry 2027",
        notice: "Available for research laboratory discussions, remote collaboration, and doctoral admissions interviews."
      }
    }
  },

  personal: {
    name: "Sebastián Castañeda",
    fullName: "Sebastián David Castañeda Moncada",
    university: "Universidad Militar Nueva Granada",
    email: "ing.sebastiand.castaneda@gmail.com",
    phone: "+57 320 327 0238",
    whatsappLink: "https://wa.me/573203270238",
    birthDate: "2003-04-01",
    profileImg: "images/profile_picture.png",
    github: "https://github.com/stechx2020",
    linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-david-casta%C3%B1eda-moncada-954444286",
    scholar: "https://scholar.google.com/",
    location: "Bogotá, Colombia",
    bio: {
      es: `Estudiante de Ingeniería Mecatrónica en la Universidad Militar Nueva Granada, con experiencia en investigación e ingeniería en robótica, sistemas de control, automatización inteligente, sistemas embebidos, visión por computador y manufactura avanzada.

Mi experiencia de investigación incluye manipuladores robóticos, modelado cinemático y dinámico, planeación de trayectorias, sistemas de control, Industria 4.0, polímeros biocompuestos y manufactura aditiva. He participado en los grupos de investigación VOLTA e IIED en proyectos de recuperación de propiedades mecánicas de filamentos reciclados con nanocelulosa de yuca, manipulación robótica y modelado y control en MATLAB/Simulink.

Mis intereses actuales se centran en la robótica antropomórfica y autónoma, así como robótica aérea, submarina, espacial y bioinspirada.

Mi objetivo es vincularme directamente a un doctorado internacional en robótica y automatización inteligente inmediatamente después de culminar el pregrado en 2027.`,
      en: `Mechatronics Engineering student at Universidad Militar Nueva Granada, with active research and engineering experience in robotics, control systems, intelligent automation, embedded systems, computer vision, and advanced manufacturing.

My research experience includes robotic manipulators, kinematic and dynamic modeling, trajectory planning, control systems, Industry 4.0, polymer composites, and additive manufacturing. I have participated in research groups including VOLTA and IIED, working on projects involving mechanical-property recovery of recycled polymer filaments using nanocellulose additives, robotic manipulation, and MATLAB/Simulink-based modeling and control.

My current research interests are focused on robotic systems, particularly anthropomorphic and autonomous robots, with broader interests in aerial, underwater, space, and bio-inspired robotics.

I am interested in pursuing doctoral research in robotics, autonomous systems, intelligent automation, and advanced robotic platforms, with the goal of joining an international research laboratory immediately after completing my undergraduate degree.`
    }
  },

  education: [
    {
      degree: {
        es: "Grado en Ingeniería Mecatrónica",
        en: "B.Sc. in Mechatronics Engineering"
      },
      institution: "Universidad Militar Nueva Granada",
      location: "Bogotá, Colombia",
      period: "2022 — 2027",
      details: {
        es: [
          "Enfoque en Robótica, Sistemas de Control, Cinemática/Dinámica Multicuerpo y Automatización Industrial.",
          "Integrante activo de los grupos de investigación VOLTA e IIED.",
          "Trabajo de Grado en desarrollo."
        ],
        en: [
          "Focus on Robotics, Control Systems, Multibody Kinematics/Dynamics, and Industrial Automation.",
          "Active member of VOLTA and IIED research groups.",
          "Undergraduate Thesis (Trabajo de Grado) in progress."
        ]
      }
    }
  ],

  researchGroups: [
    {
      name: "VOLTA & IIED",
      role: {
        es: "Estudiante Investigador",
        en: "Undergraduate Researcher"
      },
      supervisors: ["Ing. William Aperador Chaparro", "Ing. Pedro Sánchez Caimán"],
      lines: [
        "Industry 4.0 & Advanced Manufacturing",
        "Biocomposite Polymer Filaments (Nanocellulose)",
        "Robotic Manipulators & Digital Twins"
      ]
    }
  ],

  researchInterests: [
    {
      category: {
        es: "Enfoque Principal Ph.D.",
        en: "Primary PhD Focus"
      },
      topics: [
        "Anthropomorphic & Humanoid Robotics",
        "Kinematic & Dynamic Modeling (Up to 6 DOF)",
        "Advanced & Adaptive Control Systems",
        "ROS2 & Digital Twin Simulations"
      ]
    },
    {
      category: {
        es: "Horizontes de Investigación",
        en: "Future & Greenfield Horizons"
      },
      topics: [
        "Zoomorphic & Bio-Inspired Robotics",
        "Aerial & Autonomous UAV Systems",
        "Underwater & Submarine Robotics",
        "Space Robotics & Planetary Rovers"
      ]
    }
  ],

  targetEnvironments: {
    countries: [
      {
        country: "Japón / Japan",
        status: { es: "Interés Principal", en: "Primary Interest" },
        universities: [
          "UTokyo (University of Tokyo)",
          "Tokyo Science (Tokyo Tech)",
          "Tohoku University",
          "Osaka University",
          "Kyoto University"
        ]
      },
      {
        country: "Corea del Sur / South Korea",
        status: { es: "Interés Principal", en: "Primary Interest" },
        universities: [
          "KAIST",
          "POSTECH",
          "SNU (Seoul National University)",
          "UNIST",
          "GIST"
        ]
      },
      {
        country: "Alemania / Germany",
        status: { es: "Explorando", en: "Exploring" },
        universities: [
          "TUM (Technical University of Munich)",
          "KIT (Karlsruhe Institute of Technology)",
          "RWTH Aachen",
          "University of Stuttgart",
          "DLR (German Aerospace Center)"
        ]
      }
    ],
    targetLabs: [
      {
        country: "Japón / Japan",
        institution: "University of Tokyo / Tokyo Science",
        lab: "Humanoid & Manipulator Kinematics Lab",
        researchTopic: "Anthropomorphic Robotic Manipulation & Inverse Kinematics",
        alignment: {
          es: "Alineación directa con mi investigación en gemelos digitales de manipuladores de 6-DOF y planeación en ROS2.",
          en: "Direct alignment with my research on 6-DOF anthropomorphic manipulator digital twins and ROS2 trajectory planning."
        },
        status: { es: "Preparando Contacto (Ingreso 2027)", en: "Preparing Outreach (Targeting Fall 2027)" }
      },
      {
        country: "Corea del Sur / South Korea",
        institution: "KAIST / POSTECH",
        lab: "Humanoid & Autonomous Systems Center",
        researchTopic: "Dynamic Control & Trajectory Planning for Complex Robots",
        alignment: {
          es: "Coincide con mi trabajo en modelado físico en Simscape, control en cascada y algoritmos adaptativos.",
          en: "Matches my work in MATLAB Simscape physical modeling, cascade motor control, and adaptive control algorithms."
        },
        status: { es: "Meta Ingreso Otoño 2027", en: "Targeting Fall 2027 Entry" }
      },
      {
        country: "Alemania / Germany",
        institution: "DLR / TUM",
        lab: "Institute of Robotics and Mechatronics",
        researchTopic: "Space & Planetary Rover Manipulation",
        alignment: {
          es: "Alineado con mi experiencia como Líder Mecánico para el University Rover Challenge (URC) y manufactura de biocompuestos.",
          en: "Fits my experience as Mechanical Lead for the University Rover Challenge (URC) and custom biocomposite manufacturing."
        },
        status: { es: "Explorando Convocatorias", en: "Exploring Laboratory Openings" }
      }
    ]
  },

  researchProjects: [
    {
      title: "6-DOF Anthropomorphic Manipulator Digital Twin & Kinematics",
      type: "Research Project",
      subtitle: {
        es: "Modelado cinemático, planeación de trayectorias y co-simulación ROS2 / Simscape.",
        en: "Kinematic modeling, trajectory planning, and ROS2 / Simscape co-simulation."
      },
      problem: {
        es: "La planeación de trayectorias en tiempo real y la cinemática inversa precisa para brazos antropomórficos de 6 grados de libertad sufren singularidades y desacoples dinámicos.",
        en: "Real-time trajectory planning and accurate inverse kinematics for 6-DOF anthropomorphic arms suffer from singularity states and dynamic modeling discrepancies."
      },
      methodology: {
        es: "Formulación de cinemática inversa analítica y numérica utilizando parámetros DH y matrices Jacobianas. Modelado dinámico multicuerpo en MATLAB Simscape conectado con nodos ROS2.",
        en: "Formulated closed-form and numerical inverse kinematics using DH parameters and Jacobian matrices. Built physical multibody CAD dynamics in MATLAB Simscape and linked with ROS2 nodes."
      },
      model: {
        es: "Cadena antropomórfica de 6 DOF con muñeca esférica, inercias parametrizadas y límites de torque motor.",
        en: "6-DOF Anthropomorphic chain with spherical wrist, parameterized link inertias, and motor torque limits."
      },
      simulation: {
        es: "ROS2 Jazzy / Humble integrado con Simscape Multibody para movimiento en espacio articular y cartesiano.",
        en: "ROS2 Jazzy / Humble integrated with Simscape Multibody co-simulation for joint space and cartesian space motion."
      },
      results: {
        es: "Precisión de posicionamiento submilimétrica en espacio cartesiano sin bloqueos por singularidad.",
        en: "Achieved sub-millimeter cartesian end-effector positioning accuracy with zero singular configuration lockups."
      },
      conclusions: {
        es: "Demostración de la integración fluida entre planificadores ROS2 y modelos físicos Simscape para validación Hardware-in-the-Loop.",
        en: "Demonstrated seamless integration of ROS2 motion planners with Simscape physical models for hardware-in-the-loop verification."
      },
      evidence: [
        { label: "Research Report", type: "pdf", url: "#" },
        { label: "MATLAB Code", type: "code", url: "#" },
        { label: "ROS2 Workspace", type: "code", url: "#" },
        { label: "Demonstration", type: "video", url: "#" },
        { label: "Results & Graphs", type: "data", url: "#" }
      ]
    },
    {
      title: "Nanocellulose Recycled Polymer Filament Extrusion (Industry 4.0)",
      type: "Research Project",
      subtitle: {
        es: "Recuperación de propiedades mecánicas en filamentos 3D reciclados mediante biocompuestos de nanocelulosa de yuca.",
        en: "Property recovery of recycled 3D printing filaments using Yucca nanocellulose biocomposites."
      },
      problem: {
        es: "Los filamentos termoplásticos reciclados sufren degradación de resistencia a la tracción y fatiga térmica tras múltiples ciclos de impresión 3D.",
        en: "Recycled thermoplastic filaments suffer severe tensile strength degradation and thermal fatigue after repeated additive manufacturing cycles."
      },
      methodology: {
        es: "Sintetización de nanocelulosa de yuca, mezcla con micro-pellets de polímero reciclado y extrusión bajo perfiles térmicos controlados.",
        en: "Synthesized Yucca nanocellulose bio-additives, blended with recycled polymer micro-pellets, and extruded custom filaments under monitored extrusion thermal profiles."
      },
      model: {
        es: "Modelo de refuerzo estructural biocompuesto y análisis de distribución de esfuerzo de tracción.",
        en: "Biocomposite structural reinforcement model and tensile stress-strain distribution analysis."
      },
      simulation: {
        es: "Simulación de extrusión térmica y modelado FEA de tracción en probetas norma ASTM D638.",
        en: "Thermal extrusion simulation and finite element tensile stress modeling on standardized ASTM D638 specimen geometry."
      },
      results: {
        es: "Recuperación de resistencia a la fluencia por tracción superior al 28% respecto al polímero reciclado sin reforzar.",
        en: "Restored tensile yield strength by over 28% compared to un-reinforced recycled polymer filaments, meeting Industry 4.0 specifications."
      },
      conclusions: {
        es: "La nanocelulosa de yuca actúa como un bio-refuerzo de alta eficiencia para manufactura aditiva circular sostenible.",
        en: "Yucca nanocellulose serves as a high-efficiency bio-reinforcement for sustainable circular additive manufacturing."
      },
      evidence: [
        { label: "Research Report", type: "pdf", url: "#" },
        { label: "Extrusion Logs", type: "data", url: "#" },
        { label: "Tensile Data", type: "data", url: "#" },
        { label: "Lab Photos", type: "photo", url: "#" }
      ]
    },
    {
      title: "Cascade Control System for DC Motor Position & Velocity",
      type: "Research Project",
      subtitle: {
        es: "Análisis comparativo de algoritmos PID discreto, Lugar Geométrico de las Raíces (LGR) y oscilaciones muertas.",
        en: "Comparative analysis of discrete PID, Root Locus, and deadbeat control algorithms."
      },
      problem: {
        es: "Los controladores de posición monolíticos sufren sobrepicos y bajo rechazo a perturbaciones ante cargas variables.",
        en: "Single-loop motor position controllers experience overshoot and poor disturbance rejection under fluctuating load torque."
      },
      methodology: {
        es: "Diseño e implementación de arquitectura en cascada (bucle interno de velocidad, bucle externo de posición) y comparación entre PID discreto, LGR y oscilaciones muertas.",
        en: "Implemented dual-loop cascade control architecture (inner high-bandwidth velocity loop, outer position loop). Formulated and tested Discrete PID, Root Locus (LGR), and Deadbeat controllers."
      },
      model: {
        es: "Identificación de función de transferencia de motor DC con encoder y no linealidades del driver.",
        en: "Transfer function identification of DC motor with encoder feedback and driver non-linearities."
      },
      simulation: {
        es: "Simulaciones dinámicas en Simulink bajo respuestas escalón, diagramas de Bode y rechazo a perturbaciones.",
        en: "Simulink dynamic simulations under step responses, frequency response Bode plots, and disturbance injection."
      },
      results: {
        es: "La estructura en cascada eliminó el sobrepico reduciendo el tiempo de asentamiento en un 45%.",
        en: "Cascade Deadbeat & Discrete PID structure eliminated overshoot while reducing settling time by 45%."
      },
      conclusions: {
        es: "Las arquitecturas en cascada brindan rigidez superior y rechazo a perturbaciones para articulaciones robóticas de precisión.",
        en: "Cascade control architectures provide superior stiffness and disturbance rejection for precision robotic joints."
      },
      evidence: [
        { label: "Research Report", type: "pdf", url: "#" },
        { label: "Simulink Models", type: "code", url: "#" },
        { label: "Response Plots", type: "data", url: "#" }
      ]
    }
  ],

  engineeringProjects: [
    {
      title: "University Rover Challenge (URC) — Mars Rover",
      type: "Engineering Project",
      role: {
        es: "Líder Mecánico y Project Manager",
        en: "Mechanical Lead & Project Manager"
      },
      description: {
        es: "Diseño mecánico, optimización estructural y manufactura de un ROVER planetario autónomo para el University Rover Challenge (URC) en Utah, EE. UU.",
        en: "Designed, engineered, and manufactured an autonomous multi-terrain planetary ROVER for the University Rover Challenge (URC) held in Utah, USA."
      },
      highlights: {
        es: [
          "Lideré la optimización del chasis, suspensión rocker-bogie e integración del manipulador de 6-DOF.",
          "Coordinación de manufactura en mecanizado CNC de 5 ejes, corte láser e impresión 3D."
        ],
        en: [
          "Led chassis geometry optimization, rocker-bogie suspension, and 6-DOF manipulator integration.",
          "Managed CAD manufacturing workflows across 5-axis CNC machining, laser cutting, and 3D printing."
        ]
      },
      evidence: [
        { label: "CAD Models", type: "cad", url: "#" },
        { label: "Photos", type: "photo", url: "#" },
        { label: "Video Demo", type: "video", url: "#" },
        { label: "Technical Documentation", type: "pdf", url: "#" },
        { label: "Competition Evidence", type: "award", url: "#" }
      ]
    },
    {
      title: "Custom Filament Extruder Machine Setup & Commissioning",
      type: "Engineering Project",
      role: {
        es: "Líder de Puesta a Punto y Calibración",
        en: "Lead Systems & Calibration Engineer"
      },
      description: {
        es: "Puesta a punto y calibración de sistema de extrusión de polímeros para formulación de filamentos biocompuestos.",
        en: "Engineered and calibrated an industrial polymer extrusion system dedicated to formulating advanced bio-composite filaments."
      },
      highlights: {
        es: [
          "Implementación de control PID en lazo cerrado para barril de calentamiento multizona.",
          "Diseño de sensor óptico para realimentación de diámetro de filamento."
        ],
        en: [
          "Implemented closed-loop PID thermal controllers for multi-zone heating barrels.",
          "Designed precision optical filament diameter sensor feedback loop."
        ]
      },
      evidence: [
        { label: "System Schematics", type: "pdf", url: "#" },
        { label: "Photos", type: "photo", url: "#" },
        { label: "Firmware Code", type: "code", url: "#" }
      ]
    }
  ],

  researchToolkit: {
    robotics: [
      "Manipulator kinematics",
      "Dynamics",
      "Trajectory planning",
      "ROS2",
      "Digital twins"
    ],
    control: [
      "PID control",
      "Adaptive control",
      "Servo systems",
      "Discrete control"
    ],
    perception: [
      "OpenCV",
      "YOLO neural networks",
      "Object detection",
      "Coordinate estimation"
    ],
    computationalTools: [
      "MATLAB",
      "Simulink",
      "Python",
      "C / C++"
    ],
    hardware: [
      "STM32 microcontrollers",
      "ESP32",
      "Raspberry Pi",
      "Arduino"
    ],
    manufacturing: [
      "Additive manufacturing",
      "CAD (SolidWorks)",
      "CNC machining",
      "PCB design (EasyEDA Pro)"
    ]
  },

  publications: {
    summary: {
      articles: 0,
      posters: 0,
      presentations: 2,
      congresses: 1,
      papersInPreparation: 2,
      theses: 1
    },
    items: [
      {
        title: "Mechanical Property Enhancement of Recycled Polymer Filaments via Yucca Nanocellulose Additives",
        authors: "S. Castañeda, W. Aperador Chaparro, P. Sánchez Caimán",
        venue: "In Preparation for Peer-Reviewed Journal",
        type: "Paper in Preparation",
        year: "2026",
        abstract: {
          es: "Investigación sobre técnicas de extrusión de biocompuestos con nanocelulosa de yuca para restaurar la integridad estructural de filamentos reciclados para impresión 3D de Industria 4.0.",
          en: "Investigation on biocomposite extrusion techniques using yucca nanocellulose to restore structural integrity in recycled polymer filaments for Industry 4.0 3D printing applications."
        }
      },
      {
        title: "Simscape Multibody Digital Twin and Kinematic Trajectory Planning for a 6-DOF Anthropomorphic Manipulator",
        authors: "S. Castañeda, et al.",
        venue: "In Preparation for Robotics Conference",
        type: "Paper in Preparation",
        year: "2026",
        abstract: {
          es: "Desarrollo de cinemática inversa analítica y planeación de trayectorias integradas en entorno de co-simulación ROS/Simulink.",
          en: "Development of exact inverse kinematics and trajectory planning integrated into a ROS/Simulink co-simulation environment."
        }
      },
      {
        title: "National & Regional Engineering Congress Presentations (Ponencias)",
        authors: "S. Castañeda",
        venue: "Academic Engineering Conferences",
        type: "Conference Presentations (2)",
        year: "2025 — 2026",
        abstract: {
          es: "Presentación de avances de investigación en biocompuestos y cinemática de manipuladores en 2 ponencias nacionales y 1 congreso.",
          en: "Presented research findings on biocomposites and robotic manipulator kinematics across 2 national presentations and 1 congress."
        }
      }
    ]
  },

  awards: [
    {
      title: "2nd Place — ICONTEC Innovation Competition",
      year: "2026",
      organization: "ICONTEC",
      description: {
        es: "Reconocimiento por metodología de ingeniería innovadora e impacto en investigación.",
        en: "Recognized for innovative engineering methodology and research impact."
      }
    },
    {
      title: "3rd Place — INGnova Engineering Competition",
      year: "2025",
      organization: "Universidad Militar Nueva Granada",
      description: {
        es: "Otorgado por diseño mecatrónico avanzado y prototipado robótico.",
        en: "Awarded for advanced mechatronic design and robotics prototyping."
      }
    }
  ],

  leadership: [
    {
      role: { es: "Líder Mecánico — Mars Rover URC", en: "Mechanical Lead — Mars Rover URC" },
      organization: "UMNG Rover Team",
      details: {
        es: "Dirección de diseño mecánico, modelado CAD, selección de materiales y mecanizado para el University Rover Challenge.",
        en: "Directed mechanical design, CAD modeling, materials selection, and machining for the University Rover Challenge."
      }
    },
    {
      role: { es: "Líder de Extrusión y Biopolímeros", en: "Lead of Extrusion & Biopolymer Setup" },
      organization: "VOLTA Research Group",
      details: {
        es: "Gestión de montaje, calibración y protocolo experimental para líneas de extrusión de polímeros.",
        en: "Managed setup, calibration, and experimental protocol for custom polymer extrusion lines."
      }
    },
    {
      role: { es: "Project Manager de Diseño Mecatrónico", en: "Project Manager — Mechatronic Systems Design" },
      organization: "UMNG Engineering Lab",
      details: {
        es: "Gestión del ciclo de vida de proyectos, hitos e integración técnica entre hardware, firmware y mecánica.",
        en: "Managed project lifecycles, milestones, and technical integration across hardware, firmware, and mechanical domains."
      }
    }
  ],

  languages: [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "B2 (Profesional / Académico)", en: "B2 (Professional / Academic)" } },
    { name: { es: "Japonés", en: "Japanese" }, level: { es: "En progreso", en: "In Progress" } },
    { name: { es: "Coreano", en: "Korean" }, level: { es: "En progreso", en: "In Progress" } }
  ]
};

if (typeof window !== "undefined") {
  window.cvData = cvData;
}
