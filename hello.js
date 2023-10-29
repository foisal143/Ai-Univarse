// const allData = `https://openapi.programming-hero.com/api/ai/tools`;
// const idData = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
// load data for ai univarse
const loadAiData = async () => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/ai/tools`
    );
    const data = await res.json();
    showAiDatas(data.data.tools);
  } catch (er) {
    console.log(er);
  }
};

// show data for
const showAiDatas = data => {
  const aiContainer = document.getElementById('aiContainer');
};
loadAiData();
