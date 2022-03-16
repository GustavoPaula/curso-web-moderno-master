const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 20 * * 0", () => {
  console.log("Executando tarefa 1! ", new Date().getSeconds());
}); // segundo, minuto, hora, dia do mês, mês e o dia da semana

setTimeout(() => {
  tarefa1.cancel();
  console.log("Cancelando a tarefa1!");
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(0)];
regra.hour = 20;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log("Executando a tarefa2! ", new Date().getSeconds());
});
