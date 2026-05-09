import { LessonPlan } from '../types';
import { allLessonPlans as part1 } from './lessonPlanPart1';
import { lessonPlansPart2 as part2 } from './lessonPlanPart2';
import { lessonPlansPart3 as part3 } from './lessonPlanPart3';
import { lessonPlansPart4 as part4 } from './lessonPlanPart4';
import { lessonPlansPart5 as part5 } from './lessonPlanPart5';
import { lessonPlansPart6 as part6 } from './lessonPlanPart6';
import { lessonPlansPart7 as part7 } from './lessonPlanPart7';

export const allLessonPlans: Record<string, LessonPlan> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7
};
