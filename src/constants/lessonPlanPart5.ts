import { LessonPlan } from '../types';

export const lessonPlansPart5: Record<string, LessonPlan> = {
  ch8: {
    title: "Chapter 8: Taking Care of Your #1 Asset: You!",
    topic: "Stress management, sleep, and the importance of self-care.",
    philosophy: "Students cannot learn effectively if they are exhausted and overwhelmed. This lesson reframes self-care not as an indulgence, but as a critical and non-negotiable component of academic success. It provides students with a toolkit of practical, accessible strategies to manage stress and prevent burnout.",
    objectives: ["Identify at least three personal stressors.", "Explain the impact of sleep deprivation on learning and mood.", "Create a personalized 'Self-Care Menu' with strategies for different situations."],
    materials: ["Whiteboard or chart paper", "Handout: 'My Self-Care Menu (selfCareMenu)'", "Sticky notes."],
    techIntegration: ["Introduce students to mindfulness or meditation apps like Calm or Headspace.", "Use a polling tool like Slido to anonymously ask, 'On average, how many hours of sleep did you get last night?' to visualize the class data and start a discussion."],
    comprehensionQuestion: "Why is self-care often the first thing students give up when they are busy or stressed, and why is this actually the worst strategy for academic success? Explain how your Brain's 'battery' works and why you can't just 'power through' without rest.",
    procedure: [
      { title: "Hook/Opener (5 min): Stress Signals", steps: ["Ask students: 'How does your body tell you that you're stressed?' Brainstorm a list on the board (e.g., headache, can't focus, irritable, stomach ache). Normalize these physical responses and explain that they are important signals to pay attention to."] },
      { title: "Direct Instruction (10 min): The Big Three - Sleep, Fuel, Movement", steps: ["Briefly discuss the science behind why self-care works:", "**Sleep:** 'Your brain is like a phone. It needs to recharge every night. During sleep, your brain files away important information from the day. Less than 8 hours means you're starting the day on low battery.'", "**Fuel & Movement:** 'Your brain needs good food and oxygen to work. Even a 10-minute walk can improve focus and mood.'"] },
      { title: "Guided Practice (20 min): Self-Care Menu", steps: ["Distribute the 'My Self-Care Menu' handout.", "Explain the categories: **5-Minute Fixes** (quick resets for when you're stressed at school), **30-Minute Resets** (for after school), and **Weekend Recharge** (for deeper rest).", "As a class, brainstorm examples for each category and write them on the board (e.g., 5-min: listen to one song, step outside for fresh air; 30-min: take a walk, call a friend; Weekend: watch a movie, spend time in nature).", "Give students 10 minutes to fill out their own menus with activities they personally enjoy."] },
      { title: "Sharing & Discussion (10 min): What Works for You?", steps: ["Ask students to share one idea from their menu that they think others might like. This helps build a collective toolkit of ideas."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'What is one '5-Minute Fix' from your menu that you will try the next time you feel overwhelmed at school?'"] }
    ],
    differentiation: [
      { for: "Students who have trouble brainstorming", strategy: "Provide a pre-filled list of 20-30 self-care ideas and have them circle the ones they like to add to their menu." },
      { for: "Students with high stress or anxiety", strategy: "This lesson can be a great time to remind them of school resources like counselors or social workers and normalize seeking professional help." }
    ],
    homework: {
        assignment: "Try at least one activity from your Self-Care Menu this week. In your journal, write a short reflection on how it made you feel.",
        teacher_notes: "The purpose is for students to experience the benefits of proactive self-care. The reflection is key. Did they notice a difference? The goal is to build the habit of checking in with themselves."
    }
  },
  ch9: {
    title: "Chapter 9: Digital Citizenship",
    topic: "Understanding your digital footprint and online responsibilities.",
    philosophy: "Students live a significant portion of their lives online, but often lack explicit instruction on the permanence and consequences of their digital actions. This lesson frames digital citizenship not as a list of 'don'ts,' but as a set of skills for building a positive online identity and navigating the digital world safely and ethically.",
    objectives: ["Define 'digital footprint' in their own words.", "Analyze a scenario to identify potential long-term consequences of an online post.", "Identify three strategies for building a positive digital footprint."],
    materials: ["Projector", "Handout: 'Digital Citizenship Scenario (digitalCitizenship)'", "Chart paper."],
    techIntegration: ["Use an incognito browser window to Google a well-known, non-controversial celebrity to show what a digital footprint looks like.", "Show the Common Sense Media video on digital footprints."],
    comprehensionQuestion: "Explain the 'Digital Tattoo' analogy in your own words. Why should you consider your future self (the you of 5 or 10 years from now) before posting or commenting something online today, even if it feels private or temporary?",
    procedure: [
      { title: "Hook/Opener (5 min): The Tattoo Analogy", steps: ["Ask students: 'What is a tattoo? Is it easy to get rid of?' Explain: 'Everything you post online—a comment, a picture, a 'like'—is like a tiny digital tattoo. It creates a permanent picture of who you are that can be very hard to erase. This is your digital footprint.'"] },
      { title: "Direct Instruction (10 min): Positive vs. Negative Footprints", steps: ["On the board, create two columns: 'Positive Footprint' and 'Negative Footprint.'", "Brainstorm examples for each. Positive: posting about volunteer work, sharing an academic achievement, creating positive art/music. Negative: cyberbullying, sharing inappropriate photos, complaining about a job/teacher.", "Discuss who might see this footprint in the future (college admissions, coaches, future employers)."] },
      { title: "Guided Practice (20 min): Scenario Analysis", steps: ["Distribute the 'Digital Citizenship Scenario' handout.", "Read the scenario aloud as a class.", "In small groups, have students discuss and answer the questions. Emphasize that there are no perfect answers, but the goal is to think critically about the situation.", "Facilitate a whole-class discussion, having groups share their reasoning."] },
      { title: "Application (10 min): Building a Better Footprint", steps: ["Challenge students to brainstorm three concrete actions they could take this week to build a more positive digital footprint. (e.g., 'Follow a museum on Instagram,' 'Post a supportive comment on a friend's achievement,' 'Share an interesting article about a hobby.')."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["The 'Think Before You Post' rule: 'Before you post, ask yourself: Is it True? Is it Helpful? Is it Inspiring? Is it Necessary? Is it Kind?'", "Exit Ticket: 'What is one thing you will do differently online after today's lesson?'"] }
    ],
    differentiation: [
      { for: "Students with significant social media presence", strategy: "Encourage them to do a 'self-audit' of their own accounts and reflect on whether their footprint aligns with their future goals." },
      { for: "Students with limited online access", strategy: "Focus the discussion on other aspects of digital citizenship, like email communication and how to evaluate the credibility of websites." }
    ],
    homework: {
        assignment: "Find an example of someone (a celebrity, an activist, an artist) who you think has a positive digital footprint. Be prepared to explain why.",
        teacher_notes: "This assignment encourages students to find positive role models in the digital space. It shifts the focus from fear-based warnings to aspirational examples of how to use online platforms for good."
    }
  }
};
