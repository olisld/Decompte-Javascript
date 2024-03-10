const timer = setInterval(function () { 
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1); // Prochain 1er janvier

  const timeLeft = endOfYear - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `Il reste ${days} jours, ${hours} heures, ${minutes} minutes, et ${seconds} secondes avant la fin de l'année.`;
  //   Code
}, 1000);
