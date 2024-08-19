interface ResData {
  articles: Articles;
}

const transformNewsAPIData = (data: NewsAPIData): ResData => {
  const articles = data.articles.map((article, i) => {
    return {
      ...article,
      source: article.source.name,
      id: `${i}__${article.publishedAt}`,
    };
  });

  return { articles };
};

const transformNycAPIData = (data: NewsAPIData): ResData => {
  const articles = data.articles.map((article, i) => {
    return {
      ...article,
      source: article.source.name,
      id: `${i}__${article.publishedAt}`,
    };
  });

  return { articles };
};

const transformGAPIData = (data: NewsAPIData): ResData => {
  const articles = data.articles.map((article, i) => {
    return {
      ...article,
      source: article.source.name,
      id: `${i}__${article.publishedAt}`,
    };
  });

  return { articles };
};

export const transformRes = (data: unknown, dSource: DSourceType): ResData => {
  let newData = null;
  switch (dSource) {
    case "news_api":
      newData = transformNewsAPIData(data as NewsAPIData);
      break;
    case "nyc":
      newData = transformNycAPIData(data as NewsAPIData);
      break;
    case "guardian":
      newData = transformGAPIData(data as NewsAPIData);
      break;

    default:
      newData = transformNewsAPIData(data as NewsAPIData);
      break;
  }
  return newData as ResData;
};
