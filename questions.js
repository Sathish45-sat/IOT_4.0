/**
 * NPTEL Practice Question Bank
 * Course 1: Introduction to Industry 4.0 and Industrial Internet of Things (180 MCQs)
 * Course 2: Design & Implementation of Human-Computer Interfaces (120 MCQs)
 * Course 3: Privacy and Security in Online Social Media (110 MCQs)
 */
const coursesData = {
  "iot4": {
    "id": "iot4",
    "title": "Introduction to Industry 4.0 and Industrial Internet of Things",
    "shortTitle": "Industry 4.0 & Industrial IoT",
    "topic": "IoT & Wireless Sensor Networks",
    "assignments": {
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
    }
  },
  "hci": {
    "id": "hci",
    "title": "Design & Implementation of Human-Computer Interfaces",
    "shortTitle": "Human-Computer Interfaces (HCI)",
    "topic": "UI/UX, Usability & Interactive Systems",
    "assignments": {
      "hci_week1": {
        "id": "hci_week1",
        "title": "Week 01 : Assignment 01",
        "topic": "Evolution of Computers, Usability Concepts & Process Models",
        "questions": [
          {
            "id": 1,
            "question": "While we talk about the evaluation phases of the computer, ______ is called the modern age of computers.",
            "options": [
              "1985 onwards",
              "1998 onwards",
              "2011 onwards",
              "2007 onwards"
            ],
            "correctIndex": 2,
            "explanation": "In the evolution phases of computers, 2011 onwards is categorized as the modern age of computers."
          },
          {
            "id": 2,
            "question": "Which among the following is NOT a generic category of users?",
            "options": [
              "Super knowledgeable",
              "Intermittent",
              "Novice",
              "Expert"
            ],
            "correctIndex": 0,
            "explanation": "Standard categories of users in HCI include novice, knowledgeable intermittent, and expert frequent users. 'Super knowledgeable' is not a recognized category."
          },
          {
            "id": 3,
            "question": "In the Spiral Model, why is the second quadrant crucial for interactive software development?",
            "options": [
              "It identifies and mitigates usability risks via prototyping",
              "It defines the UI layout",
              "It handles testing and deployment",
              "It finalizes the system architecture"
            ],
            "correctIndex": 0,
            "explanation": "The second quadrant of the spiral model focuses on risk analysis, where prototyping is used to identify and mitigate usability and design risks early."
          },
          {
            "id": 4,
            "question": "What does the term 'utility' refer to in the context of usability?",
            "options": [
              "Functional support for user needs",
              "Visual appeal of the design",
              "Speed of task completion",
              "Frequency of feature updates"
            ],
            "correctIndex": 0,
            "explanation": "Utility refers to whether the system provides the functional capabilities that users need to achieve their tasks."
          },
          {
            "id": 5,
            "question": "Which one of the following is NOT a computer?",
            "options": [
              "Digital Pedometer",
              "Desktop",
              "Smartphone",
              "None of the above"
            ],
            "correctIndex": 3,
            "explanation": "All listed devices (Desktop, Digital Pedometer, Smartphone) possess processing, memory, and input/output units, qualifying them as computational devices."
          },
          {
            "id": 6,
            "question": "Interactive software development is _______ in nature.",
            "options": [
              "iterative",
              "discrete",
              "sporadic",
              "variable"
            ],
            "correctIndex": 0,
            "explanation": "User interface and interactive system development follows an iterative cycle: Design -> Prototype -> Evaluate."
          },
          {
            "id": 7,
            "question": "Which of the following is NOT one of the five quality components of usability proposed by Jacob Nielsen?",
            "options": [
              "Efficiency",
              "Memorization",
              "Satisfaction",
              "Learnability"
            ],
            "correctIndex": 1,
            "explanation": "Jakob Nielsen's 5 usability components are Learnability, Efficiency, Memorability (not Memorization), Errors, and Satisfaction."
          },
          {
            "id": 8,
            "question": "Which of the following is NOT a characteristic of the Waterfall model?",
            "options": [
              "Maintenance",
              "Feasibility study",
              "System integration and testing",
              "Learnability study"
            ],
            "correctIndex": 3,
            "explanation": "The classical Waterfall model consists of feasibility, requirements, design, coding, integration/testing, and maintenance. 'Learnability study' is not a phase."
          },
          {
            "id": 9,
            "question": "‘Identify objectives’ and ‘customer evaluation and planning’ is in the ______ and ______ quadrant of the spiral model respectively.",
            "options": [
              "Second, Third",
              "First, Fourth",
              "Fourth, Second",
              "Third, Fourth"
            ],
            "correctIndex": 1,
            "explanation": "In Boehm's Spiral Model, Quadrant 1 determines objectives/alternatives, and Quadrant 4 involves customer evaluation and planning for the next phase."
          },
          {
            "id": 10,
            "question": "Which design approach focuses on what a programmer finds interesting to build?",
            "options": [
              "Participatory Design",
              "User-Centered Design",
              "System-Centered Design",
              "Utility-Based Design"
            ],
            "correctIndex": 2,
            "explanation": "System-Centered Design focuses on system capabilities, hardware, or programmer interests rather than the actual needs and workflows of the end user."
          }
        ]
      },
      "hci_week2": {
        "id": "hci_week2",
        "title": "Week 02 : Assignment 02",
        "topic": "Contextual Inquiry, SRS & Affinity Diagrams",
        "questions": [
          {
            "id": 1,
            "question": "Contextual inquiry is also known as _______.",
            "options": [
              "Interview",
              "Semi-structured interview",
              "Observation",
              "Survey"
            ],
            "correctIndex": 1,
            "explanation": "Contextual inquiry is a semi-structured field interview method used to gather data on users in their natural context."
          },
          {
            "id": 2,
            "question": "In SRS, functions are not represented as:",
            "options": [
              "Motivation",
              "Function name",
              "Input",
              "Output"
            ],
            "correctIndex": 0,
            "explanation": "In a Software Requirements Specification (SRS), function descriptions detail name, input, output, and operational behavior, but not developer motivation."
          },
          {
            "id": 3,
            "question": "Contextual inquiry can be done in _______ and passive mode.",
            "options": [
              "neutral",
              "concurrent",
              "semi-active",
              "active"
            ],
            "correctIndex": 3,
            "explanation": "Contextual inquiry can be conducted in active mode (asking questions while observing) or passive mode (silent observation)."
          },
          {
            "id": 4,
            "question": "There are _______ stages in contextual inquiry.",
            "options": [
              "five",
              "two",
              "six",
              "eight"
            ],
            "correctIndex": 0,
            "explanation": "Contextual inquiry consists of five distinct stages: Plan, Initiate, Execute, Reflect, and Conclude."
          },
          {
            "id": 5,
            "question": "Which stage in the Contextual Inquiry process involves arranging for recording observations and scripting the procedure?",
            "options": [
              "Reflect Stage",
              "Initiate Stage",
              "Execute Stage",
              "Plan Stage"
            ],
            "correctIndex": 3,
            "explanation": "The Plan Stage involves identifying participants, arranging recording tools/permissions, and scripting the observation procedure."
          },
          {
            "id": 6,
            "question": "Affinity diagram method consists of _______ steps.",
            "options": [
              "Five",
              "Six",
              "Two",
              "Three"
            ],
            "correctIndex": 0,
            "explanation": "The affinity diagramming process typically involves five steps: generating ideas/notes, displaying notes, sorting into groups, labeling clusters, and analyzing patterns."
          },
          {
            "id": 7,
            "question": "Usability requirements is one type of ______.",
            "options": [
              "Non-functional requirement",
              "Functional Requirement"
            ],
            "correctIndex": 0,
            "explanation": "Usability criteria (ease of learning, efficiency, error tolerance) specify quality attributes rather than discrete functions, making them non-functional requirements."
          },
          {
            "id": 8,
            "question": "What is the primary objective of Contextual Inquiry?",
            "options": [
              "To study user behavior using physical note-taking",
              "To develop design recommendations",
              "To conduct semi-structured interviews with users",
              "To watch and observe users perform tasks in their natural work setting"
            ],
            "correctIndex": 3,
            "explanation": "Contextual inquiry aims to observe and interview users in their real, everyday work environment to capture authentic practices and tacit knowledge."
          },
          {
            "id": 9,
            "question": "What is the purpose of the 'Reflect' stage in the Contextual Inquiry process?",
            "options": [
              "To contact the authorities for permission",
              "To deploy prototype software",
              "To analyze the data collected and identify design goals",
              "To script the procedure and rehearse for observations"
            ],
            "correctIndex": 2,
            "explanation": "In the Reflect stage, investigators review notes, recordings, and gathered data to synthesize findings, identify user pain points, and formulate design goals."
          },
          {
            "id": 10,
            "question": "How long does the Contextual Inquiry process typically continue per session?",
            "options": [
              "One to two hours",
              "One to two weeks",
              "Three to four days",
              "One to two months"
            ],
            "correctIndex": 0,
            "explanation": "An individual contextual inquiry session typically lasts between one and two hours per user in their natural setting."
          }
        ]
      },
      "hci_week3": {
        "id": "hci_week3",
        "title": "Week 03 : Assignment 03",
        "topic": "User-Centered Design, Golden Rules & Code Design",
        "questions": [
          {
            "id": 1,
            "question": "In SRS document the functions should describe HOW to get the output from the given input.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 1,
            "explanation": "An SRS document describes WHAT the system must do (requirements), not HOW to implement algorithms or procedures (design/code)."
          },
          {
            "id": 2,
            "question": "We can also add new functional requirements based on the observations made in contextual inquiry.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Field observations from contextual inquiry often expose missing requirements or workflows that lead to adding new functional specifications."
          },
          {
            "id": 3,
            "question": "In user-centered design, we have two concerns: Interface design and __________.",
            "options": [
              "Code design",
              "System design",
              "Machine design",
              "Hardware design"
            ],
            "correctIndex": 0,
            "explanation": "Interactive software development involves two key intertwined design concerns: Interface design (user presentation/interaction) and Code design (internal logic/architecture)."
          },
          {
            "id": 4,
            "question": "The design-prototype-evaluate cycle primarily caters to ______ design.",
            "options": [
              "Database",
              "Code",
              "Interface",
              "System"
            ],
            "correctIndex": 2,
            "explanation": "The iterative design-prototype-evaluate cycle is the foundation of user interface (UI/UX) engineering."
          },
          {
            "id": 5,
            "question": "Code design can be expressed in natural languages, semi-formal languages and _________.",
            "options": [
              "Context sensitive languages",
              "Informal languages",
              "Assembly languages",
              "Formal languages"
            ],
            "correctIndex": 3,
            "explanation": "Code design representations range from natural language descriptions to semi-formal diagrams (DFDs, UML) to mathematical formal specification languages."
          },
          {
            "id": 6,
            "question": "DFD is a _______ code design language.",
            "options": [
              "Semi-formal",
              "Informal",
              "Context sensitive",
              "Natural"
            ],
            "correctIndex": 0,
            "explanation": "Data Flow Diagrams (DFDs) use structured graphical symbols with defined semantics, making them a semi-formal design language."
          },
          {
            "id": 7,
            "question": "Shneiderman proposed ____ rules that cover broad aspects of interactive systems.",
            "options": [
              "Seven",
              "Nine",
              "Five",
              "Eight"
            ],
            "correctIndex": 3,
            "explanation": "Ben Shneiderman formulated the famous 'Eight Golden Rules of Interface Design'."
          },
          {
            "id": 8,
            "question": "“The interface should not force users to remember too many things” – this statement falls under “_______”, one of the golden rules proposed by Shneiderman.",
            "options": [
              "Strive for consistency",
              "Keep users in control",
              "Permit easy reversal of actions",
              "Reduce short-term memory load"
            ],
            "correctIndex": 3,
            "explanation": "Human short-term memory is limited; interfaces should keep information visible or easily retrievable to reduce cognitive memory load."
          },
          {
            "id": 9,
            "question": "Human interface guidelines for the Apple systems are ________ design guidelines.",
            "options": [
              "Specific",
              "Generic"
            ],
            "correctIndex": 0,
            "explanation": "Apple's Human Interface Guidelines (HIG) provide detailed, platform-specific rules for Apple hardware and operating systems."
          },
          {
            "id": 10,
            "question": "Identification of data structures and algorithms for different modules is done in the ____________ phase of code design.",
            "options": [
              "Detailed design",
              "Preliminary (high-level design)"
            ],
            "correctIndex": 0,
            "explanation": "High-level design partitions the system into modules; detailed design specifies data structures, algorithms, and interface signatures within each module."
          }
        ]
      },
      "hci_week4": {
        "id": "hci_week4",
        "title": "Week 04 : Assignment 04",
        "topic": "Norman's Interaction Model & Prototyping",
        "questions": [
          {
            "id": 1,
            "question": "Norman’s Model of Interaction represents behavior of a user of interactive systems in terms of a series of _________.",
            "options": [
              "selection",
              "manipulation",
              "actions",
              "states"
            ],
            "correctIndex": 2,
            "explanation": "Don Norman's 7-stage interaction model conceptualizes human-computer interaction as cycles of user intentions, actions, and evaluations."
          },
          {
            "id": 2,
            "question": "There are broadly two stages of interaction: execution stage and ________ stage.",
            "options": [
              "evaluation",
              "design",
              "specification",
              "interaction"
            ],
            "correctIndex": 0,
            "explanation": "Norman's cycle is divided into the Execution phase (acting on the world) and the Evaluation phase (perceiving and interpreting results)."
          },
          {
            "id": 3,
            "question": "Perceiving the system state comes under the _______ stage of interaction.",
            "options": [
              "evaluation",
              "interaction",
              "design",
              "execution"
            ],
            "correctIndex": 0,
            "explanation": "Perceiving the state of the physical or digital interface is the first step of the Evaluation phase in Norman's model."
          },
          {
            "id": 4,
            "question": "Actions we specify to translate intentions may not be supported by the interface leading to a gap between intentions and actions in the execution stage. It is called _______.",
            "options": [
              "The gulf of evaluation",
              "The gulf of cognition",
              "The gulf of Interaction",
              "The gulf of execution"
            ],
            "correctIndex": 3,
            "explanation": "The Gulf of Execution is the difference between what the user intends to do and what physical actions the interface allows or makes apparent."
          },
          {
            "id": 5,
            "question": "Particularly in the context of errors during interaction, errors are explained in terms of slips and ______.",
            "options": [
              "glitches",
              "error",
              "human error",
              "mistakes"
            ],
            "correctIndex": 3,
            "explanation": "In cognitive HCI, slips occur when the goal is correct but physical execution fails; mistakes occur when the mental model or goal formulation itself is flawed."
          },
          {
            "id": 6,
            "question": "In a vertical prototype, the entire interface is depicted at the surface level without any functionality.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 1,
            "explanation": "A horizontal prototype depicts broad surface UI without deep function; a vertical prototype implements deep, complete functionality for a narrow slice of features."
          },
          {
            "id": 7,
            "question": "Paper mock-ups are an example of a __________ prototype.",
            "options": [
              "High fidelity",
              "Production",
              "Low fidelity",
              "Medium fidelity"
            ],
            "correctIndex": 2,
            "explanation": "Paper mock-ups, sketches, and storyboards are low-fidelity prototypes created quickly without digital coding."
          },
          {
            "id": 8,
            "question": "There is a requirement of a 3-5 member team for the cognitive walkthrough.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Cognitive walkthroughs are structured expert reviews typically carried out by a team of 3 to 5 usability evaluators."
          },
          {
            "id": 9,
            "question": "In a cognitive walkthrough evaluation, evaluators are expected to answer the questions only in “yes” or “no”.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 1,
            "explanation": "Evaluators must provide qualitative rationale and failure stories detailing why a user might not take the correct action, not merely a yes/no response."
          },
          {
            "id": 10,
            "question": "In this technique, a human subject believes they are interacting with an autonomous computer, but in reality the computer is operated by an unseen human being. This is called the ________ approach.",
            "options": [
              "Medium fidelity",
              "Vertical",
              "Incremental",
              "Wizard of Oz"
            ],
            "correctIndex": 3,
            "explanation": "The Wizard of Oz testing technique uses a hidden human operator ('the wizard') to simulate automated or AI software responses before implementing full logic."
          }
        ]
      },
      "hci_week5": {
        "id": "hci_week5",
        "title": "Week 05 : Assignment 05",
        "topic": "Usability Evaluation, Heuristics & SUS",
        "questions": [
          {
            "id": 1,
            "question": "How do we evaluate an interface?",
            "options": [
              "by evaluating usability",
              "by evaluating memorability",
              "by counting lines of code",
              "by evaluating satisfaction"
            ],
            "correctIndex": 0,
            "explanation": "Usability evaluation encompasses learnability, efficiency, error rates, and subjective user satisfaction collectively."
          },
          {
            "id": 2,
            "question": "We need to frame a set of questions (usability issues) for the evaluators before performing a cognitive walkthrough.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Cognitive walkthroughs follow 4 core questions for each task step (e.g., Will users try to achieve the right effect? Will they notice the correct action?)."
          },
          {
            "id": 3,
            "question": "In a heuristic evaluation, the items in the checklist are called __________.",
            "options": [
              "usability issues",
              "problems",
              "heuristics",
              "checkbox"
            ],
            "correctIndex": 2,
            "explanation": "Heuristic evaluation inspects interfaces against established design principles or rules-of-thumb known as heuristics (such as Nielsen's 10 Usability Heuristics)."
          },
          {
            "id": 4,
            "question": "There are many ways of collecting user feedback in evaluation with self-report methods: choosing from a list of system attributes, asking open-ended questions, and ______________.",
            "options": [
              "Reading source code",
              "Profiling CPU execution",
              "Utter the option",
              "Rating on a scale"
            ],
            "correctIndex": 3,
            "explanation": "Self-report rating scales (such as 5-point or 7-point Likert scales) quantify subjective impressions."
          },
          {
            "id": 5,
            "question": "ASQ is a ___________________.",
            "options": [
              "Pre-test questionnaire",
              "Post-task questionnaire",
              "Heuristic checklist",
              "Post-session questionnaire"
            ],
            "correctIndex": 1,
            "explanation": "The After-Scenario Questionnaire (ASQ) is administered immediately following the completion of an individual task/scenario."
          },
          {
            "id": 6,
            "question": "It is generally assumed that an SUS score around _______ percent or higher is desirable.",
            "options": [
              "50",
              "70",
              "20",
              "10"
            ],
            "correctIndex": 1,
            "explanation": "A System Usability Scale (SUS) score of 68 is the historical average benchmark; scores around 70 or above indicate acceptable to good usability."
          },
          {
            "id": 7,
            "question": "In expert evaluation, the evaluation team should have at least _________ members.",
            "options": [
              "5-7",
              "4-7",
              "7-9",
              "3-5"
            ],
            "correctIndex": 3,
            "explanation": "Research by Nielsen shows that 3 to 5 expert evaluators find the vast majority (around 75-80%) of usability problems."
          },
          {
            "id": 8,
            "question": "In heuristic evaluation, a system is evaluated with a checklist where the items are called _______.",
            "options": [
              "Actions",
              "Statement",
              "Metrics",
              "Heuristics"
            ],
            "correctIndex": 3,
            "explanation": "Evaluators systematically review the UI using recognized usability heuristics."
          },
          {
            "id": 9,
            "question": "What is the full form of SUS?",
            "options": [
              "System usability scale",
              "Software usability scale",
              "Software usability score",
              "System usability score"
            ],
            "correctIndex": 0,
            "explanation": "SUS stands for System Usability Scale, a 10-item Likert scale developed by John Brooke in 1986."
          },
          {
            "id": 10,
            "question": "Which of the following are valid prototype evaluation methods?",
            "options": [
              "Both Cognitive walkthrough and Heuristic evaluation",
              "Cognitive walkthrough only",
              "Affinity diagram only",
              "Heuristic evaluation only"
            ],
            "correctIndex": 0,
            "explanation": "Both Cognitive Walkthrough and Heuristic Evaluation are established usability inspection methods for evaluating prototypes."
          }
        ]
      },
      "hci_week6": {
        "id": "hci_week6",
        "title": "Week 06 : Assignment 06",
        "topic": "Good Design, Modularity, Cohesion & Coupling",
        "questions": [
          {
            "id": 1,
            "question": "Which of the following is NOT a characteristic of good design?",
            "options": [
              "Understandability",
              "Colorful",
              "Correctness",
              "Coverage"
            ],
            "correctIndex": 1,
            "explanation": "A good design focuses on correctness, understandability, maintainability, and coverage; color alone does not make a design good."
          },
          {
            "id": 2,
            "question": "If all functions perform similar operations, it falls under ________ cohesion.",
            "options": [
              "Procedural",
              "Temporal",
              "Logical",
              "Sequential"
            ],
            "correctIndex": 2,
            "explanation": "Logical cohesion occurs when elements of a module are grouped together because they perform logically similar tasks (e.g., all print or input routines)."
          },
          {
            "id": 3,
            "question": "If two modules share code, it falls under __________ coupling.",
            "options": [
              "Content",
              "Common",
              "Data",
              "Control"
            ],
            "correctIndex": 0,
            "explanation": "Content coupling is the worst form of coupling, occurring when one module modifies or relies directly on the internal code or memory of another."
          },
          {
            "id": 4,
            "question": "There are two basic design approaches: function-oriented and _______-oriented.",
            "options": [
              "Object",
              "Folder",
              "Class",
              "Logic"
            ],
            "correctIndex": 0,
            "explanation": "Function-oriented design structures systems around procedures, while Object-oriented design structures systems around data entities (objects)."
          },
          {
            "id": 5,
            "question": "Basic components of an ER diagram are: Entity, _____ and Relationship.",
            "options": [
              "Object",
              "Class",
              "User",
              "Attribute"
            ],
            "correctIndex": 3,
            "explanation": "Entity-Relationship (ER) models are built using Entities, Attributes (properties), and Relationships."
          },
          {
            "id": 6,
            "question": "Null attributes are used when:",
            "options": [
              "An entity has duplicate primary keys",
              "An entity does not have a value for an attribute",
              "A value needs to be derived from other attributes or entities",
              "The database connection fails"
            ],
            "correctIndex": 1,
            "explanation": "A null attribute indicates that a specific attribute does not apply or has no defined value for that particular entity instance."
          },
          {
            "id": 7,
            "question": "There are four types of relationships in ER diagram: one-to-one, one-to-many, many-to-one and _______.",
            "options": [
              "Many-to-binary",
              "Binary-to-one",
              "Many-to-many",
              "Binary-to-many"
            ],
            "correctIndex": 2,
            "explanation": "Cardinality ratios in ER modeling are 1:1, 1:N, N:1, and M:N (many-to-many)."
          },
          {
            "id": 8,
            "question": "Which of the following are recognized types of module cohesion?",
            "options": [
              "Temporal only",
              "Both Temporal and Functional",
              "Content only",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "Types of cohesion include Coincidental, Logical, Temporal, Procedural, Communicational, Sequential, and Functional. Content is a type of coupling, not cohesion."
          },
          {
            "id": 9,
            "question": "Which of the following describes the degree of interdependence between different modules?",
            "options": [
              "Both Cohesion and Coupling",
              "Granularity",
              "Coupling",
              "Cohesion"
            ],
            "correctIndex": 2,
            "explanation": "Coupling measures the degree of interdependence between different modules, whereas cohesion measures intra-module binding."
          },
          {
            "id": 10,
            "question": "What is the full form of DFD?",
            "options": [
              "Data flow diagram",
              "Data flow development",
              "Data flow design",
              "Data flow decision"
            ],
            "correctIndex": 0,
            "explanation": "DFD stands for Data Flow Diagram."
          }
        ]
      },
      "hci_week7": {
        "id": "hci_week7",
        "title": "Week 07 : Assignment 07",
        "topic": "Object-Oriented Design & UML Modeling",
        "questions": [
          {
            "id": 1,
            "question": "In a functional design approach, we think of the system as a provider of a set of “services” represented as ________.",
            "options": [
              "Data",
              "Objects",
              "Functions",
              "Tables"
            ],
            "correctIndex": 2,
            "explanation": "Functional decomposition views software as a hierarchy of functions that transform inputs into outputs."
          },
          {
            "id": 2,
            "question": "In the “Object-Oriented Design approach”, we do not consider “services” offered by the system.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Instead of top-level system services, OOD models the domain as interacting autonomous objects with internal states and behaviors."
          },
          {
            "id": 3,
            "question": "A class contains attributes and ___________.",
            "options": [
              "Data",
              "Files",
              "Objects",
              "Operations"
            ],
            "correctIndex": 3,
            "explanation": "A class definition encapsulates attributes (state/data) and operations (methods/behavior)."
          },
          {
            "id": 4,
            "question": "An attribute indicates the nature of data that an object can contain.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Attributes represent the data structure and internal state characteristics of objects belonging to the class."
          },
          {
            "id": 5,
            "question": "Full form of OOA is:",
            "options": [
              "object oriented analysis",
              "object oriented attributes",
              "object oriented assignment",
              "object oriented assistance"
            ],
            "correctIndex": 0,
            "explanation": "OOA stands for Object-Oriented Analysis."
          },
          {
            "id": 6,
            "question": "________ effectively denotes the behavior of a class.",
            "options": [
              "Attributes",
              "Data",
              "Objects",
              "Operations"
            ],
            "correctIndex": 3,
            "explanation": "Operations (member functions or methods) define how a class responds to messages and modifies its state."
          },
          {
            "id": 7,
            "question": "UML is a language to represent:",
            "options": [
              "XML",
              "OOP",
              "OOA",
              "OOD"
            ],
            "correctIndex": 3,
            "explanation": "The Unified Modeling Language (UML) is a standardized visual modeling language used to visualize, specify, and document Object-Oriented Design (OOD)."
          },
          {
            "id": 8,
            "question": "UML is a design methodology.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 1,
            "explanation": "UML is a notation/language for expressing designs, not a methodology or step-by-step development process."
          },
          {
            "id": 9,
            "question": "The implementation view of software can be captured using a ________ diagram.",
            "options": [
              "Component diagram",
              "Use case diagram",
              "Deployment diagram",
              "Class diagram"
            ],
            "correctIndex": 0,
            "explanation": "Component diagrams show software modules, libraries, and executables, representing the implementation organization."
          },
          {
            "id": 10,
            "question": "________ objects normally hold information (e.g. book, book registers etc).",
            "options": [
              "Controller",
              "Entity",
              "Boundary",
              "Interface"
            ],
            "correctIndex": 1,
            "explanation": "In the Entity-Control-Boundary (ECB) pattern, Entity objects encapsulate persistent domain data and business state."
          }
        ]
      },
      "hci_week8": {
        "id": "hci_week8",
        "title": "Week 08 : Assignment 08",
        "topic": "Coding Guidelines, Inspection & Walkthroughs",
        "questions": [
          {
            "id": 1,
            "question": "Following standard coding guidelines helps to improve ______.",
            "options": [
              "Readability, understandability, and teamwork",
              "Understandability only",
              "Readability only",
              "Teamwork only"
            ],
            "correctIndex": 0,
            "explanation": "Consistent naming, indentation, and formatting enhance code readability, maintainability, and collaboration across engineering teams."
          },
          {
            "id": 2,
            "question": "A function should have no longer than _____ lines of code.",
            "options": [
              "10",
              "5",
              "8",
              "16"
            ],
            "correctIndex": 0,
            "explanation": "Strict clean code rules often suggest small, single-purpose functions of around 10 lines of code."
          },
          {
            "id": 3,
            "question": "Which of the following practices should be avoided when writing clean code?",
            "options": [
              "Writing modular functions",
              "Lengthy functions, multiple uses for an identifier, and indiscriminate goto statements",
              "Using descriptive variable names",
              "Using proper indentation"
            ],
            "correctIndex": 1,
            "explanation": "Avoid monolithic functions, re-using variable identifiers for different purposes, and arbitrary branching (goto)."
          },
          {
            "id": 4,
            "question": "Two broad categories of code testing methods are review-based methods and __________ methods.",
            "options": [
              "Execution-based",
              "Automated syntax checking",
              "Static compiling",
              "Manual testing"
            ],
            "correctIndex": 0,
            "explanation": "Code testing methods divide into Review-based (static inspection/walkthrough) and Execution-based (dynamic testing with inputs)."
          },
          {
            "id": 5,
            "question": "What are two common methods for review-based testing?",
            "options": [
              "Black box and White box testing",
              "Regression testing and Mutation testing",
              "Unit testing and Integration testing",
              "Code inspection and Code walkthrough"
            ],
            "correctIndex": 3,
            "explanation": "Review-based (static) verification relies primarily on peer code inspections and code walkthroughs."
          },
          {
            "id": 6,
            "question": "White-box testing refers to designing test cases using knowledge of internal structure of the software.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "White-box (glass-box/structural) testing uses knowledge of source code logic, control flow, and data structures."
          },
          {
            "id": 7,
            "question": "How many members should typically be present in a code walkthrough team?",
            "options": [
              "3–5 members",
              "2–3 members",
              "5–7 members",
              "7–10 members"
            ],
            "correctIndex": 0,
            "explanation": "A code walkthrough team typically consists of 3 to 5 members (author, walkthrough leader, recorder, reviewers)."
          },
          {
            "id": 8,
            "question": "Which of the following code testing methods requires simulation of code execution by hand?",
            "options": [
              "White box testing",
              "Black box testing",
              "Code inspection",
              "Code walkthrough"
            ],
            "correctIndex": 3,
            "explanation": "In a code walkthrough, the author guides peers through the code step-by-step using sample test data mentally or on paper."
          },
          {
            "id": 9,
            "question": "Uninitialized variable is one of the common errors in programming that can be identified through code inspection.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Checklists in code inspections specifically scan for uninitialized variables, out-of-bounds arrays, and resource leaks."
          },
          {
            "id": 10,
            "question": "Which of the following is NOT required to perform black box testing?",
            "options": [
              "Knowledge of the internal structure of the code",
              "Boundary value analysis",
              "Test suite creation",
              "Equivalence class partitioning"
            ],
            "correctIndex": 0,
            "explanation": "Black box testing evaluates functionality based strictly on requirements and interfaces without inspecting internal source code."
          }
        ]
      },
      "hci_week9": {
        "id": "hci_week9",
        "title": "Week 09 : Assignment 09",
        "topic": "Black-Box Testing, Equivalence Classes & BVA",
        "questions": [
          {
            "id": 1,
            "question": "A set of all test cases with which a given software is to be tested is known as a ________.",
            "options": [
              "Test suite",
              "Test report",
              "Test plan",
              "Testcase"
            ],
            "correctIndex": 0,
            "explanation": "A test suite is a collection of test cases designed to evaluate a system or module for compliance with requirements."
          },
          {
            "id": 2,
            "question": "Randomly selected test cases do not necessarily contribute to significance of test suite.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Random testing often leads to redundant tests that exercise the same path; systematic techniques provide better coverage."
          },
          {
            "id": 3,
            "question": "In black box testing the two main approaches to design test cases are: Equivalence class partitioning and _______________.",
            "options": [
              "Structural analysis",
              "Equivalence class analysis",
              "System analysis",
              "Boundary value analysis"
            ],
            "correctIndex": 3,
            "explanation": "Equivalence Partitioning and Boundary Value Analysis (BVA) are the two primary black-box test design techniques."
          },
          {
            "id": 4,
            "question": "Testing code with any _____ value(s) of an equivalence class is as good as testing with ALL input values belonging to that class.",
            "options": [
              "Five",
              "Two",
              "Four",
              "One"
            ],
            "correctIndex": 3,
            "explanation": "Equivalence partitioning assumes all inputs within a valid partition produce identical program behavior, so testing one representative value suffices."
          },
          {
            "id": 5,
            "question": "In black box testing, the domain of input values is partitioned into sets called _________.",
            "options": [
              "Program class",
              "Partition class",
              "Equivalence class",
              "Data group"
            ],
            "correctIndex": 2,
            "explanation": "An Equivalence Class is a subset of inputs for which the software is assumed to exhibit uniform behavior."
          },
          {
            "id": 6,
            "question": "Which of the following are valid review-based testing techniques?",
            "options": [
              "Both Code walkthrough and Code inspection",
              "Code assessment only",
              "Code analysis only",
              "None of the above"
            ],
            "correctIndex": 0,
            "explanation": "Both code inspections (formal checklist-driven) and code walkthroughs (author-led step-through) are static review testing methods."
          },
          {
            "id": 7,
            "question": "A collection of all test cases used to test a software program is called a test _____.",
            "options": [
              "Questionnaire",
              "Question",
              "Series",
              "Suite"
            ],
            "correctIndex": 3,
            "explanation": "The collection is called a Test Suite."
          },
          {
            "id": 8,
            "question": "In Black-box testing, test cases are designed based on:",
            "options": [
              "Compiler optimization levels",
              "Knowledge of source code",
              "Knowledge of internal design",
              "Input and output specifications"
            ],
            "correctIndex": 3,
            "explanation": "Black-box test design derives cases from inputs and expected outputs without looking into source code internals."
          },
          {
            "id": 9,
            "question": "The domain of input values partitioned into sets is called an equivalence class.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "This is the definition of equivalence class partitioning."
          },
          {
            "id": 10,
            "question": "Functional testing is directly related to:",
            "options": [
              "White-box testing",
              "Black-box testing"
            ],
            "correctIndex": 1,
            "explanation": "Functional testing evaluates system behaviors against functional requirements, characteristic of black-box testing."
          }
        ]
      },
      "hci_week10": {
        "id": "hci_week10",
        "title": "Week 10 : Assignment 10",
        "topic": "White-Box Testing, CFG & System Testing",
        "questions": [
          {
            "id": 1,
            "question": "To do white-box testing, knowledge of internal structure is required.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "White-box testing explicitly requires knowledge of internal source code, architecture, and control pathways."
          },
          {
            "id": 2,
            "question": "To visualize the control flow of a program during white-box testing, we can take the help of a ________.",
            "options": [
              "DFD",
              "Class diagram",
              "ERD",
              "CFG"
            ],
            "correctIndex": 3,
            "explanation": "A Control Flow Graph (CFG) graphically represents all paths that might be traversed through a program during execution."
          },
          {
            "id": 3,
            "question": "To construct a CFG, we assign numbers to statements, create nodes for each, and _____________.",
            "options": [
              "Sort the nodes",
              "Delete leaves",
              "Complement the CFG",
              "Add edges"
            ],
            "correctIndex": 3,
            "explanation": "Edges are added between nodes to show transfers of control from one statement to another."
          },
          {
            "id": 4,
            "question": "Branch coverage guarantees statement coverage.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Executing both True and False branches of every conditional decision guarantees that all statements on those branches are visited."
          },
          {
            "id": 5,
            "question": "In path coverage, test cases should ensure that all __________ in the code are executed at least once.",
            "options": [
              "Linearly dependent paths",
              "Dead code statements",
              "Infinite loops",
              "Linearly independent paths"
            ],
            "correctIndex": 3,
            "explanation": "Basis path testing guarantees that all linearly independent execution paths through the CFG are exercised."
          },
          {
            "id": 6,
            "question": "To compute cyclomatic complexity, we can use the formula ___________, where E = number of edges, N = number of nodes.",
            "options": [
              "E+N-1",
              "E-N+1",
              "E-N+2",
              "E+N-2"
            ],
            "correctIndex": 2,
            "explanation": "McCabe's Cyclomatic Complexity formula is V(G) = E - N + 2 (or P + 1 where P is the number of predicate nodes)."
          },
          {
            "id": 7,
            "question": "Three main stages of system testing are alpha testing, beta testing and _________.",
            "options": [
              "Sigma testing",
              "Acceptance testing",
              "Gama testing",
              "Omega testing"
            ],
            "correctIndex": 1,
            "explanation": "System testing stages include Alpha testing (developer site), Beta testing (customer site), and Acceptance testing."
          },
          {
            "id": 8,
            "question": "Volume testing tests system performance for ______ input.",
            "options": [
              "Large",
              "Small"
            ],
            "correctIndex": 0,
            "explanation": "Volume testing tests the capability of software to process massive volumes of data without crashing or degrading."
          },
          {
            "id": 9,
            "question": "There are _____ stages of empirical research.",
            "options": [
              "Four",
              "Six",
              "Three",
              "Five"
            ],
            "correctIndex": 0,
            "explanation": "The four stages are: Formulation of research question, Determination of variables, Design of experiment, and Data analysis."
          },
          {
            "id": 10,
            "question": "Data we get from observation is ________ data.",
            "options": [
              "Empirical",
              "Reflective",
              "Experiential",
              "Authoritative"
            ],
            "correctIndex": 0,
            "explanation": "Empirical data is information acquired by means of direct observation or experimentation."
          }
        ]
      },
      "hci_week11": {
        "id": "hci_week11",
        "title": "Week 11 : Assignment 11",
        "topic": "Empirical Research, Controlled Experiments & Scales",
        "questions": [
          {
            "id": 1,
            "question": "When we perform a controlled experiment to collect and analyze data on user behavior, the entire process is known as _______.",
            "options": [
              "programmable research",
              "empirical research",
              "hypothetical research",
              "theoretical research"
            ],
            "correctIndex": 1,
            "explanation": "Empirical research uses observation and controlled experiments to test hypotheses against real-world data."
          },
          {
            "id": 2,
            "question": "There are broadly _____ stages of empirical research?",
            "options": [
              "four",
              "five",
              "three",
              "Two"
            ],
            "correctIndex": 0,
            "explanation": "The 4 stages: Research questions, Variables identification, Experimental design, and Data analysis."
          },
          {
            "id": 3,
            "question": "Given research questions RQ1: 'Is the new technique good?' and RQ3: 'Does the new interface let me enter text faster than MS Word?', we call RQ3 ______ and RQ1 as _______.",
            "options": [
              "nominal, ordinal",
              "testable, non-testable",
              "dependent, independent",
              "alternative hypothesis, null hypothesis"
            ],
            "correctIndex": 1,
            "explanation": "RQ3 is objectively measurable (speed comparison), making it testable. RQ1 is subjective and vague, making it non-testable."
          },
          {
            "id": 4,
            "question": "When we form a hypothesis stating that the test condition is not going to affect the outcome, this hypothesis is called the _______.",
            "options": [
              "alternative hypothesis",
              "directional hypothesis",
              "experimental hypothesis",
              "null hypothesis"
            ],
            "correctIndex": 3,
            "explanation": "The null hypothesis (H0) assumes no significant difference or effect exists between conditions."
          },
          {
            "id": 5,
            "question": "In _______ scale, we assign arbitrary codes/labels to categories of observational data.",
            "options": [
              "ratio",
              "nominal",
              "interval",
              "ordinal"
            ],
            "correctIndex": 1,
            "explanation": "Nominal scales categorize data using names or labels without quantitative or ordering value."
          },
          {
            "id": 6,
            "question": "Recording data from a thermometer is an example of interval scaled data.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Celsius and Fahrenheit temperature scales have equal intervals between units but an arbitrary zero point, classifying them as interval data."
          },
          {
            "id": 7,
            "question": "_______ are variables that influence both the independent and dependent variables in a study, potentially leading to incorrect conclusions.",
            "options": [
              "Dependant variables",
              "Independent variables",
              "Control variables",
              "Confounding variables"
            ],
            "correctIndex": 3,
            "explanation": "Confounding variables are extraneous factors that correlate with both independent and dependent variables, causing distortion."
          },
          {
            "id": 8,
            "question": "For any pilot study (or small-scale usability studies), 5 participants is probably a good number.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "In usability engineering, testing with 5 users is widely accepted to uncover approximately 80% of usability problems."
          },
          {
            "id": 9,
            "question": "To draw reliable conclusions from empirical data, we should use between _____ and _____ participants.",
            "options": [
              "1, 5",
              "2, 5",
              "10, 12",
              "12, 25"
            ],
            "correctIndex": 3,
            "explanation": "Statistical power calculations for controlled HCI experiments generally recommend between 12 and 25 participants per condition."
          },
          {
            "id": 10,
            "question": "When different groups of participants are assigned to different test conditions, we call the study a _______ design.",
            "options": [
              "within-subject",
              "uni-subject",
              "center-subject",
              "between-subject"
            ],
            "correctIndex": 3,
            "explanation": "A between-subjects study assigns separate groups to different conditions, avoiding carryover or practice effects."
          }
        ]
      },
      "hci_week12": {
        "id": "hci_week12",
        "title": "Week 12 : Assignment 12",
        "topic": "Statistical Significance, COCOMO & Project Management",
        "questions": [
          {
            "id": 1,
            "question": "With a significance test, we try to _______ the null hypothesis.",
            "options": [
              "Refute",
              "Accept"
            ],
            "correctIndex": 0,
            "explanation": "Statistical hypothesis testing seeks evidence to reject (refute) the null hypothesis in favor of the alternative."
          },
          {
            "id": 2,
            "question": "Type I error is also known as a _______.",
            "options": [
              "True negative",
              "False negative",
              "True positive",
              "False positive"
            ],
            "correctIndex": 3,
            "explanation": "A Type I error occurs when a true null hypothesis is mistakenly rejected (a false positive)."
          },
          {
            "id": 3,
            "question": "t-statistic is the ONLY way to test for statistical significance.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 1,
            "explanation": "Other statistical tests include ANOVA, Chi-square, Mann-Whitney U, and Wilcoxon signed-rank tests."
          },
          {
            "id": 4,
            "question": "There are broadly two categories of techniques for significance tests: _______ and _______.",
            "options": [
              "Discrete and Continuous",
              "Linear and Non-linear",
              "t-test and non t-test",
              "Parametric and Non-parametric"
            ],
            "correctIndex": 3,
            "explanation": "Significance tests are categorized into Parametric (assuming normal distribution) and Non-parametric tests."
          },
          {
            "id": 5,
            "question": "Project planning involves estimation of Project size, Cost, Duration and Effort.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Software project planning focuses on estimating lines of code/function points (size), person-months (effort), schedule (duration), and overall cost."
          },
          {
            "id": 6,
            "question": "COCOMO stands for _______.",
            "options": [
              "Conducive Cost Estimation Model",
              "Constructive Category Estimation Model",
              "Conducive Category Estimation Model",
              "Constructive Cost Estimation Model"
            ],
            "correctIndex": 3,
            "explanation": "COCOMO stands for Constructive Cost Model, developed by Barry Boehm."
          },
          {
            "id": 7,
            "question": "According to Boehm, software cost estimation should be done through _______ stages.",
            "options": [
              "Four",
              "Five",
              "Two",
              "Three"
            ],
            "correctIndex": 3,
            "explanation": "COCOMO defines three hierarchical stages: Basic, Intermediate, and Detailed."
          },
          {
            "id": 8,
            "question": "Agile development ensures quick turn-around of projects.",
            "options": [
              "True",
              "False"
            ],
            "correctIndex": 0,
            "explanation": "Agile development uses short timeboxed sprints, continuous integration, and rapid feedback loops."
          },
          {
            "id": 9,
            "question": "Scrum is a _______ method.",
            "options": [
              "Agile",
              "Traditional SDLC"
            ],
            "correctIndex": 0,
            "explanation": "Scrum is an iterative, incremental Agile framework for project management and software delivery."
          },
          {
            "id": 10,
            "question": "In a Gantt chart, the horizontal length of a bar is proportional to the _______ for the activity.",
            "options": [
              "Risk factor",
              "Effort",
              "Duration planned",
              "Cost"
            ],
            "correctIndex": 2,
            "explanation": "The horizontal axis represents calendar time, so bar length corresponds directly to the planned duration of that activity."
          }
        ]
      }
    }
  },
  "psosm": {
    "id": "psosm",
    "title": "Privacy and Security in Online Social Media",
    "shortTitle": "Social Media Privacy & Security (PSOSM)",
    "topic": "OSN Privacy, Credibility & Network Security",
    "assignments": {
      "psosm_week1": {
        "id": "psosm_week1",
        "title": "Week 01 : Assignment 01",
        "topic": "Git Version Control, Virtual Environments & OSN Concepts",
        "questions": [
          {
            "id": 1,
            "question": "Which sequence correctly hosts a local Git repository on GitHub?",
            "options": [
              "git clone → git remote add → git status",
              "git remote -v → git clone → git push",
              "git remote add origin ... → git remote -v → git push origin master",
              "git push origin master → git remote -v → git remote add origin ..."
            ],
            "correctIndex": 2,
            "explanation": "To host an existing local git repo on GitHub, first add the remote URL using 'git remote add origin <url>', optionally verify it with 'git remote -v', and finally push the commits using 'git push origin master'."
          },
          {
            "id": 2,
            "question": "Which of the following statement(s) is/are true about Anonymous social networks?",
            "options": [
              "Anonymous social networks provide more freedom of expression.",
              "Anonymous social networks help in providing enhanced privacy and anonymity.",
              "Anonymous social networks reduce the fear of judgment or social consequences.",
              "All of the above"
            ],
            "correctIndex": 3,
            "explanation": "Anonymous social networks provide users with privacy/anonymity, foster open expression of sensitive thoughts, and reduce anxiety or fear of social backlash."
          },
          {
            "id": 3,
            "question": "Choose the correct option to create a virtual environment in Python:",
            "options": [
              "python3 venv -m <env_name>",
              "python3 -m venv <env_name>",
              "virtualpython3 -m venv <env_name>",
              "virtualenv python3 -m venv myenv"
            ],
            "correctIndex": 1,
            "explanation": "The standard Python 3 command to create a lightweight virtual environment is 'python3 -m venv <env_name>'."
          },
          {
            "id": 4,
            "question": "Why is it important to create a virtual environment in Python?",
            "options": [
              "Creating a virtual environment optimises memory usage in Python applications.",
              "Creating a virtual environment to ensure compatibility with different operating systems.",
              "Creating a virtual environment enhances the performance of Python programs.",
              "Creating a virtual environment isolates project dependencies and prevents conflicts between different projects."
            ],
            "correctIndex": 3,
            "explanation": "Python virtual environments keep packages and dependencies isolated per-project, preventing version conflicts with system packages or other projects."
          },
          {
            "id": 5,
            "question": "Fill in the correct option to stage files/directories in Git lifecycle:",
            "options": [
              "Modified, tracked",
              "Unmodified, modified",
              "modified, unstaged",
              "Modified, Unmodified"
            ],
            "correctIndex": 1,
            "explanation": "In Git file status lifecycle, files move between Untracked, Unmodified, Modified, and Staged."
          },
          {
            "id": 6,
            "question": "Which command lists all the remote addresses associated with a local repository?",
            "options": [
              "git checkout",
              "git remote -v",
              "git stash",
              "git pull origin master"
            ],
            "correctIndex": 1,
            "explanation": "'git remote -v' displays the names and URLs of all configured remote repositories for fetching and pushing."
          },
          {
            "id": 7,
            "question": "Which of the following concepts is closely related to the fact that infrequent, arms-length relationships are more beneficial for employment opportunities, promotions, and wages than strong ties?",
            "options": [
              "Six degrees of separation",
              "Strength of weak ties",
              "Small world phenomenon",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "Mark Granovetter's seminal theory 'The Strength of Weak Ties' showed that acquaintances (weak ties) provide novel information and diverse job opportunities compared to close friends."
          },
          {
            "id": 8,
            "question": "Which of the following is/are shortcomings of online social media platforms?",
            "options": [
              "Spread of misinformation and fake news",
              "Cyberbullying and online harassment",
              "Addiction and excessive time consumption",
              "All of the above"
            ],
            "correctIndex": 3,
            "explanation": "Online social networks suffer from multiple shortcomings including misinformation virality, cyberbullying, addictive algorithmic feedback loops, and limited control over privacy."
          },
          {
            "id": 9,
            "question": "When a piece of content, such as a video, meme, or news article, gains attention on social media platforms, it can quickly reach a large audience within a short period. Which 'V' of big/social data does it refer to?",
            "options": [
              "Veracity",
              "Volume",
              "Value",
              "Velocity"
            ],
            "correctIndex": 3,
            "explanation": "Velocity refers to the speed of content generation, diffusion, and rapid viral dissemination across platforms."
          },
          {
            "id": 10,
            "question": "What is the primary purpose of the Gab platform as discussed in the lectures?",
            "options": [
              "Support for professional networking",
              "To facilitate online shopping experience",
              "It provides educational resources",
              "To promote free speech"
            ],
            "correctIndex": 3,
            "explanation": "Gab was founded as an alternative social network with a primary mission focused on unrestricted free speech and minimal moderation."
          }
        ]
      },
      "psosm_week2": {
        "id": "psosm_week2",
        "title": "Week 02 : Assignment 02",
        "topic": "Reddit API, Data Formats, LIWC & Graph API",
        "questions": [
          {
            "id": 1,
            "question": "What is the primary data format utilized by the Reddit API when returning information?",
            "options": [
              "HTML",
              "XML",
              "CSV",
              "JSON"
            ],
            "correctIndex": 3,
            "explanation": "The Reddit API returns structured payload data primarily in JSON (JavaScript Object Notation) format."
          },
          {
            "id": 2,
            "question": "JSON stands for:",
            "options": [
              "JavaScript Oriented Namespace",
              "JavaScript Object Network",
              "JavaScript Object Notation",
              "JavaScript Oriented Notation"
            ],
            "correctIndex": 2,
            "explanation": "JSON stands for JavaScript Object Notation, a lightweight data-interchange format."
          },
          {
            "id": 3,
            "question": "Suppose you want to retrieve the top 5 hottest posts from the subreddit 'r/technology' using the Reddit API. Which Python library would you most likely use to achieve this?",
            "options": [
              "Urllib",
              "PRAW",
              "JSON",
              "Requests"
            ],
            "correctIndex": 1,
            "explanation": "PRAW (Python Reddit API Wrapper) is the official/standard Python wrapper library for interacting with the Reddit API."
          },
          {
            "id": 4,
            "question": "You want to fetch the details of 10 hot posts from the subreddit 'r/worldnews' using the Reddit API in Python. Which is the correct code snippet?",
            "options": [
              "import requests\nposts = requests.get('https://reddit.com/r/worldnews/new.json', limit=10)\nfor post in posts:\n    print(post.title)",
              "import praw\nreddit = praw.Reddit(client_id='MY_CLIENT_ID', client_secret='MY_CLIENT_SECRET', user_agent='MY_USER_AGENT')\nposts = reddit.subreddit('worldnews').new(limit=10)\nfor post in posts:\n    print(post.title)",
              "import praw\nreddit = praw.Reddit(client_id='MY_CLIENT_ID', client_secret='MY_CLIENT_SECRET', user_agent='MY_USER_AGENT')\nposts = reddit.subreddit('worldnews').hot(limit=10)\nfor post in posts:\n    print(post.title)",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "In PRAW, calling 'reddit.subreddit('worldnews').hot(limit=10)' specifically retrieves the top 10 hot posts."
          },
          {
            "id": 5,
            "question": "Which of the following tweet content features falls in the category of linguistic features?",
            "options": [
              "Number of retweets",
              "Number of followers",
              "Presence of smileys only",
              "Presence of negative emotion words and pronouns"
            ],
            "correctIndex": 3,
            "explanation": "Linguistic features (often extracted via LIWC) analyze text composition such as negative emotion words, affective processes, pronouns, and syntax."
          },
          {
            "id": 6,
            "question": "Why do we do network analysis on social media platforms?",
            "options": [
              "To identify and analyze patterns of diseases spreading within a population.",
              "To study the behavior of network protocols and optimize their efficiency.",
              "To analyze the performance of computer networks and improve data transmission speeds.",
              "To understand the social structures and relationships between individuals or entities in a network."
            ],
            "correctIndex": 3,
            "explanation": "Social network analysis examines graph structures, ties, communities, centralities, and behavioral dynamics among online users and entities."
          },
          {
            "id": 7,
            "question": "Which of the following is a recent example of misinformation spread on social media platforms?",
            "options": [
              "Instagram story containing accurate information about a recent political development with credible sources cited.",
              "Facebook post sharing information from a well-known health organization about the effectiveness of vaccination.",
              "YouTube video providing a detailed explanation of climate change supported by scientific evidence.",
              "Tweet claiming that a particular brand of COVID-19 vaccine causes severe side effects, with no evidence to support the claim."
            ],
            "correctIndex": 3,
            "explanation": "Unsubstantiated vaccine side effect claims circulating without scientific backing represent classic social media health misinformation."
          },
          {
            "id": 8,
            "question": "Given a MongoDB collection named 'employees', what MongoDB query would you use to retrieve all employees with a salary greater than or equal to 60000?",
            "options": [
              "db.employees.find({ \"salary\": { $lt: 60000 } })",
              "db.employees.find({ \"salary\": { $gte: 60000 } })",
              "db.employees.find({ \"salary\": { $lte: 60000 } })",
              "db.employees.find({ \"salary\": { $gt: 60000 } })"
            ],
            "correctIndex": 1,
            "explanation": "In MongoDB query operators, '$gte' stands for greater than or equal to."
          },
          {
            "id": 9,
            "question": "You want to retrieve the 5 most recent posts made by a specific user with the user ID '12345'. Which SQL query would you use?",
            "options": [
              "SELECT * FROM posts WHERE user_id = 12345 ORDER BY post_id ASC LIMIT 5;",
              "SELECT * FROM posts WHERE user_id = 12345 ORDER BY post_date ASC LIMIT 5;",
              "SELECT * FROM posts WHERE user_id = 12345 ORDER BY post_id DESC LIMIT 5;",
              "SELECT * FROM posts WHERE user_id = 12345 ORDER BY post_date DESC LIMIT 5;"
            ],
            "correctIndex": 3,
            "explanation": "Ordering by 'post_date DESC' sorts the records newest first, and 'LIMIT 5' restricts the result to the 5 most recent posts."
          },
          {
            "id": 10,
            "question": "What is the Facebook Graph API as discussed in the lecture?",
            "options": [
              "An API that provides access only to a user's Facebook friends list.",
              "An API that enables developers to integrate Facebook login into their applications for user authentication only.",
              "An API that allows developers to create and manage Facebook pages only.",
              "An API that provides access to a wide range of user data, interactions, and connections on Facebook."
            ],
            "correctIndex": 3,
            "explanation": "The Graph API is the primary way for apps to read and write to Facebook's social graph (nodes like users, photos, pages, and edges like comments, tags, and friendships)."
          }
        ]
      },
      "psosm_week3": {
        "id": "psosm_week3",
        "title": "Week 03 : Assignment 03",
        "topic": "Privacy Attitudes, TweetCred, Likert Scale & NDCG",
        "questions": [
          {
            "id": 1,
            "question": "Consider the statement: 'To this segment, consumer privacy is very important; they feel that they have been victims of privacy invasions, they are pessimistic about the future of privacy protection, and about a third of them favour creating a general federal regulatory agency on consumer privacy.' To which of the three Westin Privacy categories does 'they' in the sentence most likely belong?",
            "options": [
              "Unconcerned",
              "Pragmatists",
              "Fundamentalists",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "According to Alan Westin's privacy segmentation, Privacy Fundamentalists have the highest concern for privacy, feel strongly victimized by privacy intrusions, and favor strict regulations."
          },
          {
            "id": 2,
            "question": "Which of the following feature categories are used by the credibility model TweetCred?",
            "options": [
              "Tweet network only",
              "Tweet links and Tweet metadata only",
              "All of the above (Tweet links, Tweet Author, Tweet network, Tweet metadata)",
              "Tweet Author only"
            ],
            "correctIndex": 2,
            "explanation": "TweetCred incorporates content-based features (links, text, sentiment), user/author features (verification, age, followers), network features (retweet graph), and tweet metadata."
          },
          {
            "id": 3,
            "question": "Cronbach’s alpha is used to:",
            "options": [
              "determine the statistical significance of a research study.",
              "analyze the effect size of an intervention.",
              "calculate the standard deviation of a sample population.",
              "assess the reliability and internal consistency of a questionnaire."
            ],
            "correctIndex": 3,
            "explanation": "Cronbach's alpha is a measure of internal consistency, evaluating how closely related a set of survey/scale items are as a group."
          },
          {
            "id": 4,
            "question": "Suppose we have five tweets (TW1, TW2, TW3, TW4, and TW5) with their relevances based on user feedback. What is NDCG@5 for this ranked list of tweets as calculated in lecture?",
            "options": [
              "0.513",
              "0.5",
              "0.975",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Normalized Discounted Cumulative Gain at rank 5 (NDCG@5) evaluates ranking quality; for the lecture dataset the calculated score is 0.975."
          },
          {
            "id": 5,
            "question": "How many participants have changed their default settings on their social network? (Based on the report 'Privacy in India: Attitudes and Awareness V 2.0')",
            "options": [
              "25%",
              "50%",
              "60%",
              "75%"
            ],
            "correctIndex": 1,
            "explanation": "In the study 'Privacy in India: Attitudes and Awareness V 2.0', exactly 50% of the surveyed participants reported changing their default privacy settings."
          },
          {
            "id": 6,
            "question": "What is the primary purpose of a Focus Group Discussion (FGD) in social media privacy studies?",
            "options": [
              "To collect quantitative data through surveys and questionnaires.",
              "To facilitate group discussions and gather qualitative insights.",
              "To conduct one-on-one interviews with participants.",
              "To observe participants' behaviours in a controlled environment."
            ],
            "correctIndex": 1,
            "explanation": "FGDs are a qualitative research method where guided group interactions uncover deep attitudes, perceptions, and nuanced reasoning."
          },
          {
            "id": 7,
            "question": "In response to 'When you hear the word privacy, what comes to mind?', which was the most common respondent answer according to the 'Privacy in India' report?",
            "options": [
              "Territorial privacy",
              "Bodily privacy",
              "Information Privacy",
              "Communication privacy"
            ],
            "correctIndex": 2,
            "explanation": "Information Privacy (protection of personal data, account credentials, and digital footprint) was the most frequent association with privacy."
          },
          {
            "id": 8,
            "question": "Consider the response-time distribution graph for the TweetCred system. Which of the following is the correct inference?",
            "options": [
              "For 99% of the users, the response time was less than 6 seconds, and for 100%, the response time was under 10 seconds.",
              "For 82% of the users, the response time was less than 6 seconds, and for 99%, the response time was under 10 seconds.",
              "For 82% of the users, the response time was less than 2 seconds, and for 99%, the response time was under 10 seconds.",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "Performance benchmarks for the real-time TweetCred scoring engine showed 82% of requests completed under 6s and 99% under 10s."
          },
          {
            "id": 9,
            "question": "What is a Likert scale?",
            "options": [
              "An algorithm that gives credibility scores for real-time tweets",
              "A statistical metric for inter-annotator agreement",
              "A rating scale commonly used in surveys and questionnaires to measure attitudes or opinions",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "A Likert scale is a psychometric scale where respondents specify their level of agreement to a statement typically ranging from Strongly Disagree to Strongly Agree."
          },
          {
            "id": 10,
            "question": "TweetCred is:",
            "options": [
              "a real-time app-based system to automatically assess the quality of content on Twitter.",
              "a real-time app-based system to automatically evaluate the score of tweets on Twitter.",
              "a real-time web-based system to automatically evaluate the credibility of content on Twitter.",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "TweetCred is a semi-supervised real-time web browser extension/system developed to evaluate the credibility of information on Twitter."
          }
        ]
      },
      "psosm_week4": {
        "id": "psosm_week4",
        "title": "Week 04 : Assignment 04",
        "topic": "k-Anonymity, Sweeney's Research & NumPy Operations",
        "questions": [
          {
            "id": 1,
            "question": "What is the critical challenge that Latanya Sweeney's research on k-anonymity addresses?",
            "options": [
              "Make datasets larger for analysis",
              "Eliminate all data from datasets",
              "Anonymise data without losing utility",
              "Ignore research utility for better privacy"
            ],
            "correctIndex": 2,
            "explanation": "Latanya Sweeney's work formulated k-anonymity to address the fundamental trade-off: protecting individual privacy against re-identification while preserving analytic data utility."
          },
          {
            "id": 2,
            "question": "Which Python data structure can significantly enhance the efficiency and simplicity of numerical calculations?",
            "options": [
              "Python variables",
              "Python numpy array",
              "Python numpy list",
              "None of these"
            ],
            "correctIndex": 1,
            "explanation": "NumPy arrays (ndarray) provide vectorized contiguous memory operations that are substantially faster and more memory-efficient than standard Python lists."
          },
          {
            "id": 3,
            "question": "Fill in the correct function calculate_total_sales(sales_list) which calculates total sales using NumPy:",
            "options": [
              "sales_array = np.list(sales_list)\ntotal_sales = np.sum(sales_array)",
              "sales_array = np.array(sales_list)\ntotal_sales = sales_array.total()",
              "sales_array = np.array(sales_list)\ntotal_sales = np.sum(sales_array)",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "In NumPy, 'np.array(sales_list)' converts a list to an array, and 'np.sum(sales_array)' calculates the sum."
          },
          {
            "id": 4,
            "question": "Fill in the correct function calculate_maximum_sales(sales_list) which calculates maximum sales using NumPy:",
            "options": [
              "sales_array = np.list(sales_list)\nmax_sales = np.max(sales_array)",
              "sales_array = np.array(sales_list)\nmax_sales = sales_array.maximum()",
              "sales_array = np.array(sales_list)\nmax_sales = np.max(sales_array)",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "'np.max(sales_array)' computes the maximum element along the array."
          },
          {
            "id": 5,
            "question": "Given expenses_array with 12 monthly expenses (Jan=0 to Dec=11), how would you extract expenses for the second half of the year (July to December)?",
            "options": [
              "second_half_expenses = expenses_array[7:]",
              "second_half_expenses = expenses_array[5:]",
              "second_half_expenses = expenses_array[6:]",
              "second_half_expenses = expenses_array[:12]"
            ],
            "correctIndex": 2,
            "explanation": "Python arrays are 0-indexed. Months 0-5 are Jan-June (first half); index 6 to the end corresponds to July-December (second half)."
          },
          {
            "id": 6,
            "question": "Identify the 1-indexed months where expenses exceeded $1600 in expenses_array:",
            "options": [
              "high_expense_months = np.where(expenses_array > 1600))",
              "high_expense_months = np.where(expenses_array > 1600)[0] + 1",
              "high_expense_months = np.where(expenses_array < 1600)[0]",
              "high_expense_months = np.where(expenses_array > 1600)[0]"
            ],
            "correctIndex": 1,
            "explanation": "np.where returns 0-based indices. Adding +1 converts them to human 1-indexed months (1 = Jan, 12 = Dec)."
          },
          {
            "id": 7,
            "question": "Calculate the average expenses for the first quarter of the year (months 1-3):",
            "options": [
              "first_quarter_average = np.mean(expenses_array[:6])",
              "first_quarter_average = np.mean(expenses_array[:3])",
              "first_quarter_average = np.mean(expenses_array[:2])",
              "first_quarter_average = np.mean(expenses_array[:4])"
            ],
            "correctIndex": 1,
            "explanation": "The first quarter comprises indices 0, 1, 2 (Jan, Feb, Mar). Slice 'expenses_array[:3]' captures these three elements."
          },
          {
            "id": 8,
            "question": "Choose the correct option for 'result' in the Pandas groupby aggregation assignment question:",
            "options": [
              "Option 2 with missing reset_index",
              "None of the above",
              "Option 1 with incorrect column names",
              "Option 3 with incorrect syntax"
            ],
            "correctIndex": 1,
            "explanation": "None of the provided options correctly matched the exact DataFrame output structure in the lecture assignment."
          },
          {
            "id": 9,
            "question": "What is the primary goal of k-anonymity in data privacy?",
            "options": [
              "Ensure that every attribute in the dataset is unique.",
              "Making it difficult to link specific individuals to their records in a released dataset.",
              "Minimize the amount of data collected.",
              "Prevent unauthorised access to the dataset."
            ],
            "correctIndex": 1,
            "explanation": "k-Anonymity guarantees that each record is indistinguishable from at least k-1 other records with respect to quasi-identifiers."
          },
          {
            "id": 10,
            "question": "What will be the output of the standard Matplotlib sine code: x = np.linspace(0, 2*np.pi, 100); y = np.sin(x); plt.plot(x, y); plt.show()?",
            "options": [
              "Logical error in code",
              "A plot consisting of cosine wave",
              "A plot consisting of sine wave",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Evaluating y = np.sin(x) over [0, 2π] creates and plots a standard continuous sine waveform."
          }
        ]
      },
      "psosm_week5": {
        "id": "psosm_week5",
        "title": "Week 05 : Assignment 05",
        "topic": "Police-Public OSN Communication, LIWC & Sentiment Analysis",
        "questions": [
          {
            "id": 1,
            "question": "How do Online Social Networks improve public communication between police and residents?",
            "options": [
              "Understand fear and victimisation effects only",
              "Provide actionable information and collective action only",
              "Provide mutual accountability only",
              "All of the above (actionable info, mutual accountability, understanding fear/victimization, contacting authorities)"
            ],
            "correctIndex": 3,
            "explanation": "OSNs provide real-time incident reporting, direct accountability, channels for residents to voice safety concerns, and rapid two-way communication."
          },
          {
            "id": 2,
            "question": "Which of the following are examples of actionable information shared on social media?",
            "options": [
              "OSN post sharing about Azaadi ka Amrit Mahotsav celebrations in the locality",
              "OSN post regarding traffic issues on the road only",
              "Both OSN post regarding traffic issues and open potholes on the road",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Actionable information allows authorities or residents to take concrete remedial steps (e.g., rerouting traffic, filling dangerous potholes)."
          },
          {
            "id": 3,
            "question": "When a citizen post contains exact geographical coordinates or location names (e.g. 'MG Road near junction 4'), what type of actionable information is highlighted?",
            "options": [
              "Linguistic data",
              "Temporal data",
              "Spatial data",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Geographic coordinates, addresses, and street locations constitute spatial data."
          },
          {
            "id": 4,
            "question": "In public authority and citizen communication on OSNs, what two primary styles of communication were identified and compared in lectures?",
            "options": [
              "Informal and Informal",
              "Official and Classified",
              "Formal and Formal",
              "Formal and Informal"
            ],
            "correctIndex": 3,
            "explanation": "The lecture contrasted formal (structured, authoritative press-release tone) and informal (conversational, empathetic, colloquial citizen-facing) communication."
          },
          {
            "id": 5,
            "question": "Which text analysis tool is widely used to identify emotional, cognitive, and psychological states based on written text?",
            "options": [
              "N-gram analysis",
              "K-means clustering",
              "LIWC (Linguistic Inquiry and Word Count)",
              "All of the above"
            ],
            "correctIndex": 2,
            "explanation": "LIWC (Linguistic Inquiry and Word Count) is a specialized psycholinguistic lexicon tool that maps words to psychological categories and emotional states."
          },
          {
            "id": 6,
            "question": "Consider the sentence: 'ISRO launched Chandrayaan and conducted experiments on thermophysical properties and environment'. What is the thematic content and subject matter being discussed?",
            "options": [
              "The grammatical structure of the sentence.",
              "The linguistic diversity of the sentence.",
              "The activities and research conducted by ISRO.",
              "The emotional tone is conveyed in the sentence."
            ],
            "correctIndex": 2,
            "explanation": "Thematic analysis extracts the core subject matter of the text: ISRO's scientific missions and lunar experiments."
          },
          {
            "id": 7,
            "question": "What does 'n' represent in the n-gram analysis of a sentence?",
            "options": [
              "The number of characters in each n-gram",
              "The number of words in each n-gram sequence",
              "The number of different languages in the sentence",
              "The number of emotions in the analysis"
            ],
            "correctIndex": 1,
            "explanation": "In n-gram computational linguistics, 'n' refers to the number of contiguous tokens or words (e.g., 1=unigram, 2=bigram, 3=trigram)."
          },
          {
            "id": 8,
            "question": "A sentiment analysis study analyses a text passage for valence and arousal values on a scale of -1 to 1. The valence score is 0.75 and arousal score is 0.85. What do these values suggest about the emotional characteristics?",
            "options": [
              "Positive sentiment, low emotional intensity",
              "Positive sentiment, high emotional intensity",
              "Negative sentiment, low emotional intensity",
              "Negative sentiment, high emotional intensity"
            ],
            "correctIndex": 1,
            "explanation": "In the circumplex model of affect, positive valence (> 0) indicates pleasantness/positive sentiment, and high arousal (> 0.5) indicates high energy or emotional intensity."
          },
          {
            "id": 9,
            "question": "A social media analyst evaluates engagement metrics (likes, comments, shares) across three posts. Which post shows the highest variability in engagement characteristics?",
            "options": [
              "Post 2",
              "Post 1",
              "All posts show similar variability.",
              "Post 3"
            ],
            "correctIndex": 1,
            "explanation": "Post 1 exhibits the highest standard deviation / variance across its engagement metrics, indicating greatest variability."
          },
          {
            "id": 10,
            "question": "What kind of post and sentiment is depicted in: 'Absolutely disgusted by the state of our local park! It's been months since we reported the broken playground equipment, and nothing has been done. Our kids deserve better!'?",
            "options": [
              "Citizen-initiated and positive",
              "Public authority-initiated and positive",
              "Citizen-initiated and negative",
              "Public authority-initiated and negative"
            ],
            "correctIndex": 2,
            "explanation": "The complaint originates from a local resident (citizen-initiated) and conveys anger/frustration ('disgusted', 'broken') which is strongly negative sentiment."
          }
        ]
      },
      "psosm_week6": {
        "id": "psosm_week6",
        "title": "Week 06 : Assignment 06",
        "topic": "Centrality Measures, Link Farming & Spam Detection",
        "questions": [
          {
            "id": 1,
            "question": "Consider a symmetric diamond or ring social network scenario for nodes A, B, C, and D. Which individual has the highest betweenness centrality?",
            "options": [
              "A",
              "C",
              "All of them have the same betweenness centrality",
              "B"
            ],
            "correctIndex": 2,
            "explanation": "In fully symmetric networks where each node bridges an identical proportion of shortest paths, betweenness centrality scores are equal across nodes."
          },
          {
            "id": 2,
            "question": "What does indegree centrality measure in social media and network analysis?",
            "options": [
              "The number of outgoing connections a user has with other users.",
              "A user's popularity based on their followers or incoming connections.",
              "The diversity of content shared by a user.",
              "The level of activity a user has on the platform."
            ],
            "correctIndex": 1,
            "explanation": "In directed graphs (like Twitter), in-degree corresponds to directed edges pointing to the node (followers), measuring prominence and popularity."
          },
          {
            "id": 3,
            "question": "What does betweenness centrality depict about a node in a network?",
            "options": [
              "Who is close to everyone in terms of average geodesic distance",
              "One who acts as a critical bridge and is quickly approachable along shortest paths",
              "One who is purely most influential by raw follower count",
              "All of the above"
            ],
            "correctIndex": 1,
            "explanation": "Betweenness centrality measures how often a node lies on the shortest path between other pairs of nodes, acting as a broker or gateway."
          },
          {
            "id": 4,
            "question": "What is link farming on online platforms?",
            "options": [
              "A strategy for developing social connections by attending networking events.",
              "Agricultural practice that involves cultivating crops in a vertical arrangement.",
              "Rapidly growing links on a website through unethical or manipulative means.",
              "All of the above"
            ],
            "correctIndex": 2,
            "explanation": "Link farming refers to creating dense networks of mutual backlinks or mutual following collusion to artificially manipulate search engine rankings or network influence."
          },
          {
            "id": 5,
            "question": "Spamming the index of search engines through manipulative link farms and keyword stuffing is called:",
            "options": [
              "Phishing",
              "Clickjacking",
              "Spamdexing (also known as Spamexing)",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Spamdexing (search engine spamming / indexing spam) involves techniques like hidden text, scraper sites, and link farms to deceive search engine indexers."
          },
          {
            "id": 6,
            "question": "Which of the following is the best example of a clickbait headline?",
            "options": [
              "Annual Financial Report 2026",
              "Python Programming Notes",
              "You Won't Believe What Happened Next! Click Here to Claim Your Prize!",
              "Meeting Agenda for Today"
            ],
            "correctIndex": 2,
            "explanation": "Clickbait headlines use sensationalized curiosity gaps ('You Won't Believe...') and exaggerated emotional appeals to lure clicks."
          },
          {
            "id": 7,
            "question": "Which of the following is considered as 'social etiquette' on online social networks such as Twitter?",
            "options": [
              "Saying 'Thank you' to any appreciation by an influential person",
              "Comment on the post of an influential person",
              "Giving likes to the post of an influential person",
              "Following back"
            ],
            "correctIndex": 3,
            "explanation": "'Follow back' (reciprocal following) is a common social etiquette convention exploited by link farmers."
          },
          {
            "id": 8,
            "question": "A psychological principle where individuals feel compelled to return favours and interactions they receive is called:",
            "options": [
              "Spamming",
              "Link farming",
              "Reciprocity",
              "All of the above"
            ],
            "correctIndex": 2,
            "explanation": "Reciprocity is the social norm where responding positively to actions (such as follow-for-follow) is perceived as an obligation."
          },
          {
            "id": 9,
            "question": "Which of the following is/are graph centrality measures?",
            "options": [
              "Node degree only",
              "All of the above (Eigen centrality, Node degree, Betweenness centrality, Closeness centrality)",
              "Closeness centrality only",
              "Betweenness centrality only"
            ],
            "correctIndex": 1,
            "explanation": "Standard graph centrality metrics include degree centrality, eigenvector centrality, closeness centrality, and betweenness centrality."
          },
          {
            "id": 10,
            "question": "In the lecture graph model on spam topology (containing target nodes, link farm nodes, and spammers), which nodes are spam targets?",
            "options": [
              "A only",
              "B only",
              "Both A and B",
              "Node S"
            ],
            "correctIndex": 2,
            "explanation": "In the studied architecture, nodes A and B serve as target nodes receiving artificially inflated links from the spam collusion farm."
          }
        ]
      },
      "psosm_week7": {
        "id": "psosm_week7",
        "title": "Week 07 : Assignment 07",
        "topic": "Text Preprocessing, Phishing, Nudges & User Vulnerabilities",
        "questions": [
          {
            "id": 1,
            "question": "Consider the statement: 'Hello everyone!!!, Are you enjoying psosm course --- and learning new skills.' Choose the correct code to convert it to an unpunctuated string:",
            "options": [
              "no_punct = my_str.split(punctuations)",
              "no_punct = \"\"\nfor char in my_str:\n    if char in punctuations:\n        no_punct = no_punct + char",
              "no_punct = \"\"\nfor char in my_str:\n    if char not in punctuations:\n        no_punct = no_punct + char",
              "None of these"
            ],
            "correctIndex": 2,
            "explanation": "Iterating through characters and appending only those that are not in the string.punctuation set produces an unpunctuated string."
          },
          {
            "id": 2,
            "question": "Consider a Python code sorting dictionary items with sorted(d.items(), key=lambda x: x[1], reverse=True). What is the output?",
            "options": [
              "This code is used to retrieve an ascending sorted list having two tuples.",
              "This code retrieves two tuples in a sorted or unsorted manner.",
              "This code is used to retrieve a descending sorted list having two tuples.",
              "This code returns a logical error."
            ],
            "correctIndex": 2,
            "explanation": "'reverse=True' sorts elements in descending order based on their value (x[1])."
          },
          {
            "id": 3,
            "question": "Which of the following is NOT a stopword in English NLP?",
            "options": [
              "again",
              "further",
              "while",
              "apple"
            ],
            "correctIndex": 3,
            "explanation": "'apple' is a concrete noun carrying high semantic weight, not a functional stopword like 'while', 'further', or 'again'."
          },
          {
            "id": 4,
            "question": "Which elements in a sample phishing email make it potentially dangerous, as discussed in the lecture?",
            "options": [
              "Urgency in subject only",
              "Regrettable information in the body only",
              "Potential phishing link along with body only",
              "All of the above (urgency in subject, regrettable/fear-inducing body, suspicious link)"
            ],
            "correctIndex": 3,
            "explanation": "Phishing emails exploit psychological triggers like urgency ('Account suspended in 24 hours!'), fear, and deceptive hyperlinks."
          },
          {
            "id": 5,
            "question": "Which of the following statements was observed regarding age and phishing vulnerability in the lecture study?",
            "options": [
              "Younger and older participants were equally vulnerable to phishing attacks.",
              "Younger participants were more vulnerable to phishing attacks.",
              "Older participants were more vulnerable to phishing attacks.",
              "No one is vulnerable to phishing attacks."
            ],
            "correctIndex": 2,
            "explanation": "Empirical findings showed older demographics were significantly more susceptible to deceptive phishing cues."
          },
          {
            "id": 6,
            "question": "In a scientific experiment, which group refers to manipulating the independent variable?",
            "options": [
              "Control group",
              "Comparison group",
              "Observational group",
              "Experimental group"
            ],
            "correctIndex": 3,
            "explanation": "The experimental group receives the treatment or manipulation of the independent variable, whereas the control group does not."
          },
          {
            "id": 7,
            "question": "Which of the following is/are advantages of having well-designed privacy policies and privacy nudges?",
            "options": [
              "To help individuals avoid regrettable online disclosures only",
              "To help users make informed decisions with the information presented to them only",
              "Both to help users make informed decisions and avoid regrettable online disclosures",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Effective privacy interfaces empower informed consent and introduce friction to curb impulsive, regrettable disclosures."
          },
          {
            "id": 8,
            "question": "A social media disclosure interface shows profile pictures of audience members before publishing. Which nudge is this?",
            "options": [
              "Sentiment nudge",
              "Picture nudge",
              "Voice nudge",
              "Timer nudge"
            ],
            "correctIndex": 1,
            "explanation": "A picture nudge presents visual avatars/photos of the intended audience to make social presence salient."
          },
          {
            "id": 9,
            "question": "As discussed in the lecture, which of the following is NOT an established social media privacy nudge?",
            "options": [
              "Sentiment Nudge",
              "Picture Nudge",
              "Timer Nudge",
              "Voice Nudge"
            ],
            "correctIndex": 3,
            "explanation": "Wang et al. proposed Timer, Picture, and Sentiment nudges; 'Voice Nudge' was not one of the studied nudges."
          },
          {
            "id": 10,
            "question": "Which of the following network participants has the property of having both very high indegree and very high outdegree on online social media?",
            "options": [
              "Random social network users",
              "Passive lurkers",
              "Top Link farmers",
              "Top Spammers"
            ],
            "correctIndex": 2,
            "explanation": "Link farmers aggressively follow thousands of accounts (high out-degree) and accumulate reciprocal follow-backs (high in-degree)."
          }
        ]
      },
      "psosm_week8": {
        "id": "psosm_week8",
        "title": "Week 08 : Assignment 08",
        "topic": "Profile Linking, Anonymity, Whisper & Scale-Free Networks",
        "questions": [
          {
            "id": 1,
            "question": "What are the common approaches to cross-platform profile linking?",
            "options": [
              "Study and analyse common attributes (workplace, profile picture, name) only",
              "All of the above (analyzing common attributes like profile photo, name, and checking identifiers like email and location)",
              "Check important identifiers such as same emails and phone numbers only",
              "Only looking at posting time behavior"
            ],
            "correctIndex": 1,
            "explanation": "Profile linking combines syntactic name matching, biometric/image embeddings of profile photos, behavioral patterns, and shared contact identifiers."
          },
          {
            "id": 2,
            "question": "Which statements are true regarding username change behavior on social media platforms?",
            "options": [
              "S1, S2, and S4 are correct",
              "Only S1 and S4 are correct",
              "Only S1, S2, and S3 are correct",
              "All S1, S2, S3, S4 are correct."
            ],
            "correctIndex": 3,
            "explanation": "All four lecture statements regarding username volatility, tracking hurdles, temporal evolution, and identity consistency were demonstrated to be true."
          },
          {
            "id": 3,
            "question": "In the username change empirical graph presented in the lecture, which inference is correct?",
            "options": [
              "Around 35 percent of the users change their profile picture exactly 3 times.",
              "Around 50-55 per cent of users have changed their descriptions thrice.",
              "Around 35 per cent of the users change their profile picture at least 3 times.",
              "Around 60-70 percent of the users change their usernames at least once."
            ],
            "correctIndex": 2,
            "explanation": "The cumulative distribution shows roughly 35% of observed users updated their profile image 3 or more times."
          },
          {
            "id": 4,
            "question": "Why do Whisper (anonymous social app) users have a very low clustering coefficient across their interaction network?",
            "options": [
              "Users interact with a large sample of close friends",
              "Whisper users are likely to interact with complete strangers who are highly unlikely to interact with each other.",
              "New users make 20% of the contribution in the whisper content.",
              "All of the above"
            ],
            "correctIndex": 1,
            "explanation": "Low clustering means your neighbors are not connected to each other; Whisper connects transient strangers without persistent social circles."
          },
          {
            "id": 5,
            "question": "What is the primary purpose of Gephi software?",
            "options": [
              "3D Modeling",
              "Music Composition",
              "Video Editing",
              "Network Visualization and Analysis"
            ],
            "correctIndex": 3,
            "explanation": "Gephi is the premier open-source visualization and exploration software for graphs, complex systems, and social network analysis."
          },
          {
            "id": 6,
            "question": "Why is studying username change behavior useful for social media researchers?",
            "options": [
              "The number of characters and length of the username is restricted only",
              "This is one of the unique attributes of the user only",
              "All of the above (unique identifier, length restrictions, public visibility, tracking persistence)",
              "It is a publicly available attribute only"
            ],
            "correctIndex": 2,
            "explanation": "Usernames are public, unique within a namespace, structured, and crucial for studying handle squatting, identity persistence, and re-identification."
          },
          {
            "id": 7,
            "question": "In the directed network graph of Twitter, where nodes represent users, what does the in-degree of a node correspond to?",
            "options": [
              "Both followers and following",
              "Number of followers on Twitter",
              "Number of people you follow (following)",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "An incoming directed edge represents a follower pointing to the followed account."
          },
          {
            "id": 8,
            "question": "Which of the following platforms are recognized examples of anonymous or pseudonymous social networks?",
            "options": [
              "Secret and 4chan only",
              "LinkedIn and Facebook",
              "Yik Yak and Blind only",
              "All of the above (Secret, 4chan, Yik Yak, Blind)"
            ],
            "correctIndex": 3,
            "explanation": "Secret, 4chan, Yik Yak, and Blind all enable anonymous/pseudonymous posting without public personal identity linkage."
          },
          {
            "id": 9,
            "question": "A scale-free network is characterized by having:",
            "options": [
              "Power law degree distribution only",
              "Pareto principle only",
              "Zipf’s law only",
              "All of the above (Power law degree distribution, Zipf’s law, Pareto principle)"
            ],
            "correctIndex": 3,
            "explanation": "Scale-free networks follow heavy-tailed power-law distributions (P(k) ~ k^(-γ)), intimately tied to Zipf's law and Pareto's 80/20 rule."
          },
          {
            "id": 10,
            "question": "In the classmate friend count survey, the class average friend count was much higher than most individuals' actual count. Why did this occur?",
            "options": [
              "There is an error in individual calculations. It is impossible to have 300 friends on average if many have fewer.",
              "Most of the individuals have reported it wrong in the report.",
              "Few individuals have exceptionally high friend counts (outliers) that skew the average upward.",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "This is the 'Friendship Paradox' caused by heavy-tailed degree distributions where a few massive hubs (super-popular users) drastically pull up the mean."
          }
        ]
      },
      "psosm_week9": {
        "id": "psosm_week9",
        "title": "Week 09 : Assignment 09",
        "topic": "LBSNs, Correlation Metrics, Foursquare & Spatial Mobility",
        "questions": [
          {
            "id": 1,
            "question": "Which of the following are recognized Location-Based Services (LBS) / Location-Based Social Networks?",
            "options": [
              "Uber only",
              "Yelp only",
              "Foursquare and Gowalla only",
              "All of the above (Foursquare, Yelp, Gowalla, Uber)"
            ],
            "correctIndex": 3,
            "explanation": "Foursquare, Yelp, Gowalla, and Uber all rely fundamentally on geographic positioning (GPS) to provide core location-centric functionality."
          },
          {
            "id": 2,
            "question": "What is the fundamental difference between Pearson and Spearman rank correlation?",
            "options": [
              "Spearman correlation is always between -1 and 1, while Pearson correlation can have values outside this range.",
              "Pearson correlation assesses linear relationships, while Spearman correlation evaluates monotonic relationships.",
              "Spearman correlation is calculated using a formula involving the sum of squared differences, whereas Pearson correlation is based on the product of z-scores.",
              "All of the above"
            ],
            "correctIndex": 1,
            "explanation": "Pearson assumes normally distributed continuous linear data; Spearman ranks the observations to capture monotonic non-linear relationships."
          },
          {
            "id": 3,
            "question": "You have two datasets to correlate where one consists of ordinal ranks and the other continuous numerical values. Which correlation coefficient is most appropriate?",
            "options": [
              "Either Spearman or Pearson correlation can be used interchangeably.",
              "Pearson's correlation coefficient",
              "Spearman's rank correlation coefficient",
              "None of the above because correlation coefficients are not applicable in this scenario."
            ],
            "correctIndex": 2,
            "explanation": "When data includes ordinal ranks or violates bivariate normality, Spearman's rank correlation is the method of choice."
          },
          {
            "id": 4,
            "question": "Which of the following are open text fields in location networks whose validity is not enforced by the system and may contain noise/unreliable locations?",
            "options": [
              "Tips",
              "Both Venue location and User home city",
              "Dones",
              "Venue location only"
            ],
            "correctIndex": 1,
            "explanation": "Free-form text input fields like venue name/address and user profile home city lack strict validation and frequently contain whimsical or noisy text."
          },
          {
            "id": 5,
            "question": "Which of the following is the correct inference from Figure 2 in the LBSN spatial distribution paper?",
            "options": [
              "The distributions are normally distributed, with no cities having an exceptionally high number of mayorships, tips, or dones.",
              "The distributions are evenly balanced, with cities having a nearly equal number of mayorships, tips, or dones.",
              "The distributions are very skewed, with a few cities having as many as 100 mayorships, tips or dones.",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Activity on LBSNs exhibits heavy spatial clustering, where top metropolitan hubs dominate check-in actions."
          },
          {
            "id": 6,
            "question": "What is the key difference between a scatter plot and a bar chart?",
            "options": [
              "Scatter plots display categorical data, while bar charts are used for numerical data.",
              "Scatter plots show the relationship between two numerical variables, while bar charts display the frequency or distribution of categorical data.",
              "Scatter plots are only used for displaying data with a single variable, while bar charts can visualize data with multiple variables.",
              "All of the above"
            ],
            "correctIndex": 1,
            "explanation": "Scatter plots map Cartesian coordinates (X, Y) for continuous variables, whereas bar charts compare discrete categorical groups."
          },
          {
            "id": 7,
            "question": "Which of the following data categories are publicly visible and scrapable on Foursquare?",
            "options": [
              "User direct messages",
              "User payment details",
              "Checkins (private by default)",
              "Mayorships, Tips, and Dones"
            ],
            "correctIndex": 3,
            "explanation": "Foursquare check-ins are private to friends, but mayorship badges, public tips, and completed 'dones' are exposed on public profile feeds."
          },
          {
            "id": 8,
            "question": "Which visualization plot displays data points with a third continuous dimension encoded as marker circle size?",
            "options": [
              "Histogram",
              "Scatter plot",
              "Bubble plot",
              "Bar chart"
            ],
            "correctIndex": 2,
            "explanation": "A bubble plot extends a 2D scatter plot by varying the area/radius of the circles to represent a 3rd quantitative variable."
          },
          {
            "id": 9,
            "question": "What is the primary defining characteristic of Location-Based Social Networks (LBSNs)?",
            "options": [
              "They provide a platform for online gaming and virtual reality experiences.",
              "They enable users to connect with others and share their physical locations and activities.",
              "They focus exclusively on professional networking and job searching.",
              "They allow users to share text-based posts with their friends and followers only."
            ],
            "correctIndex": 1,
            "explanation": "LBSNs add geospatial coordinates and physical check-ins as the foundational context for social connections."
          },
          {
            "id": 10,
            "question": "In the lecture study on user mobility patterns (Figures 4 & 5), which inferences are correct regarding inter-activity time and displacement?",
            "options": [
              "50% consecutive actions 1 hour apart only",
              "All of the above (skewed towards short 1hr intervals, long tail max intervals > 167hrs, ~36% with 0km displacement, ~10% > 6000km)",
              "Roughly 36% have average displacement of 0 km only",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "The empirical mobility distributions proved that local bursts happen within hours at same venue (0 km), while occasional air travel creates long tail displacements (>6,000 km)."
          }
        ]
      },
      "psosm_week10": {
        "id": "psosm_week10",
        "title": "Week 10 : Assignment 10",
        "topic": "Location Inference, Handle Changes & Boston Marathon Blasts",
        "questions": [
          {
            "id": 1,
            "question": "Which statement(s) is/are true regarding the large-scale location inference study presented in the lecture?",
            "options": [
              "The authors perform a large-scale inference study in three popular social networks: Foursquare, Google+ and Twitter only",
              "All of the above (covers Foursquare, Google+, and Twitter across open text fields and map pins)",
              "The paper looks at different social networks not only Foursquare",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "The comparative study benchmarked user-provided geographical information across Foursquare, Google+, and Twitter."
          },
          {
            "id": 2,
            "question": "What does the acronym AGI stand for in the context of ambiguous user locations?",
            "options": [
              "Valid Artificial General Intelligence",
              "Valid Ambiguous Geographical Information",
              "Valid Artificial Geographical Interface",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "AGI stands for Ambiguous Geographical Information (e.g. 'Springfield' which could refer to dozens of distinct cities)."
          },
          {
            "id": 3,
            "question": "In the figure depicting the quality of User Generated Location Information (UGI), which inference is correct?",
            "options": [
              "60% of the users have provided their location information at the district level",
              "In both figure (a) and (b), roughly 80% of users provide location information at the city level.",
              "Majority of users provide home location information at country level only",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "The analysis proved that city-level granularity constitutes approximately 80% of valid user-specified geospatial text."
          },
          {
            "id": 4,
            "question": "What was the conclusion regarding handle change frequency on Twitter?",
            "options": [
              "The set of people who change their handle many times is roughly equal to the set of people who do not change their handle.",
              "The set of people who change their handle many times is slightly larger than those who change their handle a very small number of times.",
              "The set of people who change their handle many times is slightly smaller than the set of people who change their handle very few times.",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Most users maintain a stable handle or change it only once, while serial handle-changers form a smaller minority."
          },
          {
            "id": 5,
            "question": "Regarding username change intervals on Twitter, which of the following is the correct inference?",
            "options": [
              "35% of users choose a user name unrelated to an old one, and 65% of users reuse an old user name.",
              "20% of users frequently change user names in short intervals, and 80% change user name rarely after longer intervals.",
              "20% of users rarely change user names in short intervals and 80% change user names frequently after longer intervals.",
              "80% of users rarely change user names in short intervals, and 20% change user names frequently after longer intervals."
            ],
            "correctIndex": 1,
            "explanation": "The 80/20 Pareto principle applied: 80% exhibited long stable intervals between changes, while 20% rapidly switched usernames."
          },
          {
            "id": 6,
            "question": "What observations were made in the Twitter username evolution research paper?",
            "options": [
              "Most users created new usernames unrelated to old usernames only",
              "The paper aimed at finding how and why users change usernames on Twitter only",
              "All of the above (investigated reasons for handle changes, noticed new unrelated names, absence of cognitive load to recall discarded handles)",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "Users frequently rebranded to unrelated handles because discarding old identities incurs zero cognitive overhead."
          },
          {
            "id": 7,
            "question": "Which of the following statements is historically accurate regarding the Boston Marathon blasts analyzed in the lecture?",
            "options": [
              "Four people were killed and 264 were injured in the incident",
              "Twin blasts occurred during the Boston Marathon on April 15th, 2009 at 18:50 GMT",
              "Twin blasts occurred during the Boston Marathon on April 15th, 2013 at 18:50 GMT",
              "All of the above"
            ],
            "correctIndex": 2,
            "explanation": "The Boston Marathon bombings occurred on April 15, 2013 (18:50 GMT / 2:49 PM EDT)."
          },
          {
            "id": 8,
            "question": "During the Boston Marathon crisis, what fake content viral patterns were identified on Twitter?",
            "options": [
              "Figure (b) depicts a rumor about a young girl running for Sandy Hook victims",
              "All of the above (fake charity profiles, fabricated rumors about victim children, and viral retweet propagation)",
              "Figure (a) depicts a tweet from a fake charity profile soliciting donations",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "Malicious actors created fake donation accounts (@hopeforboston) and viral emotionally manipulative rumors that misled millions."
          },
          {
            "id": 9,
            "question": "What were the major research contributions in characterizing fake content during the Boston Marathon bombings?",
            "options": [
              "Analyzed suspended user profile interaction graphs only",
              "Used regression to predict rumor virality only",
              "All of the above (characterized fake spread via temporal/user attributes, predicted virality using regression, analyzed suspended profile interaction graphs)",
              "Characterized spread using temporal and user attributes only"
            ],
            "correctIndex": 2,
            "explanation": "Gupta et al. comprehensively modeled rumor kinetics, predictive virality features, and suspended spam bot clusters."
          },
          {
            "id": 10,
            "question": "What does the temporal tweet distribution figure around the Boston blast depict?",
            "options": [
              "The figure shows sentiment polarities over a multi-year period.",
              "The figure shows the spatial distribution of tweets after the Boston blast.",
              "The figure shows the temporal distribution of tweets and rumors immediately following the Boston blasts.",
              "None of the above"
            ],
            "correctIndex": 2,
            "explanation": "The plot tracks tweet volume surges minute-by-minute following the explosions, peaking within the first 2 hours."
          }
        ]
      },
      "psosm_week11": {
        "id": "psosm_week11",
        "title": "Week 11 : Assignment 11",
        "topic": "APIs, Reidentification, SEO Link Farming & Virality",
        "questions": [
          {
            "id": 1,
            "question": "State True or False: 'An API is a set of rules and protocols that allows different software applications to communicate with each other, while a programming language is a formal language used to write instructions for a computer to perform specific tasks.'",
            "options": [
              "Can't say",
              "True",
              "False",
              "None of the above"
            ],
            "correctIndex": 1,
            "explanation": "An API acts as an interface/contract enabling disparate software systems to interact, whereas programming languages are syntactical tools for writing executable logic."
          },
          {
            "id": 2,
            "question": "Which of the following linguistic features are part of tweet content analysis?",
            "options": [
              "Mention of self words only",
              "Number of followers and retweets",
              "Presence of pronouns only",
              "Both Presence of pronouns and Mention of self words (I; my; mine)"
            ],
            "correctIndex": 3,
            "explanation": "Content linguistic features reflect internal vocabulary, such as personal pronouns (we, they) and first-person singular self-referential words (I, my, mine)."
          },
          {
            "id": 3,
            "question": "Who among the following are most likely to be targeted or participate in link farming rings on social media?",
            "options": [
              "Popular users only",
              "Highly active users only",
              "All of the above (Highly active users, Legitimate users, Popular users, Bloggers and experts)",
              "Bloggers and experts only"
            ],
            "correctIndex": 2,
            "explanation": "Link farmers bait a broad spectrum: highly active users, unsuspecting legitimate users via reciprocity, high-reputation hubs, and bloggers."
          },
          {
            "id": 4,
            "question": "Which of the following is/are recognized username creation behaviors?",
            "options": [
              "Temporal behavior patterns only",
              "Static behavior patterns only",
              "Occasional reuse patterns only",
              "Both Static and Temporal behavior patterns"
            ],
            "correctIndex": 3,
            "explanation": "Username creation encompasses static patterns (fixed prefixes, initials) and temporal patterns (evolving names reflecting milestones or current years)."
          },
          {
            "id": 5,
            "question": "Which of the following is/are recognized username reuse behaviors across platforms?",
            "options": [
              "Frequent reuse patterns only",
              "Static behavior patterns only",
              "Both Occasional and Frequent reuse patterns",
              "Occasional reuse patterns only"
            ],
            "correctIndex": 2,
            "explanation": "Users exhibit distinct reuse distributions: some rarely/occasionally reuse handles, while power users frequently reuse identical pseudonyms across apps."
          },
          {
            "id": 6,
            "question": "Why is the Facebook / Meta developer interface called a 'Graph' API?",
            "options": [
              "It allows developers to draw and render 2D/3D graphs and charts.",
              "It is used exclusively for graph theory and discrete mathematics calculations.",
              "It represents social connections, entities, and relationships as a graph data structure of nodes and edges.",
              "It primarily deals with geographical mapping and location-based services."
            ],
            "correctIndex": 2,
            "explanation": "The Facebook Graph API models the social world as a mathematical graph where objects (people, photos, events) are nodes and connections (friends, likes, tags) are edges."
          },
          {
            "id": 7,
            "question": "Latanya Sweeney's research famously showed how combining 3 quasi-identifiers (5-digit ZIP code, gender, and date of birth) could uniquely identify 87% of the US population. Which term describes this concept?",
            "options": [
              "Data Aggregation",
              "Reidentification",
              "Data Anonymization",
              "All of the above"
            ],
            "correctIndex": 1,
            "explanation": "Re-identification is the process of matching anonymized records with auxiliary external datasets (such as voter registries) to reveal individuals' true identities."
          },
          {
            "id": 8,
            "question": "What is the primary purpose of an API key when interacting with Twitter / X?",
            "options": [
              "To limit the number of characters in a tweet",
              "To verify personal photo identity on the platform",
              "To encrypt and secure end-to-end direct messages",
              "To authenticate developer credentials and control authorized access to APIs"
            ],
            "correctIndex": 3,
            "explanation": "API keys and bearer tokens authenticate the requesting application and enforce rate limits and permissions."
          },
          {
            "id": 9,
            "question": "What is the primary purpose of link farming in the context of Search Engine Optimization (SEO)?",
            "options": [
              "To enhance the user experience by improving website navigation and design.",
              "To manipulate search engine algorithms by generating a large number of low-quality backlinks.",
              "To create high-quality, relevant backlinks to improve a website's search engine ranking legitimately.",
              "To increase organic traffic by optimising on-page content and meta tags."
            ],
            "correctIndex": 1,
            "explanation": "In SEO, link farming is a black-hat technique aimed at gaming PageRank algorithms by artificially inflating backlink volume."
          },
          {
            "id": 10,
            "question": "Which 'V' of social media represents 'Viral trends that spread rapidly across social media platforms within minutes or hours'?",
            "options": [
              "Veracity",
              "Velocity",
              "Volume",
              "Value"
            ],
            "correctIndex": 1,
            "explanation": "Velocity represents the tremendous speed and acceleration of data diffusion and viral propagation on social platforms."
          }
        ]
      }
    }
  }
};

// Automatically build mixed practice sets for all courses
(function() {
  if (typeof coursesData === "undefined") return;

  function shuffle(arr) {
    const c = [...arr];
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
  }

  // Generate IoT mixed (180 MCQs)
  if (coursesData.iot4 && coursesData.iot4.assignments) {
    const iotAll = [];
    Object.keys(coursesData.iot4.assignments).forEach(k => {
      if (k.startsWith("week")) {
        const w = coursesData.iot4.assignments[k];
        w.questions.forEach(q => {
          iotAll.push({
            id: iotAll.length + 1,
            originalId: q.id,
            question: q.question,
            options: [...q.options],
            correctIndex: q.correctIndex,
            explanation: q.explanation,
            diagram: q.diagram,
            weekOrigin: w.title.split(":")[0].trim(),
            sourceTopic: w.topic
          });
        });
      }
    });
    coursesData.iot4.assignments["all_mixed"] = {
      id: "all_mixed",
      title: "⚡ All Weeks Mixed : Complete Mock (180 MCQs)",
      topic: "Comprehensive Full Course Practice (All 12 Weeks Mixed)",
      questions: shuffle(iotAll)
    };
  }

  // Generate HCI mixed (120 MCQs)
  if (coursesData.hci && coursesData.hci.assignments) {
    const hciAll = [];
    Object.keys(coursesData.hci.assignments).forEach(k => {
      if (k.startsWith("hci_week")) {
        const w = coursesData.hci.assignments[k];
        w.questions.forEach(q => {
          hciAll.push({
            id: hciAll.length + 1,
            originalId: q.id,
            question: q.question,
            options: [...q.options],
            correctIndex: q.correctIndex,
            explanation: q.explanation,
            diagram: q.diagram,
            weekOrigin: w.title.split(":")[0].trim(),
            sourceTopic: w.topic
          });
        });
      }
    });
    coursesData.hci.assignments["all_mixed"] = {
      id: "all_mixed",
      title: "⚡ All Weeks Mixed : Complete Mock (120 MCQs)",
      topic: "Comprehensive Exam Practice (All 12 Weeks Mixed - 120 MCQs)",
      questions: shuffle(hciAll)
    };
  }

  // Generate PSOSM mixed (110 MCQs)
  if (coursesData.psosm && coursesData.psosm.assignments) {
    const psosmAll = [];
    Object.keys(coursesData.psosm.assignments).forEach(k => {
      if (k.startsWith("psosm_week")) {
        const w = coursesData.psosm.assignments[k];
        w.questions.forEach(q => {
          psosmAll.push({
            id: psosmAll.length + 1,
            originalId: q.id,
            question: q.question,
            options: [...q.options],
            correctIndex: q.correctIndex,
            explanation: q.explanation,
            diagram: q.diagram,
            weekOrigin: w.title.split(":")[0].trim(),
            sourceTopic: w.topic
          });
        });
      }
    });
    coursesData.psosm.assignments["all_mixed"] = {
      id: "all_mixed",
      title: "⚡ All Weeks Mixed : Complete Mock (110 MCQs)",
      topic: "Comprehensive Exam Practice (All 11 Weeks Mixed - 110 MCQs)",
      questions: shuffle(psosmAll)
    };
  }
})();

// Backward compatibility alias for single-course references
const assignmentsData = (typeof coursesData !== "undefined" && coursesData.iot4) ? coursesData.iot4.assignments : {};
