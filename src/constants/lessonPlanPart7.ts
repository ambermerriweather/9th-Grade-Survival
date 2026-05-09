import { LessonPlan } from '../types';

export const lessonPlansPart7: Record<string, LessonPlan> = {
  ch12: {
    title: "Chapter 12: AI as Your Critical Thinking Co-Pilot",
    topic: "Ethical and effective use of AI tools for learning.",
    philosophy: "AI is a permanent part of the modern world. Banning it is futile. Instead, we must teach students to be the masters of the tool, not the other way around. This lesson focuses on using AI to deepen thinking, improve work, and maintain academic integrity.",
    objectives: ["Differentiate between ethical and unethical uses of AI in an academic context.", "Craft effective prompts to use AI as a brainstorming partner or tutor.", "Apply the 'A.I.D.E.' framework (Assess, Input, Deepen, Edit) to a given task."],
    materials: ["Projector with internet access to an AI tool (Gemini, ChatGPT, etc.)", "Handout: 'Your AI Co-Pilot Quick Guide (aiGuide)'", "Handout: 'The A.I.D.E. Framework (aideFramework)'"],
    techIntegration: ["The entire lesson is tech-integrated. The core activity involves live demonstration and student interaction with an AI tool."],
    comprehensionQuestion: "Explain the 'Hammer' analogy for AI. How can AI be used as a 'Critical Thinking Co-Pilot' to actually make you smarter, versus using it in a way that bypasses your learning and leads to academic dishonesty?",
    procedure: [
      { title: "Hook/Opener (5 min): Good Tool vs. Bad Use", steps: ["Teacher asks: 'Is a hammer a good tool or a bad tool?' (It's a good tool). 'Can you use it for a bad purpose, like breaking a window?' (Yes). 'AI is the same. It's a powerful tool. Our job is to learn how to use it for good, to make us smarter, not to cheat.'"] },
      { title: "Direct Instruction (15 min): Modeling Ethical AI Use", steps: ["Teacher projects an AI chat interface.", "Use the 'Modeling Ethical AI Use' script from the teacher resources. First, show a *bad* prompt ('Write an essay about Romeo and Juliet'). Discuss why this is plagiarism.", "Then, model a *good* prompt ('Act as a Socratic tutor. My thesis is that Friar Lawrence is the most responsible for the tragedy. Ask me questions to challenge my thesis.') Discuss the difference."] },
      { title: "Guided Practice (20 min): The A.I.D.E. Framework", steps: ["Distribute the A.I.D.E. handout.", "Give students a simple task: 'Improve this weak paragraph: *Romeo and Juliet is a sad play. A lot of people die. It was written by Shakespeare.*'", "Walk them through the A.I.D.E. framework as a class. A: Is this a good task for AI? (Yes, improving writing). I: What's our prompt? ('Help me make this paragraph more academic and detailed.'). D: What follow-up questions can we ask? E: How can we rewrite the AI's suggestion in our own voice?"] },
      { title: "Independent Application (5 min): Prompt Crafting", steps: ["Ask students to take a current assignment and craft one 'ethical' prompt they could use to get help from an AI. They should write it down."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'What is the most important thing to remember when using AI for schoolwork?'"] }
    ],
    differentiation: [
      { for: "Students who are hesitant with tech", strategy: "Pair them with a more confident student during the guided practice. Provide them with a list of pre-written 'good' prompts to choose from." },
      { for: "Advanced students", strategy: "Challenge them to use the 'counterargument' prompt from the AI Toolkit on one of their own essays and reflect on how the AI's feedback changed their thinking." }
    ],
    homework: {
        assignment: "Use an AI tool (at home or in the library) with the prompt you crafted in class. Fill out an 'AI Usage Log' from the Student Hub, documenting your prompt and what you learned from the interaction.",
        teacher_notes: "This assignment encourages accountability and metacognition. By logging their usage, students are more mindful of *how* they are using the tool. It also provides a great data point for you to see how they are engaging with AI."
    }
  },
  conclusion: {
    title: "Conclusion: You've Got This!",
    topic: "Synthesizing skills and creating a personalized final portfolio.",
    philosophy: "This final lesson is about metacognition and empowerment. Students reflect on their growth, codify what they've learned, and create a tangible product that proves to themselves—and helps others—that they have the skills to succeed. It transforms them from survivor to guide.",
    objectives: ["Reflect on personal growth in executive functioning and SEL skills over the term.", "Synthesize learned strategies into a personalized 'Survival Guide' portfolio.", "Present one key takeaway or piece of advice to their peers."],
    materials: ["Final Project Rubric from 'Assessment Rubrics'", "Student work from throughout the semester (planners, reflections, etc.)", "Poster board, digital presentation software, or other materials for the final project."],
    techIntegration: ["Students can choose to create their final portfolio as a Google Site, a Canva presentation, a short video, or other digital format.", "Use a tool like Padlet for the final 'Wall of Wisdom' activity."],
    comprehensionQuestion: "Looking back at the entire term, what is the #1 most important 'hidden curriculum' skill you've learned that you think will have the biggest impact on your future? Why is it more important to learn *how* to learn than to just memorize facts for a test?",
    procedure: [
      { title: "Hook/Opener (5 min): 'I Used To... Now I...'", steps: ["Teacher says: 'Think back to the first week of school. We're going to do a quick reflection. On an index card, complete this sentence: *I used to struggle with ____, but now I ____.*'", "Ask for a few volunteers to share, celebrating the growth."] },
      { title: "Direct Instruction (10 min): Final Project Overview", steps: ["Review the 'My Survival Guide' Portfolio project and the rubric in detail.", "Show a few high-quality (anonymous) examples from past years, if available.", "Emphasize that the goal is to create something genuinely useful for a rising 8th grader, using their own voice and experiences."] },
      { title: "Guided Practice / Work Time (25 min): Portfolio Workshop", steps: ["This time is dedicated for students to work on their final projects.", "Teacher circulates, acting as a guide and consultant. Ask questions like, 'What strategy are you most proud of learning?', 'How can you explain 'chunking' in a way an 8th grader would get it?', 'What visuals can you add to make this more engaging?'"] },
      { title: "Wrap-up & Wall of Wisdom (10 min)", steps: ["Give each student a sticky note.", "Teacher says: 'On this note, write the #1 most important piece of advice you would give to a new freshman. The one thing you wish you knew.'", "Have students come up and post their notes on a designated 'Wall of Wisdom' on the bulletin board. Read a few aloud to close out the class and the course."] }
    ],
    differentiation: [
      { for: "Students who struggle with organization", strategy: "Provide a digital or paper template for their portfolio with pre-made sections for each chapter/skill." },
      { for: "Students who are shy about presenting", strategy: "Allow them to present their key takeaway in a small group or directly to the teacher instead of the whole class. Offer options like recording a voiceover for a digital presentation." }
    ],
    homework: {
        assignment: "Finalize and submit your 'My Survival Guide' Portfolio. Be proud of the work you've done and the growth you've made!",
        teacher_notes: "This is the culminating assessment. The focus should be on celebrating student growth and the effort they put into synthesizing their learning. The final product is a testament to their journey from 'surviving' to 'thriving'."
    }
  }
};
