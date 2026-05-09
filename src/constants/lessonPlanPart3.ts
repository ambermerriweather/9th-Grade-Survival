import { LessonPlan } from '../types';

export const lessonPlansPart3: Record<string, LessonPlan> = {
  ch4: {
    title: "Chapter 4: Note-Taking for Every Brain",
    topic: "Exploring various note-taking methods to find a personal fit.",
    philosophy: "There is no single 'best' way to take notes. This lesson exposes students to multiple research-backed methods, empowering them to move beyond simple transcription and find a system that actively helps their brain process and retain information.",
    objectives: ["Identify and describe at least three different note-taking methods (e.g., Cornell, Outlining, Mind Mapping).", "Practice one new note-taking method during a short lecture or video.", "Analyze which note-taking style might work best for different subjects."],
    materials: ["Whiteboard or projector", "Handouts illustrating Cornell notes, outlining, and mind mapping.", "A short, engaging video (5-7 min) on a high-interest topic (e.g., from TED-Ed or National Geographic)."],
    techIntegration: ["Introduce digital note-taking apps like Notion, OneNote, or GoodNotes.", "Show how digital tools can make mind mapping (e.g., Miro, Coggle) or outlining easier."],
    comprehensionQuestion: "Compare and contrast two note-taking methods we discussed today (e.g., Cornell vs. Mind Mapping). In what specific subject or scenario would one be more effective than the other, and why should you avoid just writing down everything a teacher says word-for-word?",
    procedure: [
      { title: "Hook/Opener (5 min): 'What's Wrong With This?'", steps: ["Show students a picture of a notebook page filled with dense, unorganized, single-color text. Ask, 'What's wrong with these notes? Would this be easy to study from? Why or why not?' Guide them to identify issues like lack of hierarchy, no key terms, and cognitive overload."] },
      { title: "Direct Instruction (15 min): A Tour of Note-Taking", steps: ["Briefly introduce three methods using the handouts/slides:", "**Outlining:** Traditional, hierarchical structure. Good for logical, linear subjects like history.", "**Cornell Method:** Page divided into cues, notes, and summary. Excellent for active recall and studying.", "**Mind Mapping:** Visual, radiant structure. Great for brainstorming and connecting ideas in subjects like English or science."] },
      { title: "Guided Practice (15 min): Try a New Style", steps: ["Tell students to choose ONE of the new methods they just learned.", "Play the short video. Instruct them to take notes *only* using their chosen new method.", "After the video, have students turn to a partner who used a *different* method and compare notes. 'What did you like about your method? What was difficult?'"] },
      { title: "Discussion & Application (10 min): The Right Tool for the Job", steps: ["Lead a class discussion: 'Would you use a mind map in math class? Why or why not?' 'When would Cornell notes be most helpful?' Help them connect methods to subject types."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'Which new note-taking method are you going to try in one of your other classes this week, and in which class will you try it?'"] }
    ],
    differentiation: [
      { for: "Students with dysgraphia or who struggle with handwriting", strategy: "Strongly encourage the use of digital tools. Provide keyboard shortcuts for outlining or links to simple mind-mapping websites." },
      { for: "Visual learners", strategy: "Encourage them to add sketches and diagrams (sketchnoting) to any of the note-taking methods." }
    ],
    homework: {
        assignment: "Try the note-taking method you chose on your exit ticket in that class. Bring the notes to our next session to share how it went.",
        teacher_notes: "This is a metacognitive assignment. The goal isn't for them to have perfect notes, but for them to reflect on the process. Ask them: 'Did this method help you pay more attention? Was it easier or harder to study from? What would you change next time?'"
    }
  },
  ch5: {
    title: "Chapter 5: Active Learning & Studying Smart",
    topic: "Shifting from passive review to active recall strategies.",
    philosophy: "Many students believe that rereading notes or highlighting is effective studying. This lesson explicitly teaches the concept of 'desirable difficulty' and provides concrete active recall techniques (like the Feynman Technique and self-quizzing) that are proven to be more efficient and effective for long-term retention.",
    objectives: ["Differentiate between passive review and active recall.", "Explain the Feynman Technique in their own words.", "Create a set of flashcards or a practice quiz for a topic from another class."],
    materials: ["Whiteboard", "Index cards", "A complex concept from another subject (e.g., a paragraph from a science textbook, a historical event)."],
    techIntegration: ["Introduce digital flashcard apps like Quizlet or Anki, highlighting features like spaced repetition.", "Students can use an AI tool to generate practice quizzes from their notes: 'Act as a teacher and create a 10-question quiz based on the following notes...'"],
    comprehensionQuestion: "Why is 'Active Recall' (like the Feynman Technique) so much more effective for long-term memory than 'Passive Review' (like rereading or highlighting)? Describe a time when you felt like you 'knew' something because you read it, but then couldn't recall it during a test—how would active recall have changed that outcome?",
    procedure: [
      { title: "Hook/Opener (5 min): The Illusion of Fluency", steps: ["Ask students: 'Raise your hand if you study by rereading your notes or highlighting your textbook.' (Most will). 'How do you feel while you're doing it?' (Good, productive). 'Now, raise your hand if you've done that for hours, felt confident, and then blanked on the test.' (Many will). Explain that this is the 'illusion of fluency'—it feels like learning, but it's not sticking."] },
      { title: "Direct Instruction (15 min): Active Recall is Your Friend", steps: ["Define the terms: '**Passive Review** is just looking at the information (rereading, watching a video). **Active Recall** is forcing your brain to retrieve the information without looking at it.'", "Introduce the **Feynman Technique**: 1. Choose a concept. 2. Teach it to someone else (or a rubber duck) in simple terms. 3. Identify your gaps in understanding when you get stuck. 4. Go back to your notes, fill the gaps, and simplify your explanation again."] },
      { title: "Guided Practice (20 min): Feynman in Action", steps: ["Put students in pairs. Give them the complex concept paragraph.", "One student is the 'teacher,' the other is the 'student.' The 'teacher' has 5 minutes to learn the concept and then must try to explain it to the 'student' without looking at the paper.", "The 'student' is encouraged to ask questions like 'What does that mean?' or 'Can you give an example?'", "Have them switch roles if time permits."] },
      { title: "Independent Application (5 min): Create a Study Tool", steps: ["Tell students to take out notes from another class and create 5 quiz questions or 5 flashcards based on the material. Emphasize that the act of *creating* the questions is a powerful form of studying."] },
      { title: "Wrap-up & Exit Ticket (5 min)", steps: ["Exit Ticket: 'What is one active recall strategy you will use to study for your next test?'"] }
    ],
    differentiation: [
      { for: "Students who are shy or have performance anxiety", strategy: "Allow them to practice the Feynman technique by writing it out or recording a short audio memo on their phone instead of teaching a partner." },
      { for: "Students needing support", strategy: "Provide sentence starters for their flashcards or quiz questions." }
    ],
    homework: {
        assignment: "Use the study tool (flashcards or quiz) you created to study for 5-10 minutes. Be prepared to share if it felt different from your usual study method.",
        teacher_notes: "The key here is the reflection. Did they notice a difference? Active recall often feels harder than passive review, which is a sign that it's working. Help them understand that this 'desirable difficulty' is what builds strong memories."
    }
  }
};
