const messages = [
  "Esto es donde Todo Comienza",
  "Cometa y comenta",
  "el control de version es el control de la vida",
  "comenta todo lo que haces",
  "El tiempo te dira si has hecho bien o mal",
  "Lock S-foils in attack position",
  "Este cometario es una mentira",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];
const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};
module.exports = {
  funnyCommit,
};
