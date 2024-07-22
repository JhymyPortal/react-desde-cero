import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const users = [
    {
      userName: "nodejs",
      isFollowing: true,
      name: "Node.js",
    },
    {
      userName: "github",
      isFollowing: true,
      name: "GitHub",
    },
    {
      userName: "code",
      isFollowing: false,
      name: "Visual Studio Code",
    },
    {
      userName: "reactjs",
      isFollowing: false,
      name: "React",
    },
    {
      userName: "angular",
      isFollowing: false,
      name: "Angular",
    },
  ];
  return (
    <div className="App">
      {users.map((user) => {
        const { name, userName, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </div>
  );
}
