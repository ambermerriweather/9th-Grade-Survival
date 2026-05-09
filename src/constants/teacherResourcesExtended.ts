import { TeacherGuide } from '../types';

export const implementationNotesContent: TeacherGuide = {
    title: "Implementation Notes & Strategies",
    summary: "Practical, actionable strategies for classroom management, differentiation, and trauma-informed practices.",
    sections: [
        {
            title: "💡 Pro Tip",
            content: ["Your energy sets the tone. On day one, share a brief, honest story about your own freshman year struggles. Vulnerability builds trust faster than anything else."]
        },
        {
            title: "Practical Classroom Tips",
            list: [
                "**Seating Chart:** Create a \"home base\" for the first month, then switch every 4-6 weeks.",
                "**Start with a Win:** Begin each class with a quick, low-stakes activity.",
                "**Brain Breaks:** Plan for a 2-3 minute brain break in the middle of a 50-minute class."
            ]
        },
        {
            title: "🆘 Trauma-Informed Practices",
            list: [
                "**Predictability:** Post a daily agenda. Routine is safety.",
                "**Choice & Control:** Offer small choices wherever possible.",
                "**Strength-Based Language:** Frame feedback around growth, not deficits."
            ]
        }
    ]
};

export const assessmentRubricsContent: TeacherGuide = {
    title: "Assessment Rubrics",
    rubrics: [
        {
            title: "Weekly Journal/Reflection Rubric (10 points)",
            headers: ["Category", "Exemplary (4 pts)", "Proficient (3 pts)", "Developing (2 pts)", "Emerging (1 pt)"],
            rows: [
                ["Prompt", "Addresses all parts with depth.", "Addresses all parts.", "Addresses most parts.", "Minimally addresses."],
                ["Application", "Specific, concrete examples.", "Clear example.", "Application is unclear.", "No connection."],
                ["Reflection", "Genuine self-awareness.", "Reflects thoughtfully.", "Superficial or brief.", "No reflection."],
                ["Effort", "Complete with clear effort.", "Complete.", "Mostly complete.", "Incomplete."]
            ]
        }
    ]
};

export const communicationTemplatesContent: TeacherGuide = {
    title: "Parent Communication Templates",
    summary: "Copy-and-paste templates to streamline communication with parents and guardians throughout the term.",
    templates: [
        {
            title: "Introductory Email (Start of Term)",
            subject: "A Partnership for 9th Grade Success",
            body: [
                "Dear [Parent/Guardian Name],",
                "My name is [Your Name], and I am thrilled to be your child’s teacher for [Course Name] this year.",
                "This course is designed as a 'survival guide' for 9th grade. We won't just cover academic content; we are equipping students with the 'hidden curriculum'—essential organization, time management, and self-advocacy skills.",
                "I believe that communication is key to student success. I will be sending regular updates about what we are working on. I look forward to a fantastic semester with [Student Name].",
                "Best regards,",
                "[Your Name]"
            ]
        },
        {
            title: "The 'Positive Pivot' (Growth Mindset Update)",
            subject: "Celebrating [Student Name]'s Growth Mindset!",
            body: [
                "Dear [Parent/Guardian Name],",
                "I wanted to share a quick 'win' from class today. [Student Name] showed incredible persistence when tackling a difficult task. Instead of giving up, they [insert specific positive behavior, e.g., asked for help, tried a different strategy].",
                "This is exactly the 'Growth Mindset' we are cultivating in this course. It's wonderful to see them recognizing that their effort directly leads to results.",
                "Thank you for supporting this mindset at home!",
                "Best,",
                "[Your Name]"
            ]
        },
        {
            title: "AI Policy Announcement",
            subject: "Classroom Update: Our Approach to AI Literacy",
            body: [
                "Dear Families,",
                "As part of our commitment to preparing students for the future, we are integrating AI Literacy into our curriculum this term. Our goal is to teach students how to use AI tools ethically, critically, and as a support for their own learning—not as a shortcut.",
                "Our classroom policy is built on transparency. Students are encouraged to use AI for brainstorming and tutoring, but all final submissions must be their own original work and include an 'AI Disclosure Statement' if tools were used.",
                "You can find our full AI Policy in the Student Hub under the 'AI Toolkit' section. Please feel free to reach out with any questions.",
                "Sincerely,",
                "[Your Name]"
            ]
        },
        {
            title: "Missing Work Shout-Out (Encouragement)",
            subject: "Check-in: [Student Name]'s Progress in the Survival Guide",
            body: [
                "Hi [Parent/Guardian Name],",
                "I'm writing just to do a quick check-in. [Student Name] has been doing great with our class discussions, but I noticed a couple of missing assignments [list them].",
                "Since this course is all about building habits, I'd love to help them get these back on track before they feel 'Monster Project' energy. [Student Name], if you're seeing this, come find me during office hours and we'll chunk these out together!",
                "Best,",
                "[Your Name]"
            ]
        },
        {
            title: "Positive Referral / Student of the Week",
            subject: "Excellence Alert! [Student Name] is Crushing 9th Grade",
            body: [
                "Dear [Parent/Guardian Name],",
                "I am thrilled to inform you that [Student Name] was selected as our 'Student of the Week' for their exceptional [mention skill, e.g., self-advocacy / leadership / growth mindset].",
                "They have been a consistent role model in our classroom community and have shown incredible progress in owner their education.",
                "We are so lucky to have them in our class!",
                "Warmly,",
                "[Your Name]"
            ]
        }
    ]
};

export const socraticSeminarGuide: TeacherGuide = {
    title: "Facilitating Socratic Seminars",
    summary: "A guide for using structured dialogue to build social awareness and critical thinking.",
    sections: [
        {
            title: "The Setup",
            content: ["Arrange the desks in a circle. Every student should be able to see every other student. This isn't a debate; it's a collective search for understanding."]
        },
        {
            title: "The Ground Rules",
            list: [
                "Refer to the text (or our lesson notes).",
                "Ask questions of each other, not just the teacher.",
                "It's okay to disagree, but do it respectfully ('I hear what you're saying, but I see it differently because...').",
                "Invite quiet voices into the conversation."
            ]
        },
        {
            title: "Seed Questions",
            list: [
                "What's one thing from this chapter that changed your mind about high school?",
                "If you could tell your 8th-grade self one thing, what would it be?",
                "Which skill that we've learned so far feels like the hardest to master, and why?"
            ]
        }
    ]
};

export const aiLiteracyToolkitContent: TeacherGuide = {
    title: "🤖 AI Literacy Teacher Toolkit",
    summary: "Framework and resources for teaching students how to use AI ethically and effectively.",
    sections: [
        {
            title: "💡 Recommended Classroom AI Policy",
            content: ["**\"AI is a calculator for writing and thinking. You may use it for brainstorming, outlining, and checking for clarity. You may NOT use it to generate final text that you submit as your own.\"**"]
        },
        {
            title: "Advanced Prompt Library",
            list: [
                "**For Brainstorming:** \"Act as a Socratic tutor. Ask me three questions to help me narrow my thesis.\"",
                "**For Studying:** \"Generate 10 quiz questions based on these notes I pasted.\""
            ]
        },
        {
            title: "Learning Support vs. Academic Dishonesty",
            content: ["It's important to distinguish between using AI as a tool for learning and using it to bypass the learning process entirely."],
            list: [
                "**✅ Learning Support (Brainstorming/Tutoring):** Using AI to explain a complex topic in simpler terms, asking it to generate practice questions, or using it to help organize your existing thoughts into an outline.",
                "**❌ Academic Dishonesty (Copy-Paste/Ghostwriting):** Asking AI to write your entire essay, using it to generate answers for a quiz, or submitting AI-generated text as your own work without disclosure or significant original contribution."
            ]
        },
        {
            title: "Ethical AI Checklist for Students",
            content: ["Before using AI for an assignment, students should ask themselves these five questions to ensure they are using the tool ethically and with integrity."],
            list: [
                "**1. Does this violate the teacher's policy?** (DO: Double-check the syllabus or assignment sheet. DON'T: Assume AI is allowed just because it's available.)",
                "**2. Am I bypassing the 'Thinking' stage?** (DO: Use AI to get past writer's block or organize notes. DON'T: Let AI come up with the original argument or thesis for you.)",
                "**3. Have I verified the facts?** (DO: Fact-check every claim AI makes using a reliable source. DON'T: Trust AI to be 100% accurate, especially with specific dates or data.)",
                "**4. Is the final product in my own voice?** (DO: Rewrite AI summaries in your own words. DON'T: Copy and paste text directly into your final submission.)",
                "**5. Am I being transparent?** (DO: Include an AI disclosure statement if required. DON'T: Hide the fact that you used AI as a tool during your process.)"
            ]
        }
    ]
};

export const sampleAIPolicies: TeacherGuide = {
    title: "Sample AI Usage Policies",
    summary: "Examples of clear and effective AI usage policies that you can adapt for your classroom.",
    sections: [
        {
            title: "The 'Strict' Approach (Beginner Bloom's)",
            list: ["**Policy:** Generative AI is prohibited unless explicitly stated for a specific assignment. All work must be the original product of the student. Use of AI without permission will be treated as academic dishonesty."]
        },
        {
            title: "The 'Collaborative' Approach (Balanced)",
            list: ["**Policy:** You are encouraged to use AI as a brainstorming partner, a tutor for explaining concepts, and for structural outlining. However, the final writing and critical analysis must be your own. Any significant AI contribution must be cited in an 'AI Disclosure Statement' included with your work."]
        },
        {
            title: "The 'Exploratory' Approach (Advanced)",
            list: ["**Policy:** AI is integrated into this course as a primary tool. You will be graded on your ability to iterate with the AI, the quality of your prompting, and your ability to critically evaluate and fact-check AI output. Transparency is paramount—keep an 'audit log' of your AI interactions for major projects."]
        }
    ]
};

export const teacherModelingScriptsContent: TeacherGuide = {
    title: "Teacher Modeling Scripts",
    summary: "Word-for-word scripts to help you model executive functioning and growth mindset in real-time.",
    sections: [
        {
            title: "Modeling: Thinking Aloud about Mistakes",
            content: [
                "**Scenario:** You realize you made a mistake on a worksheet or on the board.",
                "**Script:** 'Oh, wait everyone, look here. I just noticed I made a mistake in this calculation. My first instinct is to feel a little embarrassed and move on quickly. But let’s pause. My brain just hit a 'Growth Point.' I thought it was X, but it’s actually Y. I’m going to circle this to remind myself why I made that error. This is a good thing—it means I’m learning too!'"
            ]
        },
        {
            title: "Modeling: Prioritization with a Planner",
            content: [
                "**Scenario:** Projecting your own calendar/planner for the class.",
                "**Script:** 'I want to show you how I’m handling my week. I have three big things due, plus a faculty meeting. I'm feeling a little 'Monster Project' energy. So, I’m marking this one as my 'A' task—the first thing I do. These other two are 'B' tasks. By saying this out loud, I'm taking the power away from the stress and giving it to my plan.'"
            ]
        }
    ]
};

export const interventionStrategiesContent: TeacherGuide = {
    title: "Intervention & Support Strategies",
    summary: "Tiered strategies for students who are struggling with transition or specific skills.",
    sections: [
        {
            title: "Tier 1: Universal Supports (All Students)",
            list: [
                "Post a visual timer during all independent work.",
                "Provide a 'Done' box for physical handouts to reduce losing papers.",
                "Use the 'Three Before Me' rule (check the board, your notes, and a peer before asking the teacher)."
            ]
        },
        {
            title: "Tier 2: Targeted Interventions (Small Groups)",
            list: [
                "Weekly 'Binder Reset' sessions for students struggling with organization.",
                "Guided 'Project Chunking' workshops for students with ADHD or task initiation issues.",
                "Individualized 'Self-Advocacy' role-play during office hours."
            ]
        }
    ]
};

export const aiIntegrationTechniquesContent: TeacherGuide = {
    title: "Integrating AI into the Curriculum",
    summary: "Practical tools and methods for bringing AI literacy into your subject area.",
    sections: [
        {
            title: "The 'AI-Assisted' Assignment Spectrum",
            content: ["Think of AI integration as a spectrum rather than an all-or-nothing choice."],
            list: [
                "**Level 1: AI as a Feedback Loop.** Students write a draft, then ask AI to identify the three weakest arguments or suggest structural improvements.",
                "**Level 2: AI as a Perspective Generator.** Students ask AI to 'Act as a scientist from the 1800s' and explain their view on a current discovery, then critique the AI's response.",
                "**Level 3: AI as a Technical Scaffold.** Students who struggle with coding or complex formulas use AI to generate the base logic so they can focus on higher-level problem solving."
            ]
        },
        {
            title: "Tools for the Classroom",
            list: [
                "**Prompt Engineering Challenges:** Have students compete to see who can get the AI to generate the most accurate summary of a difficult text in under 100 words.",
                "**AI Scavenger Hunt:** Give students a set of AI-generated 'facts' about a historical event and challenge them to find which two are actually hallucinations using their textbooks.",
                "**The 'Human vs. AI' Debate:** Have a student-led debate where one side uses AI-generated arguments and the other uses human-researched ones. Discuss the differences in nuance and empathy."
            ]
        },
        {
            title: "Best Practices for Teachers",
            list: [
                "**Live Modeling:** Project your screen and demonstrate how *you* use AI to brainstorm lesson ideas or draft emails, modeling the 'A.I.D.E.' framework out loud.",
                "**Audit Logs:** For major projects, require students to submit a brief 'AI Audit Log' detailing what prompts they used and how they verified the output.",
                "**Focus on Process:** Grade the 'Process' (the iteration with the AI) as much as the 'Product' to discourage one-click submissions."
            ]
        }
    ]
};
