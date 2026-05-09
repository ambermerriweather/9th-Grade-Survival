import { LessonPlan } from '../types';

export const lessonPlansPart6: Record<string, LessonPlan> = {
  ch10: {
    title: "Chapter 10: How to Read a Syllabus",
    topic: "Decoding the 'instruction manual' for each class.",
    philosophy: "The syllabus is the single most important document for any class, yet students are rarely taught how to use it as a tool. This practical, hands-on lesson treats the syllabus like a 'cheat code' for success, empowering students to find the information they need to be proactive and organized.",
    objectives: ["Identify the key sections of a typical syllabus.", "Locate specific information (e.g., grading policy, contact info, major due dates) on a sample syllabus.", "Transfer key dates from a syllabus into their personal planner."],
    materials: ["A sample syllabus (can use the one from this course or a generic one)", "Handout: 'Syllabus Scavenger Hunt (syllabusScavengerHunt)'", "Student planners."],
    techIntegration: ["If syllabi are posted on an LMS, walk students through how to find and download them.", "Use a screen annotation tool to highlight and label the different parts of the sample syllabus on the projector."],
    comprehensionQuestion: "Why is the syllabus considered the 'instruction manual' for a class? Identify three pieces of information on a typical syllabus that can help you avoid a disaster (like missing a major deadline or not knowing how your grade is calculated).",
    procedure: [
      { title: "Hook/Opener (5 min): The Instruction Manual", steps: ["Hold up an instruction manual for a new phone or a video game. Ask, 'What is this? Why is it useful?' (It tells you the rules, how to win, what the parts are). 'A syllabus is the instruction manual for a class. If you read it, you know exactly how to succeed.'"] },
      { title: "Direct Instruction (15 min): A Tour of the Syllabus", steps: ["Project the sample syllabus.", "Walk through the key sections, explaining their importance: **Contact Info:** 'This is how you get help.' **Course Description/Objectives:** 'This is what you'll be learning.' **Grading Policy:** 'This is how you earn your grade. Pay attention to the percentages!' **Late Work/Policies:** 'These are the rules of the game.' **Schedule/Major Due Dates:** 'These are the most important dates to put in your planner immediately.'"] },
      { title: "Guided Practice (20 min): Scavenger Hunt", steps: ["Distribute the 'Syllabus Scavenger Hunt' handout.", "In pairs or individually, have students use the sample syllabus to find the answers to the questions. This turns a passive reading task into an active search.", "Review the answers as a class to ensure everyone found the key information."] },
      { title: "Application (10 min): Planner Power-Up", steps: ["Instruct students to take out their planners.", "Teacher says: 'Now, let's transfer the most important information. Find the 'Major Due Dates' section of the syllabus and write every single one into your planner right now.'", "Walk around to help students and check that they are transferring the dates correctly."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'What is the most useful piece of information you found on the syllabus today?'"] }
    ],
    differentiation: [
      { for: "Students with organizational challenges", strategy: "Provide them with a highlighter and guide them to color-code the syllabus: yellow for due dates, pink for grading policies, blue for contact info." },
      { for: "Advanced students", strategy: "Have them look at the course objectives and write a personal goal for the class that aligns with one of the objectives." }
    ],
    homework: {
        assignment: "For every one of your other classes, find the syllabus (digital or paper). Highlight the grading policy and all major due dates.",
        teacher_notes: "This is a direct application of the class skill to their real lives. It forces them to engage with the key documents for their other courses. You can do a quick check-in at the next class: 'Did anyone find something surprising on one of their syllabi?'"
    }
  },
  ch11: {
    title: "Chapter 11: Intro to Financial Literacy",
    topic: "Understanding needs vs. wants and creating a simple budget.",
    philosophy: "Financial literacy is a critical life skill that is often overlooked in traditional education. This lesson provides a simple, non-intimidating introduction to the foundational concepts of budgeting and conscious spending, empowering students with the vocabulary and tools to start making smart financial decisions.",
    objectives: ["Differentiate between a 'need' and a 'want'.", "Categorize common expenses as either needs or wants.", "Create a simple monthly budget based on a given income scenario."],
    materials: ["Whiteboard", "Handout: 'Needs vs. Wants (needsVsWants)'", "Handout: 'My First Budget (firstBudget)'", "Calculators (optional)."],
    techIntegration: ["Introduce simple budgeting apps for teens like Mint or You Need a Budget (YNAB).", "Use an online poll to ask, 'What is one thing you've spent money on this week?' to generate examples for the Needs vs. Wants activity."],
    comprehensionQuestion: "Define the difference between a 'Need' and a 'Want' in your own words. Why is it important to 'Pay Yourself First' (into savings) before spending money on 'Wants,' and how can this habit lead to long-term financial freedom?",
    procedure: [
      { title: "Hook/Opener (5 min): The $100 Question", steps: ["Ask students: 'If I gave you $100 right now, what is the very first thing you would buy?' Get a few answers. Then ask, 'Is that a 'need' or a 'want'?' This opens the discussion."] },
      { title: "Direct Instruction (10 min): Needs vs. Wants", steps: ["Define the terms on the board: **Needs** are things you must have to survive (food, water, shelter, basic clothing). **Wants** are everything else—things that are nice to have but you could live without (video games, designer clothes, concert tickets).", "Emphasize that it's not always clear-cut. 'A phone might feel like a need, but is the newest model a need or a want?'"] },
      { title: "Guided Practice (15 min): The Sort", steps: ["Distribute the 'Needs vs. Wants' handout.", "Have students work in pairs to categorize the items on the list. Encourage discussion and debate for the items that fall in a gray area.", "Review the answers as a class, focusing on the reasoning behind their choices."] },
      { title: "Application (15 min): My First Budget", steps: ["Distribute the 'My First Budget' handout.", "Walk through the scenario and the steps together as a class. Emphasize the concept of 'Pay Yourself First' by putting money into savings before anything else.", "Give students time to complete the calculations and plan their 'wants' spending."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'What is one 'want' you spend money on that you could cut back on if you needed to save for a bigger goal?'"] }
    ],
    differentiation: [
      { for: "Students who struggle with math", strategy: "Allow them to use calculators and provide a version of the budget handout with the savings calculation already done for them." },
      { for: "Students from different socioeconomic backgrounds", strategy: "Be sensitive in your language. Frame the lesson around hypothetical scenarios and choices, acknowledging that everyone's financial situation is different. Avoid making assumptions about allowances or spending money." }
    ],
    homework: {
        assignment: "For one week, track everything you spend money on (even small purchases). You don't have to share the list, but just notice where your money goes.",
        teacher_notes: "This is a personal data collection task. The goal is awareness, not judgment. It helps students see their own habits clearly. Reassure them that this information is for their eyes only, but the act of tracking is the important part."
    }
  }
};
