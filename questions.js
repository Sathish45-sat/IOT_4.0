/**
 * NPTEL Practice Question Bank
 * Structured by Week / Assignment for easy expansion and navigation.
 * Options shuffled randomly while preserving 100% answer accuracy.
 */
const assignmentsData = {
  "week1": {
    "id": "week1",
    "title": "Week 01 : Assignment 01",
    "topic": "Introduction to IoT, Sensors & Protocols",
    "questions": [
      {
        "id": 1,
        "question": "Which sensor can detect gases like LPG, CH4, and CO?",
        "options": [
          "PIR",
          "HC-SR04",
          "DHT22",
          "MQ-5"
        ],
        "correctIndex": 3,
        "explanation": "MQ-5 is a gas sensor sensitive to LPG, natural gas (CH4), town gas, and carbon monoxide (CO)."
      },
      {
        "id": 2,
        "question": "Which modulation scheme does Zigbee use for the 2.4 GHz band?",
        "options": [
          "OQPSK",
          "QPSK",
          "FSK",
          "BPSK"
        ],
        "correctIndex": 0,
        "explanation": "Zigbee (IEEE 802.15.4) uses Offset Quadrature Phase Shift Keying (OQPSK) in the worldwide 2.4 GHz ISM band."
      },
      {
        "id": 3,
        "question": "What does the Constrained RESTful Environments (CoRE) framework include for service discovery?",
        "options": [
          "Resource Directory (RD)",
          "Registration Interface (RI)",
          "REST based protocols such as HTTP and CoAP",
          "All of the above"
        ],
        "correctIndex": 3,
        "explanation": "CoRE service discovery architecture includes the Registration Interface (RI), Resource Directory (RD), and RESTful protocols including CoAP and HTTP."
      },
      {
        "id": 4,
        "question": "What is the maximum data rate of Z-Wave communication technology?",
        "options": [
          "250 kbps",
          "100 kbps",
          "1 Mbps",
          "500 kbps"
        ],
        "correctIndex": 1,
        "explanation": "Z-Wave operates at speeds up to 100 kbps (supporting 9.6 kbps, 40 kbps, and 100 kbps)."
      },
      {
        "id": 5,
        "question": "Which protocol is CoAP based on?",
        "options": [
          "UDP",
          "FTP",
          "HTTP",
          "TCP"
        ],
        "correctIndex": 0,
        "explanation": "CoAP (Constrained Application Protocol) is designed for lightweight M2M communications and runs over UDP to reduce overhead."
      },
      {
        "id": 6,
        "question": "Which coding scheme is used by the IEEE 802.15.4 standard for transmitting information?",
        "options": [
          "THSS",
          "DSSS",
          "OFDM",
          "CSS"
        ],
        "correctIndex": 1,
        "explanation": "Direct Sequence Spread Spectrum (DSSS) is used by IEEE 802.15.4 physical layer to improve robustness and resist interference."
      },
      {
        "id": 7,
        "question": "What does 'Range' indicate in a sensor?",
        "options": [
          "The difference between the standard value and the value produced by the sensor",
          "The highest and the lowest value of the physical quantity within which the sensor can actually sense",
          "The smallest change in input that can be detected",
          "The correctness of the output"
        ],
        "correctIndex": 1,
        "explanation": "Range refers to the span between the minimum and maximum limit of the physical quantity that a sensor is specified to measure."
      },
      {
        "id": 8,
        "question": "Which organization has developed the ISA 100.11a standard?",
        "options": [
          "International Society of Automation",
          "International Studies Association",
          "Instrument Society of America",
          "International Solar Alliance"
        ],
        "correctIndex": 0,
        "explanation": "ISA 100.11a is a wireless networking standard developed by the International Society of Automation for industrial automation."
      },
      {
        "id": 9,
        "question": "Which of the following is/are the drawbacks of proprietary non-IP-based solutions?",
        "options": [
          "Interoperability",
          "Limited flexibility to end users",
          "Limited last-mile connectivity",
          "All of these"
        ],
        "correctIndex": 3,
        "explanation": "Non-IP proprietary IoT solutions often suffer from vendor lock-in, poor cross-vendor interoperability, and constrained last-mile connectivity."
      },
      {
        "id": 10,
        "question": "Which MQTT QoS Level is also known as “at most once” delivery?",
        "options": [
          "QoS 1",
          "QoS 0",
          "QoS 2",
          "None of these"
        ],
        "correctIndex": 1,
        "explanation": "QoS 0 represents 'At most once' (fire and forget), QoS 1 is 'At least once', and QoS 2 is 'Exactly once'."
      },
      {
        "id": 11,
        "question": "Fill in the blank space designated by the question mark in the typical IoT Node architecture:",
        "options": [
          "Processor",
          "Amplifier",
          "Repeater",
          "Snubber"
        ],
        "correctIndex": 0,
        "explanation": "In an IoT device/node architecture, the Processor (Microcontroller/Microprocessor) acts as the brain between signal conditioning and RF transceiver modules.",
        "diagram": "<div class=\"iot-diagram\">\n          <div class=\"diagram-node\">Sensor / Actuator</div>\n          <span class=\"diagram-arrow\">⇄</span>\n          <div class=\"diagram-node\">Signal Conditioning</div>\n          <span class=\"diagram-arrow\">⇄</span>\n          <div class=\"diagram-node highlight-q\">?</div>\n          <span class=\"diagram-arrow\">⇄</span>\n          <div class=\"diagram-node\">Transceiver (RF)</div>\n          <span class=\"diagram-arrow\">⇄</span>\n          <div class=\"diagram-node\">Antenna</div>\n        </div>"
      },
      {
        "id": 12,
        "question": "Which of the following best describes a vector sensor?",
        "options": [
          "Its response depends on the magnitude, direction, and orientation of the input parameter.",
          "Its response depends only on the magnitude of the input.",
          "Its response depends only on the temperature.",
          "Its response is independent of the input parameter."
        ],
        "correctIndex": 0,
        "explanation": "Vector sensors measure directional physical quantities where output depends on both magnitude and spatial orientation (e.g., accelerometers, magnetometers)."
      },
      {
        "id": 13,
        "question": "Which of the following frequency ranges is used by 6LoWPAN worldwide?",
        "options": [
          "5.8 GHz",
          "902–929 MHz",
          "1800–1900 MHz",
          "2400–2483.5 MHz"
        ],
        "correctIndex": 3,
        "explanation": "6LoWPAN over IEEE 802.15.4 operates globally in the 2.4 GHz ISM band (2400–2483.5 MHz), while sub-GHz bands differ by geographic region."
      },
      {
        "id": 14,
        "question": "In DDS RTPS, data is referred to as:",
        "options": [
          "Topics",
          "Packets",
          "Messages",
          "Frames"
        ],
        "correctIndex": 0,
        "explanation": "In Data Distribution Service (DDS) and Real-Time Publish-Subscribe (RTPS), information units published and subscribed to are identified by 'Topics'."
      },
      {
        "id": 15,
        "question": "Which of the following IoT protocols is based on the session layer of the OSI model?",
        "options": [
          "DTLS",
          "CoAP",
          "MQTT",
          "AMQP"
        ],
        "correctIndex": 0,
        "explanation": "DTLS (Datagram Transport Layer Security) operates at the session/transport security boundary in the IoT stack providing TLS-equivalent security over UDP."
      }
    ]
  },
  "week2": {
    "id": "week2",
    "title": "Week 02 : Assignment 02",
    "topic": "Industry 4.0, Cyber Physical Systems & Smart Factories",
    "questions": [
      {
        "id": 1,
        "question": "What is a significant characteristic of new materials in the context of the Fourth Industrial Revolution?",
        "options": [
          "Lighter, stronger, recyclable, and adaptive",
          "High cost and scarcity",
          "Easily available but very expensive",
          "Non-recyclable and heavy"
        ],
        "correctIndex": 0,
        "explanation": "Industry 4.0 leverages advanced smart materials that are lighter, stronger, recyclable, and highly adaptive to environmental changes."
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a characteristic of the Fourth Industrial Revolution?",
        "options": [
          "Use of artificial intelligence and machine learning",
          "Invention of the steam engine",
          "Development of Cyber Physical Systems (CPS)",
          "Extensive use of the ubiquitous and mobile internet"
        ],
        "correctIndex": 1,
        "explanation": "The steam engine was the breakthrough invention of Industry 1.0 (First Industrial Revolution), not Industry 4.0."
      },
      {
        "id": 3,
        "question": "What is considered the main nervous system of any manufacturing industry?",
        "options": [
          "Human Resources",
          "Supply Chain Management (SCM)",
          "Marketing",
          "Information and Communication Technology (ICT)"
        ],
        "correctIndex": 3,
        "explanation": "Information and Communication Technology (ICT) connects all physical machines, digital platforms, and business operations, serving as the industry's nervous system."
      },
      {
        "id": 4,
        "question": "Which of the following is not a characteristic of a sustainable industry?",
        "options": [
          "Energy efficiency",
          "Low-waste production",
          "Conservation of resource",
          "Reliance on government subsidy"
        ],
        "correctIndex": 3,
        "explanation": "A sustainable industry emphasizes self-sustaining resource conservation, energy efficiency, and waste reduction, not continuous dependence on subsidies."
      },
      {
        "id": 5,
        "question": "What does L, D and T stand for under ‘People Engagement’ in the Lean production System?",
        "options": [
          "Lean, Diverse, Timid",
          "Learn, Do, Teach",
          "Loan, Deploy, Test",
          "Leverage, Divulge, Teardown"
        ],
        "correctIndex": 1,
        "explanation": "L, D and T stands for Learn, Do, Teach—promoting individual continuous learning, practical hands-on execution, and peer teaching."
      },
      {
        "id": 6,
        "question": "Which resource is associated with the 'Optimization' categorization of Smart and connected products?",
        "options": [
          "Marketing data",
          "Financial reports",
          "Manual controls",
          "Optimization algorithms"
        ],
        "correctIndex": 3,
        "explanation": "Optimization algorithms drive smart products by analyzing real-time data to maximize efficiency, reduce energy use, and minimize downtime."
      },
      {
        "id": 7,
        "question": "State True or False. The amalgamation of CPS and the evolution of Internet-based technologies led to the development of the Industrial Internet.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0,
        "explanation": "True. The merging of Cyber-Physical Systems (CPS) with advanced Internet/cloud architecture gave rise to the Industrial Internet (IIoT)."
      },
      {
        "id": 8,
        "question": "State True or False. Real-time supply chain monitoring reduces inventory and capital requirements.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0,
        "explanation": "True. Real-time tracking eliminates excess buffer inventories, streamlines lead times, and reduces required working capital."
      },
      {
        "id": 9,
        "question": "In the context of Industry 4.0, what is the full form of CPS?",
        "options": [
          "Controlled Power System",
          "Cloud Processing Service",
          "Cyber Physical Systems",
          "Customer Provisioning Service"
        ],
        "correctIndex": 2,
        "explanation": "CPS stands for Cyber-Physical Systems, seamless integrations of computation, networking, and physical physical machinery."
      },
      {
        "id": 10,
        "question": "What does ERP stand for in the context of ICT?",
        "options": [
          "Enhanced Reporting Protocol",
          "Enterprise Resource Planning",
          "Electronic Resource Platform",
          "Economic Resource Planning"
        ],
        "correctIndex": 1,
        "explanation": "ERP stands for Enterprise Resource Planning, centralized software systems used to manage and integrate core business and manufacturing operations."
      },
      {
        "id": 11,
        "question": "What is a 'value stream' in Lean Production System?",
        "options": [
          "A type of waste reduction",
          "A method of employee training",
          "All the actions required for a product from order to delivery",
          "A set of tools for production"
        ],
        "correctIndex": 2,
        "explanation": "The value stream encompasses the entire sequence of activities—both value-adding and essential non-value-adding—required to bring a product from concept/order to customer."
      },
      {
        "id": 12,
        "question": "Which of the following are key attributes of a smart business model?",
        "options": [
          "Value proposition, revenue streams, and technologies",
          "Traditional marketing, fixed costs, and limited innovation",
          "Centralized control, non-digital strategies, and fixed processes",
          "Manual processes, cost reduction, and labor dependency"
        ],
        "correctIndex": 0,
        "explanation": "Smart business models are defined by digital-enabled value propositions, dynamic revenue models, and transformative technologies."
      },
      {
        "id": 13,
        "question": "Which of the following is not a component of a Smart Factory?",
        "options": [
          "Physical ledgers",
          "Smart machines",
          "Information Technology",
          "Smart manufacturing processes"
        ],
        "correctIndex": 0,
        "explanation": "Physical ledgers represent outdated manual record keeping; modern Smart Factories use digital records, cloud storage, and automated telemetry."
      },
      {
        "id": 14,
        "question": "In which format is healthcare data transmitted to maintain data uniformity and interoperability?",
        "options": [
          "LH-5",
          "HD-7",
          "HL-7",
          "None of these"
        ],
        "correctIndex": 2,
        "explanation": "HL-7 (Health Level Seven) is the global standard format for exchanging, integrating, and retrieving electronic healthcare information."
      },
      {
        "id": 15,
        "question": "What are the key characteristics of agility?",
        "options": [
          "Flexibility, Adaptation, and Self-configuration",
          "Automation, Documentation, and Testing",
          "Planning, Controlling, and Monitoring",
          "Stability, Rigidity, and Standardization"
        ],
        "correctIndex": 0,
        "explanation": "Agility in Industry 4.0 refers to the capability of systems to rapidly adapt, exhibit high operational flexibility, and autonomously self-configure."
      }
    ]
  },
  "week3": {
    "id": "week3",
    "title": "Week 03 : Assignment 03",
    "topic": "Cyber Physical Systems (CPS), 5C Architecture & AI in IIoT",
    "questions": [
      {
        "id": 1,
        "question": "What does \"reactive computation\" in CPS signify?",
        "options": [
          "Complete isolation from physical feedback",
          "Predefined computation processes",
          "Systems with zero response time",
          "Interaction with the environment in an ongoing manner"
        ],
        "correctIndex": 3,
        "explanation": "Reactive computation in Cyber-Physical Systems (CPS) continuously tracks, interacts with, and responds to environmental inputs and changes in an ongoing manner."
      },
      {
        "id": 2,
        "question": "Fill in the blanks. In healthcare applications, CPS is used for __________.",
        "options": [
          "Manual monitoring of vitals",
          "Image-guided surgery and therapy",
          "Static hospital management systems",
          "Front desk management"
        ],
        "correctIndex": 1,
        "explanation": "In healthcare, CPS integrates sensing, computational intelligence, and actuation for advanced image-guided surgery, robotic therapy, and automated life support."
      },
      {
        "id": 3,
        "question": "Which level in the \"5C Architecture\" ensures the gathering of precise status information of machines?",
        "options": [
          "Conversion",
          "Configuration",
          "Cognition",
          "Cyber"
        ],
        "correctIndex": 3,
        "explanation": "The Cyber level functions as the central information hub where complex analytics gather precise fleet and machine status information."
      },
      {
        "id": 4,
        "question": "Fill in the blanks. Intelligent sensors are capable of __________________.",
        "options": [
          "Only sensing data",
          "Limited communication",
          "Basic analog-to-digital conversion",
          "Processing sensed data and managing external sensors/devices"
        ],
        "correctIndex": 3,
        "explanation": "Intelligent sensors possess on-board microprocessing capabilities to perform local data conditioning, self-testing, and external device control."
      },
      {
        "id": 5,
        "question": "How many steps are there in the PLM solution approach in Industry 4.0?",
        "options": [
          "7",
          "8",
          "12",
          "10"
        ],
        "correctIndex": 3,
        "explanation": "The structured Product Lifecycle Management (PLM) solution approach in Industry 4.0 consists of 10 systematic implementation steps."
      },
      {
        "id": 6,
        "question": "Which of the following is not a key component of an AR Device?",
        "options": [
          "Sensors",
          "Cameras",
          "Remote Control",
          "Projection Screen"
        ],
        "correctIndex": 2,
        "explanation": "Augmented Reality (AR) headsets integrate onboard sensors, cameras, displays/optics, and microprocessors. Remote controls are not intrinsic key components."
      },
      {
        "id": 7,
        "question": "Which of the following is NOT a challenge of AI in IIoT?",
        "options": [
          "Training AI models",
          "Understanding data",
          "Lack of available data",
          "Connecting devices"
        ],
        "correctIndex": 2,
        "explanation": "IIoT generates an enormous deluge of telemetry data from industrial machines, so a lack of data is not a challenge—rather, processing and understanding that massive data is the challenge."
      },
      {
        "id": 8,
        "question": "Which of the following is not one of the primary constraints of mobile CPS?",
        "options": [
          "Design aesthetics",
          "Security",
          "Stability of the network",
          "Power requirement"
        ],
        "correctIndex": 0,
        "explanation": "Mobile Cyber-Physical Systems are functionally constrained by battery power, intermittent wireless network stability, and security risks, not aesthetic design."
      },
      {
        "id": 9,
        "question": "What are the components of the 5C architecture for CPS?",
        "options": [
          "Creation, Controlling, Continuation, Convergence, Compatibility",
          "Calculation, Catalysis, Convergence, Convenience, Cognizance",
          "Connection, Conversion, Cyber, Cognition, Configuration",
          "None of these"
        ],
        "correctIndex": 2,
        "explanation": "The 5C architecture consists of: Connection (Level 1), Conversion (Level 2), Cyber (Level 3), Cognition (Level 4), and Configuration (Level 5)."
      },
      {
        "id": 10,
        "question": "What is one of the key features of CPS in terms of computation?",
        "options": [
          "Limited computation",
          "Static computation",
          "Redundant computation",
          "Reactive computation"
        ],
        "correctIndex": 3,
        "explanation": "CPS computation is fundamentally reactive—it maintains an ongoing, event-driven interaction with physical world variables and actuators."
      },
      {
        "id": 11,
        "question": "What is a collaboration platform in the context of Industry 4.0?",
        "options": [
          "A financial management system",
          "A social media platform for employees",
          "A traditional project management tool",
          "A type of business software that combines organizational networking capacities with operations"
        ],
        "correctIndex": 3,
        "explanation": "In Industry 4.0, a collaboration platform is an enterprise software system unifying networking, shared digital engineering models, and plant operations."
      },
      {
        "id": 12,
        "question": "What is a key feature of Augmented Reality (AR)?",
        "options": [
          "Completely replacing the physical environment",
          "Operating in isolated systems",
          "Only providing auditory feedback",
          "Enhancing the present perception of reality"
        ],
        "correctIndex": 3,
        "explanation": "Augmented Reality (AR) enhances our perception of physical reality by overlaying contextual digital information and computer-generated graphics onto real-world scenes."
      },
      {
        "id": 13,
        "question": "Who proposed the first use of the phrase \"Artificial Intelligence\"?",
        "options": [
          "Marvin Minsky",
          "Alan Turing",
          "Herbert Simon",
          "John McCarthy"
        ],
        "correctIndex": 3,
        "explanation": "Computer scientist John McCarthy coined the phrase 'Artificial Intelligence' in 1955 when organizing the historic 1956 Dartmouth Conference."
      },
      {
        "id": 14,
        "question": "Which of the following statements is true?",
        "options": [
          "A program with AI uses a large database and an algorithmic search method",
          "A program without AI uses a large database and a heuristic search method",
          "A program without AI uses a large knowledge base and a heuristic search method",
          "A program with AI uses a large knowledge base and a heuristic search method"
        ],
        "correctIndex": 3,
        "explanation": "AI programs utilize knowledge bases and heuristic search techniques to reason and infer, whereas non-AI programs rely on strict procedural algorithms over databases."
      },
      {
        "id": 15,
        "question": "Which of the following are constraints of mobile CPS?",
        "options": [
          "Power requirement",
          "Network stability",
          "Security",
          "All of the above"
        ],
        "correctIndex": 3,
        "explanation": "Mobile CPS systems must manage all three major constraints: volatile wireless network connectivity, restricted battery life/power, and heightened security vulnerabilities."
      }
    ]
  },
  "week4": {
    "id": "week4",
    "title": "Week 04 : Assignment 04",
    "topic": "Industrial Internet (IIoT), Security & Smart Sensing",
    "questions": [
      {
        "id": 1,
        "question": "What does Application Security aim to protect against?",
        "options": [
          "Data breaches from the internet",
          "Unauthorized physical access",
          "Threats to the software applications",
          "Network architecture issues"
        ],
        "correctIndex": 2,
        "explanation": "Application security measures protect software applications against vulnerabilities, malicious threats, and unauthorized software manipulation."
      },
      {
        "id": 2,
        "question": "What is Ransomware?",
        "options": [
          "A system to enhance network speed",
          "A program that increases computer performance",
          "A method to secure data from unauthorized access",
          "A type of malware that provides a facility to the attacker to lock users’ computer files by using encryption and demand money to unlock them"
        ],
        "correctIndex": 3,
        "explanation": "Ransomware is malicious software that encrypts user files or systems, locking access until a financial ransom is paid."
      },
      {
        "id": 3,
        "question": "What is a major challenge in the deployment of IIoT?",
        "options": [
          "Lack of standardization",
          "Legacy installations",
          "Cybersecurity",
          "All of the above"
        ],
        "correctIndex": 3,
        "explanation": "IIoT deployments face severe obstacles including integrating decades-old legacy machines, safeguarding against cyber threats, and standardizing diverse communication protocols."
      },
      {
        "id": 4,
        "question": "What are the three waves of industrial level innovation according to GE?",
        "options": [
          "The Internet Revolution, The Digital Revolution, The Industrial Internet",
          "The Scientific Revolution, The Industrial Revolution, The Internet Revolution",
          "The Agricultural Revolution, The Internet Revolution, The Industrial Internet",
          "The Industrial Revolution, The Internet Revolution, The Industrial Internet"
        ],
        "correctIndex": 3,
        "explanation": "General Electric (GE) identified the three major innovation waves as: The Industrial Revolution, The Internet Revolution, and The Industrial Internet."
      },
      {
        "id": 5,
        "question": "What is a major drawback of the Industrial Revolution?",
        "options": [
          "It had no impact on the environment",
          "It enhanced the quality of life for all workers",
          "It reduced the use of fossil fuels",
          "It created a bad working environment and inefficient processes"
        ],
        "correctIndex": 3,
        "explanation": "The early Industrial Revolution resulted in hazardous working conditions, severe pollution, and inefficient resource consumption."
      },
      {
        "id": 6,
        "question": "Which component is NOT part of the configurations involved in smart sensors?",
        "options": [
          "Analog Detection Circuit",
          "Manual Control Unit",
          "Multiparameter Sensing Unit",
          "Digital Signal Conditioning Unit"
        ],
        "correctIndex": 1,
        "explanation": "Smart sensors are designed for autonomous digital measurement and automated processing; manual control units are not part of their architecture."
      },
      {
        "id": 7,
        "question": "Which sector is predicted to have the highest growth in Industry 4.0?",
        "options": [
          "Manufacturing",
          "Electronics",
          "Automotive",
          "Defense"
        ],
        "correctIndex": 1,
        "explanation": "Driven by semiconductor demand, microcontrollers, smart sensors, and IoT edge hardware, the Electronics sector exhibits the fastest growth."
      },
      {
        "id": 8,
        "question": "What is the focus of the 'Control Layer' in the 5C Architecture for Cyber Physical Systems?",
        "options": [
          "Data collection",
          "Sensor-based monitoring",
          "Human-readable interpretation and data visualization",
          "Supervised control: Self-configure, Self-optimize, Self-adjust"
        ],
        "correctIndex": 3,
        "explanation": "The Control/Configuration layer applies cyber intelligence back to physical machines to enable self-configuring, self-optimizing, and self-adjusting autonomous operation."
      },
      {
        "id": 9,
        "question": "Why are IIoT Security Standards required, especially when diverse systems and equipment are integrated on a smart factory floor?",
        "options": [
          "To ensure that only new systems are implemented, not legacy ones.",
          "To reduce the cost of implementing IIoT.",
          "Because leaving security to individual IIoT implementers is dangerous and every weak line puts the whole factory at risk.",
          "To increase the complexity of the smart factory floor."
        ],
        "correctIndex": 2,
        "explanation": "In an interconnected factory floor, any single unsecured machine or sensor can serve as an entry point compromising the entire plant network."
      },
      {
        "id": 10,
        "question": "In the mining industry, how do sensor networks with gas sensors, strata monitoring devices, and RFID tags contribute to safety and efficiency?",
        "options": [
          "They only help in tracking miners’ locations.",
          "They provide early disaster warning, monitor working conditions, and help locate miners.",
          "They replace the need for human inspection.",
          "They are primarily used for communication between miners."
        ],
        "correctIndex": 1,
        "explanation": "Multi-parameter mining sensor networks detect hazardous toxic/combustible gases, monitor rock strata shifts, and locate underground personnel during emergencies."
      },
      {
        "id": 11,
        "question": "Who coined the term ”Industrial Internet”?",
        "options": [
          "IBM",
          "Intel",
          "Siemens",
          "General Electric (GE)"
        ],
        "correctIndex": 3,
        "explanation": "General Electric (GE) introduced the term 'Industrial Internet' in late 2012 to describe the convergence of industrial equipment with cloud analytics and IoT connectivity."
      },
      {
        "id": 12,
        "question": "In a milk packaging unit, how is flow measured?",
        "options": [
          "Using a thermometer",
          "Using a GPS module",
          "Via a spinning impeller that sends signals when milk flows",
          "With a smart camera"
        ],
        "correctIndex": 2,
        "explanation": "Liquid flow measurement utilizes turbine/impeller sensors that spin as fluid moves, generating electrical pulse signals proportional to flow volume."
      },
      {
        "id": 13,
        "question": "Which component is responsible for converting analog data to digital data in a smart sensor node?",
        "options": [
          "Processor",
          "DAC",
          "Memory",
          "ADC"
        ],
        "correctIndex": 3,
        "explanation": "An Analog-to-Digital Converter (ADC) translates continuous physical analog signals (voltages/currents) into digital binary values for processing."
      },
      {
        "id": 14,
        "question": "Fill in the blanks. Thames Water’s smart water management system, as an example of Industrial Process 4.0 operation efficiency, primarily benefits from _____________.",
        "options": [
          "Sensor-based equipment status monitoring and failure detection.",
          "Data monetization and pay-per-use models.",
          "Controlled power generation using weather forecasts.",
          "Augmented Reality-based problem diagnosis."
        ],
        "correctIndex": 0,
        "explanation": "Thames Water's smart network uses acoustic, pressure, and flow sensors for real-time asset condition monitoring and rapid pipe leak/failure detection."
      },
      {
        "id": 15,
        "question": "State true or false. In the case of spear phishing, the attackers send thousands of deceitful emails that resemble actual emails from credible sources, while email phishing attacks are targeted at a specific person or organization to obtain sensitive information.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1,
        "explanation": "False. The definitions are inverted: General email phishing blasts mass deceitful emails, whereas spear phishing specifically targets designated individuals or organizations."
      }
    ]
  },
  "week5": {
    "id": "week5",
    "title": "Week 05 : Assignment 05",
    "topic": "IIoT Business Models, IIRA Framework & Value Propositions",
    "questions": [
      {
        "id": 1,
        "question": "Which company employs the \"Air-as-a-Service\" model by using sensor-equipped air compressors where users pay per cubic meter of air?",
        "options": [
          "Magna Steyr",
          "Gehring",
          "John Deere",
          "Kaeser Kompressoren"
        ],
        "correctIndex": 3,
        "explanation": "Kaeser Kompressoren pioneered the 'Sigma Air Utility' Air-as-a-Service model using sensorized compressors where clients pay strictly per cubic meter of compressed air consumed."
      },
      {
        "id": 2,
        "question": "In the context of the Hitachi integrated IIoT platform, what is the name of the core IoT platform used for AI-powered advanced analytics?",
        "options": [
          "Predix",
          "MindSphere",
          "Connext",
          "Lumada"
        ],
        "correctIndex": 3,
        "explanation": "Hitachi's core IIoT platform for data integration and AI-powered industrial analytics is named Lumada."
      },
      {
        "id": 3,
        "question": "In the context of Smart Logistics, which company uses IoT and analytics to remotely monitor and optimize fuel consumption for refrigerated and dry cargo containers?",
        "options": [
          "Boeing",
          "Stanley Black & Decker",
          "Komatsu",
          "Maersk"
        ],
        "correctIndex": 3,
        "explanation": "Shipping giant Maersk installed IoT tracking devices on over 300,000 refrigerated shipping containers to optimize cooling power, fuel consumption, and temperature."
      },
      {
        "id": 4,
        "question": "In the building blocks of a business model, which of the following represents a quantitative value proposition?",
        "options": [
          "Customer experience",
          "Design",
          "Post-purchase cost reduction",
          "Brand perception"
        ],
        "correctIndex": 2,
        "explanation": "Quantitative value propositions are measurable numerical benefits like price, speed of service, and post-purchase operating cost reduction, unlike qualitative factors like design or brand perception."
      },
      {
        "id": 5,
        "question": "Which IoT business model enables businesses to virtually consolidate and share their IoT-enabled assets among multiple customers to minimize downtime and maximize utilization?",
        "options": [
          "Asset-Sharing Model",
          "Outcome-Based Model",
          "Subscription Model",
          "IoT-as-a-Service"
        ],
        "correctIndex": 0,
        "explanation": "The Asset-Sharing business model allows multiple organizations or clients to share pooled equipment capacity, maximizing overall asset utilization."
      },
      {
        "id": 6,
        "question": "In a Cloud-Based Business Model, which offering provides development-oriented platforms to facilitate the integration of applications into existing solutions?",
        "options": [
          "Platform-as-a-Service (PaaS)",
          "Software-as-a-Service (SaaS)",
          "Network-as-a-Service (NaaS)",
          "Infrastructure-as-a-Service (IaaS)"
        ],
        "correctIndex": 0,
        "explanation": "Platform-as-a-Service (PaaS) provides developers with a complete development runtime environment, APIs, middleware, and tools to build and integrate applications."
      },
      {
        "id": 7,
        "question": "In the functional flow of IIoT business models, which model specifically employs Cloud-based business models to gather data, analyze it, and sell it as a service?",
        "options": [
          "Product-Oriented Business Model",
          "Service-Oriented Business Model",
          "Asset-Sharing Business Model",
          "Process-Oriented Business Model"
        ],
        "correctIndex": 1,
        "explanation": "In a Service-Oriented business model, companies leverage cloud infrastructure to aggregate industrial telemetry, run predictive models, and deliver value-added insights as a recurring service."
      },
      {
        "id": 8,
        "question": "Which of the following is considered a lagging Key Performance Indicator (KPI) for Occupational Safety and Health (OSH)?",
        "options": [
          "Percentage of workers with adequate OSH training",
          "Frequency of observed unsafe behavior",
          "Number of fatalities",
          "Number of OSH audits"
        ],
        "correctIndex": 2,
        "explanation": "Lagging KPIs measure historical outcomes after an accident has already occurred (e.g. number of fatalities, lost-time injuries), whereas audits and training are leading indicators."
      },
      {
        "id": 9,
        "question": "According to the Industrial Internet Consortium (IIC), what is the primary purpose of their developed testbeds?",
        "options": [
          "To establish isolated machine operations away from the cloud",
          "To increase the processing downtime in manufacturing sectors",
          "To initiate, conceptualize, and rigorously test innovations before market launch",
          "To handle manual data entries for traditional factories"
        ],
        "correctIndex": 2,
        "explanation": "IIC testbeds provide collaborative, vendor-neutral test environments to conceptualize, prototype, and rigorously validate IIoT innovations and interoperability before commercial deployment."
      },
      {
        "id": 10,
        "question": "In the Business Viewpoint of the IIRA framework, what provides the logic regarding the merit of the vision and is validated by stakeholders?",
        "options": [
          "Fundamental Capabilities",
          "Values",
          "System Requirements",
          "Key Objectives"
        ],
        "correctIndex": 1,
        "explanation": "In the Industrial Internet Reference Architecture (IIRA) Business Viewpoint, Values articulate the underlying rationale and business justification confirming the merit of the vision."
      },
      {
        "id": 11,
        "question": "In the Usage Viewpoint of the IIRA framework, what describes the state of the IIoT system after the successful completion of an activity?",
        "options": [
          "Workflow",
          "Effect",
          "Constraints",
          "Trigger"
        ],
        "correctIndex": 1,
        "explanation": "In the IIRA Usage Viewpoint, the 'Effect' characterizes the post-condition or resulting system state following the successful execution of an operational activity."
      },
      {
        "id": 12,
        "question": "Which functional domain in the IIRA functional viewpoint represents the set of functions responsible for the provisioning, deployment, and management of assets?",
        "options": [
          "Operations domain",
          "Application domain",
          "Control domain",
          "Information domain"
        ],
        "correctIndex": 0,
        "explanation": "The Operations domain in the IIRA Functional Viewpoint is responsible for asset provisioning, fleet deployment, diagnostics, predictive maintenance, and lifecycle management."
      },
      {
        "id": 13,
        "question": "An IIoT system architect is designing a framework that requires the semantic transformation of assembled data and the subsequent implementation of specific rules to realize a targeted business function. According to the IIRA Functional Viewpoint, which two domains are specifically responsible for handling these respective requirements?",
        "options": [
          "Information domain and Business domain",
          "Application domain and Control domain",
          "Operations domain and Business domain",
          "Information domain and Application domain"
        ],
        "correctIndex": 3,
        "explanation": "The Information domain handles data fusion, ingestion, and semantic transformation, while the Application domain applies targeted logic, rules, and workflows to achieve the desired business function."
      },
      {
        "id": 14,
        "question": "Which of the following is NOT categorized as one of the fundamental activities in a business model?",
        "options": [
          "Philanthropy",
          "Production",
          "Platform management",
          "Problem-solving"
        ],
        "correctIndex": 0,
        "explanation": "According to business model frameworks, the three primary key activity categories are Production, Problem-Solving, and Platform/Network management. Philanthropy is not considered a core operational business activity."
      },
      {
        "id": 15,
        "question": "In the context of IIoT business models, what is the term used for the mechanism by which a service provider transforms the present value of assets into ones with financial value?",
        "options": [
          "Value Proposition",
          "Value Communication",
          "Value Network",
          "Value Capturing Mechanism"
        ],
        "correctIndex": 3,
        "explanation": "The Value Capturing Mechanism defines how a business monetizes its offerings, converting delivered utility into realized commercial revenue and profit."
      }
    ]
  },
  "week6": {
    "id": "week6",
    "title": "Week 06 : Assignment 06",
    "topic": "Industrial Sensors, Fieldbuses & Industrial Communication",
    "questions": [
      {
        "id": 1,
        "question": "Which of the following is highlighted as a benefit of sensor usage in industrial applications for improving overall operations?",
        "options": [
          "Reducing production rate",
          "Increasing manual inspection",
          "Improving visibility",
          "Enhancing latency"
        ],
        "correctIndex": 2,
        "explanation": "Sensors provide continuous real-time monitoring of machine and process states, significantly improving operational visibility."
      },
      {
        "id": 2,
        "question": "Which type of sensor is primarily used for the inspection of steel pipes and detecting time-varying stresses or strains in ferromagnetic materials?",
        "options": [
          "Magnetostrictive sensor",
          "Torque sensor",
          "Vacuum sensor",
          "Image sensor"
        ],
        "correctIndex": 0,
        "explanation": "Magnetostrictive sensors utilize the Villari effect (magnetostriction) to inspect ferromagnetic steel pipes and detect internal mechanical stresses and strains."
      },
      {
        "id": 3,
        "question": "The DS1621 temperature sensor is a digital sensor that communicates via an I2C bus and generates temperature data of how many bits?",
        "options": [
          "9 bits",
          "32 bits",
          "8 bits",
          "16 bits"
        ],
        "correctIndex": 0,
        "explanation": "The Dallas/Maxim DS1621 digital thermometer provides 9-bit digital temperature readings over an I2C 2-wire serial bus."
      },
      {
        "id": 4,
        "question": "In the context of gas sensor characteristics, how is \"Selectivity\" defined?",
        "options": [
          "The ability to return to its base resistance value",
          "The time taken to stabilize its response",
          "The change in output signal with respect to unit change in input",
          "The ability to detect a particular gas in a mixture of different gases"
        ],
        "correctIndex": 3,
        "explanation": "Selectivity refers to a sensor's capability to identify and respond specifically to a target gas in the presence of other interfering gases."
      },
      {
        "id": 5,
        "question": "What happens to the resistance of an n-type metal oxide semiconductor (MOS) gas sensor when it is exposed to a reducing gas?",
        "options": [
          "It decreases",
          "It fluctuates randomly",
          "It remains unchanged",
          "It increases"
        ],
        "correctIndex": 0,
        "explanation": "In an n-type MOS sensor, exposure to reducing gases reacts with surface adsorbed oxygen, releasing electrons back into the conduction band and decreasing resistance."
      },
      {
        "id": 6,
        "question": "How many active connections or sockets does the ModBus-TCP protocol typically support at one time?",
        "options": [
          "Up to 254",
          "Up to 64",
          "Up to 10",
          "Up to 5"
        ],
        "correctIndex": 2,
        "explanation": "Standard ModBus-TCP server implementations typically support up to 10 simultaneous client socket connections."
      },
      {
        "id": 7,
        "question": "In EtherNet/IP, which primary type of communication is used to handle real-time I/O data through continuous message transfer?",
        "options": [
          "Asynchronous",
          "Acyclic",
          "Explicit",
          "Implicit"
        ],
        "correctIndex": 3,
        "explanation": "Implicit messaging (also called I/O messaging) uses UDP/IP to continuously stream time-critical real-time I/O data with minimal overhead."
      },
      {
        "id": 8,
        "question": "Time-Sensitive Networking (TSN) is an extension of Ethernet developed to enable deterministic communication. Which IEEE standard is it primarily based on?",
        "options": [
          "IEEE 802.15.4",
          "IEEE 802.1P",
          "IEEE 802.1F",
          "IEEE 802.1Q"
        ],
        "correctIndex": 3,
        "explanation": "TSN is defined as an evolution and set of sub-standards under IEEE 802.1Q (Bridges and Bridged Networks) to support deterministic Ethernet communication."
      },
      {
        "id": 9,
        "question": "In a Profibus DP (Decentralized Peripherals) network, how many devices are supported at a single time without the use of repeaters?",
        "options": [
          "64",
          "10",
          "32",
          "128"
        ],
        "correctIndex": 2,
        "explanation": "A single RS-485 segment on Profibus DP supports up to 32 connected physical devices without requiring signal repeaters."
      },
      {
        "id": 10,
        "question": "What is the global operating frequency utilized by the CC-Link communication protocol?",
        "options": [
          "13.56 MHz",
          "433 MHz",
          "5.0 GHz",
          "2.4 GHz"
        ],
        "correctIndex": 0,
        "explanation": "CC-Link RFID and related high-frequency industrial interfaces utilize the standard 13.56 MHz ISM carrier frequency."
      },
      {
        "id": 11,
        "question": "The DeviceNet communication protocol links industrial sensors and actuators with Programmable Logic Controllers (PLCs) and is based on which standard?",
        "options": [
          "WIA-PA",
          "IEEE 802.3",
          "IEC 61158",
          "CAN (Controller Area Network)"
        ],
        "correctIndex": 3,
        "explanation": "DeviceNet uses the Controller Area Network (CAN) physical and data link layers (ISO 11898) combined with the Common Industrial Protocol (CIP)."
      },
      {
        "id": 12,
        "question": "Which of the following is an advantage of the WIA-PA (Wireless Networks for Industrial Automation-Process Automation) standard?",
        "options": [
          "It supports Adaptive Frequency Hopping (AFH)",
          "It removes the need for data packet aggregation",
          "It replaces satellite communication",
          "It operates exclusively on wired fiber optics"
        ],
        "correctIndex": 0,
        "explanation": "WIA-PA features Adaptive Frequency Hopping (AFH) to avoid congested or jammed wireless channels in harsh industrial factory environments."
      },
      {
        "id": 13,
        "question": "For Ultra-Reliable Low Latency Communication (URLLC) in 5G, what is the specified target for availability?",
        "options": [
          "6-Nines (99.9999%)",
          "4-Nines (99.99%)",
          "5-Nines (99.999%)",
          "3-Nines (99.9%)"
        ],
        "correctIndex": 0,
        "explanation": "5G URLLC specifies an availability target of 99.9999% ('6-Nines') with sub-millisecond radio latency for mission-critical industrial control."
      },
      {
        "id": 14,
        "question": "Which of the following is an objective of Device-to-Device (D2D) Communication in cellular networks?",
        "options": [
          "Eliminating the load on the core network",
          "Increasing the load on the core network",
          "Maximizing propagation delay",
          "Restricting communication to wired endpoints"
        ],
        "correctIndex": 0,
        "explanation": "D2D communication allows direct peer-to-peer data transfer between proximate devices, bypassing and offloading traffic from the central cellular core network."
      },
      {
        "id": 15,
        "question": "Which of the following is considered a primary disadvantage of millimeter-wave (mmWave) communication?",
        "options": [
          "It suffers from high penetration loss and shadowing",
          "It utilizes the heavily congested <1 GHz band",
          "It requires huge antenna element sizes",
          "It provides very low data throughput"
        ],
        "correctIndex": 0,
        "explanation": "Millimeter-wave signals (24–100 GHz) have severe path loss, atmospheric attenuation, and cannot easily penetrate walls or solid objects (high shadowing loss)."
      }
    ]
  },
  "week7": {
    "id": "week7",
    "title": "Week 07 : Assignment 07",
    "topic": "LPWAN (LoRa, Sigfox), Zigbee, Analytics & Industrial Control",
    "questions": [
      {
        "id": 1,
        "question": "Which modulation technique is incorporated by LoRa technology?",
        "options": [
          "Frequency Shift Keying (FSK)",
          "Chirp Spread Spectrum (CSS)",
          "Phase Shift Keying (PSK)",
          "Amplitude Shift Keying (ASK)"
        ],
        "correctIndex": 1,
        "explanation": "LoRa uses proprietary Chirp Spread Spectrum (CSS) modulation, which uses linear frequency sweeps to provide high resilience against interference and multipath fading."
      },
      {
        "id": 2,
        "question": "What is the maximum wireless throughput achieved by the SIGFOX network?",
        "options": [
          "Up to 140 bits per second",
          "Up to 1000 bits per second",
          "Up to 100 bytes per second",
          "Up to 100 bits per second"
        ],
        "correctIndex": 3,
        "explanation": "SIGFOX uses Ultra Narrow Band (UNB) technology with uplink speeds up to 100 bps (bits per second) for ultra-low power consumption."
      },
      {
        "id": 3,
        "question": "Depending on the device variant, what is the typical communication range for a Zigbee network?",
        "options": [
          "10 to 100 meters",
          "500 to 1000 meters",
          "1 to 10 kilometers",
          "1 to 5 meters"
        ],
        "correctIndex": 0,
        "explanation": "Zigbee (IEEE 802.15.4) typically operates at ranges between 10 and 100 meters in indoor and local wireless sensor network settings."
      },
      {
        "id": 4,
        "question": "In a Zigbee network, which device is specifically responsible for relaying information to other nodes and can also run small-scale applications?",
        "options": [
          "Router",
          "Coordinator",
          "Gateway",
          "End device"
        ],
        "correctIndex": 0,
        "explanation": "A Zigbee Router acts as an intermediate node that routes/relays packets between devices and can also host application logic."
      },
      {
        "id": 5,
        "question": "Which software is used to discover and configure Xbee modules before utilizing them for communication?",
        "options": [
          "NodeMCU Flasher",
          "PuTTY",
          "XCTU",
          "Arduino IDE"
        ],
        "correctIndex": 2,
        "explanation": "Digi XCTU is the dedicated multi-platform GUI application used to test, configure, and update Digi XBee RF modules."
      },
      {
        "id": 6,
        "question": "Which type of IIoT analytics primarily focuses on answering the questions \"What already happened and currently happening\" using dashboards and reports?",
        "options": [
          "Prescriptive Analytics",
          "Diagnostic Analytics",
          "Predictive Analytics",
          "Descriptive Analytics"
        ],
        "correctIndex": 3,
        "explanation": "Descriptive analytics examines historical and real-time telemetry using visual dashboards, summary charts, and reports to explain what has occurred or is occurring."
      },
      {
        "id": 7,
        "question": "Many middleware solutions in IIoT processing architectures are based on which of the following?",
        "options": [
          "Monolithic Architecture",
          "Microservices Architecture",
          "Layered Databus Architecture",
          "Service-Oriented Architecture (SOA)"
        ],
        "correctIndex": 3,
        "explanation": "Service-Oriented Architecture (SOA) provides loose coupling, standardized interfaces, and protocol abstraction, making it foundational for industrial IoT middleware."
      },
      {
        "id": 8,
        "question": "In the FarmBeats architecture, which component incorporates weather-aware decisions and UAV flight planning?",
        "options": [
          "Network of Soil Sensors",
          "IoT Gateway",
          "IoT Base Station",
          "Cloud-Services"
        ],
        "correctIndex": 1,
        "explanation": "In Microsoft's FarmBeats architecture, the local IoT Gateway runs intelligence to plan UAV flight missions and execute weather-aware scheduling even with limited cloud connectivity."
      },
      {
        "id": 9,
        "question": "In the AR Drones-based Precision Agriculture system, what is the specific role of the video processing module deployed in the laptop?",
        "options": [
          "To actuate the precision sprayer directly via Bluetooth",
          "To control the flight path of the UAV remotely",
          "To capture GPS-tagged video directly from the field",
          "To detect the weeds and generate coordinates"
        ],
        "correctIndex": 3,
        "explanation": "The laptop-based video processing unit analyzes aerial camera footage to identify weeds and extract spatial coordinates for precision spraying."
      },
      {
        "id": 10,
        "question": "In the iRobot-Factory architecture, which component is tasked with high-performance, long-term data analytics using artificial intelligence techniques?",
        "options": [
          "Cognitive Engine",
          "Production Line Layer",
          "Intelligent Terminal",
          "Edge Computing Node"
        ],
        "correctIndex": 0,
        "explanation": "The Cognitive Engine in the iRobot-Factory framework executes deep AI models and big data analytics for predictive optimization and decision intelligence."
      },
      {
        "id": 11,
        "question": "According to the phases of Big Data Driven Smart Manufacturing, what is the primary focus of \"Phase 2\"?",
        "options": [
          "Initial deployment of sensor nodes",
          "Integration of data and contextual information",
          "Synthesis and analysis to build knowledge for decision making",
          "Innovation in process and production"
        ],
        "correctIndex": 2,
        "explanation": "In Big Data Driven Smart Manufacturing: Phase 1 is data aggregation/integration, Phase 2 is data synthesis and analytics to build operational knowledge, and Phase 3 is production innovation."
      },
      {
        "id": 12,
        "question": "In a Smart Warehousing system, which module is specifically responsible for organizing and processing data, generating events in real-time, and history-based decision making?",
        "options": [
          "REST-based framework",
          "RFID tag module",
          "Administrative module",
          "Data collection module"
        ],
        "correctIndex": 2,
        "explanation": "The Administrative Module manages event generation, workflow coordination, business logic, and historical decision intelligence in smart warehousing."
      },
      {
        "id": 13,
        "question": "In the context of an Industrial Control System (ICS), what is a \"Set Point\"?",
        "options": [
          "The value of a process parameter measured by a sensor",
          "The physical location where a sensor is deployed",
          "The actuator used to manipulate the process",
          "The standard value of the process parameter for controlled operation"
        ],
        "correctIndex": 3,
        "explanation": "The Set Point (SP) is the desired target value that a closed-loop controller aims to maintain for a specific process variable (PV)."
      },
      {
        "id": 14,
        "question": "Which type of control loop makes control decisions entirely independent of the measured process variable?",
        "options": [
          "Open Loop Control",
          "Closed Loop Control",
          "Proportional Control",
          "Feedback Control"
        ],
        "correctIndex": 0,
        "explanation": "Open Loop Control systems apply inputs without measuring the resulting output or using feedback to adjust the control action."
      },
      {
        "id": 15,
        "question": "Which of the following is a primary component of a Supervisory Control and Data Acquisition (SCADA) system?",
        "options": [
          "Remote Telemetry Units (RTUs)",
          "Complex Event Processor (CEP)",
          "Centralized Cloud Services",
          "Unmanned Aerial Vehicles (UAVs)"
        ],
        "correctIndex": 0,
        "explanation": "Remote Telemetry Units (RTUs) and PLCs are primary field hardware components of SCADA systems, interfacing directly with field sensors and actuators."
      }
    ]
  },
  "week8": {
    "id": "week8",
    "title": "Week 08 : Assignment 08",
    "topic": "Industrial Analytics, Machine Learning & Cloud Platforms",
    "questions": [
      {
        "id": 1,
        "question": "Which type of IIoT analytics is responsible for informing about the remaining useful life of an asset and typically operates on a timescale of hours?",
        "options": [
          "Prescriptive analytics",
          "Diagnostic analytics",
          "Prognostic analytics",
          "Baseline analytics"
        ],
        "correctIndex": 2,
        "explanation": "Prognostic analytics evaluates equipment degradation and forecasts the Remaining Useful Life (RUL) of industrial assets."
      },
      {
        "id": 2,
        "question": "Which of the following software tools is highlighted for its use in Complex Event Processing (CEP) during real-time stream analytics?",
        "options": [
          "Apache Hadoop",
          "Apache Spark",
          "Jupyter",
          "Apache Storm"
        ],
        "correctIndex": 3,
        "explanation": "Apache Storm is a distributed real-time computation system specialized for processing unbounded data streams and complex event processing (CEP)."
      },
      {
        "id": 3,
        "question": "In the context of unsupervised learning, what is a primary distinction of the Fuzzy c-Means (FCM) algorithm compared to K-Means?",
        "options": [
          "FCM is categorized as Hard Clustering",
          "FCM allows a data point to belong to more than one cluster",
          "FCM is significantly slower than K-Means",
          "FCM requires a labeled dataset to operate"
        ],
        "correctIndex": 1,
        "explanation": "In Fuzzy c-Means (soft clustering), data points have degree-of-membership values in multiple clusters, whereas K-Means assigns each point strictly to one cluster."
      },
      {
        "id": 4,
        "question": "Which supervised learning algorithm is specifically utilized when the output variable to be predicted is a real number (e.g., dollars or weight)?",
        "options": [
          "Clustering",
          "Reinforcement Learning",
          "Regression",
          "Classification"
        ],
        "correctIndex": 2,
        "explanation": "Regression models predict continuous numerical outcomes (e.g. pressure, temperature, cost), while classification predicts discrete categorical labels."
      },
      {
        "id": 5,
        "question": "What is a key difference between Reinforcement Learning (RL) and Supervised Learning?",
        "options": [
          "RL maps inputs directly to outputs without an agent",
          "Supervised learning models build knowledge graphs from actions",
          "RL utilizes a reward function that acts as feedback to the agent",
          "RL is guided by an external supervisor who knows the environment"
        ],
        "correctIndex": 2,
        "explanation": "Reinforcement Learning relies on trial-and-error interactions where an agent receives numerical reward or penalty signals, rather than explicit labeled training pairs."
      },
      {
        "id": 6,
        "question": "Which of the following statements best describes why Deep Learning differs from traditional Machine Learning in industrial applications?",
        "options": [
          "Deep learning is an \"end-to-end learning\" process that extracts features on its own",
          "Deep learning requires very low computational power",
          "Deep learning requires features to be explicitly mentioned by domain experts",
          "Deep learning performs significantly worse as the data volume increases"
        ],
        "correctIndex": 0,
        "explanation": "Deep neural networks learn hierarchical feature representations directly from raw inputs (end-to-end), bypassing manual feature engineering."
      },
      {
        "id": 7,
        "question": "Which company utilizes Collaborative Distributed Deep Learning technology where the learning process is performed in the cloud while inference is conducted at the edge?",
        "options": [
          "TOSHIBA",
          "Intel",
          "H2O",
          "Zebra Medical Vision"
        ],
        "correctIndex": 0,
        "explanation": "TOSHIBA implemented collaborative distributed deep learning where compute-intensive training runs in the cloud while low-latency edge devices execute model inference."
      },
      {
        "id": 8,
        "question": "Which of the following is an example of an industrial Software-as-a-Service (SaaS) application?",
        "options": [
          "Microsoft Azure",
          "Industrial Machinery Catalyst from Siemens",
          "GE Predix",
          "Amazon Web Services (AWS)"
        ],
        "correctIndex": 1,
        "explanation": "Industrial Machinery Catalyst from Siemens is a turnkey SaaS solution for machinery builders. (Azure and AWS are IaaS/PaaS, while Predix is an IIoT PaaS)."
      },
      {
        "id": 9,
        "question": "A cloud setup that is designed by combining two or more unique cloud infrastructures (public or private) to provide flexibility for data and application movement is called a:",
        "options": [
          "Private Cloud",
          "Hybrid Cloud",
          "Community Cloud",
          "Public Cloud"
        ],
        "correctIndex": 1,
        "explanation": "A Hybrid Cloud bridges and orchestrates multiple distinct cloud deployments (such as private on-prem servers and public cloud services)."
      },
      {
        "id": 10,
        "question": "Which industrial cloud platform utilizes \"Digital Twin Technology\" for learning, estimating, optimizing, and representing assets?",
        "options": [
          "Meshify",
          "Siemens MindSphere",
          "Sentience (Honeywell)",
          "GE Predix"
        ],
        "correctIndex": 3,
        "explanation": "GE Predix pioneered the asset-centric Digital Twin model for monitoring, predicting, and optimizing industrial jet engines, gas turbines, and locomotives."
      },
      {
        "id": 11,
        "question": "The C3 IoT platform provides a storage service for unstructured data known as the C3 Data Lake. In which format is this data primarily managed?",
        "options": [
          "RESTful format",
          "SQL Relational format",
          "XML format",
          "Simple Object format"
        ],
        "correctIndex": 0,
        "explanation": "The C3 IoT Data Lake manages multi-source unstructured telemetry and documents through standardized RESTful API interfaces."
      },
      {
        "id": 12,
        "question": "Which of the following industrial IoT platforms specifically provides solutions like \"Now\" and \"Tracker\" for real-time asset tracking with geo-localized data?",
        "options": [
          "Uptake",
          "Honeywell",
          "C3 IoT",
          "Meshify"
        ],
        "correctIndex": 3,
        "explanation": "Meshify's IoT platform provides 'Meshify Now' (real-time dashboards) and 'Meshify Tracker' for geo-localized asset monitoring."
      },
      {
        "id": 13,
        "question": "Which of the following is a crucial feature that an IIoT cloud platform provider should offer for effective device management?",
        "options": [
          "Manual data provisioning",
          "Device decommission",
          "Increasing network blind spots",
          "Physical hardware manufacturing"
        ],
        "correctIndex": 1,
        "explanation": "Comprehensive device lifecycle management must support provisioning, authentication, configuration, firmware updates, and safe device decommissioning."
      },
      {
        "id": 14,
        "question": "According to Sturm et al., which of the following is one of the defined characteristics of a \"Meaningful SLA\" (Service Level Agreement)?",
        "options": [
          "Subjective",
          "Unachievable",
          "Uncontrollable",
          "Quantifiable"
        ],
        "correctIndex": 3,
        "explanation": "Sturm et al. state that effective Service Level Agreements (SLAs) must be unambiguous and based on objective, quantifiable performance metrics."
      },
      {
        "id": 15,
        "question": "How does Fog Computing primarily address the limitations of a purely centralized cloud-based approach in IIoT?",
        "options": [
          "By completely replacing the cloud infrastructure",
          "By increasing the latency of time-sensitive data",
          "By restricting the mobility of edge devices",
          "By identifying useful data and reducing the amount of raw data sent to the cloud"
        ],
        "correctIndex": 3,
        "explanation": "Fog computing filters, aggregates, and analyzes telemetry locally near the edge nodes, preventing network congestion by sending only actionable insights to the cloud."
      }
    ]
  },
  "week9": {
    "id": "week9",
    "title": "Week 09 : Assignment 09",
    "topic": "Fog Computing, Big Data (Hadoop, MongoDB), R & Software-Defined Networking",
    "questions": [
      {
        "id": 1,
        "question": "How does fog computing prevent unnecessary noisy big data from crowding the cloud?",
        "options": [
          "By performing prior filtration at the edge",
          "By storing all raw data permanently in the cloud",
          "By disabling real-time control algorithms",
          "By increasing the frequency of sensor transmission"
        ],
        "correctIndex": 0,
        "explanation": "Fog computing applies edge intelligence to cleanse, downsample, and filter noisy raw sensor data before sending only refined data to the cloud."
      },
      {
        "id": 2,
        "question": "Which capability is provided by the fog-based industrial platform?",
        "options": [
          "Eliminating control of IoT endpoints",
          "Restricting the platform to non-real-time workloads",
          "Transmitting all sensor data without processing",
          "Merging real-time and non-real-time workloads"
        ],
        "correctIndex": 3,
        "explanation": "Industrial fog architectures integrate hard real-time deterministic control tasks with non-real-time analytics workloads on unified compute nodes."
      },
      {
        "id": 3,
        "question": "Which fog-platform provider offers an edge-node software solution that supports any protocol, any PLC, and any hardware?",
        "options": [
          "Nebbiolo Technologies",
          "Crosser",
          "Sonm",
          "FogHorn"
        ],
        "correctIndex": 1,
        "explanation": "Crosser provides a hybrid edge-node analytics software designed to integrate with any industrial protocol, PLC, or hardware platform."
      },
      {
        "id": 4,
        "question": "What is the purpose of the %in% special operator in R?",
        "options": [
          "To create a series of numbers for a vector",
          "To perform integer division",
          "To check whether an element belongs to a vector",
          "To assign a value globally"
        ],
        "correctIndex": 2,
        "explanation": "In the R programming language, `%in%` is an operator used to check whether values of one vector exist within another vector (membership test)."
      },
      {
        "id": 5,
        "question": "Which validation method is used in the demonstrated R machine-learning execution process to estimate model accuracy?",
        "options": [
          "Validation without data partitioning",
          "Two-fold cross-validation",
          "Leave-one-out validation",
          "Ten-fold cross-validation"
        ],
        "correctIndex": 3,
        "explanation": "Ten-fold cross-validation is used to evaluate model generalization by partitioning the training dataset into 10 subsets."
      },
      {
        "id": 6,
        "question": "Which Julia function is used to create a dictionary?",
        "options": [
          "Tuple()",
          "Dict()",
          "Dictn()",
          "Array()"
        ],
        "correctIndex": 1,
        "explanation": "In Julia, key-value mappings are constructed using the `Dict()` constructor function (e.g., Dict(\"key\" => value))."
      },
      {
        "id": 7,
        "question": "During data preprocessing, which operation eliminates repeated data through detection, filtering, and compression?",
        "options": [
          "Data cleaning",
          "Data visualization",
          "Data integration",
          "Redundancy mitigation"
        ],
        "correctIndex": 3,
        "explanation": "Redundancy mitigation eliminates duplicate readings from dense overlapping sensor networks via deduplication, delta-compression, and filtering."
      },
      {
        "id": 8,
        "question": "Which Hadoop component assigns CPU, memory, and storage resources to applications running on a Hadoop cluster?",
        "options": [
          "Yet Another Resource Negotiator",
          "Hadoop Common",
          "MapReduce",
          "Hadoop Distributed File System"
        ],
        "correctIndex": 0,
        "explanation": "YARN (Yet Another Resource Negotiator) manages and allocates distributed cluster compute resources (CPU and memory) across running applications."
      },
      {
        "id": 9,
        "question": "Which of the following is listed as an application of integrating MongoDB with Hadoop?",
        "options": [
          "Firewall configuration",
          "Sensor manufacturing",
          "Batch aggregation",
          "Physical network cabling"
        ],
        "correctIndex": 2,
        "explanation": "MongoDB Hadoop Connector enables MapReduce batch processing and analytics aggregations on rich JSON/BSON document datasets."
      },
      {
        "id": 10,
        "question": "Which source-routing protocol is used by the BCube data-center network topology?",
        "options": [
          "BCube Source Routing",
          "Spanning Tree Protocol",
          "Open Shortest Path First",
          "Border Gateway Protocol"
        ],
        "correctIndex": 0,
        "explanation": "BCube server-centric data center topology employs BCube Source Routing (BSR) where the sending server specifies the complete forwarding path."
      },
      {
        "id": 11,
        "question": "Why may an IIoT-based data center require an increase in inbound network bandwidth?",
        "options": [
          "IIoT completely removes the need for data transmission",
          "IIoT devices generate a bulk amount of small messages containing sensor data",
          "Industrial devices communicate exclusively with one another without a data center",
          "Sensor data is transmitted only once during deployment"
        ],
        "correctIndex": 1,
        "explanation": "Thousands of field sensors transmitting telemetry create high-volume streams of inbound packet traffic that load ingress network links."
      },
      {
        "id": 12,
        "question": "Which of the following is an advantage of a Software-Defined Data Centre?",
        "options": [
          "Elimination of network virtualization",
          "Programmable infrastructure and workload management",
          "Permanent coupling of software with hardware",
          "Static workload management"
        ],
        "correctIndex": 1,
        "explanation": "SDDCs abstract compute, storage, and networking into software-programmable pools, allowing dynamic, automated workload provisioning."
      },
      {
        "id": 13,
        "question": "When an SDN forwarding device has insufficient rule capacity, how can two existing flow rules be converted into a single rule?",
        "options": [
          "By disconnecting the SDN controller",
          "By disabling the forwarding device",
          "By changing TCP into UDP",
          "By applying wildcard-based rule combination"
        ],
        "correctIndex": 3,
        "explanation": "Wildcard rule combination aggregates multiple specific TCAM flow entries into a single generalized matching rule, saving rule table capacity."
      },
      {
        "id": 14,
        "question": "How can SDN meet the dynamically changing forwarding requirements of IIoT sensor data?",
        "options": [
          "By transmitting data without considering the real-time situation",
          "By assigning the same priority to every type of data permanently",
          "By preventing the controller from updating forwarding rules",
          "By using rule-based forwarding policies"
        ],
        "correctIndex": 3,
        "explanation": "SDN controllers dynamically install and adapt rule-based forwarding policies based on real-time network conditions and traffic priority."
      },
      {
        "id": 15,
        "question": "Which statement best describes Software-Defined Automation?",
        "options": [
          "It uses only manually controlled physical equipment",
          "It uses a virtualized platform for dynamic, real-time system control",
          "It restricts control operations to sensors at Level 0",
          "It eliminates real-time control from industrial systems"
        ],
        "correctIndex": 1,
        "explanation": "Software-Defined Automation virtualizes industrial control functions (like vPLCs) on common edge compute hardware for flexible, software-orchestrated automation."
      }
    ]
  },
  "week10": {
    "id": "week10",
    "title": "Week 10 : Assignment 10",
    "topic": "SDN in IIoT, Trust & Cybersecurity (STRIDE, NIST SP 800-82)",
    "questions": [
      {
        "id": 1,
        "question": "In Software-Defined 6TiSCH, at which layer is the slicing mechanism proposed to isolate SDN control overhead?",
        "options": [
          "Transport Layer",
          "Physical Layer",
          "Layer 2",
          "Application Layer"
        ],
        "correctIndex": 2,
        "explanation": "In SD-6TiSCH, network slicing at Layer 2 (MAC layer / TSCH slotframe) allocates dedicated time-frequency cells for SDN control signaling."
      },
      {
        "id": 2,
        "question": "In the adaptive transmission architecture for Software-Defined Edge Computing in IIoT, data streams are divided into which two categories?",
        "options": [
          "Wired and wireless data streams",
          "Ordinary and emergent data streams",
          "Local and global data streams",
          "Secure and insecure data streams"
        ],
        "correctIndex": 1,
        "explanation": "Data traffic is classified into ordinary streams (routine background telemetry) and emergent streams (time-critical alerts and abnormal events)."
      },
      {
        "id": 3,
        "question": "According to the challenges and opportunities of Software-Defined IIoT, fog nodes/access devices play an important role in providing which type of service?",
        "options": [
          "Long-term archival services",
          "Manual configuration services",
          "Offline batch-processing services",
          "Delay-constrained emergent services"
        ],
        "correctIndex": 3,
        "explanation": "Proximate fog nodes process high-priority emergent events with strict low-latency constraints that cannot tolerate round-trip delay to the cloud."
      },
      {
        "id": 4,
        "question": "In a trustworthy IIoT system, which property refers to the ability of the system to function correctly under dynamic adversarial conditions?",
        "options": [
          "Privacy",
          "Safety",
          "Resilience",
          "Reliability"
        ],
        "correctIndex": 2,
        "explanation": "Resilience is the ability of an industrial system to withstand, adapt to, and rapidly recover from malicious cyberattacks or operational failures."
      },
      {
        "id": 5,
        "question": "In the STRIDE threat model, what does the letter \"E\" represent?",
        "options": [
          "Elevation of privilege",
          "Encryption",
          "Endpoint security",
          "Exposure of information"
        ],
        "correctIndex": 0,
        "explanation": "STRIDE stands for: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege."
      },
      {
        "id": 6,
        "question": "Which participant in the IIoT trust flow is responsible for designing a cost-efficient trustworthy system, defining trust requirements for components, and conducting tests and certifications?",
        "options": [
          "End User",
          "System Builder",
          "Cloud Service Provider",
          "System Owner"
        ],
        "correctIndex": 1,
        "explanation": "The System Builder (integrator) designs the architecture, selects vetted subcomponents, integrates security controls, and performs testing and certification."
      },
      {
        "id": 7,
        "question": "Which of the following is suggested as a solution for protecting resource-constrained IIoT end devices?",
        "options": [
          "Increasing the size of every transmitted packet",
          "Storing all security operations only in the cloud",
          "Lightweight symmetric key cryptography",
          "Disabling device authentication"
        ],
        "correctIndex": 2,
        "explanation": "Lightweight symmetric ciphers (e.g., AES-128, PRESENT) provide strong encryption with minimal CPU overhead, memory consumption, and battery draw."
      },
      {
        "id": 8,
        "question": "Which three states of data are considered under data protection in IIoT?",
        "options": [
          "Data-at-source, Data-at-cloud, and Data-at-edge",
          "Structured, Semi-structured, and Unstructured data",
          "Data-at-Rest, Data-in-Use, and Data-in-Transit",
          "Sensor data, Control data, and Application data"
        ],
        "correctIndex": 2,
        "explanation": "Comprehensive data security addresses all three lifecycle states: Data-at-Rest (stored), Data-in-Transit (transmitted), and Data-in-Use (in memory/CPU)."
      },
      {
        "id": 9,
        "question": "Which standard listed under OT security provides guidance for security in Industrial Control Systems?",
        "options": [
          "ISO 27017",
          "NIST SP 800-144",
          "NIST SP 800-82",
          "ISO/IEC 154083"
        ],
        "correctIndex": 2,
        "explanation": "NIST Special Publication 800-82 provides definitive cybersecurity guidance for Industrial Control Systems (ICS), SCADA, DCS, and PLCs."
      },
      {
        "id": 10,
        "question": "Which of the following is NOT one of the five layers of Hitachi's Lumada IoT platform?",
        "options": [
          "Analytics",
          "Transport",
          "Core",
          "Edge"
        ],
        "correctIndex": 1,
        "explanation": "Hitachi Lumada's five layers are Edge, Core, Analytics, Studio, and Foundry. 'Transport' is not one of its five architectural layers."
      },
      {
        "id": 11,
        "question": "In the North Star BlueScope Steel smart-factory application, sensors are used to detect which environmental hazards?",
        "options": [
          "Voltage fluctuations and cloud failures",
          "Radiation and toxic gases",
          "Network congestion and packet loss",
          "Inventory shortages and production delays"
        ],
        "correctIndex": 1,
        "explanation": "BlueScope Steel equipped workers and facilities with wearable and environmental IoT sensors to detect hazardous radiation and lethal gases."
      },
      {
        "id": 12,
        "question": "What technology does SmartLabel use to provide product-related information such as ingredients, allergens, and nutritional value to consumers?",
        "options": [
          "QR code",
          "Bluetooth beacon",
          "RFID tag",
          "GPS receiver"
        ],
        "correctIndex": 0,
        "explanation": "SmartLabel utilizes printed 2D QR codes on packaging that consumers scan with smartphone cameras to access comprehensive product and allergen data."
      },
      {
        "id": 13,
        "question": "In the Intellicup smart beverage-vending solution, what is integrated at the base of the IoT-enabled cup?",
        "options": [
          "GPS module",
          "Wi-Fi router",
          "Temperature sensor",
          "NFC chip"
        ],
        "correctIndex": 3,
        "explanation": "Intellicup embeds a high-speed Near Field Communication (NFC) chip in the base of the reusable cup for hands-free dispensing, tracking, and cashless billing."
      },
      {
        "id": 14,
        "question": "Which characteristic of a smart factory allows process parameters such as machine configuration, material flow, and temperature control to be optimally adjusted?",
        "options": [
          "Redundancy",
          "Isolation",
          "Flexibility",
          "Centralization"
        ],
        "correctIndex": 2,
        "explanation": "Operational flexibility allows smart factories to automatically self-reconfigure parameters and switch product variants with minimal downtime."
      },
      {
        "id": 15,
        "question": "Which network-security mechanism acts as a fence between a trusted internal network and an unauthorized external network and uses a set of rules to allow or block traffic?",
        "options": [
          "Hypervisor",
          "Data logger",
          "Firewall",
          "Load balancer"
        ],
        "correctIndex": 2,
        "explanation": "A firewall filters ingress and egress network packets against predefined access control security rules to protect internal industrial networks."
      }
    ]
  },
  "week11": {
    "id": "week11",
    "title": "Week 11 : Assignment 11",
    "topic": "IIoT in Healthcare, Smart Utilities (AMI) & RFID Inventory",
    "questions": [
      {
        "id": 1,
        "question": "What is the correct sequence of stages presented in the IIoT healthcare architecture?",
        "options": [
          "Sensing → Processing → Sending → Learning → Storing",
          "Sending → Sensing → Storing → Processing → Learning",
          "Sensing → Learning → Processing → Sending → Storing",
          "Sensing → Sending → Processing → Storing → Learning"
        ],
        "correctIndex": 3,
        "explanation": "In the IIoT healthcare architecture, data flows from initial physical sensing, through network transmission (sending), processing/cleansing, persistence (storing), and machine learning analytics."
      },
      {
        "id": 2,
        "question": "Which parameters are used by the ADAMM Intelligent Asthma Monitoring device to predict pre-symptoms of an asthma attack?",
        "options": [
          "Skin temperature, blood glucose, and pulse pressure",
          "Blood pressure, glucose level, and oxygen saturation",
          "Weight, respiration rate, and blood pressure",
          "Body temperature, cough rate, and heart rate"
        ],
        "correctIndex": 3,
        "explanation": "ADAMM wearable patch tracks cough rate, respiration/heart rate, and body temperature to detect early warning signs prior to an asthma attack."
      },
      {
        "id": 3,
        "question": "Which of the following is identified as a challenge in IIoT-based healthcare systems?",
        "options": [
          "Absence of mobile healthcare devices",
          "Designing scalable algorithms without compromising security",
          "Unlimited computational capability of devices",
          "Excessive on-device memory"
        ],
        "correctIndex": 1,
        "explanation": "Scaling algorithms for millions of distributed medical sensors while guaranteeing strict HIPAA/GDPR data privacy and cyber protection is a critical healthcare challenge."
      },
      {
        "id": 4,
        "question": "In the IIoT maturity model for power plants, which stage immediately follows optimization?",
        "options": [
          "Monitor",
          "Device autonomy",
          "Control",
          "Autonomy"
        ],
        "correctIndex": 3,
        "explanation": "In the industrial power plant maturity progression, the maturity stages culminate in complete system-wide Autonomy after reaching optimization."
      },
      {
        "id": 5,
        "question": "Which communication technologies are associated with a Field Area Network in the power-plant communication network?",
        "options": [
          "RFID and LoRa only",
          "Zigbee and 6LoWPAN only",
          "WiMAX, 3G, and 4G for wireless communication and Ethernet for wired communication",
          "Bluetooth and NFC only"
        ],
        "correctIndex": 2,
        "explanation": "Power plant Field Area Networks (FAN) deploy cellular/broadband wireless (WiMAX, 3G, 4G LTE) alongside robust wired Ethernet backbones."
      },
      {
        "id": 6,
        "question": "In Advanced Metering Infrastructure (AMI), which component analyzes the data collected from smart meters?",
        "options": [
          "Meter data management system",
          "Communication network",
          "Smart meter",
          "Meter data acquisition system"
        ],
        "correctIndex": 0,
        "explanation": "The Meter Data Management System (MDMS) acts as the analytical engine that processes, validates, analyzes, and manages smart meter consumption data."
      },
      {
        "id": 7,
        "question": "Which of the following is a function of inventory management?",
        "options": [
          "Protection against stock-outs",
          "Eliminating all order cycles",
          "Increasing production interruptions",
          "Increasing the probability of stock-outs"
        ],
        "correctIndex": 0,
        "explanation": "Effective inventory management balances carrying costs while shielding operations against catastrophic stock-outs and production stoppages."
      },
      {
        "id": 8,
        "question": "Which statement correctly describes a semi-passive RFID tag?",
        "options": [
          "It has an onboard battery to power the IC but does not have an active transmitter",
          "It continuously broadcasts information as a beacon",
          "It has an onboard battery and an active transmitter",
          "It has no battery and obtains all power from the RFID reader"
        ],
        "correctIndex": 0,
        "explanation": "Semi-passive (Battery-Assisted Passive - BAP) tags carry an internal battery to power their internal circuitry/sensors, but rely on backscattering reader RF signals to transmit."
      },
      {
        "id": 9,
        "question": "Which of the following information is included under “comprehensive visibility” provided by RFID-based inventory management?",
        "options": [
          "Employee passwords, salaries, and attendance",
          "Network IP addresses and routing tables only",
          "Machine source code and operating-system files",
          "Inventory levels, expiration dates, item location, and forecast demand"
        ],
        "correctIndex": 3,
        "explanation": "RFID item-level tracking grants total operational visibility over real-time stock quantities, warehouse shelf coordinates, expiration dates, and demand replenishment cycles."
      },
      {
        "id": 10,
        "question": "In software security, how is availability defined in the lecture?",
        "options": [
          "Ratio of encrypted packets to total packets",
          "Ratio of successful attacks to failed attacks",
          "Ratio of authenticated users to total users",
          "Ratio of time of functioning to the total time"
        ],
        "correctIndex": 3,
        "explanation": "Availability is quantified as uptime divided by total time: Uptime / (Uptime + Downtime), measuring the proportion of time a system is fully operational."
      },
      {
        "id": 11,
        "question": "What is the primary purpose of network segmentation as a network-security technique?",
        "options": [
          "To disable encryption between endpoints",
          "To combine all network devices into a single unrestricted network",
          "To divide the network into smaller parts and explicitly enforce security policies",
          "To prevent the creation of virtual private networks"
        ],
        "correctIndex": 2,
        "explanation": "Network segmentation divides large subnets into isolated security zones (VLANs/microsegments) to prevent lateral adversary movement and enforce strict traffic policies."
      },
      {
        "id": 12,
        "question": "How does IoT help address the cost barrier in facility management?",
        "options": [
          "By eliminating all installed devices",
          "By increasing maintenance activities",
          "By preventing the collection of facility data",
          "By increasing operating efficiency and reducing maintenance cost"
        ],
        "correctIndex": 3,
        "explanation": "IoT facility management sensors automate HVAC/lighting schedules, optimize energy consumption, and enable condition-based predictive maintenance."
      },
      {
        "id": 13,
        "question": "Which of the following is an application of analytics in facility management?",
        "options": [
          "Preventing remote monitoring",
          "Increasing manual inspection of every facility",
          "Determining the exact square-foot utilization of office space",
          "Eliminating data-driven decision-making"
        ],
        "correctIndex": 2,
        "explanation": "Occupancy and desk sensors yield heatmaps that calculate exact square-foot utilization, allowing real estate planners to downsize or reconfigure office layouts."
      },
      {
        "id": 14,
        "question": "Active RFID tags are classified into which two types?",
        "options": [
          "Inlays and hard tags",
          "Transponders and beacons",
          "Passive and semi-passive tags",
          "Wet tags and dry tags"
        ],
        "correctIndex": 1,
        "explanation": "Active RFID tags are categorized into Transponders (which wake up and transmit only when interrogated by a reader) and Beacons (which broadcast at set time intervals)."
      },
      {
        "id": 15,
        "question": "Which mobile-device security component can identify attacks in advance and, through cloud-integrated security, help prevent an attack detected on one network branch from spreading to other branches?",
        "options": [
          "Meter data acquisition system",
          "Secure web gateway",
          "Load balancer",
          "RFID reader"
        ],
        "correctIndex": 1,
        "explanation": "A cloud-integrated Secure Web Gateway (SWG) enforces real-time threat intelligence and URL filtering, stopping zero-day threats from propagating across enterprise branches."
      }
    ]
  },
  "week12": {
    "id": "week12",
    "title": "Week 12 : Assignment 12",
    "topic": "Case Studies: Oil & Gas, Chemical, UAVs in Industry & Mining",
    "questions": [
      {
        "id": 1,
        "question": "In the oil and gas industry workflow, what happens before data moves to a cloud-based analytics platform?",
        "options": [
          "IoT solutions are deployed at different locations",
          "Data analysis is performed through extraction, transform, and load processes",
          "Required maintenance is identified",
          "Predictive analytics is applied"
        ],
        "correctIndex": 1,
        "explanation": "Before uploading to cloud analytics, operational data undergoes ETL (Extract, Transform, Load) to cleanse, normalize, and format multi-sensor streams."
      },
      {
        "id": 2,
        "question": "Which of the following is an objective of predictive maintenance using IoT in the chemical industry?",
        "options": [
          "Increase equipment breakdown",
          "Replace real-time monitoring with manual inspection",
          "Address real-time issues and reduce equipment breakdown",
          "Eliminate IoT analytics"
        ],
        "correctIndex": 2,
        "explanation": "In chemical processing plants, IoT predictive maintenance continuously monitors asset vibrations, temperatures, and pressures to prevent unpredicted catastrophic breakdowns."
      },
      {
        "id": 3,
        "question": "How can IoT improve logistics in the chemical industry?",
        "options": [
          "By preventing the use of RFID tags",
          "By tracking product locations through sensors or RFID tags",
          "By avoiding warehouse monitoring",
          "By eliminating alert notifications"
        ],
        "correctIndex": 1,
        "explanation": "IoT sensors, GPS, and RFID tags track chemical containers and hazardous tankers in real time, preventing theft, loss, and transit delays."
      },
      {
        "id": 4,
        "question": "Which elements are monitored in real time to minimize supply-chain risk in the chemical industry?",
        "options": [
          "Customers, competitors, and advertisements",
          "Only material and warehouse location",
          "Only equipment and workers",
          "Equipment, material, process, environment, and workers"
        ],
        "correctIndex": 3,
        "explanation": "Holistic chemical supply chain risk management monitors the five critical dimensions: Equipment health, raw materials, manufacturing processes, ambient environmental conditions, and worker safety."
      },
      {
        "id": 5,
        "question": "Which of the following can IoT applications in the pharmaceutical industry help detect while examining drugs?",
        "options": [
          "Only equipment temperature",
          "Network routing failures only",
          "Only production cost",
          "Adverse Drug Reactions, effects of pharmaceutical excipients, and allergies"
        ],
        "correctIndex": 3,
        "explanation": "IoT clinical monitoring and smart pill technology track patient pharmacodynamics, detecting Adverse Drug Reactions (ADRs), allergic reactions, and excipient interactions."
      },
      {
        "id": 6,
        "question": "Which industrial control system can UAVs communicate with directly in an industrial environment?",
        "options": [
          "Bluetooth",
          "GPS",
          "SCADA",
          "RFID"
        ],
        "correctIndex": 2,
        "explanation": "Industrial drones integrate directly with plant Supervisory Control and Data Acquisition (SCADA) systems to stream telemetry, video feeds, and inspection events."
      },
      {
        "id": 7,
        "question": "Which UAV technology generation introduces improved safety and regulatory features, platform and payload adaptability, intelligent piloting models, full autonomy, and airspace awareness?",
        "options": [
          "Fourth Generation",
          "Sixth Generation",
          "Second Generation",
          "Third Generation"
        ],
        "correctIndex": 1,
        "explanation": "Sixth Generation UAVs incorporate full autonomy, intelligent cognitive piloting, dynamic airspace awareness, and advanced collision avoidance compliant with civil aviation regulations."
      },
      {
        "id": 8,
        "question": "How can UAVs help optimize inputs in agricultural applications?",
        "options": [
          "By replacing field measurements with manual estimates",
          "By increasing the use of water and fertilizer regardless of requirement",
          "By eliminating crop-health monitoring",
          "By optimizing the use of seed, fertilizer, and water"
        ],
        "correctIndex": 3,
        "explanation": "Agricultural UAVs capture multispectral NDVI crop imagery to guide variable-rate application, optimizing seed dispersion, fertilizer dosage, and precision irrigation."
      },
      {
        "id": 9,
        "question": "Which of the following is an advantage of UAVs for energy-management applications?",
        "options": [
          "They are restricted from monitoring solar panels",
          "They require workers to climb power poles for every inspection",
          "They can observe miles of transmission lines in a single flight",
          "They cannot inspect wind turbines"
        ],
        "correctIndex": 2,
        "explanation": "Drones equipped with high-resolution and thermal cameras can inspect long-distance high-voltage transmission lines and wind turbine blades safely in a single flight."
      },
      {
        "id": 10,
        "question": "Which activity is supported by UAVs in mining applications?",
        "options": [
          "Preventing stockpile management",
          "Eliminating site exploration",
          "Increasing the probability of misfires",
          "Regular surface surveys for optimized blast design"
        ],
        "correctIndex": 3,
        "explanation": "Mining UAVs conduct high-accuracy 3D photogrammetric surface topography surveys used to calculate stockpile volumes and optimize blasting patterns."
      },
      {
        "id": 11,
        "question": "Which healthcare task can be performed using UAVs?",
        "options": [
          "Replacement of all hospital medical equipment",
          "Delivery of medicines, vaccines, defibrillators, and snake-bite serum",
          "Manufacture of drugs during flight",
          "Elimination of laboratory testing"
        ],
        "correctIndex": 1,
        "explanation": "Medical delivery drones transport emergency blood products, temperature-sensitive vaccines, automated external defibrillators (AEDs), and antivenom serums to remote clinics."
      },
      {
        "id": 12,
        "question": "In forestry applications, what can UAV-based remote sensing be used to measure for 3D mapping?",
        "options": [
          "Network bandwidth",
          "Carbon storage in biomass",
          "Fuel consumption of vehicles",
          "Pharmaceutical production rate"
        ],
        "correctIndex": 1,
        "explanation": "UAV LiDAR and multispectral remote sensing map canopy height and forest structure to accurately quantify forest biomass and carbon sequestration capacity."
      },
      {
        "id": 13,
        "question": "Which of the following should be considered while evaluating the transformation of an existing process for Industry 4.0 adoption in a case study?",
        "options": [
          "Only employee attendance",
          "Elimination of real-time and non-real-time data analysis",
          "Only the purchase cost of sensors",
          "Sensors, actuators, networks, interoperability, automated fault detection and maintenance, and feedback control"
        ],
        "correctIndex": 3,
        "explanation": "Industry 4.0 process re-engineering requires a holistic evaluation of the full cyber-physical loop: sensing, actuation, network latency, system interoperability, automated diagnostic maintenance, and closed-loop feedback."
      },
      {
        "id": 14,
        "question": "Which communication technology was used by Transco Industries to monitor conveyor-belt systems in its mining-industry IIoT implementation?",
        "options": [
          "Bluetooth and Zigbee",
          "Wi-Fi and NFC",
          "Ethernet and RFID",
          "Semtech LoRa devices and LoRaWAN"
        ],
        "correctIndex": 3,
        "explanation": "Transco Industries deployed Semtech LoRa sensors and long-range LoRaWAN gateways to reliably monitor miles of harsh overland mining conveyor belts."
      },
      {
        "id": 15,
        "question": "What was one major benefit obtained from the IIoT-based monitoring of conveyor-belt systems in the mining-industry case study?",
        "options": [
          "Ability to obtain a holistic view of the conveyor-belt line and localize defects",
          "Increased maintenance cost",
          "Increased dependence on manual inspection",
          "Elimination of all sensing devices"
        ],
        "correctIndex": 0,
        "explanation": "Continuous temperature and vibration sensors along the conveyor gave operators a unified digital dashboard view, enabling exact fault localization and preventing catastrophic belt fires/tears."
      }
    ]
  }
};

// Automatically build the mixed full-course practice set (All 12 Weeks Combined)
(function() {
  if (typeof assignmentsData === 'undefined') return;

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const allQ = [];
  Object.keys(assignmentsData).forEach(wKey => {
    if (wKey.startsWith('week')) {
      const w = assignmentsData[wKey];
      w.questions.forEach(q => {
        allQ.push({
          id: allQ.length + 1,
          originalId: q.id,
          question: q.question,
          options: [...q.options],
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          diagram: q.diagram,
          weekOrigin: w.title.split(':')[0].trim(),
          sourceTopic: w.topic
        });
      });
    }
  });

  assignmentsData["all_mixed"] = {
    id: "all_mixed",
    title: "⚡ All Weeks Mixed : Complete Mock (180 MCQs)",
    topic: "Comprehensive NPTEL Exam Practice (All 12 Weeks Mixed)",
    questions: shuffleArray(allQ)
  };
})();
