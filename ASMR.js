title ="Cap Bailey's ASMR Command";
rc_v ="vYT_11.24";
rc_url ="/Scaligi/Cap/main/ASMR";
db="xd4wYYVR";

q=q.toLowerCase();
n=a.length-1;

jump_short_message = "";
jump_member_message = "";
 
do {
r=Math.floor(Math.random()*n)+1;
jump_check = a[r-1].charAt(0);
jump = false;
if (jump_check=="#" ) {jump_short_message = "**S-JUMP** "; jump = true;}
if (jump_check=="`" ) {jump_member_message = "**M-JUMP** "; jump = true;}
}
while (jump == true);

s ="ASMR Video";

tag =[" - Don't forget to like the video!", " - What are you waiting for? Share, share, share!", " - Go comment to feed the YouTube algorithm!", " - Have you subscribed to Cap Bailey ASMR?", " - Don't miss another video, hit that notification bell!"];

options ="affirmation, ambient, apache, bodyguard, binaural, boy, coffee, collab, cne, cod, dr frantic, ears, eyes, face, food, gaming, guns, hair, halloween, hands, joker, lights, lumberjack, mafia, measuring, medical, military, movies, non roleplay, non verbal, nose, personal attention, pirate, q&a, shave, shorts, sports, starwars, tarkov, tattoo, throat, typing, western, whispered, ww2";

shorts = [591,588,584,581,577,572,568,565,561,560,558,556,555,554,516,514,513,505,503,501,500,498,497,454,429,402,401,397,396,395,393,392,388,382,381,378,377,375,373,371,370,369,368,362,356,351,349,345,343,340,331,317,305,298,295,288,277,266,193,182,178,175,158,141,139,137,135,133,131,129,127,125,123,121,119,117,91,66];

affirmation =[357,336,333,301,285,284,268,149,122,118,70,15];
ambient =[334,300,291,237,211,209,199,196,177,162,155,152,150,103,101,100,95,94,92,83,81,79,77,75,74,72,65,64,51,18,11];
apache =[481,297,288,23];
bg =[284,260,249];
bi =[341,339,338,337,336,335,334,333,332,330,329,328,327,326,325,324,323,322,321,320,319,318,316,315,314,312,311,310,309,308,307,306,304,303,301,300,299,297,296,294,293,292,290,289,287,286,285,284,282,281,280,279,278,277,276,275,274,273,272,271,270,269,268,267,265,264,263,262,261,260,259,258,257,256,255,254,252,251,250,247,246,245,244,243,241,238,236,235,230,227,226,225,222,219,217,216,208,207,202,201,198,189,185,183,180,157,154,148,146,145,144,142,140,138,136,124,122,120,118,116,112,108,107,106,105,104,102,101,100,99,71]; 
boy =[348,313,286,281,275,272,262,256,251,247,244,241,240,239];
cne =[394,364,360,335,306,304,290,278,277,264,261,253,231,228,226,225,221,210,201,197,194,189,184,167,163,154,115,91,87,38,8,5];
coffee =[317,110,85,60,1];
collab =[323,286,207,199,196,163,159,63,25];
drf =[367,306,104,88,69,58,49];
ear =[384,360,344,335,323,306,285,282,277,264,261,228,226,221,200,191,115,108];
eye =[414,360,350,342,335,323,321,318,314,314,311,307,306,296,287,285,280,277,269,264,261,247,243,228,223,221,214,198,190,179,166,156,136,135,120,119,115,107,96,78,55,25,16,2];
face =[385,357,341,339,338,337,332,329,328,324,322,321,316,315,312,309,308,307,306,303,301,293,284,274,271,262,250,244,243,242,233,207,206,188,183,173,132,124,122,118,116,98,39,34,17,9];
food =[341,262,256,241,239,211,183,160,90,74,32];
game =[310,211,146,130,128,94,92,65,11,5];
gun =[415,409,383,320,284,283,270,234,229,224,215,185,169,151,148,146,144,143,142,68];
hair =[386,366,332,322,302,281,249,239,233,213,138,112,97,84,50,44];
halloween =[306,302,304,300,248,196,194,192,159,62,57,54,34];
hand =[338,329,328,324,322,316,315,308,301,271,267,265,261,251,246,227,218,202,198,186,181,173,171,157,153,143,122,118,116,114,84,83,63,53,17];
jk =[54,99,159,194,248,304,427,523];
key =[284,280,273,269,126,45,35];
lit =[414,337,336,330,329,327,323,321,318,314,311,309,306,307,301,293,292,271,267,265,264,261,228,226,222,207,206,190,188,184,179,136,132,120,118,106,98,96,93,88,87,86,78,76,75,73,70,69,63,62,61,55,49,33,21,20,5,2];
mafia =[355,257,169,160,109,10];
measure =[303,284,254,196,149,109,89];
med =[414,360,339,335,334,327,326,323,321,318,314,311,307,306,304,307,296,294,293,291,290,287,285,282,280,278,277,269,267,264,261,258,253,250,245,243,238,237,236,231,228,226,225,223,221,218,214,212,210,206,205,204,203,201,200,199,198,197,195,194,192,191,190,189,187,186,184,179,174,170,167,166,163,161,159,156,154,152,147,136,132,130,128,124,120,115,108,107,106,104,102,101,96,94,93,88,87,78,75,72,71,69,62,58,57,55,52,51,49,43,39,38,37,32,31,28,27,25,24,21,18,16,14,13,8,5,2];
military =[415,334,310,252,237,211,209,199,152,151,146,144,142,130,124,106,101,94,79,18,5];
movie =[304,302,254,248,194,160,159,100,99,83,74,68,59,54,40,10];
nonrp =[338,337,336,333,329,328,326,324,321,319,316,315,312,309,308,307,303,301,292,289,283,276,271,270,268,263,259,255,252,246,242,227,222,215,208,207,188,185,180,172,164,153,151,148,144,143,142,140,118,114,110,105,98,97,90,86,85,80,77,73,66,61,60,56,53,50,48,45,41,36,33,29,23,22,17,15];
nonverbal =[317,302,215,150,143,12];
nose =[360,335,306,264,228,24];
pa =[357,338,337,336,333,329,328,322,316,309,308,307,195,307,301,300,297,293,292,291,290,289,285,284,281,279,275,274,273,272,268,265,262,260,259,258,256,255,254,251,250,249,248,247,245,244,242,241,240,239,136,118,73,70,69,68,61,60,59,44,33,20,15,9,3];
qa =[56,36,29];
shv =[386,274,257,216,202,157,153,116,89,64,19];
sport =[285,273,219,208,168,113,82,67,43];
tark =[211,146,130];
throat =[306,277,228,132,115,24];
west =[363,220,186,150,128,103,72,51,11];
whisp =[357,307,301,299,290,287,270,265,263,262,260,259,250,246,243,226,225,217,185,179,173,140,124,122,108,106,105,99,61];
ww2 =[334,252,237,199,152,124,101,79,18];

vera = [436,328,303,300,259,118,3];
temple = [297,283];
emily = [443,413,186,128,60];

rev =[54,99,159,194,248,304,427];

f = shorts.includes(r);

jamie ="https://youtu.be/COdqD8Bg3uc";

gnarly =[
"PSA AK-104 GF5 / Affordable(ish) Alpha AK / First 1,000 Rounds https://youtu.be/ep3H-JEFRCc",
"P-Mags are F-Tier | Refurbishing & Loading Surplus Steel Magazines ASMR https://youtu.be/6CvH1bsXlh0",
"DTNVS with Photonis 4G Night Vision Goggles | Tube Specs In Description #asmr https://youtu.be/mxhUNrTlT2Y",
"AR15 Cleaning ASMR https://youtu.be/tkJrXFocFS8",
"ASMR My Recce Rifle Setup | ASMR For The Boys https://youtu.be/5LIzZzIWNvo"
];

other =[
"James Matthew ASMR - DARK ASMR - THE RITUAL (Featuring CAP BAILEY!) HALLOWEEN ROLE PLAY! https://youtu.be/wz4tvVyZxcI",
"Atlas ASMR: The Gentlemen 2 | Male ASMR Collab https://www.youtu.be/CXO8GeDLiR0",
"RaffyTaphyASMR: ASMR Good Sounds with the Boys (hand sounds, gloves, tapping) https://youtu.be/TQHCBJGv8Rs",
"ASMR Rich: ASMR | INSANE GUN SOUNDS WITH THE HOMIES With @RaffyTaphyASMR and @Cap Bailey ASMR For Sleep https://youtu.be/OCdxI1cu7pI",
"edafoxx ASMR: The Girl In The Back Of The Class Gives You A Head Massage - Relaxing ASMR ft. @Cap Bailey ASMR https://youtu.be/Y7LB5tsE89k",
"edafoxx ASMR: THE ASMR COLLAB: 21 Roleplays in 21 Minutes with Your Favorite ASMRtists! https://youtu.be/zsMPHJQgew4?t=577"];


if(q=="test" && a[n]==""){"```"+title+": NC_"+nc_v+"/RC_"+rc_v+" User="+u+", Query="+q+", Total="+n+", Shorts="+shorts.length+", Members=None, Random="+r+", URLfetch Successful: Database:"+db+" Remote_Code:"+rc_url+"```";}
else if(q=="test"){"```"+title+": NC_"+nc_v+"/RC_"+rc_v+" User="+u+", Query="+q+", Total="+n+", Shorts="+shorts.length+", Members="+[n+1]+", Random="+r+", URLfetch Successful: Database:"+db+" Remote_Code:"+rc_url+"```";}
else if(q=="v"){"Version: NC_"+nc_v+"/RC_"+rc_v;}
else if(q=="tags"||q=="tag list"){"The post hyperlink tags are: "+tag+" Total Tags="+tag.length;}

else if(q=="help"||q=="?"){"!asmr suggests a random video from Cap Bailey's YouTube channel | !asmr 1 - "+n+" selects a specific video | Command options include !asmr latest, list, total | Use !asmr options for a list of category options | !asmr featuring bailey for other ASMR artists suggestions";}
else if(q=="list"){"The video list database used by this command is available here: https://pastebin.com/"+db;}
else if(q=="options"||q=="option"){"**Options:** "+options;}
else if(q=="total"){"Cap Bailey has "+n+" ASMR videos on his YouTube channel, including "+[n-shorts.length]+" Full length videos and "+[shorts.length]+" #Shorts, including three announcements.";}
else if(q=="rev"){rev.reverse(); u+" --> Reverse Array list: "+rev+" Total="+rev.length;}
else if(q=="f"){u+" --> Found= "+f+", Random ="+r;}

else if(t=="scaligi"){"Scaligi's favourite Cap Bailey "+s+" 61. "+a[61-1];}
else if(t=="Scaligi"){"Scaligi's second favourite Cap Bailey "+s+" 2. "+a[2-1];}
else if(t=="Scali"||q=="scali"){"Scaligi's go to Cap Bailey "+s+" from 7m 30s in (To avoid that damn cloth I can tell you!) 314. "+a[314-1]+"?t=450";}


else if(q=="Vera"||q=="vera"){vera_r = Math.floor(Math.random()*vera.length); "One of Vera's favourite Cap Bailey "+s+"s "+vera[vera_r]+". "+a[vera[vera_r]-1]+" 💜 "+tag[Math.floor(Math.random()*tag.length)];}
else if(t=="<@904784029180653639>"||t=="verafiedtrashpanda"){vera_r = Math.floor(Math.random()*vera.length); "One of Vera's favourite Cap Bailey "+s+"s "+vera[vera_r]+". "+a[vera[vera_r]-1]+" 💜 "+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="verafiedtrashpanda list"||q=="vera list"){vera.reverse();u+" --> Vera's favourite Cap Bailey "+s+"s list: "+vera+" Total="+vera.length;}

else if(t=="undeadkraken765"||t=="<@1167290110862172240>"){"Undeadkraken's favourite Cap Bailey "+s+" 300. "+a[300-1]+" 🩸🧛‍♂️🩸🧛‍♂️🩸";}
else if(t=="undeadkraken"||t=="kraken"){"Undeadkraken's favourite Cap Bailey "+s+" 300. "+a[300-1]+" 🩸🧛‍♂️🩸🧛‍♂️🩸";}

else if(t=="<@1072357495923822692>"){temple_r = Math.floor(Math.random()*temple.length); "One of Temple_0f_Time's favourite Cap Bailey "+s+"s "+temple[temple_r]+". "+a[temple[temple_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(t=="temple_0f_time"||q=="temple"){temple_r = Math.floor(Math.random()*temple.length); "One of Temple_0f_Time's favourite Cap Bailey "+s+"s "+temple[temple_r]+". "+a[temple[temple_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="temple list"||t=="temple_0f_time list"){temple.reverse();u+" --> Temple_0f_Time's favourite Cap Bailey "+s+"s list: "+temple+" Total="+temple.length;}

else if(t=="<@1030257179476901958>"){emily_r = Math.floor(Math.random()*emily.length); "One of Emily's favourite Cap Bailey "+s+"s "+emily[emily_r]+". "+a[emily[emily_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="emily"||t=="Emily"){emily_r = Math.floor(Math.random()*emily.length); "One of Emily's favourite Cap Bailey "+s+"s "+emily[emily_r]+". "+a[emily[emil_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(t=="emilygrace237"||t=="emily_grace"){emily_r = Math.floor(Math.random()*emily.length); "One of Emily's favourite Cap Bailey "+s+"s "+emily[emily_r]+". "+a[emily[emily_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="emily list"||t=="Emily list"){emily.reverse();u+" --> Emily's favourite Cap Bailey "+s+"s list: "+emily+" Total="+emily.length;}


 
else if(q==""||q=="#"){jump_short_message+jump_member_message+s+" suggestion for "+u+" "+r+". "+a[r-1]+tag[Math.floor(Math.random()*tag.length)];}



else if(q=="latest"||q=="new"){"My latest video on YouTube "+a[n-1]+tag[Math.floor(Math.random()*tag.length)];}

else if(q=="shorts"||q=="short"){shorts_r = Math.floor(Math.random()*shorts.length); "#Shorts "+s+" suggestion for "+u+" "+shorts[shorts_r]+ ". " + a[shorts[shorts_r]-1].split(' ').slice(1).join(' ') +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="shorts list"||q=="short list"){shorts.reverse();u+" --> #Shorts ASMR video list is: "+shorts+" Total="+shorts.length;}

else if(q=="announcement"||q=="twitch"){"Announcement "+s+"s selected by "+u+" 66. "+a[66-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="members" && a[n]==""){"There is no current members only pre-release "+s+" "+u;}
else if(q=="members only" && a[n]==""){"There is no current members only pre-release "+s+" "+u;}
else if(q=="members"||q=="members only"){"Members Only pre-release "+s+" selected by "+u+" "+[n+1]+". "+a[n];}
else if(q=="hidden members"||q=="hidden members only"){"Hidden Members Only "+s+" selected by "+u+" - Super Random But Relaxing Video https://youtu.be/r05IrZ6_oWg";}

else if(q=="gnarly"){"Oh That's Gnarly video: "+ gnarly[Math.floor(Math.random()*gnarly.length)];}
else if(q=="gnarly new"||q=="gnarly latest"){"Oh That's Gnarly video: "+ gnarly[0];}

else if(q=="other"||q=="featuring bailey"){"Other ASMR artist featuring Cap Bailey: "+ other[Math.floor(Math.random()*other.length)];}

else if(q>0&&q<=n){s+" selected by "+u+" "+a[q-1]+tag[Math.floor(Math.random()*tag.length)];}

else if(q=="apache"||q=="Apache"){s+" of Apache selected by "+u+" 23. "+a[23-1]+" and #Short 288. "+a[288-1];}
else if(q=="cod"){"COD "+s+"s selected by "+u+" 5. "+a[5-1]+" and 106. "+a[106-1];}
else if(q=="cyberpunk"){"Cyberpunk "+s+"s selected by "+u+" 25. "+a[25-1]+" and 75. "+a[75-1];}
else if(q=="beat"||q=="beating"){"Cap Bailey's beating then fixing you selected by "+u+" 208. "+a[208-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="fix"||q=="punch"){"Cap Bailey's beating then fixing you selected by "+u+" 208. "+a[208-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="lumberjack"||q=="raccoon"){"Lumberjack "+s+" selected by "+u+" 291. "+a[291-1]+tag[Math.floor(Math.random()*tag.length)];}

else if(q=="jamie"||q=="jamie french"){"Jamie French featuring Cap Bailey "+jamie;}
else if(q=="pirate"||q=="pirates"){"Pirate "+s+" selected by "+u+" 59. "+a[59-1];}
else if(q=="shark"){"Cap Bailey's Shark ASMR selected by "+u+" 263. "+a[263-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="starwars"||q=="star wars"){"Star Wars "+s+" selected by "+u+" 100. "+a[100-1];}
else if(q=="tattoo"||q=="tattoos"){"Cap Bailey's tattoos selected by "+u+" 53. "+a[53-1]+" and 246. "+a[246-1];}
else if(q=="I'm your idiot"||q=="I'm an idiot"){"I'm your idiot "+s+" selected by "+u+" 105. "+a[105-1];}
else if(q=="i'm your idiot"||q=="i'm an idiot"){"I'm your idiot "+s+" selected by "+u+" 105. "+a[105-1];}


else if(q=="affirmation"){affirmation_r = Math.floor(Math.random()*affirmation.length); "Positive affirmation "+s+" suggestion for "+u+" "+affirmation[affirmation_r]+". "+a[affirmation[affirmation_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="affirmation list"){affirmation.reverse(); u+" --> Positive affirmation "+s+" list is: "+affirmation+" Total="+affirmation.length;}

else if(q=="ambient"||q=="background"){ambient_r = Math.floor(Math.random()*ambient.length); "Ambient background noise "+s+" suggestion for "+u+" "+ambient[ambient_r]+ ". " + a[ambient[ambient_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="ambient list"||q=="background list"){ambient.reverse();u+" --> Ambient background noise "+s+" list is: "+ambient+" Total="+ambient.length;}

else if(q=="apache #"||q=="Apache #"){apache_r = Math.floor(Math.random()*apache.length); s+" featuring Apache suggested for "+u+" "+apache[apache_r]+". "+a[apache[apache_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="apache list"||q=="Apache list"){apache.reverse(); u+" --> "+s+"s featuring Apache list is: "+apache+" Total="+apache.length;}

else if(q=="bodyguard #"){ bg_r = Math.floor(Math.random()*bg.length); "Bodyguard "+s+" suggestion for "+u+" " +bg[bg_r]+ ". " +a[bg[bg_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="bodyguard"){"Bodyguard Videos selected by "+u+" 249. "+a[249-1]+" and 260. "+a[260-1];}
else if(q=="bodyguard list"){bg.reverse(); u+" --> Bodyguard "+s+" list is: "+bg+" Total="+bg.length;}

else if(q=="binaural"||q=="bi"){bi_r = Math.floor(Math.random()*bi.length); "Binaural "+s+" suggestion for "+u+" " +bi[bi_r]+ ". " +a[bi[bi_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="binaural list"||q=="bi list"){u+" --> Binaural "+s+" list: https://raw.githubusercontent.com/Scaligi/Remote-Code/main/BinauralList Total="+med.length;}

else if(q=="boy"){boy_r = Math.floor(Math.random()*boy.length); "The boy "+s+" suggestion for "+u+" " +boy[boy_r]+ ". " +a[boy[boy_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="boy list"){boy.reverse(); u+" --> The boy "+s+" list is: "+boy+" Total="+boy.length;}

else if(q=="cne"){cne_r = Math.floor(Math.random()*cne.length); "CNE "+s+" suggestion for "+u+" " +cne[cne_r]+ ". " +a[cne[cne_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="cne list"){cne.reverse(); u+" --> CNE ASMR video list is: "+cne+" Total="+cne.length;}

else if(q=="coffee"||q=="Coffee"){coffee_r = Math.floor(Math.random()*coffee.length); "Coffee "+s+" suggestion for "+u+" "+coffee[coffee_r]+ ". " + a[coffee[coffee_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="coffee list"||q=="Coffee list"){coffee.reverse();u+" --> Coffee "+s+" list is: "+coffee+" Total="+coffee.length;}

else if(q=="collab"||q=="collaboration"){collab_r = Math.floor(Math.random()*collab.length); "Collaboration "+s+" suggestion for "+u+" " +collab[collab_r]+ ". " +a[collab[collab_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="collab list"||q=="collaboration list"){collab.reverse(); u+" --> Collaboration ASMR video list is: "+collab+" Total="+collab.length;}

else if(q=="drfrantic"||q=="frantic"){drf_r = Math.floor(Math.random()*drf.length); "Dr Frantic "+s+" suggestion for "+u+" " +drf[drf_r]+ ". " +a[drf[drf_r]-1]+" ☠️⚰️💀 RIP Dr Frantic! 💀⚰️☠️";}
else if(q=="doctor frantic"||q=="dr frantic"){drf_r = Math.floor(Math.random()*drf.length); "Dr Frantic "+s+" suggestion for "+u+" " +drf[drf_r]+ ". " +a[drf[drf_r]-1]+" ☠️⚰️💀 RIP Dr Frantic! 💀⚰️☠️";}
else if(q=="drfrantic list"){drf.reverse(); u+" --> Dr Frantic "+s+" list is: "+drf+" Total="+drf.length;}

else if(q=="ear"||q=="ears"){ear_r = Math.floor(Math.random()*ear.length); "Ears "+s+" suggestion for "+u+" " +ear[ear_r]+ ". " +a[ear[ear_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="ear list"||q=="ears list"){ear.reverse(); u+" --> Ears "+s+" list is: "+ear+" Total="+ear.length;}

else if(q=="eye"||q=="eyes"){eye_r = Math.floor(Math.random()*eye.length); "Eyes "+s+" suggestion for "+u+" " +eye[eye_r]+ ". " +a[eye[eye_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="eye list"||q=="eyes list"){eye.reverse(); u+" --> Eyes "+s+" list is: "+eye+" Total="+eye.length;}

else if(q=="face"){face_r = Math.floor(Math.random()*face.length); "Face touching "+s+" suggestion for "+u+" " +face[face_r]+ ". " +a[face[face_r]-1];}
else if(q=="face list"){face.reverse(); u+" --> Face touching "+s+" list is: "+face+" Total="+face.length;}

else if(q=="food"||q=="Food"){food_r = Math.floor(Math.random()*food.length); "Food "+s+" suggestion for "+u+" "+food[food_r]+ ". " + a[food[food_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="food list"||q=="Food list"){food.reverse();u+" --> Food "+s+" list is: "+food+" Total="+food.length;}

else if(q=="gaming"||q=="video game"){game_r = Math.floor(Math.random()*game.length); "Gaming "+s+" suggestion for "+u+" " +game[game_r]+ ". " +a[game[game_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="gaming list"||q=="video gaming list"){game.reverse(); u+" --> Gaming "+s+" list is: "+game+" Total="+game.length;}
else if(q=="game list"||q=="video game list"){game.reverse(); u+" --> Gaming "+s+" list is: "+game+" Total="+game.length;}

else if(q=="guns"||q=="gun"){gun_r = Math.floor(Math.random()*gun.length); "Gun "+s+" suggestion for "+u+" " +gun[gun_r]+ ". " +a[gun[gun_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="guns list"||q=="gun list"){gun.reverse(); u+" --> Gun "+s+" list is: "+gun+" Total="+gun.length;}
else if(q=="pew pew pew"||q=="pew"){gun_r = Math.floor(Math.random()*gun.length); "Gun "+s+" suggestion for "+u+" " +gun[gun_r]+ ". " +a[gun[gun_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="pew pew pew list"||q=="pew list"){gun.reverse(); u+" --> Gun "+s+" list is: "+gun+" Total="+gun.length;}

else if(q=="hair"){hair_r = Math.floor(Math.random()*hair.length); "Hair "+s+" suggestion for "+u+" " +hair[hair_r]+ ". " +a[hair[hair_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="hair list"){hair.reverse(); u+" --> Hair ASMR video list is: "+hair+" Total="+hair.length;}

else if(q=="halloween"||q=="Halloween"){halloween_r = Math.floor(Math.random()*halloween.length); "🎃🎃🎃 Halloween "+s+" suggestion for "+u+" "+halloween[halloween_r]+ ". " + a[halloween[halloween_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="halloween list"||q=="Halloween list"){halloween.reverse();u+" --> 🎃🎃🎃 Halloween "+s+" list is: "+halloween+" Total="+halloween.length;}

else if(q=="hands"||q=="hand"){hand_r = Math.floor(Math.random()*hand.length); "Hands "+s+" suggestion for "+u+" " +hand[hand_r]+ ". " +a[hand[hand_r]-1];}
else if(q=="hand list"||q=="hands list"){hand.reverse(); u+" --> Hands ASMR video list is: "+hand+" Total="+hand.length;}

else if(q=="joker"){jk_r = Math.floor(Math.random()*jk.length); "The Joker "+s+" suggestion for "+u+" " +jk[jk_r]+ ". " +a[jk[jk_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="joker list"){jk.reverse(); u+" --> The Joker "+s+" list is: "+jk+" Total="+jk.length;}

else if(q=="keyboard"||q=="key board"){key_r = Math.floor(Math.random()*key.length); "Keyboard Typing "+s+" suggestion for "+u+" " +key[key_r]+ ". " +a[key[key_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="key"||q=="typing"){key_r = Math.floor(Math.random()*key.length); "Keyboard Typing "+s+" suggestion for "+u+" " +key[key_r]+ ". " +a[key[key_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="keyboard list"||q=="key board list"){key.reverse(); u+" --> Keyboard Typing "+s+" list is: "+key+" Total="+key.length;}
else if(q=="key list"||q=="typing list"){key.reverse(); u+" --> Keyboard Typing "+s+" list is: "+key+" Total="+key.length;}

else if(q=="lights"){lit_r = Math.floor(Math.random()*lit.length); "light triggers "+s+" suggestion for "+u+" " +lit[lit_r]+ ". " +a[lit[lit_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="lights list"){lit.reverse(); u+" --> Light triggers "+s+" list is: "+lit+" Total="+lit.length;}

else if(q=="mafia"||q=="mob"){mafia_r = Math.floor(Math.random()*mafia.length); "Mafia mob triggers "+s+" suggestion for "+u+" " +mafia[mafia_r]+ ". " +a[mafia[mafia_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="mafia list"||q=="mob list"){mafia.reverse(); u+" --> Mafia mob triggers "+s+" list is: "+mafia+" Total="+mafia.length;}

else if(q=="measure"||q=="measuring"){measure_r = Math.floor(Math.random()*measure.length); "Measuring you triggers "+s+" suggestion for "+u+" " +measure[measure_r]+ ". " +a[measure[measure_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="measure list"||q=="measuring list"){measure.reverse(); u+" --> Measuring you triggers "+s+" list is: "+measure+" Total="+measure.length;}

else if(q=="medical"||q=="med"){med_r = Math.floor(Math.random()*med.length); "Medical "+s+" suggestion for "+u+" " +med[med_r]+ ". " +a[med[med_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="medical list"||q=="med list"){u+" --> Medical "+s+" list: https://raw.githubusercontent.com/Scaligi/Remote-Code/main/MedicalList Total="+med.length;}

else if(q=="military"||q=="Military"){military_r = Math.floor(Math.random()*military.length); "Military "+s+" suggestion for "+u+" "+military[military_r]+ ". " + a[military[military_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="military list"||q=="Military list"){military.reverse();u+" --> Military "+s+" list is: "+military+" Total="+military.length;}

else if(q=="movie"||q=="movies"){movie_r = Math.floor(Math.random()*movie.length); "Movie inspired "+s+" suggestion for "+u+" " +movie[movie_r]+ ". " +a[movie[movie_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="movie list"||q=="movies list"){movie.reverse(); u+" --> Movie inspired "+s+" list is: "+movie+" Total="+movie.length;}

else if(q=="non roleplay"||q=="non rp"){nonrp_r = Math.floor(Math.random()*nonrp.length); "Non Roleplay "+s+" suggestion for "+u+" " +nonrp[nonrp_r]+ ". " +a[nonrp[nonrp_r]-1]+" - Thanks to VerafiedTrashPanda for suggesting this option and putting together the list";}
else if(q=="non roleplay list"||q=="non rp list"){nonrp.reverse(); u+" --> Non Roleplay "+s+" list is: "+nonrp+" Total="+nonrp.length;}

else if(q=="non verbal"||q=="nonverbal"){nonverbal_r = Math.floor(Math.random()*nonverbal.length); "Non Verbal "+s+" suggestion for "+u+" "+nonverbal[nonverbal_r]+ ". " + a[nonverbal[nonverbal_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="non verbal list"||q=="nonverbal list"){nonverbal.reverse();u+" --> Non Verbal "+s+" list is: "+nonverbal+" Total="+nonverbal.length;}

else if(q=="nose"||q=="Nose"){nose_r = Math.floor(Math.random()*nose.length); "Nose "+s+" suggestion for "+u+" "+nose[nose_r]+ ". " + a[nose[nose_r]-1]+tag[Math.floor(Math.random()*tag.length)]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="nose list"||q=="Nose list"){nose.reverse();u+" --> Nose "+s+" list is: "+nose+" Total="+nose.length;}

else if(q=="personal attention"||q=="pa"){pa_r = Math.floor(Math.random()*pa.length); "Personal attention "+s+" suggestion for "+u+" " +pa[pa_r]+ ". " +a[pa[pa_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="personalattention"||q=="personal"){pa_r = Math.floor(Math.random()*pa.length); "Personal attention "+s+" suggestion for "+u+" " +pa[pa_r]+ ". " +a[pa[pa_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="pa list"||q=="personalattention list"){pa.reverse(); u+" --> Personal attention ASMR video list is: "+pa+" Total="+pa.length;}
else if(q=="personal list"||q=="personal attention list"){pa.reverse(); u+" --> Personal attention ASMR video list is: "+pa+" Total="+pa.length;}

else if(q=="Q&A"||q=="q&a"){qa_r = Math.floor(Math.random()*qa.length); "Q&A "+s+" suggestion for "+u+" " +qa[qa_r]+ ". " +a[qa[qa_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="Q&A list"||q=="q&a list"){qa.reverse(); u+" --> Q&A "+s+" list is: "+qa+" Total="+qa.length;}

else if(q=="shave"){shv_r = Math.floor(Math.random()*shv.length); "Shaving "+s+" suggestion for "+u+" " +shv[shv_r]+ ". " +a[shv[shv_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="shave list"){shv.reverse(); u+" --> Shaving "+s+" list is: "+shv+" Total="+shv.length;}

else if(q=="sports"||q=="sport"){sport_r = Math.floor(Math.random()*sport.length); "Sports "+s+" suggestion for "+u+" " +sport[sport_r]+ ". " +a[sport[sport_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="sports list"||q=="sport list"){sport.reverse(); u+" --> Sports "+s+" list is: "+sport+" Total="+sport.length;}

else if(q=="tarkov"){tark_r = Math.floor(Math.random()*tark.length); "Escape from Tarkov "+s+" suggestion for "+u+" " +tark[tark_r]+ ". " +a[tark[tark_r]-1] +tag[Math.floor(Math.random()*tag.length)];}
else if(q=="tarkov all"){"All Tarkov Videos selected by "+u+" 130. "+a[130-1]+" and 146. "+a[146-1]+" and 211. "+a[211-1];}
else if(q=="tarkov list"){tark.reverse(); u+" --> Tarkov "+s+" list is: "+tark+" Total="+tark.length;}

else if(q=="throat"||q=="Throat"){throat_r = Math.floor(Math.random()*throat.length); "Throat "+s+" suggestion for "+u+" " +throat[throat_r]+ ". " +a[throat[throat_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="throat list"||q=="Throat list"){throat.reverse(); u+" --> Throat "+s+" list is: "+throat+" Total="+throat.length;}

else if(q=="western"||q=="west"){west_r = Math.floor(Math.random()*west.length); "Western "+s+" suggestion for "+u+" " +west[west_r]+ ". " +a[west[west_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="western list"||q=="west list"){west.reverse(); u+" --> Western "+s+" list is: "+west+" Total="+west.length;}

else if(q=="whisper"||q=="whispered"){whisp_r = Math.floor(Math.random()*whisp.length); "Whispered "+s+" suggestion for "+u+" " +whisp[whisp_r]+ ". " +a[whisp[whisp_r]-1]+" - Many thanks to VerafiedTrashPanda for suggesting this option";}
else if(q=="whisper list"||q=="whispered list"){whisp.reverse(); u+" --> Whispered "+s+" list is: "+whisp+" Total="+whisp.length;}

else if(q=="ww2"){ww2_r = Math.floor(Math.random()*ww2.length); "WW2 "+s+" suggestion for "+u+" " +ww2[ww2_r]+ ". " +a[ww2[ww2_r]-1]+tag[Math.floor(Math.random()*tag.length)];}
else if(q=="ww2 list"){ww2.reverse(); u+" --> WW2 "+s+" list is: "+ww2+" Total="+ww2.length;}

else{"*"+u+" --> When specifying please select a number between 1 and "+n+" or use* `!asmr help` *for a list of other command options*";}
