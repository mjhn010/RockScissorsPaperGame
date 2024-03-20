import { useState } from "react";
import "./App.css";
import Rock from "./assets/rock.png";
import Scissor from "./assets/scissor.png";
import Paper from "./assets/paper.png";
import Box from "./component/Box";
import Reset from './assets/reset.png'
import Background from './assets/back.png'

//1.박스2개(타이틀,사진,결과).
//2.가위 바위 보 버튼.
//3.버튼을 클릭하면 클릭한 값이 박스에 보임.
//4.컴퓨터는 랜덤하게 선택.
//5.3번4번의 결과를 가지고 누가 이겼는지 확인
//6.승패결과에 따라 테투리 결과 변경.

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const choice = {
    scissor: {
      name: "Scissor",
      img: Scissor,
    },
    rock: {
      name: "Rock",
      img: Rock,
    },
    paper: {
      name: "Paper",
      img: Paper,
    },
  };
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    count(choice[userChoice], computerChoice);
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissor" ? "lose" : "win";
    } else if (user.name == "Scissor")
      return computer.name == "Paper" ? "lose" : "win";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "lose" : "win";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이를 만들어준다.
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const count = (user, computer) => {
    if (user.name == computer.name) {
      setUserCount(userCount);
      setComputerCount(computerCount);
    } else if (user.name == "Rock")
      return computer.name == "Scissor"
        ? `${setComputerCount(computerCount + 1)}`
        : `${setUserCount(userCount + 1)}`;
        else if (user.name == "Scissor")
      return computer.name == "Paper"
        ? `${setComputerCount(computerCount + 1)}`
        : `${setUserCount(userCount + 1)}`;
        else if (user.name == "Paper")
      return computer.name == "Rock"
        ? `${setComputerCount(computerCount + 1)}`
        : `${setUserCount(userCount + 1)}`;
  };
  return (
    <div className="container">
      <img className="background" src={Background}/>
      <div className="main-title">
      <h1>청개구리가위바위보</h1>
      <button className="reset" onClick={()=>{setUserCount(0);setComputerCount(0);}}><img className="reset-icon" src={Reset}/></button>
      </div>
      <div className="main">
        <Box title="User" item={userSelect} result={result} />
        <div className="count">
          {userCount}:{computerCount}
        </div>
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="btn-box">
        <button className="btn" onClick={() => play("scissor")}>
          <img className="icon" src={Scissor}/>
        </button>
        <button className="btn" onClick={() => play("rock")}>
          <img className="icon" src={Rock}/>
        </button>
        <button className="btn" onClick={() => play("paper")}>
          <img className="icon" src={Paper}/>
        </button>
      </div>
    </div>
  );
}

export default App;
