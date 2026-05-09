/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LessonPlan {
  title: string;
  topic: string;
  philosophy: string;
  objectives: string[];
  materials: string[];
  procedure: Array<{
    title: string;
    steps: string[];
  }>;
  differentiation: Array<{
    for: string;
    strategy: string;
  }>;
  homework: {
    assignment: string;
    teacher_notes: string;
  };
  techIntegration: string[];
  comprehensionQuestion?: string;
}

export interface TeacherGuideSection {
  title: string;
  content?: string[];
  list?: string[];
  subsections?: Array<{
    title: string;
    list: string[];
  }>;
}

export interface TeacherGuide {
  title: string;
  summary?: string;
  sections?: TeacherGuideSection[];
  content?: string;
  templates?: Array<{
    title: string;
    subject?: string;
    body: string | string[];
    list?: string[];
    closing?: string[];
  }>;
  scripts?: Array<{
    title: string;
    scenario: string;
    dialogue: string[];
  }>;
  rubrics?: Array<{
    title: string;
    note?: string;
    headers: string[];
    rows: string[][];
  }>;
  guides?: Record<string, {
    title: string;
    headers: string[];
    rows: string[][];
  }>;
  strategies?: Array<{
    title: string;
    description: string;
    prompt?: string;
  }>;
}

export interface Handout {
  title: string;
  content: string;
}
