export type AssessmentFormState = {
  name: string;
  company: string;
  companyLocation: string;
  email: string;
  phone: string;
  role: string;
  industry: string;
  industryOther: string;
  annualRevenue: string;
  employeeCount: string;
  routingPaths: string;
  sharedEquipment: string;
  scheduleChangeFrequency: string;
  expediteOrders: string;
  longLeadTimes: string;
  highWip: string;
  movingBottlenecks: string;
  unevenResourceLoad: string;
  changingPriorities: string;
  unpredictableDelivery: string;
  difficultCapacityPlanning: string;
  missDeliveriesDespiteUtilization: string;
  overtimeToMeetCommitments: string;
  unsureBiggestImpact: string;
  erpSystem: string;
  erpSystemOther: string;
  schedulingMethod: string;
  metricsMonitored: string[];
  routingInformation: string;
  standardRunSetupTimes: string;
  productionDataExport: string;
  topPriorities: string[];
};

export type AssessmentSource = "flow-analysis" | "contact";

export const emptyAssessmentForm = (): AssessmentFormState => ({
  name: "",
  company: "",
  companyLocation: "",
  email: "",
  phone: "",
  role: "",
  industry: "",
  industryOther: "",
  annualRevenue: "",
  employeeCount: "",
  routingPaths: "",
  sharedEquipment: "",
  scheduleChangeFrequency: "",
  expediteOrders: "",
  longLeadTimes: "",
  highWip: "",
  movingBottlenecks: "",
  unevenResourceLoad: "",
  changingPriorities: "",
  unpredictableDelivery: "",
  difficultCapacityPlanning: "",
  missDeliveriesDespiteUtilization: "",
  overtimeToMeetCommitments: "",
  unsureBiggestImpact: "",
  erpSystem: "",
  erpSystemOther: "",
  schedulingMethod: "",
  metricsMonitored: [],
  routingInformation: "",
  standardRunSetupTimes: "",
  productionDataExport: "",
  topPriorities: [],
});

export const STEP_TITLES = [
  "Basic Information",
  "Company Profile",
  "Manufacturing Environment",
  "Operational Challenges · 1",
  "Operational Challenges · 2",
  "Current Planning Process",
  "Data Availability",
  "Business Objectives",
] as const;

export const TOTAL_STEPS = STEP_TITLES.length;
