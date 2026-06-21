import { useEffect, useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import Starfield from "./components/Starfield.jsx";
import TopBar from "./components/TopBar.jsx";
import SubjectPicker from "./screens/SubjectPicker.jsx";
import Overworld from "./screens/Overworld.jsx";
import Zone from "./screens/Zone.jsx";
import Lesson from "./screens/Lesson.jsx";
import Skirmish from "./screens/Skirmish.jsx";
import Boss from "./screens/Boss.jsx";
import Walkthrough from "./screens/Walkthrough.jsx";
import Chatbot from "./components/Chatbot.jsx";
import { getSubject } from "./data/subjects.js";
import { setProgressSubject, recordVisit } from "./lib/game.js";

export const Nav = createContext(null);
export const useNav = () => useContext(Nav);
export const Content = createContext(null);
export const useContent = () => useContext(Content);
export const Subject = createContext(null);
export const useSubject = () => useContext(Subject);

const SCREENS = { overworld: Overworld, zone: Zone, lesson: Lesson, skirmish: Skirmish, boss: Boss, walkthrough: Walkthrough };

export default function App() {
  const [subjectKey, setSubjectKey] = useState(null);
  const [content, setContent] = useState(null);
  const [route, setRoute] = useState({ name: "overworld", params: {} });

  useEffect(() => {
    if (!subjectKey) { setContent(null); return; }
    setProgressSubject(subjectKey);
    const sub = getSubject(subjectKey);
    setContent(null);
    fetch(sub.file).then((r) => r.json()).then(setContent).catch(() => setContent("err"));
  }, [subjectKey]);

  // Browser/phone Back button: the app is a single page with state-based routing, so without this
  // the Back button has no in-app history and exits the site. Mirror each navigation into the
  // History API; popstate (Back/Forward) restores the saved {subjectKey, route} instead of leaving.
  useEffect(() => {
    window.history.replaceState({ subjectKey, route }, "");
    const onPop = (e) => {
      const s = e.state || { subjectKey: null, route: { name: "overworld", params: {} } };
      setSubjectKey(s.subjectKey ?? null);
      setRoute(s.route || { name: "overworld", params: {} });
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const pushNav = (sk, r) => { try { window.history.pushState({ subjectKey: sk, route: r }, ""); } catch {} };
  const go = (name, params = {}) => { recordVisit(subjectKey, name, params); const r = { name, params }; setRoute(r); pushNav(subjectKey, r); window.scrollTo({ top: 0 }); };
  const openSubject = (key, route) => { const r = route || { name: "overworld", params: {} }; setSubjectKey(key); setRoute(r); pushNav(key, r); window.scrollTo({ top: 0 }); };
  const exitSubject = () => { const r = { name: "overworld", params: {} }; setSubjectKey(null); setRoute(r); pushNav(null, r); window.scrollTo({ top: 0 }); };

  // subject picker (home)
  if (!subjectKey) return <Shell><SubjectPicker openSubject={openSubject} /></Shell>;
  if (!content) return <Shell><LoadingSkeleton /></Shell>;
  if (content === "err") return (
    <Shell>
      <div className="px-5 pt-32 text-center">
        <p className="font-display text-xl text-rose">Couldn't load this subject.</p>
        <p className="mt-2 text-sm text-muted">Check your connection and try again.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => setSubjectKey(null)} className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:text-text">All subjects</button>
          <button onClick={() => window.location.reload()} className="rounded-full bg-amber px-5 py-2 text-sm font-medium text-ink transition-transform active:scale-95">Reload</button>
        </div>
      </div>
    </Shell>
  );

  const Screen = SCREENS[route.name];
  return (
    <Subject.Provider value={{ key: subjectKey, meta: getSubject(subjectKey), exitSubject }}>
      <Content.Provider value={content}>
        <Nav.Provider value={{ go, route, exitSubject }}>
          <Shell>
            <TopBar />
            <AnimatePresence mode="wait">
              <motion.main
                key={route.name + JSON.stringify(route.params)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="px-5 pb-28"
              >
                <Screen {...route.params} />
              </motion.main>
            </AnimatePresence>
            <Chatbot />
          </Shell>
        </Nav.Provider>
      </Content.Provider>
    </Subject.Provider>
  );
}

function Shell({ children }) {
  return (
    <>
      <Starfield />
      <div className="mx-auto w-full max-w-[920px]">{children}</div>
    </>
  );
}

function LoadingSkeleton() {
  return (
    <div className="px-5 pt-20" aria-busy="true" aria-label="Loading subject">
      <div className="h-3 w-28 animate-pulse rounded bg-raised" />
      <div className="mt-4 h-12 w-2/3 animate-pulse rounded-lg bg-raised" />
      <div className="mt-7 h-16 w-full animate-pulse rounded-[var(--radius-card)] bg-surface/60" />
      <div className="mt-8 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-[84px] w-full animate-pulse rounded-[var(--radius-card)] bg-surface/50" style={{ animationDelay: `${i * 90}ms` }} />
        ))}
      </div>
    </div>
  );
}
