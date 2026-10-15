/**
 * NPTEL Practice Question Bank
 * Structured by Week / Assignment for easy expansion and navigation.
 */
const assignmentsData = {
  "week1": {
    id: "week1",
    title: "Week 01 : Assignment 01",
    topic: "Introduction to IoT, Sensors & Protocols",
    questions: [
      {
        id: 1,
        question: "Which sensor can detect gases like LPG, CH4, and CO?",
        options: [
          "DHT22",
          "MQ-5",
          "HC-SR04",
          "PIR"
        ],
        correctIndex: 1,
        explanation: "MQ-5 is a gas sensor sensitive to LPG, natural gas (CH4), town gas, and carbon monoxide (CO)."
      },
      {
        id: 2,
        question: "Which modulation scheme does Zigbee use for the 2.4 GHz band?",
        options: [
          "BPSK",
          "QPSK",
          "OQPSK",
          "FSK"
        ],
        correctIndex: 2,
        explanation: "Zigbee (IEEE 802.15.4) uses Offset Quadrature Phase Shift Keying (OQPSK) in the worldwide 2.4 GHz ISM band."
      },
      {
        id: 3,
        question: "What does the Constrained RESTful Environments (CoRE) framework include for service discovery?",
        options: [
          "Registration Interface (RI)",
          "Resource Directory (RD)",
          "REST based protocols such as HTTP and CoAP",
          "All of the above"
        ],
        correctIndex: 3,
        explanation: "CoRE service discovery architecture includes the Registration Interface (RI), Resource Directory (RD), and RESTful protocols including CoAP and HTTP."
      },
      {
        id: 4,
        question: "What is the maximum data rate of Z-Wave communication technology?",
        options: [
          "100 kbps",
          "250 kbps",
          "500 kbps",
          "1 Mbps"
        ],
        correctIndex: 0,
        explanation: "Z-Wave operates at speeds up to 100 kbps (supporting 9.6 kbps, 40 kbps, and 100 kbps)."
      },
      {
        id: 5,
        question: "Which protocol is CoAP based on?",
        options: [
          "TCP",
          "FTP",
          "UDP",
          "HTTP"
        ],
        correctIndex: 2,
        explanation: "CoAP (Constrained Application Protocol) is designed for lightweight M2M communications and runs over UDP to reduce overhead."
      },
      {
        id: 6,
        question: "Which coding scheme is used by the IEEE 802.15.4 standard for transmitting information?",
        options: [
          "CSS",
          "THSS",
          "OFDM",
          "DSSS"
        ],
        correctIndex: 3,
        explanation: "Direct Sequence Spread Spectrum (DSSS) is used by IEEE 802.15.4 physical layer to improve robustness and resist interference."
      },
      {
        id: 7,
        question: "What does 'Range' indicate in a sensor?",
        options: [
          "The correctness of the output",
          "The smallest change in input that can be detected",
          "The difference between the standard value and the value produced by the sensor",
          "The highest and the lowest value of the physical quantity within which the sensor can actually sense"
        ],
        correctIndex: 3,
        explanation: "Range refers to the span between the minimum and maximum limit of the physical quantity that a sensor is specified to measure."
      },
      {
        id: 8,
        question: "Which organization has developed the ISA 100.11a standard?",
        options: [
          "Instrument Society of America",
          "International Society of Automation",
          "International Studies Association",
          "International Solar Alliance"
        ],
        correctIndex: 1,
        explanation: "ISA 100.11a is a wireless networking standard developed by the International Society of Automation for industrial automation."
      },
      {
        id: 9,
        question: "Which of the following is/are the drawbacks of proprietary non-IP-based solutions?",
        options: [
          "Limited flexibility to end users",
          "Interoperability",
          "Limited last-mile connectivity",
          "All of these"
        ],
        correctIndex: 3,
        explanation: "Non-IP proprietary IoT solutions often suffer from vendor lock-in, poor cross-vendor interoperability, and constrained last-mile connectivity."
      },
      {
        id: 10,
        question: "Which MQTT QoS Level is also known as “at most once” delivery?",
        options: [
          "QoS 0",
          "QoS 1",
          "QoS 2",
          "None of these"
        ],
        correctIndex: 0,
        explanation: "QoS 0 represents 'At most once' (fire and forget), QoS 1 is 'At least once', and QoS 2 is 'Exactly once'."
      },
      {
        id: 11,
        question: "Fill in the blank space designated by the question mark in the typical IoT Node architecture:",
        diagram: `<div class="iot-diagram">
          <div class="diagram-node">Sensor / Actuator</div>
          <span class="diagram-arrow">⇄</span>
          <div class="diagram-node">Signal Conditioning</div>
          <span class="diagram-arrow">⇄</span>
          <div class="diagram-node highlight-q">?</div>
          <span class="diagram-arrow">⇄</span>
          <div class="diagram-node">Transceiver (RF)</div>
          <span class="diagram-arrow">⇄</span>
          <div class="diagram-node">Antenna</div>
        </div>`,
        options: [
          "Snubber",
          "Repeater",
          "Processor",
          "Amplifier"
        ],
        correctIndex: 2,
        explanation: "In an IoT device/node architecture, the Processor (Microcontroller/Microprocessor) acts as the brain between signal conditioning and RF transceiver modules."
      },
      {
        id: 12,
        question: "Which of the following best describes a vector sensor?",
        options: [
          "Its response depends only on the temperature.",
          "Its response depends only on the magnitude of the input.",
          "Its response depends on the magnitude, direction, and orientation of the input parameter.",
          "Its response is independent of the input parameter."
        ],
        correctIndex: 2,
        explanation: "Vector sensors measure directional physical quantities where output depends on both magnitude and spatial orientation (e.g., accelerometers, magnetometers)."
      },
      {
        id: 13,
        question: "Which of the following frequency ranges is used by 6LoWPAN worldwide?",
        options: [
          "902–929 MHz",
          "2400–2483.5 MHz",
          "1800–1900 MHz",
          "5.8 GHz"
        ],
        correctIndex: 1,
        explanation: "6LoWPAN over IEEE 802.15.4 operates globally in the 2.4 GHz ISM band (2400–2483.5 MHz), while sub-GHz bands differ by geographic region."
      },
      {
        id: 14,
        question: "In DDS RTPS, data is referred to as:",
        options: [
          "Packets",
          "Frames",
          "Messages",
          "Topics"
        ],
        correctIndex: 3,
        explanation: "In Data Distribution Service (DDS) and Real-Time Publish-Subscribe (RTPS), information units published and subscribed to are identified by 'Topics'."
      },
      {
        id: 15,
        question: "Which of the following IoT protocols is based on the session layer of the OSI model?",
        options: [
          "MQTT",
          "CoAP",
          "AMQP",
          "DTLS"
        ],
        correctIndex: 3,
        explanation: "DTLS (Datagram Transport Layer Security) operates at the session/transport security boundary in the IoT stack providing TLS-equivalent security over UDP."
      }
    ]
  },
  "week2": {
    id: "week2",
    title: "Week 02 : Assignment 02",
    topic: "Industry 4.0, Cyber Physical Systems & Smart Factories",
    questions: [
      {
        id: 1,
        question: "What is a significant characteristic of new materials in the context of the Fourth Industrial Revolution?",
        options: [
          "High cost and scarcity",
          "Lighter, stronger, recyclable, and adaptive",
          "Easily available but very expensive",
          "Non-recyclable and heavy"
        ],
        correctIndex: 1,
        explanation: "Industry 4.0 leverages advanced smart materials that are lighter, stronger, recyclable, and highly adaptive to environmental changes."
      },
      {
        id: 2,
        question: "Which of the following is NOT a characteristic of the Fourth Industrial Revolution?",
        options: [
          "Extensive use of the ubiquitous and mobile internet",
          "Use of artificial intelligence and machine learning",
          "Invention of the steam engine",
          "Development of Cyber Physical Systems (CPS)"
        ],
        correctIndex: 2,
        explanation: "The steam engine was the breakthrough invention of Industry 1.0 (First Industrial Revolution), not Industry 4.0."
      },
      {
        id: 3,
        question: "What is considered the main nervous system of any manufacturing industry?",
        options: [
          "Human Resources",
          "Information and Communication Technology (ICT)",
          "Supply Chain Management (SCM)",
          "Marketing"
        ],
        correctIndex: 1,
        explanation: "Information and Communication Technology (ICT) connects all physical machines, digital platforms, and business operations, serving as the industry's nervous system."
      },
      {
        id: 4,
        question: "Which of the following is not a characteristic of a sustainable industry?",
        options: [
          "Energy efficiency",
          "Reliance on government subsidy",
          "Conservation of resource",
          "Low-waste production"
        ],
        correctIndex: 1,
        explanation: "A sustainable industry emphasizes self-sustaining resource conservation, energy efficiency, and waste reduction, not continuous dependence on subsidies."
      },
      {
        id: 5,
        question: "What does L, D and T stand for under ‘People Engagement’ in the Lean production System?",
        options: [
          "Learn, Do, Teach",
          "Leverage, Divulge, Teardown",
          "Lean, Diverse, Timid",
          "Loan, Deploy, Test"
        ],
        correctIndex: 0,
        explanation: "L, D and T stands for Learn, Do, Teach—promoting individual continuous learning, practical hands-on execution, and peer teaching."
      },
      {
        id: 6,
        question: "Which resource is associated with the 'Optimization' categorization of Smart and connected products?",
        options: [
          "Optimization algorithms",
          "Manual controls",
          "Marketing data",
          "Financial reports"
        ],
        correctIndex: 0,
        explanation: "Optimization algorithms drive smart products by analyzing real-time data to maximize efficiency, reduce energy use, and minimize downtime."
      },
      {
        id: 7,
        question: "State True or False. The amalgamation of CPS and the evolution of Internet-based technologies led to the development of the Industrial Internet.",
        options: [
          "True",
          "False"
        ],
        correctIndex: 0,
        explanation: "True. The merging of Cyber-Physical Systems (CPS) with advanced Internet/cloud architecture gave rise to the Industrial Internet (IIoT)."
      },
      {
        id: 8,
        question: "State True or False. Real-time supply chain monitoring reduces inventory and capital requirements.",
        options: [
          "True",
          "False"
        ],
        correctIndex: 0,
        explanation: "True. Real-time tracking eliminates excess buffer inventories, streamlines lead times, and reduces required working capital."
      },
      {
        id: 9,
        question: "In the context of Industry 4.0, what is the full form of CPS?",
        options: [
          "Controlled Power System",
          "Customer Provisioning Service",
          "Cloud Processing Service",
          "Cyber Physical Systems"
        ],
        correctIndex: 3,
        explanation: "CPS stands for Cyber-Physical Systems, seamless integrations of computation, networking, and physical physical machinery."
      },
      {
        id: 10,
        question: "What does ERP stand for in the context of ICT?",
        options: [
          "Enterprise Resource Planning",
          "Electronic Resource Platform",
          "Enhanced Reporting Protocol",
          "Economic Resource Planning"
        ],
        correctIndex: 0,
        explanation: "ERP stands for Enterprise Resource Planning, centralized software systems used to manage and integrate core business and manufacturing operations."
      },
      {
        id: 11,
        question: "What is a 'value stream' in Lean Production System?",
        options: [
          "A set of tools for production",
          "All the actions required for a product from order to delivery",
          "A method of employee training",
          "A type of waste reduction"
        ],
        correctIndex: 1,
        explanation: "The value stream encompasses the entire sequence of activities—both value-adding and essential non-value-adding—required to bring a product from concept/order to customer."
      },
      {
        id: 12,
        question: "Which of the following are key attributes of a smart business model?",
        options: [
          "Manual processes, cost reduction, and labor dependency",
          "Value proposition, revenue streams, and technologies",
          "Traditional marketing, fixed costs, and limited innovation",
          "Centralized control, non-digital strategies, and fixed processes"
        ],
        correctIndex: 1,
        explanation: "Smart business models are defined by digital-enabled value propositions, dynamic revenue models, and transformative technologies."
      },
      {
        id: 13,
        question: "Which of the following is not a component of a Smart Factory?",
        options: [
          "Smart machines",
          "Smart manufacturing processes",
          "Information Technology",
          "Physical ledgers"
        ],
        correctIndex: 3,
        explanation: "Physical ledgers represent outdated manual record keeping; modern Smart Factories use digital records, cloud storage, and automated telemetry."
      },
      {
        id: 14,
        question: "In which format is healthcare data transmitted to maintain data uniformity and interoperability?",
        options: [
          "HL-7",
          "LH-5",
          "HD-7",
          "None of these"
        ],
        correctIndex: 0,
        explanation: "HL-7 (Health Level Seven) is the global standard format for exchanging, integrating, and retrieving electronic healthcare information."
      },
      {
        id: 15,
        question: "What are the key characteristics of agility?",
        options: [
          "Stability, Rigidity, and Standardization",
          "Flexibility, Adaptation, and Self-configuration",
          "Planning, Controlling, and Monitoring",
          "Automation, Documentation, and Testing"
        ],
        correctIndex: 1,
        explanation: "Agility in Industry 4.0 refers to the capability of systems to rapidly adapt, exhibit high operational flexibility, and autonomously self-configure."
      }
    ]
  }
};

// Backwards compatibility alias for cached sessions
const questionsData = assignmentsData["week1"].questions;
