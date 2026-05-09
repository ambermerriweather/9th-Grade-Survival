import React, { useState, useEffect } from 'react';
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
  Search,
  Printer
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
// HELPERS
// ===================================================================================

const getLetterGrade = (pct: number): string => {
  if (pct >= 90) return 'A';
  if (pct >= 80) return 'B';
  if (pct >= 70) return 'C';
  if (pct >= 60) return 'D';
  return 'F';
};

const gradeToGPA = (pct: number): number => {
  if (pct >= 90) return 4.0;
  if (pct >= 80) return 3.0;
  if (pct >= 70) return 2.0;
  if (pct >= 60) return 1.0;
  return 0.0;
};

const getWeekDates = (): Date[] => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - daysToMonday);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const getStreak = (days: boolean[]): number => {
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i]) streak++;
    else break;
  }
  return streak;
};

// Simple inline markdown renderer (handles headers, bold, italic, lists, tables, paragraphs)
const renderMarkdown = (text: string): string => {
  if (!text) return '';

  const inlineFormat = (s: string): string =>
    s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');

  const renderTable = (rows: string[]): string => {
    if (rows.length < 2) return rows.map(r => `<p class="md-p">${inlineFormat(r)}</p>`).join('');
    const headers = rows[0].split('|').filter(c => c.trim()).map(c => c.trim());
    const dataRows = rows.slice(2).filter(r => r.trim() && r.trim() !== '|');
    let html = '<div class="md-table-wrap"><table class="md-table"><thead><tr>';
    headers.forEach(h => { html += `<th class="md-th">${inlineFormat(h)}</th>`; });
    html += '</tr></thead><tbody>';
    dataRows.forEach(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
      html += '<tr>';
      cells.forEach(cell => { html += `<td class="md-td">${inlineFormat(cell)}</td>`; });
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
  };

  const lines = text.split('\n');
  const output: string[] = [];
  let listItems: string[] = [];
  let tableBuffer: string[] = [];
  let inTable = false;

  const flushList = () => {
    if (listItems.length > 0) {
      output.push('<ul class="md-ul">' + listItems.map(li => `<li class="md-li">${li}</li>`).join('') + '</ul>');
      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableBuffer.length > 0) {
      output.push(renderTable(tableBuffer));
      tableBuffer = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    const isTableRow = line.trim().startsWith('|') && line.includes('|');
    const isSeparator = /^\|[-: |]+\|$/.test(line.trim());

    if (isTableRow) {
      if (!inTable) { flushList(); inTable = true; }
      if (!isSeparator) tableBuffer.push(line);
      else tableBuffer.push(line); // keep separator for slice logic
      continue;
    }

    if (inTable) { flushTable(); }

    if (line.startsWith('### ')) {
      flushList();
      output.push(`<h3 class="md-h3">${inlineFormat(line.slice(4))}</h3>`);
    } else if (line.startsWith('## ')) {
      flushList();
      output.push(`<h2 class="md-h2">${inlineFormat(line.slice(3))}</h2>`);
    } else if (line.startsWith('# ')) {
      flushList();
      output.push(`<h1 class="md-h1">${inlineFormat(line.slice(2))}</h1>`);
    } else if (/^[-*]\s/.test(line)) {
      listItems.push(inlineFormat(line.slice(2)));
    } else if (/^\d+\.\s/.test(line)) {
      listItems.push(inlineFormat(line.replace(/^\d+\.\s/, '')));
    } else if (/^---+$/.test(line.trim())) {
      flushList();
      output.push('<hr class="md-hr" />');
    } else if (line.trim() === '') {
      flushList();
      output.push('<div class="md-gap"></div>');
    } else {
      flushList();
      output.push(`<p class="md-p">${inlineFormat(line)}</p>`);
    }
  }

  flushList();
  if (inTable) flushTable();

  return output.join('\n');
};

// ===================================================================================
// COMPONENTS
// ===================================================================================

const Header = ({ currentPage, setPage }: { currentPage: string, setPage: (p: string) => void }) => (
  <header className="bg-white shadow-sm sticky top-0 z-20 border-b border-gray-200 no-print">
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

const PrintButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <button
    onClick={onClick ?? (() => window.print())}
    className="bg-brand-pink text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2 text-sm shadow-sm no-print"
  >
    <Printer size={16} />
    {children}
  </button>
);

const OnboardingBanner = ({ storageKey, title, firstStep }: { storageKey: string, title: string, firstStep: string }) => {
  const [dismissed, setDismissed] = useLocalStorageState(`onboard_${storageKey}`, false);
  if (dismissed) return null;
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 mb-6 no-print">
      <Lightbulb className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-blue-800 text-sm">{title}</p>
        <p className="text-blue-700 text-sm mt-0.5"><span className="font-semibold">First step:</span> {firstStep}</p>
      </div>
      <button onClick={() => setDismissed(true)} className="text-blue-400 hover:text-blue-700 text-xs font-bold flex-shrink-0 mt-0.5">
        Got it ✕
      </button>
    </div>
  );
};

const BackNav = ({ onClick }: { onClick: () => void }) => (
  <div className="sticky top-[61px] z-10 bg-gray-50/95 backdrop-blur-sm border-b border-gray-100 -mx-4 px-4 py-2.5 mb-6 no-print">
    <button onClick={onClick} className="flex items-center gap-2 text-brand-teal font-semibold hover:-translate-x-0.5 transition-transform text-sm">
      <ArrowLeft size={16} /> Back to Dashboard
    </button>
  </div>
);

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
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const add = () => {
    if (!val.trim()) return;
    setTasks([...tasks, {
      id: Date.now(),
      text: val.trim(),
      done: false,
      dueDate: dueDate || undefined,
      priority: priority || undefined,
    }]);
    setVal('');
    setDueDate('');
    setPriority('');
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const pOrder: Record<string, number> = { High: 0, Medium: 1, Low: 2 };

  const sortedTasks = [...tasks].sort((a, b) => {
    const aDate = a.dueDate ? new Date(a.dueDate) : null;
    const bDate = b.dueDate ? new Date(b.dueDate) : null;
    const aOverdue = aDate && aDate < today && !a.done;
    const bOverdue = bDate && bDate < today && !b.done;
    if (aOverdue && !bOverdue) return -1;
    if (!aOverdue && bOverdue) return 1;
    if (aDate && bDate) return aDate.getTime() - bDate.getTime();
    if (aDate) return -1;
    if (bDate) return 1;
    return (pOrder[a.priority] ?? 3) - (pOrder[b.priority] ?? 3);
  });

  const priorityBadge = (p?: string) => {
    if (p === 'High') return 'text-red-600 bg-red-50 border border-red-200';
    if (p === 'Medium') return 'text-yellow-700 bg-yellow-50 border border-yellow-200';
    if (p === 'Low') return 'text-green-700 bg-green-50 border border-green-200';
    return '';
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <OnboardingBanner
        storageKey="tasks"
        title="Your Task Planner keeps all your assignments in one place, sorted by urgency."
        firstStep="Add your most pressing assignment first. You can set a due date and priority level."
      />
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-brand-pink" />
        <h2 className="section-header">Weekly Tasks</h2>
      </div>
      <div className="space-y-2 mb-6">
        <div className="flex gap-2">
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
        <div className="flex gap-2">
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/20 text-gray-600"
          />
          <select
            value={priority}
            onChange={e => setPriority(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/20 text-gray-600"
          >
            <option value="">Priority (optional)</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <div className="space-y-3">
        {sortedTasks.map(t => {
          const taskDate = t.dueDate ? new Date(t.dueDate + 'T00:00:00') : null;
          const overdue = taskDate && taskDate < today && !t.done;
          return (
            <div key={t.id} className={`flex items-center justify-between p-4 rounded-lg group ${overdue ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => setTasks(tasks.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}
                  className="w-5 h-5 rounded border-gray-300 text-brand-pink focus:ring-brand-pink flex-shrink-0"
                />
                <div className="min-w-0">
                  <span className={`block ${t.done ? 'line-through text-gray-400' : overdue ? 'text-red-700 font-medium' : 'text-gray-800'}`}>
                    {t.text}
                  </span>
                  {(t.dueDate || t.priority) && (
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      {t.dueDate && (
                        <span className={`text-xs ${overdue ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                          {overdue ? '⚠ Overdue: ' : 'Due: '}{new Date(t.dueDate + 'T00:00:00').toLocaleDateString()}
                        </span>
                      )}
                      {t.priority && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${priorityBadge(t.priority)}`}>
                          {t.priority}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button onClick={() => setTasks(tasks.filter(x => x.id !== t.id))} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0">
                <Trash2 size={18} />
              </button>
            </div>
          );
        })}
        {tasks.length === 0 && (
          <p className="text-center text-gray-400 py-6 text-sm">No tasks yet. Add one above to get started!</p>
        )}
      </div>
    </Card>
  );
};

const HabitTracker = () => {
  const [habits, setHabits] = useLocalStorageState<any[]>('habits', [
    { id: 1, name: 'Sleep 8 Hours', days: Array(7).fill(false) },
    { id: 2, name: 'Drink Water', days: Array(7).fill(false) }
  ]);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const weekDates = getWeekDates();
  const dayLabels = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];

  const resetWeek = () => {
    setHabits(habits.map(h => ({ ...h, days: Array(7).fill(false) })));
    setShowResetConfirm(false);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <OnboardingBanner
        storageKey="habits"
        title="The Habit Tracker helps you build the routines that support your brain and body."
        firstStep="Click any day circle to mark a habit as complete. Try to fill the whole week!"
      />
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-header">Habit Tracker</h2>
        <button
          onClick={() => setShowResetConfirm(true)}
          className="text-xs text-gray-400 hover:text-red-500 font-semibold transition-colors no-print"
        >
          Reset Week
        </button>
      </div>

      {showResetConfirm && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between gap-3">
          <p className="text-red-700 text-sm font-medium">Reset all habits for this week?</p>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={resetWeek} className="text-xs bg-red-500 text-white px-3 py-1.5 rounded-lg font-semibold">Yes, Reset</button>
            <button onClick={() => setShowResetConfirm(false)} className="text-xs bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg font-semibold">Cancel</button>
          </div>
        </div>
      )}

      {/* Day header row */}
      <div className="flex items-center mb-3">
        <div className="w-32 flex-shrink-0" />
        {weekDates.map((date, i) => (
          <div key={i} className={`flex-1 text-center ${isToday(date) ? 'bg-pink-50 rounded-t-lg' : ''}`}>
            <p className={`text-xs font-bold ${isToday(date) ? 'text-brand-pink' : 'text-gray-400'}`}>{dayLabels[i]}</p>
            <p className={`text-[10px] font-medium ${isToday(date) ? 'text-brand-pink' : 'text-gray-300'}`}>{date.getDate()}</p>
          </div>
        ))}
        <div className="w-12 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Streak</p>
        </div>
      </div>

      <div className="space-y-3">
        {habits.map(h => {
          const streak = getStreak(h.days);
          return (
            <div key={h.id} className="flex items-center">
              <p className="w-32 flex-shrink-0 font-semibold text-gray-800 text-sm pr-2 truncate">{h.name}</p>
              {weekDates.map((date, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const newHabits = habits.map(x => x.id === h.id ? { ...x, days: x.days.map((v: boolean, j: number) => j === i ? !v : v) } : x);
                    setHabits(newHabits);
                  }}
                  className={`flex-1 h-9 rounded-full flex items-center justify-center transition-all text-sm mx-0.5 ${
                    h.days[i]
                      ? 'bg-brand-pink text-white'
                      : isToday(date)
                        ? 'bg-pink-50 text-pink-300 border border-pink-200'
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {h.days[i] ? '⭐' : dayLabels[i].charAt(0)}
                </button>
              ))}
              <div className="w-12 text-center flex-shrink-0">
                <span className={`text-sm font-bold ${streak > 0 ? 'text-orange-500' : 'text-gray-300'}`}>
                  {streak > 0 ? `🔥${streak}` : '—'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

const GradeTracker = () => {
  const [grades, setGrades] = useLocalStorageState<any[]>('grades', []);
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [total, setTotal] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [scoreErr, setScoreErr] = useState(false);
  const [totalErr, setTotalErr] = useState(false);

  const validate = () => {
    let ok = true;
    setNameErr(false); setScoreErr(false); setTotalErr(false);
    if (!name.trim()) { setNameErr(true); ok = false; }
    const s = parseFloat(score);
    const t = parseFloat(total);
    if (isNaN(s) || s < 0) { setScoreErr(true); ok = false; }
    if (isNaN(t) || t <= 0) { setTotalErr(true); ok = false; }
    return ok;
  };

  const add = () => {
    if (!validate()) return;
    const pct = Math.min(100, Math.round((parseFloat(score) / parseFloat(total)) * 100));
    setGrades([...grades, { id: Date.now(), name: name.trim(), grade: pct }]);
    setName(''); setScore(''); setTotal('');
  };

  const avgGPA = grades.length > 0
    ? grades.reduce((sum, g) => sum + gradeToGPA(g.grade), 0) / grades.length
    : null;

  const gpaColor = avgGPA === null ? '' : avgGPA >= 3.5 ? 'text-green-600' : avgGPA >= 2.5 ? 'text-yellow-600' : 'text-red-600';

  const letterColor = (pct: number) => {
    if (pct >= 90) return 'text-green-600';
    if (pct >= 80) return 'text-blue-600';
    if (pct >= 70) return 'text-yellow-600';
    if (pct >= 60) return 'text-orange-500';
    return 'text-red-600';
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <OnboardingBanner
        storageKey="grades"
        title="The Grade Tracker shows you where you stand in each class, using real scores."
        firstStep="Add your hardest class first. Enter the points you earned and the total possible points."
      />
      <h2 className="section-header mb-1">Grade Tracker</h2>
      <p className="text-sm text-gray-500 mb-6">Enter your score and the total points possible. Letter grades and GPA are calculated automatically.</p>

      {avgGPA !== null && (
        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
          <p className="text-xs font-bold uppercase text-gray-400 mb-1 font-display">Estimated GPA (4.0 Scale)</p>
          <p className={`text-4xl font-bold font-display ${gpaColor}`}>{avgGPA.toFixed(2)}</p>
          <p className="text-xs text-gray-400 mt-1">Based on {grades.length} course{grades.length !== 1 ? 's' : ''} entered</p>
        </div>
      )}

      <div className="space-y-3 mb-6">
        <input
          value={name}
          onChange={e => { setName(e.target.value); setNameErr(false); }}
          placeholder="Class Name (e.g., Algebra 1)"
          className={`w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/20 ${nameErr ? 'border-red-400' : 'border-gray-200'}`}
        />
        {nameErr && <p className="text-xs text-red-500">Please enter a class name.</p>}
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="number"
              value={score}
              onChange={e => { setScore(e.target.value); setScoreErr(false); }}
              placeholder="Score (e.g., 87)"
              className={`w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/20 ${scoreErr ? 'border-red-400' : 'border-gray-200'}`}
            />
            {scoreErr && <p className="text-xs text-red-500 mt-1">Enter a number (0 or more).</p>}
          </div>
          <div className="flex-1">
            <input
              type="number"
              value={total}
              onChange={e => { setTotal(e.target.value); setTotalErr(false); }}
              placeholder="Total Points (e.g., 100)"
              className={`w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/20 ${totalErr ? 'border-red-400' : 'border-gray-200'}`}
            />
            {totalErr && <p className="text-xs text-red-500 mt-1">Total must be greater than 0.</p>}
          </div>
          <button onClick={add} className="bg-brand-teal text-white px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors self-start py-2.5">Add</button>
        </div>
      </div>

      <div className="space-y-2">
        {grades.map(g => (
          <div key={g.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group">
            <span className="font-medium text-gray-800">{g.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">{g.grade}%</span>
              <span className={`font-bold text-xl w-8 text-center ${letterColor(g.grade)}`}>
                {getLetterGrade(g.grade)}
              </span>
              <button onClick={() => setGrades(grades.filter(x => x.id !== g.id))} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {grades.length === 0 && (
          <p className="text-center text-gray-400 py-6 text-sm">No grades yet. Add a class above to get started!</p>
        )}
      </div>
    </Card>
  );
};

const TeacherResourceViewer = ({ data }: { data: TeacherGuide }) => (
  <Card className="max-w-4xl mx-auto">
    <div className="flex justify-between items-start mb-4 gap-4">
      <h2 className="section-header">{data.title}</h2>
      <PrintButton>Print</PrintButton>
    </div>
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
      <OnboardingBanner
        storageKey="chunker"
        title="The Project Chunker breaks any big assignment into manageable steps."
        firstStep="Type your project name, then add the very first action you need to take."
      />
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
            onKeyDown={e => e.key === 'Enter' && add()}
            placeholder="Add a step..."
            className="flex-1 p-2 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-pink/20"
          />
          <button onClick={add} className="bg-brand-pink text-white px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors">Add</button>
        </div>
        <div className="space-y-2">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
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
  const [content, setContent] = useState('');
  const [aiLog, setAiLog] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const prompt = "What is one thing you learned about your learning this week?";

  const save = () => {
    if (!content.trim()) return;
    setEntries([{
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      prompt,
      content: content.trim(),
      aiLog: aiLog.trim(),
    }, ...entries]);
    setContent('');
    setAiLog('');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <OnboardingBanner
        storageKey="journal"
        title="The Journal helps you process what you're learning and log your AI interactions."
        firstStep="Write at least 3 sentences about something that surprised you this week."
      />
      <h2 className="section-header mb-6">Journal & AI Log</h2>
      <div className="space-y-4">
        <div className="bg-brand-pink/5 p-4 rounded-lg">
          <p className="font-bold text-brand-pink">Reflection Prompt:</p>
          <p className="italic text-gray-700 mt-1">{prompt}</p>
        </div>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Write your reflection here..."
          rows={5}
          className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-pink/20 focus:outline-none"
        />
        <div>
          <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">AI Interaction Log (optional)</label>
          <textarea
            value={aiLog}
            onChange={e => setAiLog(e.target.value)}
            placeholder="Log any AI tools you used: what you asked, what it gave you, what you changed..."
            rows={3}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-pink/20 focus:outline-none text-sm"
          />
        </div>
        <button
          onClick={save}
          disabled={!content.trim()}
          className="w-full bg-brand-pink text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Save Entry
        </button>

        {entries.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 text-brand-teal font-semibold text-sm mb-3 no-print"
            >
              <ChevronDown size={16} className={`transition-transform ${showHistory ? 'rotate-180' : ''}`} />
              Past Entries ({entries.length})
            </button>
            {showHistory && (
              <div className="space-y-4">
                {entries.map(e => (
                  <div key={e.id} className="p-4 border border-gray-200 rounded-lg space-y-2">
                    <span className="text-xs text-gray-400 font-bold uppercase block">{e.date}</span>
                    {e.prompt && <p className="text-xs text-brand-pink italic">{e.prompt}</p>}
                    <p className="text-gray-700 whitespace-pre-wrap text-sm">{e.content ?? e.text}</p>
                    {e.aiLog && (
                      <div className="bg-gray-50 rounded-lg p-3 mt-2">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">AI Log</p>
                        <p className="text-xs text-gray-600 whitespace-pre-wrap">{e.aiLog}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
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
  const [lessonComplete, setLessonComplete] = useLocalStorageState(`lesson_done_${lessonKey}`, false);

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
            {lessonComplete && (
              <div className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-bold font-display flex items-center gap-1">
                <Star size={12} fill="currentColor" /> Complete!
              </div>
            )}
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
                placeholder="Reflect deeply on what you learned... (9 sentences required to complete)"
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
                Keep writing! You need at least 9 sentences to mark this lesson complete.
              </p>
            )}
            {isReflectionValid && !lessonComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 space-y-3"
              >
                <div className="flex items-center gap-2 text-brand-teal font-bold">
                  <Star size={18} fill="currentColor" />
                  <span>Reflection complete! You're ready to mark this lesson done.</span>
                </div>
                <button
                  onClick={() => setLessonComplete(true)}
                  className="w-full bg-brand-teal text-white py-3 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors"
                >
                  Mark Lesson Complete ✓
                </button>
              </motion.div>
            )}
            {lessonComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 flex items-center gap-2 text-brand-teal font-bold"
              >
                <Star size={18} fill="currentColor" />
                <span>Lesson complete! Outstanding work.</span>
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

  const handlePrint = () => {
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head>
      <title>${title}</title>
      <style>
        body { font-family: Georgia, serif; max-width: 800px; margin: 40px auto; padding: 20px; color: #111; }
        h1 { font-size: 22px; border-bottom: 2px solid #F26A8D; padding-bottom: 8px; margin-bottom: 16px; }
        h2 { font-size: 18px; color: #2B7A78; margin-top: 20px; }
        h3 { font-size: 15px; margin-top: 16px; }
        p { margin-bottom: 10px; line-height: 1.6; }
        ul { padding-left: 20px; margin-bottom: 10px; }
        li { margin-bottom: 4px; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        th { background: #f3f4f6; border: 1px solid #d1d5db; padding: 8px; font-weight: 600; text-align: left; }
        td { border: 1px solid #e5e7eb; padding: 8px; }
        hr { border: none; border-top: 1px solid #e5e7eb; margin: 16px 0; }
        .student-response { margin-top: 32px; border-top: 2px dashed #F26A8D; padding-top: 16px; }
        @media print { body { margin: 20px; } }
      </style>
    </head><body>
      <h1>${title}</h1>
      <div>${renderMarkdown(content)}</div>
      ${response ? `<div class="student-response"><h2>My Response</h2><p>${response.replace(/\n/g, '<br/>')}</p></div>` : ''}
    </body></html>`);
    win.document.close();
    win.print();
  };

  return (
    <Card className={`print-card transition-all duration-500 overflow-hidden ${isInteractive ? 'bg-[#f8f9fa] border-brand-pink/30 shadow-inner' : ''}`}>
      <div className="flex justify-between items-center border-b pb-2 mb-4 flex-wrap gap-2">
        <h3 className="section-header">{title}</h3>
        <div className="flex items-center gap-2 no-print">
          <PrintButton onClick={handlePrint}>Print Handout</PrintButton>
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
        <div className={`relative ${isInteractive ? 'opacity-60 scale-95 origin-top transition-all' : 'transition-all'}`}>
          <div className="bg-white/50 backdrop-blur-[2px] p-4 rounded-lg">
            <div
              className="md-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
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
  const handlePrintAll = () => {
    alert('Printing all materials... Use your browser\'s print dialog to save as PDF.');
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="page-title">Handout Library</h1>
          <p className="text-gray-600 mt-2">Toggle "Interactive" on any handout to fill it out digitally.</p>
        </div>
        <PrintButton onClick={handlePrintAll}>Print All Handouts</PrintButton>
      </div>
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

// Placeholder card for content not yet available
const ComingSoonCard = ({ label }: { label: string }) => (
  <div className="p-6 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-left opacity-70">
    <span className="text-xs text-gray-400 font-bold uppercase block mb-1">{label}</span>
    <p className="font-semibold text-gray-400 italic">[CONTENT COMING SOON]</p>
    <p className="text-xs text-gray-400 mt-1">This lesson is in development.</p>
  </div>
);

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
            <BackNav onClick={() => setSubPage(null)} />
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
                keys: ['ch2', 'ch3', 'ch4', 'ch5'],
                desc: 'Master your calendar, break down monster projects, and take great notes.'
              },
              {
                name: 'Academic Mastery',
                keys: ['ch6', 'ch7'],
                desc: 'Communication, collaboration, and navigating the social scene.'
              },
              {
                name: 'Social & Personal Skills',
                keys: ['ch8', 'ch9'],
                desc: 'Taking care of you and navigating digital life.'
              },
              {
                name: 'Future Ready',
                keys: ['ch11', 'ch12', 'conclusion'],
                desc: 'Financial literacy, AI co-pilots, and finishing strong.'
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
                    if (!l) return <ComingSoonCard key={key} label={key} />;
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
            <BackNav onClick={() => setSubPage('Lessons')} />
            <LessonViewer lesson={allLessonPlans[key]} isStudent={true} />
          </div>
        );
      }

      const toolWrap = (el: React.ReactNode) => (
        <div>
          <BackNav onClick={() => setSubPage(null)} />
          {el}
        </div>
      );

      if (subPage === 'TaskPlanner') return toolWrap(<TaskPlanner />);
      if (subPage === 'GradeTracker') return toolWrap(<GradeTracker />);
      if (subPage === 'HabitTracker') return toolWrap(<HabitTracker />);
      if (subPage === 'Chunker') return toolWrap(<ProjectChunker />);
      if (subPage === 'Journal') return toolWrap(<JournalPrompts />);
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
                <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-4">
                    <PlusIcon className="text-brand-pink" size={28} />
                    <h2 className="section-header">Complete Lesson Plans</h2>
                  </div>
                  <PrintButton onClick={() => { alert('Printing all materials... Use your browser\'s print dialog to save as PDF.'); window.print(); }}>
                    Download All
                  </PrintButton>
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
                  {/* Placeholder weeks for upcoming pacing content */}
                  {['Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'].map(w => (
                    <div key={w} className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg opacity-60">
                      <span className="text-xs text-gray-400 font-bold uppercase">{w}</span>
                      <p className="font-semibold text-gray-400 italic text-sm">[CONTENT COMING SOON]</p>
                    </div>
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
