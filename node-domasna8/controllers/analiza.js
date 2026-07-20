const getAnalysis = (req, res) => {
  res.render("analiza");
};

const postAnalysis = (req, res) => {
  const text = req.body.text;

  const characters = text.length;

  const words = text.trim().split(/\s+/);

  const totalWords = words.length;

  const lessThan5 = words.filter((word) => word.length < 5).length;

  const biggerThan5 = words.filter((word) => word.length > 5).length;

  const equal5 = words.filter((word) => word.length === 5).length;

  const paragraphs = text.split("\n").filter((p) => p.trim() !== "").length;

  const vowelsWords = words.filter((word) => /^[aeiouAEIOU]/.test(word)).length;

  res.render("rezultat", {
    text,
    characters,
    lessThan5,
    biggerThan5,
    equal5,
    paragraphs,
    totalWords,
    vowelsWords,
  });
};

module.exports = {
  getAnalysis,
  postAnalysis,
};
