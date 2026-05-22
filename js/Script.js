let difficulty; //int
let matr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //matrix number
let i,j,k,c,r,s,g; //int
let x,err; //bool
let aranad; //array for random
let Table = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]; //matrix string

//Database categories objectives


/*Difficulty: Easy*/

 //Row 1:
 //Cat1: Learn
let cate1 =
["Learn how to dig","Read a book","Learn an ability invoving water","d1","e1",
 "f1","g1","h1","i1","j1",
 "k1","l1","m1","n1","o1"];

 //Cat2: Kill
let cate2 =
["Commit seppuku (kill yourself)","Kill a knight","Kill a spider","Kill a zombie","e2",
 "f2","g2","h2","i2","j2",
 "k2","l2","m2","n2","o2"];

 //Cat3: Obtain
let cate3 =
["Collect 100 golden things","Obtain a card","Obtain a fruit","d3","e3",
 "f3","g3","h3","i3","j3",
 "k3","l3","m3","n3","o3"];

 //Cat4: Saving
let cate4 =
["Obtain a map","Reach any checkpoint","Save your game","d4","e4",
 "f4","g4","h4","i4","j4",
 "k4","l4","m4","n4","o4"];

 //Cat5: Fighting
let cate5 =
["a5","b5","c5","d5","e5",
 "f5","g5","h5","i5","j5",
 "k5","l5","m5","n5","o5"];

 //Row 2:
 //Cat6: Area
let cate6 =
["Touch Grass","Enter a forest","Enter a jungle","Enter a castle","Enter a desert",
 "Enter a snowy area","g6","h6","i6","j6",
 "k6","l6","m6","n6","o6"];

 //Cat7: Glitches
let cate7 =
["Glitch out of bounds","b7","c7","d7","e7",
 "f7","g7","h7","i7","j7",
 "k7","l7","m7","n7","o7"];

 //Cat8: Lives
let cate8 =
["a8","b8","c8","d8","e8",
 "f8","g8","h8","i8","j8",
 "k8","l8","m8","n8","o8"];

 //Cat9: Observe
let cate9 =
["Look at a woman","Look at a stone statue","Look at a metal statue","d9","e9",
 "f9","g9","h9","i9","j9",
 "k9","l9","m9","n9","o9"];

 //Cat10: Boss
let cate10 =
["Defeat a boss","Beat any non-tutorial boss","Defeat a tutorial boss","d10","e10",
 "f10","g10","h10","i10","j10",
 "k10","l10","m10","n10","o10"];

 //Row 3:
 //Cat11: Tool
let cate11 =
["Ride an elevator","b11","c11","d11","e11",
 "f11","g11","h11","i11","j11",
 "k11","l11","m611","n11","o11"];

 //Cat12: Health
let cate12 =
["Increase max health","Obtain an extra life","c12","d12","e12",
 "f12","g12","h12","i12","j12",
 "k12","l12","m12","n12","o12"];

 //Cat13: Music
let cate13 =
["Obtain a musical instrument","Play any song","c13","d13","e13",
 "f13","g13","h13","i13","j13",
 "k13","l13","m13","n13","o13"];

 //Cat14: Shopping
let cate14 =
["Buy an item from a shop","Buy any type of potion","Buy any healing item","d14","e14",
 "f14","g14","h14","i14","j14",
 "k14","l14","m14","n14","o14"];

 //Cat15: Enemies
let cate15 =
["a15","b15","c15","d15","e15",
 "f15","g15","h15","i15","j15",
 "k15","l15","m15","n15","o15"];

 //Row: 4
 //Cat16: Ability
let cate16 =
["Use an ability connected to fire","Use an ability connected to ice","Use an ability connected to lightning","Use any magic","e16",
 "f16","g16","h16","i16","j16",
 "k16","l16","m16","n16","o16"];

 //Cat17: Meet
let cate17 =
["Meet a merchant","Rescue any npc","c17","d17","e17",
 "f17","g17","h17","i17","j17",
 "k17","l17","m17","n17","o17"];

 //Cat18: Secret
let cate18 =
["a18","b18","c18","d18","e18",
 "f18","g18","h18","i18","j18",
 "k18","l18","m18","n18","o18"];

 //Cat19: Veicle
let cate19 =
["Ride any animal","Obtain a new vehicle","c19","d19","e19",
 "f19","g19","h19","i19","j19",
 "k19","l19","m19","n19","o19"];

 //Cat20: Clothes
let cate20 =
["a20","b20","c20","d20","e20",
 "f20","g20","h20","i20","j20",
 "k20","l20","m20","n20","o20"];

 //Row: 5
 //Cat21: Melee
let cate21 =
["Beat a boss with only ranged attacks","Obtain a hammer type weapon","c21","d21","e21",
 "f21","g21","h21","i21","j21",
 "k21","l21","m21","n21","o21"];

 //Cat22: Ranged
let cate22 =
["Beat a boss without shooting","Increase your max ammo","Pick up some ammunition","d22","e22",
 "f22","g22","h22","i22","j22",
 "k22","l22","m22","n22","o22"];

 //Cat23: Level
let cate23 =
["Complete a tutorial","b23","c23","d23","e23",
 "f23","g23","h23","i23","j23",
 "k23","l23","m23","n23","o23"];

 //Cat24: Traps
let cate24 =
["a24","b24","c24","d24","e24",
 "f24","g24","h24","i24","j24",
 "k24","l24","m24","n24","o24"];

 //Cat25: Meta
let cate25 =
["Change your game language to a different alphabet","Level up to level 5","Make a new character","d25","e25",
 "f25","g25","h25","i25","j25",
 "k25","l25","m25","n25","o25"];
 //End of difficulty


/*Difficulty: Normal*/

 //Row 1:
 //Cat1: Learn
let catn1 =
["a1","b1","c1","d1","e1",
 "f1","g1","h1","i1","j1",
 "k1","l1","m1","n1","o1"];

 //Cat2: Kill
let catn2 =
["Kill a mummy","Kill an enemy while submerged","c2","d2","e2",
 "f2","g2","h2","i2","j2",
 "k2","l2","m2","n2","o2"];

 //Cat3: Obtain
let catn3 =
["Obtain a vegetable","Obtain explosives","c3","d3","e3",
 "f3","g3","h3","i3","j3",
 "k3","l3","m3","n3","o3"];

 //Cat4: Saving
let catn4 =
["a4","b4","c4","d4","e4",
 "f4","g4","h4","i4","j4",
 "k4","l4","m4","n4","o4"];

 //Cat5: Fighting
let catn5 =
["Temporarily stun an enemy","Defeat an enemy using only kicks","Defeat an enemy using only punches","d5","e5",
 "f5","g5","h5","i5","j5",
 "k5","l5","m5","n5","o5"];

 //Row 2:
 //Cat6: Area
let catn6 =
["Touch a cloud","Enter a volcano","Enter outer space","d6","e6",
 "f6","g6","h6","i6","j6",
 "k6","l6","m6","n6","o6"];

 //Cat7: Glitches
let catn7 =
["a7","b7","c7","d7","e7",
 "f7","g7","h7","i7","j7",
 "k7","l7","m7","n7","o7"];

 //Cat8: Lives
let catn8 =
["a8","b8","c8","d8","e8",
 "f8","g8","h8","i8","j8",
 "k8","l8","m8","n8","o8"];

 //Cat9: Observe
let catn9 =
["a9","b9","c9","d9","e9",
 "f9","g9","h9","i9","j9",
 "k9","l9","m9","n9","o9"];

 //Cat10: Boss
let catn10 =
["Kill a boss with throwing weapons","b10","c10","d10","e10",
 "f10","g10","h10","i10","j10",
 "k10","l10","m10","n10","o10"];

 //Row 3:
 //Cat11: Tool
let catn11 =
["Turn on a light","b11","c11","d11","e11",
 "f11","g11","h11","i11","j11",
 "k11","l11","m611","n11","o11"];

 //Cat12: Health
let catn12 =
["Obtain 3 extra lives","Drink a healing potion","c12","d12","e12",
 "f12","g12","h12","i12","j12",
 "k12","l12","m12","n12","o12"];

 //Cat13: Music
let catn13 =
["a13","b13","c13","d13","e13",
 "f13","g13","h13","i13","j13",
 "k13","l13","m13","n13","o13"];

 //Cat14: Shopping
let catn14 =
["Buy 3 different items from a shop","b14","c14","d14","e14",
 "f14","g14","h14","i14","j14",
 "k14","l14","m14","n14","o14"];

 //Cat15: Enemies
let catn15 =
["Get grabbed by an enemy","b15","c15","d15","e15",
 "f15","g15","h15","i15","j15",
 "k15","l15","m15","n15","o15"];

 //Row: 4
 //Cat16: Ability
let catn16 =
["a16","b16","c16","d16","e16",
 "f16","g16","h16","i16","j16",
 "k16","l16","m16","n16","o16"];

 //Cat17: Meet
let catn17 =
["Meet a king","Meet a scientist","c17","d17","e17",
 "f17","g17","h17","i17","j17",
 "k17","l17","m17","n17","o17"];

 //Cat18: Secret
let catn18 =
["a18","b18","c18","d18","e18",
 "f18","g18","h18","i18","j18",
 "k18","l18","m18","n18","o18"];

 //Cat19: Veicle
let catn19 =
["a19","b19","c19","d19","e19",
 "f19","g19","h19","i19","j19",
 "k19","l19","m19","n19","o19"];

 //Cat20: Clothes
let catn20 =
["Upgrade your armour","Upgrade your shoes","c20","d20","e20",
 "f20","g20","h20","i20","j20",
 "k20","l20","m20","n20","o20"];

 //Row: 5
 //Cat21: Melee
let catn21 =
["Upgrade a sword","b21","c21","d21","e21",
 "f21","g21","h21","i21","j21",
 "k21","l21","m21","n21","o21"];

 //Cat22: Ranged
let catn22 =
["Upgrade a bow","Uprade a shotgun","c22","d22","e22",
 "f22","g22","h22","i22","j22",
 "k22","l22","m22","n22","o22"];

 //Cat23: Level
let catn23 =
["Change the water level","Complete an autoscroll section","Complete a bonus stage","Complete a stealth section (be stealthy)","e23",
 "f23","g23","h23","i23","j23",
 "k23","l23","m23","n23","o23"];

 //Cat24: Traps
let catn24 =
["a24","b24","c24","d24","e24",
 "f24","g24","h24","i24","j24",
 "k24","l24","m24","n24","o24"];

 //Cat25: Meta
let catn25 =
["Reach 100k points in anything","b25","c25","d25","e25",
 "f25","g25","h25","i25","j25",
 "k25","l25","m25","n25","o25"];
 //End of difficulty


/*Difficulty: Hard*/

 //Row 1:
 //Cat1: Learn
let cath1 =
["a1","b1","c1","d1","e1",
 "f1","g1","h1","i1","j1",
 "k1","l1","m1","n1","o1"];

 //Cat2: Kill
let cath2 =
["Kill a dragon","b2","c2","d2","e2",
 "f2","g2","h2","i2","j2",
 "k2","l2","m2","n2","o2"];

 //Cat3: Obtain
let cath3 =
["Collect 100 golden things","Obtain a card","Obtain a fruit","d3","e3",
 "f3","g3","h3","i3","j3",
 "k3","l3","m3","n3","o3"];

 //Cat4: Saving
let cath4 =
["Obtain a map","Reach any checkpoint","Save your game","d4","e4",
 "f4","g4","h4","i4","j4",
 "k4","l4","m4","n4","o4"];

 //Cat5: Fighting
let cath5 =
["a5","b5","c5","d5","e5",
 "f5","g5","h5","i5","j5",
 "k5","l5","m5","n5","o5"];

 //Row 2:
 //Cat6: Area
let cath6 =
["Escape from prison","b6","c6","d6","e6",
 "f6","g6","h6","i6","j6",
 "k6","l6","m6","n6","o6"];

 //Cat7: Glitches
let cath7 =
["a7","b7","c7","d7","e7",
 "f7","g7","h7","i7","j7",
 "k7","l7","m7","n7","o7"];

 //Cat8: Lives
let cath8 =
["a8","b8","c8","d8","e8",
 "f8","g8","h8","i8","j8",
 "k8","l8","m8","n8","o8"];

 //Cat9: Observe
let cath9 =
["a9","b9","c9","d9","e9",
 "f9","g9","h9","i9","j9",
 "k9","l9","m9","n9","o9"];

 //Cat10: Boss
let cath10 =
["Kill 2 bosses without dying","Kill a boss without getting hit","Kill a boss without attacking","d10","e10",
 "f10","g10","h10","i10","j10",
 "k10","l10","m10","n10","o10"];

 //Row 3:
 //Cat11: Tool
let cath11 =
["a11","b11","c11","d11","e11",
 "f11","g11","h11","i11","j11",
 "k11","l11","m611","n11","o11"];

 //Cat12: Health
let cath12 =
["Lower your max health","b12","c12","d12","e12",
 "f12","g12","h12","i12","j12",
 "k12","l12","m12","n12","o12"];

 //Cat13: Music
let cath13 =
["a13","b13","c13","d13","e13",
 "f13","g13","h13","i13","j13",
 "k13","l13","m13","n13","o13"];

 //Cat14: Shopping
let cath14 =
["a14","b14","c14","d14","e14",
 "f14","g14","h14","i14","j14",
 "k14","l14","m14","n14","o14"];

 //Cat15: Enemies
let cath15 =
["a15","b15","c15","d15","e15",
 "f15","g15","h15","i15","j15",
 "k15","l15","m15","n15","o15"];

 //Row: 4
 //Cat16: Ability
let cath16 =
["a16","b16","c16","d16","e16",
 "f16","g16","h16","i16","j16",
 "k16","l16","m16","n16","o16"];

 //Cat17: Meet
let cath17 =
["a17","b17","c17","d17","e17",
 "f17","g17","h17","i17","j17",
 "k17","l17","m17","n17","o17"];

 //Cat18: Secret
let cath18 =
["a18","b18","c18","d18","e18",
 "f18","g18","h18","i18","j18",
 "k18","l18","m18","n18","o18"];

 //Cat19: Veicle
let cath19 =
["a19","b19","c19","d19","e19",
 "f19","g19","h19","i19","j19",
 "k19","l19","m19","n19","o19"];

 //Cat20: Clothes
let cath20 =
["a20","b20","c20","d20","e20",
 "f20","g20","h20","i20","j20",
 "k20","l20","m20","n20","o20"];

 //Row: 5
 //Cat21: Melee
let cath21 =
["a21","b21","c21","d21","e21",
 "f21","g21","h21","i21","j21",
 "k21","l21","m21","n21","o21"];

 //Cat22: Ranged
let cath22 =
["a22","b22","c22","d22","e22",
 "f22","g22","h22","i22","j22",
 "k22","l22","m22","n22","o22"];

 //Cat23: Level
let cath23 =
["a23","b23","c23","d23","e23",
 "f23","g23","h23","i23","j23",
 "k23","l23","m23","n23","o23"];

 //Cat24: Traps
let cath24 =
["a24","b24","c24","d24","e24",
 "f24","g24","h24","i24","j24",
 "k24","l24","m24","n24","o24"];

 //Cat25: Meta
let cath25 =
["a25","b25","c25","d25","e25",
 "f25","g25","h25","i25","j25",
 "k25","l25","m25","n25","o25"];
 //End of difficulty

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
