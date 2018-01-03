const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});


client.on("message", (message) => {
  if (message.content.startsWith("[Chapa Metálica]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Chapa_Met%C3%A1lica");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Cristal de Argon]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Cristal_de_Argon");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Circuitos]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Circuitos");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Módulo de Controle]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/M%C3%B3dulo_de_Controle");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Criótico]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Cri%C3%B3tico");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Ferrite]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Ferrite");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Gálio]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/G%C3%A1lio");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Mórficos]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/M%C3%B3rficos");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Nano Esporos]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Nano_Esporos");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Sensores Neurais]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Sensores_Neurais");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Neurodes]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Neurodes");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Célula Orokin]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/C%C3%A9lula_Orokin");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Oxium]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Oxium");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Plastídeos]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Plast%C3%ADdeos");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Pacote de Polímeros]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Pacote_de_Pol%C3%ADmeros");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Rubedo]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Rubedo");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Restos]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Restos");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Tellurium]")) {
    message.channel.send("http://pt-br.warframe.wikia.com/wiki/Tellurium");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Armored Agility]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Armored_Agility");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Antitoxin]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Antitoxin_(Mod)");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Augur Message]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Augur_Message");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Aviator]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Aviator");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Blind Rage]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Blind_Rage");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("")) {
    message.channel.send("");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Constitution]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Constitution");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Continuity]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Continuity");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Diamond Skin]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Diamond_Skin");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Enemy Sense]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Enemy_Sense");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Equilibrium]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Equilibrium");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Fast Deflection]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Fast_Deflection");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Fleeting Expertise]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Fleeting_Expertise");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Flow]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Flow");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Fortitude]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Fortitude");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Handspring]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Handspring");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Heavy Impact]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Heavy_Impact");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Insulation]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Insulation");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Intensify]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Intensify");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Intruder]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Lightning_Rod");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Maglev]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Maglev");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Master Thief]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Master_Thief");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Narrow Minded]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Narrow_Minded");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Natural Talent]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Natural_Talent");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Overextended]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Overextended");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Primed Continuity]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Primed_Continuity");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Primed Flow]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Primed_Flow");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Primed Vigor]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Primed_Vigor");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Provoked]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Provoked");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Quick Thinking]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Quick_Thinking");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Rage]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Rage");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Rapid Resilience]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Rapid_Resilience");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Redirection]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Redirection");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Reflex Guard]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Reflex_Guard");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Retribution]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Retribution");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Rush]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Rush");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Shock Absorbers]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Shock_Absorbers");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Steel Fiber]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Steel_Fiber");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Streamline]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Streamline");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Streamlined Form]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Streamlined_Form");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Stretch]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Stretch");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Sure Footed]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Sure_Footed");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Thief's Wit]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Thief%27s_Wit");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Transient Fortitude]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Transient_Fortitude");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Undying Will]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Undying_Will");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Vigor]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Vigor");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Vitality]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Vitality");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("[Warm Coat]")) {
    message.channel.send("http://warframe.wikia.com/wiki/Warm_Coat");
  }
});

client.login(process.env.BOT_TOKEN);
