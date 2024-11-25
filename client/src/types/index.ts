export interface Response {
  format: string;
  resultsPerPage: number;
  startIndex: number;
  timestamp: string;
  totalResults: number;
  version: string;
  vulnerabilities: CVE[];
}

interface CVE {
  id: string;
  lastModified: string;
  published: string;
  sourceIdentifier: string;
  vulnStatus: string;
  configurations: Configuration[];
  descriptions: Description[];
  weaknesses: Weakness[];
  references: Reference[];
  metrics: Metrics[];
}

interface Metric {
  acInsufInfo: boolean;
  baseSeverity?: string;
  exploitabilityScore: number;
  impactScore: number;
  obtainAllPrivilege?: boolean;
  obtainOtherPrivilege?: boolean;
  obtainUserPrivilege?: boolean;
  source: string;
  type: string;
  cvssData: CvssData;
}

interface CvssData {
  accessComplexity: string;
  accessVector: string;
  authentication: string;
  availabilityImpact: string;
  baseScore: number;
  confidentialityImpact: string;
  integrityImpact: string;
  vectorString: string;
  version: string;
}

interface Metrics {
  cvssMetricV2?: Metric[];
  cvssMetricV3?: Metric[];
  cvssMetricV4?: Metric[];
  cvssMetricV30?: Metric[];
}

interface Reference {
  source: string;
  url: string;
}

interface Weakness {
  type: string;
  source: string;
  description: Description;
}

interface Description {
  lang: string;
  value: string;
}

interface Configuration {
  operator?: string;
  nodes: Node[];
}

interface Node {
  operator?: string;
  negate: boolean;
  cpeMatch: CPEMatch[];
}

interface CPEMatch {
  vulnerable: boolean;
  criteria: string;
  matchCriteriaId: string;
}
