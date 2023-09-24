export const getThumbnailSrc = (thumbnails) => {
  if (thumbnails?.maxres?.url) {
    return thumbnails?.maxres?.url;
  } else if (thumbnails?.standard?.url) {
    return thumbnails?.standard?.url;
  } else if (thumbnails?.high?.url) {
    return thumbnails?.high?.url;
  } else if (thumbnails?.medium?.url) {
    return thumbnails?.medium?.url;
  } else if (thumbnails?.default?.url) {
    return thumbnails?.default?.url;
  }
};

export const getDuration = (duration) => {
  let hours, minutes, seconds, index;
  let start = 2;
  let durationString = "";

  index = duration.indexOf("H");
  if (index !== -1) {
    hours = duration.slice(start, index);
    start = index + 1;
  }

  index = duration.indexOf("M");
  if (index !== -1) {
    minutes = duration.slice(start, index);
    start = index + 1;
  }

  index = duration.indexOf("S");
  if (index !== -1) {
    seconds = duration.slice(start, index);
    start = index + 1;
  }

  if (hours) {
    minutes = minutes ? minutes : "0";
    seconds = seconds ? seconds : "0";

    minutes = parseInt(minutes) < 10 ? "0" + minutes : minutes;
    seconds = parseInt(seconds) < 10 ? "0" + seconds : seconds;

    durationString = durationString.concat(
      hours + ":" + minutes + ":" + seconds
    );
  } else if (minutes) {
    seconds = seconds ? seconds : "0";

    seconds = parseInt(seconds) < 10 ? "0" + seconds : seconds;

    durationString = durationString.concat(minutes + ":" + seconds);
  } else if (seconds) {
    seconds = parseInt(seconds) < 10 ? "0" + seconds : seconds;

    durationString = durationString.concat("0:" + seconds);
  }

  return durationString;
};

export const getViewCount = (viewCount) => {
  const oneBillion = 1000000000;
  const oneMillion = 1000000;
  const oneThousand = 1000;
  let views = 0;
  let viewCountString = "";

  if (Math.floor(viewCount / oneBillion)) {
    views = viewCount / oneBillion;
    views = views < 10 ? Math.round(views * 10) / 10 : Math.floor(views);
    viewCountString = viewCountString.concat(views + "B");
  } else if (Math.floor(viewCount / oneMillion)) {
    views = viewCount / oneMillion;
    views = views < 10 ? Math.round(views * 10) / 10 : Math.floor(views);
    viewCountString = viewCountString.concat(views + "M");
  } else if (Math.floor(viewCount / oneThousand)) {
    views = viewCount / oneThousand;
    views = views < 10 ? Math.round(views * 10) / 10 : Math.floor(views);
    viewCountString = viewCountString.concat(views + "K");
  } else {
    viewCountString = viewCountString.concat(viewCount);
  }

  return viewCountString;
};

export const getPublishTime = (publishTime) => {
  const currentDate = new Date();
  const publishDate = new Date(publishTime);
  const milliseconds = currentDate - publishDate;
  let publishTimeString = "";

  const secondMilliseconds = 1000;
  const minuteMilliseconds = 60 * secondMilliseconds;
  const hourMilliseconds = 60 * minuteMilliseconds;
  const dayMilliseconds = 24 * hourMilliseconds;
  const monthMilliseconds = 30 * dayMilliseconds;
  const yearMilliseconds = 365 * dayMilliseconds;

  if (Math.floor(milliseconds / yearMilliseconds)) {
    const years = Math.floor(milliseconds / yearMilliseconds);
    publishTimeString = publishTimeString.concat(
      years + (years === 1 ? " year " : " years ") + "ago"
    );
  } else if (Math.floor(milliseconds / monthMilliseconds)) {
    const months = Math.floor(milliseconds / monthMilliseconds);
    publishTimeString = publishTimeString.concat(
      months + (months === 1 ? " month " : " months ") + "ago"
    );
  } else if (Math.floor(milliseconds / dayMilliseconds)) {
    const days = Math.floor(milliseconds / dayMilliseconds);
    publishTimeString = publishTimeString.concat(
      days + (days === 1 ? " day " : " days ") + "ago"
    );
  } else if (Math.floor(milliseconds / hourMilliseconds)) {
    const hours = Math.floor(milliseconds / hourMilliseconds);
    publishTimeString = publishTimeString.concat(
      hours + (hours === 1 ? " hour " : " hours ") + "ago"
    );
  } else if (Math.floor(milliseconds / minuteMilliseconds)) {
    const minutes = Math.floor(milliseconds / minuteMilliseconds);
    publishTimeString = publishTimeString.concat(
      minutes + (minutes === 1 ? " minute " : " minutes ") + "ago"
    );
  } else if (Math.floor(milliseconds / secondMilliseconds)) {
    const seconds = Math.floor(milliseconds / secondMilliseconds);
    publishTimeString = publishTimeString.concat(
      seconds + (seconds === 1 ? " second " : " seconds ") + "ago"
    );
  }

  return publishTimeString;
};
