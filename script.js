let difficulty; //int
let matr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //matrix number
let i,j,k,c,r,s,g; //int
let x,err; //bool
let aranad; //array for random
let Table = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]; //matrix string

//Database categories objectives

/*Difficulty: Easy*/
let cate1 = ["Learn how to dig", "Read a book", "Learn how to grow in size", "Learn a new crafting recipe", "Learn how to shrink in size"];
let cate2 = ["Commit sudoko (kill urself)", "Kill a knight", "Kill a spider", "Kill a zombie", "Kill any flying enemy"];
let cate3 = ["Collect 100 golden things", "Obtain a card", "Obtain a fruit", "Harvest some plants", "Obtain a key"];
let cate4 = ["Obtain a map", "Reach any checkpoint", "Save your game", "Save with full health", "Create a backup save"];
let cate5 = ["Defeat any enemy", "Affect an enemy with a debuff", "Perform a 3-hit combo", "Block an attack", "Dodge an attack perfectly"];
let cate6 = ["Touch Grass", "Enter a forest", "Enter a jungle", "Enter a castle", "Enter a desert"];
let cate7 = ["Glitch out of bounds", "Item dupe", "T-pose glitch", "Animation cancel", "Clip through a door"];
let cate8 = ["Gain an extra life", "Lose a life to fall damage", "Revive an ally", "Find a 1-up mushroom", "Have exactly 0 lives left"];
let cate9 = ["Look at a woman", "Look at a stone statue", "Look at a metal statue", "Look at the sun (praise optional)", "Observe a sleeping enemy"];
let cate10 = ["Kill any boss", "Beat any non-tutorial boss", "Defeat a tutorial boss", "Defeat a boss in under 5 minutes", "Defeat a boss using the environment"];
let cate11 = ["Ride an elevator", "Obtain a hammer", "Obtain a wrench", "Use a lockpick", "Use a grappling hook"];
let cate12 = ["Increase max health", "Obtain an extra life", "Buy any healing item", "Die", "Increase your defence"];
let cate13 = ["Obtain a musical instrument", "Play any song", "Listen to the title screen music", "Use any magic", "Find a jukebox"];
let cate14 = ["Buy an item from a shop", "Buy any type of potion", "Sell an item", "Change the background music", "Buy armor"];
let cate15 = ["Befriend an enemy", "Stun an enemy", "Interrupt an enemy attack", "Get spotted by a guard", "Taunt an enemy"];
let cate16 = ["Use an ability connected to fire", "Use an ability connected to ice", "Use an ability connected to lightning", "Double jump", "Dash"];
let cate17 = ["Meet a merchant", "Rescue any npc", "Meet a ghost", "Meet a king", "Meet a beggar"];
let cate18 = ["Reveal a secret passage", "Pass through a fake wall", "Fall through a fake floor", "Find a hidden chest", "Discover a secret room"];
let cate19 = ["Ride any animal", "Obtain a new vehicle", "Ride a boat or raft", "Ride a train", "Drive a car"];
let cate20 = ["Change your hat", "Equip a matching armor set", "Dye your clothes", "Wear a disguise", "Unequip all clothes"];
let cate21 = ["Defeat an enemy with melee only", "Obtain a hammer type weapon", "Kill an enemy with a sword", "Use explosives", "Kill a skeleton"];
let cate22 = ["Beat a boss with only ranged attacks", "Increase your max ammo", "Pick up some ammunition", "Reload any weapon", "Pick up any gun"];
let cate23 = ["Complete a tutorial", "Level up to level 5", "Reach level 10", "Complete a side quest", "Complete the first level"];
let cate24 = ["Trigger a tripwire", "Disarm a trap", "Trigger a trap on purpose", "Read the credits", "Survive a trap"];
let cate25 = ["Change your game language to a different alphabet", "Pause the game during a cutscene", "Make a new character", "Take a screenshot", "Spam the crouch button"];

/*Difficulty: Normal*/
let catn1 = ["Learn an ability involving water", "Learn an ability involving fire", "Learn an ability involving electricity", "Learn a password", "Learn to fly"];
let catn2 = ["Kill a mummy", "Kill an enemy while submerged", "Kill a floating hand", "Kill a floating skull", "Kill a ghost"];
let catn3 = ["Obtain a vegetable", "Obtain explosives", "Obtain a rare artifact", "Obtain a legendary sword", "Obtain a piece of a map"];
let catn4 = ["Save while poisoned", "Save with 1 HP", "Overwrite a save file", "Save after a boss fight", "Beat a level without saving"];
let catn5 = ["Defeat an enemy using only kicks", "Defeat an enemy using only punches", "Stack 3 debuffs on one enemy", "Counter an attack", "Survive a 5-enemy ambush"];
let catn6 = ["Touch a cloud", "Enter a volcano", "Enter outer space", "Climb a mountain", "Reach the top of a hill"];
let catn7 = ["Become invisible", "Break the physics engine", "Out of bounds skip", "Duplicate an important item", "Find a dev texture"];
let catn8 = ["Find a hidden life", "Sacrifice a life for an item", "Get revived", "Gain 5 lives in one level", "Finish a stage with 1 life left"];
let catn9 = ["Observe a rare creature", "Watch an NPC routine", "Read an ancient tablet", "Inspect a painting", "Stare into the abyss"];
let catn10 = ["Kill a boss with throwing weapons", "Kill an insect boss", "Kill a mechanical boss", "Kill a boss with at least 2 phases", "Defeat a boss without taking damage"];
let catn11 = ["Turn on a light", "Use a flashlight", "Use a compass", "Use binoculars", "Use a tracker"];
let catn12 = ["Obtain 3 extra lives", "Drink a healing potion", "Heal an NPC", "Increase your status resistance", "Heal using food only"];
let catn13 = ["Play a minigame with music", "Unlock a new soundtrack", "Play an instrument perfectly", "Listen to an enemy's song", "Stop the music"];
let catn14 = ["Buy 3 different items from a shop", "Obtain 100 of any currency", "Sell some loot", "Buy the most expensive item", "Barter with a merchant"];
let catn15 = ["Get grabbed by an enemy", "Ground a flying enemy", "Capture a thief/criminal", "Encounter an evil version of yourself", "Lure an enemy into a trap"];
let catn16 = ["Use a healing ability", "Use a time-slowing ability", "Use a mind control ability", "Use a teleport ability", "Use telekinesis"];
let catn17 = ["Meet a king", "Meet a scientist", "Meet a betrayer", "Meet an alien", "Meet a god"];
let catn18 = ["Reveal a secret passage", "Turn into an animal", "Discover an easter egg", "Find a hidden developer room", "Find a secret ending"];
let catn19 = ["Ride a snowboard or a sled", "Complete a minecart section", "Ride a dragon", "Steal a vehicle", "Pilot an aircraft"];
let catn20 = ["Upgrade your armour", "Upgrade your shoes", "Wear a disguise", "Wear a formal suit", "Change your hair"];
let catn21 = ["Upgrade a sword", "Uprade a shotgun", "Defeat an armored enemy with melee", "Break an enemy's shield", "Kill a vampire"];
let catn22 = ["Upgrade a bow", "Complete an autoscroll section", "Shoot a target from far away", "Get a headshot", "Ricochet a bullet"];
let catn23 = ["Change the water level", "Reach level 25", "Complete a bonus stage", "Complete a stealth section", "Max out a skill"];
let catn24 = ["Get hit by a boulder", "Push an enemy into a trap", "Dodge a swinging blade", "Survive a poison trap", "Disarm 5 traps"];
let catn25 = ["Reach 100k points in anything", "Complete a level without killing any enemies", "Play without HUD for 10 minutes", "Finish a level perfectly", "Beat a time trial"];

/*Difficulty: Hard*/
let cath1 = ["Learn to teleport", "Manipulate time", "Manipulate gravity", "Learn all spells", "Learn to speak to animals"];
let cath2 = ["Kill a dragon", "Kill a king", "Kill a shapeshifter", "Kill a god/deity", "Kill an invisible enemy"];
let cath3 = ["Harvest wheat", "Obtain an endgame weapon", "Obtain all collectibles", "Obtain the true ending item", "Obtain every single item"];
let cath4 = ["Save the game in a hostile area", "Complete the game without saving", "Save only 3 times in a run", "Corrupt a save file", "Delete your save file"];
let cath5 = ["Escape from prison", "Survive a 1v10 fight", "Defeat enemies using only the environment", "Win a fight blindfolded", "Defeat the hardest enemy type"];
let cath6 = ["Skip an autoscroller", "Fall from the sky", "Reach the bottom of the ocean", "Enter a parallel dimension", "Travel to the future/past"];
let cath7 = ["Softlock the game", "Wrong warp", "Trigger an integer overflow", "Sequence break a major item", "Exploit a boss AI"];
let cath8 = ["Complete a level without dying", "Obtain 5 extra lives", "Beat the game with 1 life", "Gain 99 lives", "Complete a deathless run"];
let cath9 = ["Observe a celestial event", "Decipher a fictional language", "Watch all credits without skipping", "Observe a hidden cutscene", "Find all lore notes"];
let cath10 = ["Kill 2 bosses without dying", "Kill a boss without getting hit", "Kill a boss without attacking", "Kill a boss with at least 3 phases", "Defeat a boss with the starting weapon"];
let cath11 = ["Lower your max health", "Build a complex machine", "Create a custom weapon", "Use a grappling hook to kill", "Use every tool in the game"];
let cath12 = ["Obtain 1000 of any currency", "Beat a boss with 1 HP left", "Never upgrade health", "Complete a pacifist run", "Beat the game without healing"];
let cath13 = ["Kill 5 enemies with one explosive", "Unlock the sound test menu", "Find a hidden radio station", "Compose a song", "Sync your actions to the music"];
let cath14 = ["Play the game with no sound", "Become a millionaire", "Rob a shopkeeper", "Sell your best weapon", "Ruin a merchant's business"];
let cath15 = ["Buy out a shop's inventory", "Kill 3 enemies in one shot", "Pacify a hostile group", "Turn enemies against each other", "Survive an infinite enemy wave"];
let cath16 = ["Defeat a giant enemy", "Rescue the princess!", "Use a forbidden magic", "Stop time", "Master every ability"];
let cath17 = ["Find a mermaid", "Meet the creator/developer", "Meet your clone", "Meet a character from another game", "Meet the final boss early"];
let cath18 = ["Access a secret world", "Find a glitched area", "Solve a secret puzzle", "Find the dev room", "Find a sequence break secret"];
let cath19 = ["Complete a vehicle race", "Destroy a vehicle", "Fly a spaceship", "Complete an escort mission", "Ride a mythical creature"];
let cath20 = ["Obtain the rarest outfit", "Craft a legendary armor", "Complete a no-armor run", "Equip cursed gear", "Wear the most ridiculous outfit"];
let cath21 = ["Defeat a boss using only melee", "Defeat an enemy with a parry", "Defeat an army with a sword", "Defeat 3 bosses", "Melee a flying enemy"];
let cath22 = ["Hit a moving target from far", "Complete a sniper mission", "Complete a level using only projectiles", "Don't miss a single shot", "Snipe an enemy mid-air"];
let cath23 = ["Complete a world", "Reach the max level", "Unlock a secret character", "Complete the hardest difficulty", "Complete the final level"];
let cath24 = ["Survive a trap gauntlet", "Use a trap to kill a boss", "Disarm a trap blindfolded", "Survive a room full of lasers", "Build a trap"];
let cath25 = ["Finish a game", "100% completion", "Speedrun a level", "Beat a game under 2 hours", "No hit run of a stage"];



//Functions for selecting the type of card
//Short
function Easy()
{
    console.log("Short card!");
    difficulty = 1;
    document.getElementById("Tdtype").innerHTML = "Short";
    main();
}

//Normal
function Normal()
{
    console.log("Normal");
    difficulty = 2;
    document.getElementById("Tdtype").innerHTML = "Normal";
    main();
}

//Long
function Hard()
{
    console.log("hard!");
    difficulty = 3;
    document.getElementById("Tdtype").innerHTML = "Long";
    main();
}


//Table objectives charging
function easy()
{
    if(i==0)
    {
        switch(r)
        {
            case 1: s= Rand2();//cat1
                    Table[g] = cate1[s];
                    break;
            case 2: s= Rand2();//cat2
                    Table[g] = cate2[s];
                    break;
            case 3: s= Rand2();//cat3
                    Table[g] = cate3[s];
                    break;
            case 4: s= Rand2();//cat4
                    Table[g] = cate4[s];
                    break;
            case 5: s= Rand2();//cat5
                    Table[g] = cate5[s];
                    break;
        }
    }
    else if(i==1)
    {
        switch(r)
        {
            case 1: s= Rand2();//cat1
                    Table[g+5] = cate6[s];
                    break;
            case 2: s= Rand2();//cat2
                    Table[g+5] = cate7[s];
                    break;
            case 3: s= Rand2();//cat3
                    Table[g+5] = cate8[s];
                    break;
            case 4: s= Rand2();//cat4
                    Table[g+5] = cate9[s];
                    break;
            case 5: s= Rand2();//cat5
                    Table[g+5] = cate10[s];
                    break;
        }
    }
    else if(i==2)
    {
        switch(r)
        {
            case 1: s= Rand2();//cat1
                    Table[g+10] = cate11[s];
                    break;
            case 2: s= Rand2();//cat2
                    Table[g+10] = cate12[s];
                    break;
            case 3: s= Rand2();//cat3
                    Table[g+10] = cate13[s];
                    break;
            case 4: s= Rand2();//cat4
                    Table[g+10] = cate14[s];
                    break;
            case 5: s= Rand2();//cat5
                    Table[g+10] = cate15[s];
                    break;
        }
    }
    else if(i==3)
    {
        switch(r)
        {
            case 1: s= Rand2();//cat1
                    Table[g+15] = cate16[s];
                    break;
            case 2: s= Rand2();//cat2
                    Table[g+15] = cate17[s];
                    break;
            case 3: s= Rand2();//cat3
                    Table[g+15] = cate18[s];
                    break;
            case 4: s= Rand2();//cat4
                    Table[g+15] = cate19[s];
                    break;
            case 5: s= Rand2();//cat5
                    Table[g+15] = cate20[s];
                    break;
        }
    }
    else if(i==4)
    {
        switch(r)
        {
            case 1: s= Rand2();//cat1
                    Table[g+20] = cate21[s];
                    break;
            case 2: s= Rand2();//cat2
                    Table[g+20] = cate22[s];
                    break;
            case 3: s= Rand2();//cat3
                    Table[g+20] = cate23[s];
                    break;
            case 4: s= Rand2();//cat4
                    Table[g+20] = cate24[s];
                    break;
            case 5: s= Rand2();//cat5
                    Table[g+20] = cate25[s];
                    break;
        }
    }
}

function normal()
{
    if(i==0)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g] = catn1[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g] = catn2[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g] = catn3[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g] = catn4[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g] = catn5[s];
                    break;
        }
    }
    else if(i==1)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+5] = catn6[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+5] = catn7[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+5] = catn8[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+5] = catn9[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+5] = catn10[s];
                    break;
        }
    }
    else if(i==2)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+10] = catn11[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+10] = catn12[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+10] = catn13[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+10] = catn14[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+10] = catn15[s];
                    break;
        }
    }
    else if(i==3)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+15] = catn16[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+15] = catn17[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+15] = catn18[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+15] = catn19[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+15] = catn20[s];
                    break;
        }
    }
    else if(i==4)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+20] = catn21[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+20] = catn22[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+20] = catn23[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+20] = catn24[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+20] = catn25[s];
                    break;
        }
    }

}

function hard()
{
    if(i==0)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g] = cath1[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g] = cath2[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g] = cath3[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g] = cath4[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g] = cath5[s];
                    break;
        }
    }
    else if(i==1)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+5] = cath6[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+5] = cath7[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+5] = cath8[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+5] = cath9[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+5] = cath10[s];
                    break;
        }
    }
    else if(i==2)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+10] = cath11[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+10] = cath12[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+10] = cath13[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+10] = cath14[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+10] = cath15[s];
                    break;
        }
    }
    else if(i==3)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+15] = cath16[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+15] = cath17[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+15] = cath18[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+15] = cath19[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+15] = cath20[s];
                    break;
        }
    }
    else if(i==4)
    {
        switch(r)
        {
            case 1: s= Rand2(); //cat1
                    Table[g+20] = cath21[s];
                    break;
            case 2: s= Rand2(); //cat2
                    Table[g+20] = cath22[s];
                    break;
            case 3: s= Rand2(); //cat3
                    Table[g+20] = cath23[s];
                    break;
            case 4: s= Rand2(); //cat4
                    Table[g+20] = cath24[s];
                    break;
            case 5: s= Rand2(); //cat5
                    Table[g+20] = cath25[s];
                    break;
        }
    }

}

function main()
{
    g=0;
    i=0;
    aranad = [0,0,0,0,0];
    for(j=0;j<=24;j++)
        {
            if(j%5==0 && j!=0)
                {
                    i+=1;
                    aranad = [0,0,0,0,0];
                    g=0;
                }
            do
            {
                r = Rand1();
                console.log(r);
                console.log(" ");
                aranad[g]=r;
                err=false;
                x=true;
                for(k=0;k<=4;k++)
                {
                    if(aranad[k]==r)
                    {
                        if(k==g){x==false;}
                        else{err=true;}
                    }
                }
                if(err==true){}
                else
                {
                    x=false;
                }
            }while(x==true && err==true);
            matr[j]=r;
            console.log("V:");
            console.log(matr[j]);
            console.log(" ");
            switch(difficulty)
            {
                case 1: easy(); break;
                case 2: normal(); break;
                case 3: hard(); break;
            }
            g+=1;
        }
    //print number matrix
    console.log("\n");
    console.log("Numbers Table:");
    for(j=0;j<=24;j++)
        {
            if(j%5==0 && j!=0)
            {
                console.log("\n");
            }
            console.log(matr[j]);
        }
        console.log("\n");
    //print string matrix
    console.log("\n");
    console.log("Goals Table:");
    for(j=0;j<=24;j++)
        {
            if(j%5==0 && j!=0)
            {
                console.log("\n");
            }
            console.log(Table[j]);
        }
        console.log("\n");
    //assignment to the html table 
    for(c=0;c<=24;c++)
        {
            switch(c+1)
                {
                    case 1: document.getElementById("slot1").innerHTML = Table[c]; break;
                    case 2: document.getElementById("slot2").innerHTML = Table[c]; break;
                    case 3: document.getElementById("slot3").innerHTML = Table[c]; break;
                    case 4: document.getElementById("slot4").innerHTML = Table[c]; break;
                    case 5: document.getElementById("slot5").innerHTML = Table[c]; break;
                    case 6: document.getElementById("slot6").innerHTML = Table[c]; break;
                    case 7: document.getElementById("slot7").innerHTML = Table[c]; break;
                    case 8: document.getElementById("slot8").innerHTML = Table[c]; break;
                    case 9: document.getElementById("slot9").innerHTML = Table[c]; break;
                    case 10: document.getElementById("slot10").innerHTML = Table[c]; break;
                    case 11: document.getElementById("slot11").innerHTML = Table[c]; break;
                    case 12: document.getElementById("slot12").innerHTML = Table[c]; break;
                    case 13: document.getElementById("slot13").innerHTML = Table[c]; break;
                    case 14: document.getElementById("slot14").innerHTML = Table[c]; break;
                    case 15: document.getElementById("slot15").innerHTML = Table[c]; break;
                    case 16: document.getElementById("slot16").innerHTML = Table[c]; break;
                    case 17: document.getElementById("slot17").innerHTML = Table[c]; break;
                    case 18: document.getElementById("slot18").innerHTML = Table[c]; break;
                    case 19: document.getElementById("slot19").innerHTML = Table[c]; break;
                    case 20: document.getElementById("slot20").innerHTML = Table[c]; break;
                    case 21: document.getElementById("slot21").innerHTML = Table[c]; break;
                    case 22: document.getElementById("slot22").innerHTML = Table[c]; break;
                    case 23: document.getElementById("slot23").innerHTML = Table[c]; break;
                    case 24: document.getElementById("slot24").innerHTML = Table[c]; break;
                    case 25: document.getElementById("slot25").innerHTML = Table[c]; break;
                }
        }
}

//generating random number for rows
function Rand1(min, max) {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

//generating random number for catagories
function Rand2(min, max) {
  min = Math.ceil(0);
  max = Math.floor(14);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
