/**
 * Curriculum & Research Portfolio Data
 * Sebastián Castañeda — Mechatronics Engineer & Aspiring PhD Researcher
 */

const cvData = {
  personal: {
    name: "Sebastián Castañeda",
    fullName: "Sebastián David Castañeda Moncada",
    title: "Mechatronics Engineer in Training",
    subtitle: "Mechatronics Engineering Student | Aspiring PhD Researcher",
    tagline: "Mechatronics Engineering student at Universidad Militar Nueva Granada, working on robotic manipulation, control systems, computer vision, embedded systems and intelligent automation.",
    statusBadge: "Graduating 2027 — Seeking PhD Positions (Japan, South Korea, Germany)",
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
    bio: `Mechatronics Engineering student at Universidad Militar Nueva Granada, with research and engineering experience in robotics, control systems, intelligent automation, embedded systems, computer vision, and advanced manufacturing.

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

  // Target Research Environments (PhD Strategy)
  targetEnvironments: {
    countries: [
      {
        country: "Japan",
        status: "Primary Interest",
        universities: [
          "UTokyo (University of Tokyo)",
          "Tokyo Science (Tokyo Tech)",
          "Tohoku University",
          "Osaka University",
          "Kyoto University"
        ]
      },
      {
        country: "South Korea",
        status: "Primary Interest",
        universities: [
          "KAIST",
          "POSTECH",
          "SNU (Seoul National University)",
          "UNIST",
          "GIST"
        ]
      },
      {
        country: "Germany",
        status: "Exploring",
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
        country: "Japan",
        institution: "University of Tokyo / Tokyo Science",
        lab: "Humanoid & Manipulator Kinematics Lab",
        researchTopic: "Anthropomorphic Robotic Manipulation & Inverse Kinematics",
        alignment: "Direct alignment with my research on 6-DOF anthropomorphic manipulator digital twins and ROS2 trajectory planning.",
        status: "Preparing Outreach (Targeting Fall 2027)"
      },
      {
        country: "South Korea",
        institution: "KAIST / POSTECH",
        lab: "Humanoid & Autonomous Systems Center",
        researchTopic: "Dynamic Control & Trajectory Planning for Complex Robots",
        alignment: "Matches my work in MATLAB Simscape physical modeling, cascade motor control, and adaptive control algorithms.",
        status: "Targeting Fall 2027 Entry"
      },
      {
        country: "Germany",
        institution: "DLR / TUM",
        lab: "Institute of Robotics and Mechatronics",
        researchTopic: "Space & Planetary Rover Manipulation",
        alignment: "Fits my experience as Mechanical Lead for the University Rover Challenge (URC) and custom biocomposite manufacturing.",
        status: "Exploring Laboratory Openings"
      }
    ]
  },

  // Structured Scientific Research Projects
  researchProjects: [
    {
      title: "6-DOF Anthropomorphic Manipulator Digital Twin & Kinematics",
      type: "Research Project",
      subtitle: "Kinematic modeling, trajectory planning, and ROS2 / Simscape co-simulation.",
      problem: "Real-time trajectory planning and accurate inverse kinematics for 6-DOF anthropomorphic arms suffer from singularity states and dynamic modeling discrepancies in co-simulation environments.",
      methodology: "Formulated closed-form and numerical inverse kinematics using DH parameters and Jacobian matrices. Built physical multibody CAD dynamics in MATLAB Simscape and linked with ROS2 nodes.",
      model: "6-DOF Anthropomorphic chain with spherical wrist, parameterized link inertias, and motor torque limits.",
      simulation: "ROS2 Jazzy / Humble integrated with Simscape Multibody co-simulation for joint space and cartesian space motion.",
      results: "Achieved sub-millimeter cartesian end-effector positioning accuracy with zero singular configuration lockups during smooth trajectory generation.",
      conclusions: "Demonstrated seamless integration of ROS2 motion planners with Simscape physical models for hardware-in-the-loop verification.",
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
      subtitle: "Property recovery of recycled 3D printing filaments using Yucca nanocellulose biocomposites.",
      problem: "Recycled thermoplastic filaments suffer severe tensile strength degradation and thermal fatigue after repeated additive manufacturing cycles.",
      methodology: "Synthesized Yucca nanocellulose bio-additives, blended with recycled polymer micro-pellets, and extruded custom filaments under monitored extrusion thermal profiles.",
      model: "Biocomposite structural reinforcement model and tensile stress-strain distribution analysis.",
      simulation: "Thermal extrusion simulation and finite element tensile stress modeling on standardized ASTM D638 specimen geometry.",
      results: "Restored tensile yield strength by over 28% compared to un-reinforced recycled polymer filaments, meeting Industry 4.0 mechanical specifications.",
      conclusions: "Yucca nanocellulose serves as a high-efficiency bio-reinforcement for sustainable circular additive manufacturing.",
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
      subtitle: "Comparative analysis of discrete PID, Root Locus, and deadbeat control algorithms.",
      problem: "Single-loop motor position controllers experience overshoot and poor disturbance rejection under fluctuating load torque.",
      methodology: "Implemented dual-loop cascade control architecture (inner high-bandwidth velocity loop, outer position loop). Formulated and tested Discrete PID, Root Locus (LGR), and Deadbeat (Oscilaciones Muertas) controllers.",
      model: "Transfer function identification of DC motor with encoder feedback and driver non-linearities.",
      simulation: "Simulink dynamic simulations under step responses, frequency response Bode plots, and disturbance injection.",
      results: "Cascade Deadbeat & Discrete PID structure eliminated overshoot while reducing settling time by 45%.",
      conclusions: "Cascade control architectures provide superior stiffness and disturbance rejection for precision robotic joints.",
      evidence: [
        { label: "Research Report", type: "pdf", url: "#" },
        { label: "Simulink Models", type: "code", url: "#" },
        { label: "Response Plots", type: "data", url: "#" }
      ]
    }
  ],

  // Structured Applied Engineering Projects
  engineeringProjects: [
    {
      title: "University Rover Challenge (URC) — Mars Rover",
      type: "Engineering Project",
      role: "Mechanical Lead & Project Manager",
      description: "Designed, engineered, and manufactured an autonomous multi-terrain planetary ROVER for the University Rover Challenge (URC) held in Utah, USA.",
      highlights: [
        "Led chassis geometry optimization, rocker-bogie suspension, and 6-DOF manipulator integration.",
        "Managed CAD manufacturing workflows across 5-axis CNC machining, laser cutting, and 3D printing."
      ],
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
      role: "Lead Systems & Calibration Engineer",
      description: "Engineered and calibrated an industrial polymer extrusion system dedicated to formulating advanced bio-composite filaments.",
      highlights: [
        "Implemented closed-loop PID thermal controllers for multi-zone heating barrels.",
        "Designed precision optical filament diameter sensor feedback loop."
      ],
      evidence: [
        { label: "System Schematics", type: "pdf", url: "#" },
        { label: "Photos", type: "photo", url: "#" },
        { label: "Firmware Code", type: "code", url: "#" }
      ]
    }
  ],

  // Research & Technical Expertise (Toolkit)
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
    { name: "Español (Spanish)", level: "Nativo / Native" },
    { name: "Inglés (English)", level: "B2 (Profesional / Académico)" },
    { name: "Japonés (Japanese)", level: "En progreso / In Progress" },
    { name: "Coreano (Korean)", level: "En progreso / In Progress" }
  ]
};

if (typeof window !== "undefined") {
  window.cvData = cvData;
}
