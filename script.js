function getAdvice() {
  let advice_num = document.getElementById("advice-num");
  let advice_text = document.getElementById("advice-text");
  let adviceTextLength = null;

  axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => {
      advice_num.textContent = `ADVICE ${res.data.slip.id}`;
      advice_text.textContent =
        String.fromCodePoint(8220) +
        res.data.slip.advice +
        String.fromCodePoint(8221);
      adviceTextLength = res.data.slip.advice;
      if (window.innerWidth < 566 && adviceTextLength.length > 70) {
        advice_text.style.fontSize = "large";
      }
    })
    .catch((err) => {
      advice_text.textContent =
        String.fromCodePoint(128679) +
        " I am sorry an error occured, come back later " +
        String.fromCodePoint(128679);
    });
}
