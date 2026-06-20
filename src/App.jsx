import { useEffect, useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import Starfield from "./components/Starfield.jsx";
import TopBar from "./components/TopBar.jsx";
import Overworld from "./screens/Overworld.jsx";
import Zone from "./screens/Zone.jsx";
import Lesson from "./screens/Lesson.jsx";
import Skirmish from "./screens/Skirmish.jsx";
import Boss from "./screens/Boss.jsx";
import Walkthrough from "./screens/Walkthrough.jsx";
import Chatbot from "./components/Chatbot.jsx";

export const Nav = createContext(null);
export const useNav = () => useContext(Nav);
export const Content = createContext(null);
export const useContent = () => useContext(Content);

const SCREENS = { overworld: Overworld, zone: Zone, lesson: Lesson, skirmish: Skirmish, boss: Boss, walkthrough: Walkthrough };

export default function App() {
  const [content, setContent] = useState(null);
  const [route, setRoute] = useState({ name: "overworld", params: {} });

  useEffect(() => {
    fetch("data/dmaths.json").then((r) => r.json()).then(setContent).catch(() => setContent("err"));
  }, []);

  const go = (name, params = {}) => { setRoute({ name, params }); window.scrollTo({ top: 0 }); };

  if (!content) return <Shell><div className="pt-40 text-center text-muted">Summoning the Logic Kingdom…</div></Shell>;
  if (content === "err") return <Shell><div className="pt-40 text-center text-rose">Couldn't load content. Run <code>npm run dev</code>.</div></Shell>;

  const Screen = SCREENS[route.name];
  return (
    <Content.Provider value={content}>
      <Nav.Provider value={{ go, route }}>
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
