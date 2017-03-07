var introduction = '<center>Welcome to the "XXX"!</center></br></br></br>Please do this task in one of the following web-browsers: Google Chrome, Firefox, or Safari.';

var ic = 'HERE COMES THE INFORMED CONSENT';

// transition to demographics1
var transition_en = 'The first part of the experiment is finished. Please fill in your details below.';

// manipulations
var general_instructions1 = 'general_instructions1';

var instructions_truthful1 = 'instructions_truthful1';
var instructions_deceptive1 = 'instructions_deceptive1';

var pre_input_truthful1 = 'pre_input_truthful1';
var pre_input_deceptive1 = 'pre_input_deceptive1';

var instructions_inputfield_truthful1 = 'instructions_inputfield_truthful1';
var instructions_inputfield_deceptive1 = 'instructions_inputfield_deceptive1';

var instructions_truthful2 = 'instructions_truthful2';
var instructions_deceptive2 = 'instructions_deceptive2';

var pre_input_truthful2 = 'pre_input_truthful2';
var pre_input_deceptive2 = 'pre_input_deceptive2';

var instructions_inputfield_truthful2 = 'instructions_inputfield_truthful2';
var instructions_inputfield_deceptive2 = 'instructions_inputfield_deceptive2';

var instructions_pastweekend2 = 'Please indicate which activities you carried out last weekend. You can select several options from the list below (scroll down to see all options). You can do this by pressing the Ctrl (Windows) or Cmd (Mac) button while simultaneously clicking with your mouse on the options. <br><br> In the second field you can indicate what you absolutely did not do last weekend. Please select at least three options here. ';

var slider_text_pastweekend_do = 'Please indicate for the activity(ies) that you did do last weekend how often you have carried them out in the past.</br><i>You may need to scroll down to see all sliders.</i>';
var slider_text_pastweekend_notdo = 'Please indicate for the activities that you did not do last weekend how often you have carried them out in the past.</br><i>You may need to scroll down to see all sliders.</i>';

var instructions_nextweekend2 = 'Please indicate what you are going to do next weekend. You can select several options from the list below (scroll down to see all options). You can do this by pressing the Ctrl (Windows) or Cmd (Mac) button while simultaneously clicking with your mouse on the options.<br><br> In the second field you can indicate what you are absolutely not going to do next weekend. Please select at least three activities that you will not carry out next weekend.';

var slider_text_nextweekend_do = 'Please indicate for the activity(ies) below how often you have carried them out in the past.<br><br>Also indicate how certain it is that you will carry out these activity(ies) next weekend, and how well you have prepared the activity(ies) at this moment already.</br><i>You may need to scroll down to see all sliders.</i>';
var slider_text_nextweekend_notdo = 'Please indicate for the activities below how often you have carried them out in the past.<br><br> Also indicate how certain it is that you will truly not carry out these activities next weekend. </br><i>You may need to scroll down to see all sliders.</i>';

var instruction_deceptive_past = 'In a few minutes we ask you to write a statement about your activities from last weekend. It is important that you will <i>lie</i> about what you did. You can find the activity that you will write about below. When writing your statement, pretend that you carried out this activity during your last weekend. You have to make up a further story around this activity yourself. Make sure that you only write about the activity that was assigned to you. Make your story as detailed, plausible and convincing as possible.<br><br>Click on the arrow to proceed.';

var instructions_truthful_past = 'In a few minutes we ask you to write a statement about your activities from last weekend. It is important that you will <i>tell the truth</i> about what you did. You can find the activity that you will write about below. The selection is based on the information you gave previously. Make sure that you only write about this activity. Make your story as detailed, plausible and convincing as possible.<br><br>Click on the arrow to proceed.';

var instructions_deceptive_future = 'In a few minutes we ask you to write a statement about your plans for next weekend. It is important that you will <i>lie</i> about what you are going to do. You can find the activity that you will have to lie about below. When writing your statement, pretend that you will carry out this activity during your next weekend. You have to make up a further story around this activity yourself. Make sure that you only write about the activity that was assigned to you. Make your story as detailed, plausible and convincing as possible.</br></br>Click on the arrow to proceed.';

var instructions_truthful_future = 'In a few minutes we ask you to write a statement about your plans for next weekend. It is important that you will <i>tell the truth</i> about what you are going to do. You can find the activity that you will have to write about below. The selection is based on the information you gave previously. Make sure that you only write about this activity. Make your story as detailed, plausible and convincing as possible.<br><br>Click on the arrow to proceed.';


var instructions_modelstatement_en = '<i>Previous research has suggested that many people find it difficult to estimate how many details they have to include when writing a statement. For this reason, you will first read an example of a detailed statement. Read this statement carefully and pay attention to the way the author included details in her story. After reading this, you will have to answer a few questions about the story. Only after answering these questions correctly, you will be able to proceed.</i>';

// pre_input instructions
var pre_input_deceptive_future_en = 'As a reminder: your task is to <i>lie</i> about your upcoming weekend.</br>You can find the activity that you will tell a lie about below.</br>You have to make up a further story around this activity yourself.</br></br>Please take a couple of minutes to prepare your statement.</b> Remember to make your story as detailed, plausible and convincing as possible.</br></br>Experts in deception detection will later read your statement and decide whether they believe you or not. If they believe you, you will receive <b>an additional 0.50GBP as bonus.</b></br></br>When you are finished with your preparation, click on the arrow to proceed to writing your statement.';
var pre_input_truthful_future_en = 'As a reminder: your task is to <i>tell the truth</i> about your upcoming weekend.</br>You can find the activity that you will have to write about below.</br></br>Please take a couple of minutes to prepare your statement.</br> Remember to make your story as detailed, plausible and convincing as possible.</br></br>Experts in deception detection will later read your statement and decide whether they believe you or not. If they believe you, you will receive <b>an additional 0.50GBP as bonus.</b></br></br>When you are finished with your preparation, click on the arrow to proceed to writing your statement.';

var pre_input_deceptive_past_en = 'As a reminder: your task is to <i>lie</i> about your past weekend.</br>You can find the activity that you will tell a lie about below.</br>You have to make up a further story around this activity yourself.</br></br>Please take a couple of minutes to prepare your statement.</br> Remember to make your story as detailed, plausible and convincing as possible.</br></br>Experts in deception detection will later read your statement and decide whether they believe you or not. If they believe you, you will receive <b>an additional 0.50GBP as bonus.</b></br></br>When you are finished with your preparation, click on the arrow to proceed to writing your statement.';
var pre_input_truthful_past_en = 'As a reminder: your task is to <i>tell the truth</i> about your past weekend.</br>You can find the activity that you will have to write about below.</br></br>Please take a couple of minutes to prepare your statement.</br> Remember to make your story as detailed, plausible and convincing as possible.</br></br>Experts in deception detection will later read your statement and decide whether they believe you or not. If they believe you, you will receive <b>an additional 0.50GBP as bonus.</b></br></br>When you are finished with your preparation, click on the arrow to proceed to writing your statement.';

// input field
var instructions_inputfield_past_en = 'Now write a statement about <b>what you did last weekend</b> as instructed. Remember to write only about the activity that was assigned to you. Keep the detailed story of the model statement in mind when writing your own story. <br><br> Do your best. If our raters believe your story, you will receive <b>0.50GBP extra</b>';
var instructions_inputfield_future_en = 'Now write a statement about your <b>plans for next weekend</b> as instructed. Remember to write only about the activity that was assigned to you. Keep the detailed story of the model statement in mind when writing your own story. <br><br> Do your best. If our raters believe your story, you will receive <b>0.50GBP extra</b>';

// manipulation check
var manipulation_check_en = 'Thank you for providing your statement. For the validity of this research, it is important for us to know to whether you correctly understood your task, to what extent you wrote a truthful statement or not, and how motivated you were. Please answer the questions below honestly.</br><i>Scroll down to see all sliders.</i>';

// outro
var debriefing_nl = '';
var debriefing_en = '';

var outro_en = 'Your participation code: <span id=partcode style="color: red">9871NO</span></br></br>' +
    '<span id="debr">' + debriefing_en + '</span></br></br>' +
    'In order to validate your participation, it is necessary that you provide your Prolific ID below in the left hand-field and confirm your participation code on the right. ' +
    'The allocation of extra 0.50GBP for believable statements will happen directly after we finished data collection. ' +
    'If you have any questions about this study, please contact us via <a href="mailto:verbaldeceptiondetection@gmail.com?Subject=Online%20Experiment" target="_top">verbaldeceptiondetection@gmail.com</a>' +
    '<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="24" style="text-align: center; left: 25%; top: 85%; height: 10%; width: 25%;" placeholder="YOUR PROLIFIC ID">' +
    '<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="6" size="16" style="text-align: center; left: 75%; top: 85%; height: 10%; width: 25%; color: red" placeholder="YOUR PARTICIPATION CODE">';

// credits
var credits = '<div id="credits">' +
    'University of Amsterdam // Bennett Kleinberg: <a href="mailto:b.a.r.kleinberg@uva.nl?Subject=Online%20Experiment" target="_top">b.a.r.kleinberg@uva.nl</a>' +
    '</div>';
