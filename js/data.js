/**
 * Curriculum & Research Portfolio Data
 * Sebastián Castañeda - Mechatronics Engineer & PhD Applicant
 * 
 * Edit this file to update any information on your website!
 */

const cvData = {
  personal: {
    name: "Sebastián Castañeda",
    fullName: "Sebastián David Castañeda Moncada",
    title: "Mechatronics Engineer in Training",
    subtitle: "Robotics & Intelligent Automation Research",
    tagline: "Specializing in Robotic Manipulators, Advanced Control Systems, Kinematics/Dynamics, ROS2, and Biocomposite Industry 4.0 Materials.",
    statusBadge: "Graduating 2027 — Seeking PhD Positions (Japan, South Korea, Germany)",
    university: "Universidad Militar Nueva Granada",
    email: "ing.sebastiand.castaneda@gmail.com",
    phone: "+57 320 327 0238",
    whatsappLink: "https://wa.me/573203270238",
    birthDate: "2003-04-01", // YYYY-MM-DD for automatic age calculation
    profileImg: "images/profile_picture.png",
    github: "https://github.com/stechx2020",
    linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-david-casta%C3%B1eda-moncada-954444286",
    scholar: "https://scholar.google.com/",
    location: "Bogotá, Colombia",
    bio: `Mechatronics Engineering student at Universidad Militar Nueva Granada, with active research and engineering experience in robotics, control systems, intelligent automation, embedded systems, computer vision, and advanced manufacturing.

My research experience includes robotic manipulators, kinematic and dynamic modeling, trajectory planning, control systems, Industry 4.0, polymer composites, and additive manufacturing. I have participated in research groups including VOLTA and IIED, working on projects involving mechanical-property recovery of recycled polymer filaments using nanocellulose additives, robotic manipulation, and MATLAB/Simulink-based modeling and control.

My current research interests are focused on robotic systems, particularly anthropomorphic and autonomous robots, with broader interests in aerial, underwater, space, and bio-inspired robotics.

I am interested in pursuing doctoral research in robotics, autonomous systems, intelligent automation, and advanced robotic platforms, with the goal of joining an international research laboratory immediately after completing my undergraduate degree.`
  },

  education: [
    {
      degree: "B.Sc. in Mechatronics Engineering (Ingeniería en Mecatrónica)",
      institution: "Universidad Militar Nueva Granada (Public University)",
      location: "Bogotá, Colombia",
      period: "2022 — 2027 (Expected Graduation)",
      status: "Currently Enrolled (Undergraduate)",
      details: [
        "Focus on Robotics, Control Systems, Multibody Kinematics/Dynamics, and Industrial Automation.",
        "Active member of VOLTA and IIED research groups.",
        "Undergraduate Thesis (Trabajo de Grado) in progress."
      ]
    }
  ],

  researchGroups: [
    {
      name: "VOLTA & IIED Research Groups",
      role: "Undergraduate Student Researcher",
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
      category: "Primary PhD Focus",
      topics: [
        "Anthropomorphic & Humanoid Robotics",
        "Kinematic & Dynamic Modeling (Up to 6 DOF)",
        "Advanced & Adaptive Control Systems",
        "ROS2 & Digital Twin Simulations"
      ]
    },
    {
      category: "Future & Greenfield Horizons",
      topics: [
        "Zoomorphic & Bio-Inspired Robotics",
        "Aerial & Autonomous UAV Systems",
        "Underwater & Submarine Robotics",
        "Space Robotics & Planetary Rovers"
      ]
    }
  ],

  targetPhD: {
    intent: "Immediate insertion into an international PhD program right after B.Sc. graduation in 2027.",
    destinations: [
      {
        country: "Japan 🇯🇵",
        universities: [
          "University of Tokyo (UTokyo)",
          "Institute of Science Tokyo (Tokyo Tech)",
          "Tohoku University",
          "Osaka University",
          "Kyoto University",
          "Nagoya University",
          "Nara Institute of Science and Technology (NAIST)",
          "Kyushu University",
          "Waseda University",
          "University of Tsukuba"
        ]
      },
      {
        country: "South Korea 🇰🇷",
        universities: [
          "KAIST (Korea Advanced Institute of Science & Technology)",
          "Seoul National University (SNU)",
          "POSTECH (Pohang University of Science and Technology)",
          "KIRO (Korea Institute of Robot and Human-site Interaction)",
          "Hanyang University (Seoul / ERICA Campus)",
          "UNIST (Ulsan National Institute of Science and Technology)",
          "DGIST (Daegu Gyeongbuk Institute of Science and Technology)",
          "GIST (Gwangju Institute of Science and Technology)",
          "Sungkyunkwan University (SKKU)",
          "KITECH (Korea Institute of Industrial Technology)"
        ]
      },
      {
        country: "Germany 🇩🇪",
        universities: [
          "Technical University of Munich (TUM)",
          "Karlsruhe Institute of Technology (KIT)",
          "RWTH Aachen University",
          "German Aerospace Center (DLR) / TUM",
          "University of Stuttgart",
          "TU Dresden",
          "TU Darmstadt",
          "University of Bonn",
          "University of Freiburg",
          "DFKI (German Research Center for AI) / Univ. of Bremen"
        ]
      }
    ]
  },

  projects: [
    {
      title: "University Rover Challenge (URC) — Mars Rover",
      role: "Mechanical Lead & Project Manager",
      tags: ["Robotics", "Rover", "SolidWorks", "URC Utah", "Leadership"],
      description: "Led the mechanical design, structural iteration, and manufacturing of an autonomous multi-terrain ROVER for the internationally acclaimed University Rover Challenge (URC) held in Utah, USA.",
      highlights: [
        "Iterative mechanical refinement of rover suspension, chassis, and robotic manipulator.",
        "Coordinated multidisciplinary team across mechanical design, electronics, and navigation."
      ]
    },
    {
      title: "Nanocellulose Recycled Polymer Filament Extrusion (Industry 4.0)",
      role: "Lead Researcher",
      tags: ["Biocomposites", "Nanocellulose", "Industry 4.0", "Materials Testing"],
      description: "Research project focusing on the recovery of mechanical properties of recycled Industry 4.0 polymer filaments by synthesizing Yucca nanocellulose bio-additives.",
      highlights: [
        "Commissioned and calibrated a polymer filament extruder for custom formulation.",
        "Executed standardized mechanical stress/tensile testing on 3D printed test specimens."
      ]
    },
    {
      title: "6-DOF Anthropomorphic Manipulator Digital Twin & Inverse Kinematics",
      role: "Robotics Researcher",
      tags: ["MATLAB", "Simscape Multibody", "Kinematics", "ROS2", "Robotics"],
      description: "Developed complete inverse kinematic models and Simscape Multibody digital twins for a 6 DOF anthropomorphic robotic arm.",
      highlights: [
        "Calculated closed-form and numerical inverse kinematics for complex trajectories.",
        "Integrated ROS/ROS2 trajectory planning with Simscape Multibody simulation."
      ]
    },
    {
      title: "Cascade Control System for DC Motor Position & Velocity",
      role: "Control Systems Lead",
      tags: ["Control Theory", "Simulink", "MATLAB", "Embedded Systems"],
      description: "Designed, simulated, and implemented cascade control loops (inner velocity loop, outer position loop) for precision DC motor drives.",
      highlights: [
        "Compared classical discrete PID, LGR (Root Locus), deadbeat control (oscilaciones muertas), and plant cancellation techniques."
      ]
    }
  ],

  roboticsMatrix: {
    manipulators: [
      "3-DOF SCARA Robot (Designed & Built)",
      "3-DOF Anthropomorphic Robot Arm",
      "6-DOF Anthropomorphic Robot Arm",
      "Mobile Remote-Operated Robot Platform"
    ],
    ros: [
      "ROS / ROS2 Architecture",
      "Digital Twin Generation",
      "Kinematic & Dynamic Trajectory Planning"
    ],
    matlabSimulink: [
      "Simscape Multibody Physical Modeling",
      "Simulink Control Loop Simulation",
      "Mathematical Plant Modeling & Identification"
    ],
    computerVision: [
      "OpenCV Computer Vision Pipelines",
      "YOLO Deep Learning Neural Network Training",
      "Facial & Object Recognition",
      "3D Spatial Coordinate Estimation"
    ],
    controlTheory: [
      "Discrete PID Control",
      "Root Locus (LGR) Synthesis",
      "Deadbeat Control (Oscilaciones Muertas)",
      "Plant Cancellation Technique",
      "Servosystems & Adaptive Control",
      "Deep Learning Based Control"
    ],
    kinematicsDynamics: [
      "Forward & Inverse Kinematics up to 6 DOF",
      "Manipulator Dynamics up to 3 DOF (Lagrange-Euler / Newton-Euler)",
      "Differential Mobile Robot Kinematics"
    ]
  },

  skills: {
    programming: ["Python", "C / C++", "MATLAB", "Java"],
    embeddedHardware: ["Arduino", "ESP32", "Raspberry Pi", "STM32 Microcontrollers"],
    cadFabrication: [
      "SolidWorks (Advanced CAD)",
      "Blender 3D",
      "3D Printing (Advanced FDM / Materials)",
      "CNC Machining",
      "Laser Cutting & Engraving"
    ],
    electronicsEDA: [
      "Electronic Circuit Design",
      "Multilayer PCB Design (EasyEDA Pro)",
      "Sensor Integration & Signal Conditioning"
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
        abstract: "Investigation on biocomposite extrusion techniques using yucca nanocellulose to restore structural integrity in recycled polymer filaments for Industry 4.0 3D printing applications."
      },
      {
        title: "Simscape Multibody Digital Twin and Kinematic Trajectory Planning for a 6-DOF Anthropomorphic Manipulator",
        authors: "S. Castañeda, et al.",
        venue: "In Preparation for Robotics Conference",
        type: "Paper in Preparation",
        year: "2026",
        abstract: "Development of exact inverse kinematics and trajectory planning integrated into a ROS/Simulink co-simulation environment."
      },
      {
        title: "National & Regional Engineering Congress Presentations (Ponencias)",
        authors: "S. Castañeda",
        venue: "Academic Engineering Conferences",
        type: "Conference Presentations (2)",
        year: "2025 — 2026",
        abstract: "Presented research findings on biocomposites and robotic manipulator kinematics across 2 national presentations and 1 congress."
      }
    ]
  },

  awards: [
    {
      title: "2nd Place — ICONTEC Innovation Competition",
      year: "2026",
      organization: "ICONTEC (Instituto Colombiano de Normas Técnicas y Certificación)",
      description: "Recognized for innovative engineering methodology and research impact."
    },
    {
      title: "3rd Place — INGnova Engineering Competition",
      year: "2025",
      organization: "Universidad Militar Nueva Granada",
      description: "Awarded for advanced mechatronic design and robotics prototyping."
    }
  ],

  leadership: [
    {
      role: "Mechanical Lead — Mars Rover URC",
      organization: "Universidad Militar Nueva Granada Rover Team",
      details: "Directed mechanical design, CAD modeling, materials selection, and machining for the University Rover Challenge."
    },
    {
      role: "Lead of Extrusion & Biopolymer Setup",
      organization: "VOLTA Research Group",
      details: "Managed setup, calibration, and experimental protocol for custom polymer extrusion lines."
    },
    {
      role: "Project Manager — Mechatronic Systems Design",
      organization: "UMNG Engineering Lab",
      details: "Managed project lifecycles, milestones, and technical integration across hardware, firmware, and mechanical domains."
    }
  ],

  languages: [
    { name: "Español (Spanish)", level: "Nativo / Native", flag: "🇨🇴" },
    { name: "Inglés (English)", level: "B2 (Profesional / Académico)", flag: "🇬🇧" },
    { name: "Japonés (Japanese)", level: "En progreso / In Progress", flag: "🇯🇵" },
    { name: "Coreano (Korean)", level: "En progreso / In Progress", flag: "🇰🇷" }
  ]
};

if (typeof window !== "undefined") {
  window.cvData = cvData;
}
