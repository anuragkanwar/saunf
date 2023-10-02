import { ChipProps } from "@nextui-org/react";

export enum BugSeverity {
  BLOCKER,
  CRITICAL,
  MAJOR,
  MINOR
}

export enum BugStatus {
  NEW,
  ASSIGNED,
  IN_PROGRESS,
  FIXED,
  PENDING_RETEST,
  IN_RETEST,
  REOPEN,
  VERIFIED,
  CLOSED,
  DUPLICATE,
  REJECTED,
  DEFERRED,
  NOT_A_BUG
}

export enum BugPriority {
  HIGH,
  MEDIUM,
  LOW
}


export enum UserRole {
  ROLE_MANAGER = 1,
  ROLE_PROJECT_LEAD = 2,
  ROLE_TEAM_LEAD = 3,
  ROLE_DEVELOPER = 4,
  ROLE_TESTER = 5,
}


export const statusColorMap: Record<string, ChipProps["color"]> = {
  NEW: "danger",
  ASSIGNED: "primary",
  IN_PROGRESS: "default",
  FIXED: "success",
  PENDING_RETEST: "success",
  IN_RETEST: "success",
  REOPEN: "primary",
  VERIFIED: "secondary",
  CLOSED: "warning",
  DUPLICATE: "warning",
  REJECTED: "warning",
  DEFERRED: "warning",
  NOT_A_BUG: "warning",
};

export const severityColorMap: Record<string, ChipProps["color"]> = {
  BLOCKER: "danger",
  CRITICAL: "warning",
  MAJOR: "secondary",
  MINOR: "primary",
};

export const priorityColorMap: Record<string, ChipProps["color"]> = {
  HIGH: "danger",
  MEDIUM: "warning",
  LOW: "primary",
};


export const BugStatusData = [
  {
    "id": "reopen",
    "label": "reopen",
    "value": 3,
    "color": "hsl(102, 70%, 50%)"
  },
  {
    "id": "fixed",
    "label": "fixed",
    "value": 38,
    "color": "hsl(124, 70%, 50%)"
  },
  {
    "id": "closed",
    "label": "closed",
    "value": 52,
    "color": "hsl(224, 70%, 50%)"
  },
  {
    "id": "in progress",
    "label": "in progress",
    "value": 33,
    "color": "hsl(301, 70%, 50%)"
  },
  {
    "id": "open",
    "label": "open",
    "value": 36,
    "color": "hsl(291, 70%, 50%)"
  }
];

export const BugSeverityData = [
  {
    "country": "AD",
    "hot dog": 180,
    "hot dogColor": "hsl(18, 70%, 50%)",
    "burger": 167,
    "burgerColor": "hsl(216, 70%, 50%)",
    "sandwich": 58,
    "sandwichColor": "hsl(167, 70%, 50%)",
    "kebab": 37,
    "kebabColor": "hsl(47, 70%, 50%)",
    "fries": 118,
    "friesColor": "hsl(9, 70%, 50%)",
    "donut": 25,
    "donutColor": "hsl(299, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 37,
    "hot dogColor": "hsl(208, 70%, 50%)",
    "burger": 120,
    "burgerColor": "hsl(121, 70%, 50%)",
    "sandwich": 179,
    "sandwichColor": "hsl(159, 70%, 50%)",
    "kebab": 181,
    "kebabColor": "hsl(127, 70%, 50%)",
    "fries": 148,
    "friesColor": "hsl(332, 70%, 50%)",
    "donut": 102,
    "donutColor": "hsl(262, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 101,
    "hot dogColor": "hsl(183, 70%, 50%)",
    "burger": 95,
    "burgerColor": "hsl(306, 70%, 50%)",
    "sandwich": 139,
    "sandwichColor": "hsl(257, 70%, 50%)",
    "kebab": 5,
    "kebabColor": "hsl(186, 70%, 50%)",
    "fries": 89,
    "friesColor": "hsl(120, 70%, 50%)",
    "donut": 67,
    "donutColor": "hsl(304, 70%, 50%)"
  },
];