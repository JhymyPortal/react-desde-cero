import { useState } from "react";

export function TwitterFollowCard({
  children,
  formatUserName,
  userName = "unknown",
  initialIsFollowing,
}) {
  const [isFollowing, isSetFollowing] = useState(initialIsFollowing);

  const imageSrc = `https://unavatar.io/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    isSetFollowing(!isFollowing);
  };

  return (
    <article style={{ display: "flex" }} className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="avatar" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="tw-textFollow">{text}</span>
          <span className="tw-stopFollowing">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
