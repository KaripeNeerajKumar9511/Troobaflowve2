export const INDUSTRY_OPTIONS = [
  "Packaging",
  "Electronics",
  "Industrial Equipment",
  "Automotive",
  "Aerospace",
  "Medical Devices",
  "Consumer Products",
  "Other",
] as const;

export const REVENUE_OPTIONS = [
  "<$10M",
  "$10M–50M",
  "$50M–250M",
  "$250M–1B",
  ">$1B",
] as const;

export const EMPLOYEE_OPTIONS = ["<50", "50–200", "200–500", "500+"] as const;

export const ROUTING_PATH_OPTIONS = ["<10", "10–50", "50–200", "200+"] as const;

export const SHARED_EQUIPMENT_OPTIONS = [
  "Always",
  "Frequently",
  "Occasionally",
  "Rarely",
] as const;

export const SCHEDULE_CHANGE_OPTIONS = [
  "Multiple times per day",
  "Daily",
  "Weekly",
  "Rarely",
] as const;

export const LIKERT_OPTIONS = [
  { value: "1", label: "Strongly Disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly Agree" },
] as const;

export const CHALLENGE_FIELDS = [
  { key: "expediteOrders", label: "We frequently expedite orders." },
  {
    key: "longLeadTimes",
    label: "Customer lead times are longer than we would like.",
  },
  {
    key: "highWip",
    label: "Work-in-process inventory is higher than desired.",
  },
  {
    key: "movingBottlenecks",
    label: "Bottlenecks move between departments.",
  },
  {
    key: "unevenResourceLoad",
    label: "Some resources are overloaded while others remain idle.",
  },
  {
    key: "changingPriorities",
    label: "Production priorities change frequently.",
  },
  {
    key: "unpredictableDelivery",
    label: "We struggle to predict realistic delivery dates.",
  },
  {
    key: "difficultCapacityPlanning",
    label: "Capacity planning is difficult.",
  },
  {
    key: "missDeliveriesDespiteUtilization",
    label: "We have good equipment utilization but still miss deliveries.",
  },
  {
    key: "overtimeToMeetCommitments",
    label: "We often add overtime to meet commitments.",
  },
  {
    key: "unsureBiggestImpact",
    label: "We are unsure which improvement project will have the biggest impact.",
  },
] as const;

/** Step 4 — first half of operational challenges */
export const CHALLENGE_FIELDS_A = CHALLENGE_FIELDS.slice(0, 6);
/** Step 5 — second half of operational challenges */
export const CHALLENGE_FIELDS_B = CHALLENGE_FIELDS.slice(6);

export const ERP_OPTIONS = [
  "SAP",
  "Microsoft Dynamics",
  "Oracle",
  "Epicor",
  "Infor",
  "Odoo",
  "Other",
  "None",
] as const;

export const SCHEDULING_METHOD_OPTIONS = [
  "ERP",
  "APS",
  "Excel",
  "Whiteboard",
  "Experience only",
] as const;

export const METRICS_OPTIONS = [
  "Throughput",
  "OEE",
  "Utilization",
  "WIP",
  "Lead Time",
  "On-Time Delivery",
  "Inventory",
  "None",
] as const;

export const DATA_AVAILABILITY_OPTIONS = {
  routingInformation: ["Yes", "Partially", "No"],
  standardRunSetupTimes: ["Yes", "Mostly", "No"],
  productionDataExport: ["Yes", "Maybe", "No"],
} as const;

export const PRIORITY_OPTIONS = [
  "Reduce Lead Time",
  "Improve On-Time Delivery",
  "Reduce WIP",
  "Increase Throughput",
  "Delay Capital Investment",
  "Improve Capacity Planning",
  "Improve Quoting Accuracy",
  "Better Production Visibility",
  "Reduce Firefighting",
  "Improve Profitability",
] as const;
