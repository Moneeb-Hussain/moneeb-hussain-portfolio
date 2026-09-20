import type { CaseStudy } from "../types";

/**
 * Long-form case study for the Automatic Retail Checkout V-3 final-year
 * thesis. Facts follow the thesis and lab figures. 98.78% is a controlled
 * test (ten conveyor passes per trained item), not a real-world retail claim.
 */
export const automaticRetailCheckoutCaseStudy: CaseStudy = {
  slug: "automatic-retail-checkout",
  title: "Automatic Retail Checkout V-3",
  dek: "A barcode-free checkout prototype that turns a conveyor webcam feed into a printed bill, built as a three-person final-year thesis in mechatronics.",
  sections: [
    {
      id: "context",
      heading: "Context",
      paragraphs: [
        "This project was the final-year thesis for a three-person team in the BS Mechatronics and Control Engineering program at UET Lahore, advised by Muhammad Rzi Abbas in the AI & Robotics Laboratory. The team, Moneeb Hussain, Arbaz Ch., and Khawaja Daniyal, asked a narrow question: could a fixed camera and a lightweight detector replace barcode scanning for a closed set of retail products, end to end, from detection through a printed receipt?",
        "Moneeb's individual contribution centered on the computer vision pipeline and the systems work that connected perception to the conveyor, the billing GUI, and the printer.",
      ],
    },
    {
      id: "problem-framing",
      heading: "Problem framing",
      paragraphs: [
        "Barcode scanning is reliable but manual. A cashier orients each item, finds the code, and repeats. It also fails when a barcode is damaged, missing, or hidden. The thesis was not 'detect any product in any setting.' It was: can a fixed-camera pipeline name a defined catalog on a running belt, fast enough to be useful?",
        "That framing set the bounds: controlled LED lighting inside a hood, a catalog of 70 classes, and training frames captured on the same conveyor the live system would see. V-3's job, relative to V-2, was to drop the halt-the-belt constraint and handle more than one item in the frame.",
      ],
    },
    {
      id: "physical-architecture",
      heading: "Physical architecture",
      paragraphs: [
        "Checkout runs on a motorised conveyor with a wooden capture hood, LED strip lighting, and a fixed Logitech C310 looking down at the belt. An HP LaserJet sits beside the rig and prints the bill from the desktop GUI.",
        "A separate machine, a rotary indexer (aluminum plate, angle-iron frame, NEMA 17 stepper driven from an Arduino Uno), is used to photograph new products for retraining. It is not what sequences items at checkout. On the live belt, products can sit anywhere in view. Counting is software: a virtual green line across the frame.",
      ],
      bullets: [
        "Conveyor + wooden hood + LED lighting for a repeatable capture scene",
        "Fixed Logitech C310 webcam inside the hood",
        "HP LaserJet driven from the Tkinter billing GUI",
        "Rotary indexer (NEMA 17 + Arduino) for new-SKU capture, not checkout timing",
      ],
    },
    {
      id: "perception-pipeline",
      heading: "Perception pipeline",
      paragraphs: [
        "Detection runs on YOLOv4-tiny, trained with Darknet. Full YOLOv4 would likely have been a little more accurate, at a latency cost that would have fought the under-one-second target on lab hardware. Tiny kept inference fast enough that the belt did not have to wait.",
        "Each live frame is labeled with bounding boxes and class names. V-2 used a laser trigger that stopped the belt for about three seconds so one centered item could be photographed. V-3 replaced that pause with a virtual counting line: when a box crosses the line, that SKU is counted once and added to the bill, even if several products are in frame.",
      ],
    },
    {
      id: "dataset-methodology",
      heading: "Dataset methodology",
      paragraphs: [
        "The team did not train on generic product photography. They captured about 3,500 frames on the conveyor itself, across 70 classes, and labeled them in LabelImg. A studio-shot dataset would have shifted the moment the model saw this camera angle, this hood, and this lighting.",
        "Training used the logo-visible face of each pack. New SKUs could be added later by photographing them on the rotary indexer, labeling, and retraining, instead of rebuilding the whole set from scratch.",
      ],
    },
    {
      id: "hardware-software-integration",
      heading: "Hardware/software integration",
      paragraphs: [
        "A Python and OpenCV application on the PC grabs frames from the webcam, runs the detector, and feeds a Tkinter UI. The UI shows the live view, a running bill, Checkout, and Quit. Checkout prints the receipt on the HP LaserJet.",
        "The Arduino and stepper belong to the indexer used when a new product has to enter the catalog. Checkout counting does not depend on stopping the belt or on the indexer turning.",
      ],
    },
    {
      id: "evaluation",
      heading: "Evaluation",
      paragraphs: [
        "The reported 98.78% detection accuracy comes from controlled lab testing: fixed lighting, the trained 70-class catalog, each item run down the conveyor ten times. Per-item time moved from around four seconds in earlier iterations to under one second in V-3, with multiple products detectable at once.",
        "Read those numbers as evidence that the constrained pipeline works inside its envelope, not as a claim about open-set retail, stacked items, or uncontrolled shop lighting.",
      ],
    },
    {
      id: "engineering-decisions",
      heading: "Key engineering decisions",
      paragraphs: [
        "Three decisions did most of the work. First, replacing V-2's laser halt with a virtual counting line so the belt can keep running and several SKUs can share a frame. Second, choosing YOLOv4-tiny over a larger detector, trading a bounded amount of accuracy for the latency the use case needed. Third, capturing a custom, rig-specific dataset in LabelImg instead of relying on generic product imagery, and adding a rotary indexer so new classes could be photographed without repeating the whole capture campaign.",
      ],
    },
    {
      id: "limitations",
      heading: "Limitations",
      paragraphs: [
        "The system was built and scored as a thesis prototype under controlled conditions. The 98.78% figure is not a supermarket benchmark. It does not cover products outside the 70 trained classes, stacked or heavily occluded items, uncontrolled ambient lighting, or packs whose printed face does not point at the camera. The research paper produced alongside the thesis is an academic draft, not a peer-reviewed publication.",
      ],
    },
    {
      id: "future-work",
      heading: "Future work",
      paragraphs: [
        "The natural next steps are a larger catalog, tests under varied lighting, and counting that still holds when items overlap or stack. Each of those would move the system from a controlled lab demonstration toward something closer to a shop floor.",
      ],
    },
  ],
};
