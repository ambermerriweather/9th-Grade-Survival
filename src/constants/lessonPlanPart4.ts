import { LessonPlan } from '../types';

export const lessonPlansPart4: Record<string, LessonPlan> = {
  ch6: {
    title: "Chapter 6: Communicating with Your Teachers",
    topic: "Self-advocacy, email etiquette, and asking for help.",
    philosophy: "Students often see teachers as intimidating figures rather than their greatest allies. This lesson demystifies professional communication and empowers students with the scripts and confidence they need to ask for help, clarify confusion, and build positive relationships with their instructors, a critical skill for high school and beyond.",
    objectives: ["Identify the key components of a professional email.", "Draft a clear, concise, and respectful email to a teacher for a common scenario.", "Role-play asking for help in person during or after class."],
    materials: ["Whiteboard or projector", "Handout: 'Anatomy of a Professional Email (emailEtiquette)'", "Several common scenarios (e.g., 'You were absent and need the work,' 'You don't understand a grade,' 'You need an extension on an assignment')."],
    techIntegration: ["Students can draft their emails in a shared Google Doc for peer or teacher feedback.", "Show a 'good vs. bad' email comparison on the projector."],
    comprehensionQuestion: "Why is the 'what I've already tried' step so important when emailing a teacher? Draft a response that shows you are taking responsibility for your own learning rather than just asking for a quick fix or an answer.",
    procedure: [
      { title: "Hook/Opener (5 min): Decode the Email", steps: ["Show an example of a poorly written student email on the projector (e.g., no subject, text-speak, demanding tone). Ask students, 'If you were the teacher, how would this email make you feel? What's missing?'"] },
      { title: "Direct Instruction (10 min): The Anatomy of an Email", steps: ["Distribute the 'Anatomy of a Professional Email' handout. Walk through each component: clear subject line, proper salutation, concise body, polite closing, and signature. Emphasize the 'what I've already done' step (e.g., 'I already checked the LMS and asked a friend...') as a sign of responsibility."] },
      { title: "Guided Practice (20 min): Email Workshop", steps: ["Put students in small groups. Assign each group one of the common scenarios.", "Their task is to collaboratively draft a perfect email based on the handout.", "Have each group share their drafted email, and offer feedback as a class."] },
      { title: "Discussion & Role-Play (10 min): Talking in Person", steps: ["Discuss the best times to approach a teacher (e.g., after class, during office hours, not as they're running to the restroom).", "Ask for two volunteers to role-play a student asking a teacher for help with a concept they don't understand. Coach them on phrases like, 'I'm a little confused about...' or 'Could you explain this in a different way?'"] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'What is the most important thing to remember when asking a teacher for help, either by email or in person?'"] }
    ],
    differentiation: [
      { for: "Students with social anxiety", strategy: "The email practice is a great scaffold. For the role-play, allow them to write out a script first. Never force a student to role-play in front of the class; small group or one-on-one is fine." },
      { for: "English Language Learners", strategy: "Provide them with several email templates they can adapt, rather than having them write from scratch." }
    ],
    homework: {
        assignment: "Find the name, email address, and office hours for ALL of your current teachers and write them down in one place (e.g., in your planner or a digital note).",
        teacher_notes: "This is an information-gathering task that sets them up for future success. It removes the barrier of 'I don't know how to contact them' when they eventually need help. It's a simple, practical step towards self-advocacy."
    }
  },
  ch7: {
    title: "Chapter 7: The Social Scene",
    topic: "Navigating friendships, conflict resolution, and peer pressure.",
    philosophy: "Social challenges can be more stressful for freshmen than academics. This lesson provides students with a concrete tool—'I-statements'—to handle conflict constructively and offers a framework for analyzing social situations, reinforcing the idea that social skills, like academic skills, can be learned and practiced.",
    objectives: ["Define the three parts of an 'I-statement' (I feel..., when you..., because...).", "Convert 'You-statements' (blaming) into 'I-statements' (expressing feelings).", "Apply the I-statement framework to common conflict scenarios."],
    materials: ["Whiteboard", "Handout: 'Conflict Scenarios (conflictScenarios)'", "Chart paper for brainstorming."],
    techIntegration: ["Use a tool like Padlet for students to anonymously post social challenges they're facing, which can then be used as discussion prompts.", "Show a short video clip from a TV show or movie depicting a conflict and have students analyze the communication."],
    comprehensionQuestion: "Why do 'You-statements' (like 'You always ignore me') usually make a conflict worse, whereas 'I-statements' (like 'I feel ignored when...') often lead to a resolution? Give an example of a conflict and show how an I-statement could change the tone of the conversation.",
    procedure: [
      { title: "Hook/Opener (5 min): 'You-Statements'", steps: ["Say the following statements to the class: 'You never listen to me.' 'You're always late.' 'You made me look stupid.' Ask: 'How do these statements make you feel?' (Defensive, angry, attacked). Explain that these are 'You-statements,' and they almost always make conflict worse."] },
      { title: "Direct Instruction (10 min): The Power of 'I-Statements'", steps: ["Introduce the 'I-statement' formula on the board: **I feel [your emotion] when you [the specific behavior] because [the impact on you].**", "Model converting the 'You-statements' from the opener. 'You never listen to me' becomes 'I feel frustrated when I'm interrupted because it makes me feel like my opinion doesn't matter.' Discuss why this is more likely to lead to a positive conversation."] },
      { title: "Guided Practice (15 min): Statement Conversion", steps: ["Provide a list of 'You-statements' (e.g., 'You always leave me out,' 'You ruined my project,' 'You broke your promise').", "In pairs, have students work to convert them into constructive 'I-statements.' Share and discuss the best examples as a class."] },
      { title: "Application (15 min): Scenario Work", steps: ["Distribute the 'Conflict Scenarios' handout.", "In small groups, have students choose one scenario and script out a short conversation where the protagonist uses an 'I-statement' to address the problem. If they're comfortable, have a few groups act out their short script."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'Think of a small, real-life conflict you've had recently. Write the 'I-statement' you *could have* used.' (Assure them this is private and will not be shared)."] }
    ],
    differentiation: [
      { for: "Students who have difficulty identifying emotions", strategy: "Provide a 'feelings wheel' or a list of emotion words to help them expand their vocabulary beyond 'mad' or 'sad'." },
      { for: "Students who find role-playing difficult", strategy: "Allow them to create a comic strip or write out the dialogue for the scenario instead of performing it." }
    ],
    homework: {
        assignment: "Pay attention to conversations around you this week (in real life, on TV). Notice one time a conflict was handled well and one time it was handled poorly. Be prepared to briefly describe what you observed.",
        teacher_notes: "This is an observation and analysis task. It helps students see these communication skills in a real-world context, making the classroom lesson more relevant. It also develops their social awareness."
    }
  }
};
