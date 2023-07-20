const { Telegraf } = require('telegraf');
const { readFileSync } = require('fs');
const { fs } = require ('fs')
const { writeFileSync } = require ('fs')


const bot = new Telegraf('5977826800:AAHjEWyGzGrydYt0GRx9mol7QRbL2wpIsB4');


bot.command('/start', (ctx) => ctx.reply('𝑯𝒆𝒚 𝑺𝒆𝒙𝒚 , 𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝑻𝒐 𝑺𝒆𝒙𝒚𝒄𝒍𝒖𝒃 𝑹𝒆𝒒𝒖𝒆𝒔𝒕 𝑩𝒐𝒕   𝑷𝒓𝒆𝒔𝒔 /cmds 𝒔𝒐 𝒕𝒉𝒂𝒕 𝑰 𝑪𝒂𝒏 𝑺𝒉𝒐𝒘 𝑾𝒉𝒂𝒕 𝑰 𝑪𝒂𝒏 𝑫𝒐 𝑭𝒐𝒓 𝒖.'));

bot.command('/cmds', (ctx) => ctx.reply('𝑹𝒆𝒔𝒈𝒊𝒔𝒕𝒆𝒓 𝑻𝒐 𝑨𝒄𝒆𝒔𝒔 𝑻𝒐 𝑪𝒍𝒖𝒃 -» /reg\n 𝑺𝒉𝒐𝒘 𝑼 𝒀𝒐𝒖𝒓 𝑺𝒕𝒂𝒕𝒖𝒔-» /status\n 𝑪𝒍𝒖𝒃 𝑴𝒂𝒏𝒂𝒈𝒆𝒓𝒔-» /ad'));
                                   
bot.command('/ad', (ctx) => ctx.reply('𝑨𝒍𝒍𝒐𝒘 𝑼𝒔𝒆𝒓 -» /approve [ User ID ]\n𝑫𝒐𝒏𝒕 𝑨𝒍𝒍𝒐𝒘 𝑼𝒔𝒆𝒓 -» /disapp [ User ID ]\nBan User -» /ban [ User ID ]\n𝑺𝒉𝒐𝒘 𝑨𝒄𝒕𝒊𝒗𝒆 𝑴𝒆𝒎𝒃𝒆𝒓𝒔 -» /showactive\n𝑽𝒊𝒆𝒘 𝑪𝒖𝒓𝒓𝒆𝒏𝒕 𝑪𝒍𝒖𝒃 𝑲𝒆𝒚 -» /vsk\n 𝑪𝒉𝒂𝒏𝒈𝒆 𝑪𝒍𝒖𝒃 𝑲𝒆𝒚-» /csk'));

bot.command('/vsk', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    sk = readFileSync('sk.txt','utf8')
    ctx.reply(sk)
  }
  else {
    ctx.reply('𝒀𝒐𝒖 𝒏𝒆𝒆𝒅 𝑻𝒐 𝑩𝒆 𝑩𝒊𝒈 𝑬𝒏𝒐𝒖𝒈𝒉 𝑻𝒐 𝑺𝒆𝒆 𝑪𝒍𝒖𝒃 𝑲𝒆𝒚.')
  }
});

bot.command('/csk', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    sk = ctx.message.text
    X = sk.substr(5)
    psk = readFileSync('sk.txt','utf8')
writeFileSync("sk.txt", "" + X);
    ctx.reply('𝑪𝒍𝒖𝒃 𝑲𝒆𝒚 𝑼𝒑𝒅𝒂𝒕𝒆𝒅.\nPrevious Sk : '+psk+'\nUpdated Sk : <code>'+X+'</code>',{ parse_mode: 'HTML' })
  }
  else {
    ctx.reply('𝒀𝒐𝒖 𝑵𝒆𝒆𝒅 𝑻𝒐 𝑩𝒆 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝑻𝒐 𝑽𝒊𝒆𝒘 𝑻𝒉𝒆 𝑲𝒆𝒚 𝑩𝒂𝒃𝒆.')
  }
});

bot.command('/reg', async ctx => {
  try {
    const response = await fetch('https://sexyclub.live/bot/adduser');
    const data = await response.json();
    console.log(data);
    ctx.reply('User Created: ' + data.user_created + '\nMessage: ' + data.message);
  } catch (error) {
    console.error('Error:', error);
    ctx.reply('𝑪𝒂𝒏𝒕 𝑷𝒓𝒐𝒄𝒆𝒔𝒔 𝒀𝒐𝒖𝒓 𝑹𝒆𝒒𝒖𝒆𝒔𝒕 𝑩𝒂𝒃𝒆 𝑻𝒓𝒚 𝑳𝒂𝒕𝒆𝒓...');
  }
});


bot.command('/showactive', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
fetch('https://sexyclub.live/bot/users.php?key=KING@SLAVER486')
  .then(response => response.json())
  .then(data => {
    const message = data.data.map(user => `Username: ${user.username}\nStatus: ${user.status}\n`).join('')
    bot.telegram.sendMessage(ctx.chat.id, message)
  })
  }
  else {
    ctx.reply('𝒀𝒐𝒖 𝑵𝒆𝒆𝒅 𝑻𝒐 𝑩𝒆 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝑻𝒐 𝑽𝒊𝒆𝒘 𝑻𝒉𝒆 𝑪𝒍𝒖𝒃 𝑴𝒆𝒎𝒃𝒆𝒓𝒔 𝑺𝒊𝒍𝒍𝒚.')
  }
});

bot.command('/ban', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    id = ctx.message.text
    X = id.substr(5)
    const data = fetch('https://sexyclub.live/bot/setstatus.php?key=KING@SLAVER486&tg_user_id='+X+'&tg_user_status=banned')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply(data.message)
            }
        )}
  else {
    ctx.reply('𝒀𝒐𝒖 𝒂𝒓𝒆 𝑵𝒐𝒕 𝑩𝒊𝒈 𝑬𝒏𝒐𝒖𝒈𝒉 𝑻𝒐 𝑩𝒂𝒏 𝑺𝒐𝒎𝒐𝒏𝒆.')
  }
});

bot.command('/disapp', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    id = ctx.message.text
    X = id.substr(8)
    const data = fetch('https://sexyclub.live/bot/setstatus.php?key=KING@SLAVER486&tg_user_id='+X+'&tg_user_status=pending')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply(data.message)
            }
        )}
  else {
    ctx.reply('𝒀𝒐𝒖 𝑵𝒆𝒆𝒅 𝑻𝒐 𝑩𝒆 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝑻𝒐 𝑩𝒂𝒏 𝑺𝒐𝒎𝒆𝒐𝒏𝒆   ')
  }
});

bot.command('/approve', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    id = ctx.message.text
    X = id.substr(9)
    const data = fetch('https://sexyclub.live/bot/setstatus.php?key=KING@SLAVER486&tg_user_id='+X+'&tg_user_status=active')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply(data.message)
            }
        )}
  else {
    ctx.reply('𝒀𝒐𝒖 𝑵𝒆𝒆𝒅 𝑻𝒐 𝑩𝒆 𝑴𝒂𝒏𝒂𝒈𝒆𝒓 𝑻𝒐 𝑩𝒂𝒏 𝑺𝒐𝒎𝒆𝒐𝒏𝒆.')
  }
});


  bot.command('/status', async ctx => {
  ctx.reply ( 'undefined')
  })
       
bot.command('/id', async ctx => {
  ctx.reply ( '𝒀𝒐𝒖𝒓 𝑰𝑫: '+ctx.from.id+'\n𝑪𝒉𝒂𝒕 𝑰𝑫 : '+ctx.chat.id+'\n𝑺𝒆𝒙𝒚 : '+ctx.message.from.first_name  + ' ' + '@'+ctx.from.username)
  })

bot.launch(); 