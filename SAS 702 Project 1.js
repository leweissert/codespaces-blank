* Generated Code (IMPORT) */
/* Source File: Dataset1.xlsx */
/* Source Path: /home/u61006126/HW */
/* Code generated on: 11/21/24, 8:14 AM */

%web_drop_table(WORK.IMPORT);


FILENAME REFFILE '/home/u61006126/HW/Dataset1.xlsx';



PROC IMPORT DATAFILE=REFFILE
	DBMS=XLSX
	OUT=WORK.IMPORT;
	GETNAMES=YES;
	
	
data post_fun;
input group $ value; 
datalines; 
control   35
control   24
control   8
control   42
control   16
control   44
control   45
control   67
control   37
control   18
control   38
control   48
control   45
control   42
control   58
control   30
control   55
control   40
control   37
control   50
control   10
control   28
control   4
control   40
control   14
control   28
control   45
control   45
control   8
control   42
treatment 40
treatment 20
treatment 24
treatment 12
treatment 50
treatment 46
treatment 14
treatment 14
treatment 38
treatment 48
treatment 18
treatment 46
treatment 33
treatment 14
treatment 28
treatment 62
treatment 20
treatment 40
treatment 14
treatment 12
treatment 20
treatment 42
treatment 35
treatment 35
treatment 10
treatment 67
treatment 22
treatment 45
treatment 45
treatment 48
;
Proc ttest data=post_fun;
class group;
var value;
run; 

	
data pre_fun;
    input group $ value;
    datalines;
 control   35
control   24
control   8
control   42
control   18
control   40
control   42
control   65
control   35
control   22
control   42
control   44
control   34
control   38
control   50
control   20
control   20
control   40
control   35
control   20
control   12
control   20
control   10
control   42
control   16
control   20
control   50
control   22
control   10
control   40
treatment 40
treatment 21
treatment 21
treatment 22
treatment 35
treatment 42
treatment 18
treatment 16
treatment 40
treatment 55
treatment 22
treatment 50
treatment 35
treatment 8
treatment 22
treatment 65
treatment 18
treatment 42
treatment 15
treatment 18
treatment 22
treatment 42
treatment 34
treatment 20
treatment 12
treatment 65
treatment 18
treatment 18
treatment 40
treatment 42  
	
;	

proc ttest data=pre_fun;
    class group; /* Specifies the grouping variable */
    var value;   /* Specifies the variable for which means are compared */



data post_dis;
    input group $ value;
    datalines;
control   24
control   14
control   8
control   36
control   40
control   36
control   50
control   40
control   40
control   0
control   10
control   34
control   50
control   42
control   52
control   38
control   50
control   40
control   50
control   45
control   50
control   80
control   8
control   12
control   10
control   100
control   16
control   20
control   40
control   20
treatment 24
treatment 14
treatment 20
treatment 22
treatment 18
treatment 62
treatment 10
treatment 24
treatment 38
treatment 10
treatment 30
treatment 19
treatment 38
treatment 40
treatment 40
treatment 20
treatment 20
treatment 14
treatment 22
treatment 24
treatment 40
treatment 60
treatment 32
treatment 18
treatment 20
treatment 22
treatment 48
treatment 33
treatment 30
treatment 22
;
proc ttest data=post_dis;
    class group; /* Specifies the grouping variable */
    var value;   /* Specifies the variable for which means are compared */
run;




	
PROC SGPLOT data=work.import; 
scatter 
x=demtype y=mmse;
run;

PROC SGPLOT data=work.import; 
histogram mmse; 
run;

RUN;
/*preagi */ 
Proc print data=work.import;
run;
proc univariate data=work.import;
run; 

data pre_dis;
    input group $ value;
    datalines;
control   18
control   14
control   8
control   30
control   12
control   99
control   28
control   99
control   40
control   0
control   56
control   99
control   29
control   15
control   48
control   80
control   52
control   38
control   29
control   99
control   14
control   45
control   10
control   0
control   0
control   46
control   20
control   0
control   45
control   20
treatment 18
treatment 84
treatment 38
treatment 50
treatment 38
treatment 100
treatment 86
treatment 100
treatment 48
treatment 62
treatment 56
treatment 82
treatment 64
treatment 83
treatment 40
treatment 100
treatment 58
treatment 40
treatment 60
treatment 20
treatment 75
treatment 38
treatment 100
treatment 100
treatment 0
treatment 78
treatment 14
treatment 100
treatment 100
treatment 100
;

proc ttest data=pre_dis;
    class group; /* Specifies the grouping variable */
    var value;   /* Specifies the variable for which means are compared */
run;


data post_agi;
    input group $ value;
    datalines;
control   0
control   0
control   0
control   14
control   11
control   35
control   40
control   40
control   30
control   11
control   30
control   30
control   28
control   22
control   20
control   26
control   34
control   18
control   50
control   22
control   40
control   42
control   45
control   50
control   50
control   36
control   0
control   50
control   50
control   11
treatment 10
treatment 10
treatment 6
treatment 15
treatment 11
treatment 14
treatment 11
treatment 22
treatment 8
treatment 11
treatment 0
treatment 12
treatment 18
treatment 15
treatment 14
treatment 0
treatment 32
treatment 20
treatment 26
treatment 28
treatment 20
treatment 16
treatment 22
treatment 14
treatment 16
treatment 20
treatment 15
treatment 30
treatment 20
treatment 16
;
proc ttest data=post_agi;
    class group; /* Specifies the grouping variable */
    var value;   /* Specifies the variable for which means are compared */
run;



/*  =----------------------------------------------------**/ 


data test_data;
    input group $ value;
    datalines;
control 0
control 4
control 10
control 12
control 14
control 16
control 18
control 20
control 20
control 20
control 22
control 22
control 24
control 24
control 26
control 26
control 28
control 28
control 30
control 30
control 32
control 34
control 36
control 38
control 40
control 45
control 45
control 45
control 46
control 50
treatment 0
treatment 0
treatment 4
treatment 10
treatment 12
treatment 14
treatment 16
treatment 18
treatment 20
treatment 20
treatment 20
treatment 22
treatment 24
treatment 24
treatment 26
treatment 26
treatment 28
treatment 28
treatment 30
treatment 30
treatment 30
treatment 32
treatment 34
treatment 36
treatment 38
treatment 40
treatment 45
treatment 46
treatment 50
treatment 50
;
run;

proc ttest data=test_data;
    class group; /* Specifies the grouping variable */
    var value;   /* Specifies the variable for which means are compared */
run;




















data agitation_scores;
    input group $ pretest posttest;
    datalines;
control 0 0
control 4 0
control 10 0
control 12 14
control 14 11
control 16 35
control 18 40
control 20 40
control 20 30
control 20 11
control 22 30
control 22 30
control 24 28
control 24 22
control 26 20
control 26 26
control 28 34
control 28 18
control 30 50
control 30 22
control 32 40
control 34 42
control 36 45
control 38 50
control 40 50
control 45 36
control 45 0
control 45 50
control 46 50
control 50 11
treatment 0 10
treatment 0 10
treatment 4 6
treatment 10 15
treatment 12 11
treatment 14 14
treatment 16 11
treatment 18 22
treatment 20 8
treatment 20 11
treatment 20 0
treatment 22 12
treatment 24 18
treatment 24 15
treatment 26 14
treatment 26 0
treatment 28 32
treatment 28 20
treatment 30 26
treatment 30 28
treatment 30 20
treatment 32 16
treatment 34 22
treatment 36 14
treatment 38 16
treatment 40 20
treatment 45 15
treatment 46 30
treatment 50 20
treatment 50 16
;
run;

/* Perform paired t-test */
proc ttest data=agitation_scores;
    paired pretest*posttest; /* Specifies the paired variables */
    by group; /* This will analyze the paired t-test separately for each group */
run;

data discomfort_scores;
    input group $ pretest posttest;
    datalines;
control 18 24
control 14 14
control 8 8
control 30 36
control 12 40
control 99 36
control 28 50
control 99 40
control 40 40
control 0 0
control 56 10
control 99 34
control 29 50
control 15 42
control 48 52
control 80 38
control 52 50
control 38 40
control 29 50
control 99 45
control 14 50
control 45 80
control 10 8
control 0 12
control 0 10
control 46 100
control 20 16
control 0 20
control 45 40
control 20 20
treatment 18 24
treatment 84 14
treatment 38 20
treatment 50 22
treatment 38 18
treatment 100 62
treatment 86 10
treatment 100 24
treatment 48 38
treatment 62 10
treatment 56 30
treatment 82 19
treatment 64 38
treatment 83 40
treatment 40 40
treatment 100 20
treatment 58 20
treatment 40 14
treatment 60 22
treatment 20 24
treatment 75 40
treatment 38 60
treatment 100 32
treatment 100 18
treatment 0 20
treatment 78 22
treatment 14 48
treatment 100 33
treatment 100 30
treatment 100 22
;
run;

/* Perform paired t-test */
proc ttest data=discomfort_scores;
    paired pretest*posttest; /* Specifies the paired variables */
    by group; /* This will analyze the paired t-test separately for each group */
run;

data functional_status_scores;
    input group $ pretest posttest;
    datalines;
control 35 35
control 24 24
control 8 8
control 42 42
control 18 16
control 40 44
control 42 45
control 65 67
control 35 37
control 22 18
control 42 38
control 44 48
control 34 45
control 38 42
control 50 58
control 20 30
control 20 55
control 40 40
control 35 37
control 20 50
control 12 10
control 20 28
control 10 4
control 42 40
control 16 14
control 20 28
control 50 45
control 22 45
control 10 8
treatment 40 42
treatment 40 40
treatment 21 20
treatment 21 24
treatment 22 12
treatment 35 50
treatment 42 46
treatment 18 14
treatment 16 14
treatment 40 38
treatment 55 48
treatment 22 18
treatment 50 46
treatment 35 33
treatment 8 14
treatment 22 28
treatment 65 62
treatment 18 20
treatment 42 40
treatment 15 14
treatment 18 12
treatment 22 20
treatment 42 42
treatment 34 35
treatment 20 35
treatment 12 10
treatment 65 67
treatment 18 22
treatment 18 45
treatment 40 45
treatment 42 48
;
run;

/* Perform paired t-test */
proc ttest data=functional_status_scores;
    paired pretest*posttest; /* Specifies the paired variables */
    by group; /* This will analyze the paired t-test separately for each group */
run;

data functional_data;     
    input group $ pretest posttest;     
    datalines; 
    control 35 35 
    control 24 24 
    control 8 8 
    control 42 42 
    control 18 16 
    control 40 44 
    control 42 45 
    control 65 67 
    control 35 37 
    control 22 18 
    control 42 38 
    control 44 48 
    control 34 45 
    control 38 42 
    control 50 58 
    control 20 30 
    control 20 55 
    control 40 40 
    control 35 37 
    control 20 50 
    control 12 10 
    control 20 28 
    control 10 4 
    control 42 40 
    control 16 14 
    control 20 28 
    control 50 45 
    control 22 45 
    control 10 8 
    control 40 42 
    treatment 40 40 
    treatment 21 20 
    treatment 21 24 
    treatment 22 12 
    treatment 35 50 
    treatment 42 46 
    treatment 18 14 
    treatment 16 14 
    treatment 40 38 
    treatment 55 48 
    treatment 22 18 
    treatment 50 46 
    treatment 35 33 
    treatment 8 14 
    treatment 22 28 
    treatment 65 62 
    treatment 18 20 
    treatment 42 40 
    treatment 15 14 
    treatment 18 12 
    treatment 22 20 
    treatment 42 42 
    treatment 34 35 
    treatment 20 35 
    treatment 12 10 
    treatment 65 67 
    treatment 18 22 
    treatment 18 45 
    treatment 40 45 
    treatment 42 48 
    ; 
run;  

proc ttest data=functional_data alpha = 0.05;     
    paired pretest*posttest;     
    by group;
    run;

proc ttest data = work.import alpha = 0.05; 
	paired preagi*postagi;
	by group; 
	run;

%web_open_table(WORK.IMPORT);

/*create dataset*/
data functional_data;     
    input group $ pretest posttest; 
    datalines;
    control 35 35 
    control 24 24 
    control 8 8 
    control 42 42 
    control 18 16 
    control 40 44 
    control 42 45 
    control 65 67 
    control 35 37 
    control 22 18 
    control 42 38 
    control 44 48 
    control 34 45 
    control 38 42 
    control 50 58 
    control 20 30 
    control 20 55 
    control 40 40 
    control 35 37 
    control 20 50 
    control 12 10 
    control 20 28 
    control 10 4 
    control 42 40 
    control 16 14 
    control 20 28 
    control 50 45 
    control 22 45 
    control 10 8 
    control 40 42 
    treatment 40 40 
    treatment 21 20 
    treatment 21 24 
    treatment 22 12 
    treatment 35 50 
    treatment 42 46 
    treatment 18 14 
    treatment 16 14 
    treatment 40 38 
    treatment 55 48 
    treatment 22 18 
    treatment 50 46 
    treatment 35 33 
    treatment 8 14 
    treatment 22 28 
    treatment 65 62 
    treatment 18 20 
    treatment 42 40 
    treatment 15 14 
    treatment 18 12 
    treatment 22 20 
    treatment 42 42 
    treatment 34 35 
    treatment 20 35 
    treatment 12 10 
    treatment 65 67 
    treatment 18 22 
    treatment 18 45 
    treatment 40 45 
    treatment 42 48
    ;
run;
/*fit multiple linear regression model*/
proc glm data=functional_data alpha = 0.05;
    class group;
    model posttest = pretest group/ CLM CLI;
    means group / tukey;
   
run;
proc freq data = work.import;
    tables mmse*demtype / fisher;
run;