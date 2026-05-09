import { TeacherGuide } from '../types';

export const teacherGuideContent: TeacherGuide = {
    title: "Teacher's Guide: Full Course Overview",
    summary: "This guide provides a comprehensive overview of the 9th Grader's Unofficial Survival Guide curriculum, including its philosophy, educational alignment (SEL, Executive Functioning, AI Literacy), and core purpose of transitioning students from a survival to a thriving mindset.",
    sections: [
        {
            title: "Welcome to the Front Lines of Freshman Year",
            content: [
                "Hello, colleague. You’ve chosen to teach one of the most challenging, frustrating, and profoundly rewarding courses in the entire high school sequence: the 9th-grade transition. This isn’t just a class; it’s an orientation to a new world. The students walking into your room are caught between childhood and young adulthood, navigating a complex social ecosystem, academic rigor they’ve never experienced, and the daunting task of figuring out who they are.",
                "Our job? To give them a map and a compass."
            ]
        },
        {
            title: "Our Philosophy: From Surviving to Thriving",
            content: [
                "The 'Unofficial Survival Guide' is intentionally named. We meet students where they are—feeling overwhelmed and just trying to survive. But our core philosophy is to quickly pivot them from a mindset of survival to one of thriving. This curriculum is built on the belief that academic success is inextricably linked to personal well-being and practical skills."
            ]
        },
        {
            title: "Purpose & Alignment",
            content: [
                "This course is a high-impact intervention designed to explicitly teach the “hidden curriculum” of high school success. It directly aligns with key educational frameworks:",
                "🧠 **Social-Emotional Learning (SEL):** We integrate the five core CASEL competencies (Self-Awareness, Self-Management, Social Awareness, Relationship Skills, Responsible Decision-Making) into every unit. Students don't just learn about these skills; they practice them daily.",
                "**Executive Functioning (EF):** We target the core EFs that so many freshmen struggle with: planning, organization, time management, task initiation, working memory, and self-regulation. We move from abstract concepts to concrete, repeatable routines.",
                "🤖 **21st-Century Skills & AI Literacy:** We embrace the reality of our students' world. This curriculum teaches them to be critical thinkers, communicators, collaborators, and creators. Crucially, it positions Artificial Intelligence not as a threat to be banned, but as a powerful tool to be wielded ethically, responsibly, and effectively. We are preparing them for their future, not our past.",
                "This guide is your partner in this work. It’s built from real classroom experience, designed to be flexible, and infused with strategies that honor the whole student. Let’s get started."
            ]
        }
    ]
};

export const syllabusContent: TeacherGuide = {
    title: "Detailed Syllabus",
    content: `
[Your School Logo Here]
[Your High School Name]

**Course Title:** 9th Grader’s Unofficial Survival Guide (or [Official Course Name, e.g., Freshman Seminar, Skills for Success])

**Teacher:** [Your Name]
**Room:** [Your Room Number]
**Contact:** [Your Email], [Your Phone Number]
**Office Hours:** [Your Availability]

**Course Description:**
Welcome to high school! This course is your guide to navigating the academic, social, and personal challenges of 9th grade. We will focus on developing essential skills like time management, study strategies, organization, and effective communication. We will also explore how to build positive relationships, make responsible decisions, and use modern tools like AI ethically to support your learning. Our goal is to move beyond simply “surviving” high school to truly thriving in it.

**Core Learning Objectives:**
- Develop and apply executive functioning skills for academic success.
- 🧠 Cultivate self-awareness and self-management through reflective practices.
- Build positive relationship skills and practice effective self-advocacy.
- 🤖 Use digital tools, including Artificial Intelligence, safely, ethically, and productively.
- Navigate the social and academic structures of high school with confidence.

**Required Materials:**
- A 3-ring binder or dedicated notebook for this class.
- School-issued laptop/tablet and charger.
- Pens/pencils.
- Access to [School’s LMS, e.g., Google Classroom, Canvas].

**Grading Policy:**
This is a skills-based course. Your grade reflects your effort, participation, and growth.
- **40%:** Classwork & Participation (In-class activities, group discussions, active engagement)
- **30%:** Journal & Reflections (Weekly entries showing application of skills)
- **30%:** Projects & Final Portfolio (Demonstrating mastery of core skills)

**Classroom Expectations:**
1.  **Be Present:** This means more than just being in the room. Engage, listen, and contribute.
2.  **Be Respectful:** Honor the experiences and opinions of everyone in the room. We are a team.
3.  **Be Brave:** Try new things, ask for help, and share your struggles. This is a safe space to grow.

**Late Work Policy:** [Insert your school/personal policy here]
**Academic Integrity & AI Policy:**
Success in this course depends on YOU doing the thinking. We use AI as a 'Critical Thinking Co-Pilot'—meaning it can help you troubleshoot an idea, explain a concept, or suggest an outline. However, using AI to generate final text or answers without credit is a violation of academic integrity.
- **Level 1 (Brainstorming):** AI is a great partner for getting started.
- **Level 2 (Drafting):** You must show how you iterated with the AI and fact-checked its output.
- **Level 3 (Submission):** All final submissions must be in your own voice and include a brief AI Disclosure Statement if any AI tools were used during the process.

---
*I have read and understood the course syllabus and agree to uphold the standards of our learning community.*

**Student Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_
**Parent/Guardian Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_
`
};

export const coreInstructionalStrategies: TeacherGuide = {
    title: "Core Instructional Strategies",
    summary: "Best practices for delivering this curriculum effectively in a high school setting.",
    sections: [
        {
            title: "The 'I Do, We Do, You Do' Model",
            content: ["Every chapter follows this gradual release of responsibility. Start by modeling your own thinking (I Do), then practice as a class or in groups (We Do), and finally have students apply the skill to their own lives (You Do)."]
        },
        {
            title: "Real-World Integration",
            content: ["Always connect the Survival Guide skill to a current challenge in their other classes. If we are teaching note-taking, they should be taking notes on a video relevant to their Science or History class."]
        },
        {
            title: "Metacognitive Wrap-Ups",
            content: ["Spend the last 5 minutes of every class asking: 'How does what we did today make your life easier?' Help them see the immediate utility of executive functioning."]
        }
    ]
};

export const pacingGuideContent: TeacherGuide = {
    title: "Pacing Guide",
    guides: {
        '12-week': {
            title: "12-Week Comprehensive Course",
            headers: ["Week", "Topic", "Core Objective", "🧠 SEL / EF Skill", "Final Project Focus"],
            rows: [
                ["1", "Decoding High School (Intro)", "Navigate the new environment; establish routines.", "Self-Management: Organization", "Introduce Final Project concept."],
                ["2", "Your Brain is a Superpower (Ch. 1)", "Internalize Growth Mindset.", "Self-Awareness: Recognizing self-talk.", "Brainstorm potential 'survival tips'."],
                ["3", "Taming the Calendar (Ch. 2)", "Prioritize tasks.", "Responsible Decision-Making: Planning.", "Create a project timeline."],
                ["4", "Defeating the Monster Project (Ch. 3)", "Break down a large project.", "Executive Function: Task Initiation.", "Chunk the Final Project itself."],
                ["5", "Note-Taking for Every Brain (Ch. 4)", "Experiment with note-taking styles.", "Self-Awareness: Learning style.", "Draft the 'Organization' section."],
                ["6", "Active Learning & Studying Smart (Ch. 5)", "Use active recall.", "Self-Management: Metacognition.", "Draft the 'Study Skills' section."],
                ["7", "Communicating with Teachers (Ch. 6)", "Draft a professional email.", "Relationship Skills: Self-advocacy.", "Draft the 'Communication' section."],
                ["8", "The Social Scene (Ch. 7)", "Practice conflict resolution.", "Social Awareness: Empathy.", "Peer-review a section with a partner."],
                ["9", "Taking Care of You (Ch. 8)", "Create a 'Self-Care Menu'.", "Self-Management: Stress management.", "Draft the 'Well-being' section."],
                ["10", "Digital Citizenship (Ch. 9)", "Analyze a 'digital footprint'.", "Responsible Decision-Making: Ethics.", "Incorporate a 'Digital Smarts' tip."],
                ["11", "AI as Your Co-Pilot (Ch. 12)", "Use AI ethically for brainstorming.", "Executive Function: Tool use.", "Use AI to revise/edit a section."],
                ["12", "Putting It All Together (Conclusion)", "Synthesize skills into a portfolio.", "All SEL/EF Skills: Review.", "Finalize and present portfolio."]
            ]
        },
        '3-week': {
            title: "3-Week Beginning of Year Bootcamp",
            headers: ["Day", "Topic", "Objective", "Final Project Focus"],
            rows: [
              ["Mon", "Intro & Decoding High School", "Build community and navigate the new environment.", "Introduce project."],
              ["Tues", "Your Brain is Your Superpower", "Establish growth mindset belief.", "Brainstorm tips."],
              ["Wed", "Taming the Calendar", "Prioritization and task management.", "Outline project sections."],
              ["Thurs", "How to Read a Syllabus", "Use the syllabus as a tool.", "Add 'Syllabus' tip."],
              ["Fri", "Planner Power-Up", "Setup planners and binders.", "Draft 'Organization' section."]
            ]
        }
    }
};

export const curriculumOverview: TeacherGuide = {
    title: "Curriculum Overview: Mission & Philosophy",
    summary: "A high-level summary of why this course exists and the core beliefs that drive it.",
    sections: [
        {
            title: "The Mission: From Survival to Thriving",
            content: ["Freshman year is often treated as a gauntlet to survive. Our goal is to flip that script. We provide students with the explicit skills—the 'hidden curriculum'—that they need to move from feeling overwhelmed to feeling in control and empowered."]
        },
        {
            title: "Core Pillars",
            list: [
                "**Predictability as Safety:** Routines and systems reduce anxiety.",
                "**Metacognition:** Learning how we learn is just as important as the content itself.",
                "**Self-Advocacy:** Empowering students to own their education and their relationships with teachers.",
                "**Digital Empowerment:** Positioning AI and tech as extensions of our own critical thinking."
            ]
        }
    ]
};
