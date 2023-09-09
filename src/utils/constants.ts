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