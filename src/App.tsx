import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Pencil,
  Plus as PlusIcon,
  GraduationCap,
  FileText,
  GraduationCap as TeacherIcon, 
  Users as StudentIcon, 
  FileText as HandoutIcon, 
  BookOpen as HomeworkIcon,
  BookOpen,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Trash2,
  Download,
  Brain,
  CheckCircle,
  Lightbulb,
  Plus,
  Star,
  Search
} from 'lucide-react';

import { allLessonPlans } from './constants/lessonPlans';
import { 
  teacherGuideContent, 
  curriculumOverview,
  syllabusContent, 
  pacingGuideContent,
  coreInstructionalStrategies
} from './constants/teacherResources';
import { 
  implementationNotesContent, 
  assessmentRubricsContent, 
  communicationTemplatesContent, 
  aiLiteracyToolkitContent,
  sampleAIPolicies,
  aiIntegrationTechniquesContent,
  teacherModelingScriptsContent,
  interventionStrategiesContent,
  socraticSeminarGuide
} from './constants/teacherResourcesExtended';
import { handoutContent } from './constants/handouts';
import { LessonPlan, TeacherGuide, Handout } from './types';

// ===================================================================================
// CUSTOM HOOKS
// ===================================================================================
function useLocalStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (e) {
      console.error("Error parsing localStorage key:", key);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error("Error setting localStorage key:", key);
    }
  }, [key, state]);

  return [state, setState];
}

// ===================================================================================
// COMPONENTS
// ===================================================================================

const Header = ({ currentPage, setPage }: { currentPage: string, setPage: (p: string) => void }) => (
  <header className="bg-white shadow-sm sticky top-0 z-20 border-b border-gray-200">
    <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPage('Home')}>
        <span className="bg-brand-pink text-white rounded-lg w-9 h-9 flex items-center justify-center font-bold text-lg font-display">9</span>
        <h1 className="text-xl font-semibold text-gray-900 hidden sm:block font-display">Survival Hub</h1>
      </div>
      <div className="flex items-center space-x-1">
        <NavButton text="Home" icon={<HomeIcon size={20} />} onClick={() => setPage('Home')} isActive={currentPage === 'Home'} />
        <NavButton text="Teacher" icon={<TeacherIcon size={20} />} onClick={() => setPage('TeacherHub')} isActive={currentPage.startsWith('TeacherHub')} />
        <NavButton text="Student" icon={<StudentIcon size={20} />} onClick={() => setPage('StudentHub')} isActive={currentPage.startsWith('StudentHub')} />
        <NavButton text="Handouts" icon={<HandoutIcon size={20} />} onClick={() => setPage('HandoutLibrary')} isActive={currentPage === 'HandoutLibrary'} />
      </div>
    </nav>
  </header>
);

const NavButton = ({ text, icon, onClick, isActive }: any) => (
  <button 
    onClick={onClick} 
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 font-semibold text-sm ${
        isActive 
        ? 'bg-brand-pink/10 text-brand-pink' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    {icon}
    <span className="hidden md:inline font-display">{text}</span>
  </button>
);

const Card = ({ children, className = "" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 ${className}`}
  >
    {children}
  </motion.div>
);

const DownloadButton = ({ content, filename, children }: any) => {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button 
      onClick={handleDownload} 
      className="bg-brand-pink text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2 text-sm shadow-sm"
    >
      <Download size={16} />
      {children}
    </button>
  );
};

// ===================================================================================
// PAGE COMPONENTS
// ===================================================================================

const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="max-w-6xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h1 className="page-title">Unofficial 9th Grade Survival Guide</h1>
      <p className="page-subtitle max-w-3xl mx-auto">
        A comprehensive hub for the transition into high school. Empowering students with the skills for success and teachers with the resources to lead them.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <HomeShortcut 
        icon={<TeacherIcon size={40} />}
        title="Teacher Portal"
        desc="Curriculum, lesson plans, pacing guides, and administrative resources."
        onClick={() => setPage('TeacherHub')}
      />
      <HomeShortcut 
        icon={<StudentIcon size={40} />}
        title="Student Hub"
        desc="Interactive tools for tasks, grades, and habits."
        onClick={() => setPage('StudentHub')}
      />
      <HomeShortcut 
        icon={<HandoutIcon size={40} />}
        title="Handout Library"
        desc="Print-ready resources for every lesson."
        onClick={() => setPage('HandoutLibrary')}
      />
    </div>

    <Card>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="section-header">Ready to get started?</h2>
          <p className="text-gray-600 mt-2">Download the complete curriculum as a single document.</p>
        </div>
        <DownloadButton content="Full Curriculum Content..." filename="Survival_Guide_Complete.txt">
          Full Curriculum
        </DownloadButton>
      </div>
    </Card>
  </div>
);

const HomeShortcut = ({ icon, title, desc, onClick }: any) => (
  <button 
    onClick={onClick}
    className="group bg-white p-8 rounded-xl border border-gray-200 text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
    <div className="bg-brand-pink/10 rounded-full p-6 mb-6 text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="card-title mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{desc}</p>
    <div className="mt-auto flex items-center text-brand-teal font-semibold group-hover:text-brand-pink transition-colors">
      Explore <ChevronRight size={20} />
    </div>
  </button>
);

// ===================================================================================
// STUDENT TOOLS
// ===================================================================================

const ToolCard = ({ title, icon, onClick }: any) => (
  <button 
    onClick={onClick}
    className="bg-white p-6 rounded-xl border border-gray-200 text-center flex flex-col items-center hover:border-brand-pink hover:shadow-md transition-all group"
  >
    <div className="text-gray-400 group-hover:text-brand-pink transition-colors mb-4">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h3 className="font-display font-semibold text-gray-900">{title}</h3>
  </button>
);

const TaskPlanner = () => {
  const [tasks, setTasks] = useLocalStorageState<any[]>('tasks', []);
  const [val, setVal] = useState('');

  const add = () => {
    if (!val) return;
    setTasks([...tasks, { id: Date.now(), text: val, done: false }]);
    setVal('');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-brand-pink" />
        <h2 className="section-header">Weekly Tasks</h2>
      </div>
      <div className="flex gap-2 mb-6">
        <input 
          value={val} 
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && add()}
          placeholder="What needs to be done?"
          className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/20"
        />
        <button onClick={add} className="bg-brand-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
          Add
        </button>
      </div>
      <div className="space-y-3">
        {tasks.map(t => (
          <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group">
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={t.done} 
                onChange={() => setTasks(tasks.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}
                className="w-5 h-5 rounded border-gray-300 text-brand-pink focus:ring-brand-pink"
              />
              <span className={t.done ? 'line-through text-gray-400' : 'text-gray-800'}>{t.text}</span>
            </div>
            <button onClick={() => setTasks(tasks.filter(x => x.id !== t.id))} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

const HabitTracker = () => {
  const [habits, setHabits] = useLocalStorageState<any[]>('habits', [
    { id: 1, name: 'Sleep 8 Hours', days: Array(7).fill(false) },
    { id: 2, name: 'Drink Water', days: Array(7).fill(false) }
  ]);
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="section-header mb-6">Habit Tracker</h2>
      <div className="space-y-6">
        {habits.map(h => (
          <div key={h.id} className="space-y-3">
            <p className="font-semibold text-gray-800">{h.name}</p>
            <div className="flex justify-between">
              {days.map((d, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    const newHabits = habits.map(x => x.id === h.id ? { ...x, days: x.days.map((v: boolean, j: number) => j === i ? !v : v) } : x);
                    setHabits(newHabits);
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${h.days[i] ? 'bg-brand-pink text-white' : 'bg-gray-100 text-gray-400'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const GradeTracker = () => {
    const [grades, setGrades] = useLocalStorageState<any[]>('grades', []);
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');

    const add = () => {
        if (!name || !grade) return;
        setGrades([...grades, { id: Date.now(), name, grade: parseFloat(grade) }]);
        setName('');
        setGrade('');
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <h2 className="section-header mb-6">Grade Tracker</h2>
            <div className="flex gap-2 mb-6">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Class Name" className="flex-1 p-2 border rounded" />
                <input type="number" value={grade} onChange={e => setGrade(e.target.value)} placeholder="%" className="w-24 p-2 border rounded" />
                <button onClick={add} className="bg-brand-teal text-white px-4 rounded">Add</button>
            </div>
            <div className="space-y-2">
                {grades.map(g => (
                    <div key={g.id} className="flex justify-between p-3 bg-gray-50 rounded group">
                        <span>{g.name}</span>
                        <div className="flex items-center gap-4">
                            <span className="font-bold">{g.grade}%</span>
                            <button onClick={() => setGrades(grades.filter(x => x.id !== g.id))} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const TeacherResourceViewer = ({ data }: { data: TeacherGuide }) => (
    <Card className="max-w-4xl mx-auto">
        <h2 className="section-header mb-4">{data.title}</h2>
        {data.summary && <p className="italic text-gray-600 mb-6">{data.summary}</p>}
        <div className="prose max-w-none text-gray-700 space-y-8">
            {data.content && <div className="whitespace-pre-wrap">{data.content}</div>}
            {data.sections?.map((s, i) => (
                <div key={i}>
                    <h3 className="card-title text-brand-pink">{s.title}</h3>
                    {s.content?.map((p, j) => <p key={j} className="mt-2 text-gray-700">{p}</p>)}
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        {s.list?.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                </div>
            ))}
            {data.guides && (
                <div className="space-y-8">
                    {Object.values(data.guides).map((g, i) => (
                        <div key={i} className="overflow-x-auto">
                            <h3 className="card-title mb-4">{g.title}</h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        {g.headers.map((h, j) => <th key={j} className="p-2 border">{h}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {g.rows.map((r, j) => (
                                        <tr key={j}>
                                            {r.map((c, k) => <td key={k} className="p-2 border">{c}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </Card>
);

const ProjectChunker = () => {
    const [project, setProject] = useLocalStorageState('chunker_project', '');
    const [steps, setSteps] = useLocalStorageState<any[]>('chunker_steps', []);
    const [val, setVal] = useState('');

    const add = () => {
        if (!val) return;
        setSteps([...steps, { id: Date.now(), text: val, done: false }]);
        setVal('');
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <h2 className="section-header mb-6">Project Chunker</h2>
            <div className="space-y-4">
                <input 
                    value={project} 
                    onChange={e => setProject(e.target.value)} 
                    placeholder="Project Name (e.g., Biology Final)" 
                    className="w-full text-xl font-bold bg-transparent border-b border-gray-200 py-2 focus:border-brand-pink focus:outline-none"
                />
                <div className="flex gap-2">
                    <input 
                        value={val} 
                        onChange={e => setVal(e.target.value)}
                        placeholder="Add a step..."
                        className="flex-1 p-2 border rounded"
                    />
                    <button onClick={add} className="bg-brand-pink text-white px-4 rounded">Add</button>
                </div>
                <div className="space-y-2">
                    {steps.map((s, i) => (
                        <div key={s.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                            <span className="font-bold text-brand-pink">{i + 1}.</span>
                            <span className="flex-1">{s.text}</span>
                            <button onClick={() => setSteps(steps.filter(x => x.id !== s.id))} className="text-gray-400 hover:text-red-500">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const JournalPrompts = () => {
    const [entries, setEntries] = useLocalStorageState<any[]>('journal', []);
    const [entry, setEntry] = useState('');
    const prompt = "What is one thing you learned about your learning this week?";

    const save = () => {
        if (!entry) return;
        setEntries([{ id: Date.now(), text: entry, date: new Date().toLocaleDateString() }, ...entries]);
        setEntry('');
    };

    return (
        <Card className="max-w-2xl mx-auto">
            <h2 className="section-header mb-6">Journal & AI Log</h2>
            <div className="space-y-4">
                <div className="bg-brand-pink/5 p-4 rounded-lg">
                    <p className="font-bold text-brand-pink">Reflection Prompt:</p>
                    <p className="italic text-gray-700 mt-1">{prompt}</p>
                </div>
                <textarea 
                    value={entry}
                    onChange={e => setEntry(e.target.value)}
                    placeholder="Write your reflection or log your AI interactions here..."
                    rows={6}
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-brand-pink/20 focus:outline-none"
                />
                <button onClick={save} className="w-full bg-brand-pink text-white py-3 rounded-lg font-semibold">Save Entry</button>
                
                <div className="mt-8 space-y-4">
                    {entries.map(e => (
                        <div key={e.id} className="p-4 border rounded-lg space-y-2">
                            <span className="text-xs text-gray-400 font-bold uppercase">{e.date}</span>
                            <p className="text-gray-700 whitespace-pre-wrap">{e.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

// ===================================================================================
// INTERACTIVE STUDENT COMPONENTS
// ===================================================================================

const WorksheetInput = ({ value, onChange, placeholder }: any) => (
  <div className="relative mt-4">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" 
         style={{ background: 'repeating-linear-gradient(transparent, transparent 31px, #94a3b8 31px, #94a3b8 32px)', marginTop: '38px' }} />
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={8}
      className="w-full bg-transparent p-4 pt-10 text-gray-800 font-handwriting text-lg leading-[32px] focus:outline-none resize-none border-none relative z-10"
      style={{ fontFamily: "'Indie Flower', cursive" }}
    />
    <div className="absolute top-4 right-4 text-brand-pink/30">
        <Pencil size={24} />
    </div>
  </div>
);

// Inject handwriting font
if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

const VideoEmbed = ({ url, title }: { url: string, title: string }) => (
  <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md my-6">
    <iframe 
      src={url} 
      title={title}
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  </div>
);

const MindsetFlip = () => {
  const [fixed, setFixed] = useState('');
  const [growth, setGrowth] = useState('');
  
  const flips: Record<string, string> = {
    "I'm not good at math.": "I'm not good at math *yet*. I can get better with practice.",
    "This is too hard.": "This is a challenge my brain needs to grow stronger.",
    "I made a mistake.": "I found a way that didn't work. I'm learning!",
    "I'll never be as smart as them.": "I can learn from their strategies to improve myself."
  };

  return (
    <div className="bg-brand-teal/5 p-6 rounded-xl border border-brand-teal/20 my-6">
        <h4 className="font-display font-bold text-brand-teal mb-4">Mindset Flip Challenge</h4>
        <div className="space-y-4">
            <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Fixed Mindset Thought:</label>
                <select 
                    value={fixed} 
                    onChange={(e) => {
                        setFixed(e.target.value);
                        setGrowth(flips[e.target.value] || '');
                    }}
                    className="w-full p-2 mt-1 border rounded-lg bg-white"
                >
                    <option value="">Select a common fixed thought...</option>
                    {Object.keys(flips).map(f => <option key={f} value={f}>{f}</option>)}
                </select>
            </div>
            {growth && (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-pink"
                >
                    <label className="text-xs font-bold text-brand-pink uppercase">Growth Mindset Flip:</label>
                    <p className="text-lg font-medium text-gray-800 mt-1">{growth}</p>
                </motion.div>
            )}
        </div>
    </div>
  );
};

const LessonViewer = ({ lesson, isStudent = false }: { lesson: LessonPlan, isStudent?: boolean }) => {
  const lessonKey = lesson.title.replace(/\s+/g, '_');
  const [completedObjectives, setCompletedObjectives] = useLocalStorageState<Record<number, boolean>>(`lesson_objs_${lessonKey}`, {});
  const [completedSteps, setCompletedSteps] = useLocalStorageState<Record<string, boolean>>(`lesson_steps_${lessonKey}`, {});
  const [reflection, setReflection] = useLocalStorageState(`lesson_reflection_${lessonKey}`, '');

  const toggleObjective = (index: number) => {
    setCompletedObjectives(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleStep = (pIndex: number, sIndex: number) => {
    const key = `${pIndex}-${sIndex}`;
    setCompletedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sentenceCount = reflection.split(/[.!?]+/).filter(s => s.trim().length > 5).length;
  const isReflectionValid = sentenceCount >= 9;

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex justify-between items-start">
        <div>
            <h2 className="section-header mb-2">{lesson.title}</h2>
            <p className="text-gray-500 italic mb-6">{lesson.topic}</p>
        </div>
        {isStudent && (
            <div className="flex flex-col items-end gap-2">
              <div className="bg-brand-yellow/20 text-brand-yellow-700 px-3 py-1 rounded-full text-xs font-bold font-display">
                  Student View
              </div>
              <div className="text-[10px] uppercase font-bold text-gray-400">
                Progress: {Math.round((Object.values(completedObjectives).filter(Boolean).length / lesson.objectives.length) * 100)}%
              </div>
            </div>
        )}
      </div>
      
      <div className="space-y-8">
          <section>
              <h3 className="card-title flex items-center gap-2">
                  <Brain className="text-brand-pink" size={20} />
                  The Big Idea
              </h3>
              <p className="mt-2 text-gray-700">{lesson.philosophy}</p>
          </section>

          {/* Interactive Block for Chapter 1 */}
          {lesson.title.includes("Chapter 1") && (
              <section className="border-y border-gray-100 py-6">
                  <h3 className="card-title text-brand-teal mb-4">Watch & Learn</h3>
                  <VideoEmbed 
                    url="https://www.youtube.com/embed/LUtcig45nNo" 
                    title="Neuroplasticity for Students" 
                  />
                  <MindsetFlip />
              </section>
          )}

          <section>
              <h3 className="card-title mb-4">What You'll Be Able to Do</h3>
              <div className="space-y-2">
                {lesson.objectives.map((o, i) => (
                  <div 
                    key={i} 
                    onClick={() => isStudent && toggleObjective(i)}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      isStudent ? 'cursor-pointer hover:border-brand-pink/50' : 'border-transparent'
                    } ${completedObjectives[i] ? 'bg-brand-pink/5 border-brand-pink/20' : 'bg-white border-transparent'}`}
                  >
                    {isStudent && (
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        completedObjectives[i] ? 'bg-brand-pink border-brand-pink text-white' : 'bg-white border-gray-300'
                      }`}>
                        {completedObjectives[i] && <CheckCircle size={14} />}
                      </div>
                    )}
                    <span className={`text-base ${completedObjectives[i] ? 'text-gray-500 line-through' : 'text-gray-700'}`}>{o}</span>
                  </div>
                ))}
              </div>
          </section>

          <section>
              <h3 className="card-title mb-4">{isStudent ? 'Activities' : 'Procedure'}</h3>
              <div className="space-y-6">
                  {lesson.procedure.map((p, pi) => (
                      <div key={pi} className="border-l-2 border-brand-pink/20 pl-4">
                          <h4 className="font-bold text-gray-800 mb-2">{p.title}</h4>
                          <div className="space-y-2">
                              {p.steps.map((s, si) => {
                                const stepKey = `${pi}-${si}`;
                                return (
                                  <div 
                                    key={si}
                                    onClick={() => isStudent && toggleStep(pi, si)}
                                    className={`flex items-start gap-3 p-2 rounded-md transition-all ${
                                      isStudent ? 'cursor-pointer hover:bg-gray-100' : ''
                                    } ${completedSteps[stepKey] ? 'opacity-50' : ''}`}
                                  >
                                    {isStudent && (
                                      <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border transition-colors ${
                                        completedSteps[stepKey] ? 'bg-brand-teal border-brand-teal' : 'bg-white border-gray-300'
                                      }`} />
                                    )}
                                    <p className={`text-sm ${completedSteps[stepKey] ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
                                      {s}
                                    </p>
                                  </div>
                                );
                              })}
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {isStudent && (
            <section className="bg-brand-pink/5 p-6 rounded-2xl border-2 border-brand-pink/20 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                    <Pencil className="text-brand-pink" size={24} />
                    <h3 className="card-title">Comprehension & Reflection</h3>
                </div>
                <p className="text-brand-pink-700 font-medium mb-4">
                    {lesson.comprehensionQuestion || "Based on what you learned today, why is this skill important for your success in high school and beyond? Explain your thinking deeply."}
                </p>
                <div className="relative">
                  <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    placeholder="Reflect deeply on what you learned... (9 sentences required)"
                    rows={10}
                    className="w-full p-6 rounded-xl border-2 border-white bg-white/80 focus:bg-white focus:ring-4 focus:ring-brand-pink/10 focus:outline-none transition-all font-sans text-gray-800 leading-relaxed shadow-sm"
                  />
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    isReflectionValid ? 'bg-brand-teal text-white' : 'bg-brand-pink text-white animate-pulse'
                  }`}>
                    {sentenceCount} / 9 Sentences
                  </div>
                </div>
                {!isReflectionValid && (
                  <p className="mt-3 text-[11px] text-brand-pink font-semibold uppercase tracking-wider">
                    Keep writing! You need at least 9 sentences to complete this lesson reflection.
                  </p>
                )}
                {isReflectionValid && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 flex items-center gap-2 text-brand-teal font-bold"
                  >
                    <Star size={18} fill="currentColor" />
                    <span>Reflection Complete! You've successfully processed this lesson.</span>
                  </motion.div>
                )}
            </section>
          )}

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="card-title flex items-center gap-2 mb-2">
                  <HomeworkIcon className="text-brand-teal" size={20} />
                  Next Steps (Homework)
              </h3>
              <p className="text-gray-800 font-medium">{lesson.homework.assignment}</p>
          </section>
      </div>
    </Card>
  );
};

// ===================================================================================
// MAIN APP
// ===================================================================================

const HandoutCard = ({ 
  handoutKey, 
  title, 
  content 
}: any) => {
  const [response, setResponse] = useLocalStorageState(`handout_response_${handoutKey}`, '');
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <Card className={`print-card transition-all duration-500 overflow-hidden ${isInteractive ? 'bg-[#f8f9fa] border-brand-pink/30 shadow-inner' : ''}`}>
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h3 className="section-header">{title}</h3>
        <div className="flex items-center gap-2">
          <DownloadButton 
            content={`--- ${title} ---\n\n${content}\n\n${response ? `--- STUDENT RESPONSE ---\n\n${response}` : ''}`} 
            filename={`${title.replace(/\s+/g, '_')}.txt`}
          >
            Save
          </DownloadButton>
          <button 
            onClick={() => setIsInteractive(!isInteractive)}
            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors ${
              isInteractive 
              ? 'bg-brand-pink text-white' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {isInteractive ? '✨ Interactive' : 'View Only'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className={`whitespace-pre-wrap font-sans text-gray-700 relative ${isInteractive ? 'opacity-60 scale-95 origin-top transition-all' : 'transition-all'}`}>
          <div className="bg-white/50 backdrop-blur-[2px] p-4 rounded-lg">
            {content}
          </div>
        </div>

        {isInteractive && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white border-2 border-dashed border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <WorksheetInput 
              value={response}
              onChange={(e: any) => setResponse(e.target.value)}
            />
          </motion.div>
        )}
      </div>
    </Card>
  );
};

const HandoutLibrary = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="page-title text-center">Handout Library</h1>
            <p className="text-center text-gray-600 -mt-8 mb-8">Toggle "Interactive" on any handout to fill it out digitally.</p>
            <div className="space-y-8">
                {Object.entries(handoutContent).map(([key, h]) => (
                    <HandoutCard 
                      key={key}
                      handoutKey={key}
                      title={h.title}
                      content={h.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default function App() {
  const [page, setPage] = useState('Home');
  const [subPage, setSubPage] = useState<string | null>(null);

  const navigate = (p: string) => {
    if (p.includes('/')) {
      const [main, sub] = p.split('/');
      setPage(main);
      setSubPage(sub);
    } else {
      setPage(p);
      setSubPage(null);
    }
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (page === 'StudentHub') {
      if (!subPage) {
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="page-title">Student Dashboard</h1>
              <p className="page-subtitle mt-2">Tools for your survival toolkit.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard title="Task Planner" icon={<CheckCircle />} onClick={() => navigate('StudentHub/TaskPlanner')} />
              <ToolCard title="Grade Tracker" icon={<Star />} onClick={() => navigate('StudentHub/GradeTracker')} />
              <ToolCard title="Habit Tracker" icon={<Brain />} onClick={() => navigate('StudentHub/HabitTracker')} />
              <ToolCard title="Project Chunker" icon={<ArrowRight />} onClick={() => navigate('StudentHub/Chunker')} />
              <ToolCard title="Journal & Log" icon={<BookOpen />} onClick={() => navigate('StudentHub/Journal')} />
              <ToolCard title="Lesson Library" icon={<FileText />} onClick={() => navigate('StudentHub/Lessons')} />
            </div>
          </div>
        );
      }

      if (subPage === 'Lessons') {
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <button onClick={() => setSubPage(null)} className="text-brand-teal font-semibold flex items-center gap-2 group transition-all hover:translate-x-[-4px]">
              <ArrowLeft size={18} /> Back to Dashboard
            </button>
            <div className="text-center sm:text-left">
              <h1 className="page-title">Student Digital Library</h1>
              <p className="page-subtitle mt-2">The ultimate field guide to thriving in high school.</p>
            </div>

            {[
              { 
                name: 'Foundations of Success', 
                keys: ['intro', 'ch1', 'ch10'], 
                desc: 'Getting started, mindsets, and decoding your classes.' 
              },
              { 
                name: 'Executive Functioning', 
                keys: ['ch2', 'ch3'], 
                desc: 'Master your calendar and break down monster projects.' 
              },
              { 
                name: 'Academic Mastery', 
                keys: ['ch4', 'ch5'], 
                desc: 'Note-taking systems and studying smarter, not harder.' 
              },
              { 
                name: 'Social & Personal Skills', 
                keys: ['ch6', 'ch7', 'ch8'], 
                desc: 'Communication, friendships, and taking care of you.' 
              },
              { 
                name: 'Future Ready', 
                keys: ['ch9', 'ch11', 'ch12', 'conclusion'], 
                desc: 'Digital smarts, financial literacy, and AI co-pilots.' 
              }
            ].map(category => (
              <section key={category.name} className="space-y-6">
                <div className="border-b-2 border-brand-yellow/30 pb-2">
                    <h2 className="section-header !text-2xl flex items-center gap-3">
                        <span className="text-brand-pink">●</span>
                        {category.name}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">{category.desc}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.keys.map(key => {
                        const l = allLessonPlans[key];
                        if (!l) return null;
                        return (
                            <button 
                              key={key} 
                              onClick={() => navigate(`StudentHub/LDetail_${key}`)} 
                              className="p-6 bg-white border border-gray-200 rounded-xl text-left hover:border-brand-pink hover:shadow-md transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="font-display font-bold text-gray-900 group-hover:text-brand-pink transition-colors">{l.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{l.topic}</p>
                            </button>
                        );
                    })}
                </div>
              </section>
            ))}
          </div>
        );
      }

      if (subPage.startsWith('LDetail_')) {
          const key = subPage.replace('LDetail_', '');
          return (
            <div className="space-y-6">
                <button onClick={() => setSubPage('Lessons')} className="text-brand-teal font-semibold flex items-center gap-2">&larr; Library</button>
                <LessonViewer lesson={allLessonPlans[key]} isStudent={true} />
            </div>
          );
      }

      if (subPage === 'TaskPlanner') return <TaskPlanner />;
      if (subPage === 'GradeTracker') return <GradeTracker />;
      if (subPage === 'HabitTracker') return <HabitTracker />;
      if (subPage === 'Chunker') return <ProjectChunker />;
      if (subPage === 'Journal') return <JournalPrompts />;
      return null;
    }

    if (page === 'TeacherHub') {
      if (!subPage) {
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="page-title">Teacher Hub</h1>
              <p className="page-subtitle mt-2">Curriculum and resources.</p>
            </div>

            <div className="space-y-12">
              {/* Guides Section */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <Lightbulb className="text-brand-yellow" size={28} />
                  <h2 className="section-header">Strategic Guides</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:border-brand-pink transition-all cursor-pointer border-l-4 border-l-brand-pink" onClick={() => navigate('TeacherHub/Overview')}>
                    <h3 className="card-title">Curriculum Overview</h3>
                    <p className="text-gray-600 mt-2 text-sm italic">Mission, philosophy, and core pillars.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Strategies')}>
                    <h3 className="card-title">Instructional Strategies</h3>
                    <p className="text-gray-600 mt-2 text-sm">Best practices for delivering the survival guide curriculum.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Guide')}>
                    <h3 className="card-title">Teacher's Guide</h3>
                    <p className="text-gray-600 mt-2 text-sm">Full course overview and instructional philosophy.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Implementation')}>
                    <h3 className="card-title">Implementation Tips</h3>
                    <p className="text-gray-600 mt-2 text-sm">Classroom management and trauma-informed strategies.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Modeling')}>
                    <h3 className="card-title">Modeling Scripts</h3>
                    <p className="text-gray-600 mt-2 text-sm">Real-time strategies for modeling growth mindset.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Intervention')}>
                    <h3 className="card-title">Intervention Logic</h3>
                    <p className="text-gray-600 mt-2 text-sm">Tiered supports for struggling students.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Socratic')}>
                    <h3 className="card-title">Socratic Seminar Guide</h3>
                    <p className="text-gray-600 mt-2 text-sm">Framework for active student-led dialogue.</p>
                  </Card>
                </div>
              </section>

              {/* AI Literacy Section */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <Brain className="text-brand-pink" size={28} />
                  <h2 className="section-header">AI Literacy for Educators</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:border-brand-pink transition-all cursor-pointer border-l-4 border-l-brand-pink" onClick={() => navigate('TeacherHub/AIToolkit')}>
                    <h3 className="card-title">AI Literacy Toolkit</h3>
                    <p className="text-gray-600 mt-2 text-sm">Ethical AI frameworks and prompting libraries.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Integration')}>
                    <h3 className="card-title">Integration Strategies</h3>
                    <p className="text-gray-600 mt-2 text-sm">Best practices for bringing AI into any subject area.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Policies')}>
                    <h3 className="card-title">Sample AI Policies</h3>
                    <p className="text-gray-600 mt-2 text-sm">Adaptable classroom policies for AI usage.</p>
                  </Card>
                </div>
              </section>

              {/* Administrative Resources */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <TeacherIcon className="text-brand-teal" size={28} />
                  <h2 className="section-header">Administrative Essentials</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Syllabus')}>
                    <h3 className="card-title">Detailed Syllabus</h3>
                    <p className="text-gray-600 mt-2 text-sm">Printable course structure and learning objectives.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Pacing')}>
                    <h3 className="card-title">Pacing Guide</h3>
                    <p className="text-gray-600 mt-2 text-sm">12-week and 3-week course timelines.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Rubrics')}>
                    <h3 className="card-title">Assessment Rubrics</h3>
                    <p className="text-gray-600 mt-2 text-sm">Grading frameworks for reflections and portfolios.</p>
                  </Card>
                  <Card className="hover:border-brand-pink transition-all cursor-pointer" onClick={() => navigate('TeacherHub/Communication')}>
                    <h3 className="card-title">Parent Communication</h3>
                    <p className="text-gray-600 mt-2 text-sm">Email templates for families.</p>
                  </Card>
                </div>
              </section>

              {/* Lesson Plans Section */}
              <section className="bg-white/50 p-6 rounded-2xl border border-dashed border-gray-300">
                <div className="flex items-center gap-4 mb-6">
                  <PlusIcon className="text-brand-pink" size={28} />
                  <h2 className="section-header">Complete Lesson Plans</h2>
                </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(allLessonPlans).map(([key, l]) => (
                          <button 
                            key={key} 
                            onClick={() => navigate(`TeacherHub/Lesson_${key}`)}
                            className="p-4 bg-white border rounded-lg text-left hover:border-brand-pink transition-all group relative"
                          >
                              <div className="absolute top-0 right-0 p-2 text-gray-300 group-hover:text-brand-pink transition-colors">
                                  <HomeworkIcon size={14} />
                              </div>
                              <span className="text-xs text-brand-pink font-bold uppercase">{key}</span>
                              <p className="font-semibold text-gray-800">{l.title}</p>
                          </button>
                      ))}
                  </div>
              </section>
            </div>
          </div>
        );
      }
      if (subPage === 'Overview') return <TeacherResourceViewer data={curriculumOverview} />;
      if (subPage === 'Strategies') return <TeacherResourceViewer data={coreInstructionalStrategies} />;
      if (subPage === 'Guide') return <TeacherResourceViewer data={teacherGuideContent} />;
      if (subPage === 'Syllabus') return <TeacherResourceViewer data={syllabusContent} />;
      if (subPage === 'Pacing') return <TeacherResourceViewer data={pacingGuideContent} />;
      if (subPage === 'Implementation') return <TeacherResourceViewer data={implementationNotesContent} />;
      if (subPage === 'Rubrics') return <TeacherResourceViewer data={assessmentRubricsContent} />;
      if (subPage === 'AIToolkit') return <TeacherResourceViewer data={aiLiteracyToolkitContent} />;
      if (subPage === 'Integration') return <TeacherResourceViewer data={aiIntegrationTechniquesContent} />;
      if (subPage === 'Policies') return <TeacherResourceViewer data={sampleAIPolicies} />;
      if (subPage === 'Communication') return <TeacherResourceViewer data={communicationTemplatesContent} />;
      if (subPage === 'Modeling') return <TeacherResourceViewer data={teacherModelingScriptsContent} />;
      if (subPage === 'Intervention') return <TeacherResourceViewer data={interventionStrategiesContent} />;
      if (subPage === 'Socratic') return <TeacherResourceViewer data={socraticSeminarGuide} />;
      
      if (subPage.startsWith('Lesson_')) {
          const lessonKey = subPage.replace('Lesson_', '');
          return <LessonViewer lesson={allLessonPlans[lessonKey]} />;
      }
      return null;
    }

    if (page === 'HandoutLibrary') {
      return <HandoutLibrary />;
    }

    return <Home setPage={navigate} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header currentPage={page} setPage={navigate} />
      <main className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={page + (subPage || '')}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
