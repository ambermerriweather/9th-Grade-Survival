import { LessonPlan } from '../types';

export const allLessonPlans: Record<string, LessonPlan> = {
  intro: {
    title: "Introduction: Welcome to High School!",
    topic: "Setting the stage, acknowledging the transition, and building a supportive classroom community.",
    philosophy: "This first lesson is not about academic skills but about emotional and social readiness. The goal is to validate students' feelings—both the excitement and the anxiety—and establish the classroom as a safe base for the year ahead.",
    objectives: ["Identify and articulate one personal hope and one personal fear related to starting high school.", "Contribute to the creation of a shared set of class norms for a supportive and respectful environment.", "Recognize that their feelings about this transition are shared by their peers, fostering a sense of community."],
    materials: ["Whiteboard or chart paper", "Handout: 'Hopes & Fears' T-Chart (welcomeSheet)", "Index cards or small sticky notes"],
    techIntegration: ["Use a word cloud generator like Mentimeter or Slido for the opener to visually represent the class's feelings.", "Use a collaborative digital whiteboard like Jamboard or Miro for the 'Hopes & Fears' activity, allowing for anonymous contributions."],
    comprehensionQuestion: "Reflecting on the 'Hopes & Fears' activity, why is it important to realize that many of your peers share the same anxieties about high school as you do? How does this understanding change the way you might approach your first few weeks of school and your interactions with new classmates?",
    procedure: [
        { title: "Hook/Opener (5 min): One-Word Whip-Around",  
          steps: [
              "Teacher says: 'Welcome to high school! This is a huge moment, and people feel a lot of different things. We're going to do a quick whip-around. In one word, how are you feeling about being here right now? There are no wrong answers—excited, nervous, tired, hungry, all are valid.'",
              "Go around the room and have each student share their word. If using tech, have them submit to the word cloud and display the results. Acknowledge the variety of feelings shown."
          ]  
        },  
        { title: "Direct Instruction & Discussion (15 min): Normalizing the Experience",  
          steps: [
              "Teacher says: 'Look at all these different feelings. This is completely normal. High school is a big change from middle school. What are some of the differences you're already noticing or expecting?'",
              "Facilitate a brief discussion. Guide them to mention things like changing classes, more students, more homework, GPA, etc. Validate their observations.",
              "Teacher says: 'It can feel like you're trying to navigate a new world on your own. The purpose of this class is to be your home base—your survival guide. We're going to learn the 'unwritten rules' of high school together so you can feel confident and successful.'"
          ]  
        },  
        { title: "Guided Practice / Activity (20 min): 'Hopes & Fears' Community Chart",  
          steps: [
              "Distribute the 'Hopes & Fears' T-Chart handout or have students create one.",
              "Teacher says: 'On this sheet, I want you to privately write down at least two hopes you have for high school—what are you excited about? And at least two fears—what are you nervous about? This is for your eyes only.' Give 5-7 minutes of quiet writing time.",
              "Next, hand out sticky notes. Teacher says: 'Now, on these sticky notes, I want you to anonymously write down ONE hope and ONE fear from your list. Don't put your name on it. When you're done, come place them on the board in the 'Hopes' or 'Fears' section.'",
              "As students post their notes, begin grouping similar themes. Briefly discuss the common themes that emerge. (e.g., 'A lot of us are excited about making new friends, and a lot of us are worried about getting lost or the homework being too hard.')"
          ]  
        },
        { title: "Formative Assessment: Check for Understanding",
          steps: [
              "Teacher asks: 'Based on our activity, what's one thing we can say is true for almost everyone in this room?' (Guide them to the answer: 'We are not alone in our feelings.')"
          ]
        },
        { title: "Wrap-up & Exit Ticket (5 min)",  
          steps: [
              "Teacher says: 'The main thing I want you to take away today is that you are not alone in this. Whatever you're feeling, someone else in this room is likely feeling it too. Our job this year is to support each other.'",
              "Exit Ticket: On an index card, have students answer: 'What is one way we can make sure everyone feels supported in this class this year?' (Collect these to create class norms next time)."
          ]  
        }
    ],
    differentiation: [{for: "Neurodivergent Teachers & Students", strategy: "The lesson is broken into short, timed chunks with varied activities (individual writing, movement, group discussion) to maintain focus and engagement. The anonymous sticky note method removes the pressure of speaking for those with social anxiety."}, {for: "Students needing support", strategy: "Provide sentence starters for the Hopes & Fears chart, such as 'I am excited to...' or 'I am nervous about...'" }],
    homework: {
        assignment: "Ask one trusted adult (family member, coach, etc.) or an older student for their #1 piece of advice for surviving and thriving in ninth grade. Write it down and be prepared to share it in our next class.",
        teacher_notes: "The goal is to bridge the gap between home/community and school, and to show students that they have a support network. This is a low-stakes first assignment that encourages conversation and wisdom-gathering rather than academic performance."
    }
  },
  ch1: {
    title: "Chapter 1: Your Brain is Your Superpower",
    topic: "Understanding growth mindset vs. fixed mindset and the basics of neuroplasticity.",
    philosophy: "This lesson empowers students by teaching them that their intelligence is not fixed. By understanding that their brain is like a muscle that can grow stronger with effort, they can reframe challenges as opportunities for growth, which is a foundational skill for resilience.",
    objectives: ["Define growth mindset and fixed mindset in their own words.", "Explain the concept of neuroplasticity using a simple analogy (e.g., 'pathways in the brain').", "Identify one area where they currently have a fixed mindset and reframe it into a growth mindset statement."],
    materials: ["Whiteboard or chart paper", "Handout: 'Mindset Sort (mindsetSort)'", "A short (2-3 minute) video clip explaining neuroplasticity (search 'neuroplasticity for kids' on YouTube)."],
    techIntegration: ["Use a tool like Kahoot! or Blooket for a fun, competitive 'Mindset Sort' game instead of the handout.", "Have students use a simple graphic design tool like Canva to create a poster with their reframed growth mindset statement."],
    comprehensionQuestion: "Explain the concept of neuroplasticity using the 'grassy field' analogy or an analogy of your own. How does knowing that your brain can physically change and grow stronger impact how you feel about academic subjects that you currently find 'impossible' or 'too hard'?",
    procedure: [
        { title: "Hook/Opener (5 min): The Impossible Task",  
          steps: [
              "Teacher says: 'I have a challenge for you. I want you to try patting the top of your head with one hand, and at the same time, rubbing your stomach in a circle with the other. Go!'",
              "Let them struggle for a minute. Acknowledge the difficulty and laughter. Teacher asks: 'What was the first thought that went through your head when you tried this? Was it 'I can't do this,' or 'This is hard, let me figure it out'?' This introduces the core idea of mindset."
          ]  
        },  
        { title: "Direct Instruction (10 min): Meet Your Brain",  
          steps: [
              "Teacher says: 'That first thought you had is an example of your mindset. Let's define two types.' Write 'Fixed Mindset' and 'Growth Mindset' on the board.",
              "Explain: 'A **fixed mindset** is the belief that your intelligence and talents are just fixed traits. You're either good at something or you're not. A **growth mindset** is the belief that your abilities can be developed through dedication and hard work. Your brain is like a muscle—the more you use it, the stronger it gets.'",
              "Show the short video on neuroplasticity. After the video, explain the concept using an analogy: 'Think of your brain like a grassy field. When you learn something new, you're walking a new path. The first time, it's hard. But the more you practice, the more you walk that path, and it becomes clearer and easier to follow. That's your brain building a new connection. That's neuroplasticity.'"
          ]  
        },
        { title: "Formative Assessment: Check for Understanding",
          steps: [
              "Ask students to turn to a partner and explain the 'grassy field' analogy in their own words. Listen for understanding as you walk around."
          ]
        },
        { title: "Guided Practice (20 min): Mindset Sort",  
          steps: [
              "Distribute the 'Mindset Sort' handout or launch the Kahoot! game.",
              "Teacher says: 'We're going to look at some common thoughts students have. Your job is to decide if each one is an example of a fixed mindset or a growth mindset.'",
              "Go through the statements one by one. After each one, briefly discuss *why* it fits the category. For fixed mindset statements, ask the class to help you rephrase it into a growth mindset statement. (e.g., 'I'm bad at math' becomes 'I find math challenging, so I will need to use different strategies to improve.')"
          ]  
        },
        { title: "Wrap-up & Exit Ticket (10 min)",  
          steps: [
              "Teacher says: 'Everyone has a mix of both mindsets. The goal isn't to be perfect, but to notice when our fixed mindset is showing up and try to shift it.'",
              "Exit Ticket: 'On an index card, write down one area (a class, a hobby) where you have a fixed mindset. Then, rewrite that thought as a growth mindset statement. You do not have to share this with anyone.'"
          ]  
        }
    ],
    differentiation: [
        { for: "Neurodivergent Teachers & Students", strategy: "The lesson combines visual (video), auditory (lecture), and kinesthetic (sorting activity) elements. The use of clear analogies and private reflection time makes abstract concepts more accessible and less intimidating." },
        { for: "Students needing support", strategy: "During the Mindset Sort, provide a 'cheat sheet' with the definitions of fixed and growth mindset." }
    ],
    homework: {
        assignment: "For the next week, be a 'Mindset Detective.' Your mission is to listen for fixed mindset statements from friends, family, or characters in shows/movies. Write down at least two examples you hear and then rewrite them as growth mindset statements.",
        teacher_notes: "This assignment encourages students to apply their learning in a real-world context. It's about observation, not judgment. The key is for them to recognize fixed mindset language and practice the cognitive skill of reframing it."
    }
  }
};
