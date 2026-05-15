---
title: "Capabilities"
description: "Four modular, AI-driven surveillance and detection systems engineered for real-world deployment."
layout: "list"

# ─── Page Header ───────────────────────────────────────────────────────────
header:
  eyebrow: "Advanced AI Systems"
  title: "Core Capabilities"
  description: "Explore our professional-grade AI systems designed for law enforcement, public safety, and real-time security analysis."

# ─── Page Sections ──────────────────────────────────────────────────────────
sections:
  # 01. Vehicle Detection
  - type: "feature-split"
    id: "vehicle-detection"
    icon: "directions_car"
    title: "Vehicle Detection"
    description: "Our vehicle detection system uses advanced computer vision to monitor traffic and parking behavior in real time."
    image: "/images/vehicle-detection-2.jpg"
    hud:
      left: "SYSTEM STATE: OPTIMAL"
      right: "TRACKING: ACTIVE"
    feature_box:
      title: "Smart Parking & Vehicle Classification"
      items:
        - icon: "event_available"
          text: "Detects and logs parking events automatically."
        - icon: "schedule"
          text: "Tracks parking duration with timestamps."
        - icon: "report_problem"
          text: "Identifies double parking violations."
        - icon: "local_shipping"
          text: "Recognizes commercial vehicles (UPS, FedEx, DHL, USPS)."

  # 02. Gun Detection
  - type: "feature-split"
    id: "weapon-detection"
    reverse: true
    is_threat: true
    icon: "policy"
    icon_color: "error"
    title: "Gun Detection & Security Alerts"
    description: "AI-powered system for detecting firearms and improving situational awareness."
    image: "/images/gun-detection.png"
    hud:
      left: "ANALYSIS STREAM: 0x4F2A"
      right: "SOURCE: CAMSYS_7.0"
    feature_box:
      title: "Real-Time Officer Alert System"
      items:
        - icon: "warning"
          color: "error"
          text: "Detects weapons in real time."
        - icon: "target"
          text: "Identifies if a weapon is pointed or brandished."
        - icon: "360"
          text: "Alerts whether threat is in front or behind."
        - icon: "radio"
          text: "Supports radio/audio-based notifications."

  # 03. Drone Systems
  - type: "feature-split"
    id: "drone-systems"
    is_drone: true
    icon: "flight"
    title: "Drone Systems"
    description: "We design and develop specialized drone systems tailored for advanced system requirements and real-world deployment."
    image: "/images/drone-systems-2.jpg"
    hud:
      left: "UAV LINK: STABLE"
      right: "SIGNAL: 100%"
    subsections:
      - title: "System Design & Integration"
        icon: "settings_input_component"
        text: "Custom drone configurations, Payload and sensor integration, Control system customization."
      - title: "Rapid Development"
        icon: "bolt"
        text: "Fast prototyping cycles, Iterative system refinement, Deployment-ready solutions."
      - title: "System Reliability"
        icon: "verified_user"
        text: "Built for demanding environments, Stable performance under varying conditions, Scalable system architecture."

  # 04. Behavior Analysis
  - type: "behavior-analysis"
    id: "behavior-analysis"
    icon: "accessibility_new"
    title: "Advanced Behavior Analysis"
    description: "Our AI-powered system interprets human behavior by analyzing posture, movement, and spatial orientation in real time."
    image: "/images/behavior-analysis.jpg"
    main_feature:
      title: "Pose & Activity Recognition"
      icon: "accessibility_new"
      items:
        - "Detects human posture such as standing, sitting, or lying down"
        - "Tracks direction of movement and attention focus"
        - "Identifies interactions between individuals and environment"
    anomaly_box:
      title: "Anomaly Detection"
      icon: "warning_amber"
      text: "Recognizes unusual or unexpected behavior patterns; Flags deviations from normal crowd activity; Enables early warning in critical situations."
    monitoring_box:
      title: "Real-Time Monitoring"
      icon: "monitor_heart"
      text: "Processes live video streams; Provides instant analysis and alerts; Scales across multiple locations and camera systems."

  # 05. CTA
  - type: "cta"
    title: "Schedule a System Demonstration"
    description: "Contact our team to discuss your agency's specific requirements and schedule a professional consultation."
    button_text: "Contact Our Team"
    button_link: "/contact/"
---
