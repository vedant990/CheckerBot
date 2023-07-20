const { Telegraf } = require('telegraf');
const { readFileSync } = require('fs');
const { fs } = require ('fs')
const { writeFileSync } = require ('fs')


const bot = new Telegraf('5660143974:AAFUNxp5eCy5IMGWEq50ES4iDJvmNhY_12w');


bot.command('/start', (ctx) => ctx.reply('Hey Dude. I am a checker Management Bot. Press /cmds for available commands.'));

bot.command('/cmds', (ctx) => ctx.reply('Register on checker -» /reg\nShow Account Status -» /status\nAdmin Commands -» /ad'));
                                   
bot.command('/ad', (ctx) => ctx.reply('Approve User -» /approve [ User ID ]\nDisapprove User -» /disapp [ User ID ]\nBan User -» /ban [ User ID ]\nShow Active Users -» /showactive\nView Current Sk -» /vsk\nChange Current Sk -» /csk'));

bot.command('/vsk', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    sk = readFileSync('sk.txt','utf8')
    ctx.reply(sk)
  }
  else {
    ctx.reply('You need to be an admin to view currenct sk.')
  }
});

bot.command('/csk', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    sk = ctx.message.text
    X = sk.substr(5)
    psk = readFileSync('sk.txt','utf8')
writeFileSync("sk.txt", "" + X);
    ctx.reply('Sk has been updated.\nPrevious Sk : '+psk+'\nUpdated Sk : <code>'+X+'</code>',{ parse_mode: 'HTML' })
  }
  else {
    ctx.reply('You need to be an admin to view currenct sk.')
  }
});

bot.command('/reg', async ctx => {
    const data = fetch('https://devdipunetwork.me/bot/adduser.php?key=KING@SLAVER486&tg_user_id='+ctx.from.id+'&tg_user_username='+ctx.from.username)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply('User Created : '+data.user_created+'\nMessage : '+data.message)
  })
});             

bot.command('/showactive', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
fetch('https://devdipunetwork.me/bot/users.php?key=KING@SLAVER486')
  .then(response => response.json())
  .then(data => {
    const message = data.data.map(user => `Username: ${user.username}\nStatus: ${user.status}\n`).join('')
    bot.telegram.sendMessage(ctx.chat.id, message)
  })
  }
  else {
    ctx.reply('You need to be an admin to view active users list.')
  }
});

bot.command('/ban', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    id = ctx.message.text
    X = id.substr(5)
    const data = fetch('https://devdipunetwork.me/bot/setstatus.php?key=KING@SLAVER486&tg_user_id='+X+'&tg_user_status=banned')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply(data.message)
            }
        )}
  else {
    ctx.reply('You need to be an admin to ban an user.')
  }
});

bot.command('/disapp', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    id = ctx.message.text
    X = id.substr(8)
    const data = fetch('https://devdipunetwork.me/bot/setstatus.php?key=KING@SLAVER486&tg_user_id='+X+'&tg_user_status=pending')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply(data.message)
            }
        )}
  else {
    ctx.reply('You need to be an admin to ban an user.')
  }
});

bot.command('/approve', (ctx) => {
  const owners = readFileSync('admins.txt', 'utf8');
  if (owners.indexOf('' + ctx.from.id) > -1) {
    id = ctx.message.text
    X = id.substr(9)
    const data = fetch('https://devdipunetwork.me/bot/setstatus.php?key=KING@SLAVER486&tg_user_id='+X+'&tg_user_status=active')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    ctx.reply(data.message)
            }
        )}
  else {
    ctx.reply('You need to be an admin to ban an user.')
  }
});


  bot.command('/status', async ctx => {
  ctx.reply ( 'undefined')
  })
       
bot.command('/id', async ctx => {
  ctx.reply ( 'Telegram ID : '+ctx.from.id+'\nChatID : '+ctx.chat.id+'\nUser : '+ctx.message.from.first_name  + ' ' + '@'+ctx.from.username)
  })

bot.launch(); 