/**
 * NPTEL Practice Question Bank
 * Add, edit, or remove questions easily by modifying this array.
 * 
 * Schema:
 * {
 *   id: number,
 *   question: string,
 *   diagram?: string (optional HTML/SVG snippet),
 *   options: string[],
 *   correctIndex: number (0-indexed: 0=A, 1=B, 2=C, 3=D),
 *   explanation: string
 * }
 */
const questionsData = [
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
];
