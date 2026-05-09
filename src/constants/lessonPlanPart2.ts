import { LessonPlan } from '../types';

export const lessonPlansPart2: Record<string, LessonPlan> = {
  ch2: {
    title: "Chapter 2: Taming the Calendar",
    topic: "Introduction to time management, prioritization, and using a planner.",
    philosophy: "This lesson demystifies time management by presenting it as a concrete skill, not an innate talent. By providing a simple, visual system (the Eisenhower Matrix) and a structured planner, we give students a tool to reduce overwhelm and take control of their schedule, which is crucial for executive functioning development.",
    objectives: ["Differentiate between 'urgent' and 'important' tasks.", "Categorize a list of sample tasks using the Eisenhower Matrix.", "Input their own current assignments and personal commitments into a weekly planner template."],
    materials: ["Whiteboard or chart paper", "Handout: 'The Eisenhower Matrix (eisenhowerMatrix)'", "Handout: 'Weekly Planner & Chunking Central (weeklyPlanner)'", "A list of sample tasks projected on the board (e.g., 'Study for a test tomorrow,' 'Finish a project due in 3 weeks,' 'Reply to a friend's text,' 'Do laundry')."],
    techIntegration: ["Use a collaborative tool like Google Docs or a shared spreadsheet for the 'Brain Dump' so the whole class can see the volume of tasks.", "Introduce students to digital calendar apps like Google Calendar or Todoist as an alternative to a paper planner."],
    comprehensionQuestion: "Looking at your 'Brain Dump' list, explain how using the Eisenhower Matrix changes your perspective on what really needs your attention today versus what can wait. Why is it so dangerous to live entirely in Quadrant 1 (Urgent & Important)?",
    procedure: [
        { title: "Hook/Opener (5 min): Brain Dump",  
          steps: [
              "Teacher says: 'Take out a piece of paper. I'm going to give you 90 seconds to write down every single thing you can think of that you need to do this week. Schoolwork, chores, social plans, practice—everything. Go!'",
              "After the time is up, ask: 'Who wrote down more than 10 things? More than 20? How does looking at this giant list make you feel?' Validate feelings of being overwhelmed."
          ]  
        },  
        { title: "Direct Instruction (15 min): The Eisenhower Matrix",  
          steps: [
              "Teacher says: 'That feeling of being overwhelmed is normal when you have a long list. The secret is not to work harder, but to work smarter by prioritizing. We're going to use a tool called the Eisenhower Matrix.'",
              "Draw the four quadrants on the board. Explain each one clearly: ",
              "**Quadrant 1 (Urgent & Important - Do First):** 'These are fires you have to put out. Crises, deadlines. Example: Studying for a test that is TOMORROW.'",
              "**Quadrant 2 (Not Urgent & Important - Schedule):** 'This is the magic quadrant. This is where you work on your goals to prevent them from becoming fires. Example: Starting a project that's due in two weeks.'",
              "**Quadrant 3 (Urgent & Not Important - Delegate/Minimize):** 'These are other people's priorities, not yours. Interruptions. Example: A friend texts you for homework help on something they could look up themselves.'",
              "**Quadrant 4 (Not Urgent & Not Important - Delete):** 'These are time-wasters and distractions. Example: Scrolling on TikTok for an hour when you should be working.'"
          ]  
        },
        { title: "Formative Assessment: Check for Understanding",
          steps: [
              "Ask: 'What is the main difference between Quadrant 1 and Quadrant 2?' (Answer: Planning and proactivity). 'Why do we want to spend most of our time in Quadrant 2?' (Answer: To reduce stress and avoid future emergencies)."
          ]
        },
        { title: "Guided Practice (15 min): Categorize It!",  
          steps: [
              "Distribute the 'Eisenhower Matrix' handout.",
              "Teacher says: 'With your partner, I want you to take the list of tasks on the board and decide which quadrant each one belongs in. There might be some debate, and that's okay!'",
              "After a few minutes, review the answers as a class, discussing the reasoning for each placement."
          ]  
        },
        { title: "Wrap-up & Application (10 min)",  
          steps: [
              "Teacher says: 'Now, take out your own brain dump list from the beginning of class and the weekly planner handout. Your mission is to schedule your Quadrant 1 and Quadrant 2 tasks into your planner for this week.'",
              "Exit Ticket: 'What is one task you realized is important but not urgent (Quadrant 2) that you need to schedule time for?'"
          ]  
        }
    ],
    differentiation: [
        { for: "Neurodivergent Teachers & Students", strategy: "The matrix is a highly visual and structured tool, which is helpful for organizing thoughts. Providing a list of tasks to categorize reduces the cognitive load of generating them. Color-coding the quadrants can add another layer of visual support." },
        { for: "Students who are already organized", strategy: "Challenge them to estimate how much time each task will take and block out that specific amount of time in their planner." }
    ],
    homework: {
        assignment: "Fully complete your 'Weekly Planner & Chunking Central' handout for the upcoming week. Include at least three academic tasks and two personal or self-care tasks.",
        teacher_notes: "The goal is for students to create a realistic plan they can actually follow. Check for a balance between academic and personal tasks. This isn't about filling every minute, but about being intentional with their time. It's a key executive functioning practice."
    }
  },
  ch3: {
    title: "Chapter 3: Defeating the Monster Project",
    topic: "Breaking down large assignments into small, manageable steps ('chunking').",
    philosophy: "Procrastination is often a symptom of being overwhelmed. This lesson gives students a concrete, repeatable process to transform a daunting project into a simple to-do list, directly addressing executive functioning challenges with planning and task initiation.",
    objectives: ["Define 'chunking' as a strategy for project management.", "Apply the chunking method to a sample project.", "Create a 'chunked' plan for a real, current project from another class."],
    materials: ["Whiteboard", "Handout: 'Sample Project Description (sampleProject)'", "Student planners or the 'Weekly Planner & Chunking Central (weeklyPlanner)'"],
    techIntegration: ["Use a digital project management tool like Trello or Asana to demonstrate how chunking works visually with cards and lists.", "Students can use the 'Project Chunker' tool in the Student Hub to practice."],
    comprehensionQuestion: "Why does our brain often want us to procrastinate on 'Monster Projects'? Explain how the act of 'chunking' a project into tiny, non-threatening steps helps bypass that feeling of overwhelm and makes starting actually possible.",
    procedure: [
      { title: "Hook/Opener (5 min): The 'One Bite' Analogy", steps: ["Teacher holds up a large apple (or shows a picture). 'If I told you that you had to eat this entire apple in one bite, what would you say?' (Impossible, crazy). 'Right. But if I said you could eat it one bite at a time, over an hour, could you do it?' (Yes). 'A big project is just like this apple. Trying to do it all at once is impossible. Today, we learn how to take small bites.'"] },
      { title: "Direct Instruction (10 min): Teacher Think-Aloud", steps: ["Teacher models the 'Chunking a Project' script from the Teacher Modeling Scripts resource, using the Sample Project Description handout as the example on the board.", "Teacher explicitly lists out every conceivable step, no matter how small (e.g., '1. Open Google Docs', '2. Title the document', '3. Write the thesis statement'). Emphasize that the goal is to make the next step so small it's impossible *not* to do it."] },
      { title: "Guided Practice (20 min): Chunk It Together", steps: ["As a class, choose another project (e.g., 'Create a diorama for English class').", "Ask students to call out all the steps. Write them on the board as they are mentioned.", "Then, work together to put them in a logical order and group them into phases (e.g., 'Planning Phase,' 'Building Phase,' 'Writing Phase')."] },
      { title: "Independent Application (10 min): Your Turn", steps: ["Teacher says: 'Now, take out a real project or big assignment you have for another class. On a piece of paper, 'chunk it.' List at least 10 steps you will need to take to complete it.'", "Walk around and assist students, especially those who are struggling to identify the first step."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: Students must write the *very first chunk* of their project plan into their planner for that night's homework. 'Your only goal for tonight is to complete that one, tiny step.'"] }
    ],
    differentiation: [
      { for: "Students with executive function challenges", strategy: "Provide them with a pre-filled template for a common project type (like an essay) and have them fill in the specifics, rather than starting from scratch." },
      { for: "Advanced students", strategy: "Challenge them to not only chunk the project but also estimate the time required for each chunk and schedule all chunks into their planner." }
    ],
    homework: {
        assignment: "Complete the first two 'chunks' from the project plan you created in class. The goal is to build momentum.",
        teacher_notes: "This homework is designed to combat task-initiation paralysis. By making the first steps incredibly small, it helps students overcome the initial hurdle of starting. Check for completion, not perfection. The win is in the act of starting."
    }
  }
};
