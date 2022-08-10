const elmName = 'gh-header-title';
const elmKey = `.${elmName}`

const makeMarkdownLink = (text) => {
  const link = window.location.href;
  return `[${text.trim()}](${link})`;
}

document.onclick = (event) => {
  let elmTitle = null;

  if (event.target.classList.contains(elmName)) {
    elmTitle = event.target;
  } else {
    elmTitle = event.target.closest(elmKey);
  }

  if (!elmTitle) {
    return;
  }

  // const textToCopy = makeMarkdownLink(elmTitle.innerText);
  const textToCopy = elmTitle.innerText.trim();

  if(navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log(textToCopy);
    })
  } else {
    console.log('Browser Not compatible')
  }
};
