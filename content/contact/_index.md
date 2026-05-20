---
title: "Contact"
description: "Reach out to discuss a custom solution, partnership, or operational requirement."
layout: "list"

# ─── Page Sections ──────────────────────────────────────────────────────────
sections:
  # 01. Contact Header
  - type: "contact-header"
    title: "Contact Us"

  # 02. Contact Grid (Form & Info)
  - type: "contact-grid"
    form:
      title: "Get In Touch"
      fields:
        name: "Full Name"
        code:
          label: "Agency / Organization"
          placeholder: "e.g. Arlington PD"
        email: "Email Address"
        phone: "Phone Number"
        message: "Message / Requirements"
    info:
      title: "Our Information"
      items:
        - icon: "location_on"
          title: "Headquarters"
          content: "101 Intelligence Way<br>Arlington, VA 22202"
        - icon: "mail"
          title: "Email"
          content: "ops@openskyintelligence.com"
        - icon: "phone_in_talk"
          title: "Phone Number"
          content: "+1 (800) 555-0199"
    map:
      type: "google"
      # To enable Google Maps, provide a valid API Key below.
      # If empty, the system will fallback to the tactical image.
      api_key: ""
      lat: 38.889931
      lng: -77.009003
      zoom: 14
      fallback_image: "/images/contact-tactical-map.jpg"
      label: "OpenSky HQ"
---
