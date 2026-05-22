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
          content: "2646 Highway 109<br>Wildwood, MO 64040"
        - icon: "phone_in_talk"
          title: "Phone Number"
          content: "+1 (314) 690-8786"
    map:
      type: "google"
      # To enable Google Maps, provide a valid API Key below.
      # If empty, the system will fallback to the tactical image.
      api_key: ""
      lat: 38.5797
      lng: -90.6279
      zoom: 15
      fallback_image: "/images/contact-tactical-map.jpg"
      label: "OpenSky HQ"
---
