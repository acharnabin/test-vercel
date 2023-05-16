export const getAgoTime = (time: string) => {
  const t = "";
  const currentTime = new Date();

  // get ago time from current time
  const agoTime = new Date(time);
  const diffTime = currentTime - agoTime;
  const diffDays = Math.floor(diffTime / 1000 / 60 / 60 / 24);
  const diffHours = Math.floor((diffTime / 1000 / 60 / 60) % 24);
  const diffMinutes = Math.floor((diffTime / 1000 / 60) % 60);
  const diffSeconds = Math.floor((diffTime / 1000) % 60);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hours ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  } else if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago `;
  } else {
    return t;
  }

  return t;
};
