import "./App.css";
import "./css/normalize.css";
import "./css/style.css";
import "./css/common/common.css";

import Main from "./pages/Main";
import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";
// 컴포넌트 (즉, JSX 뽑기)

function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    if (isOpen === false) {
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="wrap">
        <Layout>
          <Main />
        </Layout>
        {isOpen && (
          <div className="overlay">
            <div className="modal">
              <p>해당 프로젝트는 퍼블리싱 연습용 프로젝트입니다</p>
              <div>
                <button onClick={closeModal}>닫기</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
