#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

//Database categories objectives

//Difficulty: Easy

//Row 1:
//Cat1: Learn
string cate1[15] =
{"a1","b1","c1","d1","e1",
 "f1","g1","h1","i1","j1",
 "k1","l1","m1","n1","o1"};

 //Cat2: Kill
string cate2[15] =
{"a2","b2","c2","d2","e2",
 "f2","g2","h2","i2","j2",
 "k2","l2","m2","n2","o2"};

 //Cat3: Obtain
string cate3[15] =
{"a3","b3","c3","d3","e3",
 "f3","g3","h3","i3","j3",
 "k3","l3","m3","n3","o3"};

//Cat4: Saving
string cate4[15] =
{"a4","b4","c4","d4","e4",
 "f4","g4","h4","i4","j4",
 "k4","l4","m4","n4","o4"};

//Cat5: Fighting
string cate5[15] =
{"a5","b5","c5","d5","e5",
 "f5","g5","h5","i5","j5",
 "k5","l5","m5","n5","o5"};

 //Row 2:
 //Cat6: Area
string cate6[15] =
{"a6","b6","c6","d6","e6",
 "f6","g6","h6","i6","j6",
 "k6","l6","m6","n6","o6"};

 //Cat7: Glitches
string cate7[15] =
{"a7","b7","c7","d7","e7",
 "f7","g7","h7","i7","j7",
 "k7","l7","m7","n7","o7"};

 //Cat8: Lives
string cate8[15] =
{"a8","b8","c8","d8","e8",
 "f8","g8","h8","i8","j8",
 "k8","l8","m8","n8","o8"};

 //Cat9: Observe
string cate9[15] =
{"a9","b9","c9","d9","e9",
 "f9","g9","h9","i9","j9",
 "k9","l9","m9","n9","o9"};

 //Cat10: enemies
string cate10[15] =
{"a10","b10","c10","d10","e10",
 "f10","g10","h10","i10","j10",
 "k10","l10","m10","n10","o10"};

 //Row 3:
 //Cat11: Ability
string cate11[15] =
{"a11","b11","c11","d11","e11",
 "f11","g11","h11","i11","j11",
 "k11","l11","m611","n11","o11"};

 //Cat12: Health
string cate12[15] =
{"a12","b12","c12","d12","e12",
 "f12","g12","h12","i12","j12",
 "k12","l12","m12","n12","o12"};

 //Cat13: Music
string cate13[15] =
{"a13","b13","c13","d13","e13",
 "f13","g13","h13","i13","j13",
 "k13","l13","m13","n13","o13"};

 //Cat14: Shopping
string cate14[15] =
{"a14","b14","c14","d14","e14",
 "f14","g14","h14","i14","j14",
 "k14","l14","m14","n14","o14"};

 //Cat15: Enemies
string cate15[15] =
{"a15","b15","c15","d15","e15",
 "f15","g15","h15","i15","j15",
 "k15","l15","m15","n15","o15"};

 //Row: 4
 //Cat16: Ability
string cate16[15] =
{"a16","b16","c16","d16","e16",
 "f16","g16","h16","i16","j16",
 "k16","l16","m16","n16","o16"};

 //Cat17: Meet
string cate17[15] =
{"a17","b17","c17","d17","e17",
 "f17","g17","h17","i17","j17",
 "k17","l17","m17","n17","o17"};

 //Cat18: Secret
string cate18[15] =
{"a18","b18","c18","d18","e18",
 "f18","g18","h18","i18","j18",
 "k18","l18","m18","n18","o18"};

 //Cat19: Veicle
string cate19[15] =
{"a19","b19","c19","d19","e19",
 "f19","g19","h19","i19","j19",
 "k19","l19","m19","n19","o19"};

 //Cat20: Clothes
string cate20[15] =
{"a20","b20","c20","d20","e20",
 "f20","g20","h20","i20","j20",
 "k20","l20","m20","n20","o20"};

 //Row: 5
 //Cat21: Weapon
string cate21[15] =
{"a21","b21","c21","d21","e21",
 "f21","g21","h21","i21","j21",
 "k21","l21","m21","n21","o21"};

 //Cat22: Level
string cate22[15] =
{"a22","b22","c22","d22","e22",
 "f22","g22","h22","i22","j22",
 "k22","l22","m22","n22","o22"};

 //Cat23:
string cate23[15] =
{"a23","b23","c23","d23","e23",
 "f23","g23","h23","i23","j23",
 "k23","l23","m23","n23","o23"};

 //Cat24:
string cate24[15] =
{"a24","b24","c24","d24","e24",
 "f24","g24","h24","i24","j24",
 "k24","l24","m24","n24","o24"};

 //Cat25:
string cate25[15] =
{"a25","b25","c25","d25","e25",
 "f25","g25","h25","i25","j25",
 "k25","l25","m25","n25","o25"};
 //End of difficulty

 //Difficulty: Normal

//Row 1:
//Cat1: Learn
string catn1[15] =
{"a1","b1","c1","d1","e1",
 "f1","g1","h1","i1","j1",
 "k1","l1","m1","n1","o1"};

 //Cat2: Kill
string catn2[15] =
{"a2","b2","c2","d2","e2",
 "f2","g2","h2","i2","j2",
 "k2","l2","m2","n2","o2"};

 //Cat3: Obtain
string catn3[15] =
{"a3","b3","c3","d3","e3",
 "f3","g3","h3","i3","j3",
 "k3","l3","m3","n3","o3"};

//Cat4: Saving
string catn4[15] =
{"a4","b4","c4","d4","e4",
 "f4","g4","h4","i4","j4",
 "k4","l4","m4","n4","o4"};

//Cat5: Fighting
string catn5[15] =
{"a5","b5","c5","d5","e5",
 "f5","g5","h5","i5","j5",
 "k5","l5","m5","n5","o5"};

 //Row 2:
 //Cat6: Area
string catn6[15] =
{"a6","b6","c6","d6","e6",
 "f6","g6","h6","i6","j6",
 "k6","l6","m6","n6","o6"};

 //Cat7: Glitches
string catn7[15] =
{"a7","b7","c7","d7","e7",
 "f7","g7","h7","i7","j7",
 "k7","l7","m7","n7","o7"};

 //Cat8: Lives
string catn8[15] =
{"a8","b8","c8","d8","e8",
 "f8","g8","h8","i8","j8",
 "k8","l8","m8","n8","o8"};

 //Cat9: Observe
string catn9[15] =
{"a9","b9","c9","d9","e9",
 "f9","g9","h9","i9","j9",
 "k9","l9","m9","n9","o9"};

 //Cat10: enemies
string catn10[15] =
{"a10","b10","c10","d10","e10",
 "f10","g10","h10","i10","j10",
 "k10","l10","m10","n10","o10"};

 //Row 3:
 //Cat11: Ability
string catn11[15] =
{"a11","b11","c11","d11","e11",
 "f11","g11","h11","i11","j11",
 "k11","l11","m611","n11","o11"};

 //Cat12: Health
string catn12[15] =
{"a12","b12","c12","d12","e12",
 "f12","g12","h12","i12","j12",
 "k12","l12","m12","n12","o12"};

 //Cat13: Music
string catn13[15] =
{"a13","b13","c13","d13","e13",
 "f13","g13","h13","i13","j13",
 "k13","l13","m13","n13","o13"};

 //Cat14: Shopping
string catn14[15] =
{"a14","b14","c14","d14","e14",
 "f14","g14","h14","i14","j14",
 "k14","l14","m14","n14","o14"};

 //Cat15: Enemies
string catn15[15] =
{"a15","b15","c15","d15","e15",
 "f15","g15","h15","i15","j15",
 "k15","l15","m15","n15","o15"};

 //Row: 4
 //Cat16: Ability
string catn16[15] =
{"a16","b16","c16","d16","e16",
 "f16","g16","h16","i16","j16",
 "k16","l16","m16","n16","o16"};

 //Cat17: Meet
string catn17[15] =
{"a17","b17","c17","d17","e17",
 "f17","g17","h17","i17","j17",
 "k17","l17","m17","n17","o17"};

 //Cat18: Secret
string catn18[15] =
{"a18","b18","c18","d18","e18",
 "f18","g18","h18","i18","j18",
 "k18","l18","m18","n18","o18"};

 //Cat19: Veicle
string catn19[15] =
{"a19","b19","c19","d19","e19",
 "f19","g19","h19","i19","j19",
 "k19","l19","m19","n19","o19"};

 //Cat20: Clothes
string catn20[15] =
{"a20","b20","c20","d20","e20",
 "f20","g20","h20","i20","j20",
 "k20","l20","m20","n20","o20"};

 //Row: 5
 //Cat21: Weapon
string catn21[15] =
{"a21","b21","c21","d21","e21",
 "f21","g21","h21","i21","j21",
 "k21","l21","m21","n21","o21"};

 //Cat22: Level
string catn22[15] =
{"a22","b22","c22","d22","e22",
 "f22","g22","h22","i22","j22",
 "k22","l22","m22","n22","o22"};

 //Cat23:
string catn23[15] =
{"a23","b23","c23","d23","e23",
 "f23","g23","h23","i23","j23",
 "k23","l23","m23","n23","o23"};

 //Cat24:
string catn24[15] =
{"a24","b24","c24","d24","e24",
 "f24","g24","h24","i24","j24",
 "k24","l24","m24","n24","o24"};

 //Cat25:
string catn25[15] =
{"a25","b25","c25","d25","e25",
 "f25","g25","h25","i25","j25",
 "k25","l25","m25","n25","o25"};
 //End of difficulty

 //Difficulty: Hard

//Row 1:
//Cat1: Learn
string cath1[15] =
{"a1","b1","c1","d1","e1",
 "f1","g1","h1","i1","j1",
 "k1","l1","m1","n1","o1"};

 //Cat2: Kill
string cath2[15] =
{"a2","b2","c2","d2","e2",
 "f2","g2","h2","i2","j2",
 "k2","l2","m2","n2","o2"};

 //Cat3: Obtain
string cath3[15] =
{"a3","b3","c3","d3","e3",
 "f3","g3","h3","i3","j3",
 "k3","l3","m3","n3","o3"};

//Cat4: Saving
string cath4[15] =
{"a4","b4","c4","d4","e4",
 "f4","g4","h4","i4","j4",
 "k4","l4","m4","n4","o4"};

//Cat5: Fighting
string cath5[15] =
{"a5","b5","c5","d5","e5",
 "f5","g5","h5","i5","j5",
 "k5","l5","m5","n5","o5"};

 //Row 2:
 //Cat6: Area
string cath6[15] =
{"a6","b6","c6","d6","e6",
 "f6","g6","h6","i6","j6",
 "k6","l6","m6","n6","o6"};

 //Cat7: Glitches
string cath7[15] =
{"a7","b7","c7","d7","e7",
 "f7","g7","h7","i7","j7",
 "k7","l7","m7","n7","o7"};

 //Cat8: Lives
string cath8[15] =
{"a8","b8","c8","d8","e8",
 "f8","g8","h8","i8","j8",
 "k8","l8","m8","n8","o8"};

 //Cat9: Observe
string cath9[15] =
{"a9","b9","c9","d9","e9",
 "f9","g9","h9","i9","j9",
 "k9","l9","m9","n9","o9"};

 //Cat10: enemies
string cath10[15] =
{"a10","b10","c10","d10","e10",
 "f10","g10","h10","i10","j10",
 "k10","l10","m10","n10","o10"};

 //Row 3:
 //Cat11: Ability
string cath11[15] =
{"a11","b11","c11","d11","e11",
 "f11","g11","h11","i11","j11",
 "k11","l11","m611","n11","o11"};

 //Cat12: Health
string cath12[15] =
{"a12","b12","c12","d12","e12",
 "f12","g12","h12","i12","j12",
 "k12","l12","m12","n12","o12"};

 //Cat13: Music
string cath13[15] =
{"a13","b13","c13","d13","e13",
 "f13","g13","h13","i13","j13",
 "k13","l13","m13","n13","o13"};

 //Cat14: Shopping
string cath14[15] =
{"a14","b14","c14","d14","e14",
 "f14","g14","h14","i14","j14",
 "k14","l14","m14","n14","o14"};

 //Cat15: Enemies
string cath15[15] =
{"a15","b15","c15","d15","e15",
 "f15","g15","h15","i15","j15",
 "k15","l15","m15","n15","o15"};

 //Row: 4
 //Cat16: Ability
string cath16[15] =
{"a16","b16","c16","d16","e16",
 "f16","g16","h16","i16","j16",
 "k16","l16","m16","n16","o16"};

 //Cat17: Meet
string cath17[15] =
{"a17","b17","c17","d17","e17",
 "f17","g17","h17","i17","j17",
 "k17","l17","m17","n17","o17"};

 //Cat18: Secret
string cath18[15] =
{"a18","b18","c18","d18","e18",
 "f18","g18","h18","i18","j18",
 "k18","l18","m18","n18","o18"};

 //Cat19: Veicle
string cath19[15] =
{"a19","b19","c19","d19","e19",
 "f19","g19","h19","i19","j19",
 "k19","l19","m19","n19","o19"};

 //Cat20: Clothes
string cath20[15] =
{"a20","b20","c20","d20","e20",
 "f20","g20","h20","i20","j20",
 "k20","l20","m20","n20","o20"};

 //Row: 5
 //Cat21: Weapon
string cath21[15] =
{"a21","b21","c21","d21","e21",
 "f21","g21","h21","i21","j21",
 "k21","l21","m21","n21","o21"};

 //Cat22: Level
string cath22[15] =
{"a22","b22","c22","d22","e22",
 "f22","g22","h22","i22","j22",
 "k22","l22","m22","n22","o22"};

 //Cat23:
string cath23[15] =
{"a23","b23","c23","d23","e23",
 "f23","g23","h23","i23","j23",
 "k23","l23","m23","n23","o23"};

 //Cat24:
string cath24[15] =
{"a24","b24","c24","d24","e24",
 "f24","g24","h24","i24","j24",
 "k24","l24","m24","n24","o24"};

 //Cat25:
string cath25[15] =
{"a25","b25","c25","d25","e25",
 "f25","g25","h25","i25","j25",
 "k25","l25","m25","n25","o25"};
 //End of difficulty

int matr[5][5];
int i,j,k,r,s;
bool x,err;
string Table[5][5];
int aranad[5];
int difficulty=1;

int easy()
{
    if(i==0)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cate1[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cate2[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cate3[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cate4[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cate5[s];
                    break;
        }
    }
    else if(i==1)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cate6[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cate7[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cate8[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cate9[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cate10[s];
                    break;
        }
    }
    else if(i==2)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cate11[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cate12[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cate13[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cate14[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cate15[s];
                    break;
        }
    }
    else if(i==3)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cate16[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cate17[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cate18[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cate19[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cate20[s];
                    break;
        }
    }
    else if(i==4)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cate21[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cate22[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cate23[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cate24[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cate25[s];
                    break;
        }
    }
}

int normal()
{
    if(i==0)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = catn1[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = catn2[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = catn3[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = catn4[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = catn5[s];
                    break;
        }
    }
    else if(i==1)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = catn6[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = catn7[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = catn8[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = catn9[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = catn10[s];
                    break;
        }
    }
    else if(i==2)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = catn11[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = catn12[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = catn13[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = catn14[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = catn15[s];
                    break;
        }
    }
    else if(i==3)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = catn16[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = catn17[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = catn18[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = catn19[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = catn20[s];
                    break;
        }
    }
    else if(i==4)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = catn21[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = catn22[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = catn23[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = catn24[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = catn25[s];
                    break;
        }
    }
}

int hard()
{
    if(i==0)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cath1[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cath2[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cath3[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cath4[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cath5[s];
                    break;
        }
    }
    else if(i==1)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cath6[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cath7[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cath8[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cath9[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cath10[s];
                    break;
        }
    }
    else if(i==2)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cath11[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cath12[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cath13[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cath14[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cath15[s];
                    break;
        }
    }
    else if(i==3)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cath16[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cath17[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cath18[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cath19[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cath20[s];
                    break;
        }
    }
    else if(i==4)
    {
        switch(r)
        {
            case 1: s= 1 + (rand() % 15); //cat1
                    Table[i][j] = cath21[s];
                    break;
            case 2: s= 1 + (rand() % 15); //cat2
                    Table[i][j] = cath22[s];
                    break;
            case 3: s= 1 + (rand() % 15); //cat3
                    Table[i][j] = cath23[s];
                    break;
            case 4: s= 1 + (rand() % 15); //cat4
                    Table[i][j] = cath24[s];
                    break;
            case 5: s= 1 + (rand() % 15); //cat5
                    Table[i][j] = cath25[s];
                    break;
        }
    }
}

int main()
{
    cout<<"Inserire difficolta\': ";
    cin>>difficulty;
    srand(time(0));
    //int aranad[5] = {0,0,0,0,0};
    for(i=0;i<=4;i++)
    {
        int aranad[5] = {0,0,0,0,0};
        cout<<"\n";
        for(j=0;j<=4;j++)
        {
            do
            {
                r= 1 + (rand() % 5);    cout<<r; cout<<" ";
                aranad[j]=r;
                err=false;
                x=true;
                for(k=0;k<=4;k++)
                {
                    if(aranad[k]==r)
                    {
                        if(k==j){x==false;}
                        else{err=true;}
                    }
                }
                if(err==true){}
                else
                {
                    x=false;
                }
            }while(x==true && err==true);
            matr[i][j]=r;
            cout<<"V:";
            cout<<matr[i][j];
            cout<<" ";
            switch(difficulty)
            {
                case 1: easy(); break;
                case 2: normal(); break;
                case 3: hard(); break;
            }
        }
    }
    cout<<"\n";
    cout<<"\n";
    cout<<"Stampa matrice:\n";
    for(i=0;i<=4;i++)
    {
        for(j=0;j<=4;j++)
        {
            cout<<matr[i][j];
            cout<<" ";
        }
        cout<<"\n";
    }
    cout<<"\n";
    cout<<"Stampa Tabella:\n";
    for(i=0;i<=4;i++)
    {
        for(j=0;j<=4;j++)
        {
            cout<<Table[i][j];
            cout<<" ";
        }
        cout<<"\n";
    }
}
