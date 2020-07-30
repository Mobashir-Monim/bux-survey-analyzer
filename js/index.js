let barColors = ['75, 192, 192','54, 162, 235','255, 206, 86','255, 159, 64','255, 99, 132','153, 102, 255','23, 23, 23'], fileData = null, dataStat = 'crunchedData';
let yearlySegregation = [], yClasses = ['Freshman', 'Sophmore', 'Junior', 'Senior', 'Advanced Senior'];
let loadSegregation = [], lClasses = ['1 Course', '2 Courses', '3 Courses', '4 Courses', '5 Courses', '>= 6 Courses and others'];
let deptSegregation = [], dClasses = ['CSE', 'BBS', 'MNS', 'EEE', 'ENH', 'Architecture', 'Pharmacy', 'Law', 'BIL', 'BIGD', 'CPJ', 'JPGSPH', 'BIED', 'C3ER'];
let d1c = [], d2c = [], d3c = [], d4c = [], d5c = [], d6c = [], d7c = [], d8c = [], d9c = [], d10c = [], d11c = [], d12c = [], d13c = [], d14c = [], d15c = [], d16c = [],
    d17c = [], d18c = [], d19c = [], d20c = [], d21c = [], d22c = [], d23c = [], d24c = [], d25c = [], d26c = [], d27c = [], d28c = [], d29c = [], d30c = [], d31c = [], d32c = [];

let gs = {d1g:[], d2g:[], d3g:[], d4g:[], d5g:[], d6g:[], d7g:[], d8g:[], d9g:[], d10g:[], d11g:[], d12g:[], d13g:[], d14g:[], d15g:[], d16g:[],
            d17g:[], d18g:[], d19g:[], d20g:[], d21g:[], d22g:[], d23g:[], d24g:[], d25g:[], d26g:[], d27g:[], d28g:[], d29g:[], d30g:[], d31g:[], d32g:[]};

let qs = [{normalized:[],crunchedData:[],c:d1c,g:gs.d1g,key:"Suppose someone says buX an improvement on Spring 2020's online learning approach. How would you react?",hasO:false,func:"rFilter",type:"equal",classes:["Strongly disagree","Disagree","Neutral","Agree","Strongly agree"]},
        {normalized:[],crunchedData:[],c:d2c,g:gs.d2g,key:"Did you open your buX account with your G-Suite email? Check all that apply",hasO:true,func:"cFilter",type:"includes",classes:["Yes","No","I changed my email address in buX to my G-Suite address","I did not have a G-Suite account then","I did not receive a G-Suite account yet","I could not open buX account yet"]},
        {normalized:[],crunchedData:[],c:d3c,g:gs.d3g,key:"How many buX accounts did you create? ",hasO:false,func:"rFilter",type:"equal",classes:["Only 1 G-Suite account","Only 1 non-G-Suite account","1 G-Suite and 1 non-G-Suite account","1 G-Suite and multiple non-G-Suite accounts","Multiple non-G-Suite accounts","4 accounts","5 accounts","6+ accounts","Could not create buX account yet"]},
        {normalized:[],crunchedData:[],c:d4c,g:gs.d4g,key:"One a scale of 1-7, how much trouble did you have registering and logging into buX?",hasO:false,func:"rFilter",type:"starts",classes:["1","2","3","4","5","6","7"]},
        {normalized:[],crunchedData:[],c:d5c,g:gs.d5g,key:"Were you able to enroll in all of your courses? ",hasO:false,func:"rFilter",type:"equal",classes:["Yes, and I had no problems enrolling in my courses","Yes, but I had some problems enrolling in my courses","Yes, but I had many problems enrolling in my courses","No"]},
        {normalized:[],crunchedData:[],c:d6c,g:gs.d6g,key:"How is your experience regarding buX support?",hasO:false,func:"rFilter",type:"equal",classes:["Very Responsive","Satisfactory","Late Response","Poor","Did not contact buX support"]},
        {normalized:[],crunchedData:[],c:d7c,g:gs.d7g,key:"Have the teachers in your courses been responsive to yours questions or queries on Slack, Google Classrooms or other platforms?",hasO:false,func:"rFilter",type:"equal",classes:["Yes","No"]},
        {normalized:[],crunchedData:[],c:d8c,g:gs.d8g,key:"Do you have any problems playing the lecture videos?",hasO:true,func:"rFilter",type:"equal",classes:["No problems","The videos don't load properly at least 50% of the time.","The videos never load properly."]},
        {normalized:[],crunchedData:[],c:d9c,g:gs.d9g,key:"Did you have any problems completing your buX quizzes? Check all that apply",hasO:true,func:"cFilter",type:"includes",classes:["No problems in general","There was a significant delay in opening the quiz panels","Could not complete my quizzes due to a lack of time","Did not take any quizzes yet","Experienced Internet problems","Experienced problems due to loadshedding","Experienced device (computer, mobile, tablet, etc.) problems"]},
        {normalized:[],crunchedData:[],c:d10c,g:gs.d10g,key:"Were you able to submit your assignments? ",hasO:true,func:"rFilter",type:"equal",classes:["Submitted without any issues","Long delay in uploading/submitting assignments at least 50% of the time","Could not submit my assignments despite multiple attempts","Could not submit again to correct earlier submissions","Have not tried to submit assignments yet"]},
        {normalized:[],crunchedData:[],c:d11c,g:gs.d11g,key:"On a scale of 1-5, how comfortable are you with using  buX? ",hasO:false,func:"rFilter",type:"starts",classes:["1","2","3","4","5"]},
        {normalized:[],crunchedData:[],c:d12c,g:gs.d12g,key:"On a scale of 1-5, how fast is buX? ",hasO:false,func:"rFilter",type:"starts",classes:["1","2","3","4","5"]},
        {normalized:[],crunchedData:[],c:d13c,g:gs.d13g,key:"There has been misinformation about the pop/micro-quizzes.  Has it been made clear to you that these quizzes are ungraded?  That they may only be used for a participation grade and are meant to only benefit you? ",hasO:false,func:"rFilter",type:"equal",classes:["Yes","No"]},
        {normalized:[],crunchedData:[],c:d14c,g:gs.d14g,key:"Studying even during a regular semester is stressful. What is making an online semester more stressful than a regular in-class semester? Check all that apply",hasO:true,func:"cFilter",type:"includes",classes:["Ungraded quizzes","Graded quizzes","Graded assignments","Watching short duration lectures (around 15 minutes)","Anxiety about the midterm","Anxiety about grades in general","Four 15 minute online videos contain more content than a 1hr 20 minute in-class lecture.","Not being able to go anywhere is making online learning stressful.","A lot of different platforms are being used for live classes."]},
        {normalized:[],crunchedData:[],c:d15c,g:gs.d15g,key:"Which of the following is most appropriate about the online classes?",hasO:false,func:"rFilter",type:"equal",classes:["Online classes are giving me the same amount of stress as in-class learning.","Online classes are giving me less stress than in-class learning.","Online classes are giving me a bit more stress than in-class learning.","Online classes are giving me a lot more stress."]},
        {normalized:[],crunchedData:[],c:d16c,g:gs.d16g,key:"When cheating becomes common, the reputation of a university and its graduates is devalued.  For example, the CSE Department hired 50+ graduates in Spring 2020 because it believes in its graduates. If BracU students develop the reputation of cheating, then nobody, not even Brac University will believe in its graduates.  To prevent cheating from becoming common and harming BracU  students' reputations, please select the policy that you think is fair.  (This is an anonymous survey)",hasO:true,func:"rFilter",type:"equal",classes:["Nothing should happen if the student is sorry.  They should just apologize and promise not do it again.","Students who cheat should receive ZERO for the assessment","Students who cheat should receive an F for the course.","Students who cheat should be suspended for one semester.","Students who cheat should be suspended for three semesters.","Students who cheat should be expelled from the university."]},
        {normalized:[],crunchedData:[],c:d17c,g:gs.d17g,key:"What do you like about buX?",hasO:true,func:"cFilter",type:"includes",classes:["buX forces faculty to use a single system to deliver recorded lectures.","I can genuinely watch lectures whenever and wherever I want.","The material is easier to digest when the lectures are broken into about 15 minute chunks.","When lectures are in about 15 minute pieces, teachers stay on topic / gossip less.","buX tries to keep students engaged with (ungraded) small quizzes after each lecture.","buX emphasizes recorded lectures instead of live online lectures.","I like that fact that buX works. Despite the initial problems, it works.","Live consultations during official class times are optional.","I have plenty of time to ask questions because official class times are discussion sessions.","There are supplemental materials e.g. solution classes, Bangla overviews and class notes.","buX technical support is responsive."]},
        {normalized:[],crunchedData:[],c:d18c,g:gs.d18g,key:"What do you dislike about buX?",hasO:true,func:"cFilter",type:"includes",classes:["I dislike online classes in general.","Less discussions/interactions with prerecorded lectures than with Google Meet/Zoom-only classes.","Lectures divided into 15 minutes is harder to digest as teachers can't waste time gossiping.","No strict policy requiring faculty to use a single live platform such as Google Meet, etc..","The sound quality of many of my lectures is poor.","Faculty spend a lot of time talking about a single slide in their online lectures.","Even if supplementary materials are optional e.g. problem solving classes, etc, there are too much supplementary materials.","Many online lectures are poorly made."]},
        {normalized:[],crunchedData:[],c:d19c,g:gs.d19g,key:"There is a large variation in the quality of online lectures.  Check all the boxes that apply.",hasO:false,func:"cFilter",type:"includes",classes:["Some of my online lectures have been very good.","Some of my online lectures have been very bad.","Most of my lectures have been acceptable.","Most of my lectures have been poor.","Most of my lectures have been good."]},
        {normalized:[],crunchedData:[],c:d20c,g:gs.d20g,key:"Many teachers have spent huge amounts of time and effort preparing prerecorded lectures. Check the boxes that apply.",hasO:true,func:"cFilter",type:"includes",classes:["It is clear that the faculty spent a lot of time preparing their online lectures.","My teachers need to work harder to make better lectures and/or quizzes.","My teachers expect us to show up for online consultations. Instead of teaching us the material using pre-recorded lectures, they expect us to learn the material from online consultations.","There is still no coordination between the faculty who make the micro quizzes and the faculty who make the lectures."]},
        {normalized:[],crunchedData:[],c:d21c,g:gs.d21g,key:"Which platform do you prefer for live consultations?   [1st choice]",hasO:false,func:"rFilter",type:"equal",classes:["Google Meet","Zoom","Discord","WhatsApp","YouTube","Slack","Facebook Messenger","Facebook Live"]},
        {normalized:[],crunchedData:[],c:d22c,g:gs.d22g,key:"Which platform do you prefer for live consultations?   [2nd choice]",hasO:false,func:"rFilter",type:"equal",classes:["Google Meet","Zoom","Discord","WhatsApp","YouTube","Slack","Facebook Messenger","Facebook Live"]},
        {normalized:[],crunchedData:[],c:d23c,g:gs.d23g,key:"Which platform do you prefer for live consultations?   [3rd choice]",hasO:false,func:"rFilter",type:"equal",classes:["Google Meet","Zoom","Discord","WhatsApp","YouTube","Slack","Facebook Messenger","Facebook Live"]},
        {normalized:[],crunchedData:[],c:d24c,g:gs.d24g,key:"Which communication platform do you prefer for notifications and discussions?   [1st choice]",hasO:false,func:"rFilter",type:"equal",classes:["Piazza","Slack","Google Classroom","Google Group","Discord","WhatsApp","Facebook Messenger","Email"]},
        {normalized:[],crunchedData:[],c:d25c,g:gs.d25g,key:"Which communication platform do you prefer for notifications and discussions?   [2nd choice]",hasO:false,func:"rFilter",type:"equal",classes:["Piazza","Slack","Google Classroom","Google Group","Discord","WhatsApp","Facebook Messenger","Email"]},
        {normalized:[],crunchedData:[],c:d26c,g:gs.d26g,key:"Which communication platform do you prefer for notifications and discussions?   [3rd choice]",hasO:false,func:"rFilter",type:"equal",classes:["Piazza","Slack","Google Classroom","Google Group","Discord","WhatsApp","Facebook Messenger","Email"]},
        {normalized:[],crunchedData:[],c:d27c,g:gs.d27g,key:"What type of assessments do you prefer for midterm exams? [1st choice]",hasO:false,func:"rFilter",type:"equal",classes:["Assignment-type midterms","Viva-based midterms","Presentations","Group Project","4 hour time to begin & finish online exam","Proctored exams with webcam monitoring","In class midterms"]},
        {normalized:[],crunchedData:[],c:d28c,g:gs.d28g,key:"What type of assessments do you prefer for midterm exams? [2nd choice]",hasO:false,func:"rFilter",type:"equal",classes:["Assignment-type midterms","Viva-based midterms","Presentations","Group Project","4 hour time to begin & finish online exam","Proctored exams with webcam monitoring","In class midterms"]},
        {normalized:[],crunchedData:[],c:d29c,g:gs.d29g,key:"What type of assessments do you prefer for midterm exams? [3rd choice]",hasO:false,func:"rFilter",type:"equal",classes:["Assignment-type midterms","Viva-based midterms","Presentations","Group Project","4 hour time to begin & finish online exam","Proctored exams with webcam monitoring","In class midterms"]},
        {normalized:[],crunchedData:[],c:d30c,g:gs.d30g,key:"Online classes requires faculty to trust students.  If someone gave you the answers to an assessment would you violate this trust by cheating on which of the followings?: (This is an anonymous survey)",hasO:false,func:"cFilter",type:"includes",classes:["Ungraded quiz","Graded quiz","Assignment","Midterm","Final","None of the above"]}];
let qd = [{normalized:[],crunchedData:[],c:d31c,g:gs.d31g,key:"What is the maximum number of hours you can invest per day to attend online classes (lecture videos, mini quizzes etc) without becoming very stressed out?",func:"nFilter",classes:["<2","2","3","4","5","6",">6"]},
        {normalized:[],crunchedData:[],c:d32c,g:gs.d32g,key:"In your opinion, what do you think should be the minimum \"number of days\" an assignment should be due after the material has been taught?  ",func:"nFilter",classes:["<7", "7", "8-10", "11-14", ">15"]}];

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) { this.splice(ax, 1); }}
    return this;
};

function showNew(id) {
    $($('#'+id).val()).collapse('toggle');
}

window.onload = function () {
    [["yearly-segregation", "y"], ["load-segregation", 'l'], ["dept-segregation", "d"]].forEach(element => {
        let parent = document.getElementById(element[0]);
        for (let i = 1; i <= 32; i++) { parent.innerHTML += '<div class="card bg-dark"><div id="'+element[1]+'d'+i+'" class="collapse'+(i == 1 ? ' show':'')+'" aria-labelledby="'+element[1]+'q'+i+'" data-parent="#'+element[0]+'"><div class="card-body"><canvas id="'+element[1]+'d'+i+'c" class="hidden" width="100%" height="'+(element[1] == 'y' ? '70%':(element[1] == 'd' ? '100%':'80%'))+'"></canvas></div></div></div>'; }
    });
    createContexts();
}

function createContexts() {
    d1c.push(document.getElementById('yd1c').getContext('2d')),d1c.push(document.getElementById('ld1c').getContext('2d')),d1c.push(document.getElementById('dd1c').getContext('2d')),d2c.push(document.getElementById('yd2c').getContext('2d')),d2c.push(document.getElementById('ld2c').getContext('2d')),d2c.push(document.getElementById('dd2c').getContext('2d'));
    d3c.push(document.getElementById('yd3c').getContext('2d')),d3c.push(document.getElementById('ld3c').getContext('2d')),d3c.push(document.getElementById('dd3c').getContext('2d')),d4c.push(document.getElementById('yd4c').getContext('2d')),d4c.push(document.getElementById('ld4c').getContext('2d')),d4c.push(document.getElementById('dd4c').getContext('2d'));
    d5c.push(document.getElementById('yd5c').getContext('2d')),d5c.push(document.getElementById('ld5c').getContext('2d')),d5c.push(document.getElementById('dd5c').getContext('2d')),d6c.push(document.getElementById('yd6c').getContext('2d')),d6c.push(document.getElementById('ld6c').getContext('2d')),d6c.push(document.getElementById('dd6c').getContext('2d'));
    d7c.push(document.getElementById('yd7c').getContext('2d')),d7c.push(document.getElementById('ld7c').getContext('2d')),d7c.push(document.getElementById('dd7c').getContext('2d')),d8c.push(document.getElementById('yd8c').getContext('2d')),d8c.push(document.getElementById('ld8c').getContext('2d')),d8c.push(document.getElementById('dd8c').getContext('2d'));
    d9c.push(document.getElementById('yd9c').getContext('2d')),d9c.push(document.getElementById('ld9c').getContext('2d')),d9c.push(document.getElementById('dd9c').getContext('2d')),d10c.push(document.getElementById('yd10c').getContext('2d')),d10c.push(document.getElementById('ld10c').getContext('2d')),d10c.push(document.getElementById('dd10c').getContext('2d'));
    d11c.push(document.getElementById('yd11c').getContext('2d')),d11c.push(document.getElementById('ld11c').getContext('2d')),d11c.push(document.getElementById('dd11c').getContext('2d')),d12c.push(document.getElementById('yd12c').getContext('2d')),d12c.push(document.getElementById('ld12c').getContext('2d')),d12c.push(document.getElementById('dd12c').getContext('2d'));
    d13c.push(document.getElementById('yd13c').getContext('2d')),d13c.push(document.getElementById('ld13c').getContext('2d')),d13c.push(document.getElementById('dd13c').getContext('2d')),d14c.push(document.getElementById('yd14c').getContext('2d')),d14c.push(document.getElementById('ld14c').getContext('2d')),d14c.push(document.getElementById('dd14c').getContext('2d'));
    d15c.push(document.getElementById('yd15c').getContext('2d')),d15c.push(document.getElementById('ld15c').getContext('2d')),d15c.push(document.getElementById('dd15c').getContext('2d')),d16c.push(document.getElementById('yd16c').getContext('2d')),d16c.push(document.getElementById('ld16c').getContext('2d')),d16c.push(document.getElementById('dd16c').getContext('2d'));
    d17c.push(document.getElementById('yd17c').getContext('2d')),d17c.push(document.getElementById('ld17c').getContext('2d')),d17c.push(document.getElementById('dd17c').getContext('2d')),d18c.push(document.getElementById('yd18c').getContext('2d')),d18c.push(document.getElementById('ld18c').getContext('2d')),d18c.push(document.getElementById('dd18c').getContext('2d'));
    d19c.push(document.getElementById('yd19c').getContext('2d')),d19c.push(document.getElementById('ld19c').getContext('2d')),d19c.push(document.getElementById('dd19c').getContext('2d')),d20c.push(document.getElementById('yd20c').getContext('2d')),d20c.push(document.getElementById('ld20c').getContext('2d')),d20c.push(document.getElementById('dd20c').getContext('2d'));
    d21c.push(document.getElementById('yd21c').getContext('2d')),d21c.push(document.getElementById('ld21c').getContext('2d')),d21c.push(document.getElementById('dd21c').getContext('2d')),d22c.push(document.getElementById('yd22c').getContext('2d')),d22c.push(document.getElementById('ld22c').getContext('2d')),d22c.push(document.getElementById('dd22c').getContext('2d'));
    d23c.push(document.getElementById('yd23c').getContext('2d')),d23c.push(document.getElementById('ld23c').getContext('2d')),d23c.push(document.getElementById('dd23c').getContext('2d')),d24c.push(document.getElementById('yd24c').getContext('2d')),d24c.push(document.getElementById('ld24c').getContext('2d')),d24c.push(document.getElementById('dd24c').getContext('2d'));
    d25c.push(document.getElementById('yd25c').getContext('2d')),d25c.push(document.getElementById('ld25c').getContext('2d')),d25c.push(document.getElementById('dd25c').getContext('2d')),d26c.push(document.getElementById('yd26c').getContext('2d')),d26c.push(document.getElementById('ld26c').getContext('2d')),d26c.push(document.getElementById('dd26c').getContext('2d'));
    d27c.push(document.getElementById('yd27c').getContext('2d')),d27c.push(document.getElementById('ld27c').getContext('2d')),d27c.push(document.getElementById('dd27c').getContext('2d')),d28c.push(document.getElementById('yd28c').getContext('2d')),d28c.push(document.getElementById('ld28c').getContext('2d')),d28c.push(document.getElementById('dd28c').getContext('2d'));
    d29c.push(document.getElementById('yd29c').getContext('2d')),d29c.push(document.getElementById('ld29c').getContext('2d')),d29c.push(document.getElementById('dd29c').getContext('2d')),d30c.push(document.getElementById('yd30c').getContext('2d')),d30c.push(document.getElementById('ld30c').getContext('2d')),d30c.push(document.getElementById('dd30c').getContext('2d'));
    d31c.push(document.getElementById('yd31c').getContext('2d')),d31c.push(document.getElementById('ld31c').getContext('2d')),d31c.push(document.getElementById('dd31c').getContext('2d')),d32c.push(document.getElementById('yd32c').getContext('2d')),d32c.push(document.getElementById('ld32c').getContext('2d')),d32c.push(document.getElementById('dd32c').getContext('2d'));
}

$("input#survey-response").change(function () {
    readFile('survey-response');
});

function readFile(file) {
    let fileInput = document.getElementById(file);
    let out = document.getElementById(file + '-out');
    out.classList.add('text-center');
    out.innerHTML = '<div class="mt-2 spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div>';
    setTimeout(() => {
        let reader = new FileReader();

        reader.onload = function () {
            exelToJSON(reader.result, out);
        };

        reader.readAsBinaryString(fileInput.files[0]);
    }, 100);
};

function exelToJSON(data, out) {
    let cfb = XLSX.read(data, {type: 'binary'});
        
    cfb.SheetNames.forEach(function(sheetName) {   
        let oJS = XLS.utils.sheet_to_json(cfb.Sheets[sheetName]), result = [], headers = Object.keys(oJS[0]);
        let table = '<table class="table table-hover table-dark text-white pane"><thead><tr><th scope="col">Headers</th></tr></thead><tbody>';

        headers.forEach(element => {
            table += '<tr><td>' + element + '</td></tr>';
        });

        table += '</tbody></table>';

        for (let index = 0; index < oJS.length; index++) {
            let imm = {};

            headers.forEach(key => {
                imm[key] = oJS[index][key] != undefined ? oJS[index][key].toString() : oJS[index][key];
            });

            result.push(imm);
        }

        fileData = result;
        out.innerHTML = table;
        out.classList.remove('text-center');
        segregate();
    });
}

function pluck(objs, name) {
    var sol = [];
    for(var i in objs){ if(objs[i].hasOwnProperty(name)){ sol.push(objs[i][name]); }}
    return sol;
}

function deepCopy(inObject) {
    let outObject, value, key;
    if (typeof inObject !== "object" || inObject === null) { return inObject; }
    outObject = Array.isArray(inObject) ? [] : {};
    for (key in inObject) { value = inObject[key]; outObject[key] = deepCopy(value); }
    return outObject;
}

function countType(part, q, c, type = null) {
    if (type == 'equal') {
        return part.filter(obj => obj[q] == c).length;
    } else if (type == 'starts') {
        return part.filter(obj => obj[q].startsWith(c)).length;
    } else {
        return part.filter(obj => obj[q].includes(c)).length;
    }
}

function countRange(part, q, c) {
    if (c.includes('<')) {
        return part.filter(obj => parseFloat(obj[q]) < parseFloat(c.replace("<", ""))).length;
    } else if (c.includes('>')) {
        return part.filter(obj => parseFloat(obj[q]) > parseFloat(c.replace(">", ""))).length;
    } else if (c.includes('-')) {
        return part.filter(obj => parseFloat(obj[q]) >= parseFloat(c.split("-")[0]) && parseFloat(obj[q]) <= parseFloat(c.split("-")[1])).length;
    } else {
        return part.filter(obj => parseFloat(obj[q]) == parseFloat(c)).length;
    }
}

function rGenOC(obj, q, classes, type = null) {
    let result = true;

    if (type == 'equal') {
        classes.forEach(c => { result = result && !(obj[q] == c); });
    } else if (type == 'starts') {
        classes.forEach(c => { result = result && !obj[q].startsWith(c) });
    } else {
        classes.forEach(c => { result = result && !obj[q].includes(c) });
    }

    return result;
}

function generateDS(dist, classes, length) {
    let ds = [];
    for (let index = 0; index < length; index++) { ds.push({label: classes[index], data: dist[index], backgroundColor: 'rgba('+barColors[index%barColors.length]+', 0.2)', borderColor: 'rgba('+barColors[index%barColors.length]+', 1)', borderWidth: 1}); }
    return ds;
}

function genDSObj(dist, className, index) {
    return {label: className, data: dist[index], backgroundColor: 'rgba('+barColors[index%barColors.length]+', 0.2)', borderColor: 'rgba('+barColors[index%barColors.length]+', 1)', borderWidth: 1};
}

function normalize(dist, seg) {
    let norm = [], normImm = [];
    dist.forEach(imm => {
        for (let i = 0; i < seg.length; i++) {
            normImm.push(parseFloat(imm[i]*100/seg[i].length).toFixed(2)); }
        norm.push(normImm); normImm = []; });
    return norm;
}

function segregate() {
    yearlySegregation.push(deepCopy(fileData.filter(obj => obj["Which semester are you in"] <= 3 )));
    yearlySegregation.push(deepCopy(fileData.filter(obj => obj["Which semester are you in"] > 3 && obj["Which semester are you in"] <= 6 )));
    yearlySegregation.push(deepCopy(fileData.filter(obj => obj["Which semester are you in"] > 6 && obj["Which semester are you in"] <= 9 )));
    yearlySegregation.push(deepCopy(fileData.filter(obj => obj["Which semester are you in"] > 9 && obj["Which semester are you in"] <= 12 )));
    yearlySegregation.push(deepCopy(fileData.filter(obj => obj["Which semester are you in"] > 12 )));

    for (let index = 0; index < 5; index++) { loadSegregation.push(deepCopy(fileData.filter(obj => obj["How many courses are you taking?"] == (index + 1)))); }
    loadSegregation.push(deepCopy(fileData.filter(obj => rGenOC(obj, "How many courses are you taking?", ["1", "2", "3", "4", "5"], 'equal'))));
    dClasses.forEach(dept => { deptSegregation.push(deepCopy(fileData.filter(obj => obj["Department/School/Institute/Center"] == dept)));});
    analyze();
}

function analyze() {
    qs.forEach(question => {
        window[question.func](yearlySegregation, question.c[0], yClasses, question.key, question.classes, question.g, question.type, question.hasO);
        window[question.func](loadSegregation, question.c[1], lClasses, question.key, question.classes, question.g, question.type, question.hasO);
        window[question.func](deptSegregation, question.c[2], dClasses, question.key, question.classes, question.g, question.type, question.hasO);});
    qd.forEach(question => {
        window[question.func](yearlySegregation, question.c[0], yClasses, question.key, question.classes, question.g);
        window[question.func](loadSegregation, question.c[1], lClasses, question.key, question.classes, question.g);
        window[question.func](deptSegregation, question.c[2], dClasses, question.key, question.classes, question.g);});
}

function rFilter(seg, canv, segLabels, q, classes, g, type, hasO = false) {
    let dist = [], imm = [], target = qs.find(obj => obj.key == q);
    classes.forEach(c => {
        seg.forEach(part => {
            imm.push(countType(part, q, c, type)); });
        dist.push(imm); imm = []; });
    if (hasO) { seg.forEach(part => { imm.push(part.filter(obj => rGenOC(obj, q, classes, type)).length) }); dist.push(imm); classes.push('Others'); }
    target.crunchedData.push({labels: segLabels, datasets: generateDS(dist, classes, classes.length)});
    target.normalized.push({labels: segLabels, datasets: generateDS(normalize(dist, seg), classes, classes.length)});
    g.push(new Chart(canv, {type: 'horizontalBar', data: target.crunchedData[target.crunchedData.length - 1]}));
    if (hasO) { classes.remove('Others'); }
}

function cFilter(seg, canv, segLabels, q, classes, g, type, hasO = false) {
    let dist = [], imm = [], target = qs.find(obj => obj.key == q);
    classes.forEach(c => {
        seg.forEach(part => {
            imm.push(countType(part, q, c, type));
            if (hasO) { part.filter(obj => obj[q].includes(c)).forEach(row => { row[q] = row[q].replace(c, ""); }); } });
        dist.push(imm); imm = []; });
    if (hasO) {
        seg.forEach(part => {
            part.forEach(row => {
                row[q] = row[q].replace(/,/g, "");
                row[q] = row[q].replace(/\s+/g, " "); })
            imm.push(part.filter(obj => obj[q].length > 0).length) });
        dist.push(imm); classes.push("Others"); }
    target.crunchedData.push({labels: segLabels, datasets: generateDS(dist, classes, classes.length)});
    target.normalized.push({labels: segLabels, datasets: generateDS(normalize(dist, seg), classes, classes.length)});
    g.push(new Chart(canv, {type: 'horizontalBar', data: target.crunchedData[target.crunchedData.length - 1]}));
    if (hasO) { classes.remove('Others'); }
}

function toggleDataStat(stat) {
    if (stat != dataStat) {
        qs.forEach(q => {
            for (let i = 0; i < q.g.length; i++) {
                q.g[i].data = q[stat][i];
                q.g[i].update(); }});
        qd.forEach(q => {
            for (let i = 0; i < q.g.length; i++) {
                q.g[i].data = q[stat][i];
                q.g[i].update(); }});
        document.getElementById(dataStat).classList.remove('active'); document.getElementById(stat).classList.add('active'); dataStat = stat;
    }
}

function nFilter(seg, canv, segLabels, q, classes, g) {
    let dist = [], imm = [], target = qd.find(obj => obj.key == q);
    classes.forEach(c => {
        seg.forEach(part => {
            imm.push(countRange(part, q, c)); });
        dist.push(imm); imm = []; });
    target.crunchedData.push({labels: segLabels, datasets: generateDS(dist, classes, classes.length)});
    target.normalized.push({labels: segLabels, datasets: generateDS(normalize(dist, seg), classes, classes.length)});
    g.push(new Chart(canv, {type: 'horizontalBar', data: target.crunchedData[target.crunchedData.length - 1]}));
}