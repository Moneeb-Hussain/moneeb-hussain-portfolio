import type { CaseStudy } from "../types";

/**
 * Long-form case study for the Automatic Retail Checkout V-3 final-year
 * thesis. All figures trace back to the thesis document and research paper
 * cited in PORTFOLIO_CONTENT_AUDIT.md §4.1 — controlled-test accuracy only,
 * no real-world retail claim.
 */
export const automaticRetailCheckoutCaseStudy: CaseStudy = {
  slug: "automatic-retail-checkout",
  title: "Automatic Retail Checkout V-3",
  dek: "A barcode-free checkout prototype that turns a webcam feed into a printed bill — built as a three-person final-year thesis in mechatronics.",
  sections: [
    {
      id: "context",
      heading: "Context",
      paragraphs: [
        "This project was the final-year thesis for a three-person team in the BS Mechatronics and Control Engineering program at UET Lahore, advised by Muhammad Rzi Abbas in the AI & Robotics Laboratory. The team — Moneeb Hussain, Arbaz Ch., and Khawaja Daniyal — set out to answer a narrow, testable question: could a fixed camera and a lightweight object detector replace barcode scanning for a constrained set of retail products, end to end, from detection through to a printed receipt?",
        "Moneeb's individual contribution centered on the computer vision pipeline and the systems integration connecting perception to the physical conveyor and billing hardware, reflected in his role as Computer Vision & Systems Engineer on the team.",
      ],
    },
    {
      id: "problem-framing",
      heading: "Problem framing",
      paragraphs: [
        "Barcode scanning is reliable but manual: a cashier orients each item, aligns it with a scanner, and repeats the process per item. It also fails silently for damaged, missing, or intentionally obscured barcodes. The team scoped the thesis around a different question — not 'can we detect any product in any setting,' but 'can a constrained, fixed-camera vision pipeline reliably identify a defined product catalog moving past a single point, fast enough to be useful?'",
        "That framing shaped every downstream decision: the conveyor was built to present one item at a time, the lighting was controlled rather than ambient, and the product catalog was fixed at 70 classes rather than open-ended. These were deliberate boundaries for a thesis-scale system, not oversights.",
      ],
    },
    {
      id: "physical-architecture",
      heading: "Physical architecture",
      paragraphs: [
        "The rig is built around a small motorised conveyor belt. A NEMA 17 stepper motor, driven through an Arduino Uno, advances the belt and a rotary indexer so that products pass a fixed webcam one at a time rather than in an unpredictable, overlapping stream. Controlled LED lighting sits above the capture zone to keep exposure and shadow behaviour consistent across every frame the detector sees.",
        "This physical sequencing — one item, fixed position, fixed lighting — does a lot of the reliability work before the vision model ever runs. It's a classic mechatronics trade-off: spend engineering effort on the physical setup so the perception problem becomes tractable, rather than asking a single model to handle arbitrary item overlap and lighting variation.",
      ],
      bullets: [
        "NEMA 17 stepper motor + rotary indexer for single-item presentation",
        "Fixed webcam with a stable, repeatable field of view",
        "Controlled LED lighting rig to reduce exposure variance",
        "Arduino Uno for real-time motor sequencing",
      ],
    },
    {
      id: "perception-pipeline",
      heading: "Perception pipeline",
      paragraphs: [
        "Detection runs on YOLOv4-tiny, trained with the Darknet framework. The team chose the 'tiny' variant deliberately: full-size YOLOv4 would likely have offered marginally higher accuracy, but at a latency cost that would have undermined the goal of near-real-time per-item processing on lab-grade hardware. YOLOv4-tiny's smaller backbone made it possible to keep inference fast enough that the conveyor didn't have to slow down to wait for the model.",
        "Each frame captured as an item crosses the fixed camera position is run through the detector, which outputs a bounding box and class label for the product. Because the physical rig already guarantees single-item presentation, the software doesn't need to solve multi-object disambiguation in the general case — it needs to be confident about one item at a time.",
      ],
    },
    {
      id: "dataset-methodology",
      heading: "Dataset methodology",
      paragraphs: [
        "Rather than using an off-the-shelf product-image dataset, the team captured their own — roughly 3,500 images taken directly from the conveyor rig, across the 70 product classes the system was designed to recognize. This matters more than it might sound: a model trained on generic product photography (clean studio backgrounds, arbitrary angles) would have faced a distribution shift the moment it saw the conveyor's actual camera angle, motion blur, and lighting.",
        "By capturing training data on the exact rig the system would run on, the team closed that gap deliberately — a small-scale but concrete example of matching training distribution to deployment distribution.",
      ],
    },
    {
      id: "hardware-software-integration",
      heading: "Hardware/software integration",
      paragraphs: [
        "A Python and OpenCV application handles frame capture and preprocessing on a PC connected to the webcam. A Tkinter desktop UI displays live detections to the operator and maintains a running tally of items and their prices as they're recognized. Serial communication over USB links this PC-side application to the Arduino Uno, which controls belt and indexer timing — keeping physical motion and software detection synchronized rather than running independently.",
        "Once an item passes through and is classified, its price is added to a running bill. At the end of a transaction, the system drives an HP LaserJet printer to produce a physical receipt, completing the loop from camera frame to paper bill without a cashier manually entering or scanning anything.",
      ],
    },
    {
      id: "evaluation",
      heading: "Evaluation",
      paragraphs: [
        "The reported 98.78% detection accuracy comes from controlled lab testing — fixed lighting, the trained 70-class catalog, single-item presentation via the indexer. Per-item processing time improved over the course of development from around 4 seconds in early iterations down to under 1 second in the V-3 pipeline, which is the version this case study describes.",
        "These numbers should be read as evidence that the constrained pipeline works reliably within its designed operating envelope, not as a general claim about open-set retail recognition, cluttered scenes, or adversarial conditions the thesis didn't test.",
      ],
    },
    {
      id: "engineering-decisions",
      heading: "Key engineering decisions",
      paragraphs: [
        "Three decisions shaped the system more than any others. First, using physical indexing to guarantee single-item presentation, which simplified the vision problem in exchange for added mechanical complexity. Second, choosing YOLOv4-tiny over a larger detector, trading a bounded amount of accuracy for the real-time performance the use case demanded. Third, building a custom, rig-specific dataset instead of relying on generic product imagery, which cost more upfront data-collection effort but paid off in more representative training data.",
      ],
    },
    {
      id: "limitations",
      heading: "Limitations",
      paragraphs: [
        "The system was built and evaluated as a thesis prototype under controlled conditions. The 98.78% figure is not a real-world retail benchmark: it doesn't account for open-set products outside the 70 trained classes, uncontrolled ambient lighting, item overlap beyond what the indexer prevents, or adversarial packaging. The research paper produced alongside the thesis is an academic draft, not a peer-reviewed publication, and is presented here accordingly.",
      ],
    },
    {
      id: "future-work",
      heading: "Future work",
      paragraphs: [
        "The most natural extensions identified during the project are expanding the trained catalog well beyond 70 classes, testing the pipeline under varied and uncontrolled lighting, and handling partial occlusion when items pass the camera in closer succession than the indexer was designed for. Each of these would move the system from a controlled thesis demonstration toward something closer to a real deployment environment.",
      ],
    },
  ],
};
